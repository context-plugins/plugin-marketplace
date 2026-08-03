# Orders — operations

Accessor: `client.Orders` · Source: `Api/Orders.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ConfirmPayments
- **HTTP**: `POST /payments/v1/orders/{orderId}/confirm-payments` (Default (payments))
- **Notes**: Before the payment can transition to a PAID state, the terms and conditions must be accepted. Each payment can mark itself as accepting those terms, but if the payments weren't marked so, an additional call to this endpoint would be required after all the payments have been made.
- **Signature**: `ConfirmPayments(string orderId, Guid? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<ConfirmPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateConnectedOrder
- **HTTP**: `POST /payments/v1/order-groups/{orderGroupId}/orders` (Default (payments))
- **Notes**: Creates an order connected to other orders within an existing Order Group. An Order Group is made by passing an `orderGroupId` when creating an order .
- **Signature**: `CreateConnectedOrder(string orderGroupId, Guid? idempotencyKey, Order? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrderCore`
- **Error**: `SdkException<CreateConnectedOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateFingerprint
- **HTTP**: `POST /payments/v1/orders/{orderId}/fingerprints` (Default (payments))
- **Notes**: Creates a new fingerprint for a buyer.
- **Signature**: `CreateFingerprint(string orderId, Guid? idempotencyKey, BuyerFingerprint? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<CreateFingerprintError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrder
- **HTTP**: `POST /payments/v1/orders` (Default (payments))
- **Notes**: Creates a new order.
- **Signature**: `CreateOrder(Guid? idempotencyKey, Order? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrderCore`
- **Error**: `SdkException<CreateOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FulfillOrder
- **HTTP**: `POST /payments/v1/orders/{orderId}/fulfillments` (Default (payments))
- **Notes**: Fulfills a completed order.
- **Signature**: `FulfillOrder(string orderId, Guid? idempotencyKey, FulfilledOrder? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrderPaymentSummary`
- **Error**: `SdkException<FulfillOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrderById
- **HTTP**: `GET /payments/v1/orders/{orderId}` (Default (payments))
- **Notes**: Retrieve a specific order
- **Signature**: `GetOrderById(string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Order`
- **Error**: `SdkException<GetOrderByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetOrderSummaryById
- **HTTP**: `GET /payments/v1/orders/{orderId}/summary` (Default (payments))
- **Notes**: Retrieve the status and summary of a specific order. Same information can be retrieved from the callback of Create Order . This can be polled as an alternative to that callback. The information from the endpoint will change when the `order.status` has changed. Changes to transactions within an order will not cause a new version of this resource to be available. As such, do not use the endpoint to get real-time information about an active order that a buyer is attempting to pay for. The status will only change once the order is fully paid and has transitioned to the `PAID` state. For polling, we recommend using the `If-None-Match` header and sending the ETag, so a `304` will be responded with if the resource has not changed.
- **Signature**: `GetOrderSummaryById(string orderId, DateTimeOffset? ifNoneMatch, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `ifNoneMatch` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OrderPaymentSummary`
- **Error**: `SdkException<GetOrderSummaryByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 404, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrdersTransactions
- **HTTP**: `GET /payments/v1/orders/{orderId}/transactions` (Default (payments))
- **Notes**: Retrieve all transactions connected to an order. A transaction includes: - Payments - Refunds - Payouts
- **Signature**: `OrdersTransactions(string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OrderTransactions`
- **Error**: `SdkException<OrdersTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RefundOrderGroup
- **HTTP**: `POST /payments/v1/order-groups/{orderGroupId}/refunds` (Default (payments))
- **Notes**: Refunds an entire order group. An Order Group is made by passing an `orderGroupId` when creating an order .
- **Signature**: `RefundOrderGroup(string orderGroupId, Guid? idempotencyKey, RefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RefundOrderGroupPost201Response`
- **Error**: `SdkException<RefundOrderGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
