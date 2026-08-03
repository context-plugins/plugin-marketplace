# Reactions — operations

Accessor: `client.Reactions` · Source: `Api/Reactions.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ReactionsAdd
- **HTTP**: `POST /reactions.add` (Default (slack))
- **Notes**: Adds a reaction to an item.
- **Signature**: `ReactionsAdd(string token, ContentType contentType, string channel, string name, string timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `name` ← `name`, `timestamp` ← `timestamp`
- **Returns**: `ReactionsAddschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ReactionsGet
- **HTTP**: `GET /reactions.get` (Default (slack))
- **Notes**: Gets reactions for an item.
- **Signature**: `ReactionsGet(string token, string? channel, string? file, string? fileComment, bool? full, string? timestamp, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`channel` … `timestamp`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `channel` ← `channel`, `file` ← `file`, `file_comment` ← `fileComment`, `full` ← `full`, `timestamp` ← `timestamp`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ReactionsList
- **HTTP**: `GET /reactions.list` (Default (slack))
- **Notes**: Lists reactions made by a user.
- **Signature**: `ReactionsList(string token, string? user, bool? full, int? count, int? page, string? cursor, int? limit, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`user` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `user` ← `user`, `full` ← `full`, `count` ← `count`, `page` ← `page`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ReactionsListschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ReactionsRemove
- **HTTP**: `POST /reactions.remove` (Default (slack))
- **Notes**: Removes a reaction from an item.
- **Signature**: `ReactionsRemove(string token, ContentType contentType, string name, string? file, string? fileComment, string? channel, string? timestamp, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`file` … `timestamp`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `file` ← `file`, `file_comment` ← `fileComment`, `channel` ← `channel`, `timestamp` ← `timestamp`
- **Returns**: `ReactionsRemoveschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
