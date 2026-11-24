<!-- Generated file — do not edit; regenerated with the SDK. -->

# PredictorBacktestExportJob — operations

Accessor: `client.predictor_backtest_export_job` · Source: `amazon_forecast/apis/predictor_backtest_export_job.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.predictor_backtest_export_job.create_predictor_backtest_export_job

- **Route**: `POST /#CreatePredictorBacktestExportJob`
- **Auth**: `sigv4`
- **Signature**: `def create_predictor_backtest_export_job(x_amz_target: XAmzTargetAmazonForecastServicePredictorBacktestExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreatePredictorBacktestExportJobErrorBody]`
- **Error**: `CreatePredictorBacktestExportJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServicePredictorBacktestExportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_predictor_backtest_export_job_api.py` |
| `CreatePredictorBacktestExportJobErrorBody` | `amazon_forecast/errors/create_predictor_backtest_export_job_error.py` |

### client.predictor_backtest_export_job.delete_predictor_backtest_export_job

- **Route**: `POST /#DeletePredictorBacktestExportJob`
- **Auth**: `sigv4`
- **Signature**: `def delete_predictor_backtest_export_job(x_amz_target: XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeletePredictorBacktestExportJobErrorBody]`
- **Error**: `DeletePredictorBacktestExportJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_predictor_backtest_export_job_api.py` |
| `DeletePredictorBacktestExportJobErrorBody` | `amazon_forecast/errors/delete_predictor_backtest_export_job_error.py` |

### client.predictor_backtest_export_job.describe_predictor_backtest_export_job

- **Route**: `POST /#DescribePredictorBacktestExportJob`
- **Auth**: `sigv4`
- **Signature**: `def describe_predictor_backtest_export_job(x_amz_target: XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribePredictorBacktestExportJobErrorBody]`
- **Error**: `DescribePredictorBacktestExportJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_predictor_backtest_export_job_api.py` |
| `DescribePredictorBacktestExportJobErrorBody` | `amazon_forecast/errors/describe_predictor_backtest_export_job_error.py` |

### client.predictor_backtest_export_job.list_predictor_backtest_export_jobs

- **Route**: `POST /#ListPredictorBacktestExportJobs`
- **Auth**: `sigv4`
- **Signature**: `def list_predictor_backtest_export_jobs(x_amz_target: XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListPredictorBacktestExportJobsErrorBody]`
- **Error**: `ListPredictorBacktestExportJobsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_predictor_backtest_export_job_api.py` |
| `ListPredictorBacktestExportJobsErrorBody` | `amazon_forecast/errors/list_predictor_backtest_export_jobs_error.py` |

