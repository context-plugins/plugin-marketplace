# Payments — operations

Accessor: `client.Payments` · Source: `Api/Payments.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelPayment
- **HTTP**: `DELETE /payments/{paymentId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Cancel a payment
- **Signature**: `CancelPayment(string paymentId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentEntity`
- **Error**: `SdkException<CancelPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPayment
- **HTTP**: `GET /payments/{paymentId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Get a payment
- **Signature**: `GetPayment(string paymentId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentEntity`
- **Error**: `SdkException<GetPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SchedulePayment
- **HTTP**: `POST /payments` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Schedule a payment
- **Signature**: `SchedulePayment(Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, PaymentForUpdateEntity1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentEntity`
- **Error**: `SdkException<SchedulePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 422, 500, 501, 503] · `TryGetPaymentEntity(out PaymentEntity)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchForPayments
- **HTTP**: `GET /payments` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Search for payments
- **Signature**: `SearchForPayments(string? updatedSince, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`updatedSince` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `updatedSince` ← `updatedSince`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaymentsEntity`
- **Error**: `SdkException<SearchForPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePayment
- **HTTP**: `PATCH /payments/{paymentId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Update a payment
- **Signature**: `UpdatePayment(string paymentId, Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, PaymentForUpdateEntity2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentEntity`
- **Error**: `SdkException<UpdatePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 422, 500, 501, 503] · `TryGetPaymentEntity(out PaymentEntity)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
