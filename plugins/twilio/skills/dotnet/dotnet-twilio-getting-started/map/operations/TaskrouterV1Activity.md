<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Activity — operations

Accessor: `client.TaskrouterV1Activity` · Source: `Api/TaskrouterV1Activity.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateActivity

- **Server group**: `Default8`
- **Signature**: `CreateActivity(string workspaceSid, string friendlyName, bool? available, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `available` — nullable, no default → **must pass explicitly**
- **Returns**: `TaskrouterV1WorkspaceActivity`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceActivity` | `Models/TaskrouterV1WorkspaceActivity.cs` |

### DeleteActivity

- **Server group**: `Default8`
- **Signature**: `DeleteActivity(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchActivity

- **Server group**: `Default8`
- **Signature**: `FetchActivity(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceActivity`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceActivity` | `Models/TaskrouterV1WorkspaceActivity.cs` |

### ListActivity

- **Server group**: `Default8`
- **Signature**: `ListActivity(string workspaceSid, string? friendlyName, string? available, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Available` ← `available`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListActivityResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListActivityResponse` | `Models/ListActivityResponse.cs` |

### UpdateActivity

- **Server group**: `Default8`
- **Signature**: `UpdateActivity(string workspaceSid, string sid, string? friendlyName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `friendlyName` — nullable, no default → **must pass explicitly**
- **Returns**: `TaskrouterV1WorkspaceActivity`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceActivity` | `Models/TaskrouterV1WorkspaceActivity.cs` |

