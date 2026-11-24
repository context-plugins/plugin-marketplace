<!-- Generated file — do not edit; regenerated with the SDK. -->

# MedicalScribeJobApi — operations

Accessor: `client.medical_scribe_job_api` · Source: `amazon_transcribe/apis/medical_scribe_job_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.medical_scribe_job_api.delete_medical_scribe_job

- **Route**: `POST /#DeleteMedicalScribeJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_medical_scribe_job(x_amz_target: XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMedicalScribeJobErrorBody]`
- **Error**: `DeleteMedicalScribeJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonTranscribeServiceMedicalScribeJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_medical_scribe_job_api.py` |
| `DeleteMedicalScribeJobErrorBody` | `amazon_transcribe/errors/delete_medical_scribe_job_error.py` |

### client.medical_scribe_job_api.get_medical_scribe_job

- **Route**: `POST /#GetMedicalScribeJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_medical_scribe_job(x_amz_target: XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetMedicalScribeJobErrorBody]`
- **Error**: `GetMedicalScribeJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonTranscribeServiceMedicalScribeJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_medical_scribe_job_api.py` |
| `GetMedicalScribeJobErrorBody` | `amazon_transcribe/errors/get_medical_scribe_job_error.py` |

### client.medical_scribe_job_api.list_medical_scribe_jobs

- **Route**: `POST /#ListMedicalScribeJobs`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def list_medical_scribe_jobs(x_amz_target: XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListMedicalScribeJobsErrorBody]`
- **Error**: `ListMedicalScribeJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonTranscribeServiceMedicalScribeJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_medical_scribe_job_api.py` |
| `ListMedicalScribeJobsErrorBody` | `amazon_transcribe/errors/list_medical_scribe_jobs_error.py` |

### client.medical_scribe_job_api.start_medical_scribe_job

- **Route**: `POST /#StartMedicalScribeJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def start_medical_scribe_job(x_amz_target: XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartMedicalScribeJobErrorBody]`
- **Error**: `StartMedicalScribeJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonTranscribeServiceMedicalScribeJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_medical_scribe_job_api.py` |
| `StartMedicalScribeJobErrorBody` | `amazon_transcribe/errors/start_medical_scribe_job_error.py` |

