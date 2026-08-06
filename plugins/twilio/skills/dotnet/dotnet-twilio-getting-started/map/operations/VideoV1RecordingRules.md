# VideoV1RecordingRules — operations

Accessor: `client.VideoV1RecordingRules` · Source: `Api/VideoV1RecordingRules.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### FetchRoomRecordingRule
- **HTTP**: `GET /v1/Rooms/{RoomSid}/RecordingRules` (Default6 (video))
- **Notes**: Returns a list of Recording Rules for the Room.
- **Signature**: `FetchRoomRecordingRule(string roomSid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1RoomRoomRecordingRule`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateRoomRecordingRule
- **HTTP**: `POST /v1/Rooms/{RoomSid}/RecordingRules` (Default6 (video))
- **Notes**: Update the Recording Rules for the Room
- **Signature**: `UpdateRoomRecordingRule(string roomSid, object? rules, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `rules` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Rules` ← `rules`
- **Returns**: `VideoV1RoomRoomRecordingRule`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
