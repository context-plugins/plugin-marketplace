using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BundleSocial.Core;
using BundleSocial.Core.Exceptions;
using BundleSocial.Core.Extensions;
using BundleSocial.Core.Models;
using BundleSocial.Core.Request;
using BundleSocial.Core.Response;
using BundleSocial.Errors;
using BundleSocial.Models;
using BundleSocial.Requests.PostApi;

namespace BundleSocial.Api;

public sealed class PostApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PostApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Schedule or immediately publish a post to one or more connected social accounts in a single request. Supply shared content plus optional per-platform overrides for captions, media, and platform-specific options.
    /// </remarks>
    public Task<ApiV1PostResponse1> PostCreate(PostCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PostResponse1>(),
            PostCreateError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a post from bundle.social. Deleting a scheduled post cancels it; deleting an already-published post does not remove it from the social platform.
    /// </remarks>
    public Task<ApiV1PostResponse2> PostDelete(PostDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostResponse2>(),
            PostDeleteError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single post by ID, including its per-platform status, scheduled time, media, and any publishing errors.
    /// </remarks>
    public Task<ApiV1PostResponse> PostGet(PostGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostResponse>(),
            PostGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get post by reference key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostReferenceKeyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostGetByReferenceKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single post using your own reference key instead of the bundle.social post ID. Useful when you store your own identifier on create and want to look the post up later without keeping a mapping table.
    /// </remarks>
    public Task<ApiV1PostReferenceKeyResponse> PostGetByReferenceKey(PostGetByReferenceKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post/reference-key/{referenceKey}"),
            [new TemplateParam("referenceKey", request.ReferenceKey)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostReferenceKeyResponse>(),
            PostGetByReferenceKeyError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get post list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostGetListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List and filter posts across a team by status, platform, or date range with pagination. Use this to build a content calendar or reconcile your own database with bundle.social.
    /// </remarks>
    public Task<ApiV1PostResponse3> PostGetList(PostGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post/"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("status", request.Status),
                new Param("orderBy", request.OrderBy),
                new Param("order", request.Order),
                new Param("q", request.Q),
                new Param("platforms", request.Platforms),
                new Param("postDateFrom", request.PostDateFrom?.ToIso8601()),
                new Param("postDateTo", request.PostDateTo?.ToIso8601()),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostResponse3>(),
            PostGetListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get posts that can be reconnected to a social account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostReconnectSocialAccountCandidatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostGetReconnectSocialAccountCandidatesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List posts that lost their link to a social account after a disconnect, and that can be reattached to a newly connected account of the same platform.
    /// </remarks>
    public Task<ApiV1PostReconnectSocialAccountCandidatesResponse> PostGetReconnectSocialAccountCandidates(PostGetReconnectSocialAccountCandidatesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post/reconnect-social-account/candidates"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("type", request.Type),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostReconnectSocialAccountCandidatesResponse>(),
            PostGetReconnectSocialAccountCandidatesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reconnect social account to matching posts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostReconnectSocialAccountResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostReconnectSocialAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reattach a newly connected social account to posts that were orphaned when the previous account was disconnected, so scheduled posts publish instead of failing.
    /// </remarks>
    public Task<ApiV1PostReconnectSocialAccountResponse> PostReconnectSocialAccount(PostReconnectSocialAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post/reconnect-social-account"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PostReconnectSocialAccountResponse>(),
            PostReconnectSocialAccountError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retry post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostRetryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostRetryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Re-attempt publishing a post that failed, for example after a token expired or a platform outage. Fix the underlying cause first, then retry.
    /// </remarks>
    public Task<ApiV1PostRetryResponse> PostRetry(PostRetryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post/{id}/retry"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostRetryResponse>(),
            PostRetryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Change the content, media, scheduled time, or target platforms of a post that has not published yet. Only the fields you send are modified.
    /// </remarks>
    public Task<ApiV1PostResponse1> PostUpdate(PostUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PostResponse1>(),
            PostUpdateError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
