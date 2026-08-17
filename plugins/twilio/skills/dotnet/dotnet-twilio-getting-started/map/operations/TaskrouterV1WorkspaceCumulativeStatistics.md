<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkspaceCumulativeStatistics — operations

Accessor: `client.TaskrouterV1WorkspaceCumulativeStatistics` · Source: `Api/TaskrouterV1WorkspaceCumulativeStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkspaceCumulativeStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkspaceCumulativeStatistics(string workspaceSid, DateTimeOffset? endDate, int? minutes, DateTimeOffset? startDate, string? taskChannel, string? splitByWaitTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`endDate` … `splitByWaitTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `Minutes` ← `minutes`, `StartDate` ← `startDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`
- **Returns**: `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `Models/TaskrouterV1WorkspaceWorkspaceCumulativeStatistics.cs` |

