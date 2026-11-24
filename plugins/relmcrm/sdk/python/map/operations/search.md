<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `relm_crm/apis/search.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.search.search

- **Route**: `GET /search`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def search(q: str, *, limit: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `limit` — query
- **Returns (parsed)**: `SearchResult`
- **Returns (raw)**: `ApiResult[SearchResult, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SearchResult` | `relm_crm/models/search_result.py` |

