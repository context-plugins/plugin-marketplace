# TaskrouterV1WorkflowRealTimeStatistics — operations

Accessor: `client.TaskrouterV1WorkflowRealTimeStatistics` · Source: `Api/TaskrouterV1WorkflowRealTimeStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchWorkflowRealTimeStatistics
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics` (Default11 (taskrouter))
- **Signature**: `FetchWorkflowRealTimeStatistics(string workspaceSid, string workflowSid, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `taskChannel` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
