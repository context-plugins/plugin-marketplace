<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `zillapi/apis/account.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.get_me

- **Route**: `GET /v1/me`
- **Auth**: `bearer_auth`
- **Signature**: `def get_me(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1MeResponse`
- **Returns (raw)**: `ApiResult[V1MeResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1MeResponse` | `zillapi/models/v1_me_response.py` |

### client.account.get_usage

- **Route**: `GET /v1/usage`
- **Auth**: `bearer_auth`
- **Signature**: `def get_usage(*, since: RFC3339DateTime | None = None, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `since` — query · `limit` — query
- **Returns (parsed)**: `V1UsageResponse`
- **Returns (raw)**: `ApiResult[V1UsageResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1UsageResponse` | `zillapi/models/v1_usage_response.py` |

