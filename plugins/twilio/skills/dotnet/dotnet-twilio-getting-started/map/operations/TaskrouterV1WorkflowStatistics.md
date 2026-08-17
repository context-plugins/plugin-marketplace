<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkflowStatistics — operations

Accessor: `client.TaskrouterV1WorkflowStatistics` · Source: `Api/TaskrouterV1WorkflowStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkflowStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkflowStatistics(string workspaceSid, string workflowSid, int? minutes, DateTimeOffset? startDate, DateTimeOffset? endDate, string? taskChannel, string? splitByWaitTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`minutes` … `splitByWaitTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Minutes` ← `minutes`, `StartDate` ← `startDate`, `EndDate` ← `endDate`, `TaskChannel` ← `taskChannel`, `SplitByWaitTime` ← `splitByWaitTime`
- **Returns**: `TaskrouterV1WorkspaceWorkflowWorkflowStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkflowWorkflowStatistics` | `Models/TaskrouterV1WorkspaceWorkflowWorkflowStatistics.cs` |

