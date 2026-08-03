# MaxioGateway — operations

Accessor: `client.MaxioGateway` · Source: `Api/MaxioGateway.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RequestAccessToken
- **HTTP**: `POST /oauth/token` (Oauth)
- **Notes**: Exchanges your connector's OAuth 2.0 client credentials for a bearer access token. Authenticate with HTTP Basic auth (`client_id` as the username, `client_secret` as the password) or send `client_id` and `client_secret` in the form body. Then send the returned `access_token` as `Authorization: Bearer &lt;access_token&gt;` on every gateway request. The client-credentials grant does not issue a refresh token — when the token expires, request a new one with the same credentials. This endpoint is available only for connectors configured for OAuth2. It lives at your connector's root host (`https://{connector}.api.maxio.com/oauth/token`), not under the `/api/v1/billing` base path.
- **Signature**: `RequestAccessToken(MaxioGatewayOauthTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `MaxioGatewayOauthAccessToken`
- **Error**: `SdkException<RequestAccessTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetMaxioGatewayOauthError(out MaxioGatewayOauthError)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
