<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkerReservation — operations

Accessor: `client.TaskrouterV1WorkerReservation` · Source: `Api/TaskrouterV1WorkerReservation.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchWorkerReservation

- **Server group**: `Default8`
- **Signature**: `FetchWorkerReservation(string workspaceSid, string workerSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerReservation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `Models/TaskrouterV1WorkspaceWorkerWorkerReservation.cs` |

### ListWorkerReservation

- **Server group**: `Default8`
- **Signature**: `ListWorkerReservation(string workspaceSid, string workerSid, WorkerReservationEnumStatus? reservationStatus, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`reservationStatus` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `ReservationStatus` ← `reservationStatus`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListWorkerReservationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `WorkerReservationEnumStatus` | `Models/Enums/WorkerReservationEnumStatus.cs` |
| `ListWorkerReservationResponse` | `Models/ListWorkerReservationResponse.cs` |

### UpdateWorkerReservation

- **Server group**: `Default8`
- **Signature**: `UpdateWorkerReservation(string workspaceSid, string workerSid, string sid, string? ifMatch, WorkerReservationEnumStatus? reservationStatus, string? workerActivitySid, string? instruction, string? dequeuePostWorkActivitySid, string? dequeueFrom, string? dequeueRecord, int? dequeueTimeout, string? dequeueTo, string? dequeueStatusCallbackUrl, string? callFrom, string? callRecord, int? callTimeout, string? callTo, string? callUrl, string? callStatusCallbackUrl, bool? callAccept, string? redirectCallSid, bool? redirectAccept, string? redirectUrl, string? to, string? from, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, IReadOnlyList<CallEnumEvent>? statusCallbackEvent, int? timeout, bool? record, bool? muted, string? beep, bool? startConferenceOnEnter, bool? endConferenceOnExit, string? waitUrl, AmdStatusCallbackMethod? waitMethod, bool? earlyMedia, int? maxParticipants, string? conferenceStatusCallback, AmdStatusCallbackMethod? conferenceStatusCallbackMethod, IReadOnlyList<WorkerReservationEnumConferenceEvent>? conferenceStatusCallbackEvent, string? conferenceRecord, string? conferenceTrim, string? recordingChannels, string? recordingStatusCallback, AmdStatusCallbackMethod? recordingStatusCallbackMethod, string? conferenceRecordingStatusCallback, AmdStatusCallbackMethod? conferenceRecordingStatusCallbackMethod, string? region, string? sipAuthUsername, string? sipAuthPassword, IReadOnlyList<string>? dequeueStatusCallbackEvent, string? postWorkActivitySid, bool? endConferenceOnCustomerExit, bool? beepOnCustomerEntrance, string? jitterBufferSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 53 params (`ifMatch` … `jitterBufferSize`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerReservation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `WorkerReservationEnumStatus` | `Models/Enums/WorkerReservationEnumStatus.cs` |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `CallEnumEvent` | `Models/Enums/CallEnumEvent.cs` |
| `WorkerReservationEnumConferenceEvent` | `Models/Enums/WorkerReservationEnumConferenceEvent.cs` |
| `TaskrouterV1WorkspaceWorkerWorkerReservation` | `Models/TaskrouterV1WorkspaceWorkerWorkerReservation.cs` |

