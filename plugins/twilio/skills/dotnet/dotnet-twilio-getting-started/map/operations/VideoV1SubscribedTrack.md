<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1SubscribedTrack — operations

Accessor: `client.VideoV1SubscribedTrack` · Source: `Api/VideoV1SubscribedTrack.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchRoomParticipantSubscribedTrack

- **Server group**: `Default6`
- **Signature**: `FetchRoomParticipantSubscribedTrack(string roomSid, string participantSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack` | `Models/VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack.cs` |

### ListRoomParticipantSubscribedTrack

- **Server group**: `Default6`
- **Signature**: `ListRoomParticipantSubscribedTrack(string roomSid, string participantSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomParticipantSubscribedTrackResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRoomParticipantSubscribedTrackResponse` | `Models/ListRoomParticipantSubscribedTrackResponse.cs` |

