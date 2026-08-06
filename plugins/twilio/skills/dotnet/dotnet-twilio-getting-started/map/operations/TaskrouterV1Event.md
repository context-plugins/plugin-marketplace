# TaskrouterV1Event — operations

Accessor: `client.TaskrouterV1Event` · Source: `Api/TaskrouterV1Event.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchEvent
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Events/{Sid}` (Default8 (taskrouter))
- **Signature**: `FetchEvent(string workspaceSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceEvent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListEvent
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Events` (Default8 (taskrouter))
- **Signature**: `ListEvent(string workspaceSid, DateTimeOffset? endDate, string? eventType, int? minutes, string? reservationSid, DateTimeOffset? startDate, string? taskQueueSid, string? taskSid, string? workerSid, string? workflowSid, string? taskChannel, string? sid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`endDate` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `EndDate` ← `endDate`, `EventType` ← `eventType`, `Minutes` ← `minutes`, `ReservationSid` ← `reservationSid`, `StartDate` ← `startDate`, `TaskQueueSid` ← `taskQueueSid`, `TaskSid` ← `taskSid`, `WorkerSid` ← `workerSid`, `WorkflowSid` ← `workflowSid`, `TaskChannel` ← `taskChannel`, `Sid` ← `sid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListEventResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
