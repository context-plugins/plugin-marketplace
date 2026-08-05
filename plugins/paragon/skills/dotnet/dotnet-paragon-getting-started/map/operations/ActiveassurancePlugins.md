# ActiveassurancePlugins — operations

Accessor: `client.ActiveassurancePlugins` · Source: `Api/ActiveassurancePlugins.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PluginServiceCombineBindRules
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/plugins:combine_bind_rules` (Default)
- **Signature**: `PluginServiceCombineBindRules(string orgId, CombineBindRulesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CombineBindRulesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PluginServiceGetPlugin
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/plugins/{plugin_name}` (Default)
- **Signature**: `PluginServiceGetPlugin(string orgId, string pluginName, bool? originalDefaults, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `originalDefaults` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `original_defaults` ← `originalDefaults`
- **Returns**: `Plugin1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PluginServiceGetPluginDefaultOverrides
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/plugins/{plugin_name}/default_overrides` (Default)
- **Signature**: `PluginServiceGetPluginDefaultOverrides(string orgId, string pluginName, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PluginDefaultOverrides`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PluginServiceListPlugins
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/plugins` (Default)
- **Signature**: `PluginServiceListPlugins(string orgId, int? page, int? limit, string? filter, string? orderBy, bool? originalDefaults, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`page` … `originalDefaults`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `limit` ← `limit`, `filter` ← `filter`, `order_by` ← `orderBy`, `original_defaults` ← `originalDefaults`
- **Returns**: `ListPluginsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### PluginServicePluginFileDownloads
- **HTTP**: `GET /active-assurance/api/v2/orgs/{org_id}/plugins:file_downloads/{file_path}` (Default)
- **Signature**: `PluginServicePluginFileDownloads(string orgId, string filePath, string platform, bool? includeAllVersions, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeAllVersions` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `platform` ← `platform`, `include_all_versions` ← `includeAllVersions`
- **Returns**: `BinaryContent`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PluginServiceUpdatePlugin
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/plugins/{plugin_name}` (Default)
- **Signature**: `PluginServiceUpdatePlugin(string orgId, string pluginName, string? updateMask, bool? originalDefaults, Plugin1 plugin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - `originalDefaults` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`, `original_defaults` ← `originalDefaults`
- **Returns**: `Plugin1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PluginServiceUpdatePluginDefaultOverrides
- **HTTP**: `PATCH /active-assurance/api/v2/orgs/{org_id}/plugins/{plugin_name}/default_overrides` (Default)
- **Signature**: `PluginServiceUpdatePluginDefaultOverrides(string orgId, string pluginName, string? updateMask, PluginDefaultOverrides pluginDefaultOverrides, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `updateMask` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `update_mask` ← `updateMask`
- **Returns**: `PluginDefaultOverrides`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PluginServiceUploadPlugin
- **HTTP**: `POST /active-assurance/api/v2/orgs/{org_id}/plugins:upload` (Default)
- **Signature**: `PluginServiceUploadPlugin(string orgId, bool? enable, BinaryContent file, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `enable` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `enable` ← `enable`
- **Returns**: `Plugin1`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
