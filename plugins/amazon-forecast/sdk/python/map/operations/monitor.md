<!-- Generated file — do not edit; regenerated with the SDK. -->

# Monitor — operations

Accessor: `client.monitor` · Source: `amazon_forecast/apis/monitor.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.monitor.create_monitor

- **Route**: `POST /#CreateMonitor`
- **Auth**: `sigv4`
- **Signature**: `def create_monitor(x_amz_target: XAmzTargetAmazonForecastServiceMonitorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateMonitorErrorBody]`
- **Error**: `CreateMonitorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 403, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAmazonForecastServiceMonitorApiOrStr` | `amazon_forecast/models/enums/x_amz_target_amazon_forecast_service_monitor_api.py` |
| `CreateMonitorErrorBody` | `amazon_forecast/errors/create_monitor_error.py` |

### client.monitor.delete_monitor

- **Route**: `POST /#DeleteMonitor`
- **Auth**: `sigv4`
- **Signature**: `def delete_monitor(x_amz_target: XAmzTarget1AmazonForecastServiceMonitorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteMonitorErrorBody]`
- **Error**: `DeleteMonitorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AmazonForecastServiceMonitorApiOrStr` | `amazon_forecast/models/enums/x_amz_target1_amazon_forecast_service_monitor_api.py` |
| `DeleteMonitorErrorBody` | `amazon_forecast/errors/delete_monitor_error.py` |

### client.monitor.describe_monitor

- **Route**: `POST /#DescribeMonitor`
- **Auth**: `sigv4`
- **Signature**: `def describe_monitor(x_amz_target: XAmzTarget2AmazonForecastServiceMonitorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeMonitorErrorBody]`
- **Error**: `DescribeMonitorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AmazonForecastServiceMonitorApiOrStr` | `amazon_forecast/models/enums/x_amz_target2_amazon_forecast_service_monitor_api.py` |
| `DescribeMonitorErrorBody` | `amazon_forecast/errors/describe_monitor_error.py` |

### client.monitor.list_monitors

- **Route**: `POST /#ListMonitors`
- **Auth**: `sigv4`
- **Signature**: `def list_monitors(x_amz_target: XAmzTarget3AmazonForecastServiceMonitorApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListMonitorsErrorBody]`
- **Error**: `ListMonitorsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AmazonForecastServiceMonitorApiOrStr` | `amazon_forecast/models/enums/x_amz_target3_amazon_forecast_service_monitor_api.py` |
| `ListMonitorsErrorBody` | `amazon_forecast/errors/list_monitors_error.py` |

