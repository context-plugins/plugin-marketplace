# Orders — operations

Accessor: `client.Orders` · Source: `Api/Orders.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteAllOrders
- **HTTP**: `DELETE /v2/orders` (Default (paper-api))
- **Notes**: Attempts to cancel all open orders. A response will be provided for each order that is attempted to be cancelled. If an order is no longer cancelable, the server will respond with status 500 and reject the request.
- **Signature**: `DeleteAllOrders(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CanceledOrderResponse>`
- **Error**: `SdkException<DeleteAllOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteOrderByOrderId
- **HTTP**: `DELETE /v2/orders/{order_id}` (Default (paper-api))
- **Notes**: Attempts to cancel an Open Order. If the order is no longer cancelable, the request will be rejected with status 422; otherwise accepted with return status 204.
- **Signature**: `DeleteOrderByOrderId(Guid orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteOrderByOrderIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAllOrders
- **HTTP**: `GET /v2/orders` (Default (paper-api))
- **Notes**: Retrieves a list of orders for the account, filtered by the supplied query parameters.
- **Signature**: `GetAllOrders(Status1? status, int? limit, string? after, string? until, Direction? direction, bool? nested, string? symbols, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`status` … `symbols`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`, `limit` ← `limit`, `after` ← `after`, `until` ← `until`, `direction` ← `direction`, `nested` ← `nested`, `symbols` ← `symbols`
- **Returns**: `IReadOnlyList<Order>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetOrderByOrderId
- **HTTP**: `GET /v2/orders/{order_id}` (Default (paper-api))
- **Notes**: Retrieves a single order for the given order_id.
- **Signature**: `GetOrderByOrderId(Guid orderId, bool? nested, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `nested` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `nested` ← `nested`
- **Returns**: `Order`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PatchOrderByOrderId
- **HTTP**: `PATCH /v2/orders/{order_id}` (Default (paper-api))
- **Notes**: Replaces a single order with updated parameters. Each parameter overrides the corresponding attribute of the existing order. The other attributes remain the same as the existing order. A success return code from a replaced order does NOT guarantee the existing open order has been replaced. If the existing open order is filled before the replacing (new) order reaches the execution venue, the replacing (new) order is rejected, and these events are sent in the trade_updates stream channel. While an order is being replaced, buying power is reduced by the larger of the two orders that have been placed (the old order being replaced, and the newly placed order to replace it). If you are replacing a buy entry order with a higher limit price than the original order, the buying power is calculated based on the newly placed order. If you are replacing it with a lower limit price, the buying power is calculated based on the old order.
- **Signature**: `PatchOrderByOrderId(Guid orderId, PatchOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Order`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostOrder
- **HTTP**: `POST /v2/orders` (Default (paper-api))
- **Notes**: Places a new order for the given account. An order request may be rejected if the account is not authorized for trading, or if the tradable balance is insufficient to fill the order..
- **Signature**: `PostOrder(Order body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Order`
- **Error**: `SdkException<PostOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [403, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
