<!-- Generated file — do not edit; regenerated with the SDK. -->

# Authorization — operations

Accessor: `client.Authorization` · Source: `src/DopeSecurity/Api/Authorization.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GenerateAccessToken

- **Signature**: `GenerateAccessToken(GenerateAccessTokenRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PartnerOauthTokenResponse`
- **Error**: `ApiException<GenerateAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetOAuthError([NotNullWhen(true)] out OAuthError? value)` [400, 401, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateAccessTokenRequest` | `src/DopeSecurity/Requests/Authorization/GenerateAccessTokenRequest.cs` |
| `PartnerOauthTokenRequest` | `src/DopeSecurity/Models/PartnerOauthTokenRequest.cs` |
| `PartnerOauthTokenResponse` | `src/DopeSecurity/Models/PartnerOauthTokenResponse.cs` |
| `GenerateAccessTokenError` | `src/DopeSecurity/Errors/GenerateAccessTokenError.cs` |
| `OAuthError` | `src/DopeSecurity/Models/OAuthError.cs` |

