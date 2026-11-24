using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Extensions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.RiskChecks;

namespace DidLogic.Api;

public sealed class RiskChecks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal RiskChecks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create risk check
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersRiskChecksResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersRiskChecksCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new risk check task for the provided phone numbers (maximum 1500 numbers per request).
    /// <para>
    /// <c>risk_check_request.task_id</c> feeds numbers_risk_checks_index and numbers_risk_checks_logs (<c>task_ids</c>):
    /// the task status and the per-number results.
    /// </para>
    /// <para>
    /// <b>Note:</b> Results are informational only. Use at your own discretion.
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersRiskChecksResponse1> NumbersRiskChecksCreate(NumbersRiskChecksCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/risk_checks"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2NumbersRiskChecksResponse1>(),
            NumbersRiskChecksCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List risk checks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersRiskChecksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersRiskChecksIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves a list of risk check tasks.
    /// <para>
    /// Returns information about all risk check tasks created by your organization,
    /// including task status, number counts, and processing timestamps. Supports filtering by various criteria and pagination.
    /// </para>
    /// <para>
    /// <c>tasks[].id</c> feeds numbers_risk_checks_logs (<c>task_ids</c>). Rows: numbers_risk_checks_logs.
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersRiskChecksResponse> NumbersRiskChecksIndex(NumbersRiskChecksIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/risk_checks"),
            [],
            [
                new Param("task_ids", request.TaskIds),
                new Param("status", request.Status),
                new Param("created_at_from", request.CreatedAtFrom?.ToDate()),
                new Param("created_at_to", request.CreatedAtTo?.ToDate()),
                new Param("processed_at_from", request.ProcessedAtFrom?.ToDate()),
                new Param("processed_at_to", request.ProcessedAtTo?.ToDate()),
                new Param("order_by", request.OrderBy),
                new Param("order", request.Order),
                new Param("page", request.Page),
                new Param("per_page", request.PerPage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersRiskChecksResponse>(),
            NumbersRiskChecksIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List risk check logs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersRiskChecksLogsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersRiskChecksLogsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves risk check logs for individual phone numbers.
    /// <para>
    /// Returns detailed information about each number that was checked, including its risk level,
    /// status, and processing time. Supports filtering by various criteria and pagination.
    /// </para>
    /// <para>
    /// <c>logs[].task_id</c> feeds numbers_risk_checks_index (<c>task_ids</c>).
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersRiskChecksLogsResponse> NumbersRiskChecksLogs(NumbersRiskChecksLogsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/risk_checks/logs"),
            [],
            [
                new Param("ids", request.Ids),
                new Param("task_ids", request.TaskIds),
                new Param("number", request.Number),
                new Param("status", request.Status),
                new Param("risk_level", request.RiskLevel),
                new Param("created_at_from", request.CreatedAtFrom?.ToDate()),
                new Param("created_at_to", request.CreatedAtTo?.ToDate()),
                new Param("processed_at_from", request.ProcessedAtFrom?.ToDate()),
                new Param("processed_at_to", request.ProcessedAtTo?.ToDate()),
                new Param("order_by", request.OrderBy),
                new Param("order", request.Order),
                new Param("page", request.Page),
                new Param("per_page", request.PerPage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersRiskChecksLogsResponse>(),
            NumbersRiskChecksLogsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
