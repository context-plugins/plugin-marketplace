<!-- Generated file — do not edit; regenerated with the SDK. -->

# Oauth — operations

Accessor: `client.Oauth` · Source: `Api/Oauth.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Authorize

- **Signature**: `Authorize(string clientId, string redirectUri, ResponseType responseType, string state, Realm2? realm, string? scope = "user.view", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `realm` — nullable, no default → **must pass explicitly**
  - defaults: `scope` = `"user.view"`
- **Query params (wire ← C#)**: `client_id` ← `clientId`, `redirect_uri` ← `redirectUri`, `response_type` ← `responseType`, `state` ← `state`, `realm` ← `realm`, `scope` ← `scope`
- **Returns**: `void` (Task)
- **Error**: `SdkException<AuthorizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ResponseType` | `Models/Enums/ResponseType.cs` |
| `Realm2` | `Models/Enums/Realm2.cs` |
| `AuthorizeError` | `Errors/AuthorizeError.cs` |

### CreateAccessToken

- **Signature**: `CreateAccessToken(string clientId, GrantType grantType, string? clientSecret, string? code, Realm3? realm, Expires? expires, string? refreshToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`clientSecret` … `refreshToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Returns**: `OauthAccessTokenResponse`
- **Error**: `SdkException<CreateAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GrantType` | `Models/Enums/GrantType.cs` |
| `Realm3` | `Models/Enums/Realm3.cs` |
| `Expires` | `Models/Enums/Expires.cs` |
| `OauthAccessTokenResponse` | `Models/OauthAccessTokenResponse.cs` |
| `CreateAccessTokenError` | `Errors/CreateAccessTokenError.cs` |

