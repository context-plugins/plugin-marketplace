<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkflowCumulativeStatistics — operations

Accessor: `client.TaskrouterV1WorkflowCumulativeStatistics` · Source: `Api/TaskrouterV1WorkflowCumulativeStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkflowCumulativeStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkflowCumulativeStatistics(string workspaceSid, string workflowSid, DateTimeOffset? endDate, int? minutes, DateTimeOffset? startDate, string? taskChannel, string? splitByWaitTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`endDate` … `splitByWaitTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `Minutes` ← `minutes`, `StartDate` ← `startDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`
- **Returns**: `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `Models/TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics.cs` |

