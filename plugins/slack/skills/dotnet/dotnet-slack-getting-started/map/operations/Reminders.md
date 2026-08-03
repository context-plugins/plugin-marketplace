# Reminders — operations

Accessor: `client.Reminders` · Source: `Api/Reminders.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RemindersAdd
- **HTTP**: `POST /reminders.add` (Default (slack))
- **Notes**: Creates a reminder.
- **Signature**: `RemindersAdd(string token, ContentType contentType, string text, string time, string? user, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `text` ← `text`, `time` ← `time`, `user` ← `user`
- **Returns**: `RemindersAddschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RemindersComplete
- **HTTP**: `POST /reminders.complete` (Default (slack))
- **Notes**: Marks a reminder as complete.
- **Signature**: `RemindersComplete(ContentType contentType, string? token, string? reminder, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `reminder` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `reminder` ← `reminder`
- **Returns**: `RemindersCompleteschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RemindersDelete
- **HTTP**: `POST /reminders.delete` (Default (slack))
- **Notes**: Deletes a reminder.
- **Signature**: `RemindersDelete(ContentType contentType, string? token, string? reminder, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `reminder` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `reminder` ← `reminder`
- **Returns**: `RemindersDeleteschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RemindersInfo
- **HTTP**: `GET /reminders.info` (Default (slack))
- **Notes**: Gets information about a reminder.
- **Signature**: `RemindersInfo(string? token, string? reminder, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `reminder` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `reminder` ← `reminder`
- **Returns**: `RemindersInfoschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RemindersList
- **HTTP**: `GET /reminders.list` (Default (slack))
- **Notes**: Lists all reminders created by or for a given user.
- **Signature**: `RemindersList(string? token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`
- **Returns**: `RemindersListschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
