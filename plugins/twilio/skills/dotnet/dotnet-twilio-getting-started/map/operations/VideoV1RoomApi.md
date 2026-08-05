# VideoV1RoomApi — operations

Accessor: `client.VideoV1RoomApi` · Source: `Api/VideoV1RoomApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateRoom
- **HTTP**: `POST /v1/Rooms` (Default14 (video))
- **Signature**: `CreateRoom(bool? enableTurn, RoomEnumRoomType? type, string? uniqueName, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, int? maxParticipants, bool? recordParticipantsOnConnect, bool? transcribeParticipantsOnConnect, IReadOnlyList<RoomEnumVideoCodec>? videoCodecs, string? mediaRegion, object? recordingRules, object? transcriptionsConfiguration, bool? audioOnly, int? maxParticipantDuration, int? emptyRoomTimeout, int? unusedRoomTimeout, bool? largeRoom, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 17 params (`enableTurn` … `largeRoom`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `EnableTurn` ← `enableTurn`, `Type` ← `type`, `UniqueName` ← `uniqueName`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `MaxParticipants` ← `maxParticipants`, `RecordParticipantsOnConnect` ← `recordParticipantsOnConnect`, `TranscribeParticipantsOnConnect` ← `transcribeParticipantsOnConnect`, `VideoCodecs` ← `videoCodecs`, `MediaRegion` ← `mediaRegion`, `RecordingRules` ← `recordingRules`, `TranscriptionsConfiguration` ← `transcriptionsConfiguration`, `AudioOnly` ← `audioOnly`, `MaxParticipantDuration` ← `maxParticipantDuration`, `EmptyRoomTimeout` ← `emptyRoomTimeout`, `UnusedRoomTimeout` ← `unusedRoomTimeout`, `LargeRoom` ← `largeRoom`
- **Returns**: `VideoV1Room`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchRoom
- **HTTP**: `GET /v1/Rooms/{Sid}` (Default14 (video))
- **Signature**: `FetchRoom(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1Room`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRoom
- **HTTP**: `GET /v1/Rooms` (Default14 (video))
- **Signature**: `ListRoom(RecordingTranscriptionEnumStatus? status, string? uniqueName, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `UniqueName` ← `uniqueName`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRoomResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateRoom
- **HTTP**: `POST /v1/Rooms/{Sid}` (Default14 (video))
- **Signature**: `UpdateRoom(string sid, RecordingTranscriptionEnumStatus status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`
- **Returns**: `VideoV1Room`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
