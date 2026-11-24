<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rollouts — operations

Accessor: `client.rollouts` · Source: `hud/apis/rollouts.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.rollouts.cancel_job_v2_rollouts_cancel_job_post

- **Route**: `POST /v2/rollouts/cancel_job`
- **Signature**: `def cancel_job_v2_rollouts_cancel_job_post(body: CancelJobRequest | CancelJobRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CancelJobResponse`
- **Returns (raw)**: `ApiResult[CancelJobResponse, CancelJobV2RolloutsCancelJobPostErrorBody]`
- **Error**: `CancelJobV2RolloutsCancelJobPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelJobRequest` | `hud/models/cancel_job_request.py` |
| `CancelJobRequestDict` | `hud/models/cancel_job_request.py` |
| `CancelJobResponse` | `hud/models/cancel_job_response.py` |
| `CancelJobV2RolloutsCancelJobPostErrorBody` | `hud/errors/cancel_job_v2_rollouts_cancel_job_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.rollouts.cancel_user_jobs_v2_rollouts_cancel_user_jobs_post

- **Route**: `POST /v2/rollouts/cancel_user_jobs`
- **Signature**: `def cancel_user_jobs_v2_rollouts_cancel_user_jobs_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `CancelUserJobsResponse`
- **Returns (raw)**: `ApiResult[CancelUserJobsResponse, CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody]`
- **Error**: `CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelUserJobsResponse` | `hud/models/cancel_user_jobs_response.py` |
| `CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody` | `hud/errors/cancel_user_jobs_v2_rollouts_cancel_user_jobs_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

### client.rollouts.cancel_v2_rollouts_cancel_post

- **Route**: `POST /v2/rollouts/cancel`
- **Signature**: `def cancel_v2_rollouts_cancel_post(body: CancelRequest | CancelRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CancelResponse`
- **Returns (raw)**: `ApiResult[CancelResponse, CancelV2RolloutsCancelPostErrorBody]`
- **Error**: `CancelV2RolloutsCancelPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CancelRequest` | `hud/models/cancel_request.py` |
| `CancelRequestDict` | `hud/models/cancel_request.py` |
| `CancelResponse` | `hud/models/cancel_response.py` |
| `CancelV2RolloutsCancelPostErrorBody` | `hud/errors/cancel_v2_rollouts_cancel_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.rollouts.run_list_v2_rollouts_run_list_post

- **Route**: `POST /v2/rollouts/run_list`
- **Signature**: `def run_list_v2_rollouts_run_list_post(body: RolloutRunListRequest | RolloutRunListRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RolloutBatchResponse`
- **Returns (raw)**: `ApiResult[RolloutBatchResponse, RunListV2RolloutsRunListPostErrorBody]`
- **Error**: `RunListV2RolloutsRunListPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RolloutRunListRequest` | `hud/models/rollout_run_list_request.py` |
| `RolloutRunListRequestDict` | `hud/models/rollout_run_list_request.py` |
| `RolloutBatchResponse` | `hud/models/rollout_batch_response.py` |
| `RunListV2RolloutsRunListPostErrorBody` | `hud/errors/run_list_v2_rollouts_run_list_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.rollouts.run_v2_rollouts_run_post

- **Route**: `POST /v2/rollouts/run`
- **Signature**: `def run_v2_rollouts_run_post(body: RolloutRunRequest | RolloutRunRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RolloutResponse`
- **Returns (raw)**: `ApiResult[RolloutResponse, RunV2RolloutsRunPostErrorBody]`
- **Error**: `RunV2RolloutsRunPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RolloutRunRequest` | `hud/models/rollout_run_request.py` |
| `RolloutRunRequestDict` | `hud/models/rollout_run_request.py` |
| `RolloutResponse` | `hud/models/rollout_response.py` |
| `RunV2RolloutsRunPostErrorBody` | `hud/errors/run_v2_rollouts_run_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.rollouts.submit_v2_rollouts_submit_post

- **Route**: `POST /v2/rollouts/submit`
- **Signature**: `def submit_v2_rollouts_submit_post(body: RolloutSubmitRequest | RolloutSubmitRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `RolloutResponse`
- **Returns (raw)**: `ApiResult[RolloutResponse, SubmitV2RolloutsSubmitPostErrorBody]`
- **Error**: `SubmitV2RolloutsSubmitPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RolloutSubmitRequest` | `hud/models/rollout_submit_request.py` |
| `RolloutSubmitRequestDict` | `hud/models/rollout_submit_request.py` |
| `RolloutResponse` | `hud/models/rollout_response.py` |
| `SubmitV2RolloutsSubmitPostErrorBody` | `hud/errors/submit_v2_rollouts_submit_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

