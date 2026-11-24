<!-- Generated file — do not edit; regenerated with the SDK. -->

# Gateway — operations

Accessor: `client.gateway` · Source: `mr_scraper/apis/gateway.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.gateway.get_root

- **Route**: `GET /`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def get_root(url: str, *, token: str | None = None, async_: bool | None = None, beta: bool | None = None, detected_json: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `url`
- **Params**: `url` — query · `token` — query · `async_` — query `async` · `beta` — query · `detected_json` — query `detectedJson`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.gateway.post_root

- **Route**: `POST /`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def post_root(body: GatewayRequestBody | GatewayRequestBodyDict, *, async_: bool | None = None, beta: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `async_` — query `async` · `beta` — query · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `GatewayRequestBody` | `mr_scraper/models/gateway_request_body.py` |
| `GatewayRequestBodyDict` | `mr_scraper/models/gateway_request_body.py` |

