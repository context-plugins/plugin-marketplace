# DeviceMonitoring — operations

Accessor: `client.DeviceMonitoring` · Source: `Api/DeviceMonitoring.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeviceReachability
- **HTTP**: `POST /m2m/v1/diagnostics/basic/devicereachability` (HyperPreciseCredentials (thingspace))
- **Signature**: `DeviceReachability(NotificationReportRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestResponse`
- **Error**: `SdkException<DeviceReachabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StopDeviceReachability
- **HTTP**: `DELETE /m2m/v1/diagnostics/basic/devicereachability` (HyperPreciseCredentials (thingspace))
- **Signature**: `StopDeviceReachability(StopMonitorRequest stopreachabilitypayload, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `stopreachabilitypayload` ← `stopreachabilitypayload`
- **Returns**: `RequestResponse`
- **Error**: `SdkException<StopDeviceReachabilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
