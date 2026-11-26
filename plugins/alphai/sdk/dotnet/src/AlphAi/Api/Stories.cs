using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AlphAi.Core;
using AlphAi.Core.Exceptions;
using AlphAi.Core.Models;
using AlphAi.Core.Request;
using AlphAi.Core.Response;
using AlphAi.Errors;
using AlphAi.Models;
using AlphAi.Requests.Stories;

namespace AlphAi.Api;

/// <summary>
/// Market events covered by two or more publishers, summarised from their sources.
/// </summary>
public sealed class Stories
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Stories(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Latest stories (cursor-paginated)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoriesPage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiStoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stories newest-first by the time of their latest article
    /// (<c>last_material_at</c>): stories with a published summary and
    /// <c>importance &gt;= 7</c>. Keyset pagination: omit <c>cursor</c> for the newest
    /// page, pass <c>next_cursor</c> back for the next (older) one; <c>null</c> means
    /// the end. Cursors are opaque; an invalid one is a 400. Archive depth
    /// is tiered as on the feeds — paging back past your plan's horizon
    /// (Free 30 days, Basic 90, Pro 180) returns 403 <c>archive_horizon</c>.
    /// <para>
    /// A story keeps moving up this list while articles keep joining it
    /// (<c>last_material_at</c> is the keyset), and its summary is rewritten as
    /// materials arrive, so re-reading a <c>story_id</c> later can return a
    /// different summary — <c>updated_at</c> says when the facts last changed.
    /// </para>
    /// </remarks>
    public Task<StoriesPage> GetApiStories(GetApiStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/stories/"),
            [],
            [new Param("cursor", request.Cursor), new Param("page_size", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoriesPage>(),
            GetApiStoriesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a story by its id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryLookup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiStoriesByStoryIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One story — the summary AlphAI wrote from its articles, the key facts
    /// each with the publisher it was read from and the <c>source_uid</c> of that
    /// article, the per-ticker read, the open questions — wrapped in a
    /// lookup <c>status</c>, because a <c>story_id</c> taken from an article row does
    /// not always name a current story:
    /// <para>
    /// * <c>found</c> — <c>story</c> is filled.
    /// * <c>merged</c> — this story was folded into another one; <c>redirect_to</c>
    /// is the surviving story's id. Fetch that one (a web page would 308).
    /// * <c>not_a_story</c> — the id belongs to an article that only one
    /// publisher carried, so there is no story to summarise; <c>article</c>
    /// names it (<c>/api/news/{uid}/</c>). An article's <c>story_id</c> resolves
    /// here for every row, so this is the normal answer for most of the
    /// feed: most events are carried by a single outlet.
    /// * An unknown id is a 404.
    /// </para>
    /// <para>
    /// <c>summary_state</c> tells you how to read the text: <c>published</c> (the
    /// summary covers every article the story had when it was written),
    /// <c>stale</c> (<c>new_materials</c> articles joined since; the rewrite is
    /// queued — the summaries are debounced, so a fast-moving story is
    /// rewritten minutes, not seconds, after each new article), or
    /// <c>preparing</c> (no summary yet: <c>title</c> is the lead article's headline
    /// and <c>summary</c> its collector summary; <c>key_facts</c>, <c>why_it_matters</c>,
    /// <c>ticker_takes</c> and <c>uncertainties</c> are empty). A story older than
    /// your plan's archive horizon (by <c>last_material_at</c>) is a 403
    /// <c>archive_horizon</c>, like a deep feed cursor.
    /// </para>
    /// <para>
    /// The summary is the model's own text, checked against the articles
    /// before publishing: every figure in it appears in a source, and no
    /// passage of more than a dozen words is copied from one. It is
    /// AI-generated financial information for research, not investment
    /// advice. Article bodies are never served; <c>materials</c> link to the
    /// publishers.
    /// </para>
    /// </remarks>
    public Task<StoryLookup> GetApiStoriesByStoryId(GetApiStoriesByStoryIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/stories/{story_id}/"),
            [new TemplateParam("story_id", request.StoryId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoryLookup>(),
            GetApiStoriesByStoryIdError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// A story's articles (cursor-paginated)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryMaterials"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiStoriesByStoryIdMaterialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every article behind a story, oldest first — the materials the
    /// summary was written from and the ones that joined after it. Same
    /// visibility as the feed (<c>relevance_score &gt;= 4</c>); each row carries its
    /// <c>uid</c> (open it with <c>/api/news/{uid}/</c>), publisher, publication time,
    /// the publisher's URL and its relevance score. A story's <c>key_facts</c>
    /// point into this list by <c>source_uid</c>. Keyset pagination with
    /// <c>cursor</c> / <c>next_cursor</c> as on <c>/api/stories/</c>; most stories fit one
    /// page. Only a current story (<c>status: found</c>) has materials: a merged
    /// or not-a-story id is a 404 here — resolve it through
    /// <c>/api/stories/{story_id}/</c> first.
    /// </remarks>
    public Task<StoryMaterials> GetApiStoriesByStoryIdMaterials(GetApiStoriesByStoryIdMaterialsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/stories/{story_id}/materials/"),
            [new TemplateParam("story_id", request.StoryId)],
            [new Param("cursor", request.Cursor), new Param("page_size", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoryMaterials>(),
            GetApiStoriesByStoryIdMaterialsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Top stories (last 48h)
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TopStories"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiStoriesTopError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The strongest stories of the trailing 48 hours, ranked: a story's
    /// <c>importance</c> plus a coverage bonus of <c>min(3, log2(publishers))</c>,
    /// minus one point per 12 hours since its key facts last changed
    /// (<c>updated_at</c>). One slot per ticker and two per no-ticker macro
    /// category, so one event cannot fill the list. Only stories with a
    /// published summary and <c>importance &gt;= 7</c> qualify. Fixed size of up to
    /// 50, no pagination; <c>ranking_version</c> names the formula so a change
    /// is visible, <c>as_of</c> is when the list was ranked.
    /// <para>
    /// Compared with <c>/api/news/trending/</c>: trending ranks single articles
    /// and collapses reprints; this ranks the stories themselves (two or
    /// more publishers), each with an AlphAI-written summary. A story's
    /// <c>story_id</c> is the same key an article row carries, so a trending
    /// item's <c>story_id</c> opens the story here.
    /// </para>
    /// </remarks>
    public Task<TopStories> GetApiStoriesTop(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/stories/top/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TopStories>(),
            GetApiStoriesTopError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
