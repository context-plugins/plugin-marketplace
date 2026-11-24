<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `jid/apis/search.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.search_businesses

- **Route**: `GET /v1/search`
- **Signature**: `def search_businesses(q: str, *, country: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `country` — query
- **Returns (parsed)**: `SearchResponse`
- **Returns (raw)**: `ApiResult[SearchResponse, SearchBusinessesErrorBody]`
- **Error**: `SearchBusinessesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchResponse` | `jid/models/search_response.py` |
| `SearchBusinessesErrorBody` | `jid/errors/search_businesses_error.py` |
| `Error` | `jid/models/error.py` |

