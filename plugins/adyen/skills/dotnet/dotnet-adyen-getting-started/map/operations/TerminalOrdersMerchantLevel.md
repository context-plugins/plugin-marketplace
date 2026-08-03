# TerminalOrdersMerchantLevel — operations

Accessor: `client.TerminalOrdersMerchantLevel` · Source: `Api/TerminalOrdersMerchantLevel.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchantsMerchantIdBillingEntities
- **HTTP**: `GET /merchants/{merchantId}/billingEntities` (Default (balanceplatform-api-test))
- **Notes**: Returns the billing entities of the merchant account identified in the path. A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdBillingEntities(string merchantId, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `BillingEntitiesResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdBillingEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdShippingLocations
- **HTTP**: `GET /merchants/{merchantId}/shippingLocations` (Default (balanceplatform-api-test))
- **Notes**: Returns the shipping locations for the merchant account identified in the path. A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdShippingLocations(string merchantId, string? name, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `ShippingLocationsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdShippingLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdTerminalModels
- **HTTP**: `GET /merchants/{merchantId}/terminalModels` (Default (balanceplatform-api-test))
- **Notes**: Returns the payment terminal models that the merchant account identified in the path has access to. The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdTerminalModels(string merchantId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalModelsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdTerminalOrders
- **HTTP**: `GET /merchants/{merchantId}/terminalOrders` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of terminal products orders for the merchant account identified in the path. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdTerminalOrders(string merchantId, string? customerOrderReference, string? status, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`customerOrderReference` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `customerOrderReference` ← `customerOrderReference`, `status` ← `status`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `TerminalOrdersResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdTerminalOrdersOrderId
- **HTTP**: `GET /merchants/{merchantId}/terminalOrders/{orderId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of the terminal products order identified in the path. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdTerminalOrdersOrderId(string merchantId, string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalOrdersOrderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchantsMerchantIdTerminalProducts
- **HTTP**: `GET /merchants/{merchantId}/terminalProducts` (Default (balanceplatform-api-test))
- **Notes**: Returns a country-specific list of payment terminal packages and parts that the merchant account identified in the path has access to. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetMerchantsMerchantIdTerminalProducts(string merchantId, string country, string? terminalModelId, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `terminalModelId` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`, `terminalModelId` ← `terminalModelId`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `TerminalProductsResponse`
- **Error**: `SdkException<GetMerchantsMerchantIdTerminalProductsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchMerchantsMerchantIdTerminalOrdersOrderId
- **HTTP**: `PATCH /merchants/{merchantId}/terminalOrders/{orderId}` (Default (balanceplatform-api-test))
- **Notes**: Updates the terminal products order identified in the path. Updating is only possible while the order has the status Placed . The request body only needs to contain what you want to change. However, to update the products in the `items` array, you must provide the entire array. For example, if the array has three items: To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items. To make this request, your API credential must have the following role : * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchMerchantsMerchantIdTerminalOrdersOrderId(string merchantId, string orderId, TerminalOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PatchMerchantsMerchantIdTerminalOrdersOrderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdShippingLocations
- **HTTP**: `POST /merchants/{merchantId}/shippingLocations` (Default (balanceplatform-api-test))
- **Notes**: Creates a shipping location for the merchant account identified in the path. A shipping location defines an address where orders can be shipped to. To make this request, your API credential must have the following role : * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostMerchantsMerchantIdShippingLocations(string merchantId, ShippingLocation? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ShippingLocation`
- **Error**: `SdkException<PostMerchantsMerchantIdShippingLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdTerminalOrders
- **HTTP**: `POST /merchants/{merchantId}/terminalOrders` (Default (balanceplatform-api-test))
- **Notes**: Creates an order for payment terminal products for the merchant account identified in the path. To make this request, your API credential must have the following role : * Management API—Terminal ordering read and write &gt;Requests to the Management API test endpoint do not create actual orders for test terminals. To order test terminals, you need to submit a sales order in your Customer Area. In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostMerchantsMerchantIdTerminalOrders(string merchantId, TerminalOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PostMerchantsMerchantIdTerminalOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostMerchantsMerchantIdTerminalOrdersOrderIdCancel
- **HTTP**: `POST /merchants/{merchantId}/terminalOrders/{orderId}/cancel` (Default (balanceplatform-api-test))
- **Notes**: Cancels the terminal products order identified in the path. Cancelling is only possible while the order has the status Placed . To cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to Cancelled . To make this request, your API credential must have the following role : * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostMerchantsMerchantIdTerminalOrdersOrderIdCancel(string merchantId, string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PostMerchantsMerchantIdTerminalOrdersOrderIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
