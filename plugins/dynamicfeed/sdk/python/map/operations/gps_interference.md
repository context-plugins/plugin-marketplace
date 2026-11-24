<!-- Generated file — do not edit; regenerated with the SDK. -->

# GpsInterference — operations

Accessor: `client.gps_interference` · Source: `dynamic_feed/apis/gps_interference.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.gps_interference.gps_interference_gps_interference_get

- **Route**: `GET /gps-interference`
- **Signature**: `def gps_interference_gps_interference_get(*, region: str | None = "", lat: float | None = None, lon: float | None = None, radius_km: int | None = 300, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `region` — query · `lat` — query · `lon` — query · `radius_km` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GpsInterferenceGpsInterferenceGetErrorBody]`
- **Error**: `GpsInterferenceGpsInterferenceGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GpsInterferenceGpsInterferenceGetErrorBody` | `dynamic_feed/errors/gps_interference_gps_interference_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

