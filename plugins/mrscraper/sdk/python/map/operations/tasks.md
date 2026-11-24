<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `mr_scraper/apis/tasks.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tasks.get_tasks

- **Route**: `GET /tasks`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def get_tasks(start_at: str, end_at: str, *, page_size: int | None = None, page: int | None = None, sort_field: str | None = None, sort_order: str | None = None, search: str | None = None, date_range_column: str | None = None, domain: str | None = None, action: str | None = None, status: str | None = None, job_id: int | None = None, is_parent: bool | None = None, count_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `start_at`, `end_at`
- **Params**: `start_at` — query `startAt` · `end_at` — query `endAt` · `page_size` — query `pageSize` · `page` — query · `sort_field` — query `sortField` · `sort_order` — query `sortOrder` · `search` — query · `date_range_column` — query `dateRangeColumn` · `domain` — query · `action` — query · `status` — query · `job_id` — query `jobId` · `is_parent` — query `isParent` · `count_only` — query `countOnly`
- **Returns (parsed)**: `TasksResponse`
- **Returns (raw)**: `ApiResult[TasksResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TasksResponse` | `mr_scraper/models/tasks_response.py` |

### client.tasks.get_tasks_by_id

- **Route**: `GET /tasks/{id}`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def get_tasks_by_id(id_: int, *, result: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `result` — query
- **Returns (parsed)**: `TasksResponse3`
- **Returns (raw)**: `ApiResult[TasksResponse3, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TasksResponse3` | `mr_scraper/models/tasks_response3.py` |

### client.tasks.post_tasks

- **Route**: `POST /tasks`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def post_tasks(body: TaskTaskSwagger | TaskTaskSwaggerDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TasksResponse1`
- **Returns (raw)**: `ApiResult[TasksResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TaskTaskSwagger` | `mr_scraper/models/task_task_swagger.py` |
| `TaskTaskSwaggerDict` | `mr_scraper/models/task_task_swagger.py` |
| `TasksResponse1` | `mr_scraper/models/tasks_response1.py` |

### client.tasks.post_tasks_bulk

- **Route**: `POST /tasks/bulk`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def post_tasks_bulk(body: TaskBatchCreateRequest | TaskBatchCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TasksBulkResponse1`
- **Returns (raw)**: `ApiResult[TasksBulkResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TaskBatchCreateRequest` | `mr_scraper/models/task_batch_create_request.py` |
| `TaskBatchCreateRequestDict` | `mr_scraper/models/task_batch_create_request.py` |
| `TasksBulkResponse1` | `mr_scraper/models/tasks_bulk_response1.py` |

### client.tasks.put_tasks_bulk

- **Route**: `PUT /tasks/bulk`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def put_tasks_bulk(body: TaskBatchUpdateRequest | TaskBatchUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TasksBulkResponse`
- **Returns (raw)**: `ApiResult[TasksBulkResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TaskBatchUpdateRequest` | `mr_scraper/models/task_batch_update_request.py` |
| `TaskBatchUpdateRequestDict` | `mr_scraper/models/task_batch_update_request.py` |
| `TasksBulkResponse` | `mr_scraper/models/tasks_bulk_response.py` |

### client.tasks.put_tasks_by_id

- **Route**: `PUT /tasks/{id}`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def put_tasks_by_id(id_: int, body: TaskTaskSwagger | TaskTaskSwaggerDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `TasksResponse1`
- **Returns (raw)**: `ApiResult[TasksResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TaskTaskSwagger` | `mr_scraper/models/task_task_swagger.py` |
| `TaskTaskSwaggerDict` | `mr_scraper/models/task_task_swagger.py` |
| `TasksResponse1` | `mr_scraper/models/tasks_response1.py` |

### client.tasks.put_tasks_by_id_status

- **Route**: `PUT /tasks/{id}/status`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def put_tasks_by_id_status(id_: int, body: TaskUpdateTaskStatusRequest | TaskUpdateTaskStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `TasksStatusResponse`
- **Returns (raw)**: `ApiResult[TasksStatusResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `TaskUpdateTaskStatusRequest` | `mr_scraper/models/task_update_task_status_request.py` |
| `TaskUpdateTaskStatusRequestDict` | `mr_scraper/models/task_update_task_status_request.py` |
| `TasksStatusResponse` | `mr_scraper/models/tasks_status_response.py` |

