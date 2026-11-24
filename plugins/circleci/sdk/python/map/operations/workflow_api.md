<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkflowApi — operations

Accessor: `client.workflow_api` · Source: `circle_ci/apis/workflow_api.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.workflow_api.approve_workflow_job

- **Route**: `POST /workflow/{id}/approve/{approval_request_id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def approve_workflow_job(id_: UUID, approval_request_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `approval_request_id`
- **Params**: `id_` — path `id` · `approval_request_id` — path
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, ApproveWorkflowJobErrorBody]`
- **Error**: `ApproveWorkflowJobErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `ApproveWorkflowJobErrorBody` | `circle_ci/errors/approve_workflow_job_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.workflow_api.cancel_workflow

- **Route**: `POST /workflow/{id}/cancel`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def cancel_workflow(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, CancelWorkflowErrorBody]`
- **Error**: `CancelWorkflowErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `CancelWorkflowErrorBody` | `circle_ci/errors/cancel_workflow_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.workflow_api.get_workflow

- **Route**: `GET /workflow/{id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_workflow(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Workflow`
- **Returns (raw)**: `ApiResult[Workflow, GetWorkflowErrorBody]`
- **Error**: `GetWorkflowErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Workflow` | `circle_ci/models/workflow.py` |
| `GetWorkflowErrorBody` | `circle_ci/errors/get_workflow_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.workflow_api.list_workflow_jobs

- **Route**: `GET /workflow/{id}/job`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_workflow_jobs(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `WorkflowJobList`
- **Returns (raw)**: `ApiResult[WorkflowJobList, ListWorkflowJobsErrorBody]`
- **Error**: `ListWorkflowJobsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowJobList` | `circle_ci/models/workflow_job_list.py` |
| `ListWorkflowJobsErrorBody` | `circle_ci/errors/list_workflow_jobs_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.workflow_api.rerun_workflow

- **Route**: `POST /workflow/{id}/rerun`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def rerun_workflow(id_: UUID, *, body: WorkflowRerunRequest | WorkflowRerunRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `RerunWorkflowResponse`
- **Returns (raw)**: `ApiResult[RerunWorkflowResponse, RerunWorkflowErrorBody]`
- **Error**: `RerunWorkflowErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowRerunRequest` | `circle_ci/models/workflow_rerun_request.py` |
| `WorkflowRerunRequestDict` | `circle_ci/models/workflow_rerun_request.py` |
| `RerunWorkflowResponse` | `circle_ci/models/rerun_workflow_response.py` |
| `RerunWorkflowErrorBody` | `circle_ci/errors/rerun_workflow_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

