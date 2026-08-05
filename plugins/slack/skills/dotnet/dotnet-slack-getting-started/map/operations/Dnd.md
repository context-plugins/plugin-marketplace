# Dnd — operations

Accessor: `client.Dnd` · Source: `Api/Dnd.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DndEndDnd
- **HTTP**: `POST /dnd.endDnd` (Default (slack))
- **Notes**: Ends the current user's Do Not Disturb session immediately.
- **Signature**: `DndEndDnd(string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DndEndDndschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DndEndDnd1
- **HTTP**: `POST /dnd.endDnd` (Default (slack))
- **Notes**: Ends the current user's Do Not Disturb session immediately.
- **Signature**: `DndEndDnd1(string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DndEndDndschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DndEndSnooze
- **HTTP**: `POST /dnd.endSnooze` (Default (slack))
- **Notes**: Ends the current user's snooze mode immediately.
- **Signature**: `DndEndSnooze(string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DndEndSnoozeschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DndEndSnooze1
- **HTTP**: `POST /dnd.endSnooze` (Default (slack))
- **Notes**: Ends the current user's snooze mode immediately.
- **Signature**: `DndEndSnooze1(string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DndEndSnoozeschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DndInfo
- **HTTP**: `GET /dnd.info` (Default (slack))
- **Notes**: Retrieves a user's current Do Not Disturb status.
- **Signature**: `DndInfo(string? token, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `user` ← `user`
- **Returns**: `DndInfoschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DndInfo1
- **HTTP**: `GET /dnd.info` (Default (slack))
- **Notes**: Retrieves a user's current Do Not Disturb status.
- **Signature**: `DndInfo1(string? token, string? user, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `user` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `user` ← `user`
- **Returns**: `DndInfoschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DndSetSnooze
- **HTTP**: `POST /dnd.setSnooze` (Default (slack))
- **Notes**: Turns on Do Not Disturb mode for the current user, or changes its duration.
- **Signature**: `DndSetSnooze(ContentType contentType, string token, string numMinutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `num_minutes` ← `numMinutes`
- **Returns**: `DndSetSnoozeschema`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DndSetSnooze1
- **HTTP**: `POST /dnd.setSnooze` (Default (slack))
- **Notes**: Turns on Do Not Disturb mode for the current user, or changes its duration.
- **Signature**: `DndSetSnooze1(ContentType contentType, string token, string numMinutes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `num_minutes` ← `numMinutes`
- **Returns**: `DndSetSnoozeschema1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DndTeamInfo
- **HTTP**: `GET /dnd.teamInfo` (Default (slack))
- **Notes**: Retrieves the Do Not Disturb status for up to 50 users on a team.
- **Signature**: `DndTeamInfo(string? token, string? users, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `users` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DndTeamInfo1
- **HTTP**: `GET /dnd.teamInfo` (Default (slack))
- **Notes**: Retrieves the Do Not Disturb status for up to 50 users on a team.
- **Signature**: `DndTeamInfo1(string? token, string? users, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `token` — nullable, no default → **must pass explicitly**
  - `users` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `token` ← `token`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
