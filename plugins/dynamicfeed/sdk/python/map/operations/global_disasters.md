<!-- Generated file — do not edit; regenerated with the SDK. -->

# GlobalDisasters — operations

Accessor: `client.global_disasters` · Source: `dynamic_feed/apis/global_disasters.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.global_disasters.global_disasters_ep_global_disasters_get

- **Route**: `GET /global-disasters`
- **Signature**: `def global_disasters_ep_global_disasters_get(*, alert_level: str | None = "Orange;Red", event_type: str | None = None, country: str | None = None, days: int | None = 7, limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `alert_level` — query · `event_type` — query · `country` — query · `days` — query · `limit` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GlobalDisastersEpGlobalDisastersGetErrorBody]`
- **Error**: `GlobalDisastersEpGlobalDisastersGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GlobalDisastersEpGlobalDisastersGetErrorBody` | `dynamic_feed/errors/global_disasters_ep_global_disasters_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

