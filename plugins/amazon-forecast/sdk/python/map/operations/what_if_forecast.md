<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatIfForecast — operations

Accessor: `client.what_if_forecast` · Source: `amazon_forecast/apis/what_if_forecast.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.what_if_forecast.create_what_if_forecast

- **Route**: `POST /#CreateWhatIfForecast`
- **Auth**: `sigv4`
- **Signature**: `def create_what_if_forecast(x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateWhatIfForecastErrorBody]`
- **Error**: `CreateWhatIfForecastErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_what_if_forecast_api.py` |
| `CreateWhatIfForecastErrorBody` | `amazon_forecast/errors/create_what_if_forecast_error.py` |

### client.what_if_forecast.delete_what_if_forecast

- **Route**: `POST /#DeleteWhatIfForecast`
- **Auth**: `sigv4`
- **Signature**: `def delete_what_if_forecast(x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWhatIfForecastErrorBody]`
- **Error**: `DeleteWhatIfForecastErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_what_if_forecast_api.py` |
| `DeleteWhatIfForecastErrorBody` | `amazon_forecast/errors/delete_what_if_forecast_error.py` |

### client.what_if_forecast.describe_what_if_forecast

- **Route**: `POST /#DescribeWhatIfForecast`
- **Auth**: `sigv4`
- **Signature**: `def describe_what_if_forecast(x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeWhatIfForecastErrorBody]`
- **Error**: `DescribeWhatIfForecastErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_what_if_forecast_api.py` |
| `DescribeWhatIfForecastErrorBody` | `amazon_forecast/errors/describe_what_if_forecast_error.py` |

### client.what_if_forecast.list_what_if_forecasts

- **Route**: `POST /#ListWhatIfForecasts`
- **Auth**: `sigv4`
- **Signature**: `def list_what_if_forecasts(x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListWhatIfForecastsErrorBody]`
- **Error**: `ListWhatIfForecastsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_what_if_forecast_api.py` |
| `ListWhatIfForecastsErrorBody` | `amazon_forecast/errors/list_what_if_forecasts_error.py` |

