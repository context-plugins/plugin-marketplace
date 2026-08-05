# ChatScheduledMessages — operations

Accessor: `client.ChatScheduledMessages` · Source: `Api/ChatScheduledMessages.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChatScheduledMessagesList
- **HTTP**: `GET /chat.scheduledMessages.list` (Default (slack))
- **Notes**: Returns a list of scheduled messages.
- **Signature**: `ChatScheduledMessagesList(string? channel, double? latest, double? oldest, int? limit, string? cursor, ContentType contentType, string? token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`channel` … `token`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `latest` ← `latest`, `oldest` ← `oldest`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ChatScheduledMessagesListschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ChatScheduledMessagesList1
- **HTTP**: `GET /chat.scheduledMessages.list` (Default (slack))
- **Notes**: Returns a list of scheduled messages.
- **Signature**: `ChatScheduledMessagesList1(string? channel, double? latest, double? oldest, int? limit, string? cursor, ContentType contentType, string? token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`channel` … `token`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `channel` ← `channel`, `latest` ← `latest`, `oldest` ← `oldest`, `limit` ← `limit`, `cursor` ← `cursor`
- **Returns**: `ChatScheduledMessagesListschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
