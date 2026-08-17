<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1ConfiguredPlugin — operations

Accessor: `client.FlexV1ConfiguredPlugin` · Source: `Api/FlexV1ConfiguredPlugin.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### FetchConfiguredPlugin

- **Server group**: `Default13`
- **Signature**: `FetchConfiguredPlugin(string configurationSid, string pluginSid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1PluginConfigurationConfiguredPlugin`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1PluginConfigurationConfiguredPlugin` | `Models/FlexV1PluginConfigurationConfiguredPlugin.cs` |

### ListConfiguredPlugin

- **Server group**: `Default13`
- **Signature**: `ListConfiguredPlugin(string configurationSid, long? pageSize, int? page, string? pageToken, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `flexMetadata`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListConfiguredPluginResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListConfiguredPluginResponse` | `Models/ListConfiguredPluginResponse.cs` |

