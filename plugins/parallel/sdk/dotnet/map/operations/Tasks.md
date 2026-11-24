<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.Tasks` · Source: `src/ParallelSdk/Api/Tasks.cs` · 12 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet(TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Returns**: `IAsyncEnumerable<Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet>`
- **Error**: `ApiException<TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest` | `src/ParallelSdk/Requests/Tasks/TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetRequest.cs` |
| `Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet` | `src/ParallelSdk/Models/OneOf/Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet.cs` |
| `TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError` | `src/ParallelSdk/Errors/TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### TasksRunsEventsGetV1TasksRunsRunIdEventsGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksRunsEventsGetV1TasksRunsRunIdEventsGet(TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Returns**: `IAsyncEnumerable<Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet>`
- **Error**: `ApiException<TasksRunsEventsGetV1TasksRunsRunIdEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest` | `src/ParallelSdk/Requests/Tasks/TasksRunsEventsGetV1TasksRunsRunIdEventsGetRequest.cs` |
| `Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet` | `src/ParallelSdk/Models/OneOf/Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet.cs` |
| `TasksRunsEventsGetV1TasksRunsRunIdEventsGetError` | `src/ParallelSdk/Errors/TasksRunsEventsGetV1TasksRunsRunIdEventsGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### TasksRunsGetV1TasksRunsRunIdGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksRunsGetV1TasksRunsRunIdGet(TasksRunsGetV1TasksRunsRunIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Returns**: `TaskRun`
- **Error**: `ApiException<TasksRunsGetV1TasksRunsRunIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksRunsGetV1TasksRunsRunIdGetRequest` | `src/ParallelSdk/Requests/Tasks/TasksRunsGetV1TasksRunsRunIdGetRequest.cs` |
| `TaskRun` | `src/ParallelSdk/Models/TaskRun.cs` |
| `TasksRunsGetV1TasksRunsRunIdGetError` | `src/ParallelSdk/Errors/TasksRunsGetV1TasksRunsRunIdGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### TasksRunsInputGetV1TasksRunsRunIdInputGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksRunsInputGetV1TasksRunsRunIdInputGet(TasksRunsInputGetV1TasksRunsRunIdInputGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Returns**: `TaskRunInput`
- **Error**: `ApiException<TasksRunsInputGetV1TasksRunsRunIdInputGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksRunsInputGetV1TasksRunsRunIdInputGetRequest` | `src/ParallelSdk/Requests/Tasks/TasksRunsInputGetV1TasksRunsRunIdInputGetRequest.cs` |
| `TaskRunInput` | `src/ParallelSdk/Models/TaskRunInput.cs` |
| `TasksRunsInputGetV1TasksRunsRunIdInputGetError` | `src/ParallelSdk/Errors/TasksRunsInputGetV1TasksRunsRunIdInputGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### TasksRunsPostV1TasksRunsPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksRunsPostV1TasksRunsPost(TasksRunsPostV1TasksRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TaskRun`
- **Error**: `ApiException<TasksRunsPostV1TasksRunsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 402, 403, 422, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksRunsPostV1TasksRunsPostRequest` | `src/ParallelSdk/Requests/Tasks/TasksRunsPostV1TasksRunsPostRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `TaskRunInput` | `src/ParallelSdk/Models/TaskRunInput.cs` |
| `TaskRun` | `src/ParallelSdk/Models/TaskRun.cs` |
| `TasksRunsPostV1TasksRunsPostError` | `src/ParallelSdk/Errors/TasksRunsPostV1TasksRunsPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### TasksRunsResultGetV1TasksRunsRunIdResultGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksRunsResultGetV1TasksRunsRunIdResultGet(TasksRunsResultGetV1TasksRunsRunIdResultGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `RunId`
- **Query params (wire ← C#)**: `timeout` ← `Timeout`
- **Returns**: `TaskRunResult`
- **Error**: `ApiException<TasksRunsResultGetV1TasksRunsRunIdResultGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 408, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksRunsResultGetV1TasksRunsRunIdResultGetRequest` | `src/ParallelSdk/Requests/Tasks/TasksRunsResultGetV1TasksRunsRunIdResultGetRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `TaskRunResult` | `src/ParallelSdk/Models/TaskRunResult.cs` |
| `TasksRunsResultGetV1TasksRunsRunIdResultGetError` | `src/ParallelSdk/Errors/TasksRunsResultGetV1TasksRunsRunIdResultGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet(TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskgroupId`
- **Query params (wire ← C#)**: `last_event_id` ← `LastEventId`, `timeout` ← `Timeout`
- **Returns**: `IAsyncEnumerable<Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet>`
- **Error**: `ApiException<TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest` | `src/ParallelSdk/Requests/Tasks/TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetRequest.cs` |
| `LastEventId` | `src/ParallelSdk/Models/AnyOf/LastEventId.cs` |
| `TimeoutModel` | `src/ParallelSdk/Models/AnyOf/TimeoutModel.cs` |
| `Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet` | `src/ParallelSdk/Models/OneOf/Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet.cs` |
| `TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError` | `src/ParallelSdk/Errors/TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGet(TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskgroupId`
- **Returns**: `TaskGroupResponse`
- **Error**: `ApiException<TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest` | `src/ParallelSdk/Requests/Tasks/TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetRequest.cs` |
| `TaskGroupResponse` | `src/ParallelSdk/Models/TaskGroupResponse.cs` |
| `TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError` | `src/ParallelSdk/Errors/TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### TasksTaskgroupsPostV1TasksGroupsPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksTaskgroupsPostV1TasksGroupsPost(TasksTaskgroupsPostV1TasksGroupsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TaskGroupResponse`
- **Error**: `ApiException<TasksTaskgroupsPostV1TasksGroupsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksTaskgroupsPostV1TasksGroupsPostRequest` | `src/ParallelSdk/Requests/Tasks/TasksTaskgroupsPostV1TasksGroupsPostRequest.cs` |
| `CreateTaskGroupRequest` | `src/ParallelSdk/Models/CreateTaskGroupRequest.cs` |
| `TaskGroupResponse` | `src/ParallelSdk/Models/TaskGroupResponse.cs` |
| `TasksTaskgroupsPostV1TasksGroupsPostError` | `src/ParallelSdk/Errors/TasksTaskgroupsPostV1TasksGroupsPostError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet(TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskgroupId`
- **Query params (wire ← C#)**: `last_event_id` ← `LastEventId`, `status` ← `Status`, `include_input` ← `IncludeInput`, `include_output` ← `IncludeOutput`
- **Returns**: `IAsyncEnumerable<Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet>`
- **Error**: `ApiException<TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [404] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest` | `src/ParallelSdk/Requests/Tasks/TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetRequest.cs` |
| `LastEventId` | `src/ParallelSdk/Models/AnyOf/LastEventId.cs` |
| `Status11ParallelAiTasksApi` | `src/ParallelSdk/Models/AnyOf/Status11ParallelAiTasksApi.cs` |
| `Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet` | `src/ParallelSdk/Models/OneOf/Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet.cs` |
| `TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError` | `src/ParallelSdk/Errors/TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

### TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGet(TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskgroupId`, `RunId`
- **Returns**: `TaskRun`
- **Error**: `ApiException<TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401, 404, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest` | `src/ParallelSdk/Requests/Tasks/TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetRequest.cs` |
| `TaskRun` | `src/ParallelSdk/Models/TaskRun.cs` |
| `TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError` | `src/ParallelSdk/Errors/TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

### TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPost(TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskgroupId`, `Body`
- **Query params (wire ← C#)**: `refresh_status` ← `RefreshStatus`
- **Returns**: `TaskGroupRunResponse`
- **Error**: `ApiException<TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest` | `src/ParallelSdk/Requests/Tasks/TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostRequest.cs` |
| `ParallelBeta1` | `src/ParallelSdk/Models/AnyOf/ParallelBeta1.cs` |
| `TaskGroupRunRequest` | `src/ParallelSdk/Models/TaskGroupRunRequest.cs` |
| `TaskGroupRunResponse` | `src/ParallelSdk/Models/TaskGroupRunResponse.cs` |
| `TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError` | `src/ParallelSdk/Errors/TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

