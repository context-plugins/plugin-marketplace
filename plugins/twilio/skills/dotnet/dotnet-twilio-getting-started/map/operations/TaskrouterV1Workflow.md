# TaskrouterV1Workflow — operations

Accessor: `client.TaskrouterV1Workflow` · Source: `Api/TaskrouterV1Workflow.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateWorkflow
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Workflows` (Default8 (taskrouter))
- **Signature**: `CreateWorkflow(string workspaceSid, string friendlyName, string configuration, string? assignmentCallbackUrl, string? fallbackAssignmentCallbackUrl, int? taskReservationTimeout, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `assignmentCallbackUrl` — nullable, no default → **must pass explicitly**
  - `fallbackAssignmentCallbackUrl` — nullable, no default → **must pass explicitly**
  - `taskReservationTimeout` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Configuration` ← `configuration`, `AssignmentCallbackUrl` ← `assignmentCallbackUrl`, `FallbackAssignmentCallbackUrl` ← `fallbackAssignmentCallbackUrl`, `TaskReservationTimeout` ← `taskReservationTimeout`
- **Returns**: `TaskrouterV1WorkspaceWorkflow`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWorkflow
- **HTTP**: `DELETE /v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}` (Default8 (taskrouter))
- **Signature**: `DeleteWorkflow(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchWorkflow
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}` (Default8 (taskrouter))
- **Signature**: `FetchWorkflow(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceWorkflow`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWorkflow
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workflows` (Default8 (taskrouter))
- **Signature**: `ListWorkflow(string workspaceSid, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkflowResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateWorkflow
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}` (Default8 (taskrouter))
- **Signature**: `UpdateWorkflow(string workspaceSid, string sid, string? friendlyName, string? assignmentCallbackUrl, string? fallbackAssignmentCallbackUrl, string? configuration, int? taskReservationTimeout, string? reEvaluateTasks, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`friendlyName` … `reEvaluateTasks`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `AssignmentCallbackUrl` ← `assignmentCallbackUrl`, `FallbackAssignmentCallbackUrl` ← `fallbackAssignmentCallbackUrl`, `Configuration` ← `configuration`, `TaskReservationTimeout` ← `taskReservationTimeout`, `ReEvaluateTasks` ← `reEvaluateTasks`
- **Returns**: `TaskrouterV1WorkspaceWorkflow`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
