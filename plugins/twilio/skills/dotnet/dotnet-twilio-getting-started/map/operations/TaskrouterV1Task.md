# TaskrouterV1Task — operations

Accessor: `client.TaskrouterV1Task` · Source: `Api/TaskrouterV1Task.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTask
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Tasks` (Default11 (taskrouter))
- **Signature**: `CreateTask(string workspaceSid, int? timeout, int? priority, string? taskChannel, string? workflowSid, string? attributes, DateTimeOffset? virtualStartTime, string? routingTarget, string? ignoreCapacity, string? taskQueueSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`timeout` … `taskQueueSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Timeout` ← `timeout`, `Priority` ← `priority`, `TaskChannel` ← `taskChannel`, `WorkflowSid` ← `workflowSid`, `Attributes` ← `attributes`, `VirtualStartTime` ← `virtualStartTime`, `RoutingTarget` ← `routingTarget`, `IgnoreCapacity` ← `ignoreCapacity`, `TaskQueueSid` ← `taskQueueSid`
- **Returns**: `TaskrouterV1WorkspaceTask`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTask
- **HTTP**: `DELETE /v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}` (Default11 (taskrouter))
- **Signature**: `DeleteTask(string workspaceSid, string sid, string? ifMatch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchTask
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}` (Default11 (taskrouter))
- **Signature**: `FetchTask(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceTask`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTask
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Tasks` (Default11 (taskrouter))
- **Signature**: `ListTask(string workspaceSid, int? priority, IReadOnlyList<string>? assignmentStatus, string? workflowSid, string? workflowName, string? taskQueueSid, string? taskQueueName, string? evaluateTaskAttributes, string? routingTarget, string? ordering, bool? hasAddons, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`priority` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Priority` ← `priority`, `AssignmentStatus` ← `assignmentStatus`, `WorkflowSid` ← `workflowSid`, `WorkflowName` ← `workflowName`, `TaskQueueSid` ← `taskQueueSid`, `TaskQueueName` ← `taskQueueName`, `EvaluateTaskAttributes` ← `evaluateTaskAttributes`, `RoutingTarget` ← `routingTarget`, `Ordering` ← `ordering`, `HasAddons` ← `hasAddons`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateTask
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}` (Default11 (taskrouter))
- **Signature**: `UpdateTask(string workspaceSid, string sid, string? ifMatch, string? attributes, TaskEnumStatus? assignmentStatus, string? reason, int? priority, string? taskChannel, DateTimeOffset? virtualStartTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`ifMatch` … `virtualStartTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Attributes` ← `attributes`, `AssignmentStatus` ← `assignmentStatus`, `Reason` ← `reason`, `Priority` ← `priority`, `TaskChannel` ← `taskChannel`, `VirtualStartTime` ← `virtualStartTime`
- **Returns**: `TaskrouterV1WorkspaceTask`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
