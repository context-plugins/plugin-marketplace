<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientKeyMerchantLevel — operations

Accessor: `client.ClientKeyMerchantLevel` · Source: `Api/ClientKeyMerchantLevel.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey(string merchantId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GenerateClientKeyResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateClientKeyResponse` | `Models/GenerateClientKeyResponse.cs` |
| `PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyError` | `Errors/PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

