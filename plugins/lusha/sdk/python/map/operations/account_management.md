<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountManagement — operations

Accessor: `client.account_management` · Source: `lusha/apis/account_management.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account_management.get_account_usage_stats

- **Route**: `GET /account/usage`
- **Auth**: `api_key_auth`
- **Signature**: `def get_account_usage_stats(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AccountUsageStatsResponse`
- **Returns (raw)**: `ApiResult[AccountUsageStatsResponse, GetAccountUsageStatsErrorBody]`
- **Error**: `GetAccountUsageStatsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountUsageStatsResponse` | `lusha/models/account_usage_stats_response.py` |
| `GetAccountUsageStatsErrorBody` | `lusha/errors/get_account_usage_stats_error.py` |
| `ErrorResponse` | `lusha/models/error_response.py` |

