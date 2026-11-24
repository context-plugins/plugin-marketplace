<!-- Generated file — do not edit; regenerated with the SDK. -->

# Async — operations

Accessor: `client.async` · Source: `src/resources/async.ts` · 5 operations · Request and error types: namespace `Async`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cloro`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### clearAsyncQueue

- **Signature**: `clearAsyncQueue(options?: RequestOptions): ApiPromise<ClearQueueResponse, Async.ClearAsyncQueueError>`
- **Wire**: `DELETE /v1/async/queue`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ClearQueueResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Async.ClearAsyncQueueError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authenticationError"` [401] `AuthenticationError` · `"rateLimitError"` [429] `RateLimitError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ClearQueueResponse` | `clearQueueResponseSchema` | `src/models/clear-queue-response.ts` |
| `AuthenticationError` | `authenticationErrorSchema` | `src/models/authentication-error.ts` |
| `RateLimitError` | `rateLimitErrorSchema` | `src/models/rate-limit-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### createAsyncTask

- **Signature**: `createAsyncTask(request: Async.CreateAsyncTaskRequest, options?: RequestOptions): ApiPromise<AsyncTaskCreateResponse, Async.CreateAsyncTaskError>`
- **Wire**: `POST /v1/async/task`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AsyncTaskCreateResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Async.CreateAsyncTaskError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationError"` [400] `ValidationError` · `"authenticationError"` [401] `AuthenticationError` · `"forbiddenError"` [403] `ForbiddenError` · `"idempotencyConflictError"` [409] `IdempotencyConflictError` · `"queueLimitError"` [429] `QueueLimitError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Async.CreateAsyncTaskRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchTaskRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchTaskRequest` | `batchTaskRequestSchema` | `src/models/batch-task-request.ts` |
| `AsyncTaskCreateResponse` | `asyncTaskCreateResponseSchema` | `src/models/async-task-create-response.ts` |
| `ValidationError` | `validationErrorSchema` | `src/models/validation-error.ts` |
| `AuthenticationError` | `authenticationErrorSchema` | `src/models/authentication-error.ts` |
| `ForbiddenError` | `forbiddenErrorSchema` | `src/models/forbidden-error.ts` |
| `IdempotencyConflictError` | `idempotencyConflictErrorSchema` | `src/models/idempotency-conflict-error.ts` |
| `QueueLimitError` | `queueLimitErrorSchema` | `src/models/queue-limit-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### createBatchAsyncTasks

- **Signature**: `createBatchAsyncTasks(request: Async.CreateBatchAsyncTasksRequest, options?: RequestOptions): ApiPromise<BatchTaskResponse, Async.CreateBatchAsyncTasksError>`
- **Wire**: `POST /v1/async/task/batch`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchTaskResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Async.CreateBatchAsyncTasksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"validationError"` [400] `ValidationError` · `"authenticationError"` [401] `AuthenticationError` · `"queueLimitError"` [429] `QueueLimitError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Async.CreateBatchAsyncTasksRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchTaskRequest[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchTaskRequest` | `batchTaskRequestSchema` | `src/models/batch-task-request.ts` |
| `BatchTaskResponse` | `batchTaskResponseSchema` | `src/models/batch-task-response.ts` |
| `ValidationError` | `validationErrorSchema` | `src/models/validation-error.ts` |
| `AuthenticationError` | `authenticationErrorSchema` | `src/models/authentication-error.ts` |
| `QueueLimitError` | `queueLimitErrorSchema` | `src/models/queue-limit-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### getAsyncStatus

- **Signature**: `getAsyncStatus(options?: RequestOptions): ApiPromise<AsyncStatusResponse, Async.GetAsyncStatusError>`
- **Wire**: `GET /v1/async/status`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AsyncStatusResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Async.GetAsyncStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authenticationError"` [401] `AuthenticationError` · `"rateLimitError"` [429] `RateLimitError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `AsyncStatusResponse` | `asyncStatusResponseSchema` | `src/models/async-status-response.ts` |
| `AuthenticationError` | `authenticationErrorSchema` | `src/models/authentication-error.ts` |
| `RateLimitError` | `rateLimitErrorSchema` | `src/models/rate-limit-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

### getTaskStatus

- **Signature**: `getTaskStatus(request: Async.GetTaskStatusRequest, options?: RequestOptions): ApiPromise<TaskStatusResponse, Async.GetTaskStatusError>`
- **Wire**: `GET /v1/async/task/{taskId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskStatusResponse`
- **Error**: `CloroError` with `kind: "api"`, an instance of `Async.GetTaskStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"authenticationError"` [401] `AuthenticationError` · `"notFoundError"` [404] `NotFoundError` · `"rateLimitError"` [429] `RateLimitError` · `"internalError"` [500] `InternalError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Async.GetTaskStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `taskId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskStatusResponse` | `taskStatusResponseSchema` | `src/models/task-status-response.ts` |
| `AuthenticationError` | `authenticationErrorSchema` | `src/models/authentication-error.ts` |
| `NotFoundError` | `notFoundErrorSchema` | `src/models/not-found-error.ts` |
| `RateLimitError` | `rateLimitErrorSchema` | `src/models/rate-limit-error.ts` |
| `InternalError` | `internalErrorSchema` | `src/models/internal-error.ts` |

