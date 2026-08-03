# Refunds — operations

Accessor: `client.Refunds` · Source: `Api/Refunds.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Get
- **HTTP**: `GET /ordermanagement/v1/orders/{order_id}/refunds/{refund_id}` (Default (api))
- **Notes**: Get refund.
- **Signature**: `Get(string orderId, string refundId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Refund`
- **Error**: `SdkException<GetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNotFoundErrorMessage(out NotFoundErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RefundOrder
- **HTTP**: `POST /ordermanagement/v1/orders/{order_id}/refunds` (Default (api))
- **Notes**: Create a refund. Read more on Refunds
- **Signature**: `RefundOrder(string orderId, string? klarnaIdempotencyKey, RefundObject body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `klarnaIdempotencyKey` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `string`
- **Error**: `SdkException<RefundOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetRefundNotAllowedErrorMessage(out RefundNotAllowedErrorMessage)` [403] · `TryGetNotFoundErrorMessage(out NotFoundErrorMessage)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
