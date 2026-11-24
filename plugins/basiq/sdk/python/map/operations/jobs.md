<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `basiq/apis/jobs.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jobs.get_jobs

- **Route**: `GET /jobs/{jobId}`
- **Auth**: `services_token`
- **Signature**: `def get_jobs(job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `JobsResponse3`
- **Returns (raw)**: `ApiResult[JobsResponse3, GetJobsErrorBody]`
- **Error**: `GetJobsErrorBody` — **Case A (typed)**
- **Error arms**: `Jobs400Error1` [400] · `Jobs401Error1` [401] · `Jobs403Error1` [403] · `Jobs404Error1` [404] · `Jobs500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobsResponse3` | `basiq/models/unions/jobs_response3.py` |
| `GetJobsErrorBody` | `basiq/errors/get_jobs_error.py` |
| `Jobs400Error1` | `basiq/models/jobs400_error1.py` |
| `Jobs401Error1` | `basiq/models/jobs401_error1.py` |
| `Jobs403Error1` | `basiq/models/jobs403_error1.py` |
| `Jobs404Error1` | `basiq/models/jobs404_error1.py` |
| `Jobs500Error1` | `basiq/models/jobs500_error1.py` |

### client.jobs.get_user_jobs

- **Route**: `GET /users/{userId}/jobs`
- **Auth**: `services_token`
- **Signature**: `def get_user_jobs(user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `filter_` — query `filter`
- **Returns (parsed)**: `UsersJobsResponse`
- **Returns (raw)**: `ApiResult[UsersJobsResponse, GetUserJobsErrorBody]`
- **Error**: `GetUserJobsErrorBody` — **Case A (typed)**
- **Error arms**: `UsersJobs400Error1` [400] · `UsersJobs401Error1` [401] · `UsersJobs403Error1` [403] · `UsersJobs404Error1` [404] · `UsersJobs500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersJobsResponse` | `basiq/models/users_jobs_response.py` |
| `GetUserJobsErrorBody` | `basiq/errors/get_user_jobs_error.py` |
| `UsersJobs400Error1` | `basiq/models/users_jobs400_error1.py` |
| `UsersJobs401Error1` | `basiq/models/users_jobs401_error1.py` |
| `UsersJobs403Error1` | `basiq/models/users_jobs403_error1.py` |
| `UsersJobs404Error1` | `basiq/models/users_jobs404_error1.py` |
| `UsersJobs500Error1` | `basiq/models/users_jobs500_error1.py` |

### client.jobs.post_job_mfa

- **Route**: `POST /jobs/{jobId}/mfa`
- **Auth**: `services_token`
- **Signature**: `def post_job_mfa(job_id: str, body: JobsMfaRequest | JobsMfaRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`, `body`
- **Params**: `job_id` — path `jobId` · `body` — JSON body
- **Returns (parsed)**: `ConnectionResponseResource`
- **Returns (raw)**: `ApiResult[ConnectionResponseResource, PostJobMfaErrorBody]`
- **Error**: `PostJobMfaErrorBody` — **Case A (typed)**
- **Error arms**: `JobsMfa400Error1` [400] · `JobsMfa401Error1` [401] · `JobsMfa403Error1` [403] · `JobsMfa404Error1` [404] · `JobsMfa500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobsMfaRequest` | `basiq/models/jobs_mfa_request.py` |
| `JobsMfaRequestDict` | `basiq/models/jobs_mfa_request.py` |
| `ConnectionResponseResource` | `basiq/models/connection_response_resource.py` |
| `PostJobMfaErrorBody` | `basiq/errors/post_job_mfa_error.py` |
| `JobsMfa400Error1` | `basiq/models/jobs_mfa400_error1.py` |
| `JobsMfa401Error1` | `basiq/models/jobs_mfa401_error1.py` |
| `JobsMfa403Error1` | `basiq/models/jobs_mfa403_error1.py` |
| `JobsMfa404Error1` | `basiq/models/jobs_mfa404_error1.py` |
| `JobsMfa500Error1` | `basiq/models/jobs_mfa500_error1.py` |

