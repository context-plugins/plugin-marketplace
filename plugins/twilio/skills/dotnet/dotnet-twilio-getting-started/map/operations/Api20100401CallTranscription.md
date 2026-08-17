<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CallTranscription — operations

Accessor: `client.Api20100401CallTranscription` · Source: `Api/Api20100401CallTranscription.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRealtimeTranscription

- **Signature**: `CreateRealtimeTranscription(string accountSid, string callSid, string? name, RealtimeTranscriptionEnumTrack? track, string? statusCallbackUrl, StatusCallbackMethod17? statusCallbackMethod, string? inboundTrackLabel, string? outboundTrackLabel, bool? partialResults, string? languageCode, string? transcriptionEngine, bool? profanityFilter, string? speechModel, string? hints, bool? enableAutomaticPunctuation, string? intelligenceService, string? conversationConfiguration, string? conversationId, string? transcriptionConfigurationId, bool? enableProviderData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 18 params (`name` … `enableProviderData`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `ApiV2010AccountCallRealtimeTranscription`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RealtimeTranscriptionEnumTrack` | `Models/Enums/RealtimeTranscriptionEnumTrack.cs` |
| `StatusCallbackMethod17` | `Models/Enums/StatusCallbackMethod17.cs` |
| `ApiV2010AccountCallRealtimeTranscription` | `Models/ApiV2010AccountCallRealtimeTranscription.cs` |

### UpdateRealtimeTranscription

- **Signature**: `UpdateRealtimeTranscription(string accountSid, string callSid, string sid, RealtimeTranscriptionEnumUpdateStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiV2010AccountCallRealtimeTranscription`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `RealtimeTranscriptionEnumUpdateStatus` | `Models/Enums/RealtimeTranscriptionEnumUpdateStatus.cs` |
| `ApiV2010AccountCallRealtimeTranscription` | `Models/ApiV2010AccountCallRealtimeTranscription.cs` |

