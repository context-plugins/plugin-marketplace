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
using DoiT.Requests.DataHub;

namespace DoiT.Api;

/// <summary>
/// Ingest third-party cost, usage, and metric-based data for analysis.
/// </summary>
public sealed class DataHub
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DataHub(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1DatasetsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateDatahubDatasetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new DataHub dataset. A dataset is a logical grouping of events that share the same provider name. Creating a dataset allows you to define metadata such as name and description before ingesting events.
    /// </remarks>
    public Task<DatahubV1DatasetsResponse1> CreateDatahubDataset(CreateDatahubDatasetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/datasets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DatahubV1DatasetsResponse1>(),
            CreateDatahubDatasetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ingest JSON
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1EventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatahubEventsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends a batch of events to DataHub.
    /// </remarks>
    public Task<DatahubV1EventsResponse> DatahubEvents(DatahubEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/events"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DatahubV1EventsResponse>(),
            DatahubEventsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ingest CSV file
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1CsvUploadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatahubEventsCsvFileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends a batch of events to DataHub using a CSV file, either uncompressed or compressed in ZIP or GZ format. It may take up to 15 minutes for the data to become available in the DoiT console.
    /// </remarks>
    public Task<DatahubV1CsvUploadResponse> DatahubEventsCsvFile(DatahubEventsCsvFileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/csv/upload"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("provider", request.Provider),
                new MultipartParam("file", request.File),
                new MultipartParam("schemaTemplate", request.SchemaTemplate),
                new MultipartParam("periodStart", request.PeriodStart),
                new MultipartParam("periodEnd", request.PeriodEnd),
                new MultipartParam("replace", request.Replace)),
            JsonResponse.Create<DatahubV1CsvUploadResponse>(),
            DatahubEventsCsvFileError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Import provider-native records
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1ImportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatahubImportProviderRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends provider-native records as JSON instead of a CSV file. The records use the same columns as the template's CSV (currently <c>anthropic-spend-report@1</c> only) and are validated, normalized and booked on <c>periodEnd</c> exactly like a CSV upload. It may take up to 15 minutes for the data to become available in the DoiT console.
    /// </remarks>
    public Task<DatahubV1ImportResponse> DatahubImportProviderRecords(DatahubImportProviderRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/import"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DatahubV1ImportResponse>(),
            DatahubImportProviderRecordsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1DatasetsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDatahubDatasetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific DataHub dataset.
    /// </remarks>
    public Task<DatahubV1DatasetsResponse2> DeleteDatahubDataset(DeleteDatahubDatasetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/datasets/{name}"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<DatahubV1DatasetsResponse2>(),
            DeleteDatahubDatasetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete datasets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1DatasetsResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDatahubDatasetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes one or more DataHub datasets and all their associated data.
    /// </remarks>
    public Task<DatahubV1DatasetsResponse2> DeleteDatahubDatasets(DeleteDatahubDatasetsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/datasets"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DatahubV1DatasetsResponse2>(),
            DeleteDatahubDatasetsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete specific events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1EventsDeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteDatahubEventsByFilterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes specific events using filters. Note that the two filters, <c>eventIds</c> and <c>time ranges</c>, are mutually exclusive.
    /// </remarks>
    public Task<DatahubV1EventsDeleteResponse> DeleteDatahubEventsByFilter(DeleteDatahubEventsByFilterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/events/delete"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DatahubV1EventsDeleteResponse>(),
            DeleteDatahubEventsByFilterError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export dataset records
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExportDatahubDatasetRecordsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one page of the live records of a DataHub dataset, as CSV (default) or as newline-delimited JSON in the same shape as the <c>/datahub/v1/events</c> payload.
    /// <para>
    /// A time window is required: <c>startTime</c> is inclusive, <c>endTime</c> is exclusive, and the window must not exceed 366 days. Rows are ordered by their event time and event id, and pages never overlap: read the <c>X-Next-Page-Token</c> response header and pass it back as <c>pageToken</c> until the header is absent. <c>X-Row-Count</c> carries the number of rows in the page. Only live rows are returned; rows deleted through the console or the delete endpoints are excluded.
    /// </para>
    /// <para>
    /// Every row starts with five provenance columns (<c>event_id</c>, <c>batch</c>, <c>source</c>, <c>export_time</c>, <c>updated_by</c>) followed by the dataset's business columns in the CSV ingest vocabulary (<c>usage_date</c>, <c>fixed.</c>, <c>label.</c>, <c>project_label.</c>, <c>system_label.</c>, <c>metric.</c>). The business columns are computed from the rows of each page, so consecutive pages can have different label and metric columns; union the headers when concatenating pages. Datasets created with the FOCUS schema template use the FOCUS column names instead and can only be exported as CSV.
    /// </para>
    /// <para>
    /// To re-import an export into another dataset, drop the <c>batch</c>, <c>source</c>, <c>export_time</c> and <c>updated_by</c> columns, and either drop <c>event_id</c> or rename it to <c>id</c>.
    /// </para>
    /// </remarks>
    public Task ExportDatahubDatasetRecords(ExportDatahubDatasetRecordsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/datasets/{name}/records"),
            [new TemplateParam("name", request.Name)],
            [
                new Param("startTime", request.StartTime.ToIso8601()),
                new Param("endTime", request.EndTime.ToIso8601()),
                new Param("format", request.Format),
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ExportDatahubDatasetRecordsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve a dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1DatasetsResponse4"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDatahubDatasetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a specific DataHub dataset by name.
    /// </remarks>
    public Task<DatahubV1DatasetsResponse4> GetDatahubDataset(GetDatahubDatasetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/datasets/{name}"),
            [new TemplateParam("name", request.Name)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DatahubV1DatasetsResponse4>(),
            GetDatahubDatasetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List datasets
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1DatasetsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListDatahubDatasetsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all DataHub datasets for the customer.
    /// </remarks>
    public Task<DatahubV1DatasetsResponse> ListDatahubDatasets(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/datasets"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DatahubV1DatasetsResponse>(),
            ListDatahubDatasetsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DatahubV1DatasetsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateDatahubDatasetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates an existing DataHub dataset's metadata. The <c>description</c>, <c>displayName</c> and <c>logoName</c> fields can be updated.
    /// Only the fields present in the request body are changed; an omitted field keeps its stored value, and an empty string clears it.
    /// The dataset <c>name</c> is immutable and serves as the resource identifier and the ingest <c>provider</c> value. To change how a dataset is displayed in the console and in report results, set <c>displayName</c>; saved reports, budgets, alerts and filters keep working because they reference <c>name</c>.
    /// If <c>name</c> is included in the request body, it must match the dataset name in the URL path. A mismatched name will be rejected with a 400 error.
    /// </remarks>
    public Task<DatahubV1DatasetsResponse1> UpdateDatahubDataset(UpdateDatahubDatasetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/datahub/v1/datasets/{name}"),
            [new TemplateParam("name", request.Name)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DatahubV1DatasetsResponse1>(),
            UpdateDatahubDatasetError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
