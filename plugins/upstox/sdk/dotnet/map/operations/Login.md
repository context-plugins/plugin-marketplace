<!-- Generated file — do not edit; regenerated with the SDK. -->

# Login — operations

Accessor: `client.Login` · Source: `src/Upstox/Api/Login.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Authorize

- **Signature**: `Authorize(AuthorizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ClientId`, `RedirectUri`
- **Query params (wire ← C#)**: `client_id` ← `ClientId`, `redirect_uri` ← `RedirectUri`, `state` ← `State`, `scope` ← `Scope`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AuthorizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AuthorizeRequest` | `src/Upstox/Requests/Login/AuthorizeRequest.cs` |
| `AuthorizeError` | `src/Upstox/Errors/AuthorizeError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### InitTokenRequestForIndieUser

- **Signature**: `InitTokenRequestForIndieUser(InitTokenRequestForIndieUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ClientId`, `Body`
- **Returns**: `TokenResponse`
- **Error**: `ApiException<InitTokenRequestForIndieUserError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InitTokenRequestForIndieUserRequest` | `src/Upstox/Requests/Login/InitTokenRequestForIndieUserRequest.cs` |
| `IndieUserTokenRequest` | `src/Upstox/Models/IndieUserTokenRequest.cs` |
| `TokenResponse` | `src/Upstox/Models/TokenResponse.cs` |
| `InitTokenRequestForIndieUserError` | `src/Upstox/Errors/InitTokenRequestForIndieUserError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

### Logout

- **Auth**: `options.Oauth2`
- **Signature**: `Logout(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `LogoutResponse`
- **Error**: `ApiException<LogoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 403, 405, 422, 423, 429, 500] · `TryGetOAuthClientException([NotNullWhen(true)] out OAuthClientException? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LogoutResponse` | `src/Upstox/Models/LogoutResponse.cs` |
| `LogoutError` | `src/Upstox/Errors/LogoutError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |
| `OAuthClientException` | `src/Upstox/Models/OAuthClientException.cs` |

### Token

- **Signature**: `Token(TokenOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Code`, `ClientId`, `ClientSecret`, `RedirectUri`, `GrantType`
- **Returns**: `TokenResponse`
- **Error**: `ApiException<TokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiGatewayErrorResponse([NotNullWhen(true)] out ApiGatewayErrorResponse? value)` [400, 401, 403, 405, 422, 423, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TokenOperationRequest` | `src/Upstox/Requests/Login/TokenOperationRequest.cs` |
| `TokenResponse` | `src/Upstox/Models/TokenResponse.cs` |
| `TokenError` | `src/Upstox/Errors/TokenError.cs` |
| `ApiGatewayErrorResponse` | `src/Upstox/Models/ApiGatewayErrorResponse.cs` |

