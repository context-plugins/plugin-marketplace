<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.Tasks` · Source: `src/Hud/Api/Tasks.cs` · 11 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BulkUpdateTaskStageV2TasksStagePatch

- **Signature**: `BulkUpdateTaskStageV2TasksStagePatch(BulkUpdateTaskStageV2TasksStagePatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkStatusResponse`
- **Error**: `ApiException<BulkUpdateTaskStageV2TasksStagePatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateTaskStageV2TasksStagePatchRequest` | `src/Hud/Requests/Tasks/BulkUpdateTaskStageV2TasksStagePatchRequest.cs` |
| `BulkStageRequest` | `src/Hud/Models/BulkStageRequest.cs` |
| `BulkStatusResponse` | `src/Hud/Models/BulkStatusResponse.cs` |
| `BulkUpdateTaskStageV2TasksStagePatchError` | `src/Hud/Errors/BulkUpdateTaskStageV2TasksStagePatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### BulkUpdateTaskStatusV2TasksStatusPatch

- **Signature**: `BulkUpdateTaskStatusV2TasksStatusPatch(BulkUpdateTaskStatusV2TasksStatusPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BulkStatusResponse`
- **Error**: `ApiException<BulkUpdateTaskStatusV2TasksStatusPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BulkUpdateTaskStatusV2TasksStatusPatchRequest` | `src/Hud/Requests/Tasks/BulkUpdateTaskStatusV2TasksStatusPatchRequest.cs` |
| `BulkStatusRequest` | `src/Hud/Models/BulkStatusRequest.cs` |
| `BulkStatusResponse` | `src/Hud/Models/BulkStatusResponse.cs` |
| `BulkUpdateTaskStatusV2TasksStatusPatchError` | `src/Hud/Errors/BulkUpdateTaskStatusV2TasksStatusPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### CreateTaskCommentV2TasksTaskIdCommentsPost

- **Signature**: `CreateTaskCommentV2TasksTaskIdCommentsPost(CreateTaskCommentV2TasksTaskIdCommentsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`, `Body`
- **Returns**: `TaskCommentItem`
- **Error**: `ApiException<CreateTaskCommentV2TasksTaskIdCommentsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTaskCommentV2TasksTaskIdCommentsPostRequest` | `src/Hud/Requests/Tasks/CreateTaskCommentV2TasksTaskIdCommentsPostRequest.cs` |
| `CreateTaskCommentRequest` | `src/Hud/Models/CreateTaskCommentRequest.cs` |
| `TaskCommentItem` | `src/Hud/Models/TaskCommentItem.cs` |
| `CreateTaskCommentV2TasksTaskIdCommentsPostError` | `src/Hud/Errors/CreateTaskCommentV2TasksTaskIdCommentsPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete

- **Signature**: `DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete(DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`, `CommentId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest` | `src/Hud/Requests/Tasks/DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest.cs` |
| `DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError` | `src/Hud/Errors/DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTaskActivityV2TasksTaskIdActivityGet

- **Signature**: `GetTaskActivityV2TasksTaskIdActivityGet(GetTaskActivityV2TasksTaskIdActivityGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`
- **Query params (wire ← C#)**: `limit` ← `Limit`
- **Returns**: `TaskActivityResponse`
- **Error**: `ApiException<GetTaskActivityV2TasksTaskIdActivityGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaskActivityV2TasksTaskIdActivityGetRequest` | `src/Hud/Requests/Tasks/GetTaskActivityV2TasksTaskIdActivityGetRequest.cs` |
| `TaskActivityResponse` | `src/Hud/Models/TaskActivityResponse.cs` |
| `GetTaskActivityV2TasksTaskIdActivityGetError` | `src/Hud/Errors/GetTaskActivityV2TasksTaskIdActivityGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTaskCommentsV2TasksTaskIdCommentsGet

- **Signature**: `GetTaskCommentsV2TasksTaskIdCommentsGet(GetTaskCommentsV2TasksTaskIdCommentsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`
- **Returns**: `TaskCommentsListResponse`
- **Error**: `ApiException<GetTaskCommentsV2TasksTaskIdCommentsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaskCommentsV2TasksTaskIdCommentsGetRequest` | `src/Hud/Requests/Tasks/GetTaskCommentsV2TasksTaskIdCommentsGetRequest.cs` |
| `TaskCommentsListResponse` | `src/Hud/Models/TaskCommentsListResponse.cs` |
| `GetTaskCommentsV2TasksTaskIdCommentsGetError` | `src/Hud/Errors/GetTaskCommentsV2TasksTaskIdCommentsGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTaskReadyCheckV2TasksTaskIdReadyCheckGet

- **Signature**: `GetTaskReadyCheckV2TasksTaskIdReadyCheckGet(GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`
- **Returns**: `ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet`
- **Error**: `ApiException<GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest` | `src/Hud/Requests/Tasks/GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest.cs` |
| `ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet` | `src/Hud/Models/AnyOf/ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet.cs` |
| `GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError` | `src/Hud/Errors/GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTaskTracesV2TasksTaskIdTracesGet

- **Signature**: `GetTaskTracesV2TasksTaskIdTracesGet(GetTaskTracesV2TasksTaskIdTracesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`
- **Query params (wire ← C#)**: `limit` ← `Limit`, `offset` ← `Offset`, `task_version_id` ← `TaskVersionId`, `model_id` ← `ModelId`, `exclude_training` ← `ExcludeTraining`
- **Returns**: `PaginatedResponseTaskTrace`
- **Error**: `ApiException<GetTaskTracesV2TasksTaskIdTracesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaskTracesV2TasksTaskIdTracesGetRequest` | `src/Hud/Requests/Tasks/GetTaskTracesV2TasksTaskIdTracesGetRequest.cs` |
| `TaskVersionId` | `src/Hud/Models/AnyOf/TaskVersionId.cs` |
| `ModelId` | `src/Hud/Models/AnyOf/ModelId.cs` |
| `PaginatedResponseTaskTrace` | `src/Hud/Models/PaginatedResponseTaskTrace.cs` |
| `GetTaskTracesV2TasksTaskIdTracesGetError` | `src/Hud/Errors/GetTaskTracesV2TasksTaskIdTracesGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### GetTaskVersionV2TasksTaskIdVersionsVersionIdGet

- **Signature**: `GetTaskVersionV2TasksTaskIdVersionsVersionIdGet(GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`, `VersionId`
- **Returns**: `TaskWithVersionResponse`
- **Error**: `ApiException<GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest` | `src/Hud/Requests/Tasks/GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest.cs` |
| `TaskWithVersionResponse` | `src/Hud/Models/TaskWithVersionResponse.cs` |
| `GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError` | `src/Hud/Errors/GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatch

- **Signature**: `UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatch(UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`, `CommentId`, `Body`
- **Returns**: `TaskCommentItem`
- **Error**: `ApiException<UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest` | `src/Hud/Requests/Tasks/UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest.cs` |
| `UpdateTaskCommentRequest` | `src/Hud/Models/UpdateTaskCommentRequest.cs` |
| `TaskCommentItem` | `src/Hud/Models/TaskCommentItem.cs` |
| `UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError` | `src/Hud/Errors/UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

### UploadTasksV2TasksUploadPost

- **Signature**: `UploadTasksV2TasksUploadPost(UploadTasksV2TasksUploadPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TaskUploadResponse`
- **Error**: `ApiException<UploadTasksV2TasksUploadPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 409, 429, 503] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UploadTasksV2TasksUploadPostRequest` | `src/Hud/Requests/Tasks/UploadTasksV2TasksUploadPostRequest.cs` |
| `TaskUploadRequest` | `src/Hud/Models/TaskUploadRequest.cs` |
| `TaskUploadResponse` | `src/Hud/Models/TaskUploadResponse.cs` |
| `UploadTasksV2TasksUploadPostError` | `src/Hud/Errors/UploadTasksV2TasksUploadPostError.cs` |
| `ErrorResponseModel` | `src/Hud/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/Hud/Models/HttpValidationError.cs` |

