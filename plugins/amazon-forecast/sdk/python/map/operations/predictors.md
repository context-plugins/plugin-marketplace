<!-- Generated file — do not edit; regenerated with the SDK. -->

# Predictors — operations

Accessor: `client.predictors` · Source: `amazon_forecast/apis/predictors.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.predictors.create_predictor

- **Route**: `POST /#CreatePredictor`
- **Auth**: `sigv4`
- **Signature**: `def create_predictor(x_amz_target: XAmzTargetAmazonForecastServicePredictorsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreatePredictorErrorBody]`
- **Error**: `CreatePredictorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServicePredictorsApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_predictors_api.py` |
| `CreatePredictorErrorBody` | `amazon_forecast/errors/create_predictor_error.py` |

### client.predictors.delete_predictor

- **Route**: `POST /#DeletePredictor`
- **Auth**: `sigv4`
- **Signature**: `def delete_predictor(x_amz_target: XAmzTarget1AmazonForecastServicePredictorsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeletePredictorErrorBody]`
- **Error**: `DeletePredictorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServicePredictorsApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_predictors_api.py` |
| `DeletePredictorErrorBody` | `amazon_forecast/errors/delete_predictor_error.py` |

### client.predictors.describe_predictor

- **Route**: `POST /#DescribePredictor`
- **Auth**: `sigv4`
- **Signature**: `def describe_predictor(x_amz_target: XAmzTarget2AmazonForecastServicePredictorsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribePredictorErrorBody]`
- **Error**: `DescribePredictorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServicePredictorsApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_predictors_api.py` |
| `DescribePredictorErrorBody` | `amazon_forecast/errors/describe_predictor_error.py` |

### client.predictors.list_predictors

- **Route**: `POST /#ListPredictors`
- **Auth**: `sigv4`
- **Signature**: `def list_predictors(x_amz_target: XAmzTarget3AmazonForecastServicePredictorsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListPredictorsErrorBody]`
- **Error**: `ListPredictorsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServicePredictorsApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_predictors_api.py` |
| `ListPredictorsErrorBody` | `amazon_forecast/errors/list_predictors_error.py` |

