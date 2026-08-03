# Stars — operations

Accessor: `client.Stars` · Source: `Api/Stars.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### StarsAdd
- **HTTP**: `POST /stars.add` (Default (slack))
- **Notes**: Adds a star to an item.
- **Signature**: `StarsAdd(string token, ContentType contentType, string? channel, string? file, string? fileComment, string? timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`channel` … `timestamp`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `file` ← `file`, `file_comment` ← `fileComment`, `timestamp` ← `timestamp`
- **Returns**: `StarsAddschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StarsList
- **HTTP**: `GET /stars.list` (Default (slack))
- **Notes**: Lists stars for a user.
- **Signature**: `StarsList(string? token, string? count, string? page, string? cursor, int? limit, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`token` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `count` ← `count`, `page` ← `page`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `StarsListschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### StarsRemove
- **HTTP**: `POST /stars.remove` (Default (slack))
- **Notes**: Removes a star from an item.
- **Signature**: `StarsRemove(string token, ContentType contentType, string? channel, string? file, string? fileComment, string? timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`channel` … `timestamp`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `file` ← `file`, `file_comment` ← `fileComment`, `timestamp` ← `timestamp`
- **Returns**: `StarsRemoveschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
