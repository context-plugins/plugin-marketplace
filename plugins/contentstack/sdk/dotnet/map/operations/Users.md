<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Contentstack/Api/Users.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetUser

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `GetUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `User`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `User` | `src/Contentstack/Models/User.cs` |
| `GetUserError` | `src/Contentstack/Errors/GetUserError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### UpdateUser

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `UpdateUser(UpdateUserOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `User`
- **Error**: `ApiException<UpdateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserOperationRequest` | `src/Contentstack/Requests/Users/UpdateUserOperationRequest.cs` |
| `UpdateUserRequest` | `src/Contentstack/Models/UpdateUserRequest.cs` |
| `User` | `src/Contentstack/Models/User.cs` |
| `UpdateUserError` | `src/Contentstack/Errors/UpdateUserError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

