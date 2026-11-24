<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.usage` · Source: `apibara/apis/usage.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.usage.get_api_usage

- **Route**: `GET /usage`
- **Auth**: `api_key_auth`
- **Signature**: `def get_api_usage(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `UsageResponse`
- **Returns (raw)**: `ApiResult[UsageResponse, GetApiUsageErrorBody]`
- **Error**: `GetApiUsageErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [403, 422, 503] · `RawError` [401, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `UsageResponse` | `apibara/models/usage_response.py` |
| `GetApiUsageErrorBody` | `apibara/errors/get_api_usage_error.py` |
| `ApiErrorModel` | `apibara/models/api_error_model.py` |

