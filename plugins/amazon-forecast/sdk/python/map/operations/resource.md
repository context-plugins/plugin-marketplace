<!-- Generated file — do not edit; regenerated with the SDK. -->

# Resource — operations

Accessor: `client.resource` · Source: `amazon_forecast/apis/resource.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.resource.stop_resource

- **Route**: `POST /#StopResource`
- **Auth**: `sigv4`
- **Signature**: `def stop_resource(x_amz_target: XAmzTargetAmazonForecastServiceResourceApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopResourceErrorBody]`
- **Error**: `StopResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceResourceApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_resource_api.py` |
| `StopResourceErrorBody` | `amazon_forecast/errors/stop_resource_error.py` |

### client.resource.tag_resource

- **Route**: `POST /#TagResource`
- **Auth**: `sigv4`
- **Signature**: `def tag_resource(x_amz_target: XAmzTarget1AmazonForecastServiceResourceApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, TagResourceErrorBody]`
- **Error**: `TagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceResourceApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_resource_api.py` |
| `TagResourceErrorBody` | `amazon_forecast/errors/tag_resource_error.py` |

### client.resource.untag_resource

- **Route**: `POST /#UntagResource`
- **Auth**: `sigv4`
- **Signature**: `def untag_resource(x_amz_target: XAmzTarget2AmazonForecastServiceResourceApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UntagResourceErrorBody]`
- **Error**: `UntagResourceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceResourceApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_resource_api.py` |
| `UntagResourceErrorBody` | `amazon_forecast/errors/untag_resource_error.py` |

