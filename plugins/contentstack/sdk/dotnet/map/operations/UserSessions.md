<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserSessions — operations

Accessor: `client.UserSessions` · Source: `src/Contentstack/Api/UserSessions.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### LoginUser

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Signature**: `LoginUser(LoginUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `LoginResponse`
- **Error**: `ApiException<LoginUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LoginUserRequest` | `src/Contentstack/Requests/UserSessions/LoginUserRequest.cs` |
| `LoginRequest` | `src/Contentstack/Models/LoginRequest.cs` |
| `LoginResponse` | `src/Contentstack/Models/LoginResponse.cs` |
| `LoginUserError` | `src/Contentstack/Errors/LoginUserError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

### LogoutUser

- **Server group**: `DefaultContentstackEnvironmentsApi`
- **Auth**: `options.AuthtokenAuth` OR `options.ManagementTokenAuth`
- **Signature**: `LogoutUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<LogoutUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError2([NotNullWhen(true)] out Error2? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LogoutUserError` | `src/Contentstack/Errors/LogoutUserError.cs` |
| `Error2` | `src/Contentstack/Models/Error2.cs` |

