# Transactions — operations

Accessor: `client.Transactions` · Source: `Api/Transactions.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActionCompleted
- **HTTP**: `POST /payments/v1/orders/{orderId}/payments/{transactionId}/action-completions` (Default (payments))
- **Notes**: Notify the backend that an action has been completed.
- **Signature**: `ActionCompleted(string orderId, string transactionId, Guid? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ActionCompletionResponse`
- **Error**: `SdkException<ActionCompletedError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Authorize
- **HTTP**: `POST /payments/v1/orders/{orderId}/payments` (Default (payments))
- **Notes**: Authorize a payment for an order. A `payment instrument` (specific instance of a payment method) must be specified.
- **Signature**: `Authorize(string orderId, Guid? idempotencyKey, Authorization? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AuthorizeOrderByIdPost201Response`
- **Error**: `SdkException<AuthorizeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderRefund
- **HTTP**: `POST /payments/v1/orders/{orderId}/refunds` (Default (payments))
- **Notes**: Refund an order. This API call will refund money for the transaction(s) on an order.
- **Signature**: `OrderRefund(string orderId, Guid? idempotencyKey, RefundRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<OrderRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Payments
- **HTTP**: `POST /payments/v1/{transactionId}/reconciliations` (Default (payments))
- **Notes**: Triggers reconciliation for a specific payment method.
- **Signature**: `Payments(string transactionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostAuthFraudCheck
- **HTTP**: `POST /payments/v1/orders/{orderId}/fraud-checks/retries` (Default (payments))
- **Notes**: This triggers post auth fraud check for a given order. Note that the transactions of the order should have last fraud event as FraudPreAuthCheckTechnicalErrorEvent
- **Signature**: `PostAuthFraudCheck(string orderId, Guid? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostAuthFraudCheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransactionCancel
- **HTTP**: `POST /payments/v1/orders/{orderId}/payments/{transactionId}/cancellations` (Default (payments))
- **Notes**: Manually retry a failed cancellation of a transaction.
- **Signature**: `TransactionCancel(string orderId, string transactionId, Guid? idempotencyKey, Cancel? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CancelledPaymentTransactions`
- **Error**: `SdkException<TransactionCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransactionCapture
- **HTTP**: `POST /payments/v1/orders/{orderId}/payments/{transactionId}/captures` (Default (payments))
- **Notes**: Manually retry a failed capture of a transaction.
- **Signature**: `TransactionCapture(string orderId, string transactionId, Guid? idempotencyKey, Capture? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CapturePaymentResponse`
- **Error**: `SdkException<TransactionCaptureError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransactionClose
- **HTTP**: `POST /payments/v1/orders/{orderId}/payments/{transactionId}/closures` (Default (payments))
- **Notes**: Close the transaction that has previously failed to avoid its stagnation in review pools.
- **Signature**: `TransactionClose(string orderId, string transactionId, Guid? idempotencyKey, Close? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ClosedPaymentTransactions`
- **Error**: `SdkException<TransactionCloseError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransactionCloseRefund
- **HTTP**: `POST /payments/v1/refunds/{refundId}/closures` (Default (payments))
- **Notes**: Close the refund transaction that has previously failed to avoid its stagnation in review pools.
- **Signature**: `TransactionCloseRefund(string refundId, Guid? idempotencyKey, PaymentsV1RefundsClosuresRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CloseRefundResponse`
- **Error**: `SdkException<TransactionCloseRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransactionRetryFailedRefund
- **HTTP**: `POST /payments/v1/refunds/{refundId}/retry-failed-refunds` (Default (payments))
- **Notes**: Retries a refund transaction with the given transaction id.
- **Signature**: `TransactionRetryFailedRefund(string refundId, Guid? idempotencyKey, PaymentsV1RefundsRetryFailedRefundsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RetryRefundResponse`
- **Error**: `SdkException<TransactionRetryFailedRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TransactionRetryRefund
- **HTTP**: `POST /payments/v1/orders/{orderId}/payments/{refundId}/retry-failed-refunds` (Default (payments))
- **Notes**: Retries a refund transaction with the given transaction id.
- **Signature**: `TransactionRetryRefund(string orderId, string refundId, Guid? idempotencyKey, PaymentsV1OrdersPaymentsRetryFailedRefundsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RetryRefundResponse`
- **Error**: `SdkException<TransactionRetryRefundError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 401, 403, 406, 500, 502, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
