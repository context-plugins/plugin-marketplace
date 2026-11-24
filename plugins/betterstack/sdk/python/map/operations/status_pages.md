<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatusPages — operations

Accessor: `client.status_pages` · Source: `better_stack/apis/status_pages.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.status_pages.create_status_page

- **Route**: `POST /status-pages`
- **Auth**: `bearer_auth`
- **Signature**: `def create_status_page(body: StatusPageCreate | StatusPageCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusPageCreate` | `better_stack/models/status_page_create.py` |
| `StatusPageCreateDict` | `better_stack/models/status_page_create.py` |

### client.status_pages.delete_status_page

- **Route**: `DELETE /status-pages/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_status_page(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.status_pages.get_status_page

- **Route**: `GET /status-pages/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_status_page(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.status_pages.list_status_pages

- **Route**: `GET /status-pages`
- **Auth**: `bearer_auth`
- **Signature**: `def list_status_pages(*, per_page: int | None = None, page: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `per_page` — query · `page` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.status_pages.list_status_pages_in_group

- **Route**: `GET /status-pages/group/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def list_status_pages_in_group(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.status_pages.update_status_page

- **Route**: `PATCH /status-pages/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_status_page(id_: str, body: StatusPageCreate | StatusPageCreateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusPageCreate` | `better_stack/models/status_page_create.py` |
| `StatusPageCreateDict` | `better_stack/models/status_page_create.py` |

