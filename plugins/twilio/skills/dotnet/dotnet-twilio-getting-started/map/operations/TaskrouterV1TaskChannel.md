# TaskrouterV1TaskChannel — operations

Accessor: `client.TaskrouterV1TaskChannel` · Source: `Api/TaskrouterV1TaskChannel.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateTaskChannel
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/TaskChannels` (Default11 (taskrouter))
- **Signature**: `CreateTaskChannel(string workspaceSid, string friendlyName, string uniqueName, bool? channelOptimizedRouting, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `channelOptimizedRouting` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `UniqueName` ← `uniqueName`, `ChannelOptimizedRouting` ← `channelOptimizedRouting`
- **Returns**: `TaskrouterV1WorkspaceTaskChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTaskChannel
- **HTTP**: `DELETE /v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}` (Default11 (taskrouter))
- **Signature**: `DeleteTaskChannel(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchTaskChannel
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}` (Default11 (taskrouter))
- **Signature**: `FetchTaskChannel(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceTaskChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTaskChannel
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/TaskChannels` (Default11 (taskrouter))
- **Signature**: `ListTaskChannel(string workspaceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateTaskChannel
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}` (Default11 (taskrouter))
- **Signature**: `UpdateTaskChannel(string workspaceSid, string sid, string? friendlyName, bool? channelOptimizedRouting, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `channelOptimizedRouting` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `ChannelOptimizedRouting` ← `channelOptimizedRouting`
- **Returns**: `TaskrouterV1WorkspaceTaskChannel`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
