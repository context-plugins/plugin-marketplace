# TaskrouterV1Workspace — operations

Accessor: `client.TaskrouterV1Workspace` · Source: `Api/TaskrouterV1Workspace.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateWorkspace
- **HTTP**: `POST /v1/Workspaces` (Default (accounts))
- **Signature**: `CreateWorkspace(ContentType contentType, string friendlyName, string? eventCallbackUrl, string? eventsFilter, bool? multiTaskEnabled, string? template, WorkspaceQueueOrder? prioritizeQueueOrder, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`eventCallbackUrl` … `prioritizeQueueOrder`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `EventCallbackUrl` ← `eventCallbackUrl`, `EventsFilter` ← `eventsFilter`, `MultiTaskEnabled` ← `multiTaskEnabled`, `Template` ← `template`, `PrioritizeQueueOrder` ← `prioritizeQueueOrder`
- **Returns**: `Workspace`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteWorkspace
- **HTTP**: `DELETE /v1/Workspaces/{Sid}` (Default (accounts))
- **Signature**: `DeleteWorkspace(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchWorkspace
- **HTTP**: `GET /v1/Workspaces/{Sid}` (Default (accounts))
- **Signature**: `FetchWorkspace(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Workspace`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWorkspace
- **HTTP**: `GET /v1/Workspaces` (Default (accounts))
- **Signature**: `ListWorkspace(string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkspaceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateWorkspace
- **HTTP**: `POST /v1/Workspaces/{Sid}` (Default (accounts))
- **Signature**: `UpdateWorkspace(string sid, ContentType contentType, string? defaultActivitySid, string? eventCallbackUrl, string? eventsFilter, string? friendlyName, bool? multiTaskEnabled, string? timeoutActivitySid, WorkspaceQueueOrder? prioritizeQueueOrder, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`defaultActivitySid` … `prioritizeQueueOrder`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `DefaultActivitySid` ← `defaultActivitySid`, `EventCallbackUrl` ← `eventCallbackUrl`, `EventsFilter` ← `eventsFilter`, `FriendlyName` ← `friendlyName`, `MultiTaskEnabled` ← `multiTaskEnabled`, `TimeoutActivitySid` ← `timeoutActivitySid`, `PrioritizeQueueOrder` ← `prioritizeQueueOrder`
- **Returns**: `Workspace`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
