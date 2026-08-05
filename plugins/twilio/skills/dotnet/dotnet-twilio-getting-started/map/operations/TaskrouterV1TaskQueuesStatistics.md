# TaskrouterV1TaskQueuesStatistics — operations

Accessor: `client.TaskrouterV1TaskQueuesStatistics` · Source: `Api/TaskrouterV1TaskQueuesStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListTaskQueuesStatistics
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics` (Default11 (taskrouter))
- **Signature**: `ListTaskQueuesStatistics(string workspaceSid, DateTimeOffset? endDate, string? friendlyName, int? minutes, DateTimeOffset? startDate, string? taskChannel, string? splitByWaitTime, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`endDate` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `FriendlyName` ← `friendlyName`, `Minutes` ← `minutes`, `StartDate` ← `startDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskQueuesStatisticsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
