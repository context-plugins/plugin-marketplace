<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.Orders` · Source: `Api/Orders.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostOrders
- **Signature**: `PostOrders(string? idempotencyKey, CreateOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CreateOrderResponse`
- **Error**: `SdkException<PostOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateOrderRequest` | `Models/CreateOrderRequest.cs` |
| `CreateOrderResponse` | `Models/CreateOrderResponse.cs` |
| `PostOrdersError` | `Errors/PostOrdersError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostOrdersCancel
- **Signature**: `PostOrdersCancel(string? idempotencyKey, CancelOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `CancelOrderResponse`
- **Error**: `SdkException<PostOrdersCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CancelOrderRequest` | `Models/CancelOrderRequest.cs` |
| `CancelOrderResponse` | `Models/CancelOrderResponse.cs` |
| `PostOrdersCancelError` | `Errors/PostOrdersCancelError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

### PostPaymentMethodsBalance
- **Signature**: `PostPaymentMethodsBalance(string? idempotencyKey, BalanceCheckRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `BalanceCheckResponse`
- **Error**: `SdkException<PostPaymentMethodsBalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceCheckRequest` | `Models/BalanceCheckRequest.cs` |
| `BalanceCheckResponse` | `Models/BalanceCheckResponse.cs` |
| `PostPaymentMethodsBalanceError` | `Errors/PostPaymentMethodsBalanceError.cs` |
| `ServiceError` | `Models/ServiceError.cs` |

