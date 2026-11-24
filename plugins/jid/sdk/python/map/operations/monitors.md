<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitors — operations

Accessor: `client.monitors` · Source: `jid/apis/monitors.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.monitors.create_monitor

- **Route**: `POST /v1/monitors`
- **Auth**: `bearer`
- **Signature**: `def create_monitor(body: V1MonitorsRequest | V1MonitorsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CreateMonitorErrorBody]`
- **Error**: `CreateMonitorErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 402, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1MonitorsRequest` | `jid/models/v1_monitors_request.py` |
| `V1MonitorsRequestDict` | `jid/models/v1_monitors_request.py` |
| `CreateMonitorErrorBody` | `jid/errors/create_monitor_error.py` |
| `Error` | `jid/models/error.py` |

### client.monitors.delete_monitor

- **Route**: `DELETE /v1/monitors`
- **Auth**: `bearer`
- **Signature**: `def delete_monitor(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — query `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMonitorErrorBody]`
- **Error**: `DeleteMonitorErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteMonitorErrorBody` | `jid/errors/delete_monitor_error.py` |
| `Error` | `jid/models/error.py` |

### client.monitors.list_monitors

- **Route**: `GET /v1/monitors`
- **Auth**: `bearer`
- **Signature**: `def list_monitors(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ListMonitorsErrorBody]`
- **Error**: `ListMonitorsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListMonitorsErrorBody` | `jid/errors/list_monitors_error.py` |
| `Error` | `jid/models/error.py` |

