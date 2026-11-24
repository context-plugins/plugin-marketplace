<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitoring — operations

Accessor: `client.monitoring` · Source: `skribble/apis/monitoring.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.monitoring.get_system_health

- **Route**: `GET /management/health`
- **Server**: `default_skribble_monitoring_api`
- **Signature**: `def get_system_health(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SystemHealthResponse`
- **Returns (raw)**: `ApiResult[SystemHealthResponse, GetSystemHealthErrorBody]`
- **Error**: `GetSystemHealthErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SystemHealthResponse` | `skribble/models/system_health_response.py` |
| `GetSystemHealthErrorBody` | `skribble/errors/get_system_health_error.py` |
| `Problem` | `skribble/models/problem.py` |

