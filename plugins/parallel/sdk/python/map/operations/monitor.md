<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitor — operations

Accessor: `client.monitor` · Source: `parallel/apis/monitor.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.monitor.cancel_monitor_v1_monitors_monitor_id_cancel_post

- **Route**: `POST /v1/monitors/{monitor_id}/cancel`
- **Auth**: `api_key_auth`
- **Signature**: `def cancel_monitor_v1_monitors_monitor_id_cancel_post(monitor_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `monitor_id`
- **Params**: `monitor_id` — path
- **Returns (parsed)**: `MonitorResponse`
- **Returns (raw)**: `ApiResult[MonitorResponse, CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody]`
- **Error**: `CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MonitorResponse` | `parallel/models/monitor_response.py` |
| `CancelMonitorV1MonitorsMonitorIdCancelPostErrorBody` | `parallel/errors/cancel_monitor_v1_monitors_monitor_id_cancel_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.monitor.create_monitor_v1_monitors_post

- **Route**: `POST /v1/monitors`
- **Auth**: `api_key_auth`
- **Signature**: `def create_monitor_v1_monitors_post(body: CreateMonitorRequest | CreateMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `MonitorResponse`
- **Returns (raw)**: `ApiResult[MonitorResponse, CreateMonitorV1MonitorsPostErrorBody]`
- **Error**: `CreateMonitorV1MonitorsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateMonitorRequest` | `parallel/models/create_monitor_request.py` |
| `CreateMonitorRequestDict` | `parallel/models/create_monitor_request.py` |
| `MonitorResponse` | `parallel/models/monitor_response.py` |
| `CreateMonitorV1MonitorsPostErrorBody` | `parallel/errors/create_monitor_v1_monitors_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.monitor.list_monitor_events_v1_monitors_monitor_id_events_get

- **Route**: `GET /v1/monitors/{monitor_id}/events`
- **Auth**: `api_key_auth`
- **Signature**: `def list_monitor_events_v1_monitors_monitor_id_events_get(monitor_id: str, *, event_group_id: str | None = None, cursor: str | None = None, limit: int | None = None, include_completions: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `monitor_id`
- **Params**: `monitor_id` — path · `event_group_id` — query · `cursor` — query · `limit` — query · `include_completions` — query
- **Returns (parsed)**: `PaginatedMonitorEvents`
- **Returns (raw)**: `ApiResult[PaginatedMonitorEvents, ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody]`
- **Error**: `ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedMonitorEvents` | `parallel/models/paginated_monitor_events.py` |
| `ListMonitorEventsV1MonitorsMonitorIdEventsGetErrorBody` | `parallel/errors/list_monitor_events_v1_monitors_monitor_id_events_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.monitor.list_monitors_v1_monitors_get

- **Route**: `GET /v1/monitors`
- **Auth**: `api_key_auth`
- **Signature**: `def list_monitors_v1_monitors_get(*, cursor: str | None = None, limit: int | None = None, type_: list[Type4OrStr] | None = None, status: list[Status1OrStr] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `cursor` — query · `limit` — query · `type_` — query `type` · `status` — query
- **Returns (parsed)**: `PaginatedMonitorResponse`
- **Returns (raw)**: `ApiResult[PaginatedMonitorResponse, ListMonitorsV1MonitorsGetErrorBody]`
- **Error**: `ListMonitorsV1MonitorsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Type4OrStr` | `parallel/models/enums/type4.py` |
| `Status1OrStr` | `parallel/models/enums/status1.py` |
| `PaginatedMonitorResponse` | `parallel/models/paginated_monitor_response.py` |
| `ListMonitorsV1MonitorsGetErrorBody` | `parallel/errors/list_monitors_v1_monitors_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.monitor.retrieve_monitor_v1_monitors_monitor_id_get

- **Route**: `GET /v1/monitors/{monitor_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def retrieve_monitor_v1_monitors_monitor_id_get(monitor_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `monitor_id`
- **Params**: `monitor_id` — path
- **Returns (parsed)**: `MonitorResponse`
- **Returns (raw)**: `ApiResult[MonitorResponse, RetrieveMonitorV1MonitorsMonitorIdGetErrorBody]`
- **Error**: `RetrieveMonitorV1MonitorsMonitorIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MonitorResponse` | `parallel/models/monitor_response.py` |
| `RetrieveMonitorV1MonitorsMonitorIdGetErrorBody` | `parallel/errors/retrieve_monitor_v1_monitors_monitor_id_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.monitor.trigger_monitor_run_v1_monitors_monitor_id_trigger_post

- **Route**: `POST /v1/monitors/{monitor_id}/trigger`
- **Auth**: `api_key_auth`
- **Signature**: `def trigger_monitor_run_v1_monitors_monitor_id_trigger_post(monitor_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `monitor_id`
- **Params**: `monitor_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody]`
- **Error**: `TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TriggerMonitorRunV1MonitorsMonitorIdTriggerPostErrorBody` | `parallel/errors/trigger_monitor_run_v1_monitors_monitor_id_trigger_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.monitor.update_monitor_v1_monitors_monitor_id_update_post

- **Route**: `POST /v1/monitors/{monitor_id}/update`
- **Auth**: `api_key_auth`
- **Signature**: `def update_monitor_v1_monitors_monitor_id_update_post(monitor_id: str, body: UpdateMonitorRequest | UpdateMonitorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `monitor_id`, `body`
- **Params**: `monitor_id` — path · `body` — JSON body
- **Returns (parsed)**: `MonitorResponse`
- **Returns (raw)**: `ApiResult[MonitorResponse, UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody]`
- **Error**: `UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateMonitorRequest` | `parallel/models/update_monitor_request.py` |
| `UpdateMonitorRequestDict` | `parallel/models/update_monitor_request.py` |
| `MonitorResponse` | `parallel/models/monitor_response.py` |
| `UpdateMonitorV1MonitorsMonitorIdUpdatePostErrorBody` | `parallel/errors/update_monitor_v1_monitors_monitor_id_update_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

