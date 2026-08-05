# VideoV1CompositionApi — operations

Accessor: `client.VideoV1CompositionApi` · Source: `Api/VideoV1CompositionApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateComposition
- **HTTP**: `POST /v1/Compositions` (Default14 (video))
- **Signature**: `CreateComposition(string roomSid, object? videoLayout, IReadOnlyList<string>? audioSources, IReadOnlyList<string>? audioSourcesExcluded, string? resolution, CompositionEnumFormat? format, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, bool? trim, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`videoLayout` … `trim`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `RoomSid` ← `roomSid`, `VideoLayout` ← `videoLayout`, `AudioSources` ← `audioSources`, `AudioSourcesExcluded` ← `audioSourcesExcluded`, `Resolution` ← `resolution`, `Format` ← `format`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `Trim` ← `trim`
- **Returns**: `VideoV1Composition`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteComposition
- **HTTP**: `DELETE /v1/Compositions/{Sid}` (Default14 (video))
- **Notes**: Delete a Recording Composition resource identified by a Composition SID.
- **Signature**: `DeleteComposition(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchComposition
- **HTTP**: `GET /v1/Compositions/{Sid}` (Default14 (video))
- **Notes**: Returns a single Composition resource identified by a Composition SID.
- **Signature**: `FetchComposition(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1Composition`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListComposition
- **HTTP**: `GET /v1/Compositions` (Default14 (video))
- **Notes**: List of all Recording compositions.
- **Signature**: `ListComposition(CompositionEnumStatus? status, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? roomSid, int? page, string? pageToken, long? pageSize = 50L, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `pageSize` = 50L, `requestOptions` = null
- **Query params (wire ← C#)**: `Status` ← `status`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `RoomSid` ← `roomSid`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCompositionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
