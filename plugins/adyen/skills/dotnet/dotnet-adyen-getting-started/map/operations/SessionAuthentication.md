# SessionAuthentication — operations

Accessor: `client.SessionAuthentication` · Source: `Api/SessionAuthentication.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostAuthCertificate
- **HTTP**: `POST /auth/certificate` (Default (balanceplatform-api-test))
- **Notes**: Establishes a secure communication session between the Mobile SDK and the Adyen payments platform, through mutual authentication. The request sends a setup token that identifies the SDK and the device. The response returns a session token that the SDK can use to authenticate responses received from the Adyen payments platform.
- **Signature**: `PostAuthCertificate(string? xApiKey, CertificateLoadingRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xApiKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateSessionResponse`
- **Error**: `SdkException<PostAuthCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetAuthCertificate400Error1(out AuthCertificate400Error1)` [400] · `TryGetAuthCertificate401Error1(out AuthCertificate401Error1)` [401] · `TryGetAuthCertificate422Error1(out AuthCertificate422Error1)` [422] · `TryGetAuthCertificate500Error1(out AuthCertificate500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
