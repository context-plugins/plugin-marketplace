<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rollouts — operations

Accessor: `client.Rollouts` · Source: `src/Hud/Api/Rollouts.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelJobV2RolloutsCancelJobPost

- **Signature**: `CancelJobV2RolloutsCancelJobPost(CancelJobV2RolloutsCancelJobPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CancelJobResponse`
- **Error**: `ApiException<CancelJobV2RolloutsCancelJobPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelJobV2RolloutsCancelJobPostRequest` | `src/Hud/Requests/Rollouts/CancelJobV2RolloutsCancelJobPostRequest.cs` |
| `CancelJobRequest` | `src/Hud/Models/CancelJobRequest.cs` |
| `CancelJobResponse` | `src/Hud/Models/CancelJobResponse.cs` |
| `CancelJobV2RolloutsCancelJobPostError` | `src/Hud/Errors/CancelJobV2RolloutsCancelJobPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### CancelUserJobsV2RolloutsCancelUserJobsPost

- **Signature**: `CancelUserJobsV2RolloutsCancelUserJobsPost(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CancelUserJobsResponse`
- **Error**: `ApiException<CancelUserJobsV2RolloutsCancelUserJobsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelUserJobsResponse` | `src/Hud/Models/CancelUserJobsResponse.cs` |
| `CancelUserJobsV2RolloutsCancelUserJobsPostError` | `src/Hud/Errors/CancelUserJobsV2RolloutsCancelUserJobsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |

### CancelV2RolloutsCancelPost

- **Signature**: `CancelV2RolloutsCancelPost(CancelV2RolloutsCancelPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CancelResponse`
- **Error**: `ApiException<CancelV2RolloutsCancelPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelV2RolloutsCancelPostRequest` | `src/Hud/Requests/Rollouts/CancelV2RolloutsCancelPostRequest.cs` |
| `CancelRequest` | `src/Hud/Models/CancelRequest.cs` |
| `CancelResponse` | `src/Hud/Models/CancelResponse.cs` |
| `CancelV2RolloutsCancelPostError` | `src/Hud/Errors/CancelV2RolloutsCancelPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### RunListV2RolloutsRunListPost

- **Signature**: `RunListV2RolloutsRunListPost(RunListV2RolloutsRunListPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RolloutBatchResponse`
- **Error**: `ApiException<RunListV2RolloutsRunListPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunListV2RolloutsRunListPostRequest` | `src/Hud/Requests/Rollouts/RunListV2RolloutsRunListPostRequest.cs` |
| `RolloutRunListRequest` | `src/Hud/Models/RolloutRunListRequest.cs` |
| `RolloutBatchResponse` | `src/Hud/Models/RolloutBatchResponse.cs` |
| `RunListV2RolloutsRunListPostError` | `src/Hud/Errors/RunListV2RolloutsRunListPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### RunV2RolloutsRunPost

- **Signature**: `RunV2RolloutsRunPost(RunV2RolloutsRunPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RolloutResponse`
- **Error**: `ApiException<RunV2RolloutsRunPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RunV2RolloutsRunPostRequest` | `src/Hud/Requests/Rollouts/RunV2RolloutsRunPostRequest.cs` |
| `RolloutRunRequest` | `src/Hud/Models/RolloutRunRequest.cs` |
| `RolloutResponse` | `src/Hud/Models/RolloutResponse.cs` |
| `RunV2RolloutsRunPostError` | `src/Hud/Errors/RunV2RolloutsRunPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### SubmitV2RolloutsSubmitPost

- **Signature**: `SubmitV2RolloutsSubmitPost(SubmitV2RolloutsSubmitPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `RolloutResponse`
- **Error**: `ApiException<SubmitV2RolloutsSubmitPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitV2RolloutsSubmitPostRequest` | `src/Hud/Requests/Rollouts/SubmitV2RolloutsSubmitPostRequest.cs` |
| `RolloutSubmitRequest` | `src/Hud/Models/RolloutSubmitRequest.cs` |
| `RolloutResponse` | `src/Hud/Models/RolloutResponse.cs` |
| `SubmitV2RolloutsSubmitPostError` | `src/Hud/Errors/SubmitV2RolloutsSubmitPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

