<!-- Generated file — do not edit; regenerated with the SDK. -->

# WatchApi — operations

Accessor: `client.watch_api` · Source: `rendex/apis/watch_api.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.watch_api.create_watch

- **Route**: `POST /v1/watches`
- **Auth**: `bearer_auth`
- **Signature**: `def create_watch(body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1WatchesResponse`
- **Returns (raw)**: `ApiResult[V1WatchesResponse, CreateWatchErrorBody]`
- **Error**: `CreateWatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateWatchRequest` | `rendex/models/create_watch_request.py` |
| `CreateWatchRequestDict` | `rendex/models/create_watch_request.py` |
| `V1WatchesResponse` | `rendex/models/v1_watches_response.py` |
| `CreateWatchErrorBody` | `rendex/errors/create_watch_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.watch_api.delete_watch

- **Route**: `DELETE /v1/watches/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_watch(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWatchErrorBody]`
- **Error**: `DeleteWatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWatchErrorBody` | `rendex/errors/delete_watch_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.watch_api.get_watch

- **Route**: `GET /v1/watches/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_watch(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `V1WatchesResponse`
- **Returns (raw)**: `ApiResult[V1WatchesResponse, GetWatchErrorBody]`
- **Error**: `GetWatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WatchesResponse` | `rendex/models/v1_watches_response.py` |
| `GetWatchErrorBody` | `rendex/errors/get_watch_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.watch_api.list_watch_runs

- **Route**: `GET /v1/watches/{id}/runs`
- **Auth**: `bearer_auth`
- **Signature**: `def list_watch_runs(id_: UUID, *, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `cursor` — query · `limit` — query
- **Returns (parsed)**: `V1WatchesRunsResponse`
- **Returns (raw)**: `ApiResult[V1WatchesRunsResponse, ListWatchRunsErrorBody]`
- **Error**: `ListWatchRunsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WatchesRunsResponse` | `rendex/models/v1_watches_runs_response.py` |
| `ListWatchRunsErrorBody` | `rendex/errors/list_watch_runs_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.watch_api.list_watches

- **Route**: `GET /v1/watches`
- **Auth**: `bearer_auth`
- **Signature**: `def list_watches(*, status: Status2RendexRenderingWatchApiOrStr | None = Status2RendexRenderingWatchApi.ALL, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `cursor` — query · `limit` — query
- **Returns (parsed)**: `V1WatchesResponse1`
- **Returns (raw)**: `ApiResult[V1WatchesResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Status2RendexRenderingWatchApiOrStr` | `rendex/models/enums/status2_rendex_rendering_watch_api.py` |
| `V1WatchesResponse1` | `rendex/models/v1_watches_response1.py` |

### client.watch_api.run_watch_now

- **Route**: `POST /v1/watches/{id}/run`
- **Auth**: `bearer_auth`
- **Signature**: `def run_watch_now(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `V1WatchesRunResponse`
- **Returns (raw)**: `ApiResult[V1WatchesRunResponse, RunWatchNowErrorBody]`
- **Error**: `RunWatchNowErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1WatchesRunResponse` | `rendex/models/v1_watches_run_response.py` |
| `RunWatchNowErrorBody` | `rendex/errors/run_watch_now_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.watch_api.test_watch

- **Route**: `POST /v1/watches/test`
- **Auth**: `bearer_auth`
- **Signature**: `def test_watch(body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1WatchesTestResponse`
- **Returns (raw)**: `ApiResult[V1WatchesTestResponse, TestWatchErrorBody]`
- **Error**: `TestWatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateWatchRequest` | `rendex/models/create_watch_request.py` |
| `CreateWatchRequestDict` | `rendex/models/create_watch_request.py` |
| `V1WatchesTestResponse` | `rendex/models/v1_watches_test_response.py` |
| `TestWatchErrorBody` | `rendex/errors/test_watch_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.watch_api.update_watch

- **Route**: `PATCH /v1/watches/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_watch(id_: UUID, body: UpdateWatchRequest | UpdateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `V1WatchesResponse`
- **Returns (raw)**: `ApiResult[V1WatchesResponse, UpdateWatchErrorBody]`
- **Error**: `UpdateWatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateWatchRequest` | `rendex/models/update_watch_request.py` |
| `UpdateWatchRequestDict` | `rendex/models/update_watch_request.py` |
| `V1WatchesResponse` | `rendex/models/v1_watches_response.py` |
| `UpdateWatchErrorBody` | `rendex/errors/update_watch_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

