<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Bill/Api/Users.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUser

- **Signature**: `CreateUser(CreateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `UserResponseDto`
- **Error**: `ApiException<CreateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUserRequest` | `src/Bill/Requests/Users/CreateUserRequest.cs` |
| `CreateUserRequestDto` | `src/Bill/Models/CreateUserRequestDto.cs` |
| `UserResponseDto` | `src/Bill/Models/UserResponseDto.cs` |
| `CreateUserError` | `src/Bill/Errors/CreateUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### DeleteUser

- **Signature**: `DeleteUser(DeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUserRequest` | `src/Bill/Requests/Users/DeleteUserRequest.cs` |
| `DeleteUserError` | `src/Bill/Errors/DeleteUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetCurrentUser

- **Signature**: `GetCurrentUser(GetCurrentUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UserResponseDto`
- **Error**: `ApiException<GetCurrentUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCurrentUserRequest` | `src/Bill/Requests/Users/GetCurrentUserRequest.cs` |
| `UserResponseDto` | `src/Bill/Models/UserResponseDto.cs` |
| `GetCurrentUserError` | `src/Bill/Errors/GetCurrentUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### GetUser

- **Signature**: `GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `UserResponseDto`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserRequest` | `src/Bill/Requests/Users/GetUserRequest.cs` |
| `UserResponseDto` | `src/Bill/Models/UserResponseDto.cs` |
| `GetUserError` | `src/Bill/Errors/GetUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### ListUsers

- **Signature**: `ListUsers(ListUsersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `nextPage` ← `NextPage`, `prevPage` ← `PrevPage`, `max` ← `Max`, `filters` ← `Filters`
- **Returns**: `PaginationResponseDtoUserResponseDto`
- **Error**: `ApiException<ListUsersError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListUsersRequest` | `src/Bill/Requests/Users/ListUsersRequest.cs` |
| `PaginationResponseDtoUserResponseDto` | `src/Bill/Models/PaginationResponseDtoUserResponseDto.cs` |
| `ListUsersError` | `src/Bill/Errors/ListUsersError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

### UpdateUser

- **Signature**: `UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `UserResponseDto`
- **Error**: `ApiException<UpdateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetListOfBdcError([NotNullWhen(true)] out IReadOnlyList<BdcError>? value)` [4XX, 5XX] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserRequest` | `src/Bill/Requests/Users/UpdateUserRequest.cs` |
| `UpdateUserRequestDto` | `src/Bill/Models/UpdateUserRequestDto.cs` |
| `UserResponseDto` | `src/Bill/Models/UserResponseDto.cs` |
| `UpdateUserError` | `src/Bill/Errors/UpdateUserError.cs` |
| `BdcError` | `src/Bill/Models/BdcError.cs` |

