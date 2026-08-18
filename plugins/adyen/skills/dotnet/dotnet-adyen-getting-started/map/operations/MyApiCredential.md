<!-- Generated file — do not edit; regenerated with the SDK. -->

# MyApiCredential — operations

Accessor: `client.MyApiCredential` · Source: `Api/MyApiCredential.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMeAllowedOriginsOriginId
- **Server group**: `Default9`
- **Signature**: `DeleteMeAllowedOriginsOriginId(string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMeAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMeAllowedOriginsOriginIdError` | `Errors/DeleteMeAllowedOriginsOriginIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMe
- **Server group**: `Default9`
- **Signature**: `GetMe(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `MeApiCredential`
- **Error**: `SdkException<GetMeError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `MeApiCredential` | `Models/MeApiCredential.cs` |
| `GetMeError` | `Errors/GetMeError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMeAllowedOrigins
- **Server group**: `Default9`
- **Signature**: `GetMeAllowedOrigins(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AllowedOriginsResponse`
- **Error**: `SdkException<GetMeAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AllowedOriginsResponse` | `Models/AllowedOriginsResponse.cs` |
| `GetMeAllowedOriginsError` | `Errors/GetMeAllowedOriginsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMeAllowedOriginsOriginId
- **Server group**: `Default9`
- **Signature**: `GetMeAllowedOriginsOriginId(string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<GetMeAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AllowedOrigin` | `Models/AllowedOrigin.cs` |
| `GetMeAllowedOriginsOriginIdError` | `Errors/GetMeAllowedOriginsOriginIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMeAllowedOrigins
- **Server group**: `Default9`
- **Signature**: `PostMeAllowedOrigins(CreateAllowedOriginRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<PostMeAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateAllowedOriginRequest` | `Models/CreateAllowedOriginRequest.cs` |
| `AllowedOrigin` | `Models/AllowedOrigin.cs` |
| `PostMeAllowedOriginsError` | `Errors/PostMeAllowedOriginsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMeGenerateClientKey
- **Server group**: `Default9`
- **Signature**: `PostMeGenerateClientKey(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `GenerateClientKeyResponse`
- **Error**: `SdkException<PostMeGenerateClientKeyError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `GenerateClientKeyResponse` | `Models/GenerateClientKeyResponse.cs` |
| `PostMeGenerateClientKeyError` | `Errors/PostMeGenerateClientKeyError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

