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
using BundleSocial.Requests.PostImport;

namespace BundleSocial.Api;

public sealed class PostImport
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PostImport(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Start a new post history import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostHistoryImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostImportCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Kick off an asynchronous import that backfills posts a social account published before it was connected to bundle.social, together with their analytics. Use it to get historical reporting from day one.
    /// </remarks>
    public Task<ApiV1PostHistoryImportResponse> PostImportCreate(PostImportCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-history-import/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PostHistoryImportResponse>(),
            PostImportCreateError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bulk delete imported posts and their analytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostHistoryImportPostsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostImportDeleteImportedPostsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently delete up to 100 imported historical posts and their analytics in one request, freeing import capacity.
    /// </remarks>
    public Task<ApiV1PostHistoryImportPostsResponse1> PostImportDeleteImportedPosts(PostImportDeleteImportedPostsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-history-import/posts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PostHistoryImportPostsResponse1>(),
            PostImportDeleteImportedPostsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get import by ID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostHistoryImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostImportGetByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the status, progress, and result of a single post history import job.
    /// </remarks>
    public Task<ApiV1PostHistoryImportResponse> PostImportGetById(PostImportGetByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-history-import/{importId}"),
            [new TemplateParam("importId", request.ImportId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostHistoryImportResponse>(),
            PostImportGetByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get imported posts with analytics for a social account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostHistoryImportPostsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostImportGetImportedPostsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the historical posts pulled in by an import, with their analytics and your remaining import capacity. Use it to report on performance from before the account was connected.
    /// </remarks>
    public Task<ApiV1PostHistoryImportPostsResponse> PostImportGetImportedPosts(PostImportGetImportedPostsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-history-import/posts"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("socialAccountType", request.SocialAccountType),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostHistoryImportPostsResponse>(),
            PostImportGetImportedPostsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get import status list
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostHistoryImportResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostImportGetStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List post history import jobs for a team so you can monitor which backfills are queued, running, finished, or failed.
    /// </remarks>
    public Task<ApiV1PostHistoryImportResponse1> PostImportGetStatus(PostImportGetStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-history-import/"),
            [],
            [new Param("teamId", request.TeamId), new Param("socialAccountType", request.SocialAccountType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PostHistoryImportResponse1>(),
            PostImportGetStatusError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retry a failed import
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PostHistoryImportRetryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostImportRetryImportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Re-run a post history import that failed, for example after a token expired or the platform rate-limited the request.
    /// </remarks>
    public Task<ApiV1PostHistoryImportRetryResponse> PostImportRetryImport(PostImportRetryImportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/post-history-import/{importId}/retry"),
            [new TemplateParam("importId", request.ImportId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1PostHistoryImportRetryResponse>(),
            PostImportRetryImportError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
