<!-- Generated file — do not edit; regenerated with the SDK. -->

# Initialization — operations

Accessor: `client.Initialization` · Source: `Api/Initialization.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostStoreDetail
- **Server group**: `Default3`
- **Signature**: `PostStoreDetail(StoreDetailRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoreDetailResponse`
- **Error**: `SdkException<PostStoreDetailError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoreDetailRequest` | `Models/StoreDetailRequest.cs` |
| `StoreDetailResponse` | `Models/StoreDetailResponse.cs` |
| `PostStoreDetailError` | `Errors/PostStoreDetailError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostStoreDetailAndSubmitThirdParty
- **Server group**: `Default3`
- **Signature**: `PostStoreDetailAndSubmitThirdParty(StoreDetailAndSubmitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `StoreDetailAndSubmitResponse`
- **Error**: `SdkException<PostStoreDetailAndSubmitThirdPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoreDetailAndSubmitRequest` | `Models/StoreDetailAndSubmitRequest.cs` |
| `StoreDetailAndSubmitResponse` | `Models/StoreDetailAndSubmitResponse.cs` |
| `PostStoreDetailAndSubmitThirdPartyError` | `Errors/PostStoreDetailAndSubmitThirdPartyError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostSubmitThirdParty
- **Server group**: `Default3`
- **Signature**: `PostSubmitThirdParty(SubmitRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SubmitResponse`
- **Error**: `SdkException<PostSubmitThirdPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitRequest` | `Models/SubmitRequest.cs` |
| `SubmitResponse` | `Models/SubmitResponse.cs` |
| `PostSubmitThirdPartyError` | `Errors/PostSubmitThirdPartyError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

