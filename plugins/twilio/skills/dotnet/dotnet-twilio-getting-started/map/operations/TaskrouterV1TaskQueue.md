<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueue — operations

Accessor: `client.TaskrouterV1TaskQueue` · Source: `Api/TaskrouterV1TaskQueue.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateTaskQueue

- **Server group**: `Default8`
- **Signature**: `CreateTaskQueue(string workspaceSid, string friendlyName, string? targetWorkers, int? maxReservedWorkers, TaskQueueEnumTaskOrder? taskOrder, string? reservationActivitySid, string? assignmentActivitySid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`targetWorkers` … `assignmentActivitySid`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1WorkspaceTaskQueue`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskQueueEnumTaskOrder` | `Models/Enums/TaskQueueEnumTaskOrder.cs` |
| `TaskrouterV1WorkspaceTaskQueue` | `Models/TaskrouterV1WorkspaceTaskQueue.cs` |

### DeleteTaskQueue

- **Server group**: `Default8`
- **Signature**: `DeleteTaskQueue(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchTaskQueue

- **Server group**: `Default8`
- **Signature**: `FetchTaskQueue(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceTaskQueue`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTaskQueue` | `Models/TaskrouterV1WorkspaceTaskQueue.cs` |

### ListTaskQueue

- **Server group**: `Default8`
- **Signature**: `ListTaskQueue(string workspaceSid, string? friendlyName, string? evaluateWorkerAttributes, string? workerSid, string? ordering, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`friendlyName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `EvaluateWorkerAttributes` ← `evaluateWorkerAttributes`, `WorkerSid` ← `workerSid`, `Ordering` ← `ordering`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskQueueResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListTaskQueueResponse` | `Models/ListTaskQueueResponse.cs` |

### UpdateTaskQueue

- **Server group**: `Default8`
- **Signature**: `UpdateTaskQueue(string workspaceSid, string sid, string? friendlyName, string? targetWorkers, string? reservationActivitySid, string? assignmentActivitySid, int? maxReservedWorkers, TaskQueueEnumTaskOrder? taskOrder, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`friendlyName` … `taskOrder`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1WorkspaceTaskQueue`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskQueueEnumTaskOrder` | `Models/Enums/TaskQueueEnumTaskOrder.cs` |
| `TaskrouterV1WorkspaceTaskQueue` | `Models/TaskrouterV1WorkspaceTaskQueue.cs` |

