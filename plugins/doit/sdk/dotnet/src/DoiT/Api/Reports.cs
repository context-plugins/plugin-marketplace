using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Extensions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Reports;

namespace DoiT.Api;

/// <summary>
/// Manage Cloud Analytics reports and get reports data in JSON format.
/// </summary>
public sealed class Reports
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Reports(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Run a report asynchronously
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsyncOperationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AsyncRunInlineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits an async report execution job using an inline configuration. Returns 202 immediately with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key header to ensure at-most-once submission. Duplicate requests with the same config for the same customer return the existing in-flight operation. Use ?dryRun=true to validate the config without creating an operation.
    /// </remarks>
    public Task<AsyncOperationResponse> AsyncRunInline(AsyncRunInlineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/actions/run"),
            [],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AsyncOperationResponse>(),
            AsyncRunInlineError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a saved report asynchronously
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsyncOperationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AsyncRunReportByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits an async execution job for a saved report identified by ID. Returns 202 immediately with a Location header pointing to the operation status endpoint. Requires the Idempotency-Key header. Use ?dryRun=true to validate without creating an operation.
    /// </remarks>
    public Task<AsyncOperationResponse> AsyncRunReportById(AsyncRunReportByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/{id}/actions/run"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("dryRun", request.DryRun),
                new Param("timeRange", request.TimeRange),
                new Param("startDate", request.StartDate?.ToDate()),
                new Param("endDate", request.EndDate?.ToDate()),
            ],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<AsyncOperationResponse>(),
            AsyncRunReportByIdError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel an async report run operation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsyncOperationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CancelAsyncOperationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels a pending or running async report operation. Already-terminal operations (succeeded, failed, canceled) are returned as-is without any state change (idempotent). Returns 404 if the operationId does not exist or belongs to a different tenant. Use ?dryRun=true to validate the request without modifying any state.
    /// </remarks>
    public Task<AsyncOperationResponse> CancelAsyncOperation(CancelAsyncOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/operations/{operationId}/actions/cancel"),
            [new TemplateParam("operationId", request.OperationId)],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<AsyncOperationResponse>(),
            CancelAsyncOperationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExternalReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new report.
    /// </remarks>
    public Task<ExternalReport> CreateReport(CreateReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExternalReport>(),
            CreateReportError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified Cloud Analytics report.
    /// </remarks>
    public Task<object> DeleteReport(DeleteReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DeleteReportError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Poll an async report run operation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AsyncOperationPollResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAsyncOperationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the current status of an async report operation. Non-terminal operations (pending, running) include a Retry-After header suggesting when to poll again. This endpoint does not return result data — once status is "succeeded", fetch the result from the operation's results endpoint. When status is "failed", the error field contains an RFC 9457-shaped error. Returns 404 if the operationId does not exist, belongs to a different tenant, or has expired.
    /// </remarks>
    public Task<AsyncOperationPollResponse> GetAsyncOperation(GetAsyncOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/operations/{operationId}"),
            [new TemplateParam("operationId", request.OperationId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AsyncOperationPollResponse>(),
            GetAsyncOperationError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get results of an async report run operation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsV1ReportsOperationsResultsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAsyncOperationResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the result of a succeeded async report operation, including report metadata (id, reportName, owner, type, createTime, updateTime, urlUI) when the operation was started against a saved report — the same shape as the sync GetReportResponse, instead of requiring a second call to GET /analytics/v1/reports/{id}/config for it. Returns 404 if the operationId does not exist, has expired, or belongs to a different tenant. Returns 425 Too Early if the operation has not yet reached a terminal state — poll the operation status endpoint, which returns its own Retry-After guidance, until it succeeds. Returns 422 if the operation terminated as failed or canceled. The poll status endpoint response does not include result data inline — this is the only endpoint that returns it.
    /// </remarks>
    public Task<AnalyticsV1ReportsOperationsResultsResponse> GetAsyncOperationResults(GetAsyncOperationResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/operations/{operationId}/results"),
            [new TemplateParam("operationId", request.OperationId)],
            [new Param("fileOutput", request.FileOutput)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsV1ReportsOperationsResultsResponse>(),
            GetAsyncOperationResultsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get report results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetReportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the results of the specified report.
    /// </remarks>
    public Task<GetReportResponse> GetReport(GetReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/{id}"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("timeRange", request.TimeRange),
                new Param("startDate", request.StartDate?.ToDate()),
                new Param("endDate", request.EndDate?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetReportResponse>(),
            GetReportError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get report config
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExternalReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetReportConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the configuration of the specified Cloud Analytics report.
    /// </remarks>
    public Task<ExternalReport> GetReportConfig(GetReportConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/{id}/config"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExternalReport>(),
            GetReportConfigError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List reports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListReportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all Cloud Analytics reports that your account has access to.
    /// Reports are returned in reverse chronological order by default.
    /// </remarks>
    public Task<ReportList> ListReports(ListReportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("filter", request.Filter),
                new Param("nameContains", request.NameContains),
                new Param("minCreationTime", request.MinCreationTime),
                new Param("maxCreationTime", request.MaxCreationTime),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReportList>(),
            ListReportsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run a query
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RunReportResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="QueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Runs a report query with the specified configuration without persisting it.
    /// Fields that are not populated will use their default values if needed.
    /// </remarks>
    public Task<RunReportResult> Query(QueryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/query"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RunReportResult>(),
            QueryError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExternalReport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a report with the specified configuration.
    /// <para>
    /// Only specified fields will be updated.
    /// </para>
    /// </remarks>
    public Task<ExternalReport> UpdateReport(UpdateReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/reports/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ExternalReport>(),
            UpdateReportError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
