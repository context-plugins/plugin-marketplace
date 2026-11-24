<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `src/resources/tasks.ts` · 11 operations · Request and error types: namespace `Tasks`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkUpdateTaskStageV2TasksStagePatch

- **Signature**: `bulkUpdateTaskStageV2TasksStagePatch(request: Tasks.BulkUpdateTaskStageV2TasksStagePatchRequest, options?: RequestOptions): ApiPromise<BulkStatusResponse, Tasks.BulkUpdateTaskStageV2TasksStagePatchError>`
- **Wire**: `PATCH /v2/tasks/stage`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkStatusResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.BulkUpdateTaskStageV2TasksStagePatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.BulkUpdateTaskStageV2TasksStagePatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkStageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkStageRequest` | `bulkStageRequestSchema` | `src/models/bulk-stage-request.ts` |
| `BulkStatusResponse` | `bulkStatusResponseSchema` | `src/models/bulk-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### bulkUpdateTaskStatusV2TasksStatusPatch

- **Signature**: `bulkUpdateTaskStatusV2TasksStatusPatch(request: Tasks.BulkUpdateTaskStatusV2TasksStatusPatchRequest, options?: RequestOptions): ApiPromise<BulkStatusResponse, Tasks.BulkUpdateTaskStatusV2TasksStatusPatchError>`
- **Wire**: `PATCH /v2/tasks/status`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkStatusResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.BulkUpdateTaskStatusV2TasksStatusPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.BulkUpdateTaskStatusV2TasksStatusPatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkStatusRequest` | `bulkStatusRequestSchema` | `src/models/bulk-status-request.ts` |
| `BulkStatusResponse` | `bulkStatusResponseSchema` | `src/models/bulk-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### createTaskCommentV2TasksTaskIdCommentsPost

- **Signature**: `createTaskCommentV2TasksTaskIdCommentsPost(request: Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostRequest, options?: RequestOptions): ApiPromise<TaskCommentItem, Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostError>`
- **Wire**: `POST /v2/tasks/{task_id}/comments`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskCommentItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.CreateTaskCommentV2TasksTaskIdCommentsPostRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |
| `body` | `body` | — | `CreateTaskCommentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTaskCommentRequest` | `createTaskCommentRequestSchema` | `src/models/create-task-comment-request.ts` |
| `TaskCommentItem` | `taskCommentItemSchema` | `src/models/task-comment-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete

- **Signature**: `deleteTaskCommentV2TasksTaskIdCommentsCommentIdDelete(request: Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError>`
- **Wire**: `DELETE /v2/tasks/{task_id}/comments/{comment_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |
| `commentId` | `path` | `comment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTaskActivityV2TasksTaskIdActivityGet

- **Signature**: `getTaskActivityV2TasksTaskIdActivityGet(request: Tasks.GetTaskActivityV2TasksTaskIdActivityGetRequest, options?: RequestOptions): ApiPromise<TaskActivityResponse, Tasks.GetTaskActivityV2TasksTaskIdActivityGetError>`
- **Wire**: `GET /v2/tasks/{task_id}/activity`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskActivityResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.GetTaskActivityV2TasksTaskIdActivityGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTaskActivityV2TasksTaskIdActivityGetRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskActivityResponse` | `taskActivityResponseSchema` | `src/models/task-activity-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTaskCommentsV2TasksTaskIdCommentsGet

- **Signature**: `getTaskCommentsV2TasksTaskIdCommentsGet(request: Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetRequest, options?: RequestOptions): ApiPromise<TaskCommentsListResponse, Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetError>`
- **Wire**: `GET /v2/tasks/{task_id}/comments`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskCommentsListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTaskCommentsV2TasksTaskIdCommentsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskCommentsListResponse` | `taskCommentsListResponseSchema` | `src/models/task-comments-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTaskReadyCheckV2TasksTaskIdReadyCheckGet

- **Signature**: `getTaskReadyCheckV2TasksTaskIdReadyCheckGet(request: Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest, options?: RequestOptions): ApiPromise<ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet, Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError>`
- **Wire**: `GET /v2/tasks/{task_id}/ready-check`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTaskReadyCheckV2TasksTaskIdReadyCheckGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet` | `responseGetTaskReadyCheckV2TasksTaskIdReadyCheckGetSchema` | `src/models/unions/response-get-task-ready-check-v2-tasks-task-id-ready-check-get.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTaskTracesV2TasksTaskIdTracesGet

- **Signature**: `getTaskTracesV2TasksTaskIdTracesGet(request: Tasks.GetTaskTracesV2TasksTaskIdTracesGetRequest, options?: RequestOptions): ApiPromise<PaginatedResponseTaskTrace, Tasks.GetTaskTracesV2TasksTaskIdTracesGetError>`
- **Wire**: `GET /v2/tasks/{task_id}/traces`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaginatedResponseTaskTrace`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.GetTaskTracesV2TasksTaskIdTracesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTaskTracesV2TasksTaskIdTracesGetRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `20` |
| `offset` | `query` | — | `number` | no | `0` |
| `taskVersionId` | `query` | `task_version_id` | `TaskVersionId` | no | — |
| `modelId` | `query` | `model_id` | `ModelId` | no | — |
| `excludeTraining` | `query` | `exclude_training` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskVersionId` | `taskVersionIdSchema` | `src/models/unions/task-version-id.ts` |
| `ModelId` | `modelIdSchema` | `src/models/unions/model-id.ts` |
| `PaginatedResponseTaskTrace` | `paginatedResponseTaskTraceSchema` | `src/models/paginated-response-task-trace.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getTaskVersionV2TasksTaskIdVersionsVersionIdGet

- **Signature**: `getTaskVersionV2TasksTaskIdVersionsVersionIdGet(request: Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest, options?: RequestOptions): ApiPromise<TaskWithVersionResponse, Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError>`
- **Wire**: `GET /v2/tasks/{task_id}/versions/{version_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskWithVersionResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.GetTaskVersionV2TasksTaskIdVersionsVersionIdGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |
| `versionId` | `path` | `version_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskWithVersionResponse` | `taskWithVersionResponseSchema` | `src/models/task-with-version-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateTaskCommentV2TasksTaskIdCommentsCommentIdPatch

- **Signature**: `updateTaskCommentV2TasksTaskIdCommentsCommentIdPatch(request: Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest, options?: RequestOptions): ApiPromise<TaskCommentItem, Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError>`
- **Wire**: `PATCH /v2/tasks/{task_id}/comments/{comment_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskCommentItem`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `taskId` | `path` | `task_id` | `string` | yes |
| `commentId` | `path` | `comment_id` | `string` | yes |
| `body` | `body` | — | `UpdateTaskCommentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTaskCommentRequest` | `updateTaskCommentRequestSchema` | `src/models/update-task-comment-request.ts` |
| `TaskCommentItem` | `taskCommentItemSchema` | `src/models/task-comment-item.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### uploadTasksV2TasksUploadPost

- **Signature**: `uploadTasksV2TasksUploadPost(request: Tasks.UploadTasksV2TasksUploadPostRequest, options?: RequestOptions): ApiPromise<TaskUploadResponse, Tasks.UploadTasksV2TasksUploadPostError>`
- **Wire**: `POST /v2/tasks/upload`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskUploadResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Tasks.UploadTasksV2TasksUploadPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tasks.UploadTasksV2TasksUploadPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TaskUploadRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskUploadRequest` | `taskUploadRequestSchema` | `src/models/task-upload-request.ts` |
| `TaskUploadResponse` | `taskUploadResponseSchema` | `src/models/task-upload-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

