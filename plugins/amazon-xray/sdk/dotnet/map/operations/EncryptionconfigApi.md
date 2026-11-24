<!-- Generated file — do not edit; regenerated with the SDK. -->

# EncryptionconfigApi — operations

Accessor: `client.EncryptionconfigApi` · Source: `src/AwsXRay/Api/EncryptionconfigApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetEncryptionConfig

- **Auth**: `options.Sigv4`
- **Signature**: `GetEncryptionConfig(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetEncryptionConfigResult`
- **Error**: `ApiException<GetEncryptionConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEncryptionConfigResult` | `src/AwsXRay/Models/GetEncryptionConfigResult.cs` |
| `GetEncryptionConfigError` | `src/AwsXRay/Errors/GetEncryptionConfigError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

