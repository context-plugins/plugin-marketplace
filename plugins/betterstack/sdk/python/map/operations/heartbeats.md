<!-- Generated file — do not edit; regenerated with the SDK. -->

# Heartbeats — operations

Accessor: `client.heartbeats` · Source: `better_stack/apis/heartbeats.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.heartbeats.create_heartbeat

- **Route**: `POST /heartbeats`
- **Auth**: `bearer_auth`
- **Signature**: `def create_heartbeat(body: HeartbeatCreate | HeartbeatCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `HeartbeatCreate` | `better_stack/models/heartbeat_create.py` |
| `HeartbeatCreateDict` | `better_stack/models/heartbeat_create.py` |

### client.heartbeats.delete_heartbeat

- **Route**: `DELETE /heartbeats/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_heartbeat(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.heartbeats.get_heartbeat

- **Route**: `GET /heartbeats/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_heartbeat(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.heartbeats.get_heartbeat_availability

- **Route**: `GET /heartbeats/{id}/availability`
- **Auth**: `bearer_auth`
- **Signature**: `def get_heartbeat_availability(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.heartbeats.list_heartbeats

- **Route**: `GET /heartbeats`
- **Auth**: `bearer_auth`
- **Signature**: `def list_heartbeats(*, per_page: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `per_page` — query · `page` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.heartbeats.update_heartbeat

- **Route**: `PATCH /heartbeats/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_heartbeat(id_: str, body: HeartbeatCreate | HeartbeatCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `HeartbeatCreate` | `better_stack/models/heartbeat_create.py` |
| `HeartbeatCreateDict` | `better_stack/models/heartbeat_create.py` |

