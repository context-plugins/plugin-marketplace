# Payments — operations

Accessor: `client.Payments` · Source: `Api/Payments.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreatePayment
- **HTTP**: `POST /payments` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Create a payment. Returns the created payment details.
- **Signature**: `CreatePayment(string authorization, CreatePaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResponse`
- **Error**: `SdkException<CreatePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPaymentById
- **HTTP**: `GET /payments/{paymentId}` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve a specific payment by ID.
- **Signature**: `GetPaymentById(string paymentId, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResponse`
- **Error**: `SdkException<GetPaymentByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetPayments
- **HTTP**: `GET /payments` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Retrieve all payments for the authenticated user's organization.
- **Signature**: `GetPayments(string? startDate, string? endDate, PaymentType31? paymentType, double? page, double? limit, string authorization, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startDate` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `start_date` ← `startDate`, `end_date` ← `endDate`, `payment_type` ← `paymentType`, `page` ← `page`, `limit` ← `limit`
- **Returns**: `PaymentListResponse`
- **Error**: `SdkException<GetPaymentsError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ReviewPayment
- **HTTP**: `POST /payments/{paymentId}/review` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Manually review and approve or reject a payment requiring risk review.
- **Signature**: `ReviewPayment(Guid paymentId, string authorization, ReviewPaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResponse`
- **Error**: `SdkException<ReviewPaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePayment
- **HTTP**: `PATCH /payments/{paymentId}` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Update a payment with accounts.
- **Signature**: `UpdatePayment(string paymentId, string authorization, UpdatePaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResponse`
- **Error**: `SdkException<UpdatePaymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject(out object)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
