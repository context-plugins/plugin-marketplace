# TaskrouterV1WorkersCumulativeStatistics — operations

Accessor: `client.TaskrouterV1WorkersCumulativeStatistics` · Source: `Api/TaskrouterV1WorkersCumulativeStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchWorkersCumulativeStatistics
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics` (Default8 (taskrouter))
- **Signature**: `FetchWorkersCumulativeStatistics(string workspaceSid, DateTimeOffset? endDate, int? minutes, DateTimeOffset? startDate, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`endDate` … `taskChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `Minutes` ← `minutes`, `StartDate` ← `startDate`, `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
