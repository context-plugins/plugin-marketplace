# DiagnosticsSettings — operations

Accessor: `client.DiagnosticsSettings` · Source: `Api/DiagnosticsSettings.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListDiagnosticsSettings
- **HTTP**: `GET /devices/settings` (DeviceDiagnostics (thingspace))
- **Notes**: This endpoint retrieves diagnostics settings synchronously.
- **Signature**: `ListDiagnosticsSettings(string accountName, string devices, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountName` ← `accountName`, `devices` ← `devices`
- **Returns**: `IReadOnlyList<DiagnosticObservationSetting>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
