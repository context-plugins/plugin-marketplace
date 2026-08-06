# TaskrouterV1TaskQueueCumulativeStatistics — operations

Accessor: `client.TaskrouterV1TaskQueueCumulativeStatistics` · Source: `Api/TaskrouterV1TaskQueueCumulativeStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchTaskQueueCumulativeStatistics
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics` (Default8 (taskrouter))
- **Signature**: `FetchTaskQueueCumulativeStatistics(string workspaceSid, string taskQueueSid, DateTimeOffset? endDate, int? minutes, DateTimeOffset? startDate, string? taskChannel, string? splitByWaitTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`endDate` … `splitByWaitTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `Minutes` ← `minutes`, `StartDate` ← `startDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`
- **Returns**: `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
