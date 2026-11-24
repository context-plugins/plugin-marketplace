<!-- Generated file — do not edit; regenerated with the SDK. -->

# ModelsApi — operations

Accessor: `client.models_api` · Source: `dynamic_feed/apis/models_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.models_api.models_models_get

- **Route**: `GET /models`
- **Signature**: `def models_models_get(*, q: str | None = None, provider: str | None = None, max_input_price: float | None = None, min_context: int | None = None, needs_vision: bool | None = None, limit: int | None = 50, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `provider` — query · `max_input_price` — query · `min_context` — query · `needs_vision` — query · `limit` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, ModelsModelsGetErrorBody]`
- **Error**: `ModelsModelsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsModelsGetErrorBody` | `dynamic_feed/errors/models_models_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

