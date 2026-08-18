<!-- Generated file — do not edit; regenerated with the SDK. -->

# IDealProfiles — operations

Accessor: `client.IDealProfiles` · Source: `Api/IDealProfiles.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostIdealProfileAuthLink
- **Server group**: `Default20`
- **Signature**: `PostIdealProfileAuthLink(IdealAuthLinkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `IdealAuthLinkResponse`
- **Error**: `SdkException<PostIdealProfileAuthLinkError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `IdealAuthLinkRequest` | `Models/IdealAuthLinkRequest.cs` |
| `IdealAuthLinkResponse` | `Models/IdealAuthLinkResponse.cs` |
| `PostIdealProfileAuthLinkError` | `Errors/PostIdealProfileAuthLinkError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostIdealProfileAuthenticate
- **Server group**: `Default20`
- **Signature**: `PostIdealProfileAuthenticate(IdealAuthenticateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `IdealAuthenticateResponse`
- **Error**: `SdkException<PostIdealProfileAuthenticateError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `IdealAuthenticateRequest` | `Models/IdealAuthenticateRequest.cs` |
| `IdealAuthenticateResponse` | `Models/IdealAuthenticateResponse.cs` |
| `PostIdealProfileAuthenticateError` | `Errors/PostIdealProfileAuthenticateError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostIdealProfileRegister
- **Server group**: `Default20`
- **Signature**: `PostIdealProfileRegister(ProfileRegistrationRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ProfileRegistrationResponse`
- **Error**: `SdkException<PostIdealProfileRegisterError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ProfileRegistrationRequest` | `Models/ProfileRegistrationRequest.cs` |
| `ProfileRegistrationResponse` | `Models/ProfileRegistrationResponse.cs` |
| `PostIdealProfileRegisterError` | `Errors/PostIdealProfileRegisterError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

