<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `mr_scraper/apis/jobs.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jobs.get_jobs

- **Route**: `GET /jobs`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def get_jobs(*, page_size: int | None = None, page: int | None = None, sort_field: str | None = None, sort_order: str | None = None, search: str | None = None, start_at: str | None = None, end_at: str | None = None, date_range_column: str | None = None, name: str | None = None, status: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page_size` — query `pageSize` · `page` — query · `sort_field` — query `sortField` · `sort_order` — query `sortOrder` · `search` — query · `start_at` — query `startAt` · `end_at` — query `endAt` · `date_range_column` — query `dateRangeColumn` · `name` — query · `status` — query
- **Returns (parsed)**: `JobsResponse`
- **Returns (raw)**: `ApiResult[JobsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `JobsResponse` | `mr_scraper/models/jobs_response.py` |

### client.jobs.get_jobs_by_id

- **Route**: `GET /jobs/{id}`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def get_jobs_by_id(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `JobsResponse1`
- **Returns (raw)**: `ApiResult[JobsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `JobsResponse1` | `mr_scraper/models/jobs_response1.py` |

### client.jobs.post_jobs

- **Route**: `POST /jobs`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def post_jobs(body: JobJob | JobJobDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `JobsResponse1`
- **Returns (raw)**: `ApiResult[JobsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `JobJob` | `mr_scraper/models/job_job.py` |
| `JobJobDict` | `mr_scraper/models/job_job.py` |
| `JobsResponse1` | `mr_scraper/models/jobs_response1.py` |

### client.jobs.put_jobs_by_id

- **Route**: `PUT /jobs/{id}`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def put_jobs_by_id(id_: int, body: JobJob | JobJobDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `JobsResponse1`
- **Returns (raw)**: `ApiResult[JobsResponse1, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `JobJob` | `mr_scraper/models/job_job.py` |
| `JobJobDict` | `mr_scraper/models/job_job.py` |
| `JobsResponse1` | `mr_scraper/models/jobs_response1.py` |

