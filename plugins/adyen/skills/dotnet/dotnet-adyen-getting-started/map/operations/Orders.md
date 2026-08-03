# Orders — operations

Accessor: `client.Orders` · Source: `Api/Orders.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostOrders
- **HTTP**: `POST /orders` (Default (balanceplatform-api-test))
- **Notes**: Creates an order to be used for partial payments. Make a POST `/orders` call before making a `/payments` call when processing payments with different payment methods.
- **Signature**: `PostOrders(string? idempotencyKey, CreateOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CreateOrderResponse`
- **Error**: `SdkException<PostOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostOrdersCancel
- **HTTP**: `POST /orders/cancel` (Default (balanceplatform-api-test))
- **Notes**: Cancels an order. Cancellation of an order results in an automatic rollback of all payments made in the order, either by canceling or refunding the payment, depending on the type of payment method.
- **Signature**: `PostOrdersCancel(string? idempotencyKey, CancelOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CancelOrderResponse`
- **Error**: `SdkException<PostOrdersCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentMethodsBalance
- **HTTP**: `POST /paymentMethods/balance` (Default (balanceplatform-api-test))
- **Notes**: Retrieves the balance remaining on a shopper's gift card. To check a gift card's balance, make a POST `/paymentMethods/balance` call and include the gift card's details inside a `paymentMethod` object.
- **Signature**: `PostPaymentMethodsBalance(string? idempotencyKey, BalanceCheckRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BalanceCheckResponse`
- **Error**: `SdkException<PostPaymentMethodsBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
