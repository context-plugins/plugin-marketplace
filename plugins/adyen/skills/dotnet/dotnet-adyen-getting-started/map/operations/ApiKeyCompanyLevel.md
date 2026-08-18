<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeyCompanyLevel — operations

Accessor: `client.ApiKeyCompanyLevel` · Source: `Api/ApiKeyCompanyLevel.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey(string companyId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GenerateApiKeyResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateApiKeyResponse` | `Models/GenerateApiKeyResponse.cs` |
| `PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError` | `Errors/PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

