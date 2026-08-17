<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Participant — operations

Accessor: `client.Api20100401Participant` · Source: `Api/Api20100401Participant.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateParticipant

- **Signature**: `CreateParticipant(string accountSid, string conferenceSid, string from, string to, string? statusCallback, StatusCallbackMethod16? statusCallbackMethod, IReadOnlyList<string>? statusCallbackEvent, string? label, int? timeout, bool? record, bool? muted, string? beep, bool? startConferenceOnEnter, bool? endConferenceOnExit, string? waitUrl, WaitMethod? waitMethod, bool? earlyMedia, int? maxParticipants, string? conferenceRecord, string? conferenceTrim, string? conferenceStatusCallback, ConferenceStatusCallbackMethod? conferenceStatusCallbackMethod, IReadOnlyList<string>? conferenceStatusCallbackEvent, string? recordingChannels, string? recordingStatusCallback, RecordingStatusCallbackMethod2? recordingStatusCallbackMethod, string? sipAuthUsername, string? sipAuthPassword, string? region, string? conferenceRecordingStatusCallback, ConferenceRecordingStatusCallbackMethod? conferenceRecordingStatusCallbackMethod, IReadOnlyList<string>? recordingStatusCallbackEvent, IReadOnlyList<string>? conferenceRecordingStatusCallbackEvent, bool? coaching, string? callSidToCoach, string? jitterBufferSize, string? byoc, string? callerId, string? callReason, string? recordingTrack, string? recordingConfigurationId, int? timeLimit, string? machineDetection, int? machineDetectionTimeout, int? machineDetectionSpeechThreshold, int? machineDetectionSpeechEndThreshold, int? machineDetectionSilenceTimeout, string? amdStatusCallback, AmdStatusCallbackMethod? amdStatusCallbackMethod, string? trim, string? callToken, string? clientNotificationUrl, string? callerDisplayName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 49 params (`statusCallback` … `callerDisplayName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountConferenceParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `StatusCallbackMethod16` | `Models/Enums/StatusCallbackMethod16.cs` |
| `WaitMethod` | `Models/Enums/WaitMethod.cs` |
| `ConferenceStatusCallbackMethod` | `Models/Enums/ConferenceStatusCallbackMethod.cs` |
| `RecordingStatusCallbackMethod2` | `Models/Enums/RecordingStatusCallbackMethod2.cs` |
| `ConferenceRecordingStatusCallbackMethod` | `Models/Enums/ConferenceRecordingStatusCallbackMethod.cs` |
| `AmdStatusCallbackMethod` | `Models/Enums/AmdStatusCallbackMethod.cs` |
| `ApiV2010AccountConferenceParticipant` | `Models/ApiV2010AccountConferenceParticipant.cs` |

### DeleteParticipant

- **Signature**: `DeleteParticipant(string accountSid, string conferenceSid, string callSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**

### FetchParticipant

- **Signature**: `FetchParticipant(string accountSid, string conferenceSid, string callSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountConferenceParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ApiV2010AccountConferenceParticipant` | `Models/ApiV2010AccountConferenceParticipant.cs` |

### ListParticipant

- **Signature**: `ListParticipant(string accountSid, string conferenceSid, bool? muted, bool? hold, bool? coaching, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`muted` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `Muted` ← `muted`, `Hold` ← `hold`, `Coaching` ← `coaching`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListParticipantResponse` | `Models/ListParticipantResponse.cs` |

### UpdateParticipant

- **Signature**: `UpdateParticipant(string accountSid, string conferenceSid, string callSid, bool? muted, bool? hold, string? holdUrl, HoldMethod? holdMethod, string? announceUrl, AnnounceMethod1? announceMethod, string? waitUrl, WaitMethod? waitMethod, bool? beepOnExit, bool? endConferenceOnExit, bool? coaching, string? callSidToCoach, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`muted` … `callSidToCoach`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountConferenceParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `HoldMethod` | `Models/Enums/HoldMethod.cs` |
| `AnnounceMethod1` | `Models/Enums/AnnounceMethod1.cs` |
| `WaitMethod` | `Models/Enums/WaitMethod.cs` |
| `ApiV2010AccountConferenceParticipant` | `Models/ApiV2010AccountConferenceParticipant.cs` |

