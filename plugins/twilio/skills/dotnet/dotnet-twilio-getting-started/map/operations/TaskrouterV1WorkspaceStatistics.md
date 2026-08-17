<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkspaceStatistics — operations

Accessor: `client.TaskrouterV1WorkspaceStatistics` · Source: `Api/TaskrouterV1WorkspaceStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkspaceStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkspaceStatistics(string workspaceSid, int? minutes, DateTimeOffset? startDate, DateTimeOffset? endDate, string? taskChannel, string? splitByWaitTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`minutes` … `splitByWaitTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Minutes` ← `minutes`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`
- **Returns**: `TaskrouterV1WorkspaceWorkspaceStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkspaceStatistics` | `Models/TaskrouterV1WorkspaceWorkspaceStatistics.cs` |

