<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `financial_modeling_prep/apis/search.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.search_symbols

- **Route**: `GET /search`
- **Auth**: `api_key_query`
- **Signature**: `def search_symbols(query: str, *, limit: int | None = 10, exchange: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `query`
- **Params**: `query` — query · `limit` — query · `exchange` — query
- **Returns (parsed)**: `list[SearchResponse]`
- **Returns (raw)**: `ApiResult[list[SearchResponse], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SearchResponse` | `financial_modeling_prep/models/search_response.py` |

