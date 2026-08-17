# AccountStoreLevel — operations

Accessor: `client.AccountStoreLevel` · Source: `Api/AccountStoreLevel.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantIdStores
- **HTTP**: `GET /merchants/{merchantId}/stores` (Default9 (management-test))
- **Notes**: Returns a list of stores for the merchant account identified in the path. The list is grouped into pages as defined by the query parameters. To make this request, your API credential must have one of the following roles : * Management API—Stores read * Management API—Stores read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdStores(string merchantId, int? pageNumber, int? pageSize, string? reference, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `reference` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `reference` ← `reference`
- **Returns**: `ListStoresResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdStoresStoreId
- **HTTP**: `GET /merchants/{merchantId}/stores/{storeId}` (Default9 (management-test))
- **Notes**: Returns the details of the store identified in the path. To make this request, your API credential must have one of the following roles : * Management API—Stores read * Management API—Stores read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdStoresStoreId(string merchantId, string storeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Store`
- **Error**: `SdkException<GetMerchantsMerchantIdStoresStoreIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStores
- **HTTP**: `GET /stores` (Default9 (management-test))
- **Notes**: Returns a list of stores. The list is grouped into pages as defined by the query parameters. To make this request, your API credential must have one of the following roles : * Management API—Stores read * Management API—Stores read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetStores(int? pageNumber, int? pageSize, string? reference, string? merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`pageNumber` … `merchantId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`, `reference` ← `reference`, `merchantId` ← `merchantId`
- **Returns**: `ListStoresResponse`
- **Error**: `SdkException<GetStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetStoresStoreId
- **HTTP**: `GET /stores/{storeId}` (Default9 (management-test))
- **Notes**: Returns the details of the store identified in the path. To make this request, your API credential must have one of the following roles : * Management API—Stores read * Management API—Stores read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetStoresStoreId(string storeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Store`
- **Error**: `SdkException<GetStoresStoreIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdStoresStoreId
- **HTTP**: `PATCH /merchants/{merchantId}/stores/{storeId}` (Default9 (management-test))
- **Notes**: Updates the store identified in the path. You can only update some store parameters. To make this request, your API credential must have the following role : * Management API—Stores read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchMerchantsMerchantIdStoresStoreId(string merchantId, string storeId, UpdateStoreRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Store`
- **Error**: `SdkException<PatchMerchantsMerchantIdStoresStoreIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchStoresStoreId
- **HTTP**: `PATCH /stores/{storeId}` (Default9 (management-test))
- **Notes**: Updates the store identified in the path. You can only update some store parameters. To make this request, your API credential must have the following role : * Management API—Stores read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchStoresStoreId(string storeId, UpdateStoreRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Store`
- **Error**: `SdkException<PatchStoresStoreIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdStores
- **HTTP**: `POST /merchants/{merchantId}/stores` (Default9 (management-test))
- **Notes**: Creates a store for the merchant account identified in the path. To make this request, your API credential must have the following role : * Management API—Stores read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostMerchantsMerchantIdStores(string merchantId, StoreCreationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Store`
- **Error**: `SdkException<PostMerchantsMerchantIdStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostStores
- **HTTP**: `POST /stores` (Default9 (management-test))
- **Notes**: Creates a store for the merchant account specified in the request. To make this request, your API credential must have the following role : * Management API—Stores read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostStores(StoreCreationWithMerchantCodeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Store`
- **Error**: `SdkException<PostStoresError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
