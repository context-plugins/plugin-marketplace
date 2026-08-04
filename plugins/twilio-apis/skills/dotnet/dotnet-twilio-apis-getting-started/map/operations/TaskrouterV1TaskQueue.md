# TaskrouterV1TaskQueue — operations

Accessor: `client.TaskrouterV1TaskQueue` · Source: `Api/TaskrouterV1TaskQueue.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTaskQueue
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/TaskQueues` (Default (accounts))
- **Signature**: `CreateTaskQueue(string workspaceSid, ContentType contentType, string friendlyName, string? targetWorkers, int? maxReservedWorkers, TaskQueueTaskOrder? taskOrder, string? reservationActivitySid, string? assignmentActivitySid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`targetWorkers` … `assignmentActivitySid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `TargetWorkers` ← `targetWorkers`, `MaxReservedWorkers` ← `maxReservedWorkers`, `TaskOrder` ← `taskOrder`, `ReservationActivitySid` ← `reservationActivitySid`, `AssignmentActivitySid` ← `assignmentActivitySid`
- **Returns**: `TaskQueue`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTaskQueue
- **HTTP**: `DELETE /v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}` (Default (accounts))
- **Signature**: `DeleteTaskQueue(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchTaskQueue
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}` (Default (accounts))
- **Signature**: `FetchTaskQueue(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskQueue`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTaskQueue
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/TaskQueues` (Default (accounts))
- **Signature**: `ListTaskQueue(string workspaceSid, string? friendlyName, string? evaluateWorkerAttributes, string? workerSid, string? ordering, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `EvaluateWorkerAttributes` ← `evaluateWorkerAttributes`, `WorkerSid` ← `workerSid`, `Ordering` ← `ordering`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskQueueResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateTaskQueue
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}` (Default (accounts))
- **Signature**: `UpdateTaskQueue(string workspaceSid, string sid, ContentType contentType, string? friendlyName, string? targetWorkers, string? reservationActivitySid, string? assignmentActivitySid, int? maxReservedWorkers, TaskQueueTaskOrder? taskOrder, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`friendlyName` … `taskOrder`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `TargetWorkers` ← `targetWorkers`, `ReservationActivitySid` ← `reservationActivitySid`, `AssignmentActivitySid` ← `assignmentActivitySid`, `MaxReservedWorkers` ← `maxReservedWorkers`, `TaskOrder` ← `taskOrder`
- **Returns**: `TaskQueue`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
