<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitors — operations

Accessor: `client.monitors` · Source: `perigon/apis/monitors.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.monitors.activate_monitor_api

- **Route**: `POST /v1/api/monitors/{uuid}/activate`
- **Auth**: `api_key_auth`
- **Signature**: `def activate_monitor_api(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`
- **Params**: `uuid` — path
- **Returns (parsed)**: `MonitorResult`
- **Returns (raw)**: `ApiResult[MonitorResult, ActivateMonitorApiErrorBody]`
- **Error**: `ActivateMonitorApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MonitorResult` | `perigon/models/monitor_result.py` |
| `ActivateMonitorApiErrorBody` | `perigon/errors/activate_monitor_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.monitors.archive_monitor_api

- **Route**: `DELETE /v1/api/monitors/{uuid}`
- **Auth**: `api_key_auth`
- **Signature**: `def archive_monitor_api(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`
- **Params**: `uuid` — path
- **Returns (parsed)**: `MonitorResult`
- **Returns (raw)**: `ApiResult[MonitorResult, ArchiveMonitorApiErrorBody]`
- **Error**: `ArchiveMonitorApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MonitorResult` | `perigon/models/monitor_result.py` |
| `ArchiveMonitorApiErrorBody` | `perigon/errors/archive_monitor_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.monitors.create_monitor_api

- **Route**: `POST /v1/api/monitors`
- **Auth**: `api_key_auth`
- **Signature**: `def create_monitor_api(body: SignalApiCreateBody | SignalApiCreateBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `MonitorResult`
- **Returns (raw)**: `ApiResult[MonitorResult, CreateMonitorApiErrorBody]`
- **Error**: `CreateMonitorApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignalApiCreateBody` | `perigon/models/signal_api_create_body.py` |
| `SignalApiCreateBodyDict` | `perigon/models/signal_api_create_body.py` |
| `MonitorResult` | `perigon/models/monitor_result.py` |
| `CreateMonitorApiErrorBody` | `perigon/errors/create_monitor_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.monitors.get_monitor_api

- **Route**: `GET /v1/api/monitors/{uuid}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_monitor_api(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`
- **Params**: `uuid` — path
- **Returns (parsed)**: `MonitorResult`
- **Returns (raw)**: `ApiResult[MonitorResult, GetMonitorApiErrorBody]`
- **Error**: `GetMonitorApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MonitorResult` | `perigon/models/monitor_result.py` |
| `GetMonitorApiErrorBody` | `perigon/errors/get_monitor_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.monitors.list_monitor_events_api

- **Route**: `GET /v1/api/monitors/{uuid}/events`
- **Auth**: `api_key_auth`
- **Signature**: `def list_monitor_events_api(uuid: UUID, sort_by: str, sort_order: SortOrderOrStr, *, event_type: str | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`, `sort_by`, `sort_order`
- **Params**: `uuid` — path · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `event_type` — query `eventType` · `from_` — query `from` · `to` — query · `page` — query · `size` — query · `nulls` — query
- **Returns (parsed)**: `MonitorEventListResult`
- **Returns (raw)**: `ApiResult[MonitorEventListResult, ListMonitorEventsApiErrorBody]`
- **Error**: `ListMonitorEventsApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrderOrStr` | `perigon/models/enums/sort_order.py` |
| `NullsOrStr` | `perigon/models/enums/nulls.py` |
| `MonitorEventListResult` | `perigon/models/monitor_event_list_result.py` |
| `ListMonitorEventsApiErrorBody` | `perigon/errors/list_monitor_events_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.monitors.list_monitor_newsletters_api

- **Route**: `GET /v1/api/monitors/{uuid}/newsletters`
- **Auth**: `api_key_auth`
- **Signature**: `def list_monitor_newsletters_api(uuid: UUID, sort_by: str, sort_order: SortOrderOrStr, *, title: str | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`, `sort_by`, `sort_order`
- **Params**: `uuid` — path · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `title` — query · `from_` — query `from` · `to` — query · `page` — query · `size` — query · `nulls` — query
- **Returns (parsed)**: `MonitorNewsletterListResult`
- **Returns (raw)**: `ApiResult[MonitorNewsletterListResult, ListMonitorNewslettersApiErrorBody]`
- **Error**: `ListMonitorNewslettersApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrderOrStr` | `perigon/models/enums/sort_order.py` |
| `NullsOrStr` | `perigon/models/enums/nulls.py` |
| `MonitorNewsletterListResult` | `perigon/models/monitor_newsletter_list_result.py` |
| `ListMonitorNewslettersApiErrorBody` | `perigon/errors/list_monitor_newsletters_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.monitors.list_monitor_summaries_api

- **Route**: `GET /v1/api/monitors/{uuid}/summary`
- **Auth**: `api_key_auth`
- **Signature**: `def list_monitor_summaries_api(uuid: UUID, sort_by: str, sort_order: SortOrderOrStr, *, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`, `sort_by`, `sort_order`
- **Params**: `uuid` — path · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `from_` — query `from` · `to` — query · `page` — query · `size` — query · `nulls` — query
- **Returns (parsed)**: `MonitorSummaryListResult`
- **Returns (raw)**: `ApiResult[MonitorSummaryListResult, ListMonitorSummariesApiErrorBody]`
- **Error**: `ListMonitorSummariesApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrderOrStr` | `perigon/models/enums/sort_order.py` |
| `NullsOrStr` | `perigon/models/enums/nulls.py` |
| `MonitorSummaryListResult` | `perigon/models/monitor_summary_list_result.py` |
| `ListMonitorSummariesApiErrorBody` | `perigon/errors/list_monitor_summaries_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.monitors.list_monitors_api

- **Route**: `GET /v1/api/monitors`
- **Auth**: `api_key_auth`
- **Signature**: `def list_monitors_api(sort_by: str, sort_order: SortOrderOrStr, *, uuid: list[UUID] | None = None, name: str | None = None, status: list[Status2OrStr] | None = None, classification_type: list[ClassificationType3OrStr] | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sort_by`, `sort_order`
- **Params**: `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `uuid` — query · `name` — query · `status` — query · `classification_type` — query `classificationType` · `page` — query · `size` — query · `nulls` — query
- **Returns (parsed)**: `MonitorListResult`
- **Returns (raw)**: `ApiResult[MonitorListResult, ListMonitorsApiErrorBody]`
- **Error**: `ListMonitorsApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrderOrStr` | `perigon/models/enums/sort_order.py` |
| `Status2OrStr` | `perigon/models/enums/status2.py` |
| `ClassificationType3OrStr` | `perigon/models/enums/classification_type3.py` |
| `NullsOrStr` | `perigon/models/enums/nulls.py` |
| `MonitorListResult` | `perigon/models/monitor_list_result.py` |
| `ListMonitorsApiErrorBody` | `perigon/errors/list_monitors_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.monitors.pause_monitor_api

- **Route**: `POST /v1/api/monitors/{uuid}/pause`
- **Auth**: `api_key_auth`
- **Signature**: `def pause_monitor_api(uuid: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`
- **Params**: `uuid` — path
- **Returns (parsed)**: `MonitorResult`
- **Returns (raw)**: `ApiResult[MonitorResult, PauseMonitorApiErrorBody]`
- **Error**: `PauseMonitorApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MonitorResult` | `perigon/models/monitor_result.py` |
| `PauseMonitorApiErrorBody` | `perigon/errors/pause_monitor_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.monitors.update_monitor_api

- **Route**: `PATCH /v1/api/monitors/{uuid}`
- **Auth**: `api_key_auth`
- **Signature**: `def update_monitor_api(uuid: UUID, body: SignalApiUpdateBody | SignalApiUpdateBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uuid`, `body`
- **Params**: `uuid` — path · `body` — JSON body
- **Returns (parsed)**: `MonitorResult`
- **Returns (raw)**: `ApiResult[MonitorResult, UpdateMonitorApiErrorBody]`
- **Error**: `UpdateMonitorApiErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignalApiUpdateBody` | `perigon/models/signal_api_update_body.py` |
| `SignalApiUpdateBodyDict` | `perigon/models/signal_api_update_body.py` |
| `MonitorResult` | `perigon/models/monitor_result.py` |
| `UpdateMonitorApiErrorBody` | `perigon/errors/update_monitor_api_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

