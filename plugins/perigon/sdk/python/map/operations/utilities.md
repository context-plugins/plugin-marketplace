<!-- Generated file — do not edit; regenerated with the SDK. -->

# Utilities — operations

Accessor: `client.utilities` · Source: `perigon/apis/utilities.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.utilities.get_limits

- **Route**: `GET /v1/limits`
- **Auth**: `api_key_auth`
- **Signature**: `def get_limits(*, api_keys: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `api_keys` — query `apiKeys`
- **Returns (parsed)**: `LimitsResult`
- **Returns (raw)**: `ApiResult[LimitsResult, GetLimitsErrorBody]`
- **Error**: `GetLimitsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LimitsResult` | `perigon/models/limits_result.py` |
| `GetLimitsErrorBody` | `perigon/errors/get_limits_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

