# FlexV1PluginArchiveApi — operations

Accessor: `client.FlexV1PluginArchiveApi` · Source: `Api/FlexV1PluginArchiveApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### UpdatePluginArchive
- **HTTP**: `POST /v1/PluginService/Plugins/{Sid}/Archive` (Default3 (flex-api))
- **Signature**: `UpdatePluginArchive(string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FlexV1PluginArchive`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
