<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/DoiT/Api/Users.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelInvite

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `CancelInvite(CancelInviteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `IdempotencyKey`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `CancelInviteResponse`
- **Error**: `ApiException<CancelInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 409, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CancelInviteRequest` | `src/DoiT/Requests/Users/CancelInviteRequest.cs` |
| `CancelInviteResponse` | `src/DoiT/Models/CancelInviteResponse.cs` |
| `CancelInviteError` | `src/DoiT/Errors/CancelInviteError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteUser

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteUser(DeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `DeleteUserResponse`
- **Error**: `ApiException<DeleteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUserRequest` | `src/DoiT/Requests/Users/DeleteUserRequest.cs` |
| `DeleteUserResponse` | `src/DoiT/Models/DeleteUserResponse.cs` |
| `DeleteUserError` | `src/DoiT/Errors/DeleteUserError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### InviteUser

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `InviteUser(InviteUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `InviteResponse`
- **Error**: `ApiException<InviteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InviteUserOperationRequest` | `src/DoiT/Requests/Users/InviteUserOperationRequest.cs` |
| `InviteUserRequest` | `src/DoiT/Models/InviteUserRequest.cs` |
| `InviteResponse` | `src/DoiT/Models/InviteResponse.cs` |
| `InviteUserError` | `src/DoiT/Errors/InviteUserError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ListUsers

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `email` ← `Email`
- **Returns**: `ListUsersResponseBody`
- **Error**: `ApiException<ListUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUsersRequest` | `src/DoiT/Requests/Users/ListUsersRequest.cs` |
| `ListUsersResponseBody` | `src/DoiT/Models/ListUsersResponseBody.cs` |
| `ListUsersError` | `src/DoiT/Errors/ListUsersError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### ResendInvite

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `ResendInvite(ResendInviteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `IdempotencyKey`
- **Query params (wire ← C#)**: `dryRun` ← `DryRun`
- **Returns**: `ResendInviteResponse`
- **Error**: `ApiException<ResendInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ResendInviteRequest` | `src/DoiT/Requests/Users/ResendInviteRequest.cs` |
| `ResendInviteResponse` | `src/DoiT/Models/ResendInviteResponse.cs` |
| `ResendInviteError` | `src/DoiT/Errors/ResendInviteError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateUser

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateUser(UpdateUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Body`
- **Returns**: `UpdateUserResponse`
- **Error**: `ApiException<UpdateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserOperationRequest` | `src/DoiT/Requests/Users/UpdateUserOperationRequest.cs` |
| `UpdateUserRequest` | `src/DoiT/Models/UpdateUserRequest.cs` |
| `UpdateUserResponse` | `src/DoiT/Models/UpdateUserResponse.cs` |
| `UpdateUserError` | `src/DoiT/Errors/UpdateUserError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

