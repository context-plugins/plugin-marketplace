# Auth — operations

Accessor: `client.Auth` · Source: `Api/Auth.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ChangePassword
- **HTTP**: `POST /changePassword` (Default (api))
- **Notes**: Okta forgot password
- **Signature**: `ChangePassword(ChangePasswordInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ChangePasswordOutputModel`
- **Error**: `SdkException<ChangePasswordError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageTwo(out ValidationMessageTwo)` [400] · `TryGetInternalServerMessage1(out InternalServerMessage1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ForgotPassword
- **HTTP**: `POST /forgotPassword` (Default (api))
- **Notes**: Okta forgot password
- **Signature**: `ForgotPassword(ForgotPasswordInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ForgotPasswordOutputModel`
- **Error**: `SdkException<ForgotPasswordError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageTwo(out ValidationMessageTwo)` [400] · `TryGetInternalServerMessage1(out InternalServerMessage1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RefreshToken
- **HTTP**: `POST /refreshToken` (Default (api))
- **Notes**: Okta refresh token
- **Signature**: `RefreshToken(RefreshTokenInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RefreshTokenOutputModel`
- **Error**: `SdkException<RefreshTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetRefreshTokenStatus(out RefreshTokenStatus)` [400] · `TryGetInternalServerMessage1(out InternalServerMessage1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SignIn
- **HTTP**: `POST /signIn` (Default (api))
- **Notes**: Okta signin
- **Signature**: `SignIn(SignInInputModel body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SignInOutputModel`
- **Error**: `SdkException<SignInError>` — **Case A (typed)**
- **Error accessors**: `TryGetValidationMessageTwo(out ValidationMessageTwo)` [400] · `TryGetInternalServerMessage1(out InternalServerMessage1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
