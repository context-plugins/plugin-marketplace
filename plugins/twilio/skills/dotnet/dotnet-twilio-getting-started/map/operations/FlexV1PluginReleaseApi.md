# FlexV1PluginReleaseApi — operations

Accessor: `client.FlexV1PluginReleaseApi` · Source: `Api/FlexV1PluginReleaseApi.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePluginRelease
- **HTTP**: `POST /v1/PluginService/Releases` (Default13 (flex-api))
- **Signature**: `CreatePluginRelease(string? flexMetadata, string configurationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `ConfigurationId` ← `configurationId`
- **Returns**: `FlexV1PluginRelease`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchPluginRelease
- **HTTP**: `GET /v1/PluginService/Releases/{Sid}` (Default13 (flex-api))
- **Signature**: `FetchPluginRelease(string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1PluginRelease`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPluginRelease
- **HTTP**: `GET /v1/PluginService/Releases` (Default13 (flex-api))
- **Signature**: `ListPluginRelease(long? pageSize, int? page, string? pageToken, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `flexMetadata`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPluginReleaseResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
