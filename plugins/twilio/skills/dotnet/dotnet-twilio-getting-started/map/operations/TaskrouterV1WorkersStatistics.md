<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkersStatistics — operations

Accessor: `client.TaskrouterV1WorkersStatistics` · Source: `Api/TaskrouterV1WorkersStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkerStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkerStatistics(string workspaceSid, int? minutes, DateTimeOffset? startDate, DateTimeOffset? endDate, string? taskQueueSid, string? taskQueueName, string? friendlyName, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`minutes` … `taskChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Minutes` ← `minutes`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `TaskQueueSid` ← `taskQueueSid`, `TaskQueueName` ← `taskQueueName`, `FriendlyName` ← `friendlyName`, `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkerStatistics` | `Models/TaskrouterV1WorkspaceWorkerWorkerStatistics.cs` |

