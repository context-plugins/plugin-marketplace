<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueueRealTimeStatistics — operations

Accessor: `client.TaskrouterV1TaskQueueRealTimeStatistics` · Source: `Api/TaskrouterV1TaskQueueRealTimeStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchTaskQueueRealTimeStatistics

- **Server group**: `Default8`
- **Signature**: `FetchTaskQueueRealTimeStatistics(string workspaceSid, string taskQueueSid, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `taskChannel` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `Models/TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics.cs` |

