<!-- Generated file — do not edit; regenerated with the SDK. -->

# ClientKeyCompanyLevel — operations

Accessor: `client.ClientKeyCompanyLevel` · Source: `Api/ClientKeyCompanyLevel.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey(string companyId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GenerateClientKeyResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateClientKeyResponse` | `Models/GenerateClientKeyResponse.cs` |
| `PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError` | `Errors/PostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

