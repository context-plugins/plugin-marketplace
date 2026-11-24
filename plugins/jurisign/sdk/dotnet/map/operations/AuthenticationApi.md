<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthenticationApi — operations

Accessor: `client.AuthenticationApi` · Source: `src/JuriSign/Api/AuthenticationApi.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateSandboxToken

- **Signature**: `CreateSandboxToken(CreateSandboxTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AuthSandboxTokenResponse`
- **Error**: `ApiException<CreateSandboxTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [403, 429] · `TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateSandboxTokenRequest` | `src/JuriSign/Requests/AuthenticationApi/CreateSandboxTokenRequest.cs` |
| `AuthSandboxTokenRequest` | `src/JuriSign/Models/AuthSandboxTokenRequest.cs` |
| `AuthSandboxTokenResponse` | `src/JuriSign/Models/AuthSandboxTokenResponse.cs` |
| `CreateSandboxTokenError` | `src/JuriSign/Errors/CreateSandboxTokenError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `ValidationError1` | `src/JuriSign/Models/ValidationError1.cs` |

### CreateToken

- **Signature**: `CreateToken(CreateTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AuthTokenResponse`
- **Error**: `ApiException<CreateTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [403, 429] · `TryGetValidationError1([NotNullWhen(true)] out ValidationError1? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTokenRequest` | `src/JuriSign/Requests/AuthenticationApi/CreateTokenRequest.cs` |
| `AuthTokenRequest` | `src/JuriSign/Models/AuthTokenRequest.cs` |
| `AuthTokenResponse` | `src/JuriSign/Models/AuthTokenResponse.cs` |
| `CreateTokenError` | `src/JuriSign/Errors/CreateTokenError.cs` |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `ValidationError1` | `src/JuriSign/Models/ValidationError1.cs` |

### GetStatus

- **Signature**: `GetStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ResponseModel`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `ResponseModel` | `src/JuriSign/Models/ResponseModel.cs` |

### RevokeToken

- **Auth**: `options.BearerAuth`
- **Signature**: `RevokeToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `MessageResponse`
- **Error**: `ApiException<RevokeTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetMessageResponse([NotNullWhen(true)] out MessageResponse? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MessageResponse` | `src/JuriSign/Models/MessageResponse.cs` |
| `RevokeTokenError` | `src/JuriSign/Errors/RevokeTokenError.cs` |

