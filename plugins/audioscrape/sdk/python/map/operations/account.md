<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `audioscrape/apis/account.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.get_me

- **Route**: `GET /api/me`
- **Auth**: `bearer_auth`
- **Signature**: `def get_me(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `MeResponse`
- **Returns (raw)**: `ApiResult[MeResponse, GetMeErrorBody]`
- **Error**: `GetMeErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MeResponse` | `audioscrape/models/me_response.py` |
| `GetMeErrorBody` | `audioscrape/errors/get_me_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.account.get_me_usage

- **Route**: `GET /api/me/usage`
- **Auth**: `bearer_auth`
- **Signature**: `def get_me_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `UsageResponse`
- **Returns (raw)**: `ApiResult[UsageResponse, GetMeUsageErrorBody]`
- **Error**: `GetMeUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsageResponse` | `audioscrape/models/usage_response.py` |
| `GetMeUsageErrorBody` | `audioscrape/errors/get_me_usage_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

