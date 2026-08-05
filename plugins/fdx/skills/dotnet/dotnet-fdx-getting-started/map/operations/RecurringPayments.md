# RecurringPayments — operations

Accessor: `client.RecurringPayments` · Source: `Api/RecurringPayments.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelRecurringPayment
- **HTTP**: `DELETE /recurring-payments/{recurringPaymentId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Cancel a recurring payment
- **Signature**: `CancelRecurringPayment(string recurringPaymentId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RecurringPaymentEntity`
- **Error**: `SdkException<CancelRecurringPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentsForRecurringPayment
- **HTTP**: `GET /recurring-payments/{recurringPaymentId}/payments` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Search for payments associated with the recurring payment
- **Signature**: `GetPaymentsForRecurringPayment(string recurringPaymentId, string? updatedSince, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`updatedSince` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `updatedSince` ← `updatedSince`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaymentsEntity`
- **Error**: `SdkException<GetPaymentsForRecurringPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRecurringPayment
- **HTTP**: `GET /recurring-payments/{recurringPaymentId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Get a recurring payment
- **Signature**: `GetRecurringPayment(string recurringPaymentId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RecurringPaymentEntity`
- **Error**: `SdkException<GetRecurringPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ScheduleRecurringPayment
- **HTTP**: `POST /recurring-payments` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Schedule a recurring payment
- **Signature**: `ScheduleRecurringPayment(Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, RecurringPaymentForUpdateEntity1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RecurringPaymentEntity`
- **Error**: `SdkException<ScheduleRecurringPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 422, 500, 501, 503] · `TryGetRecurringPaymentEntity(out RecurringPaymentEntity)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchForRecurringPayments
- **HTTP**: `GET /recurring-payments` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Search for recurring payments
- **Signature**: `SearchForRecurringPayments(string? updatedSince, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`updatedSince` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `updatedSince` ← `updatedSince`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `RecurringPaymentsEntity`
- **Error**: `SdkException<SearchForRecurringPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateRecurringPayment
- **HTTP**: `PATCH /recurring-payments/{recurringPaymentId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Update a recurring payment
- **Signature**: `UpdateRecurringPayment(string recurringPaymentId, Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, RecurringPaymentForUpdateEntity2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RecurringPaymentEntity`
- **Error**: `SdkException<UpdateRecurringPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 422, 500, 501, 503] · `TryGetRecurringPaymentEntity(out RecurringPaymentEntity)` [409] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
