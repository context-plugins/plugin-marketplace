# VideoV1RoomRecording — operations

Accessor: `client.VideoV1RoomRecording` · Source: `Api/VideoV1RoomRecording.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteRoomRecording
- **HTTP**: `DELETE /v1/Rooms/{RoomSid}/Recordings/{Sid}` (Default6 (video))
- **Signature**: `DeleteRoomRecording(string roomSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchRoomRecording
- **HTTP**: `GET /v1/Rooms/{RoomSid}/Recordings/{Sid}` (Default6 (video))
- **Signature**: `FetchRoomRecording(string roomSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1RoomRoomRecording`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRoomRecording
- **HTTP**: `GET /v1/Rooms/{RoomSid}/Recordings` (Default6 (video))
- **Signature**: `ListRoomRecording(string roomSid, RoomRecordingEnumStatus? status, string? sourceSid, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `SourceSid` ← `sourceSid`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomRecordingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
