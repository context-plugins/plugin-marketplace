<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiModels — operations

Accessor: `client.ai_models` · Source: `dynamic_feed/apis/ai_models.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ai_models.ai_models_ep_ai_models_get

- **Route**: `GET /ai-models`
- **Signature**: `def ai_models_ep_ai_models_get(*, query: str | None = None, org: str | None = None, task: str | None = "text-generation", sort: str | None = "trending", limit: int | None = 25, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `query` — query · `org` — query · `task` — query · `sort` — query · `limit` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, AiModelsEpAiModelsGetErrorBody]`
- **Error**: `AiModelsEpAiModelsGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AiModelsEpAiModelsGetErrorBody` | `dynamic_feed/errors/ai_models_ep_ai_models_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

