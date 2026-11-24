<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `staying_api/apis/jobs.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.jobs.poll_job

- **Route**: `GET /jobs/{jobId}`
- **Auth**: `bearer_auth`
- **Signature**: `def poll_job(job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `JobResponse`
- **Returns (raw)**: `ApiResult[JobResponse, PollJobErrorBody]`
- **Error**: `PollJobErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorEnvelope` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `JobResponse` | `staying_api/models/unions/job_response.py` |
| `PollJobErrorBody` | `staying_api/errors/poll_job_error.py` |
| `ErrorEnvelope` | `staying_api/models/error_envelope.py` |

