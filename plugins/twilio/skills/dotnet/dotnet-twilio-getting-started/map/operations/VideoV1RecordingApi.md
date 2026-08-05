# VideoV1RecordingApi — operations

Accessor: `client.VideoV1RecordingApi` · Source: `Api/VideoV1RecordingApi.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteRecording2
- **HTTP**: `DELETE /v1/Recordings/{Sid}` (Default14 (video))
- **Notes**: Delete a Recording resource identified by a Recording SID.
- **Signature**: `DeleteRecording2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchRecording2
- **HTTP**: `GET /v1/Recordings/{Sid}` (Default14 (video))
- **Notes**: Returns a single Recording resource identified by a Recording SID.
- **Signature**: `FetchRecording2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1Recording`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListRecording2
- **HTTP**: `GET /v1/Recordings` (Default14 (video))
- **Notes**: List of all Track recordings.
- **Signature**: `ListRecording2(RecordingEnumStatus1? status, string? sourceSid, IReadOnlyList<string>? groupingSid, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, RecordingEnumType? mediaType, int? page, string? pageToken, long? pageSize = 50L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = 50L, `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `SourceSid` ← `sourceSid`, `GroupingSid` ← `groupingSid`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `MediaType` ← `mediaType`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListRecordingResponse1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
