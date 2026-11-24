<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.Reports` · Source: `src/DoiT/Api/Reports.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AsyncRunInline

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AsyncRunInline(AsyncRunInlineRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `IdempotencyKey`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `AsyncOperationResponse`
- **Error**: `ApiException<AsyncRunInlineError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AsyncRunInlineRequest` | `src/DoiT/Requests/Reports/AsyncRunInlineRequest.cs` |
| `AnalyticsV1ReportsActionsRunRequest` | `src/DoiT/Models/AnalyticsV1ReportsActionsRunRequest.cs` |
| `AsyncOperationResponse` | `src/DoiT/Models/AsyncOperationResponse.cs` |
| `AsyncRunInlineError` | `src/DoiT/Errors/AsyncRunInlineError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### AsyncRunReportById

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AsyncRunReportById(AsyncRunReportByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `IdempotencyKey`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`, `timeRange` ← `TimeRange`, `startDate` ← `StartDate`, `endDate` ← `EndDate`
- **Returns**: `AsyncOperationResponse`
- **Error**: `ApiException<AsyncRunReportByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AsyncRunReportByIdRequest` | `src/DoiT/Requests/Reports/AsyncRunReportByIdRequest.cs` |
| `AsyncOperationResponse` | `src/DoiT/Models/AsyncOperationResponse.cs` |
| `AsyncRunReportByIdError` | `src/DoiT/Errors/AsyncRunReportByIdError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### CancelAsyncOperation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CancelAsyncOperation(CancelAsyncOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OperationId`, `IdempotencyKey`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `AsyncOperationResponse`
- **Error**: `ApiException<CancelAsyncOperationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelAsyncOperationRequest` | `src/DoiT/Requests/Reports/CancelAsyncOperationRequest.cs` |
| `AsyncOperationResponse` | `src/DoiT/Models/AsyncOperationResponse.cs` |
| `CancelAsyncOperationError` | `src/DoiT/Errors/CancelAsyncOperationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### CreateReport

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CreateReport(CreateReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ExternalReport`
- **Error**: `ApiException<CreateReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateReportRequest` | `src/DoiT/Requests/Reports/CreateReportRequest.cs` |
| `AnalyticsV1ReportsRequest` | `src/DoiT/Models/AnalyticsV1ReportsRequest.cs` |
| `ExternalReport` | `src/DoiT/Models/ExternalReport.cs` |
| `CreateReportError` | `src/DoiT/Errors/CreateReportError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteReport

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteReport(DeleteReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `object`
- **Error**: `ApiException<DeleteReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteReportRequest` | `src/DoiT/Requests/Reports/DeleteReportRequest.cs` |
| `DeleteReportError` | `src/DoiT/Errors/DeleteReportError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetAsyncOperation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAsyncOperation(GetAsyncOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OperationId`
- **Returns**: `AsyncOperationPollResponse`
- **Error**: `ApiException<GetAsyncOperationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAsyncOperationRequest` | `src/DoiT/Requests/Reports/GetAsyncOperationRequest.cs` |
| `AsyncOperationPollResponse` | `src/DoiT/Models/AsyncOperationPollResponse.cs` |
| `GetAsyncOperationError` | `src/DoiT/Errors/GetAsyncOperationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetAsyncOperationResults

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetAsyncOperationResults(GetAsyncOperationResultsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OperationId`
- **Query params (wire ← C#)**: `fileOutput` ← `FileOutput`
- **Returns**: `AnalyticsV1ReportsOperationsResultsResponse`
- **Error**: `ApiException<GetAsyncOperationResultsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 422, 425, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAsyncOperationResultsRequest` | `src/DoiT/Requests/Reports/GetAsyncOperationResultsRequest.cs` |
| `FileOutput` | `src/DoiT/Models/Enums/FileOutput.cs` |
| `AnalyticsV1ReportsOperationsResultsResponse` | `src/DoiT/Models/AnalyticsV1ReportsOperationsResultsResponse.cs` |
| `GetAsyncOperationResultsError` | `src/DoiT/Errors/GetAsyncOperationResultsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetReport

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetReport(GetReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `timeRange` ← `TimeRange`, `startDate` ← `StartDate`, `endDate` ← `EndDate`
- **Returns**: `GetReportResponse`
- **Error**: `ApiException<GetReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReportRequest` | `src/DoiT/Requests/Reports/GetReportRequest.cs` |
| `GetReportResponse` | `src/DoiT/Models/GetReportResponse.cs` |
| `GetReportError` | `src/DoiT/Errors/GetReportError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### GetReportConfig

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetReportConfig(GetReportConfigRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ExternalReport`
- **Error**: `ApiException<GetReportConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReportConfigRequest` | `src/DoiT/Requests/Reports/GetReportConfigRequest.cs` |
| `ExternalReport` | `src/DoiT/Models/ExternalReport.cs` |
| `GetReportConfigError` | `src/DoiT/Errors/GetReportConfigError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListReports

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListReports(ListReportsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `maxResults` ← `MaxResults`, `pageToken` ← `PageToken`, `filter` ← `Filter`, `nameContains` ← `NameContains`, `minCreationTime` ← `MinCreationTime`, `maxCreationTime` ← `MaxCreationTime`
- **Returns**: `ReportList`
- **Error**: `ApiException<ListReportsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListReportsRequest` | `src/DoiT/Requests/Reports/ListReportsRequest.cs` |
| `ReportList` | `src/DoiT/Models/ReportList.cs` |
| `ListReportsError` | `src/DoiT/Errors/ListReportsError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### Query

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `Query(QueryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `RunReportResult`
- **Error**: `ApiException<QueryError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `QueryRequest` | `src/DoiT/Requests/Reports/QueryRequest.cs` |
| `AnalyticsV1ReportsQueryRequest` | `src/DoiT/Models/AnalyticsV1ReportsQueryRequest.cs` |
| `RunReportResult` | `src/DoiT/Models/RunReportResult.cs` |
| `QueryError` | `src/DoiT/Errors/QueryError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateReport

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateReport(UpdateReportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ExternalReport`
- **Error**: `ApiException<UpdateReportError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateReportRequest` | `src/DoiT/Requests/Reports/UpdateReportRequest.cs` |
| `ExternalUpdateReport` | `src/DoiT/Models/ExternalUpdateReport.cs` |
| `ExternalReport` | `src/DoiT/Models/ExternalReport.cs` |
| `UpdateReportError` | `src/DoiT/Errors/UpdateReportError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

