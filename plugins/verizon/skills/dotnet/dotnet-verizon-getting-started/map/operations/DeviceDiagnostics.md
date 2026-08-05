# DeviceDiagnostics — operations

Accessor: `client.DeviceDiagnostics` · Source: `Api/DeviceDiagnostics.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeviceReachabilityStatusUsingPost
- **HTTP**: `POST /m2m/v1/diagnostics/basic/devicereachability/status` (HyperPreciseCredentials (thingspace))
- **Notes**: If the devices do not already exist in the account, this API resource adds them before activation.
- **Signature**: `DeviceReachabilityStatusUsingPost(NotificationReportStatusRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<DeviceReachabilityStatusUsingPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveActiveMonitorsUsingPost
- **HTTP**: `POST /m2m/v1/diagnostics/basic/devicereachability/monitors` (HyperPreciseCredentials (thingspace))
- **Notes**: Retrieve all the active monitors.
- **Signature**: `RetrieveActiveMonitorsUsingPost(RetrieveMonitorsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<RetrieveActiveMonitorsUsingPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
