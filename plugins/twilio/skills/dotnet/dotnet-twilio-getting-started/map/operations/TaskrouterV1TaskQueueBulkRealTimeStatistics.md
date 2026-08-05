# TaskrouterV1TaskQueueBulkRealTimeStatistics — operations

Accessor: `client.TaskrouterV1TaskQueueBulkRealTimeStatistics` · Source: `Api/TaskrouterV1TaskQueueBulkRealTimeStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTaskQueueBulkRealTimeStatistics
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/TaskQueues/RealTimeStatistics` (Default11 (taskrouter))
- **Notes**: Fetch a Task Queue Real Time Statistics in bulk for the array of TaskQueue SIDs, support upto 50 in a request.
- **Signature**: `CreateTaskQueueBulkRealTimeStatistics(string workspaceSid, object? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
