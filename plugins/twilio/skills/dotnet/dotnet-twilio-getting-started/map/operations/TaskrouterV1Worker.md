<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Worker — operations

Accessor: `client.TaskrouterV1Worker` · Source: `Api/TaskrouterV1Worker.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateWorker

- **Server group**: `Default8`
- **Signature**: `CreateWorker(string workspaceSid, string friendlyName, string? activitySid, string? attributes, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `activitySid` — nullable, no default → **must pass explicitly**
  - `attributes` — nullable, no default → **must pass explicitly**
- **Returns**: `TaskrouterV1WorkspaceWorker`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorker` | `Models/TaskrouterV1WorkspaceWorker.cs` |

### DeleteWorker

- **Server group**: `Default8`
- **Signature**: `DeleteWorker(string workspaceSid, string sid, string? ifMatch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifMatch` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchWorker

- **Server group**: `Default8`
- **Signature**: `FetchWorker(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceWorker`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorker` | `Models/TaskrouterV1WorkspaceWorker.cs` |

### ListWorker

- **Server group**: `Default8`
- **Signature**: `ListWorker(string workspaceSid, string? activityName, string? activitySid, string? available, string? friendlyName, string? targetWorkersExpression, string? taskQueueName, string? taskQueueSid, string? ordering, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`activityName` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `ActivityName` ← `activityName`, `ActivitySid` ← `activitySid`, `Available` ← `available`, `FriendlyName` ← `friendlyName`, `TargetWorkersExpression` ← `targetWorkersExpression`, `TaskQueueName` ← `taskQueueName`, `TaskQueueSid` ← `taskQueueSid`, `Ordering` ← `ordering`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkerResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListWorkerResponse` | `Models/ListWorkerResponse.cs` |

### UpdateWorker

- **Server group**: `Default8`
- **Signature**: `UpdateWorker(string workspaceSid, string sid, string? ifMatch, string? activitySid, string? attributes, string? friendlyName, bool? rejectPendingReservations, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`ifMatch` … `rejectPendingReservations`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1WorkspaceWorker`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorker` | `Models/TaskrouterV1WorkspaceWorker.cs` |

