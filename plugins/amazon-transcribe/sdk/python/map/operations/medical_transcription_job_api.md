<!-- Generated file — do not edit; regenerated with the SDK. -->

# MedicalTranscriptionJobApi — operations

Accessor: `client.medical_transcription_job_api` · Source: `amazon_transcribe/apis/medical_transcription_job_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.medical_transcription_job_api.delete_medical_transcription_job

- **Route**: `POST /#DeleteMedicalTranscriptionJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_medical_transcription_job(x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMedicalTranscriptionJobErrorBody]`
- **Error**: `DeleteMedicalTranscriptionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonTranscribeServiceMedicalTranscriptionJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_medical_transcription_job_api.py` |
| `DeleteMedicalTranscriptionJobErrorBody` | `amazon_transcribe/errors/delete_medical_transcription_job_error.py` |

### client.medical_transcription_job_api.get_medical_transcription_job

- **Route**: `POST /#GetMedicalTranscriptionJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_medical_transcription_job(x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetMedicalTranscriptionJobErrorBody]`
- **Error**: `GetMedicalTranscriptionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_medical_transcription_job_api.py` |
| `GetMedicalTranscriptionJobErrorBody` | `amazon_transcribe/errors/get_medical_transcription_job_error.py` |

### client.medical_transcription_job_api.list_medical_transcription_jobs

- **Route**: `POST /#ListMedicalTranscriptionJobs`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def list_medical_transcription_jobs(x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListMedicalTranscriptionJobsErrorBody]`
- **Error**: `ListMedicalTranscriptionJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_medical_transcription_job_api.py` |
| `ListMedicalTranscriptionJobsErrorBody` | `amazon_transcribe/errors/list_medical_transcription_jobs_error.py` |

### client.medical_transcription_job_api.start_medical_transcription_job

- **Route**: `POST /#StartMedicalTranscriptionJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def start_medical_transcription_job(x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartMedicalTranscriptionJobErrorBody]`
- **Error**: `StartMedicalTranscriptionJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonTranscribeServiceMedicalTranscriptionJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_medical_transcription_job_api.py` |
| `StartMedicalTranscriptionJobErrorBody` | `amazon_transcribe/errors/start_medical_transcription_job_error.py` |

