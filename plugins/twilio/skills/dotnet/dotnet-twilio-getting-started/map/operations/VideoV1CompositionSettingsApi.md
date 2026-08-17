<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1CompositionSettingsApi — operations

Accessor: `client.VideoV1CompositionSettingsApi` · Source: `Api/VideoV1CompositionSettingsApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCompositionSettings

- **Server group**: `Default6`
- **Signature**: `CreateCompositionSettings(string friendlyName, string? awsCredentialsSid, string? encryptionKeySid, string? awsS3Url, bool? awsStorageEnabled, bool? encryptionEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`awsCredentialsSid` … `encryptionEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VideoV1CompositionSettings`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1CompositionSettings` | `Models/VideoV1CompositionSettings.cs` |

### FetchCompositionSettings

- **Server group**: `Default6`
- **Signature**: `FetchCompositionSettings(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1CompositionSettings`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1CompositionSettings` | `Models/VideoV1CompositionSettings.cs` |

