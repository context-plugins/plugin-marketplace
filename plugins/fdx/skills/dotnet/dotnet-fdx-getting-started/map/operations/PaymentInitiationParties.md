# PaymentInitiationParties — operations

Accessor: `client.PaymentInitiationParties` · Source: `Api/PaymentInitiationParties.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePaymentInitiationParty
- **HTTP**: `POST /payment-initiation-parties` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Create a payment initiation party associated with a customer profile
- **Signature**: `CreatePaymentInitiationParty(Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, PaymentInitiationPartyEntity? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInitiationPartyCreateResponseEntity`
- **Error**: `SdkException<CreatePaymentInitiationPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreatePaymentMethod
- **HTTP**: `POST /payment-initiation-parties/{paymentInitiationPartyId}/payment-methods` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Registration of a payment initiation party to a payment method
- **Signature**: `CreatePaymentMethod(string paymentInitiationPartyId, Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, PaymentInitiationPartyToPaymentMethodEntity? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInitiationPartyMethodCreateResponseEntity`
- **Error**: `SdkException<CreatePaymentMethodError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeletePaymentInitiationParty
- **HTTP**: `DELETE /payment-initiation-parties/{paymentInitiationPartyId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Remove the payment initiation party associated with a customer profile
- **Signature**: `DeletePaymentInitiationParty(string paymentInitiationPartyId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeletePaymentInitiationPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeletePaymentMethodRegistration
- **HTTP**: `DELETE /payment-initiation-parties/{paymentInitiationPartyId}/payment-methods/{paymentMethodRegistrationId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Remove the registered payment method from a payment initiation party
- **Signature**: `DeletePaymentMethodRegistration(string paymentInitiationPartyId, string paymentMethodRegistrationId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeletePaymentMethodRegistrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentInitiationParty
- **HTTP**: `GET /payment-initiation-parties/{paymentInitiationPartyId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Retrieve the payment initiation party details by ID
- **Signature**: `GetPaymentInitiationParty(string paymentInitiationPartyId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInitiationPartyEntity`
- **Error**: `SdkException<GetPaymentInitiationPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentMethodRegistration
- **HTTP**: `GET /payment-initiation-parties/{paymentInitiationPartyId}/payment-methods/{paymentMethodRegistrationId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Retrieve the details of a payment method registered with a payment initiation party
- **Signature**: `GetPaymentMethodRegistration(string paymentInitiationPartyId, string paymentMethodRegistrationId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentInitiationPartyToPaymentMethodEntity`
- **Error**: `SdkException<GetPaymentMethodRegistrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListPaymentInitiationParties
- **HTTP**: `GET /payment-initiation-parties` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Retrieve the payment initiation parties associated with a customer profile
- **Signature**: `ListPaymentInitiationParties(string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaymentInitiationPartiesEntity`
- **Error**: `SdkException<ListPaymentInitiationPartiesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePaymentInitiationParty
- **HTTP**: `PATCH /payment-initiation-parties/{paymentInitiationPartyId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Update the payment initiation party associated with a customer profile
- **Signature**: `UpdatePaymentInitiationParty(string paymentInitiationPartyId, Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, PaymentInitiationPartyEntity? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdatePaymentInitiationPartyError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePaymentMethodRegistration
- **HTTP**: `PATCH /payment-initiation-parties/{paymentInitiationPartyId}/payment-methods/{paymentMethodRegistrationId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Update the payment method registration associated with payment initiation party
- **Signature**: `UpdatePaymentMethodRegistration(string paymentInitiationPartyId, string paymentMethodRegistrationId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, PaymentInitiationPartyToPaymentMethodEntity? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<UpdatePaymentMethodRegistrationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
