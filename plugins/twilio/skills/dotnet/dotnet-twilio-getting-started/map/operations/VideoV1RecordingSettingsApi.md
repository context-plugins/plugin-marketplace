# VideoV1RecordingSettingsApi — operations

Accessor: `client.VideoV1RecordingSettingsApi` · Source: `Api/VideoV1RecordingSettingsApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateRecordingSettings
- **HTTP**: `POST /v1/RecordingSettings/Default` (Default14 (video))
- **Signature**: `CreateRecordingSettings(string friendlyName, string? awsCredentialsSid, string? encryptionKeySid, string? awsS3Url, bool? awsStorageEnabled, bool? encryptionEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`awsCredentialsSid` … `encryptionEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `AwsCredentialsSid` ← `awsCredentialsSid`, `EncryptionKeySid` ← `encryptionKeySid`, `AwsS3Url` ← `awsS3Url`, `AwsStorageEnabled` ← `awsStorageEnabled`, `EncryptionEnabled` ← `encryptionEnabled`
- **Returns**: `VideoV1RecordingSettings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchRecordingSettings
- **HTTP**: `GET /v1/RecordingSettings/Default` (Default14 (video))
- **Signature**: `FetchRecordingSettings(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1RecordingSettings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
