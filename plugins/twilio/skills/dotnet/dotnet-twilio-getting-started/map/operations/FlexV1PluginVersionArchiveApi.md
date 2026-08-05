# FlexV1PluginVersionArchiveApi — operations

Accessor: `client.FlexV1PluginVersionArchiveApi` · Source: `Api/FlexV1PluginVersionArchiveApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdatePluginVersionArchive
- **HTTP**: `POST /v1/PluginService/Plugins/{PluginSid}/Versions/{Sid}/Archive` (Default3 (flex-api))
- **Signature**: `UpdatePluginVersionArchive(string pluginSid, string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1PluginVersionArchive`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
