using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Models;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Models;
using Audioscrape.Requests.Podcasts;

namespace Audioscrape.Api;

/// <summary>
/// Convenience alias for items where <c>source_type = 'podcast_episode'</c>. For multi-format integrations, prefer <c>/api/items</c>.
/// </summary>
public sealed class Podcasts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Podcasts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Podcast ranking history
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="PodcastRankingHistoryEntry"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPodcastRankingHistoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the historical chart positions for a single podcast across countries and platforms, most recent first. Useful for tracking a show's performance trajectory over time.
    /// </remarks>
    public Task<IReadOnlyList<PodcastRankingHistoryEntry>> GetPodcastRankingHistory(GetPodcastRankingHistoryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/podcasts/{podcast_id}/rankings"),
            [new TemplateParam("podcast_id", request.PodcastId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<PodcastRankingHistoryEntry>>(),
            GetPodcastRankingHistoryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get podcast detail
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PodcastDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPublicPodcastError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns podcast metadata + up to 20 most recent episodes. The path parameter accepts either a numeric ID or a URL slug, so links you share by slug also work for API calls.
    /// </remarks>
    public Task<PodcastDetail> GetPublicPodcast(GetPublicPodcastRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/podcasts/{podcast_id}"),
            [new TemplateParam("podcast_id", request.PodcastId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PodcastDetail>(),
            GetPublicPodcastError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List episodes of a podcast
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EpisodeList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPodcastEpisodesV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns episodes belonging to a single podcast, newest first. Path parameter accepts either a numeric ID or a URL slug.
    /// </remarks>
    public Task<EpisodeList> ListPodcastEpisodesV1(ListPodcastEpisodesV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/podcasts/{podcast_id}/episodes"),
            [new TemplateParam("podcast_id", request.PodcastId)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EpisodeList>(),
            ListPodcastEpisodesV1Error.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search podcasts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PodcastList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchPodcastsV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists podcasts, optionally filtered by title substring or language. Results are ordered by episode count (most prolific first), then alphabetically. Convenience alias for items where <c>source_type = 'podcast_episode'</c> — for multi-format integrations, prefer <c>/api/items</c>.
    /// </remarks>
    public Task<PodcastList> SearchPodcastsV1(SearchPodcastsV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/podcasts"),
            [],
            [
                new Param("q", request.Q),
                new Param("language", request.Language),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PodcastList>(),
            SearchPodcastsV1Error.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
