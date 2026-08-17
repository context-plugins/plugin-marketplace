<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkerStatistics — operations

Accessor: `client.TaskrouterV1WorkerStatistics` · Source: `Api/TaskrouterV1WorkerStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkerInstanceStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkerInstanceStatistics(string workspaceSid, string workerSid, int? minutes, DateTimeOffset? startDate, DateTimeOffset? endDate, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`minutes` … `taskChannel`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Minutes` ← `minutes`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics` | `Models/TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics.cs` |

