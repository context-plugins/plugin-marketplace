# Dialog — operations

Accessor: `client.Dialog` · Source: `Api/Dialog.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DialogOpen
- **HTTP**: `GET /dialog.open` (Default (slack))
- **Notes**: Open a dialog with a user
- **Signature**: `DialogOpen(string dialog, string triggerId, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `dialog` ← `dialog`, `trigger_id` ← `triggerId`
- **Returns**: `DialogOpenschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
