# SessionAuthentication — operations

Accessor: `client.SessionAuthentication` · Source: `Api/SessionAuthentication.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostAuthCertificate
- **HTTP**: `POST /auth/certificate` (Default25 (softposconfig-test))
- **Notes**: Establishes a secure communication session between the Mobile SDK and the Adyen payments platform, through mutual authentication. The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.
- **Signature**: `PostAuthCertificate(string? xApiKey, CertificateLoadingRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xApiKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CertificateLoadingResponse`
- **Error**: `SdkException<PostAuthCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostSessions2
- **HTTP**: `POST /sessions` (Default17 (test))
- **Notes**: Creates a session token that is required to integrate components . The response contains encrypted session data. The front end then uses the session data to make the required server-side calls for the component. To create a token, you must meet specific requirements. These requirements vary depending on the type of component. For more information, see the documentation for Onboarding and Platform Experience components.
- **Signature**: `PostSessions2(AuthenticationSessionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `AuthenticationSessionResponse`
- **Error**: `SdkException<PostSessions2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
