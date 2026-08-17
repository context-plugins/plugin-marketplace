# UsersMerchantLevel — operations

Accessor: `client.UsersMerchantLevel` · Source: `Api/UsersMerchantLevel.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantIdUsers
- **HTTP**: `GET /merchants/{merchantId}/users` (Default9 (management-test))
- **Notes**: Returns a list of users associated with the `merchantId` specified in the path. To make this request, your API credential must have the following role : * Management API—Users read and write
- **Signature**: `GetMerchantsMerchantIdUsers(string merchantId, int? pageNumber, int? pageSize, string? username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `username` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `username` ← `username`
- **Returns**: `ListMerchantUsersResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdUsersUserId
- **HTTP**: `GET /merchants/{merchantId}/users/{userId}` (Default9 (management-test))
- **Notes**: Returns user details for the `userId` and the `merchantId` specified in the path. To make this request, your API credential must have the following role : * Management API—Users read and write
- **Signature**: `GetMerchantsMerchantIdUsersUserId(string merchantId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<GetMerchantsMerchantIdUsersUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdUsersUserId
- **HTTP**: `PATCH /merchants/{merchantId}/users/{userId}` (Default9 (management-test))
- **Notes**: Updates user details for the `userId` and the `merchantId` specified in the path. To make this request, your API credential must have the following role : * Management API—Users read and write
- **Signature**: `PatchMerchantsMerchantIdUsersUserId(string merchantId, string userId, UpdateMerchantUserRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `User`
- **Error**: `SdkException<PatchMerchantsMerchantIdUsersUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdUsers
- **HTTP**: `POST /merchants/{merchantId}/users` (Default9 (management-test))
- **Notes**: Creates a user for the `merchantId` specified in the path. To make this request, your API credential must have the following role : * Management API—Users read and write
- **Signature**: `PostMerchantsMerchantIdUsers(string merchantId, CreateMerchantUserRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateUserResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
