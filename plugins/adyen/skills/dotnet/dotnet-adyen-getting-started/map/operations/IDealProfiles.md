# IDealProfiles — operations

Accessor: `client.IDealProfiles` · Source: `Api/IDealProfiles.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostIdealProfileAuthLink
- **HTTP**: `POST /ideal/profile/auth-link` (Default (balanceplatform-api-test))
- **Notes**: Manage an already registered iDEAL profile. Generates a redirection URL to manage the iDEAL profile linked to the account holder from the request.
- **Signature**: `PostIdealProfileAuthLink(IdealAuthLinkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IdealAuthLinkResponse`
- **Error**: `SdkException<PostIdealProfileAuthLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetIdealProfileAuthLink400Error1(out IdealProfileAuthLink400Error1)` [400] · `TryGetIdealProfileAuthLink422Error1(out IdealProfileAuthLink422Error1)` [422] · `TryGetIdealProfileAuthLink500Error1(out IdealProfileAuthLink500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostIdealProfileAuthenticate
- **HTTP**: `POST /ideal/profile/authenticate` (Default (balanceplatform-api-test))
- **Notes**: Generates an redirection URL to finish the authentication flow when requested by iDEAL. Before calling this endpoint, make sure that your user has completed multi-factor authentication.
- **Signature**: `PostIdealProfileAuthenticate(IdealAuthenticateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IdealAuthLinkResponse`
- **Error**: `SdkException<PostIdealProfileAuthenticateError>` — **Case A (typed)**
- **Error accessors**: `TryGetIdealProfileAuthenticate400Error1(out IdealProfileAuthenticate400Error1)` [400] · `TryGetIdealProfileAuthenticate422Error1(out IdealProfileAuthenticate422Error1)` [422] · `TryGetIdealProfileAuthenticate500Error1(out IdealProfileAuthenticate500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostIdealProfileRegister
- **HTTP**: `POST /ideal/profile/register` (Default (balanceplatform-api-test))
- **Notes**: Register a new iDEAL profile. The profile is linked to the account holder and payment instruments included in the request. The user must be redirected to the URL in the response to finish their IDEAL profile registration.
- **Signature**: `PostIdealProfileRegister(ProfileRegistrationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IdealAuthLinkResponse`
- **Error**: `SdkException<PostIdealProfileRegisterError>` — **Case A (typed)**
- **Error accessors**: `TryGetIdealProfileRegister400Error1(out IdealProfileRegister400Error1)` [400] · `TryGetIdealProfileRegister422Error1(out IdealProfileRegister422Error1)` [422] · `TryGetIdealProfileRegister500Error1(out IdealProfileRegister500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
