<!-- Generated file — do not edit; regenerated with the SDK. -->

# SessionAuthentication — operations

Accessor: `client.SessionAuthentication` · Source: `Api/SessionAuthentication.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostAuthCertificate
- **Server group**: `Default25`
- **Signature**: `PostAuthCertificate(string? xApiKey, CertificateLoadingRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xApiKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CertificateLoadingResponse`
- **Error**: `SdkException<PostAuthCertificateError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CertificateLoadingRequest` | `Models/CertificateLoadingRequest.cs` |
| `CertificateLoadingResponse` | `Models/CertificateLoadingResponse.cs` |
| `PostAuthCertificateError` | `Errors/PostAuthCertificateError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostSessions2
- **Server group**: `Default17`
- **Signature**: `PostSessions2(AuthenticationSessionRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AuthenticationSessionResponse`
- **Error**: `SdkException<PostSessions2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AuthenticationSessionRequest` | `Models/AuthenticationSessionRequest.cs` |
| `AuthenticationSessionResponse` | `Models/AuthenticationSessionResponse.cs` |
| `PostSessions2Error` | `Errors/PostSessions2Error.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

