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
using BundleSocial.Requests.Analytics;

namespace BundleSocial.Api;

public sealed class Analytics
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Analytics(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Force refresh post analytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AnalyticsPostForceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsForcePostAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger an immediate fetch of fresh analytics for a single post instead of waiting for the scheduled refresh. Use sparingly, as it consumes platform rate limits.
    /// </remarks>
    public Task<ApiV1AnalyticsPostForceResponse> AnalyticsForcePostAnalytics(AnalyticsForcePostAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/analytics/post/force"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AnalyticsPostForceResponse>(),
            AnalyticsForcePostAnalyticsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Force refresh social account analytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AnalyticsSocialAccountForceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsForceSocialAccountAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger an immediate fetch of fresh social account analytics from the platform instead of waiting for the scheduled refresh. Use sparingly, as it consumes platform rate limits.
    /// </remarks>
    public Task<ApiV1AnalyticsSocialAccountForceResponse> AnalyticsForceSocialAccountAnalytics(AnalyticsForceSocialAccountAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/analytics/social-account/force"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AnalyticsSocialAccountForceResponse>(),
            AnalyticsForceSocialAccountAnalyticsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Bulk Post Analytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AnalyticsPostBulkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsGetBulkPostAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve analytics for multiple posts in a single request. Maximum 60 posts per request, paginated with 20 per page.
    /// </remarks>
    public Task<ApiV1AnalyticsPostBulkResponse> AnalyticsGetBulkPostAnalytics(AnalyticsGetBulkPostAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/analytics/post/bulk"),
            [],
            [
                new Param("postIds", request.PostIds),
                new Param("platformType", request.PlatformType),
                new Param("page", request.Page),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AnalyticsPostBulkResponse>(),
            AnalyticsGetBulkPostAnalyticsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Post Analytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AnalyticsPostResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsGetPostAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve normalized engagement metrics such as likes, comments, shares, and views for a single published post. Metric names are unified across platforms for easier reporting.
    /// </remarks>
    public Task<ApiV1AnalyticsPostResponse> AnalyticsGetPostAnalytics(AnalyticsGetPostAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/analytics/post"),
            [],
            [
                new Param("postId", request.PostId),
                new Param("platformType", request.PlatformType),
                new Param("importedPostId", request.ImportedPostId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AnalyticsPostResponse>(),
            AnalyticsGetPostAnalyticsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Post Analytics Raw
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AnalyticsPostRawResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsGetPostAnalyticsRawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve post analytics exactly as returned by the social platform, without bundle.social's normalization. Use this when you need a platform-specific metric that the normalized response does not expose.
    /// </remarks>
    public Task<ApiV1AnalyticsPostRawResponse> AnalyticsGetPostAnalyticsRaw(AnalyticsGetPostAnalyticsRawRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/analytics/post/raw"),
            [],
            [
                new Param("postId", request.PostId),
                new Param("platformType", request.PlatformType),
                new Param("importedPostId", request.ImportedPostId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AnalyticsPostRawResponse>(),
            AnalyticsGetPostAnalyticsRawError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Social Account Analytics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AnalyticsSocialAccountResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsGetSocialAccountAnalyticsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve normalized profile-level metrics such as followers, reach, and impressions for a connected social account over a date range. Metric names are unified across platforms so you can chart accounts side by side.
    /// </remarks>
    public Task<ApiV1AnalyticsSocialAccountResponse> AnalyticsGetSocialAccountAnalytics(AnalyticsGetSocialAccountAnalyticsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/analytics/social-account"),
            [],
            [new Param("teamId", request.TeamId), new Param("platformType", request.PlatformType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AnalyticsSocialAccountResponse>(),
            AnalyticsGetSocialAccountAnalyticsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Social Account Analytics Raw
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AnalyticsSocialAccountRawResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AnalyticsGetSocialAccountAnalyticsRawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve social account analytics exactly as returned by the social platform, without bundle.social's normalization. Use this when you need a platform-specific metric that the normalized response does not expose.
    /// </remarks>
    public Task<ApiV1AnalyticsSocialAccountRawResponse> AnalyticsGetSocialAccountAnalyticsRaw(AnalyticsGetSocialAccountAnalyticsRawRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/analytics/social-account/raw"),
            [],
            [new Param("teamId", request.TeamId), new Param("platformType", request.PlatformType)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AnalyticsSocialAccountRawResponse>(),
            AnalyticsGetSocialAccountAnalyticsRawError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
