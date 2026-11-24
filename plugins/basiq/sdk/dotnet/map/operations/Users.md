<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Basiq/Api/Users.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateUser

- **Auth**: `options.ServicesToken`
- **Signature**: `CreateUser(CreateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `UserPostResponse`
- **Error**: `ApiException<CreateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsers400Error1([NotNullWhen(true)] out Users400Error1? value)` [400] · `TryGetUsers401Error1([NotNullWhen(true)] out Users401Error1? value)` [401] · `TryGetUsers403Error1([NotNullWhen(true)] out Users403Error1? value)` [403] · `TryGetUsers404Error1([NotNullWhen(true)] out Users404Error1? value)` [404] · `TryGetUsers500Error1([NotNullWhen(true)] out Users500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateUserRequest` | `src/Basiq/Requests/Users/CreateUserRequest.cs` |
| `UsersRequest` | `src/Basiq/Models/UsersRequest.cs` |
| `UserPostResponse` | `src/Basiq/Models/UserPostResponse.cs` |
| `CreateUserError` | `src/Basiq/Errors/CreateUserError.cs` |
| `Users400Error1` | `src/Basiq/Models/Users400Error1.cs` |
| `Users401Error1` | `src/Basiq/Models/Users401Error1.cs` |
| `Users403Error1` | `src/Basiq/Models/Users403Error1.cs` |
| `Users404Error1` | `src/Basiq/Models/Users404Error1.cs` |
| `Users500Error1` | `src/Basiq/Models/Users500Error1.cs` |

### DeleteUser

- **Auth**: `options.ServicesToken`
- **Signature**: `DeleteUser(DeleteUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsers400Error1([NotNullWhen(true)] out Users400Error1? value)` [400] · `TryGetUsers401Error1([NotNullWhen(true)] out Users401Error1? value)` [401] · `TryGetUsers403Error1([NotNullWhen(true)] out Users403Error1? value)` [403] · `TryGetUsers404Error1([NotNullWhen(true)] out Users404Error1? value)` [404] · `TryGetUsers500Error1([NotNullWhen(true)] out Users500Error1? value)` [500] · `TryGetUsers503Error1([NotNullWhen(true)] out Users503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteUserRequest` | `src/Basiq/Requests/Users/DeleteUserRequest.cs` |
| `DeleteUserError` | `src/Basiq/Errors/DeleteUserError.cs` |
| `Users400Error1` | `src/Basiq/Models/Users400Error1.cs` |
| `Users401Error1` | `src/Basiq/Models/Users401Error1.cs` |
| `Users403Error1` | `src/Basiq/Models/Users403Error1.cs` |
| `Users404Error1` | `src/Basiq/Models/Users404Error1.cs` |
| `Users500Error1` | `src/Basiq/Models/Users500Error1.cs` |
| `Users503Error1` | `src/Basiq/Models/Users503Error1.cs` |

### GetUser

- **Auth**: `options.ServicesToken`
- **Signature**: `GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`
- **Returns**: `UserGetResponse`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsers400Error1([NotNullWhen(true)] out Users400Error1? value)` [400] · `TryGetUsers401Error1([NotNullWhen(true)] out Users401Error1? value)` [401] · `TryGetUsers403Error1([NotNullWhen(true)] out Users403Error1? value)` [403] · `TryGetUsers404Error1([NotNullWhen(true)] out Users404Error1? value)` [404] · `TryGetUsers500Error1([NotNullWhen(true)] out Users500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetUserRequest` | `src/Basiq/Requests/Users/GetUserRequest.cs` |
| `UserGetResponse` | `src/Basiq/Models/UserGetResponse.cs` |
| `GetUserError` | `src/Basiq/Errors/GetUserError.cs` |
| `Users400Error1` | `src/Basiq/Models/Users400Error1.cs` |
| `Users401Error1` | `src/Basiq/Models/Users401Error1.cs` |
| `Users403Error1` | `src/Basiq/Models/Users403Error1.cs` |
| `Users404Error1` | `src/Basiq/Models/Users404Error1.cs` |
| `Users500Error1` | `src/Basiq/Models/Users500Error1.cs` |

### UpdateUser

- **Auth**: `options.ServicesToken`
- **Signature**: `UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Body`
- **Returns**: `UserPostResponse`
- **Error**: `ApiException<UpdateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetUsers400Error1([NotNullWhen(true)] out Users400Error1? value)` [400] · `TryGetUsers401Error1([NotNullWhen(true)] out Users401Error1? value)` [401] · `TryGetUsers403Error1([NotNullWhen(true)] out Users403Error1? value)` [403] · `TryGetUsers404Error1([NotNullWhen(true)] out Users404Error1? value)` [404] · `TryGetUsers500Error1([NotNullWhen(true)] out Users500Error1? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserRequest` | `src/Basiq/Requests/Users/UpdateUserRequest.cs` |
| `UsersRequest1` | `src/Basiq/Models/UsersRequest1.cs` |
| `UserPostResponse` | `src/Basiq/Models/UserPostResponse.cs` |
| `UpdateUserError` | `src/Basiq/Errors/UpdateUserError.cs` |
| `Users400Error1` | `src/Basiq/Models/Users400Error1.cs` |
| `Users401Error1` | `src/Basiq/Models/Users401Error1.cs` |
| `Users403Error1` | `src/Basiq/Models/Users403Error1.cs` |
| `Users404Error1` | `src/Basiq/Models/Users404Error1.cs` |
| `Users500Error1` | `src/Basiq/Models/Users500Error1.cs` |

