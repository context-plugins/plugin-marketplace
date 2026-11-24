<!-- Generated file — do not edit; regenerated with the SDK. -->

# Operations — operations

Accessor: `client.operations` · Source: `amazon_forecast/apis/operations.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.operations.create_auto_predictor

- **Route**: `POST /#CreateAutoPredictor`
- **Auth**: `sigv4`
- **Signature**: `def create_auto_predictor(x_amz_target: XAmzTarget1AmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateAutoPredictorErrorBody]`
- **Error**: `CreateAutoPredictorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceOperationsApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_operations_api.py` |
| `CreateAutoPredictorErrorBody` | `amazon_forecast/errors/create_auto_predictor_error.py` |

### client.operations.delete_resource_tree

- **Route**: `POST /#DeleteResourceTree`
- **Auth**: `sigv4`
- **Signature**: `def delete_resource_tree(x_amz_target: XAmzTarget3AmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteResourceTreeErrorBody]`
- **Error**: `DeleteResourceTreeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceOperationsApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_operations_api.py` |
| `DeleteResourceTreeErrorBody` | `amazon_forecast/errors/delete_resource_tree_error.py` |

### client.operations.describe_auto_predictor

- **Route**: `POST /#DescribeAutoPredictor`
- **Auth**: `sigv4`
- **Signature**: `def describe_auto_predictor(x_amz_target: XAmzTarget2AmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeAutoPredictorErrorBody]`
- **Error**: `DescribeAutoPredictorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceOperationsApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_operations_api.py` |
| `DescribeAutoPredictorErrorBody` | `amazon_forecast/errors/describe_auto_predictor_error.py` |

### client.operations.get_accuracy_metrics

- **Route**: `POST /#GetAccuracyMetrics`
- **Auth**: `sigv4`
- **Signature**: `def get_accuracy_metrics(x_amz_target: XAmzTarget4AmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetAccuracyMetricsErrorBody]`
- **Error**: `GetAccuracyMetricsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AmazonForecastServiceOperationsApiOrStr` | `amazon_forecast/models/enums/x_amz_target4_amazon_forecast_service_operations_api.py` |
| `GetAccuracyMetricsErrorBody` | `amazon_forecast/errors/get_accuracy_metrics_error.py` |

### client.operations.list_monitor_evaluations

- **Route**: `POST /#ListMonitorEvaluations`
- **Auth**: `sigv4`
- **Signature**: `def list_monitor_evaluations(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListMonitorEvaluationsErrorBody]`
- **Error**: `ListMonitorEvaluationsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `amazon_forecast/models/enums/x_amz_target5.py` |
| `ListMonitorEvaluationsErrorBody` | `amazon_forecast/errors/list_monitor_evaluations_error.py` |

### client.operations.list_what_if_analyses

- **Route**: `POST /#ListWhatIfAnalyses`
- **Auth**: `sigv4`
- **Signature**: `def list_what_if_analyses(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListWhatIfAnalysesErrorBody]`
- **Error**: `ListWhatIfAnalysesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `amazon_forecast/models/enums/x_amz_target6.py` |
| `ListWhatIfAnalysesErrorBody` | `amazon_forecast/errors/list_what_if_analyses_error.py` |

### client.operations.resume_resource

- **Route**: `POST /#ResumeResource`
- **Auth**: `sigv4`
- **Signature**: `def resume_resource(x_amz_target: XAmzTargetAmazonForecastServiceOperationsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ResumeResourceErrorBody]`
- **Error**: `ResumeResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceOperationsApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_operations_api.py` |
| `ResumeResourceErrorBody` | `amazon_forecast/errors/resume_resource_error.py` |

