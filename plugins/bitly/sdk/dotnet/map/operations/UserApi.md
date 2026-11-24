<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.UserApi` · Source: `src/Bitly/Api/UserApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPlatformLimits

- **Auth**: `options.BearerAuth`
- **Signature**: `GetPlatformLimits(GetPlatformLimitsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `path` ← `Path`
- **Returns**: `PlatformLimits`
- **Error**: `ApiException<GetPlatformLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlatformLimitsRequest` | `src/Bitly/Requests/UserApi/GetPlatformLimitsRequest.cs` |
| `PlatformLimits` | `src/Bitly/Models/PlatformLimits.cs` |
| `GetPlatformLimitsError` | `src/Bitly/Errors/GetPlatformLimitsError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### GetUser

- **Auth**: `options.BearerAuth`
- **Signature**: `GetUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `User`
- **Error**: `ApiException<GetUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [403, 404, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `User` | `src/Bitly/Models/User.cs` |
| `GetUserError` | `src/Bitly/Errors/GetUserError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

### UpdateUser

- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateUser(UpdateUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `User`
- **Error**: `ApiException<UpdateUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 403, 404, 422, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateUserRequest` | `src/Bitly/Requests/UserApi/UpdateUserRequest.cs` |
| `UserUpdate` | `src/Bitly/Models/UserUpdate.cs` |
| `User` | `src/Bitly/Models/User.cs` |
| `UpdateUserError` | `src/Bitly/Errors/UpdateUserError.cs` |
| `Error` | `src/Bitly/Models/Error.cs` |

