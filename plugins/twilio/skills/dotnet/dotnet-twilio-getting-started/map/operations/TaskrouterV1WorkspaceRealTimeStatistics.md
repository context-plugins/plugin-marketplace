<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkspaceRealTimeStatistics — operations

Accessor: `client.TaskrouterV1WorkspaceRealTimeStatistics` · Source: `Api/TaskrouterV1WorkspaceRealTimeStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkspaceRealTimeStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkspaceRealTimeStatistics(string workspaceSid, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `taskChannel` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `Models/TaskrouterV1WorkspaceWorkspaceRealTimeStatistics.cs` |

