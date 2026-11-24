<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `parallel/apis/search.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.v1_search_v1_search_post

- **Route**: `POST /v1/search`
- **Auth**: `api_key_auth`
- **Signature**: `def v1_search_v1_search_post(body: V1SearchRequest | V1SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SearchResponse`
- **Returns (raw)**: `ApiResult[V1SearchResponse, V1SearchV1SearchPostErrorBody]`
- **Error**: `V1SearchV1SearchPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1SearchRequest` | `parallel/models/v1_search_request.py` |
| `V1SearchRequestDict` | `parallel/models/v1_search_request.py` |
| `V1SearchResponse` | `parallel/models/v1_search_response.py` |
| `V1SearchV1SearchPostErrorBody` | `parallel/errors/v1_search_v1_search_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

