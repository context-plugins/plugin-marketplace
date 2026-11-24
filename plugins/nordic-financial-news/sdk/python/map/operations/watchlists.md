<!-- Generated file — do not edit; regenerated with the SDK. -->

# Watchlists — operations

Accessor: `client.watchlists` · Source: `nordic_financial_news/apis/watchlists.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.watchlists.get_api_v1_watchlists

- **Route**: `GET /api/v1/watchlists`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_watchlists(*, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1WatchlistsResponse`
- **Returns (raw)**: `ApiResult[ApiV1WatchlistsResponse, GetApiV1WatchlistsErrorBody]`
- **Error**: `GetApiV1WatchlistsErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WatchlistsResponse` | `nordic_financial_news/models/api_v1_watchlists_response.py` |
| `GetApiV1WatchlistsErrorBody` | `nordic_financial_news/errors/get_api_v1_watchlists_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.watchlists.get_api_v1_watchlists_by_id

- **Route**: `GET /api/v1/watchlists/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_watchlists_by_id(id_: str, *, limit: int | None = None, cursor: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `limit` — query · `cursor` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1WatchlistsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1WatchlistsResponse1, GetApiV1WatchlistsByIdErrorBody]`
- **Error**: `GetApiV1WatchlistsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1WatchlistsResponse1` | `nordic_financial_news/models/api_v1_watchlists_response1.py` |
| `GetApiV1WatchlistsByIdErrorBody` | `nordic_financial_news/errors/get_api_v1_watchlists_by_id_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

