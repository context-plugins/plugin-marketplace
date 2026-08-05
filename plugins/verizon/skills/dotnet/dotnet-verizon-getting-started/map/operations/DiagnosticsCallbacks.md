# DiagnosticsCallbacks — operations

Accessor: `client.DiagnosticsCallbacks` · Source: `Api/DiagnosticsCallbacks.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDiagnosticsSubscriptionCallbackInfo
- **HTTP**: `GET /callbacks` (DeviceDiagnostics (thingspace))
- **Notes**: This endpoint allows user to get the registered callback information of an existing diagnostics subscription.
- **Signature**: `GetDiagnosticsSubscriptionCallbackInfo(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountName` ← `accountName`
- **Returns**: `IReadOnlyList<DeviceDiagnosticsCallback>`
- **Error**: `SdkException<GetDiagnosticsSubscriptionCallbackInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceDiagnosticsResult(out DeviceDiagnosticsResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RegisterDiagnosticsCallbackUrl
- **HTTP**: `POST /callbacks` (DeviceDiagnostics (thingspace))
- **Notes**: This endpoint allows user update the callback HTTPS address of an existing diagnostics subscription.
- **Signature**: `RegisterDiagnosticsCallbackUrl(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceDiagnosticsCallback`
- **Error**: `SdkException<RegisterDiagnosticsCallbackUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceDiagnosticsResult(out DeviceDiagnosticsResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnregisterDiagnosticsCallback
- **HTTP**: `DELETE /callbacks` (DeviceDiagnostics (thingspace))
- **Notes**: This endpoint allows user to delete a registered callback URL and credential.
- **Signature**: `UnregisterDiagnosticsCallback(string accountName, string serviceName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountName` ← `accountName`, `serviceName` ← `serviceName`
- **Returns**: `DeviceDiagnosticsCallback`
- **Error**: `SdkException<UnregisterDiagnosticsCallbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeviceDiagnosticsResult(out DeviceDiagnosticsResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
