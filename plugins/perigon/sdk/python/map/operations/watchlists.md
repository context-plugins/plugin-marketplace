<!-- Generated file — do not edit; regenerated with the SDK. -->

# Watchlists — operations

Accessor: `client.watchlists` · Source: `perigon/apis/watchlists.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.watchlists.create_watchlist

- **Route**: `POST /v1/api/watchlists`
- **Auth**: `api_key_auth`
- **Signature**: `def create_watchlist(body: CreateWatchlistParams | CreateWatchlistParamsDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `WatchlistResult`
- **Returns (raw)**: `ApiResult[WatchlistResult, CreateWatchlistErrorBody]`
- **Error**: `CreateWatchlistErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateWatchlistParams` | `perigon/models/create_watchlist_params.py` |
| `CreateWatchlistParamsDict` | `perigon/models/create_watchlist_params.py` |
| `WatchlistResult` | `perigon/models/watchlist_result.py` |
| `CreateWatchlistErrorBody` | `perigon/errors/create_watchlist_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.watchlists.delete_watchlist

- **Route**: `DELETE /v1/api/watchlists/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def delete_watchlist(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `WatchlistResult`
- **Returns (raw)**: `ApiResult[WatchlistResult, DeleteWatchlistErrorBody]`
- **Error**: `DeleteWatchlistErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WatchlistResult` | `perigon/models/watchlist_result.py` |
| `DeleteWatchlistErrorBody` | `perigon/errors/delete_watchlist_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.watchlists.get_watchlist

- **Route**: `GET /v1/api/watchlists/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_watchlist(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `WatchlistResult`
- **Returns (raw)**: `ApiResult[WatchlistResult, GetWatchlistErrorBody]`
- **Error**: `GetWatchlistErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WatchlistResult` | `perigon/models/watchlist_result.py` |
| `GetWatchlistErrorBody` | `perigon/errors/get_watchlist_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.watchlists.list_watchlists

- **Route**: `GET /v1/api/watchlists`
- **Auth**: `api_key_auth`
- **Signature**: `def list_watchlists(sort_by: WatchlistSortByOrStr, sort_order: SortOrderOrStr, *, name: str | None = None, page: int | None = 0, size: int | None = 10, nulls: NullsOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sort_by`, `sort_order`
- **Params**: `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `name` — query · `page` — query · `size` — query · `nulls` — query
- **Returns (parsed)**: `WatchlistListResult`
- **Returns (raw)**: `ApiResult[WatchlistListResult, ListWatchlistsErrorBody]`
- **Error**: `ListWatchlistsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WatchlistSortByOrStr` | `perigon/models/enums/watchlist_sort_by.py` |
| `SortOrderOrStr` | `perigon/models/enums/sort_order.py` |
| `NullsOrStr` | `perigon/models/enums/nulls.py` |
| `WatchlistListResult` | `perigon/models/watchlist_list_result.py` |
| `ListWatchlistsErrorBody` | `perigon/errors/list_watchlists_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.watchlists.resolve_watchlists

- **Route**: `GET /v1/api/watchlists/resolve`
- **Auth**: `api_key_auth`
- **Signature**: `def resolve_watchlists(*, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query
- **Returns (parsed)**: `WatchlistResolveResult`
- **Returns (raw)**: `ApiResult[WatchlistResolveResult, ResolveWatchlistsErrorBody]`
- **Error**: `ResolveWatchlistsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WatchlistResolveResult` | `perigon/models/watchlist_resolve_result.py` |
| `ResolveWatchlistsErrorBody` | `perigon/errors/resolve_watchlists_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.watchlists.update_watchlist

- **Route**: `PATCH /v1/api/watchlists/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def update_watchlist(id_: int, body: UpdateWatchlistParams | UpdateWatchlistParamsDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `WatchlistResult`
- **Returns (raw)**: `ApiResult[WatchlistResult, UpdateWatchlistErrorBody]`
- **Error**: `UpdateWatchlistErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateWatchlistParams` | `perigon/models/update_watchlist_params.py` |
| `UpdateWatchlistParamsDict` | `perigon/models/update_watchlist_params.py` |
| `WatchlistResult` | `perigon/models/watchlist_result.py` |
| `UpdateWatchlistErrorBody` | `perigon/errors/update_watchlist_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

