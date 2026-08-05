# Tokens — operations

Accessor: `client.Tokens` · Source: `Api/Tokens.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetToken
- **HTTP**: `POST /token` (Default1 (sandbox-idp))
- **Notes**: The token endpoint is used to obtain tokens during authorization or to refresh tokens without having to go through authorization again. In each successful token response, you will receive a new `id_token` and a new `refresh_token`. &gt; ⚠️ Please note! &gt; &gt; Use the correct schema (detailed below) for the type of token request you're making. The initial token request and the refresh token requests require different security schemas and parameters. Obtain tokens To obtain the initial set of tokens or to reauthorize, you will need the following: `grant_type` must be set to `authorization_code`. `redirect_uri` must be the same as your app's registered `redirect_uri`. `code` is the authorization code from the end-user's authentication flow. See: Get authorization code . Security : Include Basic Auth in the header of the call. Select "Basic Auth" in Try it and use your `client_id` and `client_secret` as username &amp; password. Refresh tokens Refresh token expiration times are set by the provider. `grant_type` must be set to `refresh_token`. `refresh_token` must be set to the refresh token received in the most recent, previous obtain or refresh token call for your end-user. Security : Include your `client_id` and `client_secret` in the body of the request . Remove any information from "Basic Auth" (username and password) in Try it. Responses Token requests return a new set of tokens. If refreshing or reauthorizing tokens, they will replace the tokens from your previous, successful obtain or refresh token call. The `id_token` (JWT) is a short-lived token. It's used as the bearer token for data calls. To ensure data calls are secure, the `id_token` must be renewed regularly. To retrieve a new `id_token`, use the refresh token request. Read more about tokens .
- **Signature**: `GetToken(string redirectUri, string code, string grantType = "authorization_code", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `grantType` = "authorization_code", `requestOptions` = null
- **Query params (wire ← C#)**: `grant_type` ← `grantType`, `redirect_uri` ← `redirectUri`, `code` ← `code`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel(out ErrorResponseModel)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RevokeToken
- **HTTP**: `POST /revoke` (Default1 (sandbox-idp))
- **Notes**: This request revokes tokens granted on behalf of the end-user. Security : Include your `client_id` and `client_secret` in the body of the request . Remove any information from "Basic Auth" (username and password) in Try it.
- **Signature**: `RevokeToken(string? akoyaId, string clientId, string clientSecret, string token, string tokenTypeHint = "refresh_token", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `akoyaId` — nullable, no default → **must pass explicitly**
  - defaults: `tokenTypeHint` = "refresh_token", `requestOptions` = null
- **Query params (wire ← C#)**: `client_id` ← `clientId`, `client_secret` ← `clientSecret`, `token` ← `token`, `token_type_hint` ← `tokenTypeHint`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
