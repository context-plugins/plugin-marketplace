# ApiKeyMerchantLevel — operations

Accessor: `client.ApiKeyMerchantLevel` · Source: `Api/ApiKeyMerchantLevel.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey
- **HTTP**: `POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateApiKey` (Default (balanceplatform-api-test))
- **Notes**: Returns a new API key for the API credential. You can use the new API key a few minutes after generating it. The old API key stops working 24 hours after generating a new one. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey(string merchantId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenerateApiKeyResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
