<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `doi_t/apis/reports.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.reports.async_run_inline

- **Route**: `POST /analytics/v1/reports/actions/run`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def async_run_inline(idempotency_key: str, *, dry_run: bool | None = None, body: AnalyticsV1ReportsActionsRunRequest | AnalyticsV1ReportsActionsRunRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `idempotency_key`
- **Params**: `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `AsyncOperationResponse`
- **Returns (raw)**: `ApiResult[AsyncOperationResponse, AsyncRunInlineErrorBody]`
- **Error**: `AsyncRunInlineErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsV1ReportsActionsRunRequest` | `doi_t/models/analytics_v1_reports_actions_run_request.py` |
| `AnalyticsV1ReportsActionsRunRequestDict` | `doi_t/models/analytics_v1_reports_actions_run_request.py` |
| `AsyncOperationResponse` | `doi_t/models/async_operation_response.py` |
| `AsyncRunInlineErrorBody` | `doi_t/errors/async_run_inline_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.async_run_report_by_id

- **Route**: `POST /analytics/v1/reports/{id}/actions/run`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def async_run_report_by_id(id_: str, idempotency_key: str, *, dry_run: bool | None = None, time_range: str | None = None, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `idempotency_key`
- **Params**: `id_` — path `id` · `dry_run` — query `dryRun` · `time_range` — query `timeRange` · `start_date` — query `startDate` · `end_date` — query `endDate` · `idempotency_key` — header `Idempotency-Key`
- **Returns (parsed)**: `AsyncOperationResponse`
- **Returns (raw)**: `ApiResult[AsyncOperationResponse, AsyncRunReportByIdErrorBody]`
- **Error**: `AsyncRunReportByIdErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AsyncOperationResponse` | `doi_t/models/async_operation_response.py` |
| `AsyncRunReportByIdErrorBody` | `doi_t/errors/async_run_report_by_id_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.cancel_async_operation

