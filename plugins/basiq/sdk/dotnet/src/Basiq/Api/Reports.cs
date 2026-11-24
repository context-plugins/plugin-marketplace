using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Basiq.Core;
using Basiq.Core.Exceptions;
using Basiq.Core.Models;
using Basiq.Core.Request;
using Basiq.Core.Response;
using Basiq.Errors;
using Basiq.Models;
using Basiq.Requests.Reports;

namespace Basiq.Api;

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
    /// Create a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreatereportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this endpoint to create a new report. Report creation is an asynchronous task, meaning a job will be returned to let you know the progress of the report generation.
    /// You can poll the job to know when the report has been generated. You can create any supported report (see reportTypes for a list of supported reports). Ensure you provide the necessary filters when generating a report.
    /// All created reports, will store a copy of the data as a snapshot - this ensures that you have access to the raw data that was used to create the report.
    /// This API allows generating reports with various filters. The <c>filters</c> field in the report request enables you to specify parameters for customizing the report content.
    /// &gt; 📘 Note: The report title cannot be longer than 50 characters.
    /// <para>
    /// &gt; 📘 <b>Reminder:</b> When Enrich data is updated, the transactions' Enrich results won’t automatically reflect these updates. To ensure your report reflects the latest Enrich data, purge and refresh connections before generating a new report.
    /// </para>
    /// <para>
    /// ### Filters
    /// Filters are used to narrow down the data included in the report. The available filters are:
    /// - <c>fromDate</c>: Specifies the start date for the report data (format: YYYY-MM-DD).
    /// - <c>toDate</c>: Specifies the end date for the report data (format: YYYY-MM-DD).
    /// - <c>accounts</c>: List of account IDs to include in the report.
    /// - <c>users</c>: List of user IDs to include in the report.
    /// - <c>includeMetrics</c>: List of metric codes to include in the report. Supported values are specific to the report type. Rules for <c>includeMetrics</c>:
    /// - If the array is empty (<c>"value": []</c>), all metrics will be shown.
    /// - If no filter is provided, all metrics will be shown.
    /// - If an array of codes is provided, only these specific metrics will be shown.
    /// - If the value is <c>null</c>, no metrics will be shown.
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>includeGroups</c>: List of group codes to include in the report. Supported values are specific to the report type. Rules for <c>includeGroups</c>:</description></item>
    ///   <item><description>If the array is empty (<c>"value": []</c>), all groups will be shown.</description></item>
    ///   <item><description>If no filter is provided, all groups will be shown.</description></item>
    ///   <item><description>If an array of codes is provided, only these specific groups will be shown.</description></item>
    ///   <item><description>If the value is <c>null</c>, no groups will be shown.</description></item>
    /// </list>
    /// </remarks>
    public Task<ReportsResponse> Createreport(CreatereportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/reports"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ReportsResponse>(),
            CreatereportError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a report and all associated snapshot data.
    /// </remarks>
    public Task DeleteReport(DeleteReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/reports/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteReportError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List report types
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportsTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListReportTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this endpoint to retrieve a list of supported reports. This identifies the complete list of supported reports, which can be used to create reports on.
    /// </remarks>
    public Task<ReportsTypesResponse> ListReportTypes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/reports/types"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReportsTypesResponse>(),
            ListReportTypesError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List all reports
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListallreportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this endpoint to retrieve a list of created reports. Every created report is saved as a snapshot and can be retrieved up to 24 hours after creation.You can call the reports/types endpoint to see the list of supported reports. reports.
    /// </remarks>
    public Task<ReportsResponse2> Listallreports(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/reports"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReportsResponse2>(),
            ListallreportsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetrieveReportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this endpoint to retrieve a specific report. Ensure you check the
    /// documentation for the schema of each report type.
    /// <para>
    /// | Request Header | Description |
    /// |----------------|-----------------------------------------------------------------------------|
    /// | Accept | Specifies the format of the response. Use <c>application/pdf</c> |
    /// </para>
    /// <para>
    /// If you want to generate the PDF, make sure to change <c>accept</c>
    /// in the CURL request to <c>application/pdf</c> for PDF generation.
    /// </para>
    /// </remarks>
    public Task<BinaryContent> RetrieveReport(RetrieveReportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/reports/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            RetrieveReportError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Report transactions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransactionsContainerObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetrieveReportTransactionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve transactions belonging to the report identified by {reportId}.
    /// </remarks>
    public Task<TransactionsContainerObject> RetrieveReportTransactions(RetrieveReportTransactionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/reports/{reportId}/transactions"),
            [new TemplateParam("reportId", request.ReportId)],
            [new Param("filter", request.Filter)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransactionsContainerObject>(),
            RetrieveReportTransactionsError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a report type
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ReportsTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RetrieveSpecificReportTypeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve information about a specific report type identified by {reportId}.
    /// </remarks>
    public Task<ReportsTypesResponse> RetrieveSpecificReportType(RetrieveSpecificReportTypeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/reports/types/{reportTypeId}"),
            [new TemplateParam("reportTypeId", request.ReportTypeId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ReportsTypesResponse>(),
            RetrieveSpecificReportTypeError.Response,
            _auth.ServicesToken,
            requestOptions,
            cancellationToken);
}
