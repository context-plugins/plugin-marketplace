# DiagnosticsSubscriptions — operations

Accessor: `client.DiagnosticsSubscriptions` · Source: `Api/DiagnosticsSubscriptions.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDiagnosticsSubscription
- **HTTP**: `GET /subscriptions` (DeviceDiagnostics (thingspace))
- **Notes**: This endpoint retrieves a diagnostics subscription by account.
- **Signature**: `GetDiagnosticsSubscription(string accountName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountName` ← `accountName`
- **Returns**: `DiagnosticsSubscription`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
