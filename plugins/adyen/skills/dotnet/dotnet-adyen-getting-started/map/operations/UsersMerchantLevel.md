<!-- Generated file — do not edit; regenerated with the SDK. -->

# UsersMerchantLevel — operations

Accessor: `client.UsersMerchantLevel` · Source: `Api/UsersMerchantLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMerchantsMerchantIdUsers
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdUsers(string merchantId, int? pageNumber, int? pageSize, string? username, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `username` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `username` ← `username`
- **Returns**: `ListMerchantUsersResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListMerchantUsersResponse` | `Models/ListMerchantUsersResponse.cs` |
| `GetMerchantsMerchantIdUsersError` | `Errors/GetMerchantsMerchantIdUsersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdUsersUserId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdUsersUserId(string merchantId, string userId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `User`
- **Error**: `SdkException<GetMerchantsMerchantIdUsersUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `User` | `Models/User.cs` |
| `GetMerchantsMerchantIdUsersUserIdError` | `Errors/GetMerchantsMerchantIdUsersUserIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdUsersUserId
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdUsersUserId(string merchantId, string userId, UpdateMerchantUserRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `User`
- **Error**: `SdkException<PatchMerchantsMerchantIdUsersUserIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMerchantUserRequest` | `Models/UpdateMerchantUserRequest.cs` |
| `User` | `Models/User.cs` |
| `PatchMerchantsMerchantIdUsersUserIdError` | `Errors/PatchMerchantsMerchantIdUsersUserIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdUsers
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdUsers(string merchantId, CreateMerchantUserRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateUserResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMerchantUserRequest` | `Models/CreateMerchantUserRequest.cs` |
| `CreateUserResponse` | `Models/CreateUserResponse.cs` |
| `PostMerchantsMerchantIdUsersError` | `Errors/PostMerchantsMerchantIdUsersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

