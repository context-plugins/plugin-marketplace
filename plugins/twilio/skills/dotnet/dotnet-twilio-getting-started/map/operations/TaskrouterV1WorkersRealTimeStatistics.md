<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkersRealTimeStatistics — operations

Accessor: `client.TaskrouterV1WorkersRealTimeStatistics` · Source: `Api/TaskrouterV1WorkersRealTimeStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkersRealTimeStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkersRealTimeStatistics(string workspaceSid, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `taskChannel` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics` | `Models/TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics.cs` |

