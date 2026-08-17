<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkflowRealTimeStatistics — operations

Accessor: `client.TaskrouterV1WorkflowRealTimeStatistics` · Source: `Api/TaskrouterV1WorkflowRealTimeStatistics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkflowRealTimeStatistics

- **Server group**: `Default8`
- **Signature**: `FetchWorkflowRealTimeStatistics(string workspaceSid, string workflowSid, string? taskChannel, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `taskChannel` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `TaskChannel` ← `taskChannel`
- **Returns**: `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `Models/TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics.cs` |

