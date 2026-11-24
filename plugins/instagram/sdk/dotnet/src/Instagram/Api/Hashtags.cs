using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Instagram.Core;
using Instagram.Core.Authentication;
using Instagram.Core.ErrorResponse;
using Instagram.Core.Exceptions;
using Instagram.Core.Models;
using Instagram.Core.Request;
using Instagram.Core.Response;
using Instagram.Models;
using Instagram.Requests.Hashtags;

namespace Instagram.Api;

/// <summary>
/// Hashtag search and media discovery
/// </summary>
public sealed class Hashtags
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Hashtags(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Instagram Get Hashtag Recent Media
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MediaList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the most recently published media tagged with a specific hashtag.
    /// </remarks>
    public Task<MediaList> GetHashtagRecentMedia(GetHashtagRecentMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{hashtag_id}/recent_media"),
            [new TemplateParam("hashtag_id", request.HashtagId)],
            [
                new Param("user_id", request.UserId),
                new Param("access_token", request.AccessToken),
                new Param("fields", request.Fields),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MediaList>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instagram Get Hashtag Top Media
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MediaList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the most popular media tagged with a specific hashtag.
    /// </remarks>
    public Task<MediaList> GetHashtagTopMedia(GetHashtagTopMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{hashtag_id}/top_media"),
            [new TemplateParam("hashtag_id", request.HashtagId)],
            [
                new Param("user_id", request.UserId),
                new Param("access_token", request.AccessToken),
                new Param("fields", request.Fields),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MediaList>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instagram Search Hashtag
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IgHashtagSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for a hashtag by name and get its ID.
    /// </remarks>
    public Task<IgHashtagSearchResponse> SearchHashtag(SearchHashtagRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/ig_hashtag_search"),
            [],
            [
                new Param("q", request.Q),
                new Param("user_id", request.UserId),
                new Param("access_token", request.AccessToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IgHashtagSearchResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
