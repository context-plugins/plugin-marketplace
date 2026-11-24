<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasksets — operations

Accessor: `client.tasksets` · Source: `hud/apis/tasksets.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tasksets.create_taskset_v2_tasksets_post

- **Route**: `POST /v2/tasksets`
- **Signature**: `def create_taskset_v2_tasksets_post(body: TasksetCreateRequest | TasksetCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TasksetResponse`
- **Returns (raw)**: `ApiResult[TasksetResponse, CreateTasksetV2TasksetsPostErrorBody]`
- **Error**: `CreateTasksetV2TasksetsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TasksetCreateRequest` | `hud/models/taskset_create_request.py` |
| `TasksetCreateRequestDict` | `hud/models/taskset_create_request.py` |
| `TasksetResponse` | `hud/models/taskset_response.py` |
| `CreateTasksetV2TasksetsPostErrorBody` | `hud/errors/create_taskset_v2_tasksets_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasksets.export_taskset_v2_tasksets_taskset_id_export_get

- **Route**: `GET /v2/tasksets/{taskset_id}/export`
- **Signature**: `def export_taskset_v2_tasksets_taskset_id_export_get(taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taskset_id`
- **Params**: `taskset_id` — path
- **Returns (parsed)**: `TasksetExportResponse`
- **Returns (raw)**: `ApiResult[TasksetExportResponse, ExportTasksetV2TasksetsTasksetIdExportGetErrorBody]`
- **Error**: `ExportTasksetV2TasksetsTasksetIdExportGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TasksetExportResponse` | `hud/models/taskset_export_response.py` |
| `ExportTasksetV2TasksetsTasksetIdExportGetErrorBody` | `hud/errors/export_taskset_v2_tasksets_taskset_id_export_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasksets.get_taskset_by_name_v2_tasksets_by_name_name_get

- **Route**: `GET /v2/tasksets/by-name/{name}`
- **Signature**: `def get_taskset_by_name_v2_tasksets_by_name_name_get(name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — path
- **Returns (parsed)**: `TasksetExportResponse`
- **Returns (raw)**: `ApiResult[TasksetExportResponse, GetTasksetByNameV2TasksetsByNameNameGetErrorBody]`
- **Error**: `GetTasksetByNameV2TasksetsByNameNameGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TasksetExportResponse` | `hud/models/taskset_export_response.py` |
| `GetTasksetByNameV2TasksetsByNameNameGetErrorBody` | `hud/errors/get_taskset_by_name_v2_tasksets_by_name_name_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasksets.get_taskset_v2_tasksets_taskset_id_get

- **Route**: `GET /v2/tasksets/{taskset_id}`
- **Signature**: `def get_taskset_v2_tasksets_taskset_id_get(taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taskset_id`
- **Params**: `taskset_id` — path
- **Returns (parsed)**: `TasksetResponse`
- **Returns (raw)**: `ApiResult[TasksetResponse, GetTasksetV2TasksetsTasksetIdGetErrorBody]`
- **Error**: `GetTasksetV2TasksetsTasksetIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TasksetResponse` | `hud/models/taskset_response.py` |
| `GetTasksetV2TasksetsTasksetIdGetErrorBody` | `hud/errors/get_taskset_v2_tasksets_taskset_id_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasksets.list_taskset_tasks_v2_tasksets_taskset_id_tasks_get

- **Route**: `GET /v2/tasksets/{taskset_id}/tasks`
- **Signature**: `def list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(taskset_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taskset_id`
- **Params**: `taskset_id` — path · `limit` — query · `offset` — query
- **Returns (parsed)**: `PaginatedResponseTaskResponse`
- **Returns (raw)**: `ApiResult[PaginatedResponseTaskResponse, ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody]`
- **Error**: `ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaginatedResponseTaskResponse` | `hud/models/paginated_response_task_response.py` |
| `ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody` | `hud/errors/list_taskset_tasks_v2_tasksets_taskset_id_tasks_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.tasksets.list_tasksets_v2_tasksets_get

- **Route**: `GET /v2/tasksets`
- **Signature**: `def list_tasksets_v2_tasksets_get(*, limit: int | None = 50, offset: int | None = 0, search: str | None = None, public_only: bool | None = False, featured_only: bool | None = False, owner_only: bool | None = False, min_tasks: int | None = None, registry_id: UUID | None = None, scenario_id: UUID | None = None, project_id: UUID | None = None, sort_by: SortByHudPlatformTasksetsApiOrStr | None = SortByHudPlatformTasksetsApi.STARRED, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query · `search` — query · `public_only` — query · `featured_only` — query · `owner_only` — query · `min_tasks` — query · `registry_id` — query · `scenario_id` — query · `project_id` — query · `sort_by` — query
- **Returns (parsed)**: `PaginatedResponseTasksetResponse`
- **Returns (raw)**: `ApiResult[PaginatedResponseTasksetResponse, ListTasksetsV2TasksetsGetErrorBody]`
- **Error**: `ListTasksetsV2TasksetsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByHudPlatformTasksetsApiOrStr` | `hud/models/enums/sort_by_hud_platform_tasksets_api.py` |
| `PaginatedResponseTasksetResponse` | `hud/models/paginated_response_taskset_response.py` |
| `ListTasksetsV2TasksetsGetErrorBody` | `hud/errors/list_tasksets_v2_tasksets_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

