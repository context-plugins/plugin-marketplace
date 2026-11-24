<!-- Generated file — do not edit; regenerated with the SDK. -->

# CoverageApi — operations

Accessor: `client.coverage_api` · Source: `health_gorilla/apis/coverage_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.coverage_api.read_coverage

- **Route**: `GET /Coverage/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def read_coverage(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Coverage`
- **Returns (raw)**: `ApiResult[Coverage, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Coverage` | `health_gorilla/models/coverage.py` |

### client.coverage_api.search_coverage

- **Route**: `GET /Coverage`
- **Auth**: `bearer_auth`
- **Signature**: `def search_coverage(*, patient: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `patient` — query · `count` — query `_count`
- **Returns (parsed)**: `Bundle`
- **Returns (raw)**: `ApiResult[Bundle, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Bundle` | `health_gorilla/models/bundle.py` |

