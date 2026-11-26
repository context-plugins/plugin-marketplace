<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `search1_api/apis/account.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.usage

- **Route**: `GET /usage`
- **Auth**: `bearer_auth`
- **Signature**: `def usage(*, period: PeriodOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `period` — query
- **Returns (parsed)**: `UsageResponse`
- **Returns (raw)**: `ApiResult[UsageResponse, UsageErrorBody]`
- **Error**: `UsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PeriodOrStr` | `search1_api/models/enums/period.py` |
| `UsageResponse` | `search1_api/models/usage_response.py` |
| `UsageErrorBody` | `search1_api/errors/usage_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

