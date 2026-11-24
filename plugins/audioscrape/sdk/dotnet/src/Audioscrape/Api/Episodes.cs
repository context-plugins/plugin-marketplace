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
using Audioscrape.Requests.Episodes;

namespace Audioscrape.Api;

/// <summary>
/// Convenience alias for podcast-episode items. For multi-format integrations, prefer <c>/api/items</c>.
/// </summary>
public sealed class Episodes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Episodes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get episode transcript
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Transcript"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEpisodeTranscriptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the transcript on its own (segments + speaker list). Equivalent to the <c>transcript</c> field on <c>GET /api/episodes/{id}?include=transcript</c>. Use this endpoint when you don't need the metadata envelope.
    /// </remarks>
    public Task<Transcript> GetEpisodeTranscript(GetEpisodeTranscriptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/episodes/{episode_id}/transcript"),
            [new TemplateParam("episode_id", request.EpisodeId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Transcript>(),
            GetEpisodeTranscriptError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get episode metadata
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EpisodeDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPublicEpisodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the episode + its parent podcast. Heavy fields are opt-in via <c>?include=</c> — pass <c>transcript</c>, <c>entities</c>, or both to load them in the same response. Useful when you want details without paying the cost of fetching a 500KB+ transcript by default.
    /// </remarks>
    public Task<EpisodeDetail> GetPublicEpisode(GetPublicEpisodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/episodes/{episode_id}"),
            [new TemplateParam("episode_id", request.EpisodeId)],
            [new Param("include", request.Include)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EpisodeDetail>(),
            GetPublicEpisodeError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List recent episodes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EpisodeList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListRecentEpisodesV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the most recently published episodes across all podcasts. Convenience alias for items where <c>source_type = 'podcast_episode'</c> — for multi-format integrations, prefer <c>/api/items</c>.
    /// </remarks>
    public Task<EpisodeList> ListRecentEpisodesV1(ListRecentEpisodesV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/episodes"),
            [],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EpisodeList>(),
            ListRecentEpisodesV1Error.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
