<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScheduledJobs — operations

Accessor: `client.scheduled_jobs` · Source: `dynamics_365_business_central/apis/scheduled_jobs.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.scheduled_jobs.list_scheduled_jobs

- **Route**: `GET /companies({company_id})/scheduledJobs`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_scheduled_jobs(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `CompaniesApiScheduledJobsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiScheduledJobsResponse, ListScheduledJobsErrorBody]`
- **Error**: `ListScheduledJobsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiScheduledJobsResponse` | `dynamics_365_business_central/models/companies_api_scheduled_jobs_response.py` |
| `ListScheduledJobsErrorBody` | `dynamics_365_business_central/errors/list_scheduled_jobs_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

