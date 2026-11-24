using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BundleSocial.Core;
using BundleSocial.Core.Exceptions;
using BundleSocial.Core.Models;
using BundleSocial.Core.Request;
using BundleSocial.Core.Response;
using BundleSocial.Errors;
using BundleSocial.Models;
using BundleSocial.Requests.CommentApi;

namespace BundleSocial.Api;

public sealed class CommentApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CommentApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Publish a comment or a reply on one of your published posts. Use it to schedule the first comment on Instagram or LinkedIn, or to respond to your audience programmatically.
    /// </remarks>
    public Task<ApiV1CommentResponse> CommentCreate(CommentCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1CommentResponse>(),
            CommentCreateError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete a comment from bundle.social. Deleting a scheduled comment cancels it before it publishes.
    /// </remarks>
    public Task<ApiV1CommentResponse> CommentDelete(CommentDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CommentResponse>(),
            CommentDeleteError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single comment you created through bundle.social, including its publishing status and any error details.
    /// </remarks>
    public Task<ApiV1CommentResponse> CommentGet(CommentGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CommentResponse>(),
            CommentGetError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get comment list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentGetListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List and filter the comments your organization has created, with pagination. Use it to track which scheduled comments published successfully.
    /// </remarks>
    public Task<ApiV1CommentResponse3> CommentGetList(CommentGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("postId", request.PostId),
                new Param("importedPostId", request.ImportedPostId),
                new Param("status", request.Status),
                new Param("orderBy", request.OrderBy),
                new Param("order", request.Order),
                new Param("q", request.Q),
                new Param("platforms", request.Platforms),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CommentResponse3>(),
            CommentGetListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run an action on a fetched comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentImportCommentsActionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentImportActionFetchedCommentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reply to, hide, like, or delete an imported comment directly on the social platform. Use this to moderate and engage without leaving your own app.
    /// </remarks>
    public Task<ApiV1CommentImportCommentsActionResponse> CommentImportActionFetchedComment(CommentImportActionFetchedCommentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/import/comments/{commentId}/action"),
            [new TemplateParam("commentId", request.CommentId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1CommentImportCommentsActionResponse>(),
            CommentImportActionFetchedCommentError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start a new comment import for a post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentImportCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Kick off an asynchronous import that pulls existing comments from a published post on the social platform into bundle.social so you can read and reply to them through the API.
    /// </remarks>
    public Task<ApiV1CommentImportResponse> CommentImportCreate(CommentImportCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/import"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1CommentImportResponse>(),
            CommentImportCreateError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get comment import by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentImportGetByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the status, progress, and result of a single comment import job.
    /// </remarks>
    public Task<ApiV1CommentImportResponse> CommentImportGetById(CommentImportGetByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/import/{importId}"),
            [new TemplateParam("importId", request.ImportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CommentImportResponse>(),
            CommentImportGetByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get fetched comments for a post
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentImportCommentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentImportGetFetchedCommentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the comments pulled in by a comment import, with pagination. Use this to read audience replies and decide which ones need a response.
    /// </remarks>
    public Task<ApiV1CommentImportCommentsResponse> CommentImportGetFetchedComments(CommentImportGetFetchedCommentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/import/comments"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("postId", request.PostId),
                new Param("importedPostId", request.ImportedPostId),
                new Param("platform", request.Platform),
                new Param("socialAccountId", request.SocialAccountId),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CommentImportCommentsResponse>(),
            CommentImportGetFetchedCommentsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get comment import list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentImportResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentImportGetListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List comment import jobs for a team so you can monitor which imports are queued, running, finished, or failed.
    /// </remarks>
    public Task<ApiV1CommentImportResponse1> CommentImportGetList(CommentImportGetListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/import"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("postId", request.PostId),
                new Param("importedPostId", request.ImportedPostId),
                new Param("status", request.Status),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CommentImportResponse1>(),
            CommentImportGetListError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retry comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentRetryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentRetryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Re-attempt publishing a comment that failed, for example after a token expired or a platform outage.
    /// </remarks>
    public Task<ApiV1CommentRetryResponse> CommentRetry(CommentRetryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/{id}/retry"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1CommentRetryResponse>(),
            CommentRetryError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update comment
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1CommentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CommentUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Change the content or scheduled time of a comment that has not published yet.
    /// </remarks>
    public Task<ApiV1CommentResponse> CommentUpdate(CommentUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/comment/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1CommentResponse>(),
            CommentUpdateError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
