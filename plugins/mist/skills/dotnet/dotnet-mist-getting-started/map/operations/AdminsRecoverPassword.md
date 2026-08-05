# AdminsRecoverPassword — operations

Accessor: `client.AdminsRecoverPassword` · Source: `Api/AdminsRecoverPassword.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### RecoverPassword
- **HTTP**: `POST /api/v1/recover` (ApiHost (api))
- **Notes**: Recover Password An email will also be sent to the user with a link to https://manage.mist.com/verify/recover?token=:token
- **Signature**: `RecoverPassword(Recover? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RecoverPasswordError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VerifyRecoverPassword
- **HTTP**: `POST /api/v1/recover/verify/{token}` (ApiHost (api))
- **Notes**: Verify Recover Password With correct verification, the user will be authenticated. UI can then prompt for new password
- **Signature**: `VerifyRecoverPassword(string token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<VerifyRecoverPasswordError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
