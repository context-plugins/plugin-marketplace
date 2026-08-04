# Oauth — operations

Accessor: `client.Oauth` · Source: `Api/Oauth.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ObtainToken
- **HTTP**: `POST /oauth2/token` (Default (connect))
- **Notes**: Returns an OAuth access token and refresh token using the `authorization_code` or `refresh_token` grant type. When `grant_type` is `authorization_code`: - With the code flow , provide `code`, `client_id`, and `client_secret`. - With the PKCE flow , provide `code`, `client_id`, and `code_verifier`. When `grant_type` is `refresh_token`: - With the code flow, provide `refresh_token`, `client_id`, and `client_secret`. The response returns the same refresh token provided in the request. - With the PKCE flow, provide `refresh_token` and `client_id`. The response returns a new refresh token. You can use the `scopes` parameter to limit the set of permissions authorized by the access token. You can use the `short_lived` parameter to create an access token that expires in 24 hours. __Important:__ OAuth tokens should be encrypted and stored on a secure server. Application clients should never interact directly with OAuth tokens.
- **Signature**: `ObtainToken(ObtainTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ObtainTokenResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveTokenStatus
- **HTTP**: `POST /oauth2/token/status` (Default (connect))
- **Notes**: Returns information about an OAuth access token or an application’s personal access token . Add the access token to the Authorization header of the request. __Important:__ The `Authorization` header you provide to this endpoint must have the following format: Authorization: Bearer ACCESS_TOKEN where `ACCESS_TOKEN` is a valid production authorization credential . If the access token is expired or not a valid access token, the endpoint returns an `UNAUTHORIZED` error.
- **Signature**: `RetrieveTokenStatus(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveTokenStatusResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RevokeToken
- **HTTP**: `POST /oauth2/revoke` (Default (connect))
- **Notes**: Revokes an access token generated with the OAuth flow. If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. __Important:__ The `Authorization` header for this endpoint must have the following format: Authorization: Client APPLICATION_SECRET Replace `APPLICATION_SECRET` with the application secret on the OAuth page for your application in the Developer Dashboard.
- **Signature**: `RevokeToken(RevokeTokenRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RevokeTokenResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
