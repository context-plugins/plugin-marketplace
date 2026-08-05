# TaskrouterV1WorkspaceRealTimeStatistics — operations

Accessor: `client.TaskrouterV1WorkspaceRealTimeStatistics` · Source: `Api/TaskrouterV1WorkspaceRealTimeStatistics.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchWorkspaceRealTimeStatistics
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/RealTimeStatistics` (Default11 (taskrouter))
- **Signature**: `FetchWorkspaceRealTimeStatistics(string workspaceSid, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `taskChannel` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
