<!-- Generated file — do not edit; regenerated with the SDK. -->

# JobApi — operations

Accessor: `client.job_api` · Source: `circle_ci/apis/job_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.job_api.cancel_job

- **Route**: `POST /project/{project-slug}/job/{job-number}/cancel`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def cancel_job(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `job_number`
- **Params**: `project_slug` — path `project-slug` · `job_number` — path `job-number`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, CancelJobErrorBody]`
- **Error**: `CancelJobErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `CancelJobErrorBody` | `circle_ci/errors/cancel_job_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.job_api.get_job

- **Route**: `GET /project/{project-slug}/job/{job-number}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_job(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `job_number`
- **Params**: `project_slug` — path `project-slug` · `job_number` — path `job-number`
- **Returns (parsed)**: `Job`
- **Returns (raw)**: `ApiResult[Job, GetJobErrorBody]`
- **Error**: `GetJobErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Job` | `circle_ci/models/job.py` |
| `GetJobErrorBody` | `circle_ci/errors/get_job_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.job_api.list_job_artifacts

- **Route**: `GET /project/{project-slug}/{job-number}/artifacts`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_job_artifacts(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `job_number`
- **Params**: `project_slug` — path `project-slug` · `job_number` — path `job-number`
- **Returns (parsed)**: `ArtifactList`
- **Returns (raw)**: `ApiResult[ArtifactList, ListJobArtifactsErrorBody]`
- **Error**: `ListJobArtifactsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ArtifactList` | `circle_ci/models/artifact_list.py` |
| `ListJobArtifactsErrorBody` | `circle_ci/errors/list_job_artifacts_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.job_api.list_job_tests

- **Route**: `GET /project/{project-slug}/{job-number}/tests`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_job_tests(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `job_number`
- **Params**: `project_slug` — path `project-slug` · `job_number` — path `job-number`
- **Returns (parsed)**: `TestList`
- **Returns (raw)**: `ApiResult[TestList, ListJobTestsErrorBody]`
- **Error**: `ListJobTestsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestList` | `circle_ci/models/test_list.py` |
| `ListJobTestsErrorBody` | `circle_ci/errors/list_job_tests_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

