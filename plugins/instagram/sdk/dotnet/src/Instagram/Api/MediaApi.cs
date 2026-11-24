using System;
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
using Instagram.Requests.MediaApi;

namespace Instagram.Api;

/// <summary>
/// Photos, videos, stories, reels, and carousels
/// </summary>
public sealed class MediaApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal MediaApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Instagram Delete Media
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ResponseModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an Instagram media object (post, story, reel, or carousel).
    /// </remarks>
    public Task<ResponseModel> DeleteMedia(DeleteMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{media_id}"),
            [new TemplateParam("media_id", request.MediaId)],
            [new Param("access_token", request.AccessToken)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ResponseModel>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instagram Get Media
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Media"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get fields on an Instagram photo, video, story, reel, or album.
    /// </remarks>
    public Task<Media> GetMedia(GetMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{media_id}"),
            [new TemplateParam("media_id", request.MediaId)],
            [new Param("access_token", request.AccessToken), new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Media>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instagram Get Carousel Children
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MediaList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get media objects within a carousel album.
    /// </remarks>
    public Task<MediaList> GetMediaChildren(GetMediaChildrenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{media_id}/children"),
            [new TemplateParam("media_id", request.MediaId)],
            [new Param("access_token", request.AccessToken), new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MediaList>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instagram Get User Media
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MediaList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a collection of IG Media objects published on the account.
    /// </remarks>
    public Task<MediaList> GetUserMedia(GetUserMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{user_id}/media"),
            [new TemplateParam("user_id", request.UserId)],
            [
                new Param("access_token", request.AccessToken),
                new Param("fields", request.Fields),
                new Param("limit", request.Limit),
                new Param("after", request.After),
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
    /// Instagram Get User Stories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MediaList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a collection of story IG Media objects on the account.
    /// </remarks>
    public Task<MediaList> GetUserStories(GetUserStoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{user_id}/stories"),
            [new TemplateParam("user_id", request.UserId)],
            [new Param("access_token", request.AccessToken), new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MediaList>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instagram Update Media
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enable or disable comments on a media object.
    /// </remarks>
    public Task<SuccessResponse> UpdateMedia(UpdateMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{media_id}"),
            [new TemplateParam("media_id", request.MediaId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
