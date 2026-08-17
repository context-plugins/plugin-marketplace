# ClientKeyCompanyLevel — operations

Accessor: `client.ClientKeyCompanyLevel` · Source: `Api/ClientKeyCompanyLevel.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey
- **HTTP**: `POST /companies/{companyId}/apiCredentials/{apiCredentialId}/generateClientKey` (Default9 (management-test))
- **Notes**: Returns a new client key for the API credential identified in the path. You can use the new client key a few minutes after generating it. The old client key stops working 24 hours after generating a new one. To make this request, your API credential must have the following roles : * Management API—API credentials read and write
- **Signature**: `PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey(string companyId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GenerateClientKeyResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
