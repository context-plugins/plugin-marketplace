<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `google_cloud_talent_solution/client.py` · 23 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jobs_projects_operations_get

- **Route**: `GET /v4/projects/{projectsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_operations_get(projects_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, JobsProjectsOperationsGetErrorBody]`
- **Error**: `JobsProjectsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_talent_solution/models/operation.py` |
| `JobsProjectsOperationsGetErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_client_events_create

- **Route**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/clientEvents`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_client_events_create(projects_id: str, tenants_id: str, body: ClientEvent | ClientEventDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `body` — JSON body
- **Returns (parsed)**: `ClientEvent`
- **Returns (raw)**: `ApiResult[ClientEvent, JobsProjectsTenantsClientEventsCreateErrorBody]`
- **Error**: `JobsProjectsTenantsClientEventsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClientEvent` | `google_cloud_talent_solution/models/client_event.py` |
| `ClientEventDict` | `google_cloud_talent_solution/models/client_event.py` |
| `JobsProjectsTenantsClientEventsCreateErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_client_events_create_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_companies_create

- **Route**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/companies`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_companies_create(projects_id: str, tenants_id: str, body: Company | CompanyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `body` — JSON body
- **Returns (parsed)**: `Company`
- **Returns (raw)**: `ApiResult[Company, JobsProjectsTenantsCompaniesCreateErrorBody]`
- **Error**: `JobsProjectsTenantsCompaniesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Company` | `google_cloud_talent_solution/models/company.py` |
| `CompanyDict` | `google_cloud_talent_solution/models/company.py` |
| `JobsProjectsTenantsCompaniesCreateErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_companies_create_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_companies_delete

- **Route**: `DELETE /v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_companies_delete(projects_id: str, tenants_id: str, companies_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `companies_id`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `companies_id` — path `companiesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, JobsProjectsTenantsCompaniesDeleteErrorBody]`
- **Error**: `JobsProjectsTenantsCompaniesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsCompaniesDeleteErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_companies_delete_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_companies_get

- **Route**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_companies_get(projects_id: str, tenants_id: str, companies_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `companies_id`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `companies_id` — path `companiesId`
- **Returns (parsed)**: `Company`
- **Returns (raw)**: `ApiResult[Company, JobsProjectsTenantsCompaniesGetErrorBody]`
- **Error**: `JobsProjectsTenantsCompaniesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Company` | `google_cloud_talent_solution/models/company.py` |
| `JobsProjectsTenantsCompaniesGetErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_companies_get_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_companies_list

- **Route**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}/companies`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_companies_list(projects_id: str, tenants_id: str, *, page_size: int | None = None, page_token: str | None = None, require_open_jobs: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `require_open_jobs` — query `requireOpenJobs`
- **Returns (parsed)**: `ListCompaniesResponse`
- **Returns (raw)**: `ApiResult[ListCompaniesResponse, JobsProjectsTenantsCompaniesListErrorBody]`
- **Error**: `JobsProjectsTenantsCompaniesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListCompaniesResponse` | `google_cloud_talent_solution/models/list_companies_response.py` |
| `JobsProjectsTenantsCompaniesListErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_companies_list_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_companies_patch

- **Route**: `PATCH /v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_companies_patch(projects_id: str, tenants_id: str, companies_id: str, body: Company | CompanyDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `companies_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `companies_id` — path `companiesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Company`
- **Returns (raw)**: `ApiResult[Company, JobsProjectsTenantsCompaniesPatchErrorBody]`
- **Error**: `JobsProjectsTenantsCompaniesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Company` | `google_cloud_talent_solution/models/company.py` |
| `CompanyDict` | `google_cloud_talent_solution/models/company.py` |
| `JobsProjectsTenantsCompaniesPatchErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_companies_patch_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_complete_query

- **Route**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}:completeQuery`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_complete_query(projects_id: str, tenants_id: str, *, company: str | None = None, language_codes: list[str] | None = None, page_size: int | None = None, query: str | None = None, scope: ScopeOrStr | None = None, type_: Type4OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `company` — query · `language_codes` — query `languageCodes` · `page_size` — query `pageSize` · `query` — query · `scope` — query · `type_` — query `type`
- **Returns (parsed)**: `CompleteQueryResponse`
- **Returns (raw)**: `ApiResult[CompleteQueryResponse, JobsProjectsTenantsCompleteQueryErrorBody]`
- **Error**: `JobsProjectsTenantsCompleteQueryErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScopeOrStr` | `google_cloud_talent_solution/models/enums/scope.py` |
| `Type4OrStr` | `google_cloud_talent_solution/models/enums/type4.py` |
| `CompleteQueryResponse` | `google_cloud_talent_solution/models/complete_query_response.py` |
| `JobsProjectsTenantsCompleteQueryErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_complete_query_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_create

- **Route**: `POST /v4/projects/{projectsId}/tenants`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_create(projects_id: str, body: Tenant | TenantDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `body` — JSON body
- **Returns (parsed)**: `Tenant`
- **Returns (raw)**: `ApiResult[Tenant, JobsProjectsTenantsCreateErrorBody]`
- **Error**: `JobsProjectsTenantsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Tenant` | `google_cloud_talent_solution/models/tenant.py` |
| `TenantDict` | `google_cloud_talent_solution/models/tenant.py` |
| `JobsProjectsTenantsCreateErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_create_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_delete

- **Route**: `DELETE /v4/projects/{projectsId}/tenants/{tenantsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_delete(projects_id: str, tenants_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, JobsProjectsTenantsDeleteErrorBody]`
- **Error**: `JobsProjectsTenantsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsDeleteErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_delete_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_get

- **Route**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_get(projects_id: str, tenants_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId`
- **Returns (parsed)**: `Tenant`
- **Returns (raw)**: `ApiResult[Tenant, JobsProjectsTenantsGetErrorBody]`
- **Error**: `JobsProjectsTenantsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Tenant` | `google_cloud_talent_solution/models/tenant.py` |
| `JobsProjectsTenantsGetErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_get_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_batch_create

- **Route**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchCreate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_batch_create(projects_id: str, tenants_id: str, body: BatchCreateJobsRequest | BatchCreateJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, JobsProjectsTenantsJobsBatchCreateErrorBody]`
- **Error**: `JobsProjectsTenantsJobsBatchCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchCreateJobsRequest` | `google_cloud_talent_solution/models/batch_create_jobs_request.py` |
| `BatchCreateJobsRequestDict` | `google_cloud_talent_solution/models/batch_create_jobs_request.py` |
| `Operation` | `google_cloud_talent_solution/models/operation.py` |
| `JobsProjectsTenantsJobsBatchCreateErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_batch_create_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_batch_delete

- **Route**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchDelete`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_batch_delete(projects_id: str, tenants_id: str, body: BatchDeleteJobsRequest | BatchDeleteJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, JobsProjectsTenantsJobsBatchDeleteErrorBody]`
- **Error**: `JobsProjectsTenantsJobsBatchDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchDeleteJobsRequest` | `google_cloud_talent_solution/models/batch_delete_jobs_request.py` |
| `BatchDeleteJobsRequestDict` | `google_cloud_talent_solution/models/batch_delete_jobs_request.py` |
| `Operation` | `google_cloud_talent_solution/models/operation.py` |
| `JobsProjectsTenantsJobsBatchDeleteErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_batch_delete_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_batch_update

- **Route**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchUpdate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_batch_update(projects_id: str, tenants_id: str, body: BatchUpdateJobsRequest | BatchUpdateJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, JobsProjectsTenantsJobsBatchUpdateErrorBody]`
- **Error**: `JobsProjectsTenantsJobsBatchUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchUpdateJobsRequest` | `google_cloud_talent_solution/models/batch_update_jobs_request.py` |
| `BatchUpdateJobsRequestDict` | `google_cloud_talent_solution/models/batch_update_jobs_request.py` |
| `Operation` | `google_cloud_talent_solution/models/operation.py` |
| `JobsProjectsTenantsJobsBatchUpdateErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_batch_update_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_create

- **Route**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_create(projects_id: str, tenants_id: str, body: Job | JobDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `body` — JSON body
- **Returns (parsed)**: `Job`
- **Returns (raw)**: `ApiResult[Job, JobsProjectsTenantsJobsCreateErrorBody]`
- **Error**: `JobsProjectsTenantsJobsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Job` | `google_cloud_talent_solution/models/job.py` |
| `JobDict` | `google_cloud_talent_solution/models/job.py` |
| `JobsProjectsTenantsJobsCreateErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_create_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_delete

- **Route**: `DELETE /v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_delete(projects_id: str, tenants_id: str, jobs_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `jobs_id`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `jobs_id` — path `jobsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, JobsProjectsTenantsJobsDeleteErrorBody]`
- **Error**: `JobsProjectsTenantsJobsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobsProjectsTenantsJobsDeleteErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_delete_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_get

- **Route**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_get(projects_id: str, tenants_id: str, jobs_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `jobs_id`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `jobs_id` — path `jobsId`
- **Returns (parsed)**: `Job`
- **Returns (raw)**: `ApiResult[Job, JobsProjectsTenantsJobsGetErrorBody]`
- **Error**: `JobsProjectsTenantsJobsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Job` | `google_cloud_talent_solution/models/job.py` |
| `JobsProjectsTenantsJobsGetErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_get_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_list

- **Route**: `GET /v4/projects/{projectsId}/tenants/{tenantsId}/jobs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_list(projects_id: str, tenants_id: str, *, filter_: str | None = None, job_view: JobView1OrStr | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `filter_` — query `filter` · `job_view` — query `jobView` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListJobsResponse`
- **Returns (raw)**: `ApiResult[ListJobsResponse, JobsProjectsTenantsJobsListErrorBody]`
- **Error**: `JobsProjectsTenantsJobsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobView1OrStr` | `google_cloud_talent_solution/models/enums/job_view1.py` |
| `ListJobsResponse` | `google_cloud_talent_solution/models/list_jobs_response.py` |
| `JobsProjectsTenantsJobsListErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_list_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_patch

- **Route**: `PATCH /v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_patch(projects_id: str, tenants_id: str, jobs_id: str, body: Job | JobDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `jobs_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `jobs_id` — path `jobsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Job`
- **Returns (raw)**: `ApiResult[Job, JobsProjectsTenantsJobsPatchErrorBody]`
- **Error**: `JobsProjectsTenantsJobsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Job` | `google_cloud_talent_solution/models/job.py` |
| `JobDict` | `google_cloud_talent_solution/models/job.py` |
| `JobsProjectsTenantsJobsPatchErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_patch_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_search

- **Route**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:search`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_search(projects_id: str, tenants_id: str, body: SearchJobsRequest | SearchJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `body` — JSON body
- **Returns (parsed)**: `SearchJobsResponse`
- **Returns (raw)**: `ApiResult[SearchJobsResponse, JobsProjectsTenantsJobsSearchErrorBody]`
- **Error**: `JobsProjectsTenantsJobsSearchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchJobsRequest` | `google_cloud_talent_solution/models/search_jobs_request.py` |
| `SearchJobsRequestDict` | `google_cloud_talent_solution/models/search_jobs_request.py` |
| `SearchJobsResponse` | `google_cloud_talent_solution/models/search_jobs_response.py` |
| `JobsProjectsTenantsJobsSearchErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_search_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_jobs_search_for_alert

- **Route**: `POST /v4/projects/{projectsId}/tenants/{tenantsId}/jobs:searchForAlert`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_jobs_search_for_alert(projects_id: str, tenants_id: str, body: SearchJobsRequest | SearchJobsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `body` — JSON body
- **Returns (parsed)**: `SearchJobsResponse`
- **Returns (raw)**: `ApiResult[SearchJobsResponse, JobsProjectsTenantsJobsSearchForAlertErrorBody]`
- **Error**: `JobsProjectsTenantsJobsSearchForAlertErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SearchJobsRequest` | `google_cloud_talent_solution/models/search_jobs_request.py` |
| `SearchJobsRequestDict` | `google_cloud_talent_solution/models/search_jobs_request.py` |
| `SearchJobsResponse` | `google_cloud_talent_solution/models/search_jobs_response.py` |
| `JobsProjectsTenantsJobsSearchForAlertErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_jobs_search_for_alert_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_list

- **Route**: `GET /v4/projects/{projectsId}/tenants`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_list(projects_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListTenantsResponse`
- **Returns (raw)**: `ApiResult[ListTenantsResponse, JobsProjectsTenantsListErrorBody]`
- **Error**: `JobsProjectsTenantsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListTenantsResponse` | `google_cloud_talent_solution/models/list_tenants_response.py` |
| `JobsProjectsTenantsListErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_list_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

### client.jobs_projects_tenants_patch

- **Route**: `PATCH /v4/projects/{projectsId}/tenants/{tenantsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def jobs_projects_tenants_patch(projects_id: str, tenants_id: str, body: Tenant | TenantDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `tenants_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `tenants_id` — path `tenantsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Tenant`
- **Returns (raw)**: `ApiResult[Tenant, JobsProjectsTenantsPatchErrorBody]`
- **Error**: `JobsProjectsTenantsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Tenant` | `google_cloud_talent_solution/models/tenant.py` |
| `TenantDict` | `google_cloud_talent_solution/models/tenant.py` |
| `JobsProjectsTenantsPatchErrorBody` | `google_cloud_talent_solution/errors/jobs_projects_tenants_patch_error.py` |
| `GoogleRpcError` | `google_cloud_talent_solution/models/google_rpc_error.py` |

