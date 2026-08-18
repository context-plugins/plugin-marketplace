<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalOrdersMerchantLevel — operations

Accessor: `client.TerminalOrdersMerchantLevel` · Source: `Api/TerminalOrdersMerchantLevel.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMerchantsMerchantIdBillingEntities
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdBillingEntities(string merchantId, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `BillingEntitiesResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdBillingEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BillingEntitiesResponse` | `Models/BillingEntitiesResponse.cs` |
| `GetMerchantsMerchantIdBillingEntitiesError` | `Errors/GetMerchantsMerchantIdBillingEntitiesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdShippingLocations
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdShippingLocations(string merchantId, string? name, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `name` ← `name`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `ShippingLocationsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdShippingLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ShippingLocationsResponse` | `Models/ShippingLocationsResponse.cs` |
| `GetMerchantsMerchantIdShippingLocationsError` | `Errors/GetMerchantsMerchantIdShippingLocationsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdTerminalModels
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdTerminalModels(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalModelsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalModelsResponse` | `Models/TerminalModelsResponse.cs` |
| `GetMerchantsMerchantIdTerminalModelsError` | `Errors/GetMerchantsMerchantIdTerminalModelsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdTerminalOrders
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdTerminalOrders(string merchantId, string? customerOrderReference, string? status, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`customerOrderReference` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `customerOrderReference` ← `customerOrderReference`, `status` ← `status`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `TerminalOrdersResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrdersResponse` | `Models/TerminalOrdersResponse.cs` |
| `GetMerchantsMerchantIdTerminalOrdersError` | `Errors/GetMerchantsMerchantIdTerminalOrdersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdTerminalOrdersOrderId
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdTerminalOrdersOrderId(string merchantId, string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalOrdersOrderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrder` | `Models/TerminalOrder.cs` |
| `GetMerchantsMerchantIdTerminalOrdersOrderIdError` | `Errors/GetMerchantsMerchantIdTerminalOrdersOrderIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetMerchantsMerchantIdTerminalProducts
- **Server group**: `Default9`
- **Signature**: `GetMerchantsMerchantIdTerminalProducts(string merchantId, string country, string? terminalModelId, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `terminalModelId` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `country` ← `country`, `terminalModelId` ← `terminalModelId`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `TerminalProductsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalProductsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalProductsResponse` | `Models/TerminalProductsResponse.cs` |
| `GetMerchantsMerchantIdTerminalProductsError` | `Errors/GetMerchantsMerchantIdTerminalProductsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchMerchantsMerchantIdTerminalOrdersOrderId
- **Server group**: `Default9`
- **Signature**: `PatchMerchantsMerchantIdTerminalOrdersOrderId(string merchantId, string orderId, TerminalOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PatchMerchantsMerchantIdTerminalOrdersOrderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrderRequest` | `Models/TerminalOrderRequest.cs` |
| `TerminalOrder` | `Models/TerminalOrder.cs` |
| `PatchMerchantsMerchantIdTerminalOrdersOrderIdError` | `Errors/PatchMerchantsMerchantIdTerminalOrdersOrderIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdShippingLocations
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdShippingLocations(string merchantId, ShippingLocation? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ShippingLocation`
- **Error**: `SdkException<PostMerchantsMerchantIdShippingLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ShippingLocation` | `Models/ShippingLocation.cs` |
| `PostMerchantsMerchantIdShippingLocationsError` | `Errors/PostMerchantsMerchantIdShippingLocationsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdTerminalOrders
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdTerminalOrders(string merchantId, TerminalOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PostMerchantsMerchantIdTerminalOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrderRequest` | `Models/TerminalOrderRequest.cs` |
| `TerminalOrder` | `Models/TerminalOrder.cs` |
| `PostMerchantsMerchantIdTerminalOrdersError` | `Errors/PostMerchantsMerchantIdTerminalOrdersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostMerchantsMerchantIdTerminalOrdersOrderIdCancel
- **Server group**: `Default9`
- **Signature**: `PostMerchantsMerchantIdTerminalOrdersOrderIdCancel(string merchantId, string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrder` | `Models/TerminalOrder.cs` |
| `PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError` | `Errors/PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

