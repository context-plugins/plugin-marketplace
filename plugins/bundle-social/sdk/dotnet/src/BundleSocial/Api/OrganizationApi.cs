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
using BundleSocial.Requests.OrganizationApi;

namespace BundleSocial.Api;

public sealed class OrganizationApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal OrganizationApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get organization comments usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1OrganizationUsageCommentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrganizationGetCommentsUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// See how many comments your organization has consumed against its plan limit for the current billing period.
    /// </remarks>
    public Task<ApiV1OrganizationUsageCommentsResponse> OrganizationGetCommentsUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organization/usage/comments"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1OrganizationUsageCommentsResponse>(),
            OrganizationGetCommentsUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get daily limits usage for one social account on a given day
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1OrganizationUsageDailyLimitsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrganizationGetDailyLimitsUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check how many posts a single social account has already published on a specific day versus the platform's own daily cap. Use this to avoid hitting platform-side publishing limits.
    /// </remarks>
    public Task<ApiV1OrganizationUsageDailyLimitsResponse> OrganizationGetDailyLimitsUsage(OrganizationGetDailyLimitsUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organization/usage/daily-limits"),
            [],
            [new Param("socialAccountId", request.SocialAccountId), new Param("date", request.Date?.ToIso8601())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1OrganizationUsageDailyLimitsResponse>(),
            OrganizationGetDailyLimitsUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get organization imports usage per social account (paginated)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1OrganizationUsageImportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrganizationGetImportsUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// See how much import capacity each social account has consumed, paginated and filterable by team or platform. Use it to track post history and review import quota.
    /// </remarks>
    public Task<ApiV1OrganizationUsageImportsResponse> OrganizationGetImportsUsage(OrganizationGetImportsUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organization/usage/imports"),
            [],
            [
                new Param("page", request.Page),
                new Param("pageSize", request.PageSize),
                new Param("teamId", request.TeamId),
                new Param("socialAccountType", request.SocialAccountType),
                new Param("socialAccountId", request.SocialAccountId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1OrganizationUsageImportsResponse>(),
            OrganizationGetImportsUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get DM and automation run usage per social account (paginated)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1OrganizationUsageMessagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrganizationGetMessagesUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// See how many direct messages and automation runs each Facebook, Instagram and TikTok account has used this UTC calendar month against its monthly limits, paginated with <c>offset</c>/<c>limit</c> and filterable by team, platform or account. Messages counted: every message you sent, including private replies to comments. Not counted: reactions, marking a conversation as read, and inbound messages. Automation runs counted: every run that was allowed to start, including manual test runs; skipped and canceled runs are not counted. Limits reflect per-account and organization overrides on top of the plan default.
    /// </remarks>
    public Task<ApiV1OrganizationUsageMessagesResponse> OrganizationGetMessagesUsage(OrganizationGetMessagesUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organization/usage/messages"),
            [],
            [
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("teamId", request.TeamId),
                new Param("socialAccountType", request.SocialAccountType),
                new Param("socialAccountId", request.SocialAccountId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1OrganizationUsageMessagesResponse>(),
            OrganizationGetMessagesUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get organization
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1OrganizationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrganizationGetOrganizationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve your organization's details and plan. The <c>teams</c> field is deprecated and will be removed on 2026-11-15: to discover team IDs, use the paginated GET /api/v1/team.
    /// </remarks>
    public Task<ApiV1OrganizationResponse> OrganizationGetOrganization(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organization/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1OrganizationResponse>(),
            OrganizationGetOrganizationError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get organization posts usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1OrganizationUsagePostsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrganizationGetPostsUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// See how many posts your organization has consumed against its plan limit for the current billing period. Use it to monitor quota before scheduling large batches.
    /// </remarks>
    public Task<ApiV1OrganizationUsagePostsResponse> OrganizationGetPostsUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organization/usage/posts"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1OrganizationUsagePostsResponse>(),
            OrganizationGetPostsUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get organization uploads usage
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1OrganizationUsageUploadsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="OrganizationGetUploadsUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// See how much upload capacity your organization has consumed against its plan limit for the current billing period.
    /// </remarks>
    public Task<ApiV1OrganizationUsageUploadsResponse> OrganizationGetUploadsUsage(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/organization/usage/uploads"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1OrganizationUsageUploadsResponse>(),
            OrganizationGetUploadsUsageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
