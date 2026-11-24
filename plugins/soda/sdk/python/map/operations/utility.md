<!-- Generated file — do not edit; regenerated with the SDK. -->

# Utility — operations

Accessor: `client.utility` · Source: `soda/apis/utility.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.utility.get_api_v1_test_login

- **Route**: `GET /api/v1/test-login`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_test_login(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PublicApiTestLoginResponse`
- **Returns (raw)**: `ApiResult[PublicApiTestLoginResponse, GetApiV1TestLoginErrorBody]`
- **Error**: `GetApiV1TestLoginErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiTestLoginResponse` | `soda/models/public_api_test_login_response.py` |
| `GetApiV1TestLoginErrorBody` | `soda/errors/get_api_v1_test_login_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

