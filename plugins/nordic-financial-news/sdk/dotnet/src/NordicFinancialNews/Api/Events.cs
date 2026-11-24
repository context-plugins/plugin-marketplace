using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using NordicFinancialNews.Core;
using NordicFinancialNews.Core.Exceptions;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Core.Request;
using NordicFinancialNews.Core.Response;
using NordicFinancialNews.Errors;
using NordicFinancialNews.Models;
using NordicFinancialNews.Requests.Events;

namespace NordicFinancialNews.Api;

public sealed class Events
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Events(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1EventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1EventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a paginated list of Events. An event groups the articles reporting a single real-world development (an earnings report, an M&amp;A announcement, a dividend, an executive change, and so on). Sorted by when the event was first reported, most recent first. An event is only returned if at least one of its live member articles survives your plan's age and source restrictions. This is the same visibility rule the event feed on the website uses. If none survive, the event does not appear at all. <c>GET /api/v1/events/:id</c> distinguishes that case from an event your plan can see but whose full coverage it cannot (see below). ## Merges and removals
    /// Events sometimes merge (two events turn out to describe the same development) or are removed (no live articles remain, or the event was found to be incorrect). Both are terminal. The event never reappears in a normal list, and <c>GET /api/v1/events/:id</c> on one returns a <b>minimal tombstone</b>: <c>id</c>, <c>status</c>, <c>merged_into</c> (the surviving event's <c>id</c>, when merged), and <c>updated_at</c> only. A tombstone carries no title, summary, counts or id arrays. Poll with <c>updated_after</c> to learn about merges and removals. Tombstones for events that changed since your watermark are included in that sync walk (uncapped, on every plan), which is otherwise the only way to learn that an event you previously fetched is gone. They are never returned by the default list. A tombstone still respects your event-grain filters: <c>company</c>, <c>ticker</c>, <c>exchange</c>, <c>index</c>, <c>sector</c>, <c>listed</c>, <c>event_type</c>, <c>significance</c>, <c>watchlist</c>, <c>first_reported_after</c>/<c>before</c>, and <c>last_article_after</c>/<c>before</c>. A merged event that involved the company you filtered by still surfaces its tombstone. Those filters are checked against the tombstone's companies as they are now. With <c>listed</c>, a tombstone whose only listed company was delisted or stopped appearing in the API's company data before the merge or removal no longer matches, so it is not returned. Poll without <c>listed</c> for full-fidelity tombstone coverage. On <c>exchange</c>, <c>market</c>, <c>domicile</c>, <c>index</c>, <c>sector</c> and <c>listed</c>, a merged or removed commentary event's tombstone is returned when any matching company is on it, in any role, so a filtered sync can include a tombstone for an event it never returned. A filtered sync returns events that match the filters now: an event that stops matching (for example, when its articles are no longer about a matching company) is not returned by it. Poll without those filters to see every change. A tombstone does not respect <c>country</c>, <c>category</c>, <c>sources</c>, <c>source_type</c> or <c>content_type</c>, which are article-grain filters. It has no live articles left to filter by, so poll without them for full-fidelity tombstone coverage. A merged event's <c>last_article_at</c> freezes at merge time, so <c>last_article_after</c>/<c>before</c> filter a tombstone against that frozen value rather than against when the merge happened. <c>window</c> cannot be used for sync polling at all (see below). ## Polling for updates
    /// Use <c>updated_after</c> with the timestamp of your last completed sync to fetch only events that have changed since. Results are then ordered by <c>updated_at</c> ascending and cursor-paginated: follow <c>pagination.next_cursor</c>, resending the same <c>updated_after</c>, until it is null. Advance your stored timestamp only once every page is drained. A merge takes the earlier of the two <c>first_reported_at</c> values, so it only ever moves the surviving event earlier in the default sort. Under the default (non-sync) ordering a cursor walk can therefore re-emit a row you have already seen, but it can never skip one. Treat the walk as at-least-once and dedupe by <c>id</c>. <c>company_ids</c>/<c>story_ids</c> membership can drift out from under <c>updated_after</c> without bumping <c>updated_at</c>: a company merge, a company leaving or rejoining the API's company data, or a story being withdrawn from an event you already hold. A change to a story itself is tracked, and bumps the parent event.
    /// </remarks>
    public Task<ApiV1EventsResponse> GetApiV1Events(GetApiV1EventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/events"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("fields", request.Fields),
                new Param("updated_after", request.UpdatedAfter),
                new Param("q", request.Q),
                new Param("mode", request.Mode),
                new Param("event_type", request.EventType),
                new Param("significance", request.Significance),
                new Param("ticker", request.Ticker),
                new Param("company", request.Company),
                new Param("country", request.Country),
                new Param("category", request.Category),
                new Param("sources", request.Sources),
                new Param("source_type", request.SourceType),
                new Param("content_type", request.ContentType),
                new Param("exchange", request.Exchange),
                new Param("market", request.Market),
                new Param("domicile", request.Domicile),
                new Param("index", request.Index),
                new Param("sector", request.Sector),
                new Param("listed", request.Listed),
                new Param("watchlist", request.Watchlist),
                new Param("first_reported_after", request.FirstReportedAfter),
                new Param("first_reported_before", request.FirstReportedBefore),
                new Param("last_article_after", request.LastArticleAfter),
                new Param("last_article_before", request.LastArticleBefore),
                new Param("window", request.Window),
                new Param("sort", request.Sort),
                new Param("related_to", request.RelatedTo),
                new Param("include_peripheral", request.IncludePeripheral),
            ],
            [new HeaderParam("If-None-Match", request.IfNoneMatch)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1EventsResponse>(),
            GetApiV1EventsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1EventsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1EventsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches a single event by ID.
    /// <para>
    /// A merged or removed event returns 200 with the minimal tombstone shape (see the list endpoint's description) rather than 404. The id still resolves; it carries no content. An event with no live member articles at all returns 404. An event whose live members exist but are all outside your plan's age/source restrictions returns 403 with an upgrade problem, distinct from the plain 404.
    /// </para>
    /// <para>
    /// Responses are cached with <c>ETag</c> and <c>Cache-Control: private, max-age=300</c>; send <c>If-None-Match</c> to receive a <c>304 Not Modified</c>. There is no <c>Last-Modified</c> here, for the same reason as <c>GET /api/v1/events</c>.
    /// </para>
    /// </remarks>
    public Task<ApiV1EventsResponse1> GetApiV1EventsById(GetApiV1EventsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/events/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("include_peripheral", request.IncludePeripheral)],
            [new HeaderParam("If-None-Match", request.IfNoneMatch)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1EventsResponse1>(),
            GetApiV1EventsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
