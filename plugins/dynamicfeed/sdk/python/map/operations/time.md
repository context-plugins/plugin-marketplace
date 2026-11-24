<!-- Generated file — do not edit; regenerated with the SDK. -->

# Time — operations

Accessor: `client.time` · Source: `dynamic_feed/apis/time.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.time.time_ep_time_get

- **Route**: `GET /time`
- **Signature**: `def time_ep_time_get(*, tz: str | None = "UTC", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `tz` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, TimeEpTimeGetErrorBody]`
- **Error**: `TimeEpTimeGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeEpTimeGetErrorBody` | `dynamic_feed/errors/time_ep_time_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

