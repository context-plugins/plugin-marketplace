# Admins — operations

Accessor: `client.Admins` · Source: `Api/Admins.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAdminRegistrationInfo
- **HTTP**: `GET /api/v1/register/recaptcha` (ApiHost (api))
- **Notes**: Get Registration Information
- **Signature**: `GetAdminRegistrationInfo(RecaptchaFlavor? recaptchaFlavor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recaptchaFlavor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `recaptcha_flavor` ← `recaptchaFlavor`
- **Returns**: `Recaptcha`
- **Error**: `SdkException<GetAdminRegistrationInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RegisterNewAdmin
- **HTTP**: `POST /api/v1/register` (ApiHost (api))
- **Notes**: Register a new admin and his/her org An email will also be sent to the user with a link to `/verify/register?token={token}` reCAPTCHA Google reCAPTCHA is the choice to prevent bot registration It needs this &amp;lt;script src='https://www.google.com/recaptcha/api.js' &amp;gt;&amp;lt;/script&amp;gt; and this &amp;lt;div&amp;gt; in the desired place &lt;div class="g-recaptcha" data_sitekey="6LdAewsTAAAAAE25XKQhPEQ2FiMTft-WrZXQ5NUd"&gt;&lt;/div&gt; Use GET /api/v1/register/recaptcha to read the current setting. Response example: { "flavor": "google", "required": true, "sitekey": "6LdAewsTAAAAAE25XKQhPEQ2FiMTft-WrZXQ5NUd" } hCaptcha Alternative to reCAPTCHA is hCaptcha to prevent bot registration It needs this script &amp;lt;script src='https://js.hcaptcha.com/1/api.js' async defer &amp;gt;&amp;lt;/script&amp;gt; and this &amp;lt;div&amp;gt; in the desired place &lt;div class="h-recaptcha" data_sitekey="6LdAewsTAAAAAE25XKQhPEQ2FiMTft-WrZXQ5NUd"&gt;&lt;/div&gt; Use GET /api/v1/register/recaptcha?recaptcha_flavor=hcaptcha to read the current setting for hcaptcha with reply. Response example: { "flavor": "hcaptcha", "required": true, "sitekey": "6LdAewsTAAAAAE25XKQhPEQ2FiMTft-WrZXQ5NUd" }"
- **Signature**: `RegisterNewAdmin(AdminInvite? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RegisterNewAdminError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseHttp404(out ResponseHttp404)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VerifyAdminInvite
- **HTTP**: `POST /api/v1/invite/verify/{token}` (ApiHost (api))
- **Notes**: Note : another call to ```GET /api/v1/self``` is required to see the new set of privileges
- **Signature**: `VerifyAdminInvite(string token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<VerifyAdminInviteError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseHttp400(out ResponseHttp400)` [400, 401, 403, 429] · `TryGetResponseDetailString(out ResponseDetailString)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VerifyRegistration
- **HTTP**: `POST /api/v1/register/verify/{token}` (ApiHost (api))
- **Notes**: Verify registration
- **Signature**: `VerifyRegistration(string token, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ResponseVerifyTokenSuccess`
- **Error**: `SdkException<VerifyRegistrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetResponseDetailString(out ResponseDetailString)` [400, 404] · `TryGetResponseHttp400(out ResponseHttp400)` [401, 403, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
