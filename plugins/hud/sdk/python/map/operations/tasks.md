<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `hud/apis/tasks.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tasks.bulk_update_task_stage_v2_tasks_stage_patch

- **Route**: `PATCH /v2/tasks/stage`
- **Signature**: `def bulk_update_task_stage_v2_tasks_stage_patch(body: BulkStageRequest | BulkStageRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BulkStatusResponse`
- **Returns (raw)**: `ApiResult[BulkStatusResponse, BulkUpdateTaskStageV2TasksStagePatchErrorBody]`
- **Error**: `BulkUpdateTaskStageV2TasksStagePatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkStageRequest` | `hud/models/bulk_stage_request.py` |
| `BulkStageRequestDict` | `hud/models/bulk_stage_request.py` |
| `BulkStatusResponse` | `hud/models/bulk_status_response.py` |
| `BulkUpdateTaskStageV2TasksStagePatchErrorBody` | `hud/errors/bulk_update_task_stage_v2_tasks_stage_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.bulk_update_task_status_v2_tasks_status_patch

- **Route**: `PATCH /v2/tasks/status`
- **Signature**: `def bulk_update_task_status_v2_tasks_status_patch(body: BulkStatusRequest | BulkStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BulkStatusResponse`
- **Returns (raw)**: `ApiResult[BulkStatusResponse, BulkUpdateTaskStatusV2TasksStatusPatchErrorBody]`
- **Error**: `BulkUpdateTaskStatusV2TasksStatusPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkStatusRequest` | `hud/models/bulk_status_request.py` |
| `BulkStatusRequestDict` | `hud/models/bulk_status_request.py` |
| `BulkStatusResponse` | `hud/models/bulk_status_response.py` |
| `BulkUpdateTaskStatusV2TasksStatusPatchErrorBody` | `hud/errors/bulk_update_task_status_v2_tasks_status_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.create_task_comment_v2_tasks_task_id_comments_post

- **Route**: `POST /v2/tasks/{task_id}/comments`
- **Signature**: `def create_task_comment_v2_tasks_task_id_comments_post(task_id: UUID, body: CreateTaskCommentRequest | CreateTaskCommentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`, `body`
- **Params**: `task_id` — path · `body` — JSON body
- **Returns (parsed)**: `TaskCommentItem`
- **Returns (raw)**: `ApiResult[TaskCommentItem, CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody]`
- **Error**: `CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTaskCommentRequest` | `hud/models/create_task_comment_request.py` |
| `CreateTaskCommentRequestDict` | `hud/models/create_task_comment_request.py` |
| `TaskCommentItem` | `hud/models/task_comment_item.py` |
| `CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody` | `hud/errors/create_task_comment_v2_tasks_task_id_comments_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.delete_task_comment_v2_tasks_task_id_comments_comment_id_delete

- **Route**: `DELETE /v2/tasks/{task_id}/comments/{comment_id}`
- **Signature**: `def delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(task_id: UUID, comment_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`, `comment_id`
- **Params**: `task_id` — path · `comment_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody]`
- **Error**: `DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody` | `hud/errors/delete_task_comment_v2_tasks_task_id_comments_comment_id_delete_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.get_task_activity_v2_tasks_task_id_activity_get

- **Route**: `GET /v2/tasks/{task_id}/activity`
- **Signature**: `def get_task_activity_v2_tasks_task_id_activity_get(task_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`
- **Params**: `task_id` — path · `limit` — query
- **Returns (parsed)**: `TaskActivityResponse`
- **Returns (raw)**: `ApiResult[TaskActivityResponse, GetTaskActivityV2TasksTaskIdActivityGetErrorBody]`
- **Error**: `GetTaskActivityV2TasksTaskIdActivityGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskActivityResponse` | `hud/models/task_activity_response.py` |
| `GetTaskActivityV2TasksTaskIdActivityGetErrorBody` | `hud/errors/get_task_activity_v2_tasks_task_id_activity_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.get_task_comments_v2_tasks_task_id_comments_get

- **Route**: `GET /v2/tasks/{task_id}/comments`
- **Signature**: `def get_task_comments_v2_tasks_task_id_comments_get(task_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`
- **Params**: `task_id` — path
- **Returns (parsed)**: `TaskCommentsListResponse`
- **Returns (raw)**: `ApiResult[TaskCommentsListResponse, GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody]`
- **Error**: `GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskCommentsListResponse` | `hud/models/task_comments_list_response.py` |
| `GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody` | `hud/errors/get_task_comments_v2_tasks_task_id_comments_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.get_task_ready_check_v2_tasks_task_id_ready_check_get

- **Route**: `GET /v2/tasks/{task_id}/ready-check`
- **Signature**: `def get_task_ready_check_v2_tasks_task_id_ready_check_get(task_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`
- **Params**: `task_id` — path
- **Returns (parsed)**: `ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet`
- **Returns (raw)**: `ApiResult[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet, GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody]`
- **Error**: `GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet` | `hud/models/unions/response_get_task_ready_check_v2_tasks_task_id_ready_check_get.py` |
| `GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody` | `hud/errors/get_task_ready_check_v2_tasks_task_id_ready_check_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.get_task_traces_v2_tasks_task_id_traces_get

- **Route**: `GET /v2/tasks/{task_id}/traces`
- **Signature**: `def get_task_traces_v2_tasks_task_id_traces_get(task_id: UUID, *, limit: int | None = 20, offset: int | None = 0, task_version_id: UUID | None = None, model_id: UUID | None = None, exclude_training: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`
- **Params**: `task_id` — path · `limit` — query · `offset` — query · `task_version_id` — query · `model_id` — query · `exclude_training` — query
- **Returns (parsed)**: `PaginatedResponseTaskTrace`
- **Returns (raw)**: `ApiResult[PaginatedResponseTaskTrace, GetTaskTracesV2TasksTaskIdTracesGetErrorBody]`
- **Error**: `GetTaskTracesV2TasksTaskIdTracesGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedResponseTaskTrace` | `hud/models/paginated_response_task_trace.py` |
| `GetTaskTracesV2TasksTaskIdTracesGetErrorBody` | `hud/errors/get_task_traces_v2_tasks_task_id_traces_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.get_task_version_v2_tasks_task_id_versions_version_id_get

- **Route**: `GET /v2/tasks/{task_id}/versions/{version_id}`
- **Signature**: `def get_task_version_v2_tasks_task_id_versions_version_id_get(task_id: UUID, version_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`, `version_id`
- **Params**: `task_id` — path · `version_id` — path
- **Returns (parsed)**: `TaskWithVersionResponse`
- **Returns (raw)**: `ApiResult[TaskWithVersionResponse, GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody]`
- **Error**: `GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskWithVersionResponse` | `hud/models/task_with_version_response.py` |
| `GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody` | `hud/errors/get_task_version_v2_tasks_task_id_versions_version_id_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.update_task_comment_v2_tasks_task_id_comments_comment_id_patch

- **Route**: `PATCH /v2/tasks/{task_id}/comments/{comment_id}`
- **Signature**: `def update_task_comment_v2_tasks_task_id_comments_comment_id_patch(task_id: UUID, comment_id: UUID, body: UpdateTaskCommentRequest | UpdateTaskCommentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`, `comment_id`, `body`
- **Params**: `task_id` — path · `comment_id` — path · `body` — JSON body
- **Returns (parsed)**: `TaskCommentItem`
- **Returns (raw)**: `ApiResult[TaskCommentItem, UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody]`
- **Error**: `UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateTaskCommentRequest` | `hud/models/update_task_comment_request.py` |
| `UpdateTaskCommentRequestDict` | `hud/models/update_task_comment_request.py` |
| `TaskCommentItem` | `hud/models/task_comment_item.py` |
| `UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody` | `hud/errors/update_task_comment_v2_tasks_task_id_comments_comment_id_patch_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasks.upload_tasks_v2_tasks_upload_post

- **Route**: `POST /v2/tasks/upload`
- **Signature**: `def upload_tasks_v2_tasks_upload_post(body: TaskUploadRequest | TaskUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TaskUploadResponse`
- **Returns (raw)**: `ApiResult[TaskUploadResponse, UploadTasksV2TasksUploadPostErrorBody]`
- **Error**: `UploadTasksV2TasksUploadPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskUploadRequest` | `hud/models/task_upload_request.py` |
| `TaskUploadRequestDict` | `hud/models/task_upload_request.py` |
| `TaskUploadResponse` | `hud/models/task_upload_response.py` |
| `UploadTasksV2TasksUploadPostErrorBody` | `hud/errors/upload_tasks_v2_tasks_upload_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

