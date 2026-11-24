<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Divvy/Api/Users.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUser

- **Signature**: `CreateUser(CreateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `UserResponseDto`
- **Error**: `ApiException<CreateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUserRequest` | `src/Divvy/Requests/Users/CreateUserRequest.cs` |
| `CreateUserRequestDto` | `src/Divvy/Models/CreateUserRequestDto.cs` |
| `UserResponseDto` | `src/Divvy/Models/UserResponseDto.cs` |
| `CreateUserError` | `src/Divvy/Errors/CreateUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### DeleteUser

- **Signature**: `DeleteUser(DeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUserRequest` | `src/Divvy/Requests/Users/DeleteUserRequest.cs` |
| `DeleteUserError` | `src/Divvy/Errors/DeleteUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetCurrentUser

- **Signature**: `GetCurrentUser(GetCurrentUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UserResponseDto`
- **Error**: `ApiException<GetCurrentUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCurrentUserRequest` | `src/Divvy/Requests/Users/GetCurrentUserRequest.cs` |
| `UserResponseDto` | `src/Divvy/Models/UserResponseDto.cs` |
| `GetCurrentUserError` | `src/Divvy/Errors/GetCurrentUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### GetUser

- **Signature**: `GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `UserResponseDto`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserRequest` | `src/Divvy/Requests/Users/GetUserRequest.cs` |
| `UserResponseDto` | `src/Divvy/Models/UserResponseDto.cs` |
| `GetUserError` | `src/Divvy/Errors/GetUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### ListUsers

- **Signature**: `ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `max` ← `Max`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoUserResponseDto`
- **Error**: `ApiException<ListUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUsersRequest` | `src/Divvy/Requests/Users/ListUsersRequest.cs` |
| `PaginationResponseDtoUserResponseDto` | `src/Divvy/Models/PaginationResponseDtoUserResponseDto.cs` |
| `ListUsersError` | `src/Divvy/Errors/ListUsersError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

### UpdateUser

- **Signature**: `UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `UserResponseDto`
- **Error**: `ApiException<UpdateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserRequest` | `src/Divvy/Requests/Users/UpdateUserRequest.cs` |
| `UpdateUserRequestDto` | `src/Divvy/Models/UpdateUserRequestDto.cs` |
| `UserResponseDto` | `src/Divvy/Models/UserResponseDto.cs` |
| `UpdateUserError` | `src/Divvy/Errors/UpdateUserError.cs` |
| `BdcError` | `src/Divvy/Models/BdcError.cs` |

