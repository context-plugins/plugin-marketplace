# Payments — operations

Accessor: `client.Payments` · Source: `Api/Payments.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelPayment
- **HTTP**: `POST /v2/payments/{payment_id}/cancel` (Default (connect))
- **Notes**: Cancels (voids) a payment. You can use this endpoint to cancel a payment with the APPROVED `status`.
- **Signature**: `CancelPayment(string paymentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelPaymentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CancelPaymentByIdempotencyKey
- **HTTP**: `POST /v2/payments/cancel` (Default (connect))
- **Notes**: Cancels (voids) a payment identified by the idempotency key that is specified in the request. Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a `CreatePayment` request, a network error occurs and you do not get a response). In this case, you can direct Square to cancel the payment using this endpoint. In the request, you provide the same idempotency key that you provided in your `CreatePayment` request that you want to cancel. After canceling the payment, you can submit your `CreatePayment` request again. Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint returns successfully.
- **Signature**: `CancelPaymentByIdempotencyKey(CancelPaymentByIdempotencyKeyRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelPaymentByIdempotencyKeyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompletePayment
- **HTTP**: `POST /v2/payments/{payment_id}/complete` (Default (connect))
- **Notes**: Completes (captures) a payment. By default, payments are set to complete immediately after they are created. You can use this endpoint to complete a payment with the APPROVED `status`.
- **Signature**: `CompletePayment(string paymentId, CompletePaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CompletePaymentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreatePayment
- **HTTP**: `POST /v2/payments` (Default (connect))
- **Notes**: Creates a payment using the provided source. You can use this endpoint to charge a card (credit/debit card or Square gift card) or record a payment that the seller received outside of Square (cash payment from a buyer or a payment that an external entity processed on behalf of the seller). The endpoint creates a `Payment` object and returns it in the response.
- **Signature**: `CreatePayment(CreatePaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreatePaymentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetPayment
- **HTTP**: `GET /v2/payments/{payment_id}` (Default (connect))
- **Notes**: Retrieves details for a specific payment.
- **Signature**: `GetPayment(string paymentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetPaymentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPayments
- **HTTP**: `GET /v2/payments` (Default (connect))
- **Notes**: Retrieves a list of payments taken by the account making the request. Results are eventually consistent, and new payments or changes to payments might take several seconds to appear. The maximum results per page is 100.
- **Signature**: `ListPayments(string? beginTime, string? endTime, string? sortOrder, string? cursor, string? locationId, long? total, string? last4, string? cardBrand, int? limit, string? offlineBeginTime, string? offlineEndTime, string? updatedAtBeginTime, string? updatedAtEndTime, ListPaymentsRequestSortField? sortField, bool? isOfflinePayment = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`beginTime` … `sortField`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `isOfflinePayment` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `begin_time` ← `beginTime`, `end_time` ← `endTime`, `sort_order` ← `sortOrder`, `cursor` ← `cursor`, `location_id` ← `locationId`, `total` ← `total`, `last_4` ← `last4`, `card_brand` ← `cardBrand`, `limit` ← `limit`, `is_offline_payment` ← `isOfflinePayment`, `offline_begin_time` ← `offlineBeginTime`, `offline_end_time` ← `offlineEndTime`, `updated_at_begin_time` ← `updatedAtBeginTime`, `updated_at_end_time` ← `updatedAtEndTime`, `sort_field` ← `sortField`
- **Returns**: `ListPaymentsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePayment
- **HTTP**: `PUT /v2/payments/{payment_id}` (Default (connect))
- **Notes**: Updates a payment with the APPROVED status. You can update the `amount_money` and `tip_money` using this endpoint.
- **Signature**: `UpdatePayment(string paymentId, UpdatePaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdatePaymentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
