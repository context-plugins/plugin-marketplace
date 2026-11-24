<!-- Generated file — do not edit; regenerated with the SDK. -->

# EnvVars — operations

Accessor: `client.EnvVars` · Source: `src/Hud/Api/EnvVars.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchReplaceEnvVarsV2EnvVarsBatchPut

- **Signature**: `BatchReplaceEnvVarsV2EnvVarsBatchPut(BatchReplaceEnvVarsV2EnvVarsBatchPutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RegistryEnvVarBatchResponse`
- **Error**: `ApiException<BatchReplaceEnvVarsV2EnvVarsBatchPutError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchReplaceEnvVarsV2EnvVarsBatchPutRequest` | `src/Hud/Requests/EnvVars/BatchReplaceEnvVarsV2EnvVarsBatchPutRequest.cs` |
| `RegistryEnvVarBatchRequest` | `src/Hud/Models/RegistryEnvVarBatchRequest.cs` |
| `RegistryEnvVarBatchResponse` | `src/Hud/Models/RegistryEnvVarBatchResponse.cs` |
| `BatchReplaceEnvVarsV2EnvVarsBatchPutError` | `src/Hud/Errors/BatchReplaceEnvVarsV2EnvVarsBatchPutError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### CheckEnvVarCompletenessV2EnvVarsCheckPost

- **Signature**: `CheckEnvVarCompletenessV2EnvVarsCheckPost(CheckEnvVarCompletenessV2EnvVarsCheckPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RegistryEnvVarCheckResponse`
- **Error**: `ApiException<CheckEnvVarCompletenessV2EnvVarsCheckPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CheckEnvVarCompletenessV2EnvVarsCheckPostRequest` | `src/Hud/Requests/EnvVars/CheckEnvVarCompletenessV2EnvVarsCheckPostRequest.cs` |
| `RegistryEnvVarCheckRequest` | `src/Hud/Models/RegistryEnvVarCheckRequest.cs` |
| `RegistryEnvVarCheckResponse` | `src/Hud/Models/RegistryEnvVarCheckResponse.cs` |
| `CheckEnvVarCompletenessV2EnvVarsCheckPostError` | `src/Hud/Errors/CheckEnvVarCompletenessV2EnvVarsCheckPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### CreateEnvVarV2EnvVarsPost

- **Signature**: `CreateEnvVarV2EnvVarsPost(CreateEnvVarV2EnvVarsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RegistryEnvVarItem`
- **Error**: `ApiException<CreateEnvVarV2EnvVarsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateEnvVarV2EnvVarsPostRequest` | `src/Hud/Requests/EnvVars/CreateEnvVarV2EnvVarsPostRequest.cs` |
| `RegistryEnvVarCreateRequest` | `src/Hud/Models/RegistryEnvVarCreateRequest.cs` |
| `RegistryEnvVarItem` | `src/Hud/Models/RegistryEnvVarItem.cs` |
| `CreateEnvVarV2EnvVarsPostError` | `src/Hud/Errors/CreateEnvVarV2EnvVarsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DeleteEnvVarV2EnvVarsVarIdDelete

- **Signature**: `DeleteEnvVarV2EnvVarsVarIdDelete(DeleteEnvVarV2EnvVarsVarIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VarId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteEnvVarV2EnvVarsVarIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteEnvVarV2EnvVarsVarIdDeleteRequest` | `src/Hud/Requests/EnvVars/DeleteEnvVarV2EnvVarsVarIdDeleteRequest.cs` |
| `DeleteEnvVarV2EnvVarsVarIdDeleteError` | `src/Hud/Errors/DeleteEnvVarV2EnvVarsVarIdDeleteError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### ListEnvVarsV2EnvVarsGet

- **Signature**: `ListEnvVarsV2EnvVarsGet(ListEnvVarsV2EnvVarsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RegistryId`
- **Query params (wire ← C#)**: `registry_id` ← `RegistryId`
- **Returns**: `RegistryEnvVarsListResponse`
- **Error**: `ApiException<ListEnvVarsV2EnvVarsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListEnvVarsV2EnvVarsGetRequest` | `src/Hud/Requests/EnvVars/ListEnvVarsV2EnvVarsGetRequest.cs` |
| `RegistryEnvVarsListResponse` | `src/Hud/Models/RegistryEnvVarsListResponse.cs` |
| `ListEnvVarsV2EnvVarsGetError` | `src/Hud/Errors/ListEnvVarsV2EnvVarsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UpdateEnvVarV2EnvVarsVarIdPatch

- **Signature**: `UpdateEnvVarV2EnvVarsVarIdPatch(UpdateEnvVarV2EnvVarsVarIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `VarId`, `Body`
- **Returns**: `RegistryEnvVarItem`
- **Error**: `ApiException<UpdateEnvVarV2EnvVarsVarIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateEnvVarV2EnvVarsVarIdPatchRequest` | `src/Hud/Requests/EnvVars/UpdateEnvVarV2EnvVarsVarIdPatchRequest.cs` |
| `RegistryEnvVarUpdateRequest` | `src/Hud/Models/RegistryEnvVarUpdateRequest.cs` |
| `RegistryEnvVarItem` | `src/Hud/Models/RegistryEnvVarItem.cs` |
| `UpdateEnvVarV2EnvVarsVarIdPatchError` | `src/Hud/Errors/UpdateEnvVarV2EnvVarsVarIdPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

