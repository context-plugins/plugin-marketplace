<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginVersionArchiveApi — operations

Accessor: `client.FlexV1PluginVersionArchiveApi` · Source: `Api/FlexV1PluginVersionArchiveApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UpdatePluginVersionArchive

- **Server group**: `Default13`
- **Signature**: `UpdatePluginVersionArchive(string pluginSid, string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1PluginVersionArchive`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1PluginVersionArchive` | `Models/FlexV1PluginVersionArchive.cs` |

