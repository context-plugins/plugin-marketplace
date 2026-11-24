<!-- Generated file — do not edit; regenerated with the SDK. -->

# RunnerTask — operations

Accessor: `client.runner_task` · Source: `circle_ci/apis/runner_task.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.runner_task.get_running_task_count

- **Route**: `GET /runner/tasks/running`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_running_task_count(resource_class: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_class`
- **Params**: `resource_class` — query `resource-class`
- **Returns (parsed)**: `RunnerTasksRunningResponse`
- **Returns (raw)**: `ApiResult[RunnerTasksRunningResponse, GetRunningTaskCountErrorBody]`
- **Error**: `GetRunningTaskCountErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunnerTasksRunningResponse` | `circle_ci/models/runner_tasks_running_response.py` |
| `GetRunningTaskCountErrorBody` | `circle_ci/errors/get_running_task_count_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.runner_task.get_unclaimed_task_count

- **Route**: `GET /runner/tasks`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_unclaimed_task_count(resource_class: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_class`
- **Params**: `resource_class` — query `resource-class`
- **Returns (parsed)**: `RunnerTasksResponse`
- **Returns (raw)**: `ApiResult[RunnerTasksResponse, GetUnclaimedTaskCountErrorBody]`
- **Error**: `GetUnclaimedTaskCountErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunnerTasksResponse` | `circle_ci/models/runner_tasks_response.py` |
| `GetUnclaimedTaskCountErrorBody` | `circle_ci/errors/get_unclaimed_task_count_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

