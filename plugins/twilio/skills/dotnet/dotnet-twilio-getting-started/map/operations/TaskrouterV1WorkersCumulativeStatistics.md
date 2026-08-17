<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkersCumulativeStatistics — operations

Accessor: `client.TaskrouterV1WorkersCumulativeStatistics` · Source: `Api/TaskrouterV1WorkersCumulativeStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkersCumulativeStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkersCumulativeStatistics(string workspaceSid, DateTimeOffset? endDate, int? minutes, DateTimeOffset? startDate, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`endDate` … `taskChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `Minutes` ← `minutes`, `StartDate` ← `startDate`, `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `Models/TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics.cs` |

