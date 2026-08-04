# Notification — operations

Accessor: `client.Notification` · Source: `Api/Notification.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### NotifyGetList
- **HTTP**: `GET /notifications` (Server1 (gitea))
- **Signature**: `NotifyGetList(bool? all, IReadOnlyList<string>? statusTypes, IReadOnlyList<SubjectType>? subjectType, DateTimeOffset? since, DateTimeOffset? before, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`all` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `all` ← `all`, `status-types` ← `statusTypes`, `subject-type` ← `subjectType`, `since` ← `since`, `before` ← `before`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<NotificationThread>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### NotifyGetRepoList
- **HTTP**: `GET /repos/{owner}/{repo}/notifications` (Server1 (gitea))
- **Signature**: `NotifyGetRepoList(string owner, string repo, bool? all, IReadOnlyList<string>? statusTypes, IReadOnlyList<SubjectType>? subjectType, DateTimeOffset? since, DateTimeOffset? before, int? page, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`all` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `all` ← `all`, `status-types` ← `statusTypes`, `subject-type` ← `subjectType`, `since` ← `since`, `before` ← `before`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<NotificationThread>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### NotifyGetThread
- **HTTP**: `GET /notifications/threads/{id}` (Server1 (gitea))
- **Signature**: `NotifyGetThread(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NotificationThread`
- **Error**: `SdkException<NotifyGetThreadError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NotifyNewAvailable
- **HTTP**: `GET /notifications/new` (Server1 (gitea))
- **Signature**: `NotifyNewAvailable(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `NotificationCount`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NotifyReadList
- **HTTP**: `PUT /notifications` (Server1 (gitea))
- **Signature**: `NotifyReadList(DateTimeOffset? lastReadAt, string? all, IReadOnlyList<string>? statusTypes, string? toStatus, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`lastReadAt` … `toStatus`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `last_read_at` ← `lastReadAt`, `all` ← `all`, `status-types` ← `statusTypes`, `to-status` ← `toStatus`
- **Returns**: `IReadOnlyList<NotificationThread>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NotifyReadRepoList
- **HTTP**: `PUT /repos/{owner}/{repo}/notifications` (Server1 (gitea))
- **Signature**: `NotifyReadRepoList(string owner, string repo, string? all, IReadOnlyList<string>? statusTypes, string? toStatus, DateTimeOffset? lastReadAt, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`all` … `lastReadAt`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `all` ← `all`, `status-types` ← `statusTypes`, `to-status` ← `toStatus`, `last_read_at` ← `lastReadAt`
- **Returns**: `IReadOnlyList<NotificationThread>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NotifyReadThread
- **HTTP**: `PATCH /notifications/threads/{id}` (Server1 (gitea))
- **Signature**: `NotifyReadThread(string id, string? toStatus = "read", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `toStatus` = "read", `requestOptions` = null
- **Query params (wire ← C#)**: `to-status` ← `toStatus`
- **Returns**: `NotificationThread`
- **Error**: `SdkException<NotifyReadThreadError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
