# Api20100401CallTranscription — operations

Accessor: `client.Api20100401CallTranscription` · Source: `Api/Api20100401CallTranscription.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateRealtimeTranscription
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions.json` (Default (api))
- **Notes**: Create a Transcription
- **Signature**: `CreateRealtimeTranscription(string accountSid, string callSid, string? name, RealtimeTranscriptionEnumTrack? track, string? statusCallbackUrl, StatusCallbackMethod17? statusCallbackMethod, string? inboundTrackLabel, string? outboundTrackLabel, bool? partialResults, string? languageCode, string? transcriptionEngine, bool? profanityFilter, string? speechModel, string? hints, bool? enableAutomaticPunctuation, string? intelligenceService, string? conversationConfiguration, string? conversationId, string? transcriptionConfigurationId, bool? enableProviderData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 18 params (`name` … `enableProviderData`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Name` ← `name`, `Track` ← `track`, `StatusCallbackUrl` ← `statusCallbackUrl`, `StatusCallbackMethod` ← `statusCallbackMethod`, `InboundTrackLabel` ← `inboundTrackLabel`, `OutboundTrackLabel` ← `outboundTrackLabel`, `PartialResults` ← `partialResults`, `LanguageCode` ← `languageCode`, `TranscriptionEngine` ← `transcriptionEngine`, `ProfanityFilter` ← `profanityFilter`, `SpeechModel` ← `speechModel`, `Hints` ← `hints`, `EnableAutomaticPunctuation` ← `enableAutomaticPunctuation`, `IntelligenceService` ← `intelligenceService`, `ConversationConfiguration` ← `conversationConfiguration`, `ConversationId` ← `conversationId`, `TranscriptionConfigurationId` ← `transcriptionConfigurationId`, `EnableProviderData` ← `enableProviderData`
- **Returns**: `ApiV2010AccountCallRealtimeTranscription`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateRealtimeTranscription
- **HTTP**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Transcriptions/{Sid}.json` (Default (api))
- **Notes**: Stop a Transcription using either the SID of the Transcription resource or the `name` used when creating the resource
- **Signature**: `UpdateRealtimeTranscription(string accountSid, string callSid, string sid, RealtimeTranscriptionEnumUpdateStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`
- **Returns**: `ApiV2010AccountCallRealtimeTranscription`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
