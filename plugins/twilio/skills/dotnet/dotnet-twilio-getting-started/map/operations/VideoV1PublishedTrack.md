# VideoV1PublishedTrack — operations

Accessor: `client.VideoV1PublishedTrack` · Source: `Api/VideoV1PublishedTrack.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchRoomParticipantPublishedTrack
- **HTTP**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}` (Default6 (video))
- **Notes**: Returns a single Track resource represented by TrackName or SID.
- **Signature**: `FetchRoomParticipantPublishedTrack(string roomSid, string participantSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantPublishedTrack`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRoomParticipantPublishedTrack
- **HTTP**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks` (Default6 (video))
- **Notes**: Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
- **Signature**: `ListRoomParticipantPublishedTrack(string roomSid, string participantSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomParticipantPublishedTrackResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
