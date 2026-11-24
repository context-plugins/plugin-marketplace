<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tasks — operations

Accessor: `client.tasks` · Source: `parallel/apis/tasks.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.tasks.tasks_runs_events_get_v1_tasks_runs_run_id_events_get

- **Route**: `GET /v1/tasks/runs/{run_id}/events`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_runs_events_get_v1_tasks_runs_run_id_events_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path
- **Returns (parsed)**: `EventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet]`
- **Returns (raw)**: `ApiResult[EventStream[Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet], TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody]`
- **Error**: `TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Response200TasksRunsEventsGetV1TasksRunsRunIdEventsGet` | `parallel/models/unions/response200_tasks_runs_events_get_v1_tasks_runs_run_id_events_get.py` |
| `TasksRunsEventsGetV1TasksRunsRunIdEventsGetErrorBody` | `parallel/errors/tasks_runs_events_get_v1_tasks_runs_run_id_events_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.tasks.tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get

- **Route**: `GET /v1beta/tasks/runs/{run_id}/events`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_runs_events_get_v1beta_tasks_runs_run_id_events_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path
- **Returns (parsed)**: `EventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet]`
- **Returns (raw)**: `ApiResult[EventStream[Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet], TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody]`
- **Error**: `TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Response200TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGet` | `parallel/models/unions/response200_tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get.py` |
| `TasksRunsEventsGetV1BetaTasksRunsRunIdEventsGetErrorBody` | `parallel/errors/tasks_runs_events_get_v1_beta_tasks_runs_run_id_events_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.tasks.tasks_runs_get_v1_tasks_runs_run_id_get

- **Route**: `GET /v1/tasks/runs/{run_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_runs_get_v1_tasks_runs_run_id_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path
- **Returns (parsed)**: `TaskRun`
- **Returns (raw)**: `ApiResult[TaskRun, TasksRunsGetV1TasksRunsRunIdGetErrorBody]`
- **Error**: `TasksRunsGetV1TasksRunsRunIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskRun` | `parallel/models/task_run.py` |
| `TasksRunsGetV1TasksRunsRunIdGetErrorBody` | `parallel/errors/tasks_runs_get_v1_tasks_runs_run_id_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.tasks.tasks_runs_input_get_v1_tasks_runs_run_id_input_get

- **Route**: `GET /v1/tasks/runs/{run_id}/input`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_runs_input_get_v1_tasks_runs_run_id_input_get(run_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path
- **Returns (parsed)**: `TaskRunInput`
- **Returns (raw)**: `ApiResult[TaskRunInput, TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody]`
- **Error**: `TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskRunInput` | `parallel/models/task_run_input.py` |
| `TasksRunsInputGetV1TasksRunsRunIdInputGetErrorBody` | `parallel/errors/tasks_runs_input_get_v1_tasks_runs_run_id_input_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.tasks.tasks_runs_post_v1_tasks_runs_post

- **Route**: `POST /v1/tasks/runs`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_runs_post_v1_tasks_runs_post(body: TaskRunInput | TaskRunInputDict, *, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `parallel_beta` — header `parallel-beta` · `body` — JSON body
- **Returns (parsed)**: `TaskRun`
- **Returns (raw)**: `ApiResult[TaskRun, TasksRunsPostV1TasksRunsPostErrorBody]`
- **Error**: `TasksRunsPostV1TasksRunsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 402, 403, 422, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskRunInput` | `parallel/models/task_run_input.py` |
| `TaskRunInputDict` | `parallel/models/task_run_input.py` |
| `TaskRun` | `parallel/models/task_run.py` |
| `TasksRunsPostV1TasksRunsPostErrorBody` | `parallel/errors/tasks_runs_post_v1_tasks_runs_post_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.tasks.tasks_runs_result_get_v1_tasks_runs_run_id_result_get

- **Route**: `GET /v1/tasks/runs/{run_id}/result`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_runs_result_get_v1_tasks_runs_run_id_result_get(run_id: str, *, timeout: int | None = 600, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path · `timeout` — query · `parallel_beta` — header `parallel-beta`
- **Returns (parsed)**: `TaskRunResult`
- **Returns (raw)**: `ApiResult[TaskRunResult, TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody]`
- **Error**: `TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 408, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskRunResult` | `parallel/models/task_run_result.py` |
| `TasksRunsResultGetV1TasksRunsRunIdResultGetErrorBody` | `parallel/errors/tasks_runs_result_get_v1_tasks_runs_run_id_result_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.tasks.tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get

- **Route**: `GET /v1/tasks/groups/{taskgroup_id}/events`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get(taskgroup_id: str, *, last_event_id: str | None = None, timeout: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taskgroup_id`
- **Params**: `taskgroup_id` — path · `last_event_id` — query · `timeout` — query
- **Returns (parsed)**: `EventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet]`
- **Returns (raw)**: `ApiResult[EventStream[Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet], TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody]`
- **Error**: `TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Response200TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGet` | `parallel/models/unions/response200_tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get.py` |
| `TasksSessionsEventsGetV1TasksGroupsTaskgroupIdEventsGetErrorBody` | `parallel/errors/tasks_sessions_events_get_v1_tasks_groups_taskgroup_id_events_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.tasks.tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get

- **Route**: `GET /v1/tasks/groups/{taskgroup_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get(taskgroup_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taskgroup_id`
- **Params**: `taskgroup_id` — path
- **Returns (parsed)**: `TaskGroupResponse`
- **Returns (raw)**: `ApiResult[TaskGroupResponse, TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody]`
- **Error**: `TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskGroupResponse` | `parallel/models/task_group_response.py` |
| `TasksTaskgroupsGetV1TasksGroupsTaskgroupIdGetErrorBody` | `parallel/errors/tasks_taskgroups_get_v1_tasks_groups_taskgroup_id_get_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.tasks.tasks_taskgroups_post_v1_tasks_groups_post

- **Route**: `POST /v1/tasks/groups`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_taskgroups_post_v1_tasks_groups_post(body: CreateTaskGroupRequest | CreateTaskGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `TaskGroupResponse`
- **Returns (raw)**: `ApiResult[TaskGroupResponse, TasksTaskgroupsPostV1TasksGroupsPostErrorBody]`
- **Error**: `TasksTaskgroupsPostV1TasksGroupsPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTaskGroupRequest` | `parallel/models/create_task_group_request.py` |
| `CreateTaskGroupRequestDict` | `parallel/models/create_task_group_request.py` |
| `TaskGroupResponse` | `parallel/models/task_group_response.py` |
| `TasksTaskgroupsPostV1TasksGroupsPostErrorBody` | `parallel/errors/tasks_taskgroups_post_v1_tasks_groups_post_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.tasks.tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get

- **Route**: `GET /v1/tasks/groups/{taskgroup_id}/runs`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get(taskgroup_id: str, *, last_event_id: str | None = None, status: Status1ParallelAiTasksApiOrStr | None = None, include_input: bool | None = False, include_output: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taskgroup_id`
- **Params**: `taskgroup_id` — path · `last_event_id` — query · `status` — query · `include_input` — query · `include_output` — query
- **Returns (parsed)**: `EventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet]`
- **Returns (raw)**: `ApiResult[EventStream[Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet], TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody]`
- **Error**: `TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status1ParallelAiTasksApiOrStr` | `parallel/models/enums/status1_parallel_ai_tasks_api.py` |
| `Response200TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGet` | `parallel/models/unions/response200_tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get.py` |
| `TasksTaskgroupsRunsGetV1TasksGroupsTaskgroupIdRunsGetErrorBody` | `parallel/errors/tasks_taskgroups_runs_get_v1_tasks_groups_taskgroup_id_runs_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

### client.tasks.tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get

- **Route**: `GET /v1/tasks/groups/{taskgroup_id}/runs/{run_id}`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get(taskgroup_id: str, run_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taskgroup_id`, `run_id`
- **Params**: `taskgroup_id` — path · `run_id` — path
- **Returns (parsed)**: `TaskRun`
- **Returns (raw)**: `ApiResult[TaskRun, TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody]`
- **Error**: `TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskRun` | `parallel/models/task_run.py` |
| `TasksTaskgroupsRunsIdGetV1TasksGroupsTaskgroupIdRunsRunIdGetErrorBody` | `parallel/errors/tasks_taskgroups_runs_id_get_v1_tasks_groups_taskgroup_id_runs_run_id_get_error.py` |
| `ErrorResponse` | `parallel/models/error_response.py` |

### client.tasks.tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post

- **Route**: `POST /v1/tasks/groups/{taskgroup_id}/runs`
- **Auth**: `api_key_auth`
- **Signature**: `def tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post(taskgroup_id: str, body: TaskGroupRunRequest | TaskGroupRunRequestDict, *, refresh_status: bool | None = True, parallel_beta: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `taskgroup_id`, `body`
- **Params**: `taskgroup_id` — path · `refresh_status` — query · `parallel_beta` — header `parallel-beta` · `body` — JSON body
- **Returns (parsed)**: `TaskGroupRunResponse`
- **Returns (raw)**: `ApiResult[TaskGroupRunResponse, TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody]`
- **Error**: `TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TaskGroupRunRequest` | `parallel/models/task_group_run_request.py` |
| `TaskGroupRunRequestDict` | `parallel/models/task_group_run_request.py` |
| `TaskGroupRunResponse` | `parallel/models/task_group_run_response.py` |
| `TasksTaskgroupsRunsPostV1TasksGroupsTaskgroupIdRunsPostErrorBody` | `parallel/errors/tasks_taskgroups_runs_post_v1_tasks_groups_taskgroup_id_runs_post_error.py` |
| `HttpValidationError` | `parallel/models/http_validation_error.py` |

