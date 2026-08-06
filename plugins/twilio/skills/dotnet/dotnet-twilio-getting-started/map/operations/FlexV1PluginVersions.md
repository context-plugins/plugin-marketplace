# FlexV1PluginVersions — operations

Accessor: `client.FlexV1PluginVersions` · Source: `Api/FlexV1PluginVersions.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePluginVersion
- **HTTP**: `POST /v1/PluginService/Plugins/{PluginSid}/Versions` (Default13 (flex-api))
- **Signature**: `CreatePluginVersion(string pluginSid, string? flexMetadata, string version, string pluginUrl, string? changelog, bool? @private, string? cliVersion, string? validateStatus, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`flexMetadata` … `validateStatus`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `Version` ← `version`, `PluginUrl` ← `pluginUrl`, `Changelog` ← `changelog`, `CliVersion` ← `cliVersion`, `ValidateStatus` ← `validateStatus`
- **Returns**: `FlexV1PluginPluginVersion`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchPluginVersion
- **HTTP**: `GET /v1/PluginService/Plugins/{PluginSid}/Versions/{Sid}` (Default13 (flex-api))
- **Signature**: `FetchPluginVersion(string pluginSid, string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1PluginPluginVersion`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPluginVersion
- **HTTP**: `GET /v1/PluginService/Plugins/{PluginSid}/Versions` (Default13 (flex-api))
- **Signature**: `ListPluginVersion(string pluginSid, long? pageSize, int? page, string? pageToken, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `flexMetadata`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPluginVersionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
