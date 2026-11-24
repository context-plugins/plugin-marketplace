<!-- Generated file — do not edit; regenerated with the SDK. -->

# Movers — operations

Accessor: `client.movers` · Source: `dynamic_feed/apis/movers.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.movers.movers_movers_get

- **Route**: `GET /movers`
- **Signature**: `def movers_movers_get(*, direction: str | None = "gainers", asset_class: str | None = None, limit: int | None = 15, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `direction` — query · `asset_class` — query · `limit` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, MoversMoversGetErrorBody]`
- **Error**: `MoversMoversGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MoversMoversGetErrorBody` | `dynamic_feed/errors/movers_movers_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

