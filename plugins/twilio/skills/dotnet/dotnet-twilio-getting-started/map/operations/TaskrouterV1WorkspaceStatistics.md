# TaskrouterV1WorkspaceStatistics — operations

Accessor: `client.TaskrouterV1WorkspaceStatistics` · Source: `Api/TaskrouterV1WorkspaceStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchWorkspaceStatistics
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Statistics` (Default11 (taskrouter))
- **Signature**: `FetchWorkspaceStatistics(string workspaceSid, int? minutes, DateTimeOffset? startDate, DateTimeOffset? endDate, string? taskChannel, string? splitByWaitTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`minutes` … `splitByWaitTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Minutes` ← `minutes`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`
- **Returns**: `TaskrouterV1WorkspaceWorkspaceStatistics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
