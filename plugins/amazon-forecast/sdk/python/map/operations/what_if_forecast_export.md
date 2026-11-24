<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatIfForecastExport — operations

Accessor: `client.what_if_forecast_export` · Source: `amazon_forecast/apis/what_if_forecast_export.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.what_if_forecast_export.create_what_if_forecast_export

- **Route**: `POST /#CreateWhatIfForecastExport`
- **Auth**: `sigv4`
- **Signature**: `def create_what_if_forecast_export(x_amz_target: XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateWhatIfForecastExportErrorBody]`
- **Error**: `CreateWhatIfForecastExportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_what_if_forecast_export_api.py` |
| `CreateWhatIfForecastExportErrorBody` | `amazon_forecast/errors/create_what_if_forecast_export_error.py` |

### client.what_if_forecast_export.delete_what_if_forecast_export

- **Route**: `POST /#DeleteWhatIfForecastExport`
- **Auth**: `sigv4`
- **Signature**: `def delete_what_if_forecast_export(x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWhatIfForecastExportErrorBody]`
- **Error**: `DeleteWhatIfForecastExportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_what_if_forecast_export_api.py` |
| `DeleteWhatIfForecastExportErrorBody` | `amazon_forecast/errors/delete_what_if_forecast_export_error.py` |

### client.what_if_forecast_export.describe_what_if_forecast_export

- **Route**: `POST /#DescribeWhatIfForecastExport`
- **Auth**: `sigv4`
- **Signature**: `def describe_what_if_forecast_export(x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeWhatIfForecastExportErrorBody]`
- **Error**: `DescribeWhatIfForecastExportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_what_if_forecast_export_api.py` |
| `DescribeWhatIfForecastExportErrorBody` | `amazon_forecast/errors/describe_what_if_forecast_export_error.py` |

### client.what_if_forecast_export.list_what_if_forecast_exports

- **Route**: `POST /#ListWhatIfForecastExports`
- **Auth**: `sigv4`
- **Signature**: `def list_what_if_forecast_exports(x_amz_target: XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListWhatIfForecastExportsErrorBody]`
- **Error**: `ListWhatIfForecastExportsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_what_if_forecast_export_api.py` |
| `ListWhatIfForecastExportsErrorBody` | `amazon_forecast/errors/list_what_if_forecast_exports_error.py` |

