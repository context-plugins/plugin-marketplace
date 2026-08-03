# Oauth — operations

Accessor: `client.Oauth` · Source: `Api/Oauth.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Authorize
- **HTTP**: `GET /v2/oauth/authorize` (Default (api))
- **Notes**: This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.
- **Signature**: `Authorize(string clientId, string redirectUri, ResponseType responseType, string state, Realm2? realm, string? scope = "user.view", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `realm` — nullable, no default → **must pass explicitly**
  - defaults: `scope` = "user.view", `requestOptions` = null
- **Query params (wire ← C#)**: `client_id` ← `clientId`, `redirect_uri` ← `redirectUri`, `response_type` ← `responseType`, `state` ← `state`, `realm` ← `realm`, `scope` ← `scope`
- **Returns**: `void` (Task)
- **Error**: `SdkException<AuthorizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateAccessToken
- **HTTP**: `POST /v2/oauth/access_token` (Default (api))
- **Notes**: This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.
- **Signature**: `CreateAccessToken(string clientId, GrantType grantType, string? clientSecret, string? code, Realm3? realm, Expires? expires, string? refreshToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`clientSecret` … `refreshToken`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `client_id` ← `clientId`, `grant_type` ← `grantType`, `client_secret` ← `clientSecret`, `code` ← `code`, `realm` ← `realm`, `expires` ← `expires`, `refresh_token` ← `refreshToken`
- **Returns**: `OauthAccessTokenResponse`
- **Error**: `SdkException<CreateAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
