<!-- Generated file — do not edit; regenerated with the SDK. -->

# Putencryptionconfig — operations

Accessor: `client.Putencryptionconfig` · Source: `src/AwsXRay/Api/Putencryptionconfig.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PutEncryptionConfig

- **Auth**: `options.Sigv4`
- **Signature**: `PutEncryptionConfig(PutEncryptionConfigOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PutEncryptionConfigResult`
- **Error**: `ApiException<PutEncryptionConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PutEncryptionConfigOperationRequest` | `src/AwsXRay/Requests/Putencryptionconfig/PutEncryptionConfigOperationRequest.cs` |
| `PutEncryptionConfigRequest` | `src/AwsXRay/Models/PutEncryptionConfigRequest.cs` |
| `PutEncryptionConfigResult` | `src/AwsXRay/Models/PutEncryptionConfigResult.cs` |
| `PutEncryptionConfigError` | `src/AwsXRay/Errors/PutEncryptionConfigError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

