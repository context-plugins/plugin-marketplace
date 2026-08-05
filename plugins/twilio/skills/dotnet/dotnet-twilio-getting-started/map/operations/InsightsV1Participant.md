# InsightsV1Participant — operations

Accessor: `client.InsightsV1Participant` · Source: `Api/InsightsV1Participant.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchVideoParticipantSummary
- **HTTP**: `GET /v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}` (Default4 (insights))
- **Notes**: Get Video Log Analyzer data for a Room Participant.
- **Signature**: `FetchVideoParticipantSummary(string roomSid, string participantSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsV1VideoRoomSummaryVideoParticipantSummary`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListVideoParticipantSummary
- **HTTP**: `GET /v1/Video/Rooms/{RoomSid}/Participants` (Default4 (insights))
- **Notes**: Get a list of room participants.
- **Signature**: `ListVideoParticipantSummary(string roomSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListVideoParticipantSummaryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
