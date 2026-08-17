<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueueCumulativeStatistics — operations

Accessor: `client.TaskrouterV1TaskQueueCumulativeStatistics` · Source: `Api/TaskrouterV1TaskQueueCumulativeStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchTaskQueueCumulativeStatistics

- **Server group**: `Default8`
- **Signature**: `FetchTaskQueueCumulativeStatistics(string workspaceSid, string taskQueueSid, DateTimeOffset? endDate, int? minutes, DateTimeOffset? startDate, string? taskChannel, string? splitByWaitTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`endDate` … `splitByWaitTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `Minutes` ← `minutes`, `StartDate` ← `startDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`
- **Returns**: `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `Models/TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics.cs` |

