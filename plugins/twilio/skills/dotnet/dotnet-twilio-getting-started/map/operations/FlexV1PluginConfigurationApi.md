<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginConfigurationApi — operations

Accessor: `client.FlexV1PluginConfigurationApi` · Source: `Api/FlexV1PluginConfigurationApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePluginConfiguration

- **Server group**: `Default13`
- **Signature**: `CreatePluginConfiguration(string? flexMetadata, string name, IReadOnlyList<object>? plugins, string? description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
  - `plugins` — nullable, no default → **must pass explicitly**
  - `description` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1PluginConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1PluginConfiguration` | `Models/FlexV1PluginConfiguration.cs` |

### FetchPluginConfiguration

- **Server group**: `Default13`
- **Signature**: `FetchPluginConfiguration(string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1PluginConfiguration`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1PluginConfiguration` | `Models/FlexV1PluginConfiguration.cs` |

### ListPluginConfiguration

- **Server group**: `Default13`
- **Signature**: `ListPluginConfiguration(long? pageSize, int? page, string? pageToken, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `flexMetadata`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPluginConfigurationResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPluginConfigurationResponse` | `Models/ListPluginConfigurationResponse.cs` |

