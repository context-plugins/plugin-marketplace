# TerminalOrdersCompanyLevel — operations

Accessor: `client.TerminalOrdersCompanyLevel` · Source: `Api/TerminalOrdersCompanyLevel.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCompaniesCompanyIdBillingEntities
- **HTTP**: `GET /companies/{companyId}/billingEntities` (Default (balanceplatform-api-test))
- **Notes**: Returns the billing entities of the company identified in the path and all merchant accounts belonging to the company. A billing entity is a legal entity where we charge orders to. An order for terminal products must contain the ID of a billing entity. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdBillingEntities(string companyId, string? name, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`
- **Returns**: `BillingEntitiesResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdBillingEntitiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdShippingLocations
- **HTTP**: `GET /companies/{companyId}/shippingLocations` (Default (balanceplatform-api-test))
- **Notes**: Returns the shipping locations for the company identified in the path and all merchant accounts belonging to the company. A shipping location includes the address where orders can be delivered, and an ID which you need to specify when ordering terminal products. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdShippingLocations(string companyId, string? name, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `name` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `name` ← `name`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `ShippingLocationsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdShippingLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdTerminalModels
- **HTTP**: `GET /companies/{companyId}/terminalModels` (Default (balanceplatform-api-test))
- **Notes**: Returns a list of payment terminal models that the company identified in the path has access to. The response includes the terminal model ID, which can be used as a query parameter when getting a list of terminals or a list of products for ordering. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdTerminalModels(string companyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalModelsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalModelsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdTerminalOrders
- **HTTP**: `GET /companies/{companyId}/terminalOrders` (Default (balanceplatform-api-test))
- **Notes**: Returns a lists of terminal products orders for the company identified in the path. To filter the list, use one or more of the query parameters. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdTerminalOrders(string companyId, string? customerOrderReference, string? status, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`customerOrderReference` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `customerOrderReference` ← `customerOrderReference`, `status` ← `status`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `TerminalOrdersResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdTerminalOrdersOrderId
- **HTTP**: `GET /companies/{companyId}/terminalOrders/{orderId}` (Default (balanceplatform-api-test))
- **Notes**: Returns the details of the terminal products order identified in the path. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdTerminalOrdersOrderId(string companyId, string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalOrdersOrderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCompaniesCompanyIdTerminalProducts
- **HTTP**: `GET /companies/{companyId}/terminalProducts` (Default (balanceplatform-api-test))
- **Notes**: Returns a country-specific list of payment terminal packages and parts that the company identified in the path has access to. To make this request, your API credential must have one of the following roles : * Management API—Terminal ordering read * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `GetCompaniesCompanyIdTerminalProducts(string companyId, string country, string? terminalModelId, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `terminalModelId` — nullable, no default → **must pass explicitly**
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `country` ← `country`, `terminalModelId` ← `terminalModelId`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `TerminalProductsResponse`
- **Error**: `SdkException<GetCompaniesCompanyIdTerminalProductsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchCompaniesCompanyIdTerminalOrdersOrderId
- **HTTP**: `PATCH /companies/{companyId}/terminalOrders/{orderId}` (Default (balanceplatform-api-test))
- **Notes**: Updates the terminal products order identified in the path. Updating is only possible while the order has the status Placed . The request body only needs to contain what you want to change. However, to update the products in the `items` array, you must provide the entire array. For example, if the array has three items: To remove one item, the array must include the remaining two items. Or to add one item, the array must include all four items. To make this request, your API credential must have the following role : * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PatchCompaniesCompanyIdTerminalOrdersOrderId(string companyId, string orderId, TerminalOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PatchCompaniesCompanyIdTerminalOrdersOrderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdShippingLocations
- **HTTP**: `POST /companies/{companyId}/shippingLocations` (Default (balanceplatform-api-test))
- **Notes**: Creates a shipping location for the company identified in the path. A shipping location defines an address where orders can be delivered. To make this request, your API credential must have the following role : * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostCompaniesCompanyIdShippingLocations(string companyId, ShippingLocation? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ShippingLocation`
- **Error**: `SdkException<PostCompaniesCompanyIdShippingLocationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdTerminalOrders
- **HTTP**: `POST /companies/{companyId}/terminalOrders` (Default (balanceplatform-api-test))
- **Notes**: Creates an order for payment terminal products for the company identified in the path. To make this request, your API credential must have the following role : * Management API—Terminal ordering read and write &gt;Requests to the Management API test endpoint do not create actual orders for test terminals. To order test terminals, you need to submit a sales order in your Customer Area. In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostCompaniesCompanyIdTerminalOrders(string companyId, TerminalOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PostCompaniesCompanyIdTerminalOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostCompaniesCompanyIdTerminalOrdersOrderIdCancel
- **HTTP**: `POST /companies/{companyId}/terminalOrders/{orderId}/cancel` (Default (balanceplatform-api-test))
- **Notes**: Cancels the terminal products order identified in the path. Cancelling is only possible while the order has the status Placed . To cancel an order, make a POST call without a request body. The response returns the full order details, but with the status changed to Cancelled . To make this request, your API credential must have the following role : * Management API—Terminal ordering read and write In the live environment, requests to this endpoint are subject to rate limits .
- **Signature**: `PostCompaniesCompanyIdTerminalOrdersOrderIdCancel(string companyId, string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TerminalOrder`
- **Error**: `SdkException<PostCompaniesCompanyIdTerminalOrdersOrderIdCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
