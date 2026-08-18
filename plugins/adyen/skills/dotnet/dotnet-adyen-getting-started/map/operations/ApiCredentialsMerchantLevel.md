<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiCredentialsMerchantLevel — operations

Accessor: `client.ApiCredentialsMerchantLevel` · Source: `Api/ApiCredentialsMerchantLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMerchantsMerchantIdApiCredentials
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdApiCredentials(string merchantId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListMerchantApiCredentialsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdApiCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListMerchantApiCredentialsResponse` | `Models/ListMerchantApiCredentialsResponse.cs` |
| `GetMerchantsMerchantIdApiCredentialsError` | `Errors/GetMerchantsMerchantIdApiCredentialsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdApiCredentialsApiCredentialId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdApiCredentialsApiCredentialId(string merchantId, string apiCredentialId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ApiCredential`
- **Error**: `SdkException<GetMerchantsMerchantIdApiCredentialsApiCredentialIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ApiCredential` | `Models/ApiCredential.cs` |
| `GetMerchantsMerchantIdApiCredentialsApiCredentialIdError` | `Errors/GetMerchantsMerchantIdApiCredentialsApiCredentialIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdApiCredentialsApiCredentialId
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdApiCredentialsApiCredentialId(string merchantId, string apiCredentialId, UpdateMerchantApiCredentialRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ApiCredential`
- **Error**: `SdkException<PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateMerchantApiCredentialRequest` | `Models/UpdateMerchantApiCredentialRequest.cs` |
| `ApiCredential` | `Models/ApiCredential.cs` |
| `PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError` | `Errors/PatchMerchantsMerchantIdApiCredentialsApiCredentialIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdApiCredentials
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdApiCredentials(string merchantId, CreateMerchantApiCredentialRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateApiCredentialResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdApiCredentialsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMerchantApiCredentialRequest` | `Models/CreateMerchantApiCredentialRequest.cs` |
| `CreateApiCredentialResponse` | `Models/CreateApiCredentialResponse.cs` |
| `PostMerchantsMerchantIdApiCredentialsError` | `Errors/PostMerchantsMerchantIdApiCredentialsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

