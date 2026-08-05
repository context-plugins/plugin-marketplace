# AdminsLogin — operations

Accessor: `client.AdminsLogin` · Source: `Api/AdminsLogin.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Login
- **HTTP**: `POST /api/v1/login` (ApiHost (api))
- **Notes**: Log in with email/password. When 2FA is enabled, there are two ways to login: 1. login with two_factor token (with Google Authenticator, etc) 2. login with email/password, generate the token, and use /login/two_factor with the token
- **Signature**: `Login(Login? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ResponseLoginSuccess`
- **Error**: `SdkException<LoginError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseLoginFailure(out ResponseLoginFailure)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TwoFactor
- **HTTP**: `POST /api/v1/login/two_factor` (ApiHost (api))
- **Notes**: Send 2FA Code
- **Signature**: `TwoFactor(TwoFactorString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<TwoFactorError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 403, 429] · `TryGetNoContent(out RawError)` [401, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
