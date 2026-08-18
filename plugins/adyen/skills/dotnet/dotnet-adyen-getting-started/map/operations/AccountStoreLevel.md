<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountStoreLevel — operations

Accessor: `client.AccountStoreLevel` · Source: `Api/AccountStoreLevel.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMerchantsMerchantIdStores
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdStores(string merchantId, int? pageNumber, int? pageSize, string? reference, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `reference` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `reference` ← `reference`
- **Returns**: `ListStoresResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListStoresResponse` | `Models/ListStoresResponse.cs` |
| `GetMerchantsMerchantIdStoresError` | `Errors/GetMerchantsMerchantIdStoresError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdStoresStoreId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdStoresStoreId(string merchantId, string storeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Store`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresStoreIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Store` | `Models/Store.cs` |
| `GetMerchantsMerchantIdStoresStoreIdError` | `Errors/GetMerchantsMerchantIdStoresStoreIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetStores
- **Server group**: `Default9`
- **Signature**: `GetStores(int? pageNumber, int? pageSize, string? reference, string? merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageNumber` … `merchantId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `reference` ← `reference`, `merchantId` ← `merchantId`
- **Returns**: `ListStoresResponse`
- **Error**: `SdkException<GetStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ListStoresResponse` | `Models/ListStoresResponse.cs` |
| `GetStoresError` | `Errors/GetStoresError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetStoresStoreId
- **Server group**: `Default9`
- **Signature**: `GetStoresStoreId(string storeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Store`
- **Error**: `SdkException<GetStoresStoreIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Store` | `Models/Store.cs` |
| `GetStoresStoreIdError` | `Errors/GetStoresStoreIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdStoresStoreId
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdStoresStoreId(string merchantId, string storeId, UpdateStoreRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Store`
- **Error**: `SdkException<PatchMerchantsMerchantIdStoresStoreIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStoreRequest` | `Models/UpdateStoreRequest.cs` |
| `Store` | `Models/Store.cs` |
| `PatchMerchantsMerchantIdStoresStoreIdError` | `Errors/PatchMerchantsMerchantIdStoresStoreIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchStoresStoreId
- **Server group**: `Default9`
- **Signature**: `PatchStoresStoreId(string storeId, UpdateStoreRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Store`
- **Error**: `SdkException<PatchStoresStoreIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateStoreRequest` | `Models/UpdateStoreRequest.cs` |
| `Store` | `Models/Store.cs` |
| `PatchStoresStoreIdError` | `Errors/PatchStoresStoreIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdStores
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdStores(string merchantId, StoreCreationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Store`
- **Error**: `SdkException<PostMerchantsMerchantIdStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoreCreationRequest` | `Models/StoreCreationRequest.cs` |
| `Store` | `Models/Store.cs` |
| `PostMerchantsMerchantIdStoresError` | `Errors/PostMerchantsMerchantIdStoresError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostStores
- **Server group**: `Default9`
- **Signature**: `PostStores(StoreCreationWithMerchantCodeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Store`
- **Error**: `SdkException<PostStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `StoreCreationWithMerchantCodeRequest` | `Models/StoreCreationWithMerchantCodeRequest.cs` |
| `Store` | `Models/Store.cs` |
| `PostStoresError` | `Errors/PostStoresError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

