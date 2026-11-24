<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sports — operations

Accessor: `client.sports` · Source: `dynamic_feed/apis/sports.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.sports.sports_sports_get

- **Route**: `GET /sports`
- **Signature**: `def sports_sports_get(*, topic: str | None = "2026 FIFA World Cup", days: int | None = 30, lang: str | None = "en", x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `topic` — query · `days` — query · `lang` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, SportsSportsGetErrorBody]`
- **Error**: `SportsSportsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SportsSportsGetErrorBody` | `dynamic_feed/errors/sports_sports_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.sports.worldcup_route_worldcup_get

- **Route**: `GET /worldcup`
- **Signature**: `def worldcup_route_worldcup_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

