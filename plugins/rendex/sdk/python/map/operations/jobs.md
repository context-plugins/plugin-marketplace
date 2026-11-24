<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `rendex/apis/jobs.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jobs.get_batch_status

- **Route**: `GET /v1/batches/{batchId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_batch_status(batch_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `batch_id`
- **Params**: `batch_id` — path `batchId`
- **Returns (parsed)**: `BatchStatusResponse`
- **Returns (raw)**: `ApiResult[BatchStatusResponse, GetBatchStatusErrorBody]`
- **Error**: `GetBatchStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchStatusResponse` | `rendex/models/batch_status_response.py` |
| `GetBatchStatusErrorBody` | `rendex/errors/get_batch_status_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

### client.jobs.get_job_status

- **Route**: `GET /v1/jobs/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_job_status(job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `JobStatusResponse`
- **Returns (raw)**: `ApiResult[JobStatusResponse, GetJobStatusErrorBody]`
- **Error**: `GetJobStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobStatusResponse` | `rendex/models/job_status_response.py` |
| `GetJobStatusErrorBody` | `rendex/errors/get_job_status_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

