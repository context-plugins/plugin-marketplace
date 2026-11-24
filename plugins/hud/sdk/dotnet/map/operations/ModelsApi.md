<!-- Generated file — do not edit; regenerated with the SDK. -->

# ModelsApi — operations

Accessor: `client.ModelsApi` · Source: `src/Hud/Api/ModelsApi.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ForkModelV2ModelsForkPost

- **Signature**: `ForkModelV2ModelsForkPost(ForkModelV2ModelsForkPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ModelResponse`
- **Error**: `ApiException<ForkModelV2ModelsForkPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ForkModelV2ModelsForkPostRequest` | `src/Hud/Requests/ModelsApi/ForkModelV2ModelsForkPostRequest.cs` |
| `ModelForkRequest` | `src/Hud/Models/ModelForkRequest.cs` |
| `ModelResponse` | `src/Hud/Models/ModelResponse.cs` |
| `ForkModelV2ModelsForkPostError` | `src/Hud/Errors/ForkModelV2ModelsForkPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetModelV2ModelsModelIdGet

- **Signature**: `GetModelV2ModelsModelIdGet(GetModelV2ModelsModelIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Returns**: `ModelResponse`
- **Error**: `ApiException<GetModelV2ModelsModelIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetModelV2ModelsModelIdGetRequest` | `src/Hud/Requests/ModelsApi/GetModelV2ModelsModelIdGetRequest.cs` |
| `ModelResponse` | `src/Hud/Models/ModelResponse.cs` |
| `GetModelV2ModelsModelIdGetError` | `src/Hud/Errors/GetModelV2ModelsModelIdGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet

- **Signature**: `ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGet(ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`, `CheckpointId`
- **Query params (wire ← C#)**: `limit` ← `Limit`
- **Returns**: `IReadOnlyList<CheckpointTraceRow>`
- **Error**: `ApiException<ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest` | `src/Hud/Requests/ModelsApi/ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetRequest.cs` |
| `CheckpointTraceRow` | `src/Hud/Models/CheckpointTraceRow.cs` |
| `ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError` | `src/Hud/Errors/ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListModelCheckpointsV2ModelsModelIdCheckpointsGet

- **Signature**: `ListModelCheckpointsV2ModelsModelIdCheckpointsGet(ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Returns**: `IReadOnlyList<CheckpointResponse>`
- **Error**: `ApiException<ListModelCheckpointsV2ModelsModelIdCheckpointsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest` | `src/Hud/Requests/ModelsApi/ListModelCheckpointsV2ModelsModelIdCheckpointsGetRequest.cs` |
| `CheckpointResponse` | `src/Hud/Models/CheckpointResponse.cs` |
| `ListModelCheckpointsV2ModelsModelIdCheckpointsGetError` | `src/Hud/Errors/ListModelCheckpointsV2ModelsModelIdCheckpointsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListModelInferenceLogsV2ModelsModelIdLogsGet

- **Signature**: `ListModelInferenceLogsV2ModelsModelIdLogsGet(ListModelInferenceLogsV2ModelsModelIdLogsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`
- **Returns**: `PaginatedResponseModelInferenceLogEntry`
- **Error**: `ApiException<ListModelInferenceLogsV2ModelsModelIdLogsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListModelInferenceLogsV2ModelsModelIdLogsGetRequest` | `src/Hud/Requests/ModelsApi/ListModelInferenceLogsV2ModelsModelIdLogsGetRequest.cs` |
| `PaginatedResponseModelInferenceLogEntry` | `src/Hud/Models/PaginatedResponseModelInferenceLogEntry.cs` |
| `ListModelInferenceLogsV2ModelsModelIdLogsGetError` | `src/Hud/Errors/ListModelInferenceLogsV2ModelsModelIdLogsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListModelsV2ModelsGet

- **Signature**: `ListModelsV2ModelsGet(ListModelsV2ModelsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `scope` ← `Scope`, `search` ← `Search`, `trainable` ← `Trainable`, `include_deprecated` ← `IncludeDeprecated`, `sort` ← `Sort`
- **Returns**: `PaginatedResponseModelResponse`
- **Error**: `ApiException<ListModelsV2ModelsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListModelsV2ModelsGetRequest` | `src/Hud/Requests/ModelsApi/ListModelsV2ModelsGetRequest.cs` |
| `ScopeHudPlatformModelsApi` | `src/Hud/Models/AnyOf/ScopeHudPlatformModelsApi.cs` |
| `Search` | `src/Hud/Models/AnyOf/Search.cs` |
| `ModelListSort1` | `src/Hud/Models/Enums/ModelListSort1.cs` |
| `PaginatedResponseModelResponse` | `src/Hud/Models/PaginatedResponseModelResponse.cs` |
| `ListModelsV2ModelsGetError` | `src/Hud/Errors/ListModelsV2ModelsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ModelResultsV2ModelsModelIdResultsGet

- **Signature**: `ModelResultsV2ModelsModelIdResultsGet(ModelResultsV2ModelsModelIdResultsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Query params (wire ← C#)**: `checkpoint_ids` ← `CheckpointIds`, `purpose` ← `Purpose`
- **Returns**: `ModelResultsResponse`
- **Error**: `ApiException<ModelResultsV2ModelsModelIdResultsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModelResultsV2ModelsModelIdResultsGetRequest` | `src/Hud/Requests/ModelsApi/ModelResultsV2ModelsModelIdResultsGetRequest.cs` |
| `CheckpointIds` | `src/Hud/Models/AnyOf/CheckpointIds.cs` |
| `Purpose2` | `src/Hud/Models/AnyOf/Purpose2.cs` |
| `ModelResultsResponse` | `src/Hud/Models/ModelResultsResponse.cs` |
| `ModelResultsV2ModelsModelIdResultsGetError` | `src/Hud/Errors/ModelResultsV2ModelsModelIdResultsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet

- **Signature**: `ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGet(ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`
- **Query params (wire ← C#)**: `exclude` ← `Exclude`, `search` ← `Search`, `limit` ← `Limit`, `purpose` ← `Purpose`
- **Returns**: `SuggestedTasksetsResponse`
- **Error**: `ApiException<ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest` | `src/Hud/Requests/ModelsApi/ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetRequest.cs` |
| `Exclude` | `src/Hud/Models/AnyOf/Exclude.cs` |
| `Search1` | `src/Hud/Models/AnyOf/Search1.cs` |
| `Purpose2` | `src/Hud/Models/AnyOf/Purpose2.cs` |
| `SuggestedTasksetsResponse` | `src/Hud/Models/SuggestedTasksetsResponse.cs` |
| `ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError` | `src/Hud/Errors/ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ResolveModelV2ModelsResolveGet

- **Signature**: `ResolveModelV2ModelsResolveGet(ResolveModelV2ModelsResolveGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Model`
- **Query params (wire ← C#)**: `model` ← `Model`
- **Returns**: `ModelResponse`
- **Error**: `ApiException<ResolveModelV2ModelsResolveGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResolveModelV2ModelsResolveGetRequest` | `src/Hud/Requests/ModelsApi/ResolveModelV2ModelsResolveGetRequest.cs` |
| `ModelResponse` | `src/Hud/Models/ModelResponse.cs` |
| `ResolveModelV2ModelsResolveGetError` | `src/Hud/Errors/ResolveModelV2ModelsResolveGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### SetModelHeadV2ModelsModelIdHeadPut

- **Signature**: `SetModelHeadV2ModelsModelIdHeadPut(SetModelHeadV2ModelsModelIdHeadPutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`, `Body`
- **Returns**: `ModelResponse`
- **Error**: `ApiException<SetModelHeadV2ModelsModelIdHeadPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SetModelHeadV2ModelsModelIdHeadPutRequest` | `src/Hud/Requests/ModelsApi/SetModelHeadV2ModelsModelIdHeadPutRequest.cs` |
| `SetHeadRequest` | `src/Hud/Models/SetHeadRequest.cs` |
| `ModelResponse` | `src/Hud/Models/ModelResponse.cs` |
| `SetModelHeadV2ModelsModelIdHeadPutError` | `src/Hud/Errors/SetModelHeadV2ModelsModelIdHeadPutError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UpdateModelV2ModelsModelIdPatch

- **Signature**: `UpdateModelV2ModelsModelIdPatch(UpdateModelV2ModelsModelIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ModelId`, `Body`
- **Returns**: `ModelResponse`
- **Error**: `ApiException<UpdateModelV2ModelsModelIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateModelV2ModelsModelIdPatchRequest` | `src/Hud/Requests/ModelsApi/UpdateModelV2ModelsModelIdPatchRequest.cs` |
| `ModelUpdate` | `src/Hud/Models/ModelUpdate.cs` |
| `ModelResponse` | `src/Hud/Models/ModelResponse.cs` |
| `UpdateModelV2ModelsModelIdPatchError` | `src/Hud/Errors/UpdateModelV2ModelsModelIdPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

