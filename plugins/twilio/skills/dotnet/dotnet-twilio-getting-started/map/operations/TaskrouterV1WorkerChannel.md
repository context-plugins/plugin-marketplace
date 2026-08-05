# TaskrouterV1WorkerChannel — operations

Accessor: `client.TaskrouterV1WorkerChannel` · Source: `Api/TaskrouterV1WorkerChannel.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchWorkerChannel
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}` (Default11 (taskrouter))
- **Signature**: `FetchWorkerChannel(string workspaceSid, string workerSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWorkerChannel
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels` (Default11 (taskrouter))
- **Signature**: `ListWorkerChannel(string workspaceSid, string workerSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkerChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateWorkerChannel
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}` (Default11 (taskrouter))
- **Signature**: `UpdateWorkerChannel(string workspaceSid, string workerSid, string sid, int? capacity, bool? available, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `capacity` — nullable, no default → **must pass explicitly**
  - `available` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Capacity` ← `capacity`, `Available` ← `available`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
