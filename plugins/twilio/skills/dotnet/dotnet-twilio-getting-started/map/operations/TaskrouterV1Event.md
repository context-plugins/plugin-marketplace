<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Event — operations

Accessor: `client.TaskrouterV1Event` · Source: `Api/TaskrouterV1Event.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchEvent

- **Server group**: `Default8`
- **Signature**: `FetchEvent(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceEvent`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceEvent` | `Models/TaskrouterV1WorkspaceEvent.cs` |

### ListEvent

- **Server group**: `Default8`
- **Signature**: `ListEvent(string workspaceSid, DateTimeOffset? endDate, string? eventType, int? minutes, string? reservationSid, DateTimeOffset? startDate, string? taskQueueSid, string? taskSid, string? workerSid, string? workflowSid, string? taskChannel, string? sid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`endDate` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `EventType` ← `eventType`, `Minutes` ← `minutes`, `ReservationSid` ← `reservationSid`, `StartDate` ← `startDate`, `TaskQueueSid` ← `taskQueueSid`, `TaskSid` ← `taskSid`, `WorkerSid` ← `workerSid`, `WorkflowSid` ← `workflowSid`, `TaskChannel` ← `taskChannel`, `Sid` ← `sid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEventResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListEventResponse` | `Models/ListEventResponse.cs` |

