<!-- Generated file — do not edit; regenerated with the SDK. -->

# MediaAnalysisJob — operations

Accessor: `client.media_analysis_job` · Source: `amazon_rekognition/apis/media_analysis_job.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.media_analysis_job.get_media_analysis_job

- **Route**: `POST /#GetMediaAnalysisJob`
- **Auth**: `sigv4`
- **Signature**: `def get_media_analysis_job(x_amz_target: XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetMediaAnalysisJobErrorBody]`
- **Error**: `GetMediaAnalysisJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonRekognitionMediaAnalysisJobApiOrStr` | `amazon_rekognition/models/enums/x_amz_target_amazon_rekognition_media_analysis_job_api.py` |
| `GetMediaAnalysisJobErrorBody` | `amazon_rekognition/errors/get_media_analysis_job_error.py` |

### client.media_analysis_job.list_media_analysis_jobs

- **Route**: `POST /#ListMediaAnalysisJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_media_analysis_jobs(x_amz_target: XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListMediaAnalysisJobsErrorBody]`
- **Error**: `ListMediaAnalysisJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonRekognitionMediaAnalysisJobApiOrStr` | `amazon_rekognition/models/enums/x_amz_target1_amazon_rekognition_media_analysis_job_api.py` |
| `ListMediaAnalysisJobsErrorBody` | `amazon_rekognition/errors/list_media_analysis_jobs_error.py` |

### client.media_analysis_job.start_media_analysis_job

- **Route**: `POST /#StartMediaAnalysisJob`
- **Auth**: `sigv4`
- **Signature**: `def start_media_analysis_job(x_amz_target: XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartMediaAnalysisJobErrorBody]`
- **Error**: `StartMediaAnalysisJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonRekognitionMediaAnalysisJobApiOrStr` | `amazon_rekognition/models/enums/x_amz_target2_amazon_rekognition_media_analysis_job_api.py` |
| `StartMediaAnalysisJobErrorBody` | `amazon_rekognition/errors/start_media_analysis_job_error.py` |

