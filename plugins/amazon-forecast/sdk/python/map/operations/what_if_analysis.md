<!-- Generated file — do not edit; regenerated with the SDK. -->

# WhatIfAnalysis — operations

Accessor: `client.what_if_analysis` · Source: `amazon_forecast/apis/what_if_analysis.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.what_if_analysis.create_what_if_analysis

- **Route**: `POST /#CreateWhatIfAnalysis`
- **Auth**: `sigv4`
- **Signature**: `def create_what_if_analysis(x_amz_target: XAmzTargetAmazonForecastServiceWhatIfAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateWhatIfAnalysisErrorBody]`
- **Error**: `CreateWhatIfAnalysisErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceWhatIfAnalysisApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_what_if_analysis_api.py` |
| `CreateWhatIfAnalysisErrorBody` | `amazon_forecast/errors/create_what_if_analysis_error.py` |

### client.what_if_analysis.delete_what_if_analysis

- **Route**: `POST /#DeleteWhatIfAnalysis`
- **Auth**: `sigv4`
- **Signature**: `def delete_what_if_analysis(x_amz_target: XAmzTarget1AmazonForecastServiceWhatIfAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWhatIfAnalysisErrorBody]`
- **Error**: `DeleteWhatIfAnalysisErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceWhatIfAnalysisApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_what_if_analysis_api.py` |
| `DeleteWhatIfAnalysisErrorBody` | `amazon_forecast/errors/delete_what_if_analysis_error.py` |

### client.what_if_analysis.describe_what_if_analysis

- **Route**: `POST /#DescribeWhatIfAnalysis`
- **Auth**: `sigv4`
- **Signature**: `def describe_what_if_analysis(x_amz_target: XAmzTarget2AmazonForecastServiceWhatIfAnalysisApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeWhatIfAnalysisErrorBody]`
- **Error**: `DescribeWhatIfAnalysisErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceWhatIfAnalysisApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_what_if_analysis_api.py` |
| `DescribeWhatIfAnalysisErrorBody` | `amazon_forecast/errors/describe_what_if_analysis_error.py` |

