<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reviewing — operations

Accessor: `client.Reviewing` · Source: `Api/Reviewing.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostConfirmThirdParty
- **Server group**: `Default3`
- **Signature**: `PostConfirmThirdParty(ModifyRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModifyResponse`
- **Error**: `SdkException<PostConfirmThirdPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ModifyRequest` | `Models/ModifyRequest.cs` |
| `ModifyResponse` | `Models/ModifyResponse.cs` |
| `PostConfirmThirdPartyError` | `Errors/PostConfirmThirdPartyError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostDeclineThirdParty
- **Server group**: `Default3`
- **Signature**: `PostDeclineThirdParty(ModifyRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ModifyResponse`
- **Error**: `SdkException<PostDeclineThirdPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ModifyRequest` | `Models/ModifyRequest.cs` |
| `ModifyResponse` | `Models/ModifyResponse.cs` |
| `PostDeclineThirdPartyError` | `Errors/PostDeclineThirdPartyError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

