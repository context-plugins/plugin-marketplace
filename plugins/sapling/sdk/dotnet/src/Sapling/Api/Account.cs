using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Sapling.Core;
using Sapling.Core.Authentication;
using Sapling.Core.Exceptions;
using Sapling.Core.Models;
using Sapling.Core.Request;
using Sapling.Core.Response;
using Sapling.Errors;
using Sapling.Models;
using Sapling.Requests.Account;

namespace Sapling.Api;

/// <summary>
/// API key status, usage and quota reporting.
/// </summary>
public sealed class Account
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Account(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Check whether this API key can make billable calls
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AccountStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAccountStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One-call self-diagnosis for the presented key: whether billable endpoints will serve it, and if not why (<c>blocked_reason</c>) and for how long (<c>retry_after</c>). Works even when the key is blocked. The same handler is exposed on POST (sapling_account_status_post). Team-scoped keys receive only the verdict and their own quota.
    /// </remarks>
    public Task<ApiV1AccountStatusResponse> SaplingAccountStatus(SaplingAccountStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/account/status"),
            [],
            [new Param("return_usage", request.ReturnUsage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AccountStatusResponse>(),
            SaplingAccountStatusError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyQuery),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Check whether this API key can make billable calls
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AccountStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingAccountStatusPostError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// POST form of GET /api/v1/account/status (sapling_account_status), for clients that credential via a JSON <c>key</c> body. Identical behavior and response.
    /// </remarks>
    public Task<ApiV1AccountStatusResponse> SaplingAccountStatusPost(SaplingAccountStatusPostRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/account/status"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AccountStatusResponse>(),
            SaplingAccountStatusPostError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// API usage by endpoint over time
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportingApiEndpointUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingApiEndpointUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Characters per endpoint, bucketed by day, week or month. The body must be a non-empty JSON object.
    /// </remarks>
    public Task<ApiV1ReportingApiEndpointUsageResponse> SaplingApiEndpointUsage(SaplingApiEndpointUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reporting/api_endpoint_usage"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportingApiEndpointUsageResponse>(),
            SaplingApiEndpointUsageError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Quota and usage summary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportingApiQuotaUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingApiQuotaUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Quota, characters used, and suggestion accept/ignore counts over a window of days. Send a JSON body (it may be <c>{}</c>).
    /// </remarks>
    public Task<ApiV1ReportingApiQuotaUsageResponse> SaplingApiQuotaUsage(SaplingApiQuotaUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reporting/api_quota_usage"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportingApiQuotaUsageResponse>(),
            SaplingApiQuotaUsageError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// API usage and cost report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportingApiUsageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingApiUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Characters and cost over a window of days, broken down by API key, endpoint, day and month. The body is optional.
    /// </remarks>
    public Task<ApiV1ReportingApiUsageResponse> SaplingApiUsage(SaplingApiUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reporting/api_usage"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportingApiUsageResponse>(),
            SaplingApiUsageError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Suggestion activity and active-user report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ReportingApiUserActivityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SaplingApiUserActivityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Edits shown, accepted and ignored, plus active-user counts (logged-in and anonymous), over a window of days. Send a non-empty JSON body (unlike /api/v1/reporting/api_usage this handler rejects an absent or empty <c>{}</c> body with 400); the window defaults to the last 6 days when a field is omitted.
    /// </remarks>
    public Task<ApiV1ReportingApiUserActivityResponse> SaplingApiUserActivity(SaplingApiUserActivityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/reporting/api_user_activity"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1ReportingApiUserActivityResponse>(),
            SaplingApiUserActivityError.Response,
            _auth.BearerAuth.OrAnonymous(),
            requestOptions,
            cancellationToken);
}
