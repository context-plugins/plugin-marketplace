<!-- Generated file — do not edit; regenerated with the SDK. -->

# ModelsApi — operations

Accessor: `client.models_api` · Source: `hightouch/apis/models_api.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.models_api.create_model

- **Route**: `POST /models`
- **Auth**: `bearer_auth`
- **Signature**: `def create_model(body: ModelCreate | ModelCreateDict, *, skip_column_query: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `skip_column_query` — query `skipColumnQuery` · `body` — JSON body
- **Returns (parsed)**: `ModelsResponse1`
- **Returns (raw)**: `ApiResult[ModelsResponse1, CreateModelErrorBody]`
- **Error**: `CreateModelErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [409, 422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, anything unmapped]

| Type | Source |
| --- | --- |
| `ModelCreate` | `hightouch/models/model_create.py` |
| `ModelCreateDict` | `hightouch/models/model_create.py` |
| `ModelsResponse1` | `hightouch/models/unions/models_response1.py` |
| `CreateModelErrorBody` | `hightouch/errors/create_model_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.models_api.delete_model

- **Route**: `DELETE /models/{modelId}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_model(model_id: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path `modelId`
- **Returns (parsed)**: `ModelsResponse11`
- **Returns (raw)**: `ApiResult[ModelsResponse11, DeleteModelErrorBody]`
- **Error**: `DeleteModelErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [409, 422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsResponse11` | `hightouch/models/unions/models_response11.py` |
| `DeleteModelErrorBody` | `hightouch/errors/delete_model_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.models_api.get_audience_size

- **Route**: `GET /models/{modelId}/size/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_audience_size(model_id: float, job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`, `job_id`
- **Params**: `model_id` — path `modelId` · `job_id` — path `jobId`
- **Returns (parsed)**: `ModelsSizeResponse1`
- **Returns (raw)**: `ApiResult[ModelsSizeResponse1, GetAudienceSizeErrorBody]`
- **Error**: `GetAudienceSizeErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsSizeResponse1` | `hightouch/models/unions/models_size_response1.py` |
| `GetAudienceSizeErrorBody` | `hightouch/errors/get_audience_size_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.models_api.get_model

- **Route**: `GET /models/{modelId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_model(model_id: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path `modelId`
- **Returns (parsed)**: `Model`
- **Returns (raw)**: `ApiResult[Model, GetModelErrorBody]`
- **Error**: `GetModelErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Model` | `hightouch/models/model.py` |
| `GetModelErrorBody` | `hightouch/errors/get_model_error.py` |

### client.models_api.list_enrichment_runs

- **Route**: `GET /models/{modelId}/match-booster/runs`
- **Auth**: `bearer_auth`
- **Signature**: `def list_enrichment_runs(model_id: float, *, region: Region1OrStr | None = None, limit: float | None = 100.0, offset: float | None = 0.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path `modelId` · `region` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `ModelsMatchBoosterRunsResponse`
- **Returns (raw)**: `ApiResult[ModelsMatchBoosterRunsResponse, ListEnrichmentRunsErrorBody]`
- **Error**: `ListEnrichmentRunsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `Region1OrStr` | `hightouch/models/enums/region1.py` |
| `ModelsMatchBoosterRunsResponse` | `hightouch/models/unions/models_match_booster_runs_response.py` |
| `ListEnrichmentRunsErrorBody` | `hightouch/errors/list_enrichment_runs_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.models_api.list_model

- **Route**: `GET /models`
- **Auth**: `bearer_auth`
- **Signature**: `def list_model(*, name: str | None = None, slug: str | None = None, offset: float | None = 0.0, limit: float | None = 100.0, order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID, tags: list[str] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name` — query · `slug` — query · `offset` — query · `limit` — query · `order_by` — query `orderBy` · `tags` — query
- **Returns (parsed)**: `ModelsResponse`
- **Returns (raw)**: `ApiResult[ModelsResponse, ListModelErrorBody]`
- **Error**: `ListModelErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `OrderByHightouchDestinationsApiOrStr` | `hightouch/models/enums/order_by_hightouch_destinations_api.py` |
| `ModelsResponse` | `hightouch/models/models_response.py` |
| `ListModelErrorBody` | `hightouch/errors/list_model_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |

### client.models_api.start_audience_size_job

- **Route**: `POST /models/{modelId}/size`
- **Auth**: `bearer_auth`
- **Signature**: `def start_audience_size_job(model_id: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path `modelId`
- **Returns (parsed)**: `ModelsSizeResponse`
- **Returns (raw)**: `ApiResult[ModelsSizeResponse, StartAudienceSizeJobErrorBody]`
- **Error**: `StartAudienceSizeJobErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ModelsSizeResponse` | `hightouch/models/unions/models_size_response.py` |
| `StartAudienceSizeJobErrorBody` | `hightouch/errors/start_audience_size_job_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.models_api.trigger_enrichment

- **Route**: `POST /models/{modelId}/match-booster/trigger`
- **Auth**: `bearer_auth`
- **Signature**: `def trigger_enrichment(model_id: float, *, body: MatchBoosterTriggerInput | MatchBoosterTriggerInputDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path `modelId` · `body` — JSON body
- **Returns (parsed)**: `ModelsMatchBoosterTriggerResponse`
- **Returns (raw)**: `ApiResult[ModelsMatchBoosterTriggerResponse, TriggerEnrichmentErrorBody]`
- **Error**: `TriggerEnrichmentErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 403, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `MatchBoosterTriggerInput` | `hightouch/models/match_booster_trigger_input.py` |
| `MatchBoosterTriggerInputDict` | `hightouch/models/match_booster_trigger_input.py` |
| `ModelsMatchBoosterTriggerResponse` | `hightouch/models/unions/models_match_booster_trigger_response.py` |
| `TriggerEnrichmentErrorBody` | `hightouch/errors/trigger_enrichment_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

### client.models_api.update_model

- **Route**: `PATCH /models/{modelId}`
- **Auth**: `bearer_auth`
- **Signature**: `def update_model(model_id: float, body: ModelUpdate | ModelUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`, `body`
- **Params**: `model_id` — path `modelId` · `body` — JSON body
- **Returns (parsed)**: `ModelsResponse1`
- **Returns (raw)**: `ApiResult[ModelsResponse1, UpdateModelErrorBody]`
- **Error**: `UpdateModelErrorBody` — **Case A (typed)**
- **Error arms**: `ValidateErrorJson` [422] · `InternalServerErrorOrStr` [500] · `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `ModelUpdate` | `hightouch/models/model_update.py` |
| `ModelUpdateDict` | `hightouch/models/model_update.py` |
| `ModelsResponse1` | `hightouch/models/unions/models_response1.py` |
| `UpdateModelErrorBody` | `hightouch/errors/update_model_error.py` |
| `ValidateErrorJson` | `hightouch/models/validate_error_json.py` |
| `InternalServerErrorOrStr` | `hightouch/models/enums/internal_server_error.py` |