- **Route**: `POST /analytics/v1/reports/operations/{operationId}/actions/cancel`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def cancel_async_operation(operation_id: str, idempotency_key: str, *, dry_run: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `operation_id`, `idempotency_key`
- **Params**: `operation_id` — path `operationId` · `dry_run` — query `dryRun` · `idempotency_key` — header `Idempotency-Key`
- **Returns (parsed)**: `AsyncOperationResponse`
- **Returns (raw)**: `ApiResult[AsyncOperationResponse, CancelAsyncOperationErrorBody]`
- **Error**: `CancelAsyncOperationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AsyncOperationResponse` | `doi_t/models/async_operation_response.py` |
| `CancelAsyncOperationErrorBody` | `doi_t/errors/cancel_async_operation_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.create_report

- **Route**: `POST /analytics/v1/reports`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def create_report(*, body: AnalyticsV1ReportsRequest | AnalyticsV1ReportsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ExternalReport`
- **Returns (raw)**: `ApiResult[ExternalReport, CreateReportErrorBody]`
- **Error**: `CreateReportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsV1ReportsRequest` | `doi_t/models/analytics_v1_reports_request.py` |
| `AnalyticsV1ReportsRequestDict` | `doi_t/models/analytics_v1_reports_request.py` |
| `ExternalReport` | `doi_t/models/external_report.py` |
| `CreateReportErrorBody` | `doi_t/errors/create_report_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.delete_report

- **Route**: `DELETE /analytics/v1/reports/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_report(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteReportErrorBody]`
- **Error**: `DeleteReportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteReportErrorBody` | `doi_t/errors/delete_report_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.get_async_operation

- **Route**: `GET /analytics/v1/reports/operations/{operationId}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_async_operation(operation_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `operation_id`
- **Params**: `operation_id` — path `operationId`
- **Returns (parsed)**: `AsyncOperationPollResponse`
- **Returns (raw)**: `ApiResult[AsyncOperationPollResponse, GetAsyncOperationErrorBody]`
- **Error**: `GetAsyncOperationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AsyncOperationPollResponse` | `doi_t/models/async_operation_poll_response.py` |
| `GetAsyncOperationErrorBody` | `doi_t/errors/get_async_operation_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.get_async_operation_results

- **Route**: `GET /analytics/v1/reports/operations/{operationId}/results`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_async_operation_results(operation_id: str, *, file_output: FileOutputOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `operation_id`
- **Params**: `operation_id` — path `operationId` · `file_output` — query `fileOutput`
- **Returns (parsed)**: `AnalyticsV1ReportsOperationsResultsResponse`
- **Returns (raw)**: `ApiResult[AnalyticsV1ReportsOperationsResultsResponse, GetAsyncOperationResultsErrorBody]`
- **Error**: `GetAsyncOperationResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 422, 425, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FileOutputOrStr` | `doi_t/models/enums/file_output.py` |
| `AnalyticsV1ReportsOperationsResultsResponse` | `doi_t/models/analytics_v1_reports_operations_results_response.py` |
| `GetAsyncOperationResultsErrorBody` | `doi_t/errors/get_async_operation_results_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.get_report

- **Route**: `GET /analytics/v1/reports/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_report(id_: str, *, time_range: str | None = None, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `time_range` — query `timeRange` · `start_date` — query `startDate` · `end_date` — query `endDate`
- **Returns (parsed)**: `GetReportResponse`
- **Returns (raw)**: `ApiResult[GetReportResponse, GetReportErrorBody]`
- **Error**: `GetReportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetReportResponse` | `doi_t/models/get_report_response.py` |
| `GetReportErrorBody` | `doi_t/errors/get_report_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.get_report_config

- **Route**: `GET /analytics/v1/reports/{id}/config`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_report_config(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ExternalReport`
- **Returns (raw)**: `ApiResult[ExternalReport, GetReportConfigErrorBody]`
- **Error**: `GetReportConfigErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExternalReport` | `doi_t/models/external_report.py` |
| `GetReportConfigErrorBody` | `doi_t/errors/get_report_config_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.list_reports

- **Route**: `GET /analytics/v1/reports`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_reports(*, max_results: int | None = 50, page_token: str | None = None, filter_: str | None = None, name_contains: str | None = None, min_creation_time: str | None = None, max_creation_time: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `page_token` — query `pageToken` · `filter_` — query `filter` · `name_contains` — query `nameContains` · `min_creation_time` — query `minCreationTime` · `max_creation_time` — query `maxCreationTime`
- **Returns (parsed)**: `ReportList`
- **Returns (raw)**: `ApiResult[ReportList, ListReportsErrorBody]`
- **Error**: `ListReportsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReportList` | `doi_t/models/report_list.py` |
| `ListReportsErrorBody` | `doi_t/errors/list_reports_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.query

- **Route**: `POST /analytics/v1/reports/query`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def query(*, body: AnalyticsV1ReportsQueryRequest | AnalyticsV1ReportsQueryRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RunReportResult`
- **Returns (raw)**: `ApiResult[RunReportResult, QueryErrorBody]`
- **Error**: `QueryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnalyticsV1ReportsQueryRequest` | `doi_t/models/analytics_v1_reports_query_request.py` |
| `AnalyticsV1ReportsQueryRequestDict` | `doi_t/models/analytics_v1_reports_query_request.py` |
| `RunReportResult` | `doi_t/models/run_report_result.py` |
| `QueryErrorBody` | `doi_t/errors/query_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.reports.update_report

- **Route**: `PATCH /analytics/v1/reports/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_report(id_: str, *, body: ExternalUpdateReport | ExternalUpdateReportDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ExternalReport`
- **Returns (raw)**: `ApiResult[ExternalReport, UpdateReportErrorBody]`
- **Error**: `UpdateReportErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExternalUpdateReport` | `doi_t/models/external_update_report.py` |
| `ExternalUpdateReportDict` | `doi_t/models/external_update_report.py` |
| `ExternalReport` | `doi_t/models/external_report.py` |
| `UpdateReportErrorBody` | `doi_t/errors/update_report_error.py` |
| `Error` | `doi_t/models/error.py` |

