# ApiCredentialsMerchantLevel — operations

Accessor: `client.ApiCredentialsMerchantLevel` · Source: `Api/ApiCredentialsMerchantLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantIdApiCredentials
- **HTTP**: `GET /merchants/{merchantId}/apiCredentials` (Default (balanceplatform-api-test))
- **Notes**: Returns the list of API credentials for the merchant account. The list is grouped into pages as defined by the query parameters. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `GetMerchantsMerchantIdApiCredentials(string merchantId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListMerchantApiCredentialsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdApiCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdApiCredentialsApiCredentialId
- **HTTP**: `GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the API credential identified in the path. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `GetMerchantsMerchantIdApiCredentialsApiCredentialId(string merchantId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiCredential`
- **Error**: `SdkException<GetMerchantsMerchantIdApiCredentialsApiCredentialIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdApiCredentialsApiCredentialId
- **HTTP**: `PATCH /merchants/{merchantId}/apiCredentials/{apiCredentialId}` (Default (balanceplatform-api-test))
- **Notes**: Changes the API credential's roles, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `PatchMerchantsMerchantIdApiCredentialsApiCredentialId(string merchantId, string apiCredentialId, UpdateMerchantApiCredentialRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApiCredential`
- **Error**: `SdkException<PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdApiCredentials
- **HTTP**: `POST /merchants/{merchantId}/apiCredentials` (Default (balanceplatform-api-test))
- **Notes**: Creates an API credential for the company account identified in the path. In the request, you can specify the roles and allowed origins for the new API credential. The response includes the: * API key : used for API request authentication. * Client key : public key used for client-side authentication. * Username and password : used for basic authentication. &gt; Make sure you store the API key securely in your system. You won't be able to retrieve it later. If your API key is lost or compromised, you need to generate a new API key . To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `PostMerchantsMerchantIdApiCredentials(string merchantId, CreateMerchantApiCredentialRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateApiCredentialResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdApiCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
