<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginVersions — operations

Accessor: `client.FlexV1PluginVersions` · Source: `Api/FlexV1PluginVersions.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePluginVersion

- **Server group**: `Default13`
- **Signature**: `CreatePluginVersion(string pluginSid, string? flexMetadata, string version, string pluginUrl, string? changelog, bool? @private, string? cliVersion, string? validateStatus, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`flexMetadata` … `validateStatus`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `FlexV1PluginPluginVersion`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1PluginPluginVersion` | `Models/FlexV1PluginPluginVersion.cs` |

### FetchPluginVersion

- **Server group**: `Default13`
- **Signature**: `FetchPluginVersion(string pluginSid, string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1PluginPluginVersion`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1PluginPluginVersion` | `Models/FlexV1PluginPluginVersion.cs` |

### ListPluginVersion

- **Server group**: `Default13`
- **Signature**: `ListPluginVersion(string pluginSid, long? pageSize, int? page, string? pageToken, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `flexMetadata`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPluginVersionResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPluginVersionResponse` | `Models/ListPluginVersionResponse.cs` |

