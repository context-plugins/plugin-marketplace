<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExplainabilityExport — operations

Accessor: `client.explainability_export` · Source: `amazon_forecast/apis/explainability_export.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.explainability_export.create_explainability_export

- **Route**: `POST /#CreateExplainabilityExport`
- **Auth**: `sigv4`
- **Signature**: `def create_explainability_export(x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateExplainabilityExportErrorBody]`
- **Error**: `CreateExplainabilityExportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceExplainabilityExportApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_explainability_export_api.py` |
| `CreateExplainabilityExportErrorBody` | `amazon_forecast/errors/create_explainability_export_error.py` |

### client.explainability_export.delete_explainability_export

- **Route**: `POST /#DeleteExplainabilityExport`
- **Auth**: `sigv4`
- **Signature**: `def delete_explainability_export(x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteExplainabilityExportErrorBody]`
- **Error**: `DeleteExplainabilityExportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceExplainabilityExportApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_explainability_export_api.py` |
| `DeleteExplainabilityExportErrorBody` | `amazon_forecast/errors/delete_explainability_export_error.py` |

### client.explainability_export.describe_explainability_export

- **Route**: `POST /#DescribeExplainabilityExport`
- **Auth**: `sigv4`
- **Signature**: `def describe_explainability_export(x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeExplainabilityExportErrorBody]`
- **Error**: `DescribeExplainabilityExportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceExplainabilityExportApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_explainability_export_api.py` |
| `DescribeExplainabilityExportErrorBody` | `amazon_forecast/errors/describe_explainability_export_error.py` |

### client.explainability_export.list_explainability_exports

- **Route**: `POST /#ListExplainabilityExports`
- **Auth**: `sigv4`
- **Signature**: `def list_explainability_exports(x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListExplainabilityExportsErrorBody]`
- **Error**: `ListExplainabilityExportsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceExplainabilityExportApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_explainability_export_api.py` |
| `ListExplainabilityExportsErrorBody` | `amazon_forecast/errors/list_explainability_exports_error.py` |

