<!-- Generated file — do not edit; regenerated with the SDK. -->

# AsyncApi2 — operations

Accessor: `client.async_api2` · Source: `cloro/apis/async_api2.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.async_api2.clear_async_queue

- **Route**: `DELETE /v1/async/queue`
- **Auth**: `bearer_auth`
- **Signature**: `def clear_async_queue(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ClearQueueResponse`
- **Returns (raw)**: `ApiResult[ClearQueueResponse, ClearAsyncQueueErrorBody]`
- **Error**: `ClearAsyncQueueErrorBody` — **Case A (typed)**
- **Error arms**: `AuthenticationError` [401] · `RateLimitError` [429] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClearQueueResponse` | `cloro/models/clear_queue_response.py` |
| `ClearAsyncQueueErrorBody` | `cloro/errors/clear_async_queue_error.py` |
| `AuthenticationError` | `cloro/models/authentication_error.py` |
| `RateLimitError` | `cloro/models/rate_limit_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.async_api2.create_async_task

- **Route**: `POST /v1/async/task`
- **Auth**: `bearer_auth`
- **Signature**: `def create_async_task(body: BatchTaskRequest | BatchTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `AsyncTaskCreateResponse`
- **Returns (raw)**: `ApiResult[AsyncTaskCreateResponse, CreateAsyncTaskErrorBody]`
- **Error**: `CreateAsyncTaskErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationError` [400] · `AuthenticationError` [401] · `ForbiddenError` [403] · `IdempotencyConflictError` [409] · `QueueLimitError` [429] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchTaskRequest` | `cloro/models/batch_task_request.py` |
| `BatchTaskRequestDict` | `cloro/models/batch_task_request.py` |
| `AsyncTaskCreateResponse` | `cloro/models/async_task_create_response.py` |
| `CreateAsyncTaskErrorBody` | `cloro/errors/create_async_task_error.py` |
| `ValidationError` | `cloro/models/validation_error.py` |
| `AuthenticationError` | `cloro/models/authentication_error.py` |
| `ForbiddenError` | `cloro/models/forbidden_error.py` |
| `IdempotencyConflictError` | `cloro/models/idempotency_conflict_error.py` |
| `QueueLimitError` | `cloro/models/queue_limit_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.async_api2.create_batch_async_tasks

- **Route**: `POST /v1/async/task/batch`
- **Auth**: `bearer_auth`
- **Signature**: `def create_batch_async_tasks(body: list[BatchTaskRequest | BatchTaskRequestDict], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BatchTaskResponse`
- **Returns (raw)**: `ApiResult[BatchTaskResponse, CreateBatchAsyncTasksErrorBody]`
- **Error**: `CreateBatchAsyncTasksErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationError` [400] · `AuthenticationError` [401] · `QueueLimitError` [429] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchTaskRequest` | `cloro/models/batch_task_request.py` |
| `BatchTaskRequestDict` | `cloro/models/batch_task_request.py` |
| `BatchTaskResponse` | `cloro/models/batch_task_response.py` |
| `CreateBatchAsyncTasksErrorBody` | `cloro/errors/create_batch_async_tasks_error.py` |
| `ValidationError` | `cloro/models/validation_error.py` |
| `AuthenticationError` | `cloro/models/authentication_error.py` |
| `QueueLimitError` | `cloro/models/queue_limit_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.async_api2.get_async_status

- **Route**: `GET /v1/async/status`
- **Auth**: `bearer_auth`
- **Signature**: `def get_async_status(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AsyncStatusResponse`
- **Returns (raw)**: `ApiResult[AsyncStatusResponse, GetAsyncStatusErrorBody]`
- **Error**: `GetAsyncStatusErrorBody` — **Case A (typed)**
- **Error arms**: `AuthenticationError` [401] · `RateLimitError` [429] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AsyncStatusResponse` | `cloro/models/async_status_response.py` |
| `GetAsyncStatusErrorBody` | `cloro/errors/get_async_status_error.py` |
| `AuthenticationError` | `cloro/models/authentication_error.py` |
| `RateLimitError` | `cloro/models/rate_limit_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

### client.async_api2.get_task_status

- **Route**: `GET /v1/async/task/{taskId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_task_status(task_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`
- **Params**: `task_id` — path `taskId`
- **Returns (parsed)**: `TaskStatusResponse`
- **Returns (raw)**: `ApiResult[TaskStatusResponse, GetTaskStatusErrorBody]`
- **Error**: `GetTaskStatusErrorBody` — **Case A (typed)**
- **Error arms**: `AuthenticationError` [401] · `NotFoundError` [404] · `RateLimitError` [429] · `InternalError` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskStatusResponse` | `cloro/models/task_status_response.py` |
| `GetTaskStatusErrorBody` | `cloro/errors/get_task_status_error.py` |
| `AuthenticationError` | `cloro/models/authentication_error.py` |
| `NotFoundError` | `cloro/models/not_found_error.py` |
| `RateLimitError` | `cloro/models/rate_limit_error.py` |
| `InternalError` | `cloro/models/internal_error.py` |

