# Calls — operations

Accessor: `client.Calls` · Source: `Api/Calls.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CallsAdd
- **HTTP**: `POST /calls.add` (Default (slack))
- **Notes**: Registers a new Call.
- **Signature**: `CallsAdd(string token, ContentType contentType, string externalUniqueId, string joinUrl, string? externalDisplayId, string? desktopAppJoinUrl, int? dateStart, string? title, string? createdBy, string? users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`externalDisplayId` … `users`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `external_unique_id` ← `externalUniqueId`, `join_url` ← `joinUrl`, `external_display_id` ← `externalDisplayId`, `desktop_app_join_url` ← `desktopAppJoinUrl`, `date_start` ← `dateStart`, `title` ← `title`, `created_by` ← `createdBy`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsAdd1
- **HTTP**: `POST /calls.add` (Default (slack))
- **Notes**: Registers a new Call.
- **Signature**: `CallsAdd1(string token, ContentType contentType, string externalUniqueId, string joinUrl, string? externalDisplayId, string? desktopAppJoinUrl, int? dateStart, string? title, string? createdBy, string? users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`externalDisplayId` … `users`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `external_unique_id` ← `externalUniqueId`, `join_url` ← `joinUrl`, `external_display_id` ← `externalDisplayId`, `desktop_app_join_url` ← `desktopAppJoinUrl`, `date_start` ← `dateStart`, `title` ← `title`, `created_by` ← `createdBy`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsEnd
- **HTTP**: `POST /calls.end` (Default (slack))
- **Notes**: Ends a Call.
- **Signature**: `CallsEnd(string token, ContentType contentType, string id, int? duration, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `duration` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `duration` ← `duration`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsEnd1
- **HTTP**: `POST /calls.end` (Default (slack))
- **Notes**: Ends a Call.
- **Signature**: `CallsEnd1(string token, ContentType contentType, string id, int? duration, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `duration` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `duration` ← `duration`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsInfo
- **HTTP**: `GET /calls.info` (Default (slack))
- **Notes**: Returns information about a Call.
- **Signature**: `CallsInfo(string id, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsInfo1
- **HTTP**: `GET /calls.info` (Default (slack))
- **Notes**: Returns information about a Call.
- **Signature**: `CallsInfo1(string id, string token, ContentType contentType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsParticipantsAdd
- **HTTP**: `POST /calls.participants.add` (Default (slack))
- **Notes**: Registers new participants added to a Call.
- **Signature**: `CallsParticipantsAdd(string token, ContentType contentType, string id, string users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsParticipantsAdd1
- **HTTP**: `POST /calls.participants.add` (Default (slack))
- **Notes**: Registers new participants added to a Call.
- **Signature**: `CallsParticipantsAdd1(string token, ContentType contentType, string id, string users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsParticipantsRemove
- **HTTP**: `POST /calls.participants.remove` (Default (slack))
- **Notes**: Registers participants removed from a Call.
- **Signature**: `CallsParticipantsRemove(string token, ContentType contentType, string id, string users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsParticipantsRemove1
- **HTTP**: `POST /calls.participants.remove` (Default (slack))
- **Notes**: Registers participants removed from a Call.
- **Signature**: `CallsParticipantsRemove1(string token, ContentType contentType, string id, string users, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `users` ← `users`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsUpdate
- **HTTP**: `POST /calls.update` (Default (slack))
- **Notes**: Updates information about a Call.
- **Signature**: `CallsUpdate(string token, ContentType contentType, string id, string? title, string? joinUrl, string? desktopAppJoinUrl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `title` — nullable, no default → **must pass explicitly**
  - `joinUrl` — nullable, no default → **must pass explicitly**
  - `desktopAppJoinUrl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `title` ← `title`, `join_url` ← `joinUrl`, `desktop_app_join_url` ← `desktopAppJoinUrl`
- **Returns**: `Defaultsuccesstemplate`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CallsUpdate1
- **HTTP**: `POST /calls.update` (Default (slack))
- **Notes**: Updates information about a Call.
- **Signature**: `CallsUpdate1(string token, ContentType contentType, string id, string? title, string? joinUrl, string? desktopAppJoinUrl, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `title` — nullable, no default → **must pass explicitly**
  - `joinUrl` — nullable, no default → **must pass explicitly**
  - `desktopAppJoinUrl` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `title` ← `title`, `join_url` ← `joinUrl`, `desktop_app_join_url` ← `desktopAppJoinUrl`
- **Returns**: `Defaultsuccesstemplate1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
