<!-- Generated file — do not edit; regenerated with the SDK. -->

# Watchlist — operations

Accessor: `client.watchlist` · Source: `compabase/apis/watchlist.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.watchlist.delete_watchlist_krs_by_krs

- **Route**: `DELETE /watchlist/krs/{krs}`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def delete_watchlist_krs_by_krs(krs: str, *, dry_run: bool | None = False, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path · `dry_run` — query · `idempotency_key` — header `Idempotency-Key`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteWatchlistKrsByKrsErrorBody]`
- **Error**: `DeleteWatchlistKrsByKrsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteWatchlistKrsByKrsErrorBody` | `compabase/errors/delete_watchlist_krs_by_krs_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.watchlist.get_watchlist

- **Route**: `GET /watchlist`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_watchlist(*, limit: int | None = 20, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetWatchlistErrorBody]`
- **Error**: `GetWatchlistErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetWatchlistErrorBody` | `compabase/errors/get_watchlist_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

### client.watchlist.post_watchlist_krs_by_krs

- **Route**: `POST /watchlist/krs/{krs}`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def post_watchlist_krs_by_krs(krs: str, *, dry_run: bool | None = False, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `krs`
- **Params**: `krs` — path · `dry_run` — query · `idempotency_key` — header `Idempotency-Key`
- **Returns (parsed)**: `WatchlistAddResponse`
- **Returns (raw)**: `ApiResult[WatchlistAddResponse, PostWatchlistKrsByKrsErrorBody]`
- **Error**: `PostWatchlistKrsByKrsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WatchlistAddResponse` | `compabase/models/watchlist_add_response.py` |
| `PostWatchlistKrsByKrsErrorBody` | `compabase/errors/post_watchlist_krs_by_krs_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

