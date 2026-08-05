# VideoV1SubscribeRules — operations

Accessor: `client.VideoV1SubscribeRules` · Source: `Api/VideoV1SubscribeRules.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchRoomParticipantSubscribeRule
- **HTTP**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules` (Default14 (video))
- **Notes**: Returns a list of Subscribe Rules for the Participant.
- **Signature**: `FetchRoomParticipantSubscribeRule(string roomSid, string participantSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateRoomParticipantSubscribeRule
- **HTTP**: `POST /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules` (Default14 (video))
- **Notes**: Update the Subscribe Rules for the Participant
- **Signature**: `UpdateRoomParticipantSubscribeRule(string roomSid, string participantSid, object? rules, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `rules` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Rules` ← `rules`
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
