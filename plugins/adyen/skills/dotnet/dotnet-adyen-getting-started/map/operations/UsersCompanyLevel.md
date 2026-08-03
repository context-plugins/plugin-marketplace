# UsersCompanyLevel — operations

Accessor: `client.UsersCompanyLevel` · Source: `Api/UsersCompanyLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCompaniesCompanyIdUsers
- **HTTP**: `GET /companies/{companyId}/users` (Default (balanceplatform-api-test))
- **Notes**: Returns the list of users for the `companyId` identified in the path. To make this request, your API credential must have the following role : * Management API—Users read and write
- **Signature**: `GetCompaniesCompanyIdUsers(string companyId, int? pageNumber, int? pageSize, string? username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `username` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `username` ← `username`
- **Returns**: `ListCompanyUsersResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdUsersUserId
- **HTTP**: `GET /companies/{companyId}/users/{userId}` (Default (balanceplatform-api-test))
- **Notes**: Returns user details for the `userId` and the `companyId` identified in the path. To make this request, your API credential must have the following role : * Management API—Users read and write
- **Signature**: `GetCompaniesCompanyIdUsersUserId(string companyId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CompanyUser`
- **Error**: `SdkException<GetCompaniesCompanyIdUsersUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchCompaniesCompanyIdUsersUserId
- **HTTP**: `PATCH /companies/{companyId}/users/{userId}` (Default (balanceplatform-api-test))
- **Notes**: Updates user details for the `userId` and the `companyId` identified in the path. To make this request, your API credential must have the following role : * Management API—Users read and write
- **Signature**: `PatchCompaniesCompanyIdUsersUserId(string companyId, string userId, UpdateCompanyUserRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CompanyUser`
- **Error**: `SdkException<PatchCompaniesCompanyIdUsersUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdUsers
- **HTTP**: `POST /companies/{companyId}/users` (Default (balanceplatform-api-test))
- **Notes**: Creates the user for the `companyId` identified in the path. To make this request, your API credential must have the following role : * Management API—Users read and write
- **Signature**: `PostCompaniesCompanyIdUsers(string companyId, CreateCompanyUserRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateCompanyUserResponse`
- **Error**: `SdkException<PostCompaniesCompanyIdUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
