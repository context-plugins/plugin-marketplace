<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskChannel — operations

Accessor: `client.TaskrouterV1TaskChannel` · Source: `Api/TaskrouterV1TaskChannel.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTaskChannel

- **Server group**: `Default8`
- **Signature**: `CreateTaskChannel(string workspaceSid, string friendlyName, string uniqueName, bool? channelOptimizedRouting, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `channelOptimizedRouting` — nullable, no default → **must pass explicitly**
- **Returns**: `TaskrouterV1WorkspaceTaskChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTaskChannel` | `Models/TaskrouterV1WorkspaceTaskChannel.cs` |

### DeleteTaskChannel

- **Server group**: `Default8`
- **Signature**: `DeleteTaskChannel(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchTaskChannel

- **Server group**: `Default8`
- **Signature**: `FetchTaskChannel(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceTaskChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTaskChannel` | `Models/TaskrouterV1WorkspaceTaskChannel.cs` |

### ListTaskChannel

- **Server group**: `Default8`
- **Signature**: `ListTaskChannel(string workspaceSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskChannelResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListTaskChannelResponse` | `Models/ListTaskChannelResponse.cs` |

### UpdateTaskChannel

- **Server group**: `Default8`
- **Signature**: `UpdateTaskChannel(string workspaceSid, string sid, string? friendlyName, bool? channelOptimizedRouting, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `channelOptimizedRouting` — nullable, no default → **must pass explicitly**
- **Returns**: `TaskrouterV1WorkspaceTaskChannel`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTaskChannel` | `Models/TaskrouterV1WorkspaceTaskChannel.cs` |

