# VideoV1SubscribedTrack — operations

Accessor: `client.VideoV1SubscribedTrack` · Source: `Api/VideoV1SubscribedTrack.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchRoomParticipantSubscribedTrack
- **HTTP**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}` (Default14 (video))
- **Notes**: Returns a single Track resource represented by `track_sid`. Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
- **Signature**: `FetchRoomParticipantSubscribedTrack(string roomSid, string participantSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRoomParticipantSubscribedTrack
- **HTTP**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks` (Default14 (video))
- **Notes**: Returns a list of tracks that are subscribed for the participant.
- **Signature**: `ListRoomParticipantSubscribedTrack(string roomSid, string participantSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomParticipantSubscribedTrackResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
