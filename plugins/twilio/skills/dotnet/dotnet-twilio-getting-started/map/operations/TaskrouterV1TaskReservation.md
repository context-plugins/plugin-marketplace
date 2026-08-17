<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskReservation — operations

Accessor: `client.TaskrouterV1TaskReservation` · Source: `Api/TaskrouterV1TaskReservation.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchTaskReservation

- **Server group**: `Default8`
- **Signature**: `FetchTaskReservation(string workspaceSid, string taskSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TaskrouterV1WorkspaceTaskTaskReservation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `Models/TaskrouterV1WorkspaceTaskTaskReservation.cs` |

### ListTaskReservation

- **Server group**: `Default8`
- **Signature**: `ListTaskReservation(string workspaceSid, string taskSid, TaskReservationEnumStatus? reservationStatus, string? workerSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`reservationStatus` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `ReservationStatus` ← `reservationStatus`, `WorkerSid` ← `workerSid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListTaskReservationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskReservationEnumStatus` | `Models/Enums/TaskReservationEnumStatus.cs` |
| `ListTaskReservationResponse` | `Models/ListTaskReservationResponse.cs` |

### UpdateTaskReservation

- **Server group**: `Default8`
- **Signature**: `UpdateTaskReservation(string workspaceSid, string taskSid, string sid, string? ifMatch, TaskReservationEnumStatus? reservationStatus, string? workerActivitySid, string? instruction, string? dequeuePostWorkActivitySid, string? dequeueFrom, string? dequeueRecord, int? dequeueTimeout, string? dequeueTo, string? dequeueStatusCallbackUrl, string? callFrom, string? callRecord, int? callTimeout, string? callTo, string? callUrl, string? callStatusCallbackUrl, bool? callAccept, string? redirectCallSid, bool? redirectAccept, string? redirectUrl, string? to, string? from, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, IReadOnlyList<CallEnumEvent>? statusCallbackEvent, int? timeout, bool? record, bool? muted, string? beep, bool? startConferenceOnEnter, bool? endConferenceOnExit, string? waitUrl, AmdStatusCallbackMethod? waitMethod, bool? earlyMedia, int? maxParticipants, string? conferenceStatusCallback, AmdStatusCallbackMethod? conferenceStatusCallbackMethod, IReadOnlyList<TaskReservationEnumConferenceEvent>? conferenceStatusCallbackEvent, string? conferenceRecord, string? conferenceTrim, string? recordingChannels, string? recordingStatusCallback, AmdStatusCallbackMethod? recordingStatusCallbackMethod, string? conferenceRecordingStatusCallback, AmdStatusCallbackMethod? conferenceRecordingStatusCallbackMethod, string? region, string? sipAuthUsername, string? sipAuthPassword, IReadOnlyList<string>? dequeueStatusCallbackEvent, string? postWorkActivitySid, TaskReservationEnumSupervisorMode? supervisorMode, string? supervisor, bool? endConferenceOnCustomerExit, bool? beepOnCustomerEntrance, string? jitterBufferSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 55 params (`ifMatch` … `jitterBufferSize`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `TaskrouterV1WorkspaceTaskTaskReservation`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `TaskReservationEnumStatus` | `Models/Enums/TaskReservationEnumStatus.cs` |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `CallEnumEvent` | `Models/Enums/CallEnumEvent.cs` |
| `TaskReservationEnumConferenceEvent` | `Models/Enums/TaskReservationEnumConferenceEvent.cs` |
| `TaskReservationEnumSupervisorMode` | `Models/Enums/TaskReservationEnumSupervisorMode.cs` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `Models/TaskrouterV1WorkspaceTaskTaskReservation.cs` |

