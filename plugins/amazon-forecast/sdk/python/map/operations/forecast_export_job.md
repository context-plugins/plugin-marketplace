<!-- Generated file — do not edit; regenerated with the SDK. -->

# ForecastExportJob — operations

Accessor: `client.forecast_export_job` · Source: `amazon_forecast/apis/forecast_export_job.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.forecast_export_job.create_forecast_export_job2

- **Route**: `POST /#CreateForecastExportJob`
- **Auth**: `sigv4`
- **Signature**: `def create_forecast_export_job2(x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateForecastExportJob2ErrorBody]`
- **Error**: `CreateForecastExportJob2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceExportJobsApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_export_jobs_api.py` |
| `CreateForecastExportJob2ErrorBody` | `amazon_forecast/errors/create_forecast_export_job2_error.py` |

### client.forecast_export_job.delete_forecast_export_job

- **Route**: `POST /#DeleteForecastExportJob`
- **Auth**: `sigv4`
- **Signature**: `def delete_forecast_export_job(x_amz_target: XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteForecastExportJobErrorBody]`
- **Error**: `DeleteForecastExportJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_forecast_export_job_api.py` |
| `DeleteForecastExportJobErrorBody` | `amazon_forecast/errors/delete_forecast_export_job_error.py` |

### client.forecast_export_job.describe_forecast_export_job

- **Route**: `POST /#DescribeForecastExportJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_forecast_export_job(x_amz_target: XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeForecastExportJobErrorBody]`
- **Error**: `DescribeForecastExportJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_forecast_export_job_api.py` |
| `DescribeForecastExportJobErrorBody` | `amazon_forecast/errors/describe_forecast_export_job_error.py` |

### client.forecast_export_job.list_forecast_export_jobs

- **Route**: `POST /#ListForecastExportJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_forecast_export_jobs(x_amz_target: XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListForecastExportJobsErrorBody]`
- **Error**: `ListForecastExportJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_forecast_export_job_api.py` |
| `ListForecastExportJobsErrorBody` | `amazon_forecast/errors/list_forecast_export_jobs_error.py` |

