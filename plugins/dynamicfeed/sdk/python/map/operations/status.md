<!-- Generated file — do not edit; regenerated with the SDK. -->

# Status — operations

Accessor: `client.status` · Source: `dynamic_feed/apis/status.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.status.status_status_get

- **Route**: `GET /status`
- **Signature**: `def status_status_get(*, category: str | None = None, only_issues: bool | None = None, limit: int | None = 100, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `category` — query · `only_issues` — query · `limit` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, StatusStatusGetErrorBody]`
- **Error**: `StatusStatusGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusStatusGetErrorBody` | `dynamic_feed/errors/status_status_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

