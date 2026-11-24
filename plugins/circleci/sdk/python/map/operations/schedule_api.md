<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScheduleApi — operations

Accessor: `client.schedule_api` · Source: `circle_ci/apis/schedule_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.schedule_api.create_schedule

- **Route**: `POST /project/{project-slug}/schedule`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def create_schedule(project_slug: str, body: CreateScheduleRequest | CreateScheduleRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `body`
- **Params**: `project_slug` — path `project-slug` · `body` — JSON body
- **Returns (parsed)**: `Schedule`
- **Returns (raw)**: `ApiResult[Schedule, CreateScheduleErrorBody]`
- **Error**: `CreateScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateScheduleRequest` | `circle_ci/models/create_schedule_request.py` |
| `CreateScheduleRequestDict` | `circle_ci/models/create_schedule_request.py` |
| `Schedule` | `circle_ci/models/schedule.py` |
| `CreateScheduleErrorBody` | `circle_ci/errors/create_schedule_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.schedule_api.delete_schedule

- **Route**: `DELETE /schedule/{schedule-id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def delete_schedule(schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `schedule_id`
- **Params**: `schedule_id` — path `schedule-id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteScheduleErrorBody]`
- **Error**: `DeleteScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `DeleteScheduleErrorBody` | `circle_ci/errors/delete_schedule_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.schedule_api.get_schedule

- **Route**: `GET /schedule/{schedule-id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_schedule(schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `schedule_id`
- **Params**: `schedule_id` — path `schedule-id`
- **Returns (parsed)**: `Schedule`
- **Returns (raw)**: `ApiResult[Schedule, GetScheduleErrorBody]`
- **Error**: `GetScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Schedule` | `circle_ci/models/schedule.py` |
| `GetScheduleErrorBody` | `circle_ci/errors/get_schedule_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.schedule_api.list_schedules

- **Route**: `GET /project/{project-slug}/schedule`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_schedules(project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`
- **Params**: `project_slug` — path `project-slug` · `page_token` — query `page-token`
- **Returns (parsed)**: `ScheduleList`
- **Returns (raw)**: `ApiResult[ScheduleList, ListSchedulesErrorBody]`
- **Error**: `ListSchedulesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScheduleList` | `circle_ci/models/schedule_list.py` |
| `ListSchedulesErrorBody` | `circle_ci/errors/list_schedules_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.schedule_api.update_schedule

- **Route**: `PATCH /schedule/{schedule-id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def update_schedule(schedule_id: UUID, body: UpdateScheduleRequest | UpdateScheduleRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `schedule_id`, `body`
- **Params**: `schedule_id` — path `schedule-id` · `body` — JSON body
- **Returns (parsed)**: `Schedule`
- **Returns (raw)**: `ApiResult[Schedule, UpdateScheduleErrorBody]`
- **Error**: `UpdateScheduleErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateScheduleRequest` | `circle_ci/models/update_schedule_request.py` |
| `UpdateScheduleRequestDict` | `circle_ci/models/update_schedule_request.py` |
| `Schedule` | `circle_ci/models/schedule.py` |
| `UpdateScheduleErrorBody` | `circle_ci/errors/update_schedule_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

