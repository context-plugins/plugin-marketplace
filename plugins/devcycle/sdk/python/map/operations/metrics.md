<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.metrics` · Source: `dev_cycle/apis/metrics.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.metrics.metrics_controller_create

- **Route**: `POST /v1/projects/{project}/metrics`
- **Server**: `default`
- **Signature**: `def metrics_controller_create(project: str, body: CreateMetricDto | CreateMetricDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `body`
- **Params**: `project` — path · `body` — JSON body
- **Returns (parsed)**: `MetricDevCycleManagementMetricsApi`
- **Returns (raw)**: `ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerCreateErrorBody]`
- **Error**: `MetricsControllerCreateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `ConflictErrorResponse` [409] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `CreateMetricDto` | `dev_cycle/models/create_metric_dto.py` |
| `CreateMetricDtoDict` | `dev_cycle/models/create_metric_dto.py` |
| `MetricDevCycleManagementMetricsApi` | `dev_cycle/models/metric_dev_cycle_management_metrics_api.py` |
| `MetricsControllerCreateErrorBody` | `dev_cycle/errors/metrics_controller_create_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `ConflictErrorResponse` | `dev_cycle/models/conflict_error_response.py` |

### client.metrics.metrics_controller_fetch_results

- **Route**: `GET /v1/projects/{project}/metrics/{key}/results`
- **Server**: `default`
- **Signature**: `def metrics_controller_fetch_results(key: str, project: str, feature: str, start_date: RFC3339DateTime, end_date: RFC3339DateTime, *, environment: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`, `feature`, `start_date`, `end_date`
- **Params**: `key` — path · `project` — path · `feature` — query · `start_date` — query `startDate` · `end_date` — query `endDate` · `environment` — query
- **Returns (parsed)**: `MetricResult`
- **Returns (raw)**: `ApiResult[MetricResult, MetricsControllerFetchResultsErrorBody]`
- **Error**: `MetricsControllerFetchResultsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `MetricResult` | `dev_cycle/models/metric_result.py` |
| `MetricsControllerFetchResultsErrorBody` | `dev_cycle/errors/metrics_controller_fetch_results_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.metrics.metrics_controller_find_all

- **Route**: `GET /v1/projects/{project}/metrics`
- **Server**: `default`
- **Signature**: `def metrics_controller_find_all(project: str, *, page: float | None = 1.0, per_page: float | None = 100.0, sort_by: SortByOrStr | None = SortBy.CREATED_AT, sort_order: SortOrderOrStr | None = SortOrder.DESC, search: str | None = None, dimension: Dimension3OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`
- **Params**: `project` — path · `page` — query · `per_page` — query `perPage` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `search` — query · `dimension` — query
- **Returns (parsed)**: `list[MetricDevCycleManagementMetricsApi]`
- **Returns (raw)**: `ApiResult[list[MetricDevCycleManagementMetricsApi], MetricsControllerFindAllErrorBody]`
- **Error**: `MetricsControllerFindAllErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `dev_cycle/models/enums/sort_by.py` |
| `SortOrderOrStr` | `dev_cycle/models/enums/sort_order.py` |
| `Dimension3OrStr` | `dev_cycle/models/enums/dimension3.py` |
| `MetricDevCycleManagementMetricsApi` | `dev_cycle/models/metric_dev_cycle_management_metrics_api.py` |
| `MetricsControllerFindAllErrorBody` | `dev_cycle/errors/metrics_controller_find_all_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

### client.metrics.metrics_controller_find_one

- **Route**: `GET /v1/projects/{project}/metrics/{key}`
- **Server**: `default`
- **Signature**: `def metrics_controller_find_one(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `MetricDevCycleManagementMetricsApi`
- **Returns (raw)**: `ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerFindOneErrorBody]`
- **Error**: `MetricsControllerFindOneErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `MetricDevCycleManagementMetricsApi` | `dev_cycle/models/metric_dev_cycle_management_metrics_api.py` |
| `MetricsControllerFindOneErrorBody` | `dev_cycle/errors/metrics_controller_find_one_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.metrics.metrics_controller_remove

- **Route**: `DELETE /v1/projects/{project}/metrics/{key}`
- **Server**: `default`
- **Signature**: `def metrics_controller_remove(key: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`
- **Params**: `key` — path · `project` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, MetricsControllerRemoveErrorBody]`
- **Error**: `MetricsControllerRemoveErrorBody` — **Case A (typed)**
- **Error arms**: `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `MetricsControllerRemoveErrorBody` | `dev_cycle/errors/metrics_controller_remove_error.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.metrics.metrics_controller_update

- **Route**: `PATCH /v1/projects/{project}/metrics/{key}`
- **Server**: `default`
- **Signature**: `def metrics_controller_update(key: str, project: str, body: UpdateMetricDto | UpdateMetricDtoDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `project`, `body`
- **Params**: `key` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `MetricDevCycleManagementMetricsApi`
- **Returns (raw)**: `ApiResult[MetricDevCycleManagementMetricsApi, MetricsControllerUpdateErrorBody]`
- **Error**: `MetricsControllerUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `NotFoundErrorResponse` [404] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateMetricDto` | `dev_cycle/models/update_metric_dto.py` |
| `UpdateMetricDtoDict` | `dev_cycle/models/update_metric_dto.py` |
| `MetricDevCycleManagementMetricsApi` | `dev_cycle/models/metric_dev_cycle_management_metrics_api.py` |
| `MetricsControllerUpdateErrorBody` | `dev_cycle/errors/metrics_controller_update_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |
| `NotFoundErrorResponse` | `dev_cycle/models/not_found_error_response.py` |

### client.metrics.test_metric_results_controller_fetch

- **Route**: `GET /v1/projects/{project}/test-metric-results`
- **Server**: `default`
- **Signature**: `def test_metric_results_controller_fetch(project: str, feature: str, control: str, optimize: Optimize3OrStr, event: str, dimension: Dimension3OrStr, start_date: RFC3339DateTime, end_date: RFC3339DateTime, *, environment: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project`, `feature`, `control`, `optimize`, `event`, `dimension`, `start_date`, `end_date`
- **Params**: `project` — path · `feature` — query · `control` — query · `optimize` — query · `event` — query · `dimension` — query · `start_date` — query `startDate` · `end_date` — query `endDate` · `environment` — query
- **Returns (parsed)**: `MetricResult`
- **Returns (raw)**: `ApiResult[MetricResult, TestMetricResultsControllerFetchErrorBody]`
- **Error**: `TestMetricResultsControllerFetchErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestErrorResponse` [400] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Optimize3OrStr` | `dev_cycle/models/enums/optimize3.py` |
| `Dimension3OrStr` | `dev_cycle/models/enums/dimension3.py` |
| `MetricResult` | `dev_cycle/models/metric_result.py` |
| `TestMetricResultsControllerFetchErrorBody` | `dev_cycle/errors/test_metric_results_controller_fetch_error.py` |
| `BadRequestErrorResponse` | `dev_cycle/models/bad_request_error_response.py` |

