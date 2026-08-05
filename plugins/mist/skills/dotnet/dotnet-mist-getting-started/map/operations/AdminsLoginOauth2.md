# AdminsLoginOauth2 — operations

Accessor: `client.AdminsLoginOauth2` · Source: `Api/AdminsLoginOauth2.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetOauth2AuthorizationUrlForLogin
- **HTTP**: `GET /api/v1/login/oauth/{provider}` (ApiHost (api))
- **Notes**: Obtain Authorization URL for Login
- **Signature**: `GetOauth2AuthorizationUrlForLogin(string provider, string? forward, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `forward` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `forward` ← `forward`
- **Returns**: `ResponseLoginOauthUrl`
- **Error**: `SdkException<GetOauth2AuthorizationUrlForLoginError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### LoginOauth2
- **HTTP**: `POST /api/v1/login/oauth/{provider}` (ApiHost (api))
- **Notes**: Login via OAuth2
- **Signature**: `LoginOauth2(string provider, CodeString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<LoginOauth2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnlinkOauth2Provider
- **HTTP**: `DELETE /api/v1/login/oauth/{provider}` (ApiHost (api))
- **Notes**: Unlink OAuth2 Provider
- **Signature**: `UnlinkOauth2Provider(string provider, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UnlinkOauth2ProviderError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
