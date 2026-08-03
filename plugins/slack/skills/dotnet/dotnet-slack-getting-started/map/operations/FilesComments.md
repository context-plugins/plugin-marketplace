# FilesComments — operations

Accessor: `client.FilesComments` · Source: `Api/FilesComments.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FilesCommentsDelete
- **HTTP**: `POST /files.comments.delete` (Default (slack))
- **Notes**: Deletes an existing comment on a file.
- **Signature**: `FilesCommentsDelete(ContentType contentType, string? token, string? file, string? id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `file` — nullable, no default → **must pass explicitly**
  - `id` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `file` ← `file`, `id` ← `id`
- **Returns**: `FilesCommentsDeleteschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
