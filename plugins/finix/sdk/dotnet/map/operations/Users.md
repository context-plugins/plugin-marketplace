<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/FinixApiReference/Api/Users.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetUser

- **Auth**: `options.BasicAuth`
- **Signature**: `GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `User`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserRequest` | `src/FinixApiReference/Requests/Users/GetUserRequest.cs` |
| `User` | `src/FinixApiReference/Models/User.cs` |
| `GetUserError` | `src/FinixApiReference/Errors/GetUserError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### ListUsers

- **Auth**: `options.BasicAuth`
- **Signature**: `ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `created_at.gte` ← `CreatedAtGte`, `created_at.lte` ← `CreatedAtLte`, `limit` ← `Limit`, `tags.key` ← `TagsKey`, `tags.value` ← `TagsValue`, `updated_at.gte` ← `UpdatedAtGte`, `updated_at.lte` ← `UpdatedAtLte`
- **Returns**: `ListUsers`
- **Error**: `ApiException<ListUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [401, 403, 406, 422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUsersRequest` | `src/FinixApiReference/Requests/Users/ListUsersRequest.cs` |
| `ListUsers` | `src/FinixApiReference/Models/ListUsers.cs` |
| `ListUsersError` | `src/FinixApiReference/Errors/ListUsersError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

### UpdateUser

- **Auth**: `options.BasicAuth`
- **Signature**: `UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `User`
- **Error**: `ApiException<UpdateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetGenericError([NotNullWhen(true)] out GenericError? value)` [400, 401, 403, 404, 406] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserRequest` | `src/FinixApiReference/Requests/Users/UpdateUserRequest.cs` |
| `UsersRequest` | `src/FinixApiReference/Models/AnyOf/UsersRequest.cs` |
| `User` | `src/FinixApiReference/Models/User.cs` |
| `UpdateUserError` | `src/FinixApiReference/Errors/UpdateUserError.cs` |
| `GenericError` | `src/FinixApiReference/Models/GenericError.cs` |

