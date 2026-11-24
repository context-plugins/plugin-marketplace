<!-- Generated file — do not edit; regenerated with the SDK. -->

# Forecasts — operations

Accessor: `client.forecasts` · Source: `amazon_forecast/apis/forecasts.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.forecasts.create_forecast

- **Route**: `POST /#CreateForecast`
- **Auth**: `sigv4`
- **Signature**: `def create_forecast(x_amz_target: XAmzTargetAmazonForecastServiceForecastsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateForecastErrorBody]`
- **Error**: `CreateForecastErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceForecastsApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_forecasts_api.py` |
| `CreateForecastErrorBody` | `amazon_forecast/errors/create_forecast_error.py` |

### client.forecasts.delete_forecast

- **Route**: `POST /#DeleteForecast`
- **Auth**: `sigv4`
- **Signature**: `def delete_forecast(x_amz_target: XAmzTarget1AmazonForecastServiceForecastsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteForecastErrorBody]`
- **Error**: `DeleteForecastErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceForecastsApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_forecasts_api.py` |
| `DeleteForecastErrorBody` | `amazon_forecast/errors/delete_forecast_error.py` |

### client.forecasts.describe_forecast

- **Route**: `POST /#DescribeForecast`
- **Auth**: `sigv4`
- **Signature**: `def describe_forecast(x_amz_target: XAmzTarget2AmazonForecastServiceForecastsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeForecastErrorBody]`
- **Error**: `DescribeForecastErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceForecastsApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_forecasts_api.py` |
| `DescribeForecastErrorBody` | `amazon_forecast/errors/describe_forecast_error.py` |

### client.forecasts.list_forecasts

- **Route**: `POST /#ListForecasts`
- **Auth**: `sigv4`
- **Signature**: `def list_forecasts(x_amz_target: XAmzTarget3AmazonForecastServiceForecastsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListForecastsErrorBody]`
- **Error**: `ListForecastsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceForecastsApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_forecasts_api.py` |
| `ListForecastsErrorBody` | `amazon_forecast/errors/list_forecasts_error.py` |

