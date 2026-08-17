<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkspaceApi — operations

Accessor: `client.TaskrouterV1WorkspaceApi` · Source: `Api/TaskrouterV1WorkspaceApi.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWorkspace

- **Server group**: `Default8`
- **Signature**: `CreateWorkspace(string friendlyName, string? eventCallbackUrl, string? eventsFilter, bool? multiTaskEnabled, string? template, WorkspaceEnumQueueOrder? prioritizeQueueOrder, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`eventCallbackUrl` … `prioritizeQueueOrder`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1Workspace`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `WorkspaceEnumQueueOrder` | `Models/Enums/WorkspaceEnumQueueOrder.cs` |
| `TaskrouterV1Workspace` | `Models/TaskrouterV1Workspace.cs` |

### DeleteWorkspace

- **Server group**: `Default8`
- **Signature**: `DeleteWorkspace(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchWorkspace

- **Server group**: `Default8`
- **Signature**: `FetchWorkspace(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1Workspace`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1Workspace` | `Models/TaskrouterV1Workspace.cs` |

### ListWorkspace

- **Server group**: `Default8`
- **Signature**: `ListWorkspace(string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkspaceResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListWorkspaceResponse` | `Models/ListWorkspaceResponse.cs` |

### UpdateWorkspace

- **Server group**: `Default8`
- **Signature**: `UpdateWorkspace(string sid, string? defaultActivitySid, string? eventCallbackUrl, string? eventsFilter, string? friendlyName, bool? multiTaskEnabled, string? timeoutActivitySid, WorkspaceEnumQueueOrder? prioritizeQueueOrder, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`defaultActivitySid` … `prioritizeQueueOrder`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1Workspace`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `WorkspaceEnumQueueOrder` | `Models/Enums/WorkspaceEnumQueueOrder.cs` |
| `TaskrouterV1Workspace` | `Models/TaskrouterV1Workspace.cs` |

