<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1PublishedTrack — operations

Accessor: `client.VideoV1PublishedTrack` · Source: `Api/VideoV1PublishedTrack.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchRoomParticipantPublishedTrack

- **Server group**: `Default6`
- **Signature**: `FetchRoomParticipantPublishedTrack(string roomSid, string participantSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantPublishedTrack`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RoomRoomParticipantRoomParticipantPublishedTrack` | `Models/VideoV1RoomRoomParticipantRoomParticipantPublishedTrack.cs` |

### ListRoomParticipantPublishedTrack

- **Server group**: `Default6`
- **Signature**: `ListRoomParticipantPublishedTrack(string roomSid, string participantSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomParticipantPublishedTrackResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListRoomParticipantPublishedTrackResponse` | `Models/ListRoomParticipantPublishedTrackResponse.cs` |

