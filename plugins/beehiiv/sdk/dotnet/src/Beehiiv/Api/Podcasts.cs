using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.Podcasts;

namespace Beehiiv.Api;

public sealed class Podcasts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Podcasts(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get podcast episode OAuth Scope: podcasts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PodcastEpisodeGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetEpisodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single episode belonging to a specific podcast.
    /// </remarks>
    public Task<PodcastEpisodeGetResponse> GetEpisode(GetEpisodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/podcasts/{podcastShowId}/episodes/{podcastEpisodeId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("podcastShowId", request.PodcastShowId),
                new TemplateParam("podcastEpisodeId", request.PodcastEpisodeId),
            ],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PodcastEpisodeGetResponse>(),
            GetEpisodeError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get podcast OAuth Scope: podcasts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PodcastShowGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPodcastError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single podcast belonging to a specific publication.
    /// </remarks>
    public Task<PodcastShowGetResponse> GetPodcast(GetPodcastRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/podcasts/{podcastShowId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("podcastShowId", request.PodcastShowId),
            ],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PodcastShowGetResponse>(),
            GetPodcastError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List podcast episodes OAuth Scope: podcasts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PodcastEpisodesListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEpisodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all episodes belonging to a specific podcast.
    /// </remarks>
    public Task<PodcastEpisodesListResponse> ListEpisodes(ListEpisodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/podcasts/{podcastShowId}/episodes"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("podcastShowId", request.PodcastShowId),
            ],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("status", request.Status),
                new Param("order_by", request.OrderBy),
                new Param("direction", request.Direction),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PodcastEpisodesListResponse>(),
            ListEpisodesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List podcasts OAuth Scope: podcasts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PodcastShowsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListPodcastsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all podcasts belonging to a specific publication.
    /// </remarks>
    public Task<PodcastShowsListResponse> ListPodcasts(ListPodcastsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/podcasts"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("status", request.Status),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PodcastShowsListResponse>(),
            ListPodcastsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
