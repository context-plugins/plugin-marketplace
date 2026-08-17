<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginReleaseApi — operations

Accessor: `client.FlexV1PluginReleaseApi` · Source: `Api/FlexV1PluginReleaseApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreatePluginRelease

- **Server group**: `Default13`
- **Signature**: `CreatePluginRelease(string? flexMetadata, string configurationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1PluginRelease`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1PluginRelease` | `Models/FlexV1PluginRelease.cs` |

### FetchPluginRelease

- **Server group**: `Default13`
- **Signature**: `FetchPluginRelease(string sid, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `flexMetadata` — nullable, no default → **must pass explicitly**
- **Returns**: `FlexV1PluginRelease`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `FlexV1PluginRelease` | `Models/FlexV1PluginRelease.cs` |

### ListPluginRelease

- **Server group**: `Default13`
- **Signature**: `ListPluginRelease(long? pageSize, int? page, string? pageToken, string? flexMetadata, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageSize` … `flexMetadata`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `PageSize` ← `pageSize`, `Page` ← `page`, `PageToken` ← `pageToken`
- **Returns**: `ListPluginReleaseResponse`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ListPluginReleaseResponse` | `Models/ListPluginReleaseResponse.cs` |

