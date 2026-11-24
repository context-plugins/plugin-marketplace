<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `audioscrape/apis/search.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.search_api_v1

- **Route**: `POST /api/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_api_v1(body: SearchRequest | SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchResponse`
- **Returns (raw)**: `ApiResult[SearchResponse, SearchApiV1ErrorBody]`
- **Error**: `SearchApiV1ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [400, 401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchRequest` | `audioscrape/models/search_request.py` |
| `SearchRequestDict` | `audioscrape/models/search_request.py` |
| `SearchResponse` | `audioscrape/models/search_response.py` |
| `SearchApiV1ErrorBody` | `audioscrape/errors/search_api_v1_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

