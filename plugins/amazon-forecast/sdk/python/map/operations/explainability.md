<!-- Generated file — do not edit; regenerated with the SDK. -->

# Explainability — operations

Accessor: `client.explainability` · Source: `amazon_forecast/apis/explainability.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.explainability.create_explainability

- **Route**: `POST /#CreateExplainability`
- **Auth**: `sigv4`
- **Signature**: `def create_explainability(x_amz_target: XAmzTargetAmazonForecastServiceExplainabilityApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateExplainabilityErrorBody]`
- **Error**: `CreateExplainabilityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceExplainabilityApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_explainability_api.py` |
| `CreateExplainabilityErrorBody` | `amazon_forecast/errors/create_explainability_error.py` |

### client.explainability.delete_explainability

- **Route**: `POST /#DeleteExplainability`
- **Auth**: `sigv4`
- **Signature**: `def delete_explainability(x_amz_target: XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteExplainabilityErrorBody]`
- **Error**: `DeleteExplainabilityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_explainability_api.py` |
| `DeleteExplainabilityErrorBody` | `amazon_forecast/errors/delete_explainability_error.py` |

### client.explainability.describe_explainability

- **Route**: `POST /#DescribeExplainability`
- **Auth**: `sigv4`
- **Signature**: `def describe_explainability(x_amz_target: XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeExplainabilityErrorBody]`
- **Error**: `DescribeExplainabilityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_explainability_api.py` |
| `DescribeExplainabilityErrorBody` | `amazon_forecast/errors/describe_explainability_error.py` |

### client.explainability.list_explainabilities

- **Route**: `POST /#ListExplainabilities`
- **Auth**: `sigv4`
- **Signature**: `def list_explainabilities(x_amz_target: XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListExplainabilitiesErrorBody]`
- **Error**: `ListExplainabilitiesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_explainability_api.py` |
| `ListExplainabilitiesErrorBody` | `amazon_forecast/errors/list_explainabilities_error.py` |

