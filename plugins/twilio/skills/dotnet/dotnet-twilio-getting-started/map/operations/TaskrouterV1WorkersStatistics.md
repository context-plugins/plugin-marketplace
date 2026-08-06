# TaskrouterV1WorkersStatistics — operations

Accessor: `client.TaskrouterV1WorkersStatistics` · Source: `Api/TaskrouterV1WorkersStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchWorkerStatistics
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/Statistics` (Default8 (taskrouter))
- **Signature**: `FetchWorkerStatistics(string workspaceSid, int? minutes, DateTimeOffset? startDate, DateTimeOffset? endDate, string? taskQueueSid, string? taskQueueName, string? friendlyName, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`minutes` … `taskChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Minutes` ← `minutes`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `TaskQueueSid` ← `taskQueueSid`, `TaskQueueName` ← `taskQueueName`, `FriendlyName` ← `friendlyName`, `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerStatistics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
