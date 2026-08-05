# TaskrouterV1TaskReservation — operations

Accessor: `client.TaskrouterV1TaskReservation` · Source: `Api/TaskrouterV1TaskReservation.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchTaskReservation
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}` (Default11 (taskrouter))
- **Signature**: `FetchTaskReservation(string workspaceSid, string taskSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceTaskTaskReservation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTaskReservation
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations` (Default11 (taskrouter))
- **Signature**: `ListTaskReservation(string workspaceSid, string taskSid, TaskReservationEnumStatus? reservationStatus, string? workerSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`reservationStatus` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ReservationStatus` ← `reservationStatus`, `WorkerSid` ← `workerSid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskReservationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateTaskReservation
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}` (Default11 (taskrouter))
- **Signature**: `UpdateTaskReservation(string workspaceSid, string taskSid, string sid, string? ifMatch, TaskReservationEnumStatus? reservationStatus, string? workerActivitySid, string? instruction, string? dequeuePostWorkActivitySid, string? dequeueFrom, string? dequeueRecord, int? dequeueTimeout, string? dequeueTo, string? dequeueStatusCallbackUrl, string? callFrom, string? callRecord, int? callTimeout, string? callTo, string? callUrl, string? callStatusCallbackUrl, bool? callAccept, string? redirectCallSid, bool? redirectAccept, string? redirectUrl, string? to, string? from, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, IReadOnlyList<CallEnumEvent>? statusCallbackEvent, int? timeout, bool? record, bool? muted, string? beep, bool? startConferenceOnEnter, bool? endConferenceOnExit, string? waitUrl, AmdStatusCallbackMethod? waitMethod, bool? earlyMedia, int? maxParticipants, string? conferenceStatusCallback, AmdStatusCallbackMethod? conferenceStatusCallbackMethod, IReadOnlyList<TaskReservationEnumConferenceEvent>? conferenceStatusCallbackEvent, string? conferenceRecord, string? conferenceTrim, string? recordingChannels, string? recordingStatusCallback, AmdStatusCallbackMethod? recordingStatusCallbackMethod, string? conferenceRecordingStatusCallback, AmdStatusCallbackMethod? conferenceRecordingStatusCallbackMethod, string? region, string? sipAuthUsername, string? sipAuthPassword, IReadOnlyList<string>? dequeueStatusCallbackEvent, string? postWorkActivitySid, TaskReservationEnumSupervisorMode? supervisorMode, string? supervisor, bool? endConferenceOnCustomerExit, bool? beepOnCustomerEntrance, string? jitterBufferSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 55 params (`ifMatch` … `jitterBufferSize`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ReservationStatus` ← `reservationStatus`, `WorkerActivitySid` ← `workerActivitySid`, `Instruction` ← `instruction`, `DequeuePostWorkActivitySid` ← `dequeuePostWorkActivitySid`, `DequeueFrom` ← `dequeueFrom`, `DequeueRecord` ← `dequeueRecord`, `DequeueTimeout` ← `dequeueTimeout`, `DequeueTo` ← `dequeueTo`, `DequeueStatusCallbackUrl` ← `dequeueStatusCallbackUrl`, `CallFrom` ← `callFrom`, `CallRecord` ← `callRecord`, `CallTimeout` ← `callTimeout`, `CallTo` ← `callTo`, `CallUrl` ← `callUrl`, `CallStatusCallbackUrl` ← `callStatusCallbackUrl`, `CallAccept` ← `callAccept`, `RedirectCallSid` ← `redirectCallSid`, `RedirectAccept` ← `redirectAccept`, `RedirectUrl` ← `redirectUrl`, `To` ← `to`, `From` ← `from`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `StatusCallbackEvent` ← `statusCallbackEvent`, `Timeout` ← `timeout`, `Record` ← `record`, `Muted` ← `muted`, `Beep` ← `beep`, `StartConferenceOnEnter` ← `startConferenceOnEnter`, `EndConferenceOnExit` ← `endConferenceOnExit`, `WaitUrl` ← `waitUrl`, `WaitMethod` ← `waitMethod`, `EarlyMedia` ← `earlyMedia`, `MaxParticipants` ← `maxParticipants`, `ConferenceStatusCallback` ← `conferenceStatusCallback`, `ConferenceStatusCallbackMethod` ← `conferenceStatusCallbackMethod`, `ConferenceStatusCallbackEvent` ← `conferenceStatusCallbackEvent`, `ConferenceRecord` ← `conferenceRecord`, `ConferenceTrim` ← `conferenceTrim`, `RecordingChannels` ← `recordingChannels`, `RecordingStatusCallback` ← `recordingStatusCallback`, `RecordingStatusCallbackMethod` ← `recordingStatusCallbackMethod`, `ConferenceRecordingStatusCallback` ← `conferenceRecordingStatusCallback`, `ConferenceRecordingStatusCallbackMethod` ← `conferenceRecordingStatusCallbackMethod`, `Region` ← `region`, `SipAuthUsername` ← `sipAuthUsername`, `SipAuthPassword` ← `sipAuthPassword`, `DequeueStatusCallbackEvent` ← `dequeueStatusCallbackEvent`, `PostWorkActivitySid` ← `postWorkActivitySid`, `SupervisorMode` ← `supervisorMode`, `Supervisor` ← `supervisor`, `EndConferenceOnCustomerExit` ← `endConferenceOnCustomerExit`, `BeepOnCustomerEntrance` ← `beepOnCustomerEntrance`, `JitterBufferSize` ← `jitterBufferSize`
- **Returns**: `TaskrouterV1WorkspaceTaskTaskReservation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
