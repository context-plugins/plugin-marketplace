<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Participant — operations

Accessor: `client.InsightsV1Participant` · Source: `Api/InsightsV1Participant.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchVideoParticipantSummary

- **Server group**: `Default14`
- **Signature**: `FetchVideoParticipantSummary(string roomSid, string participantSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `InsightsV1VideoRoomSummaryVideoParticipantSummary`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `Models/InsightsV1VideoRoomSummaryVideoParticipantSummary.cs` |

### ListVideoParticipantSummary

- **Server group**: `Default14`
- **Signature**: `ListVideoParticipantSummary(string roomSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListVideoParticipantSummaryResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListVideoParticipantSummaryResponse` | `Models/ListVideoParticipantSummaryResponse.cs` |

