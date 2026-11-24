<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.UserApi` · Source: `src/CircleCi/Api/UserApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCollaborations

- **Auth**: `options.ApiToken`
- **Signature**: `GetCollaborations(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<Collaboration>`
- **Error**: `ApiException<GetCollaborationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Collaboration` | `src/CircleCi/Models/Collaboration.cs` |
| `GetCollaborationsError` | `src/CircleCi/Errors/GetCollaborationsError.cs` |
| `ErrorResponseModel` | `src/CircleCi/Models/ErrorResponseModel.cs` |

### GetCurrentUser

- **Auth**: `options.ApiToken`
- **Signature**: `GetCurrentUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `User`
- **Error**: `ApiException<GetCurrentUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `User` | `src/CircleCi/Models/User.cs` |
| `GetCurrentUserError` | `src/CircleCi/Errors/GetCurrentUserError.cs` |

