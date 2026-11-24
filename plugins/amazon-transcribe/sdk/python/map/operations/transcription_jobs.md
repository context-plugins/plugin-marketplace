<!-- Generated file — do not edit; regenerated with the SDK. -->

# TranscriptionJobs — operations

Accessor: `client.transcription_jobs` · Source: `amazon_transcribe/apis/transcription_jobs.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transcription_jobs.delete_transcription_job

- **Route**: `POST /#DeleteTranscriptionJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_transcription_job(x_amz_target: XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteTranscriptionJobErrorBody]`
- **Error**: `DeleteTranscriptionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonTranscribeServiceTranscriptionJobsApiOrStr` | `amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_transcription_jobs_api.py` |
| `DeleteTranscriptionJobErrorBody` | `amazon_transcribe/errors/delete_transcription_job_error.py` |

### client.transcription_jobs.get_transcription_job

- **Route**: `POST /#GetTranscriptionJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_transcription_job(x_amz_target: XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetTranscriptionJobErrorBody]`
- **Error**: `GetTranscriptionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonTranscribeServiceTranscriptionJobsApiOrStr` | `amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_transcription_jobs_api.py` |
| `GetTranscriptionJobErrorBody` | `amazon_transcribe/errors/get_transcription_job_error.py` |

### client.transcription_jobs.list_transcription_jobs

- **Route**: `POST /#ListTranscriptionJobs`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def list_transcription_jobs(x_amz_target: XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListTranscriptionJobsErrorBody]`
- **Error**: `ListTranscriptionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonTranscribeServiceTranscriptionJobsApiOrStr` | `amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_transcription_jobs_api.py` |
| `ListTranscriptionJobsErrorBody` | `amazon_transcribe/errors/list_transcription_jobs_error.py` |

### client.transcription_jobs.start_transcription_job

- **Route**: `POST /#StartTranscriptionJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def start_transcription_job(x_amz_target: XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartTranscriptionJobErrorBody]`
- **Error**: `StartTranscriptionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonTranscribeServiceTranscriptionJobsApiOrStr` | `amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_transcription_jobs_api.py` |
| `StartTranscriptionJobErrorBody` | `amazon_transcribe/errors/start_transcription_job_error.py` |

