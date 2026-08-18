<!-- Generated file — do not edit; regenerated with the SDK. -->

# AllowedOriginsCompanyLevel — operations

Accessor: `client.AllowedOriginsCompanyLevel` · Source: `Api/AllowedOriginsCompanyLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId
- **Server group**: `Default9`
- **Signature**: `DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(string companyId, string apiCredentialId, string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError` | `Errors/DeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(string companyId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AllowedOriginsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AllowedOriginsResponse` | `Models/AllowedOriginsResponse.cs` |
| `GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError` | `Errors/GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(string companyId, string apiCredentialId, string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AllowedOrigin` | `Models/AllowedOrigin.cs` |
| `GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError` | `Errors/GetCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins(string companyId, string apiCredentialId, AllowedOrigin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AllowedOrigin` | `Models/AllowedOrigin.cs` |
| `PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError` | `Errors/PostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

