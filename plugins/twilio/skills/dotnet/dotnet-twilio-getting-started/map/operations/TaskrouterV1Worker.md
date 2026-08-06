# TaskrouterV1Worker — operations

Accessor: `client.TaskrouterV1Worker` · Source: `Api/TaskrouterV1Worker.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateWorker
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Workers` (Default8 (taskrouter))
- **Signature**: `CreateWorker(string workspaceSid, string friendlyName, string? activitySid, string? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `activitySid` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `ActivitySid` ← `activitySid`, `Attributes` ← `attributes`
- **Returns**: `TaskrouterV1WorkspaceWorker`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWorker
- **HTTP**: `DELETE /v1/Workspaces/{WorkspaceSid}/Workers/{Sid}` (Default8 (taskrouter))
- **Signature**: `DeleteWorker(string workspaceSid, string sid, string? ifMatch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchWorker
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{Sid}` (Default8 (taskrouter))
- **Signature**: `FetchWorker(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceWorker`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWorker
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workers` (Default8 (taskrouter))
- **Signature**: `ListWorker(string workspaceSid, string? activityName, string? activitySid, string? available, string? friendlyName, string? targetWorkersExpression, string? taskQueueName, string? taskQueueSid, string? ordering, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`activityName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ActivityName` ← `activityName`, `ActivitySid` ← `activitySid`, `Available` ← `available`, `FriendlyName` ← `friendlyName`, `TargetWorkersExpression` ← `targetWorkersExpression`, `TaskQueueName` ← `taskQueueName`, `TaskQueueSid` ← `taskQueueSid`, `Ordering` ← `ordering`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkerResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateWorker
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Workers/{Sid}` (Default8 (taskrouter))
- **Signature**: `UpdateWorker(string workspaceSid, string sid, string? ifMatch, string? activitySid, string? attributes, string? friendlyName, bool? rejectPendingReservations, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`ifMatch` … `rejectPendingReservations`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ActivitySid` ← `activitySid`, `Attributes` ← `attributes`, `FriendlyName` ← `friendlyName`, `RejectPendingReservations` ← `rejectPendingReservations`
- **Returns**: `TaskrouterV1WorkspaceWorker`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
