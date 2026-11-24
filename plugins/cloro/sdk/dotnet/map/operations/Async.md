<!-- Generated file — do not edit; regenerated with the SDK. -->

# Async — operations

Accessor: `client.Async` · Source: `src/Cloro/Api/Async.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ClearAsyncQueue

- **Auth**: `options.BearerAuth`
- **Signature**: `ClearAsyncQueue(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ClearQueueResponse`
- **Error**: `ApiException<ClearAsyncQueueError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthenticationError([NotNullWhen(true)] out AuthenticationError? value)` [401] · `TryGetRateLimitError([NotNullWhen(true)] out RateLimitError? value)` [429] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ClearQueueResponse` | `src/Cloro/Models/ClearQueueResponse.cs` |
| `ClearAsyncQueueError` | `src/Cloro/Errors/ClearAsyncQueueError.cs` |
| `AuthenticationError` | `src/Cloro/Models/AuthenticationError.cs` |
| `RateLimitError` | `src/Cloro/Models/RateLimitError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### CreateAsyncTask

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateAsyncTask(CreateAsyncTaskRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AsyncTaskCreateResponse`
- **Error**: `ApiException<CreateAsyncTaskError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationError([NotNullWhen(true)] out ValidationError? value)` [400] · `TryGetAuthenticationError([NotNullWhen(true)] out AuthenticationError? value)` [401] · `TryGetForbiddenError([NotNullWhen(true)] out ForbiddenError? value)` [403] · `TryGetIdempotencyConflictError([NotNullWhen(true)] out IdempotencyConflictError? value)` [409] · `TryGetQueueLimitError([NotNullWhen(true)] out QueueLimitError? value)` [429] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAsyncTaskRequest` | `src/Cloro/Requests/Async/CreateAsyncTaskRequest.cs` |
| `BatchTaskRequest` | `src/Cloro/Models/BatchTaskRequest.cs` |
| `AsyncTaskCreateResponse` | `src/Cloro/Models/AsyncTaskCreateResponse.cs` |
| `CreateAsyncTaskError` | `src/Cloro/Errors/CreateAsyncTaskError.cs` |
| `ValidationError` | `src/Cloro/Models/ValidationError.cs` |
| `AuthenticationError` | `src/Cloro/Models/AuthenticationError.cs` |
| `ForbiddenError` | `src/Cloro/Models/ForbiddenError.cs` |
| `IdempotencyConflictError` | `src/Cloro/Models/IdempotencyConflictError.cs` |
| `QueueLimitError` | `src/Cloro/Models/QueueLimitError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### CreateBatchAsyncTasks

- **Auth**: `options.BearerAuth`
- **Signature**: `CreateBatchAsyncTasks(CreateBatchAsyncTasksRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BatchTaskResponse`
- **Error**: `ApiException<CreateBatchAsyncTasksError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationError([NotNullWhen(true)] out ValidationError? value)` [400] · `TryGetAuthenticationError([NotNullWhen(true)] out AuthenticationError? value)` [401] · `TryGetQueueLimitError([NotNullWhen(true)] out QueueLimitError? value)` [429] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateBatchAsyncTasksRequest` | `src/Cloro/Requests/Async/CreateBatchAsyncTasksRequest.cs` |
| `BatchTaskRequest` | `src/Cloro/Models/BatchTaskRequest.cs` |
| `BatchTaskResponse` | `src/Cloro/Models/BatchTaskResponse.cs` |
| `CreateBatchAsyncTasksError` | `src/Cloro/Errors/CreateBatchAsyncTasksError.cs` |
| `ValidationError` | `src/Cloro/Models/ValidationError.cs` |
| `AuthenticationError` | `src/Cloro/Models/AuthenticationError.cs` |
| `QueueLimitError` | `src/Cloro/Models/QueueLimitError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### GetAsyncStatus

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAsyncStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `AsyncStatusResponse`
- **Error**: `ApiException<GetAsyncStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthenticationError([NotNullWhen(true)] out AuthenticationError? value)` [401] · `TryGetRateLimitError([NotNullWhen(true)] out RateLimitError? value)` [429] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AsyncStatusResponse` | `src/Cloro/Models/AsyncStatusResponse.cs` |
| `GetAsyncStatusError` | `src/Cloro/Errors/GetAsyncStatusError.cs` |
| `AuthenticationError` | `src/Cloro/Models/AuthenticationError.cs` |
| `RateLimitError` | `src/Cloro/Models/RateLimitError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

### GetTaskStatus

- **Auth**: `options.BearerAuth`
- **Signature**: `GetTaskStatus(GetTaskStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`
- **Returns**: `TaskStatusResponse`
- **Error**: `ApiException<GetTaskStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthenticationError([NotNullWhen(true)] out AuthenticationError? value)` [401] · `TryGetNotFoundError([NotNullWhen(true)] out NotFoundError? value)` [404] · `TryGetRateLimitError([NotNullWhen(true)] out RateLimitError? value)` [429] · `TryGetInternalError([NotNullWhen(true)] out InternalError? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTaskStatusRequest` | `src/Cloro/Requests/Async/GetTaskStatusRequest.cs` |
| `TaskStatusResponse` | `src/Cloro/Models/TaskStatusResponse.cs` |
| `GetTaskStatusError` | `src/Cloro/Errors/GetTaskStatusError.cs` |
| `AuthenticationError` | `src/Cloro/Models/AuthenticationError.cs` |
| `NotFoundError` | `src/Cloro/Models/NotFoundError.cs` |
| `RateLimitError` | `src/Cloro/Models/RateLimitError.cs` |
| `InternalError` | `src/Cloro/Models/InternalError.cs` |

