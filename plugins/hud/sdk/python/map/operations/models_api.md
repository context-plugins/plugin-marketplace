<!-- Generated file — do not edit; regenerated with the SDK. -->

# ModelsApi — operations

Accessor: `client.models_api` · Source: `hud/apis/models_api.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.models_api.fork_model_v2_models_fork_post

- **Route**: `POST /v2/models/fork`
- **Signature**: `def fork_model_v2_models_fork_post(body: ModelForkRequest | ModelForkRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ModelResponse`
- **Returns (raw)**: `ApiResult[ModelResponse, ForkModelV2ModelsForkPostErrorBody]`
- **Error**: `ForkModelV2ModelsForkPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelForkRequest` | `hud/models/model_fork_request.py` |
| `ModelForkRequestDict` | `hud/models/model_fork_request.py` |
| `ModelResponse` | `hud/models/model_response.py` |
| `ForkModelV2ModelsForkPostErrorBody` | `hud/errors/fork_model_v2_models_fork_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.get_model_v2_models_model_id_get

- **Route**: `GET /v2/models/{model_id}`
- **Signature**: `def get_model_v2_models_model_id_get(model_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path
- **Returns (parsed)**: `ModelResponse`
- **Returns (raw)**: `ApiResult[ModelResponse, GetModelV2ModelsModelIdGetErrorBody]`
- **Error**: `GetModelV2ModelsModelIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelResponse` | `hud/models/model_response.py` |
| `GetModelV2ModelsModelIdGetErrorBody` | `hud/errors/get_model_v2_models_model_id_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get

- **Route**: `GET /v2/models/{model_id}/checkpoints/{checkpoint_id}/traces`
- **Signature**: `def list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(model_id: UUID, checkpoint_id: UUID, *, limit: int | None = 200, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`, `checkpoint_id`
- **Params**: `model_id` — path · `checkpoint_id` — path · `limit` — query
- **Returns (parsed)**: `list[CheckpointTraceRow]`
- **Returns (raw)**: `ApiResult[list[CheckpointTraceRow], ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody]`
- **Error**: `ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckpointTraceRow` | `hud/models/checkpoint_trace_row.py` |
| `ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody` | `hud/errors/list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.list_model_checkpoints_v2_models_model_id_checkpoints_get

- **Route**: `GET /v2/models/{model_id}/checkpoints`
- **Signature**: `def list_model_checkpoints_v2_models_model_id_checkpoints_get(model_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path
- **Returns (parsed)**: `list[CheckpointResponse]`
- **Returns (raw)**: `ApiResult[list[CheckpointResponse], ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody]`
- **Error**: `ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckpointResponse` | `hud/models/checkpoint_response.py` |
| `ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody` | `hud/errors/list_model_checkpoints_v2_models_model_id_checkpoints_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.list_model_inference_logs_v2_models_model_id_logs_get

- **Route**: `GET /v2/models/{model_id}/logs`
- **Signature**: `def list_model_inference_logs_v2_models_model_id_logs_get(model_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path · `limit` — query · `offset` — query
- **Returns (parsed)**: `PaginatedResponseModelInferenceLogEntry`
- **Returns (raw)**: `ApiResult[PaginatedResponseModelInferenceLogEntry, ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody]`
- **Error**: `ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedResponseModelInferenceLogEntry` | `hud/models/paginated_response_model_inference_log_entry.py` |
| `ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody` | `hud/errors/list_model_inference_logs_v2_models_model_id_logs_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.list_models_v2_models_get

- **Route**: `GET /v2/models`
- **Signature**: `def list_models_v2_models_get(*, limit: int | None = 100, offset: int | None = 0, scope: ModelListScopeOrStr | None = None, search: str | None = None, trainable: bool | None = False, include_deprecated: bool | None = True, sort: ModelListSort1OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `scope` — query · `search` — query · `trainable` — query · `include_deprecated` — query · `sort` — query
- **Returns (parsed)**: `PaginatedResponseModelResponse`
- **Returns (raw)**: `ApiResult[PaginatedResponseModelResponse, ListModelsV2ModelsGetErrorBody]`
- **Error**: `ListModelsV2ModelsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelListScopeOrStr` | `hud/models/enums/model_list_scope.py` |
| `ModelListSort1OrStr` | `hud/models/enums/model_list_sort1.py` |
| `PaginatedResponseModelResponse` | `hud/models/paginated_response_model_response.py` |
| `ListModelsV2ModelsGetErrorBody` | `hud/errors/list_models_v2_models_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.model_results_v2_models_model_id_results_get

- **Route**: `GET /v2/models/{model_id}/results`
- **Signature**: `def model_results_v2_models_model_id_results_get(model_id: UUID, *, checkpoint_ids: str | None = None, purpose: PurposeOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path · `checkpoint_ids` — query · `purpose` — query
- **Returns (parsed)**: `ModelResultsResponse`
- **Returns (raw)**: `ApiResult[ModelResultsResponse, ModelResultsV2ModelsModelIdResultsGetErrorBody]`
- **Error**: `ModelResultsV2ModelsModelIdResultsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PurposeOrStr` | `hud/models/enums/purpose.py` |
| `ModelResultsResponse` | `hud/models/model_results_response.py` |
| `ModelResultsV2ModelsModelIdResultsGetErrorBody` | `hud/errors/model_results_v2_models_model_id_results_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get

- **Route**: `GET /v2/models/{model_id}/suggested-tasksets`
- **Signature**: `def model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(model_id: UUID, *, exclude: str | None = None, search: str | None = None, limit: int | None = 50, purpose: PurposeOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`
- **Params**: `model_id` — path · `exclude` — query · `search` — query · `limit` — query · `purpose` — query
- **Returns (parsed)**: `SuggestedTasksetsResponse`
- **Returns (raw)**: `ApiResult[SuggestedTasksetsResponse, ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody]`
- **Error**: `ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PurposeOrStr` | `hud/models/enums/purpose.py` |
| `SuggestedTasksetsResponse` | `hud/models/suggested_tasksets_response.py` |
| `ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody` | `hud/errors/model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.resolve_model_v2_models_resolve_get

- **Route**: `GET /v2/models/resolve`
- **Signature**: `def resolve_model_v2_models_resolve_get(model: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model`
- **Params**: `model` — query
- **Returns (parsed)**: `ModelResponse`
- **Returns (raw)**: `ApiResult[ModelResponse, ResolveModelV2ModelsResolveGetErrorBody]`
- **Error**: `ResolveModelV2ModelsResolveGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelResponse` | `hud/models/model_response.py` |
| `ResolveModelV2ModelsResolveGetErrorBody` | `hud/errors/resolve_model_v2_models_resolve_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.set_model_head_v2_models_model_id_head_put

- **Route**: `PUT /v2/models/{model_id}/head`
- **Signature**: `def set_model_head_v2_models_model_id_head_put(model_id: UUID, body: SetHeadRequest | SetHeadRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`, `body`
- **Params**: `model_id` — path · `body` — JSON body
- **Returns (parsed)**: `ModelResponse`
- **Returns (raw)**: `ApiResult[ModelResponse, SetModelHeadV2ModelsModelIdHeadPutErrorBody]`
- **Error**: `SetModelHeadV2ModelsModelIdHeadPutErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetHeadRequest` | `hud/models/set_head_request.py` |
| `SetHeadRequestDict` | `hud/models/set_head_request.py` |
| `ModelResponse` | `hud/models/model_response.py` |
| `SetModelHeadV2ModelsModelIdHeadPutErrorBody` | `hud/errors/set_model_head_v2_models_model_id_head_put_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.models_api.update_model_v2_models_model_id_patch

- **Route**: `PATCH /v2/models/{model_id}`
- **Signature**: `def update_model_v2_models_model_id_patch(model_id: UUID, body: ModelUpdate | ModelUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `model_id`, `body`
- **Params**: `model_id` — path · `body` — JSON body
- **Returns (parsed)**: `ModelResponse`
- **Returns (raw)**: `ApiResult[ModelResponse, UpdateModelV2ModelsModelIdPatchErrorBody]`
- **Error**: `UpdateModelV2ModelsModelIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModelUpdate` | `hud/models/model_update.py` |
| `ModelUpdateDict` | `hud/models/model_update.py` |
| `ModelResponse` | `hud/models/model_response.py` |
| `UpdateModelV2ModelsModelIdPatchErrorBody` | `hud/errors/update_model_v2_models_model_id_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

