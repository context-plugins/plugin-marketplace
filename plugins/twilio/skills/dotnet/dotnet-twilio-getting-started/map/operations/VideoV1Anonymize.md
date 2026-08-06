# VideoV1Anonymize — operations

Accessor: `client.VideoV1Anonymize` · Source: `Api/VideoV1Anonymize.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdateRoomParticipantAnonymize
- **HTTP**: `POST /v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize` (Default6 (video))
- **Signature**: `UpdateRoomParticipantAnonymize(string roomSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantAnonymize`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
