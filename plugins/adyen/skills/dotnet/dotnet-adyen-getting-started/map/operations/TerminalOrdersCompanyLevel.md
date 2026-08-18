<!-- Generated file — do not edit; regenerated with the SDK. -->

# TerminalOrdersCompanyLevel — operations

Accessor: `client.TerminalOrdersCompanyLevel` · Source: `Api/TerminalOrdersCompanyLevel.cs` · 10 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCompaniesCompanyIdBillingEntities
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdBillingEntities(string companyId, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `BillingEntitiesResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdBillingEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BillingEntitiesResponse` | `Models/BillingEntitiesResponse.cs` |
| `GetCompaniesCompanyIdBillingEntitiesError` | `Errors/GetCompaniesCompanyIdBillingEntitiesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdShippingLocations
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdShippingLocations(string companyId, string? name, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `name` ← `name`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `ShippingLocationsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdShippingLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ShippingLocationsResponse` | `Models/ShippingLocationsResponse.cs` |
| `GetCompaniesCompanyIdShippingLocationsError` | `Errors/GetCompaniesCompanyIdShippingLocationsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdTerminalModels
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdTerminalModels(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalModelsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalModelsResponse` | `Models/TerminalModelsResponse.cs` |
| `GetCompaniesCompanyIdTerminalModelsError` | `Errors/GetCompaniesCompanyIdTerminalModelsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdTerminalOrders
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdTerminalOrders(string companyId, string? customerOrderReference, string? status, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`customerOrderReference` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `customerOrderReference` ← `customerOrderReference`, `status` ← `status`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `TerminalOrdersResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrdersResponse` | `Models/TerminalOrdersResponse.cs` |
| `GetCompaniesCompanyIdTerminalOrdersError` | `Errors/GetCompaniesCompanyIdTerminalOrdersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdTerminalOrdersOrderId
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdTerminalOrdersOrderId(string companyId, string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalOrdersOrderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrder` | `Models/TerminalOrder.cs` |
| `GetCompaniesCompanyIdTerminalOrdersOrderIdError` | `Errors/GetCompaniesCompanyIdTerminalOrdersOrderIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCompaniesCompanyIdTerminalProducts
- **Server group**: `Default9`
- **Signature**: `GetCompaniesCompanyIdTerminalProducts(string companyId, string country, string? terminalModelId, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `terminalModelId` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `country` ← `country`, `terminalModelId` ← `terminalModelId`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `TerminalProductsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalProductsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalProductsResponse` | `Models/TerminalProductsResponse.cs` |
| `GetCompaniesCompanyIdTerminalProductsError` | `Errors/GetCompaniesCompanyIdTerminalProductsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchCompaniesCompanyIdTerminalOrdersOrderId
- **Server group**: `Default9`
- **Signature**: `PatchCompaniesCompanyIdTerminalOrdersOrderId(string companyId, string orderId, TerminalOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PatchCompaniesCompanyIdTerminalOrdersOrderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrderRequest` | `Models/TerminalOrderRequest.cs` |
| `TerminalOrder` | `Models/TerminalOrder.cs` |
| `PatchCompaniesCompanyIdTerminalOrdersOrderIdError` | `Errors/PatchCompaniesCompanyIdTerminalOrdersOrderIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdShippingLocations
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdShippingLocations(string companyId, ShippingLocation? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ShippingLocation`
- **Error**: `SdkException<PostCompaniesCompanyIdShippingLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ShippingLocation` | `Models/ShippingLocation.cs` |
| `PostCompaniesCompanyIdShippingLocationsError` | `Errors/PostCompaniesCompanyIdShippingLocationsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdTerminalOrders
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdTerminalOrders(string companyId, TerminalOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PostCompaniesCompanyIdTerminalOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrderRequest` | `Models/TerminalOrderRequest.cs` |
| `TerminalOrder` | `Models/TerminalOrder.cs` |
| `PostCompaniesCompanyIdTerminalOrdersError` | `Errors/PostCompaniesCompanyIdTerminalOrdersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostCompaniesCompanyIdTerminalOrdersOrderIdCancel
- **Server group**: `Default9`
- **Signature**: `PostCompaniesCompanyIdTerminalOrdersOrderIdCancel(string companyId, string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TerminalOrder` | `Models/TerminalOrder.cs` |
| `PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError` | `Errors/PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

