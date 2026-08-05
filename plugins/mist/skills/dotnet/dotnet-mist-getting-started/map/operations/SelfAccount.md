# SelfAccount — operations

Accessor: `client.SelfAccount` · Source: `Api/SelfAccount.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteSelf
- **HTTP**: `DELETE /api/v1/self` (ApiHost (api))
- **Notes**: To delete ones account and every associated with it. The effects: the account would be deleted any orphaned Org (that only has this account as admin) will be deleted along with all data with Org (sites, wlans, devices) will be gone.
- **Signature**: `DeleteSelf(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteSelfError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorDeleteFailed(out ErrorDeleteFailed)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSelf
- **HTTP**: `GET /api/v1/self` (ApiHost (api))
- **Notes**: Get ‘whoami’ and privileges (which org and which sites I have access to)
- **Signature**: `GetSelf(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Admin`
- **Error**: `SdkException<GetSelfError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSelfApiUsage
- **HTTP**: `GET /api/v1/self/usage` (ApiHost (api))
- **Notes**: Get the status of the API usage for the current user or API Token
- **Signature**: `GetSelfApiUsage(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiUsage`
- **Error**: `SdkException<GetSelfApiUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSelfLoginFailures
- **HTTP**: `GET /api/v1/self/login_failures` (ApiHost (api))
- **Notes**: Get a list of failed login attempts across all Orgs for the current admin
- **Signature**: `GetSelfLoginFailures(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `LoginFailures`
- **Error**: `SdkException<GetSelfLoginFailuresError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSelf
- **HTTP**: `PUT /api/v1/self` (ApiHost (api))
- **Notes**: Update Account Information
- **Signature**: `UpdateSelf(Admin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Admin`
- **Error**: `SdkException<UpdateSelfError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSelfEmail
- **HTTP**: `POST /api/v1/self/update` (ApiHost (api))
- **Notes**: Change Email We require the user to verify that they actually own the email address they intend to change it to. After the API call, the user will receive an email to the new email address with a link like https://manage.mist.com/verify/update?expire=:exp_time&amp;email=:admin_email&amp;token=:token Upon clicking the link, the user is provided with a login page to authenticate using existing credentials. After successful login, the email address of the user gets updated Note : The request parameter email can be used by UI to validate that the current session (if any) belongs to the admin or provide a login page (by pre-populating the email on login screen). UI can also use the request parameter expire to validate token expiry.
- **Signature**: `UpdateSelfEmail(EmailString? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdateSelfEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseDetailString(out ResponseDetailString)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VerifySelfEmail
- **HTTP**: `GET /api/v1/self/update/verify/{token}` (ApiHost (api))
- **Notes**: Verify Email change
- **Signature**: `VerifySelfEmail(string token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<VerifySelfEmailError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseDetailString(out ResponseDetailString)` [400] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
