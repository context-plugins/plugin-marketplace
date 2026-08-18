<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeyMerchantLevel — operations

Accessor: `client.ApiKeyMerchantLevel` · Source: `Api/ApiKeyMerchantLevel.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey(string merchantId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GenerateApiKeyResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateApiKeyResponse` | `Models/GenerateApiKeyResponse.cs` |
| `PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError` | `Errors/PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

