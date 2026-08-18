<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiCredentialsCompanyLevel — operations

Accessor: `client.ApiCredentialsCompanyLevel` · Source: `Api/ApiCredentialsCompanyLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompaniesCompanyIdApiCredentials
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdApiCredentials(string companyId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListCompanyApiCredentialsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdApiCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListCompanyApiCredentialsResponse` | `Models/ListCompanyApiCredentialsResponse.cs` |
| `GetCompaniesCompanyIdApiCredentialsError` | `Errors/GetCompaniesCompanyIdApiCredentialsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdApiCredentialsApiCredentialId
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdApiCredentialsApiCredentialId(string companyId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CompanyApiCredential`
- **Error**: `SdkException<GetCompaniesCompanyIdApiCredentialsApiCredentialIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CompanyApiCredential` | `Models/CompanyApiCredential.cs` |
| `GetCompaniesCompanyIdApiCredentialsApiCredentialIdError` | `Errors/GetCompaniesCompanyIdApiCredentialsApiCredentialIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchCompaniesCompanyIdApiCredentialsApiCredentialId
- **Server group**: `Default9`
- **Signature**: `PatchCompaniesCompanyIdApiCredentialsApiCredentialId(string companyId, string apiCredentialId, UpdateCompanyApiCredentialRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CompanyApiCredential`
- **Error**: `SdkException<PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCompanyApiCredentialRequest` | `Models/UpdateCompanyApiCredentialRequest.cs` |
| `CompanyApiCredential` | `Models/CompanyApiCredential.cs` |
| `PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError` | `Errors/PatchCompaniesCompanyIdApiCredentialsApiCredentialIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdApiCredentials
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdApiCredentials(string companyId, CreateCompanyApiCredentialRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateCompanyApiCredentialResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdApiCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCompanyApiCredentialRequest` | `Models/CreateCompanyApiCredentialRequest.cs` |
| `CreateCompanyApiCredentialResponse` | `Models/CreateCompanyApiCredentialResponse.cs` |
| `PostCompaniesCompanyIdApiCredentialsError` | `Errors/PostCompaniesCompanyIdApiCredentialsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

