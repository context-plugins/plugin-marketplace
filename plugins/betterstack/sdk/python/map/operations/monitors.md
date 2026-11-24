<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitors — operations

Accessor: `client.monitors` · Source: `better_stack/apis/monitors.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.monitors.create_monitor

- **Route**: `POST /monitors`
- **Auth**: `bearer_auth`
- **Signature**: `def create_monitor(body: MonitorCreate | MonitorCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `MonitorResource`
- **Returns (raw)**: `ApiResult[MonitorResource, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MonitorCreate` | `better_stack/models/monitor_create.py` |
| `MonitorCreateDict` | `better_stack/models/monitor_create.py` |
| `MonitorResource` | `better_stack/models/monitor_resource.py` |

### client.monitors.delete_monitor

- **Route**: `DELETE /monitors/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_monitor(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.monitors.get_monitor

- **Route**: `GET /monitors/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_monitor(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `MonitorResource`
- **Returns (raw)**: `ApiResult[MonitorResource, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MonitorResource` | `better_stack/models/monitor_resource.py` |

### client.monitors.get_monitor_availability

- **Route**: `GET /monitors/{id}/availability`
- **Auth**: `bearer_auth`
- **Signature**: `def get_monitor_availability(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.monitors.get_monitor_response_times

- **Route**: `GET /monitors/{id}/response-times`
- **Auth**: `bearer_auth`
- **Signature**: `def get_monitor_response_times(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.monitors.list_monitors

- **Route**: `GET /monitors`
- **Auth**: `bearer_auth`
- **Signature**: `def list_monitors(*, per_page: int | None = None, page: int | None = None, url: str | None = None, pronounceable_name: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `per_page` — query · `page` — query · `url` — query · `pronounceable_name` — query
- **Returns (parsed)**: `MonitorList`
- **Returns (raw)**: `ApiResult[MonitorList, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MonitorList` | `better_stack/models/monitor_list.py` |

### client.monitors.update_monitor

- **Route**: `PATCH /monitors/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_monitor(id_: str, body: MonitorCreate | MonitorCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `MonitorResource`
- **Returns (raw)**: `ApiResult[MonitorResource, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MonitorCreate` | `better_stack/models/monitor_create.py` |
| `MonitorCreateDict` | `better_stack/models/monitor_create.py` |
| `MonitorResource` | `better_stack/models/monitor_resource.py` |

