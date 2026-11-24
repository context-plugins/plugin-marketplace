<!-- Generated file — do not edit; regenerated with the SDK. -->

# SearchApi — operations

Accessor: `client.search_api` · Source: `nordic_financial_news/apis/search_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search_api.get_api_v1_search

- **Route**: `GET /api/v1/search`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_search(q: str, *, type_: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `type_` — query `type` · `limit` — query
- **Returns (parsed)**: `SearchResult`
- **Returns (raw)**: `ApiResult[SearchResult, GetApiV1SearchErrorBody]`
- **Error**: `GetApiV1SearchErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchResult` | `nordic_financial_news/models/search_result.py` |
| `GetApiV1SearchErrorBody` | `nordic_financial_news/errors/get_api_v1_search_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

