<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1ConferenceParticipant — operations

Accessor: `client.InsightsV1ConferenceParticipant` · Source: `Api/InsightsV1ConferenceParticipant.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchConferenceParticipant

- **Server group**: `Default14`
- **Signature**: `FetchConferenceParticipant(string conferenceSid, string participantSid, string? events, string? metrics, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `events` — nullable, no default → **must pass explicitly**
  - `metrics` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `Events` ← `events`, `Metrics` ← `metrics`
- **Returns**: `InsightsV1ConferenceConferenceParticipant`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsV1ConferenceConferenceParticipant` | `Models/InsightsV1ConferenceConferenceParticipant.cs` |

### ListConferenceParticipant

- **Server group**: `Default14`
- **Signature**: `ListConferenceParticipant(string conferenceSid, string? participantSid, string? label, string? events, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`participantSid` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `ParticipantSid` ← `participantSid`, `Label` ← `label`, `Events` ← `events`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConferenceParticipantResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListConferenceParticipantResponse` | `Models/ListConferenceParticipantResponse.cs` |

