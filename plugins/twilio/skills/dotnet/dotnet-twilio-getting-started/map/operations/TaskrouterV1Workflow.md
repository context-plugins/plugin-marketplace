<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Workflow — operations

Accessor: `client.TaskrouterV1Workflow` · Source: `Api/TaskrouterV1Workflow.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWorkflow

- **Server group**: `Default8`
- **Signature**: `CreateWorkflow(string workspaceSid, string friendlyName, string configuration, string? assignmentCallbackUrl, string? fallbackAssignmentCallbackUrl, int? taskReservationTimeout, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `assignmentCallbackUrl` — nullable, no default → **must pass explicitly**
  - `fallbackAssignmentCallbackUrl` — nullable, no default → **must pass explicitly**
  - `taskReservationTimeout` — nullable, no default → **must pass explicitly**
- **Returns**: `TaskrouterV1WorkspaceWorkflow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkflow` | `Models/TaskrouterV1WorkspaceWorkflow.cs` |

### DeleteWorkflow

- **Server group**: `Default8`
- **Signature**: `DeleteWorkflow(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchWorkflow

- **Server group**: `Default8`
- **Signature**: `FetchWorkflow(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceWorkflow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkflow` | `Models/TaskrouterV1WorkspaceWorkflow.cs` |

### ListWorkflow

- **Server group**: `Default8`
- **Signature**: `ListWorkflow(string workspaceSid, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkflowResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListWorkflowResponse` | `Models/ListWorkflowResponse.cs` |

### UpdateWorkflow

- **Server group**: `Default8`
- **Signature**: `UpdateWorkflow(string workspaceSid, string sid, string? friendlyName, string? assignmentCallbackUrl, string? fallbackAssignmentCallbackUrl, string? configuration, int? taskReservationTimeout, string? reEvaluateTasks, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`friendlyName` … `reEvaluateTasks`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1WorkspaceWorkflow`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkflow` | `Models/TaskrouterV1WorkspaceWorkflow.cs` |

