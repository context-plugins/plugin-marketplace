<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.usage` · Source: `compabase/apis/usage.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.usage.get_usage

- **Route**: `GET /usage`
- **Auth**: `api_key_auth` OR `bearer_auth`
- **Signature**: `def get_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `UsageResponse`
- **Returns (raw)**: `ApiResult[UsageResponse, GetUsageErrorBody]`
- **Error**: `GetUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsageResponse` | `compabase/models/usage_response.py` |
| `GetUsageErrorBody` | `compabase/errors/get_usage_error.py` |
| `ErrorResponse` | `compabase/models/error_response.py` |

