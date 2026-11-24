<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tokens — operations

Accessor: `client.Tokens` · Source: `src/Beehiiv/Api/Tokens.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Introspect

- **Server group**: `DefaultOAuth2AuthorizationsApi`
- **Signature**: `Introspect(IntrospectRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IntrospectionResponse`
- **Error**: `ApiException<IntrospectError>` — **Case A (typed)**
- **Error accessors**: `TryGetOAuthError([NotNullWhen(true)] out OAuthError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IntrospectRequest` | `src/Beehiiv/Requests/Tokens/IntrospectRequest.cs` |
| `OauthIntrospectRequest` | `src/Beehiiv/Models/OauthIntrospectRequest.cs` |
| `IntrospectionResponse` | `src/Beehiiv/Models/IntrospectionResponse.cs` |
| `IntrospectError` | `src/Beehiiv/Errors/IntrospectError.cs` |
| `OAuthError` | `src/Beehiiv/Models/OAuthError.cs` |

### Revoke

- **Server group**: `DefaultOAuth2AuthorizationsApi`
- **Signature**: `Revoke(RevokeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<RevokeError>` — **Case A (typed)**
- **Error accessors**: `TryGetOAuthError([NotNullWhen(true)] out OAuthError? value)` [401, 403] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RevokeRequest` | `src/Beehiiv/Requests/Tokens/RevokeRequest.cs` |
| `OauthRevokeRequest` | `src/Beehiiv/Models/OauthRevokeRequest.cs` |
| `RevokeError` | `src/Beehiiv/Errors/RevokeError.cs` |
| `OAuthError` | `src/Beehiiv/Models/OAuthError.cs` |

### Token

- **Server group**: `DefaultOAuth2AuthorizationsApi`
- **Signature**: `Token(TokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `TokenResponse`
- **Error**: `ApiException<TokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetOAuthError([NotNullWhen(true)] out OAuthError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TokenRequest` | `src/Beehiiv/Requests/Tokens/TokenRequest.cs` |
| `OauthTokenRequest` | `src/Beehiiv/Models/OauthTokenRequest.cs` |
| `TokenResponse` | `src/Beehiiv/Models/TokenResponse.cs` |
| `TokenError` | `src/Beehiiv/Errors/TokenError.cs` |
| `OAuthError` | `src/Beehiiv/Models/OAuthError.cs` |

### TokenInfo

- **Server group**: `DefaultOAuth2AuthorizationsApi`
- **Signature**: `TokenInfo(TokenInfoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Authorization`
- **Returns**: `TokenInfoResponse`
- **Error**: `ApiException<TokenInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetOAuthError([NotNullWhen(true)] out OAuthError? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TokenInfoRequest` | `src/Beehiiv/Requests/Tokens/TokenInfoRequest.cs` |
| `TokenInfoResponse` | `src/Beehiiv/Models/TokenInfoResponse.cs` |
| `TokenInfoError` | `src/Beehiiv/Errors/TokenInfoError.cs` |
| `OAuthError` | `src/Beehiiv/Models/OAuthError.cs` |

