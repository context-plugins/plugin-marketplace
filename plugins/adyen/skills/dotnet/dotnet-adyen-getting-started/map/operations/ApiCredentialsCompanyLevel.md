# ApiCredentialsCompanyLevel — operations

Accessor: `client.ApiCredentialsCompanyLevel` · Source: `Api/ApiCredentialsCompanyLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCompaniesCompanyIdApiCredentials
- **HTTP**: `GET /companies/{companyId}/apiCredentials` (Default9 (management-test))
- **Notes**: Returns the list of API credentials for the company account. The list is grouped into pages as defined by the query parameters. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `GetCompaniesCompanyIdApiCredentials(string companyId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListCompanyApiCredentialsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdApiCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdApiCredentialsApiCredentialId
- **HTTP**: `GET /companies/{companyId}/apiCredentials/{apiCredentialId}` (Default9 (management-test))
- **Notes**: Returns the API credential identified in the path. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `GetCompaniesCompanyIdApiCredentialsApiCredentialId(string companyId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CompanyApiCredential`
- **Error**: `SdkException<GetCompaniesCompanyIdApiCredentialsApiCredentialIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchCompaniesCompanyIdApiCredentialsApiCredentialId
- **HTTP**: `PATCH /companies/{companyId}/apiCredentials/{apiCredentialId}` (Default9 (management-test))
- **Notes**: Changes the API credential's roles, merchant account access, or allowed origins. The request has the new values for the fields you want to change. The response contains the full updated API credential, including the new values from the request. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `PatchCompaniesCompanyIdApiCredentialsApiCredentialId(string companyId, string apiCredentialId, UpdateCompanyApiCredentialRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CompanyApiCredential`
- **Error**: `SdkException<PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdApiCredentials
- **HTTP**: `POST /companies/{companyId}/apiCredentials` (Default9 (management-test))
- **Notes**: Creates an API credential for the company account identified in the path. In the request, you can specify which merchant accounts the new API credential will have access to, as well as its roles and allowed origins. The response includes several types of authentication details: * API key : used for API request authentication. * Client key : public key used for client-side authentication. * Username and password : used for basic authentication. &gt; Make sure you store the API key securely in your system. You won't be able to retrieve it later. If your API key is lost or compromised, you need to generate a new API key . To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `PostCompaniesCompanyIdApiCredentials(string companyId, CreateCompanyApiCredentialRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateCompanyApiCredentialResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdApiCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
