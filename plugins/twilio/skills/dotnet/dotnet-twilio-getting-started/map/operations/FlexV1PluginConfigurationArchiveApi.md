# FlexV1PluginConfigurationArchiveApi — operations

Accessor: `client.FlexV1PluginConfigurationArchiveApi` · Source: `Api/FlexV1PluginConfigurationArchiveApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdatePluginConfigurationArchive
- **HTTP**: `POST /v1/PluginService/Configurations/{Sid}/Archive` (Default13 (flex-api))
- **Signature**: `UpdatePluginConfigurationArchive(string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1PluginConfigurationArchive`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
