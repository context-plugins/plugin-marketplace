<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersCompanyLevel — operations

Accessor: `client.UsersCompanyLevel` · Source: `Api/UsersCompanyLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompaniesCompanyIdUsers
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdUsers(string companyId, int? pageNumber, int? pageSize, string? username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `username` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `username` ← `username`
- **Returns**: `ListCompanyUsersResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListCompanyUsersResponse` | `Models/ListCompanyUsersResponse.cs` |
| `GetCompaniesCompanyIdUsersError` | `Errors/GetCompaniesCompanyIdUsersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdUsersUserId
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdUsersUserId(string companyId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CompanyUser`
- **Error**: `SdkException<GetCompaniesCompanyIdUsersUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CompanyUser` | `Models/CompanyUser.cs` |
| `GetCompaniesCompanyIdUsersUserIdError` | `Errors/GetCompaniesCompanyIdUsersUserIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchCompaniesCompanyIdUsersUserId
- **Server group**: `Default9`
- **Signature**: `PatchCompaniesCompanyIdUsersUserId(string companyId, string userId, UpdateCompanyUserRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CompanyUser`
- **Error**: `SdkException<PatchCompaniesCompanyIdUsersUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateCompanyUserRequest` | `Models/UpdateCompanyUserRequest.cs` |
| `CompanyUser` | `Models/CompanyUser.cs` |
| `PatchCompaniesCompanyIdUsersUserIdError` | `Errors/PatchCompaniesCompanyIdUsersUserIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdUsers
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdUsers(string companyId, CreateCompanyUserRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateCompanyUserResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateCompanyUserRequest` | `Models/CreateCompanyUserRequest.cs` |
| `CreateCompanyUserResponse` | `Models/CreateCompanyUserResponse.cs` |
| `PostCompaniesCompanyIdUsersError` | `Errors/PostCompaniesCompanyIdUsersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

