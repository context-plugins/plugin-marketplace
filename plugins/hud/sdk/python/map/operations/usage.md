<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.usage` · Source: `hud/apis/usage.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.usage.get_environment_usage_v2_environments_usage_get

- **Route**: `GET /v2/environments/usage`
- **Signature**: `def get_environment_usage_v2_environments_usage_get(*, days: int | None = 7, user_id: UUID | None = None, api_key_id: UUID | None = None, status: str | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `days` — query · `user_id` — query · `api_key_id` — query · `status` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `EnvironmentUsageResponse`
- **Returns (raw)**: `ApiResult[EnvironmentUsageResponse, GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody]`
- **Error**: `GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentUsageResponse` | `hud/models/environment_usage_response.py` |
| `GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody` | `hud/errors/get_environment_usage_v2_environments_usage_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.usage.get_inference_usage_aggregate_v2_usage_inference_get

- **Route**: `GET /v2/usage/inference`
- **Signature**: `def get_inference_usage_aggregate_v2_usage_inference_get(*, start: RFC3339DateTime | None = None, end: RFC3339DateTime | None = None, bucket_width: BucketWidthOrStr | None = BucketWidth._1D, group_by: list[GroupByOrStr] | None = None, user_id: UUID | None = None, api_key_id: UUID | None = None, byok_credential_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `start` — query · `end` — query · `bucket_width` — query · `group_by` — query · `user_id` — query · `api_key_id` — query · `byok_credential_id` — query
- **Returns (parsed)**: `InferenceUsageAggregateResponse`
- **Returns (raw)**: `ApiResult[InferenceUsageAggregateResponse, GetInferenceUsageAggregateV2UsageInferenceGetErrorBody]`
- **Error**: `GetInferenceUsageAggregateV2UsageInferenceGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BucketWidthOrStr` | `hud/models/enums/bucket_width.py` |
| `GroupByOrStr` | `hud/models/enums/group_by.py` |
| `InferenceUsageAggregateResponse` | `hud/models/inference_usage_aggregate_response.py` |
| `GetInferenceUsageAggregateV2UsageInferenceGetErrorBody` | `hud/errors/get_inference_usage_aggregate_v2_usage_inference_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

