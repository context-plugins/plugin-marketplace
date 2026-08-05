# TaskrouterV1WorkflowStatistics — operations

Accessor: `client.TaskrouterV1WorkflowStatistics` · Source: `Api/TaskrouterV1WorkflowStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchWorkflowStatistics
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/Statistics` (Default11 (taskrouter))
- **Signature**: `FetchWorkflowStatistics(string workspaceSid, string workflowSid, int? minutes, DateTimeOffset? startDate, DateTimeOffset? endDate, string? taskChannel, string? splitByWaitTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`minutes` … `splitByWaitTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Minutes` ← `minutes`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`
- **Returns**: `TaskrouterV1WorkspaceWorkflowWorkflowStatistics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
