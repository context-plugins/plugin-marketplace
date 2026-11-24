<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `ui_path/apis/jobs.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jobs.get_job

- **Route**: `GET /odata/Jobs({key})`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_job(key: int, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `Job`
- **Returns (raw)**: `ApiResult[Job, GetJobErrorBody]`
- **Error**: `GetJobErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Job` | `ui_path/models/job.py` |
| `GetJobErrorBody` | `ui_path/errors/get_job_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.jobs.list_jobs

- **Route**: `GET /odata/Jobs`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_jobs(*, filter_: str | None = None, orderby: str | None = None, top: int | None = None, skip: int | None = None, select: str | None = None, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter` · `orderby` — query `$orderby` · `top` — query `$top` · `skip` — query `$skip` · `select` — query `$select` · `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId`
- **Returns (parsed)**: `ODataJobCollection`
- **Returns (raw)**: `ApiResult[ODataJobCollection, ListJobsErrorBody]`
- **Error**: `ListJobsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ODataJobCollection` | `ui_path/models/o_data_job_collection.py` |
| `ListJobsErrorBody` | `ui_path/errors/list_jobs_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.jobs.start_jobs

- **Route**: `POST /odata/Jobs/UiPath.Server.Configuration.OData.StartJobs`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def start_jobs(body: StartJobsRequest | StartJobsRequestDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId` · `body` — JSON body
- **Returns (parsed)**: `ODataJobCollection`
- **Returns (raw)**: `ApiResult[ODataJobCollection, StartJobsErrorBody]`
- **Error**: `StartJobsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartJobsRequest` | `ui_path/models/start_jobs_request.py` |
| `StartJobsRequestDict` | `ui_path/models/start_jobs_request.py` |
| `ODataJobCollection` | `ui_path/models/o_data_job_collection.py` |
| `StartJobsErrorBody` | `ui_path/errors/start_jobs_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

### client.jobs.stop_job

- **Route**: `POST /odata/Jobs/UiPath.Server.Configuration.OData.StopJob`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def stop_job(body: StopJobRequest | StopJobRequestDict, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_uipath_organization_unit_id` — header `X-UIPATH-OrganizationUnitId` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopJobErrorBody]`
- **Error**: `StopJobErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StopJobRequest` | `ui_path/models/stop_job_request.py` |
| `StopJobRequestDict` | `ui_path/models/stop_job_request.py` |
| `StopJobErrorBody` | `ui_path/errors/stop_job_error.py` |
| `ErrorResponse` | `ui_path/models/error_response.py` |

