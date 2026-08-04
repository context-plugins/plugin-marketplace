# Broadcasts — operations

Accessor: `client.Broadcasts` · Source: `Api/Broadcasts.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateScheduledBroadcast
- **HTTP**: `POST /2/broadcasts/scheduled` (Default (api))
- **Notes**: Schedules a one-off or recurring broadcast for the authenticated user. A `source_id` (ingest) is required at create time.
- **Signature**: `CreateScheduledBroadcast(CreateScheduledBroadcastRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateScheduledBroadcastResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteScheduledBroadcast
- **HTTP**: `DELETE /2/broadcasts/scheduled/{id}` (Default (api))
- **Notes**: Deletes a scheduled broadcast by its alphanumeric UBS broadcast id.
- **Signature**: `DeleteScheduledBroadcast(string id, bool? rollForward, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `rollForward` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `roll_forward` ← `rollForward`
- **Returns**: `DeleteScheduledBroadcastResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetScheduledBroadcast
- **HTTP**: `GET /2/broadcasts/scheduled/{id}` (Default (api))
- **Notes**: Returns a single scheduled broadcast by its alphanumeric UBS broadcast id.
- **Signature**: `GetScheduledBroadcast(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetScheduledBroadcastResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GoLiveScheduledBroadcast
- **HTTP**: `POST /2/broadcasts/scheduled/{id}/live` (Default (api))
- **Notes**: Publishes a schedule that was created or updated with `manual_publish: true`. Without that flag the coordinator auto-publishes at start and this call is rejected.
- **Signature**: `GoLiveScheduledBroadcast(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GoLiveScheduledBroadcastResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListScheduledBroadcasts
- **HTTP**: `GET /2/broadcasts/scheduled` (Default (api))
- **Notes**: Returns scheduled broadcasts owned by the authenticated user.
- **Signature**: `ListScheduledBroadcasts(int? maxResults, string? oldestStartTime, string? newestStartTime, string? paginationToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`maxResults` … `paginationToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `max_results` ← `maxResults`, `oldest_start_time` ← `oldestStartTime`, `newest_start_time` ← `newestStartTime`, `pagination_token` ← `paginationToken`
- **Returns**: `ListScheduledBroadcastsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SendBroadcastChat
- **HTTP**: `POST /2/broadcasts/{id}/chat` (Default (api))
- **Notes**: Posts a chat message to a running broadcast, attributed to the authenticated user.
- **Signature**: `SendBroadcastChat(string id, SendBroadcastChatRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SendBroadcastChatResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateScheduledBroadcast
- **HTTP**: `PUT /2/broadcasts/scheduled/{id}` (Default (api))
- **Notes**: Fully replaces schedule fields for a broadcast. Path `:id` is the UBS broadcast id; the body must include `scheduled_broadcast_id` and re-send any fields that should be kept.
- **Signature**: `UpdateScheduledBroadcast(string id, UpdateScheduledBroadcastRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateScheduledBroadcastResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
