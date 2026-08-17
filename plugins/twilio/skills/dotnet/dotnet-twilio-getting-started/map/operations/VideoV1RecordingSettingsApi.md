<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RecordingSettingsApi — operations

Accessor: `client.VideoV1RecordingSettingsApi` · Source: `Api/VideoV1RecordingSettingsApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateRecordingSettings

- **Server group**: `Default6`
- **Signature**: `CreateRecordingSettings(string friendlyName, string? awsCredentialsSid, string? encryptionKeySid, string? awsS3Url, bool? awsStorageEnabled, bool? encryptionEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`awsCredentialsSid` … `encryptionEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `VideoV1RecordingSettings`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RecordingSettings` | `Models/VideoV1RecordingSettings.cs` |

### FetchRecordingSettings

- **Server group**: `Default6`
- **Signature**: `FetchRecordingSettings(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `VideoV1RecordingSettings`
- **Error**: `SdkException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `VideoV1RecordingSettings` | `Models/VideoV1RecordingSettings.cs` |

