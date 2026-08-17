<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueueStatistics — operations

Accessor: `client.TaskrouterV1TaskQueueStatistics` · Source: `Api/TaskrouterV1TaskQueueStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchTaskQueueStatistics

- **Server group**: `Default8`
- **Signature**: `FetchTaskQueueStatistics(string workspaceSid, string taskQueueSid, DateTimeOffset? endDate, int? minutes, DateTimeOffset? startDate, string? taskChannel, string? splitByWaitTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`endDate` … `splitByWaitTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `Minutes` ← `minutes`, `StartDate` ← `startDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`
- **Returns**: `TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics` | `Models/TaskrouterV1WorkspaceTaskQueueTaskQueueStatistics.cs` |

