# VideoV1CompositionSettingsApi — operations

Accessor: `client.VideoV1CompositionSettingsApi` · Source: `Api/VideoV1CompositionSettingsApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCompositionSettings
- **HTTP**: `POST /v1/CompositionSettings/Default` (Default6 (video))
- **Signature**: `CreateCompositionSettings(string friendlyName, string? awsCredentialsSid, string? encryptionKeySid, string? awsS3Url, bool? awsStorageEnabled, bool? encryptionEnabled, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`awsCredentialsSid` … `encryptionEnabled`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `FriendlyName` ← `friendlyName`, `AwsCredentialsSid` ← `awsCredentialsSid`, `EncryptionKeySid` ← `encryptionKeySid`, `AwsS3Url` ← `awsS3Url`, `AwsStorageEnabled` ← `awsStorageEnabled`, `EncryptionEnabled` ← `encryptionEnabled`
- **Returns**: `VideoV1CompositionSettings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FetchCompositionSettings
- **HTTP**: `GET /v1/CompositionSettings/Default` (Default6 (video))
- **Signature**: `FetchCompositionSettings(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VideoV1CompositionSettings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
