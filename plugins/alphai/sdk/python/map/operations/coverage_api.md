<!-- Generated file — do not edit; regenerated with the SDK. -->

# CoverageApi — operations

Accessor: `client.coverage_api` · Source: `alph_ai/apis/coverage_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.coverage_api.get_api_coverage

- **Route**: `GET /api/coverage/`
- **Auth**: `api_key`
- **Signature**: `def get_api_coverage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Coverage`
- **Returns (raw)**: `ApiResult[Coverage, GetApiCoverageErrorBody]`
- **Error**: `GetApiCoverageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Coverage` | `alph_ai/models/coverage.py` |
| `GetApiCoverageErrorBody` | `alph_ai/errors/get_api_coverage_error.py` |
| `Error` | `alph_ai/models/error.py` |

