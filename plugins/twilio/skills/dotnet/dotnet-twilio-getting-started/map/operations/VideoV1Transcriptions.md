# VideoV1Transcriptions — operations

Accessor: `client.VideoV1Transcriptions` · Source: `Api/VideoV1Transcriptions.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateRoomTranscriptions
- **HTTP**: `POST /v1/Rooms/{RoomSid}/Transcriptions` (Default6 (video))
- **Signature**: `CreateRoomTranscriptions(string roomSid, object? configuration, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `configuration` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Configuration` ← `configuration`
- **Returns**: `VideoV1RoomRoomTranscriptions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchRoomTranscriptions
- **HTTP**: `GET /v1/Rooms/{RoomSid}/Transcriptions/{Ttid}` (Default6 (video))
- **Signature**: `FetchRoomTranscriptions(string roomSid, string ttid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1RoomRoomTranscriptions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRoomTranscriptions
- **HTTP**: `GET /v1/Rooms/{RoomSid}/Transcriptions` (Default6 (video))
- **Signature**: `ListRoomTranscriptions(string roomSid, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomTranscriptionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateRoomTranscriptions
- **HTTP**: `POST /v1/Rooms/{RoomSid}/Transcriptions/{Ttid}` (Default6 (video))
- **Signature**: `UpdateRoomTranscriptions(string roomSid, string ttid, RoomTranscriptionsEnumStatus? status, object? configuration, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `configuration` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `Configuration` ← `configuration`
- **Returns**: `VideoV1RoomRoomTranscriptions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
