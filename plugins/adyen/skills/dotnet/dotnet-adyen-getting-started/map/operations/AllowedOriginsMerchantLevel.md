# AllowedOriginsMerchantLevel — operations

Accessor: `client.AllowedOriginsMerchantLevel` · Source: `Api/AllowedOriginsMerchantLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId
- **HTTP**: `DELETE /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}` (Default (balanceplatform-api-test))
- **Notes**: Removes the allowed origin identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(string merchantId, string apiCredentialId, string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins
- **HTTP**: `GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins` (Default (balanceplatform-api-test))
- **Notes**: Returns the list of allowed origins for the API credential identified in the path. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(string merchantId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AllowedOriginsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId
- **HTTP**: `GET /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the allowed origin identified in the path. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(string merchantId, string apiCredentialId, string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins
- **HTTP**: `POST /merchants/{merchantId}/apiCredentials/{apiCredentialId}/allowedOrigins` (Default (balanceplatform-api-test))
- **Notes**: Adds a new allowed origin to the API credential's list of allowed origins. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(string merchantId, string apiCredentialId, AllowedOrigin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
