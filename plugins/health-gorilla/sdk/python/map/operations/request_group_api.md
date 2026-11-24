<!-- Generated file — do not edit; regenerated with the SDK. -->

# RequestGroupApi — operations

Accessor: `client.request_group_api` · Source: `health_gorilla/apis/request_group_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.request_group_api.create_request_group

- **Route**: `POST /RequestGroup`
- **Auth**: `bearer_auth`
- **Signature**: `def create_request_group(body: RequestGroup | RequestGroupDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RequestGroup`
- **Returns (raw)**: `ApiResult[RequestGroup, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `RequestGroup` | `health_gorilla/models/request_group.py` |
| `RequestGroupDict` | `health_gorilla/models/request_group.py` |

### client.request_group_api.read_request_group

- **Route**: `GET /RequestGroup/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def read_request_group(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `RequestGroup`
- **Returns (raw)**: `ApiResult[RequestGroup, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `RequestGroup` | `health_gorilla/models/request_group.py` |

### client.request_group_api.search_request_groups

- **Route**: `GET /RequestGroup`
- **Auth**: `bearer_auth`
- **Signature**: `def search_request_groups(*, patient: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `patient` — query · `count` — query `_count`
- **Returns (parsed)**: `Bundle`
- **Returns (raw)**: `ApiResult[Bundle, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Bundle` | `health_gorilla/models/bundle.py` |

