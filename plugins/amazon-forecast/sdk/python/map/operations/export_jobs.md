<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExportJobs — operations

Accessor: `client.export_jobs` · Source: `amazon_forecast/apis/export_jobs.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.export_jobs.create_forecast_export_job

- **Route**: `POST /#CreateForecastExportJob`
- **Auth**: `sigv4`
- **Signature**: `def create_forecast_export_job(x_amz_target: XAmzTargetAmazonForecastServiceExportJobsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateForecastExportJobErrorBody]`
- **Error**: `CreateForecastExportJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceExportJobsApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_export_jobs_api.py` |
| `CreateForecastExportJobErrorBody` | `amazon_forecast/errors/create_forecast_export_job_error.py` |

