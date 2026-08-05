# DiagnosticsObservations — operations

Accessor: `client.DiagnosticsObservations` · Source: `Api/DiagnosticsObservations.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### StartDiagnosticsObservation
- **HTTP**: `POST /devices/attributes/actions/observe` (DeviceDiagnostics (thingspace))
- **Notes**: This endpoint allows the user to start or change observe diagnostics.
- **Signature**: `StartDiagnosticsObservation(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DiagnosticsObservationResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StopDiagnosticsObservation
- **HTTP**: `DELETE /devices/attributes/actions/observe` (DeviceDiagnostics (thingspace))
- **Notes**: This endpoint allows the user to stop or reset observe diagnostics.
- **Signature**: `StopDiagnosticsObservation(string transactionId, string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `transactionId` ← `transactionId`, `accountName` ← `accountName`
- **Returns**: `DiagnosticsObservationResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
