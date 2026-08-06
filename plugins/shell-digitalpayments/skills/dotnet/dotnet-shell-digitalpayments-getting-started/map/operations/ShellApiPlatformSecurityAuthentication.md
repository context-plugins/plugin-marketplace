# ShellApiPlatformSecurityAuthentication — operations

Accessor: `client.ShellApiPlatformSecurityAuthentication` · Source: `Api/ShellApiPlatformSecurityAuthentication.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### OauthTokenPost
- **HTTP**: `POST /oauth/token` (Shell (api-test))
- **Notes**: To obtain APIGEE access token
- **Signature**: `OauthTokenPost(string grantType = "client_credentials", string clientId = "SOFflRakNlwnWlxfOXQ4GHDVyqGawuKA", string clientSecret = "cRnWgw7gACqM3gVS", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `grantType` = "client_credentials", `clientId` = "SOFflRakNlwnWlxfOXQ4GHDVyqGawuKA", `clientSecret` = "cRnWgw7gACqM3gVS", `requestOptions` = null
- **Query params (wire ← C#)**: `grant_type` ← `grantType`, `client_id` ← `clientId`, `client_secret` ← `clientSecret`
- **Returns**: `AccessTokenResponse`
- **Error**: `SdkException<OauthTokenPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccessTokenError(out AccessTokenError)` [401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
