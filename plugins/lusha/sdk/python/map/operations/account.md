<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `lusha/apis/account.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.get_account_usage

- **Route**: `GET /v3/account/usage`
- **Auth**: `api_key_auth`
- **Signature**: `def get_account_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AccountUsageResponse`
- **Returns (raw)**: `ApiResult[AccountUsageResponse, GetAccountUsageErrorBody]`
- **Error**: `GetAccountUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountUsageResponse` | `lusha/models/account_usage_response.py` |
| `GetAccountUsageErrorBody` | `lusha/errors/get_account_usage_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

