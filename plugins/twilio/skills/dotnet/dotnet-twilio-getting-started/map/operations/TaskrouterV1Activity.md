# TaskrouterV1Activity — operations

Accessor: `client.TaskrouterV1Activity` · Source: `Api/TaskrouterV1Activity.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateActivity
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Activities` (Default8 (taskrouter))
- **Signature**: `CreateActivity(string workspaceSid, string friendlyName, bool? available, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `available` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Available` ← `available`
- **Returns**: `TaskrouterV1WorkspaceActivity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteActivity
- **HTTP**: `DELETE /v1/Workspaces/{WorkspaceSid}/Activities/{Sid}` (Default8 (taskrouter))
- **Signature**: `DeleteActivity(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchActivity
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Activities/{Sid}` (Default8 (taskrouter))
- **Signature**: `FetchActivity(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceActivity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListActivity
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Activities` (Default8 (taskrouter))
- **Signature**: `ListActivity(string workspaceSid, string? friendlyName, string? available, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Available` ← `available`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListActivityResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateActivity
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Activities/{Sid}` (Default8 (taskrouter))
- **Signature**: `UpdateActivity(string workspaceSid, string sid, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`
- **Returns**: `TaskrouterV1WorkspaceActivity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
