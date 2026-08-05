# Api20100401Participant — operations

Accessor: `client.Api20100401Participant` · Source: `Api/Api20100401Participant.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateParticipant
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json` (Default (api))
- **Signature**: `CreateParticipant(string accountSid, string conferenceSid, string from, string to, string? statusCallback, StatusCallbackMethod16? statusCallbackMethod, IReadOnlyList<string>? statusCallbackEvent, string? label, int? timeout, bool? record, bool? muted, string? beep, bool? startConferenceOnEnter, bool? endConferenceOnExit, string? waitUrl, WaitMethod? waitMethod, bool? earlyMedia, int? maxParticipants, string? conferenceRecord, string? conferenceTrim, string? conferenceStatusCallback, ConferenceStatusCallbackMethod? conferenceStatusCallbackMethod, IReadOnlyList<string>? conferenceStatusCallbackEvent, string? recordingChannels, string? recordingStatusCallback, RecordingStatusCallbackMethod2? recordingStatusCallbackMethod, string? sipAuthUsername, string? sipAuthPassword, string? region, string? conferenceRecordingStatusCallback, ConferenceRecordingStatusCallbackMethod? conferenceRecordingStatusCallbackMethod, IReadOnlyList<string>? recordingStatusCallbackEvent, IReadOnlyList<string>? conferenceRecordingStatusCallbackEvent, bool? coaching, string? callSidToCoach, string? jitterBufferSize, string? byoc, string? callerId, string? callReason, string? recordingTrack, string? recordingConfigurationId, int? timeLimit, string? machineDetection, int? machineDetectionTimeout, int? machineDetectionSpeechThreshold, int? machineDetectionSpeechEndThreshold, int? machineDetectionSilenceTimeout, string? amdStatusCallback, AmdStatusCallbackMethod? amdStatusCallbackMethod, string? trim, string? callToken, string? clientNotificationUrl, string? callerDisplayName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 49 params (`statusCallback` … `callerDisplayName`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `From` ← `from`, `To` ← `to`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `StatusCallbackEvent` ← `statusCallbackEvent`, `Label` ← `label`, `Timeout` ← `timeout`, `Record` ← `record`, `Muted` ← `muted`, `Beep` ← `beep`, `StartConferenceOnEnter` ← `startConferenceOnEnter`, `EndConferenceOnExit` ← `endConferenceOnExit`, `WaitUrl` ← `waitUrl`, `WaitMethod` ← `waitMethod`, `EarlyMedia` ← `earlyMedia`, `MaxParticipants` ← `maxParticipants`, `ConferenceRecord` ← `conferenceRecord`, `ConferenceTrim` ← `conferenceTrim`, `ConferenceStatusCallback` ← `conferenceStatusCallback`, `ConferenceStatusCallbackMethod` ← `conferenceStatusCallbackMethod`, `ConferenceStatusCallbackEvent` ← `conferenceStatusCallbackEvent`, `RecordingChannels` ← `recordingChannels`, `RecordingStatusCallback` ← `recordingStatusCallback`, `RecordingStatusCallbackMethod` ← `recordingStatusCallbackMethod`, `SipAuthUsername` ← `sipAuthUsername`, `SipAuthPassword` ← `sipAuthPassword`, `Region` ← `region`, `ConferenceRecordingStatusCallback` ← `conferenceRecordingStatusCallback`, `ConferenceRecordingStatusCallbackMethod` ← `conferenceRecordingStatusCallbackMethod`, `RecordingStatusCallbackEvent` ← `recordingStatusCallbackEvent`, `ConferenceRecordingStatusCallbackEvent` ← `conferenceRecordingStatusCallbackEvent`, `Coaching` ← `coaching`, `CallSidToCoach` ← `callSidToCoach`, `JitterBufferSize` ← `jitterBufferSize`, `Byoc` ← `byoc`, `CallerId` ← `callerId`, `CallReason` ← `callReason`, `RecordingTrack` ← `recordingTrack`, `RecordingConfigurationId` ← `recordingConfigurationId`, `TimeLimit` ← `timeLimit`, `MachineDetection` ← `machineDetection`, `MachineDetectionTimeout` ← `machineDetectionTimeout`, `MachineDetectionSpeechThreshold` ← `machineDetectionSpeechThreshold`, `MachineDetectionSpeechEndThreshold` ← `machineDetectionSpeechEndThreshold`, `MachineDetectionSilenceTimeout` ← `machineDetectionSilenceTimeout`, `AmdStatusCallback` ← `amdStatusCallback`, `AmdStatusCallbackMethod` ← `amdStatusCallbackMethod`, `Trim` ← `trim`, `CallToken` ← `callToken`, `ClientNotificationUrl` ← `clientNotificationUrl`, `CallerDisplayName` ← `callerDisplayName`
- **Returns**: `ApiV2010AccountConferenceParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteParticipant
- **HTTP**: `DELETE /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json` (Default (api))
- **Notes**: Kick a participant from a given conference
- **Signature**: `DeleteParticipant(string accountSid, string conferenceSid, string callSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchParticipant
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json` (Default (api))
- **Notes**: Fetch an instance of a participant
- **Signature**: `FetchParticipant(string accountSid, string conferenceSid, string callSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV2010AccountConferenceParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListParticipant
- **HTTP**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json` (Default (api))
- **Notes**: Retrieve a list of participants belonging to the account used to make the request
- **Signature**: `ListParticipant(string accountSid, string conferenceSid, bool? muted, bool? hold, bool? coaching, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`muted` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Muted` ← `muted`, `Hold` ← `hold`, `Coaching` ← `coaching`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateParticipant
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json` (Default (api))
- **Notes**: Update the properties of the participant
- **Signature**: `UpdateParticipant(string accountSid, string conferenceSid, string callSid, bool? muted, bool? hold, string? holdUrl, HoldMethod? holdMethod, string? announceUrl, AnnounceMethod1? announceMethod, string? waitUrl, WaitMethod? waitMethod, bool? beepOnExit, bool? endConferenceOnExit, bool? coaching, string? callSidToCoach, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`muted` … `callSidToCoach`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Muted` ← `muted`, `Hold` ← `hold`, `HoldUrl` ← `holdUrl`, `HoldMethod` ← `holdMethod`, `AnnounceUrl` ← `announceUrl`, `AnnounceMethod` ← `announceMethod`, `WaitUrl` ← `waitUrl`, `WaitMethod` ← `waitMethod`, `BeepOnExit` ← `beepOnExit`, `EndConferenceOnExit` ← `endConferenceOnExit`, `Coaching` ← `coaching`, `CallSidToCoach` ← `callSidToCoach`
- **Returns**: `ApiV2010AccountConferenceParticipant`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
