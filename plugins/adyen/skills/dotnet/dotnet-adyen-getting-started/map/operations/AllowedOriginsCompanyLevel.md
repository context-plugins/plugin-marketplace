# AllowedOriginsCompanyLevel — operations

Accessor: `client.AllowedOriginsCompanyLevel` · Source: `Api/AllowedOriginsCompanyLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId
- **HTTP**: `DELETE /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}` (Default9 (management-test))
- **Notes**: Removes the allowed origin identified in the path. As soon as an allowed origin is removed, we no longer accept client-side requests from that domain. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(string companyId, string apiCredentialId, string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins
- **HTTP**: `GET /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins` (Default9 (management-test))
- **Notes**: Returns the list of allowed origins for the API credential identified in the path. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(string companyId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AllowedOriginsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId
- **HTTP**: `GET /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins/{originId}` (Default9 (management-test))
- **Notes**: Returns the allowed origin identified in the path. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(string companyId, string apiCredentialId, string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins
- **HTTP**: `POST /companies/{companyId}/apiCredentials/{apiCredentialId}/allowedOrigins` (Default9 (management-test))
- **Notes**: Adds a new allowed origin to the API credential's list of allowed origins. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(string companyId, string apiCredentialId, AllowedOrigin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
