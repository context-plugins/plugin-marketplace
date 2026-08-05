# DiagnosticsHistory — operations

Accessor: `client.DiagnosticsHistory` · Source: `Api/DiagnosticsHistory.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDiagnosticsHistory
- **HTTP**: `POST /history/actions/$search` (DeviceDiagnostics (thingspace))
- **Notes**: This endpoint allows the user to get the history data.
- **Signature**: `GetDiagnosticsHistory(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<History>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
