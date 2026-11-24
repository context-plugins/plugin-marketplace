<!-- Generated file — do not edit; regenerated with the SDK. -->

# Processes — operations

Accessor: `client.processes` · Source: `boomi/apis/processes.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.processes.create_process

- **Route**: `POST /Process`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def create_process(body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Process`
- **Returns (raw)**: `ApiResult[Process, CreateProcessErrorBody]`
- **Error**: `CreateProcessErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProcessInput` | `boomi/models/process_input.py` |
| `ProcessInputDict` | `boomi/models/process_input.py` |
| `Process` | `boomi/models/process.py` |
| `CreateProcessErrorBody` | `boomi/errors/create_process_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.processes.delete_process

- **Route**: `DELETE /Process/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def delete_process(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteProcessErrorBody]`
- **Error**: `DeleteProcessErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteProcessErrorBody` | `boomi/errors/delete_process_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.processes.get_process

- **Route**: `GET /Process/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def get_process(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Process`
- **Returns (raw)**: `ApiResult[Process, GetProcessErrorBody]`
- **Error**: `GetProcessErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Process` | `boomi/models/process.py` |
| `GetProcessErrorBody` | `boomi/errors/get_process_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.processes.get_process_schedules

- **Route**: `GET /ProcessSchedules/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def get_process_schedules(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ProcessSchedules`
- **Returns (raw)**: `ApiResult[ProcessSchedules, GetProcessSchedulesErrorBody]`
- **Error**: `GetProcessSchedulesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProcessSchedules` | `boomi/models/process_schedules.py` |
| `GetProcessSchedulesErrorBody` | `boomi/errors/get_process_schedules_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.processes.query_processes

- **Route**: `POST /Process/query`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def query_processes(body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ProcessQueryResult`
- **Returns (raw)**: `ApiResult[ProcessQueryResult, QueryProcessesErrorBody]`
- **Error**: `QueryProcessesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QueryRequest` | `boomi/models/query_request.py` |
| `QueryRequestDict` | `boomi/models/query_request.py` |
| `ProcessQueryResult` | `boomi/models/process_query_result.py` |
| `QueryProcessesErrorBody` | `boomi/errors/query_processes_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.processes.update_process

- **Route**: `POST /Process/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def update_process(id_: str, body: ProcessInput | ProcessInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Process`
- **Returns (raw)**: `ApiResult[Process, UpdateProcessErrorBody]`
- **Error**: `UpdateProcessErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProcessInput` | `boomi/models/process_input.py` |
| `ProcessInputDict` | `boomi/models/process_input.py` |
| `Process` | `boomi/models/process.py` |
| `UpdateProcessErrorBody` | `boomi/errors/update_process_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

### client.processes.update_process_schedules

- **Route**: `POST /ProcessSchedules/{id}`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def update_process_schedules(id_: str, body: ProcessSchedules | ProcessSchedulesDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ProcessSchedules`
- **Returns (raw)**: `ApiResult[ProcessSchedules, UpdateProcessSchedulesErrorBody]`
- **Error**: `UpdateProcessSchedulesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProcessSchedules` | `boomi/models/process_schedules.py` |
| `ProcessSchedulesDict` | `boomi/models/process_schedules.py` |
| `UpdateProcessSchedulesErrorBody` | `boomi/errors/update_process_schedules_error.py` |
| `ErrorResponse` | `boomi/models/error_response.py` |

