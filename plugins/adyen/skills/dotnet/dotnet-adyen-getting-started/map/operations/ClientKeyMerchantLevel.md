# ClientKeyMerchantLevel — operations

Accessor: `client.ClientKeyMerchantLevel` · Source: `Api/ClientKeyMerchantLevel.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey
- **HTTP**: `POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/generateClientKey` (Default (balanceplatform-api-test))
- **Notes**: Returns a new client key for the API credential identified in the path. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey(string merchantId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenerateClientKeyResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
