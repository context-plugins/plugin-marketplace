<!-- Generated file — do not edit; regenerated with the SDK. -->

# AllowedOriginsMerchantLevel — operations

Accessor: `client.AllowedOriginsMerchantLevel` · Source: `Api/AllowedOriginsMerchantLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId
- **Server group**: `Default9`
- **Signature**: `DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(string merchantId, string apiCredentialId, string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError` | `Errors/DeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(string merchantId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AllowedOriginsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AllowedOriginsResponse` | `Models/AllowedOriginsResponse.cs` |
| `GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError` | `Errors/GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId(string merchantId, string apiCredentialId, string originId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AllowedOrigin` | `Models/AllowedOrigin.cs` |
| `GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError` | `Errors/GetMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins(string merchantId, string apiCredentialId, AllowedOrigin? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AllowedOrigin`
- **Error**: `SdkException<PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AllowedOrigin` | `Models/AllowedOrigin.cs` |
| `PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError` | `Errors/PostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

