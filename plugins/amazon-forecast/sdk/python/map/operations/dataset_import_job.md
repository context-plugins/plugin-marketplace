<!-- Generated file — do not edit; regenerated with the SDK. -->

# DatasetImportJob — operations

Accessor: `client.dataset_import_job` · Source: `amazon_forecast/apis/dataset_import_job.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.dataset_import_job.create_dataset_import_job

- **Route**: `POST /#CreateDatasetImportJob`
- **Auth**: `sigv4`
- **Signature**: `def create_dataset_import_job(x_amz_target: XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateDatasetImportJobErrorBody]`
- **Error**: `CreateDatasetImportJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_dataset_import_job_api.py` |
| `CreateDatasetImportJobErrorBody` | `amazon_forecast/errors/create_dataset_import_job_error.py` |

### client.dataset_import_job.delete_dataset_import_job

- **Route**: `POST /#DeleteDatasetImportJob`
- **Auth**: `sigv4`
- **Signature**: `def delete_dataset_import_job(x_amz_target: XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDatasetImportJobErrorBody]`
- **Error**: `DeleteDatasetImportJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_dataset_import_job_api.py` |
| `DeleteDatasetImportJobErrorBody` | `amazon_forecast/errors/delete_dataset_import_job_error.py` |

### client.dataset_import_job.describe_dataset_import_job

- **Route**: `POST /#DescribeDatasetImportJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_dataset_import_job(x_amz_target: XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeDatasetImportJobErrorBody]`
- **Error**: `DescribeDatasetImportJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_dataset_import_job_api.py` |
| `DescribeDatasetImportJobErrorBody` | `amazon_forecast/errors/describe_dataset_import_job_error.py` |

### client.dataset_import_job.list_dataset_import_jobs

- **Route**: `POST /#ListDatasetImportJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_dataset_import_jobs(x_amz_target: XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListDatasetImportJobsErrorBody]`
- **Error**: `ListDatasetImportJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_dataset_import_job_api.py` |
| `ListDatasetImportJobsErrorBody` | `amazon_forecast/errors/list_dataset_import_jobs_error.py` |

