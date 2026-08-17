# IDealProfiles — operations

Accessor: `client.IDealProfiles` · Source: `Api/IDealProfiles.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostIdealProfileAuthLink
- **HTTP**: `POST /ideal/profile/auth-link` (Default20 (balanceplatform-api-test))
- **Notes**: Manage an already registered iDEAL profile. Generates a redirection URL to manage the iDEAL profile linked to the account holder from the request.
- **Signature**: `PostIdealProfileAuthLink(IdealAuthLinkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IdealAuthLinkResponse`
- **Error**: `SdkException<PostIdealProfileAuthLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostIdealProfileAuthenticate
- **HTTP**: `POST /ideal/profile/authenticate` (Default20 (balanceplatform-api-test))
- **Notes**: Generates an redirection URL to finish the authentication flow when requested by iDEAL. Before calling this endpoint, make sure that your user has completed multi-factor authentication.
- **Signature**: `PostIdealProfileAuthenticate(IdealAuthenticateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IdealAuthenticateResponse`
- **Error**: `SdkException<PostIdealProfileAuthenticateError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostIdealProfileRegister
- **HTTP**: `POST /ideal/profile/register` (Default20 (balanceplatform-api-test))
- **Notes**: Register a new iDEAL profile. The profile is linked to the account holder and payment instruments included in the request. The user must be redirected to the URL in the response to finish their IDEAL profile registration.
- **Signature**: `PostIdealProfileRegister(ProfileRegistrationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProfileRegistrationResponse`
- **Error**: `SdkException<PostIdealProfileRegisterError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
