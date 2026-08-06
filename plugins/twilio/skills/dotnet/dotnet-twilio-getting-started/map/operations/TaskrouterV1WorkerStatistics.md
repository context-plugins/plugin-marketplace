# TaskrouterV1WorkerStatistics — operations

Accessor: `client.TaskrouterV1WorkerStatistics` · Source: `Api/TaskrouterV1WorkerStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchWorkerInstanceStatistics
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics` (Default8 (taskrouter))
- **Signature**: `FetchWorkerInstanceStatistics(string workspaceSid, string workerSid, int? minutes, DateTimeOffset? startDate, DateTimeOffset? endDate, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`minutes` … `taskChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Minutes` ← `minutes`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
