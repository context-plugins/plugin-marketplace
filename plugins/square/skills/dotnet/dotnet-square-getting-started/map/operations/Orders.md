# Orders — operations

Accessor: `client.Orders` · Source: `Api/Orders.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BatchRetrieveOrders
- **HTTP**: `POST /v2/orders/batch-retrieve` (Default (connect))
- **Notes**: Retrieves a set of orders by their IDs. If a given order ID does not exist, the ID is ignored instead of generating an error.
- **Signature**: `BatchRetrieveOrders(BatchRetrieveOrdersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchRetrieveOrdersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CalculateOrder
- **HTTP**: `POST /v2/orders/calculate` (Default (connect))
- **Notes**: Enables applications to preview order pricing without creating an order.
- **Signature**: `CalculateOrder(CalculateOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CalculateOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CloneOrder
- **HTTP**: `POST /v2/orders/clone` (Default (connect))
- **Notes**: Creates a new order, in the `DRAFT` state, by duplicating an existing order. The newly created order has only the core fields (such as line items, taxes, and discounts) copied from the original order.
- **Signature**: `CloneOrder(CloneOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CloneOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrder
- **HTTP**: `POST /v2/orders` (Default (connect))
- **Notes**: Creates a new order that can include information about products for purchase and settings to apply to the purchase. To pay for a created order, see Pay for Orders . You can modify open orders using the UpdateOrder endpoint.
- **Signature**: `CreateOrder(CreateOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PayOrder
- **HTTP**: `POST /v2/orders/{order_id}/pay` (Default (connect))
- **Notes**: Pay for an order using one or more approved payments or settle an order with a total of `0`. The total of the `payment_ids` listed in the request must be equal to the order total. Orders with a total amount of `0` can be marked as paid by specifying an empty array of `payment_ids` in the request. To be used with `PayOrder`, a payment must: - Reference the order by specifying the `order_id` when creating the payment . Any approved payments that reference the same `order_id` not specified in the `payment_ids` is canceled. - Be approved with delayed capture . Using a delayed capture payment with `PayOrder` completes the approved payment.
- **Signature**: `PayOrder(string orderId, PayOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PayOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveOrder
- **HTTP**: `GET /v2/orders/{order_id}` (Default (connect))
- **Notes**: Retrieves an Order by ID.
- **Signature**: `RetrieveOrder(string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchOrders
- **HTTP**: `POST /v2/orders/search` (Default (connect))
- **Notes**: Search all orders for one or more locations. Orders include all sales, returns, and exchanges regardless of how or when they entered the Square ecosystem (such as Point of Sale, Invoices, and Connect APIs). `SearchOrders` requests need to specify which locations to search and define a SearchOrdersQuery object that controls how to sort or filter the results. Your `SearchOrdersQuery` can: Set filter criteria. Set the sort order. Determine whether to return results as complete `Order` objects or as OrderEntry objects. Note that details for orders processed with Square Point of Sale while in offline mode might not be transmitted to Square for up to 72 hours. Offline orders have a `created_at` value that reflects the time the order was created, not the time it was subsequently transmitted to Square.
- **Signature**: `SearchOrders(SearchOrdersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchOrdersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateOrder
- **HTTP**: `PUT /v2/orders/{order_id}` (Default (connect))
- **Notes**: Updates an open order by adding, replacing, or deleting fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated. An `UpdateOrder` request requires the following: - The `order_id` in the endpoint path, identifying the order to update. - The latest `version` of the order to update. - The sparse order containing only the fields to update and the version to which the update is being applied. - If deleting fields, the dot notation paths identifying the fields to clear. To pay for an order, see Pay for Orders .
- **Signature**: `UpdateOrder(string orderId, UpdateOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
