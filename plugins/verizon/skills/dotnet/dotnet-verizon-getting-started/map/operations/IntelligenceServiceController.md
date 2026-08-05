# IntelligenceServiceController — operations

Accessor: `client.IntelligenceServiceController` · Source: `Api/IntelligenceServiceController.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SetConnectionPlanner
- **HTTP**: `POST /v1/intelligence/device/connection-planner` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieves available device windows for Connection Planner.
- **Signature**: `SetConnectionPlanner(GetDevicesWindowsRequestforplanner? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AsynchronousRequestResultforplanner`
- **Error**: `SdkException<SetConnectionPlannerError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponseforplanner(out RestErrorResponseforplanner)` [400, 403, 404, 406, 429] · `TryGetAuthRestErrorResponseforplanner(out AuthRestErrorResponseforplanner)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StatusConnectionPlanner
- **HTTP**: `POST /v1/intelligence/device/connection-planner/status` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieves the device status for the Connection Planner service.
- **Signature**: `StatusConnectionPlanner(GetDeviceStatusesRequestforplanner? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GetDeviceStatusesResponseforplanner`
- **Error**: `SdkException<StatusConnectionPlannerError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponseforplanner(out RestErrorResponseforplanner)` [400, 403, 404, 406, 429] · `TryGetAuthRestErrorResponseforplanner(out AuthRestErrorResponseforplanner)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
