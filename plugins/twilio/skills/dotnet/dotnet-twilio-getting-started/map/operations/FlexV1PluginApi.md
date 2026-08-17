<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginApi — operations

Accessor: `client.FlexV1PluginApi` · Source: `Api/FlexV1PluginApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePlugin

- **Server group**: `Default13`
- **Signature**: `CreatePlugin(string? flexMetadata, string uniqueName, string? friendlyName, string? description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `description` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1Plugin`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Plugin` | `Models/FlexV1Plugin.cs` |

### FetchPlugin

- **Server group**: `Default13`
- **Signature**: `FetchPlugin(string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1Plugin`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Plugin` | `Models/FlexV1Plugin.cs` |

### ListPlugin

- **Server group**: `Default13`
- **Signature**: `ListPlugin(long? pageSize, int? page, string? pageToken, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `flexMetadata`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPluginResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPluginResponse` | `Models/ListPluginResponse.cs` |

### UpdatePlugin

- **Server group**: `Default13`
- **Signature**: `UpdatePlugin(string sid, string? flexMetadata, string? friendlyName, string? description, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
  - `friendlyName` — nullable, no default → **must pass explicitly**
  - `description` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1Plugin`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1Plugin` | `Models/FlexV1Plugin.cs` |

