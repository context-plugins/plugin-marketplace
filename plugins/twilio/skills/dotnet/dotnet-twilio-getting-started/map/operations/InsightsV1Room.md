# InsightsV1Room — operations

Accessor: `client.InsightsV1Room` · Source: `Api/InsightsV1Room.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchVideoRoomSummary
- **HTTP**: `GET /v1/Video/Rooms/{RoomSid}` (Default14 (insights))
- **Notes**: Get Video Log Analyzer data for a Room.
- **Signature**: `FetchVideoRoomSummary(string roomSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InsightsV1VideoRoomSummary`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListVideoRoomSummary
- **HTTP**: `GET /v1/Video/Rooms` (Default14 (insights))
- **Notes**: Get a list of Programmable Video Rooms.
- **Signature**: `ListVideoRoomSummary(IReadOnlyList<VideoRoomSummaryEnumRoomType>? roomType, IReadOnlyList<VideoRoomSummaryEnumCodec>? codec, string? roomName, DateTimeOffset? createdAfter, DateTimeOffset? createdBefore, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`roomType` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `RoomType` ← `roomType`, `Codec` ← `codec`, `RoomName` ← `roomName`, `CreatedAfter` ← `createdAfter`, `CreatedBefore` ← `createdBefore`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListVideoRoomSummaryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
