<!-- Generated file — do not edit; regenerated with the SDK. -->

# Inference — operations

Accessor: `client.inference` · Source: `hud/apis/inference.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.inference.get_inference_usage_v2_inference_usage_get

- **Route**: `GET /v2/inference/usage`
- **Signature**: `def get_inference_usage_v2_inference_usage_get(*, days: int | None = 7, user_id: UUID | None = None, api_key_id: UUID | None = None, byok_credential_id: UUID | None = None, model_id: UUID | None = None, request_type: str | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `days` — query · `user_id` — query · `api_key_id` — query · `byok_credential_id` — query · `model_id` — query · `request_type` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `InferenceUsageResponse`
- **Returns (raw)**: `ApiResult[InferenceUsageResponse, GetInferenceUsageV2InferenceUsageGetErrorBody]`
- **Error**: `GetInferenceUsageV2InferenceUsageGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InferenceUsageResponse` | `hud/models/inference_usage_response.py` |
| `GetInferenceUsageV2InferenceUsageGetErrorBody` | `hud/errors/get_inference_usage_v2_inference_usage_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

