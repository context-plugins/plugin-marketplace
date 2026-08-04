# DisputeFile — operations

Accessor: `client.DisputeFile` · Source: `Api/DisputeFile.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteDisputeFile
- **HTTP**: `DELETE /file/dispute/{id}` (Default (apiprod))
- **Signature**: `DeleteDisputeFile(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostDisputeFile
- **HTTP**: `POST /file/dispute` (Default (apiprod))
- **Signature**: `PostDisputeFile(BinaryContent? file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `file` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
