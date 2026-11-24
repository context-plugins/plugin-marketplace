<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorldPulse — operations

Accessor: `client.world_pulse` · Source: `dynamic_feed/apis/world_pulse.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.world_pulse.world_pulse_ep_world_pulse_get

- **Route**: `GET /world-pulse`
- **Signature**: `def world_pulse_ep_world_pulse_get(*, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, WorldPulseEpWorldPulseGetErrorBody]`
- **Error**: `WorldPulseEpWorldPulseGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorldPulseEpWorldPulseGetErrorBody` | `dynamic_feed/errors/world_pulse_ep_world_pulse_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

