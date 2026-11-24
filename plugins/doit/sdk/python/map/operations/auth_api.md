<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthApi — operations

Accessor: `client.auth_api` · Source: `doi_t/apis/auth_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.auth_api.validate

- **Route**: `GET /auth/v1/validate`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def validate(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ValidateResponse`
- **Returns (raw)**: `ApiResult[ValidateResponse, ValidateErrorBody]`
- **Error**: `ValidateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValidateResponse` | `doi_t/models/validate_response.py` |
| `ValidateErrorBody` | `doi_t/errors/validate_error.py` |
| `Error` | `doi_t/models/error.py` |

