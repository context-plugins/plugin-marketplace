<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorization — operations

Accessor: `client.Authorization` · Source: `src/Leadspace/Api/Authorization.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateAuthorizationToken

- **Signature**: `CreateAuthorizationToken(CreateAuthorizationTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AuthorizationResponse`
- **Error**: `ApiException<CreateAuthorizationTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAuthorizationTokenRequest` | `src/Leadspace/Requests/Authorization/CreateAuthorizationTokenRequest.cs` |
| `AuthorizationRequest` | `src/Leadspace/Models/AuthorizationRequest.cs` |
| `AuthorizationResponse` | `src/Leadspace/Models/AuthorizationResponse.cs` |
| `CreateAuthorizationTokenError` | `src/Leadspace/Errors/CreateAuthorizationTokenError.cs` |

### RefreshAuthorizationToken

- **Signature**: `RefreshAuthorizationToken(RefreshAuthorizationTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AuthorizationResponse`
- **Error**: `ApiException<RefreshAuthorizationTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RefreshAuthorizationTokenRequest` | `src/Leadspace/Requests/Authorization/RefreshAuthorizationTokenRequest.cs` |
| `RefreshRequest` | `src/Leadspace/Models/RefreshRequest.cs` |
| `AuthorizationResponse` | `src/Leadspace/Models/AuthorizationResponse.cs` |
| `RefreshAuthorizationTokenError` | `src/Leadspace/Errors/RefreshAuthorizationTokenError.cs` |

