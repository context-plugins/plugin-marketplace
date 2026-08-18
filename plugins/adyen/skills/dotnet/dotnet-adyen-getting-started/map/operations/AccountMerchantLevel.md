<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountMerchantLevel — operations

Accessor: `client.AccountMerchantLevel` · Source: `Api/AccountMerchantLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMerchants
- **Server group**: `Default9`
- **Signature**: `GetMerchants(int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `ListMerchantResponse`
- **Error**: `SdkException<GetMerchantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListMerchantResponse` | `Models/ListMerchantResponse.cs` |
| `GetMerchantsError` | `Errors/GetMerchantsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantId(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Merchant`
- **Error**: `SdkException<GetMerchantsMerchantIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Merchant` | `Models/Merchant.cs` |
| `GetMerchantsMerchantIdError` | `Errors/GetMerchantsMerchantIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchants
- **Server group**: `Default9`
- **Signature**: `PostMerchants(CreateMerchantRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateMerchantResponse`
- **Error**: `SdkException<PostMerchantsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMerchantRequest` | `Models/CreateMerchantRequest.cs` |
| `CreateMerchantResponse` | `Models/CreateMerchantResponse.cs` |
| `PostMerchantsError` | `Errors/PostMerchantsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdActivate
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdActivate(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `RequestActivationResponse`
- **Error**: `SdkException<PostMerchantsMerchantIdActivateError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RequestActivationResponse` | `Models/RequestActivationResponse.cs` |
| `PostMerchantsMerchantIdActivateError` | `Errors/PostMerchantsMerchantIdActivateError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

