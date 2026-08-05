# VideoV1CompositionHookApi — operations

Accessor: `client.VideoV1CompositionHookApi` · Source: `Api/VideoV1CompositionHookApi.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCompositionHook
- **HTTP**: `POST /v1/CompositionHooks` (Default14 (video))
- **Signature**: `CreateCompositionHook(string friendlyName, bool? enabled, object? videoLayout, IReadOnlyList<string>? audioSources, IReadOnlyList<string>? audioSourcesExcluded, string? resolution, CompositionHookEnumFormat? format, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, bool? trim, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`enabled` … `trim`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Enabled` ← `enabled`, `VideoLayout` ← `videoLayout`, `AudioSources` ← `audioSources`, `AudioSourcesExcluded` ← `audioSourcesExcluded`, `Resolution` ← `resolution`, `Format` ← `format`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`, `Trim` ← `trim`
- **Returns**: `VideoV1CompositionHook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCompositionHook
- **HTTP**: `DELETE /v1/CompositionHooks/{Sid}` (Default14 (video))
- **Notes**: Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
- **Signature**: `DeleteCompositionHook(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCompositionHook
- **HTTP**: `GET /v1/CompositionHooks/{Sid}` (Default14 (video))
- **Notes**: Returns a single CompositionHook resource identified by a CompositionHook SID.
- **Signature**: `FetchCompositionHook(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1CompositionHook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCompositionHook
- **HTTP**: `GET /v1/CompositionHooks` (Default14 (video))
- **Notes**: List of all Recording CompositionHook resources.
- **Signature**: `ListCompositionHook(bool? enabled, DateTimeOffset? dateCreatedAfter, DateTimeOffset? dateCreatedBefore, string? friendlyName, long? pageSize, int? page, string? pageToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`enabled` … `pageToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Enabled` ← `enabled`, `DateCreatedAfter` ← `dateCreatedAfter`, `DateCreatedBefore` ← `dateCreatedBefore`, `FriendlyName` ← `friendlyName`, `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListCompositionHookResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### UpdateCompositionHook
- **HTTP**: `POST /v1/CompositionHooks/{Sid}` (Default14 (video))
- **Signature**: `UpdateCompositionHook(string sid, string friendlyName, bool? enabled, object? videoLayout, IReadOnlyList<string>? audioSources, IReadOnlyList<string>? audioSourcesExcluded, bool? trim, CompositionHookEnumFormat? format, string? resolution, string? statusCallback, AmdStatusCallbackMethod? statusCallbackMethod, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`enabled` … `statusCallbackMethod`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `Enabled` ← `enabled`, `VideoLayout` ← `videoLayout`, `AudioSources` ← `audioSources`, `AudioSourcesExcluded` ← `audioSourcesExcluded`, `Trim` ← `trim`, `Format` ← `format`, `Resolution` ← `resolution`, `StatusCallback` ← `statusCallback`, `StatusCallbackMethod` ← `statusCallbackMethod`
- **Returns**: `VideoV1CompositionHook`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
