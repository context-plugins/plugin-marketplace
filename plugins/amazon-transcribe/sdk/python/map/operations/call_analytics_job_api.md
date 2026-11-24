<!-- Generated file — do not edit; regenerated with the SDK. -->

# CallAnalyticsJobApi — operations

Accessor: `client.call_analytics_job_api` · Source: `amazon_transcribe/apis/call_analytics_job_api.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.call_analytics_job_api.delete_call_analytics_job

- **Route**: `POST /#DeleteCallAnalyticsJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def delete_call_analytics_job(x_amz_target: XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteCallAnalyticsJobErrorBody]`
- **Error**: `DeleteCallAnalyticsJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target_amazon_transcribe_service_call_analytics_job_api.py` |
| `DeleteCallAnalyticsJobErrorBody` | `amazon_transcribe/errors/delete_call_analytics_job_error.py` |

### client.call_analytics_job_api.get_call_analytics_job

- **Route**: `POST /#GetCallAnalyticsJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def get_call_analytics_job(x_amz_target: XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetCallAnalyticsJobErrorBody]`
- **Error**: `GetCallAnalyticsJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target1_amazon_transcribe_service_call_analytics_job_api.py` |
| `GetCallAnalyticsJobErrorBody` | `amazon_transcribe/errors/get_call_analytics_job_error.py` |

### client.call_analytics_job_api.list_call_analytics_jobs

- **Route**: `POST /#ListCallAnalyticsJobs`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def list_call_analytics_jobs(x_amz_target: XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListCallAnalyticsJobsErrorBody]`
- **Error**: `ListCallAnalyticsJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target2_amazon_transcribe_service_call_analytics_job_api.py` |
| `ListCallAnalyticsJobsErrorBody` | `amazon_transcribe/errors/list_call_analytics_jobs_error.py` |

### client.call_analytics_job_api.start_call_analytics_job

- **Route**: `POST /#StartCallAnalyticsJob`
- **Auth**: `sigv4`
- **Server**: `default`
- **Signature**: `def start_call_analytics_job(x_amz_target: XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartCallAnalyticsJobErrorBody]`
- **Error**: `StartCallAnalyticsJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 409, 429, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr` | `amazon_transcribe/models/enums/x_amz_target3_amazon_transcribe_service_call_analytics_job_api.py` |
| `StartCallAnalyticsJobErrorBody` | `amazon_transcribe/errors/start_call_analytics_job_error.py` |

