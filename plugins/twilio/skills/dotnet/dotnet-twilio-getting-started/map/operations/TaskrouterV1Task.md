<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Task — operations

Accessor: `client.TaskrouterV1Task` · Source: `Api/TaskrouterV1Task.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTask

- **Server group**: `Default8`
- **Signature**: `CreateTask(string workspaceSid, int? timeout, int? priority, string? taskChannel, string? workflowSid, string? attributes, DateTimeOffset? virtualStartTime, string? routingTarget, string? ignoreCapacity, string? taskQueueSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`timeout` … `taskQueueSid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1WorkspaceTask`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTask` | `Models/TaskrouterV1WorkspaceTask.cs` |

### DeleteTask

- **Server group**: `Default8`
- **Signature**: `DeleteTask(string workspaceSid, string sid, string? ifMatch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchTask

- **Server group**: `Default8`
- **Signature**: `FetchTask(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceTask`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTask` | `Models/TaskrouterV1WorkspaceTask.cs` |

### ListTask

- **Server group**: `Default8`
- **Signature**: `ListTask(string workspaceSid, int? priority, IReadOnlyList<string>? assignmentStatus, string? workflowSid, string? workflowName, string? taskQueueSid, string? taskQueueName, string? evaluateTaskAttributes, string? routingTarget, string? ordering, bool? hasAddons, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`priority` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Priority` ← `priority`, `AssignmentStatus` ← `assignmentStatus`, `WorkflowSid` ← `workflowSid`, `WorkflowName` ← `workflowName`, `TaskQueueSid` ← `taskQueueSid`, `TaskQueueName` ← `taskQueueName`, `EvaluateTaskAttributes` ← `evaluateTaskAttributes`, `RoutingTarget` ← `routingTarget`, `Ordering` ← `ordering`, `HasAddons` ← `hasAddons`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListTaskResponse` | `Models/ListTaskResponse.cs` |

### UpdateTask

- **Server group**: `Default8`
- **Signature**: `UpdateTask(string workspaceSid, string sid, string? ifMatch, string? attributes, TaskEnumStatus? assignmentStatus, string? reason, int? priority, string? taskChannel, DateTimeOffset? virtualStartTime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`ifMatch` … `virtualStartTime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1WorkspaceTask`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskEnumStatus` | `Models/Enums/TaskEnumStatus.cs` |
| `TaskrouterV1WorkspaceTask` | `Models/TaskrouterV1WorkspaceTask.cs` |

