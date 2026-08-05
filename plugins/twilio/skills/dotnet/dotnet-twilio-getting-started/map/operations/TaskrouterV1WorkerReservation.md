# TaskrouterV1WorkerReservation — operations

Accessor: `client.TaskrouterV1WorkerReservation` · Source: `Api/TaskrouterV1WorkerReservation.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchWorkerReservation
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}` (Default11 (taskrouter))
- **Signature**: `FetchWorkerReservation(string workspaceSid, string workerSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerReservation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListWorkerReservation
- **HTTP**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations` (Default11 (taskrouter))
- **Signature**: `ListWorkerReservation(string workspaceSid, string workerSid, WorkerReservationEnumStatus? reservationStatus, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`reservationStatus` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ReservationStatus` ← `reservationStatus`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkerReservationResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateWorkerReservation
- **HTTP**: `POST /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Reservations/{Sid}` (Default11 (taskrouter))
- **Signature**: `UpdateWorkerReservation(string workspaceSid, string workerSid, string sid, string? ifMatch, WorkerReservationEnumStatus? reservationStatus, string? workerActivitySid, string? instruction, string? dequeuePostWorkActivitySid, string? dequeueFrom, string? dequeueRecord, int? dequeueTimeout, string? dequeueTo, string? dequeueStatusCallbackUrl, string? callFrom, string? callRecord, int? callTimeout, string? callTo, string? callUrl, string? callStatusCallbackUrl, bool? callAccept, string? redirectCallSid, bool? redirectAccept, string? redirectUrl, string? to, string? from, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, IReadOnlyList<CallEnumEvent>? statusCallbackEvent, int? timeout, bool? record, bool? muted, string? beep, bool? startConferenceOnEnter, bool? endConferenceOnExit, string? waitUrl, AmdStatusCallbackMethod? waitMethod, bool? earlyMedia, int? maxParticipants, string? conferenceStatusCallback, AmdStatusCallbackMethod? conferenceStatusCallbackMethod, IReadOnlyList<WorkerReservationEnumConferenceEvent>? conferenceStatusCallbackEvent, string? conferenceRecord, string? conferenceTrim, string? recordingChannels, string? recordingStatusCallback, AmdStatusCallbackMethod? recordingStatusCallbackMethod, string? conferenceRecordingStatusCallback, AmdStatusCallbackMethod? conferenceRecordingStatusCallbackMethod, string? region, string? sipAuthUsername, string? sipAuthPassword, IReadOnlyList<string>? dequeueStatusCallbackEvent, string? postWorkActivitySid, bool? endConferenceOnCustomerExit, bool? beepOnCustomerEntrance, string? jitterBufferSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 53 params (`ifMatch` … `jitterBufferSize`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ReservationStatus` ← `reservationStatus`, `WorkerActivitySid` ← `workerActivitySid`, `Instruction` ← `instruction`, `DequeuePostWorkActivitySid` ← `dequeuePostWorkActivitySid`, `DequeueFrom` ← `dequeueFrom`, `DequeueRecord` ← `dequeueRecord`, `DequeueTimeout` ← `dequeueTimeout`, `DequeueTo` ← `dequeueTo`, `DequeueStatusCallbackUrl` ← `dequeueStatusCallbackUrl`, `CallFrom` ← `callFrom`, `CallRecord` ← `callRecord`, `CallTimeout` ← `callTimeout`, `CallTo` ← `callTo`, `CallUrl` ← `callUrl`, `CallStatusCallbackUrl` ← `callStatusCallbackUrl`, `CallAccept` ← `callAccept`, `RedirectCallSid` ← `redirectCallSid`, `RedirectAccept` ← `redirectAccept`, `RedirectUrl` ← `redirectUrl`, `To` ← `to`, `From` ← `from`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `StatusCallbackEvent` ← `statusCallbackEvent`, `Timeout` ← `timeout`, `Record` ← `record`, `Muted` ← `muted`, `Beep` ← `beep`, `StartConferenceOnEnter` ← `startConferenceOnEnter`, `EndConferenceOnExit` ← `endConferenceOnExit`, `WaitUrl` ← `waitUrl`, `WaitMethod` ← `waitMethod`, `EarlyMedia` ← `earlyMedia`, `MaxParticipants` ← `maxParticipants`, `ConferenceStatusCallback` ← `conferenceStatusCallback`, `ConferenceStatusCallbackMethod` ← `conferenceStatusCallbackMethod`, `ConferenceStatusCallbackEvent` ← `conferenceStatusCallbackEvent`, `ConferenceRecord` ← `conferenceRecord`, `ConferenceTrim` ← `conferenceTrim`, `RecordingChannels` ← `recordingChannels`, `RecordingStatusCallback` ← `recordingStatusCallback`, `RecordingStatusCallbackMethod` ← `recordingStatusCallbackMethod`, `ConferenceRecordingStatusCallback` ← `conferenceRecordingStatusCallback`, `ConferenceRecordingStatusCallbackMethod` ← `conferenceRecordingStatusCallbackMethod`, `Region` ← `region`, `SipAuthUsername` ← `sipAuthUsername`, `SipAuthPassword` ← `sipAuthPassword`, `DequeueStatusCallbackEvent` ← `dequeueStatusCallbackEvent`, `PostWorkActivitySid` ← `postWorkActivitySid`, `EndConferenceOnCustomerExit` ← `endConferenceOnCustomerExit`, `BeepOnCustomerEntrance` ← `beepOnCustomerEntrance`, `JitterBufferSize` ← `jitterBufferSize`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerReservation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
