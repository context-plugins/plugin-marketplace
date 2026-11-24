<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `comp_sniper/apis/account.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.get_account_usage

- **Route**: `GET /v1/account/usage`
- **Auth**: `bearer_auth`
- **Signature**: `def get_account_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AccountUsageResponse`
- **Returns (raw)**: `ApiResult[AccountUsageResponse, GetAccountUsageErrorBody]`
- **Error**: `GetAccountUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountUsageResponse` | `comp_sniper/models/account_usage_response.py` |
| `GetAccountUsageErrorBody` | `comp_sniper/errors/get_account_usage_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

