# Refunds — operations

Accessor: `client.Refunds` · Source: `Api/Refunds.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPaymentRefund
- **HTTP**: `GET /v2/refunds/{refund_id}` (Default (connect))
- **Notes**: Retrieves a specific refund using the `refund_id`.
- **Signature**: `GetPaymentRefund(string refundId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetPaymentRefundResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPaymentRefunds
- **HTTP**: `GET /v2/refunds` (Default (connect))
- **Notes**: Retrieves a list of refunds for the account making the request. Results are eventually consistent, and new refunds or changes to refunds might take several seconds to appear. The maximum results per page is 100.
- **Signature**: `ListPaymentRefunds(string? beginTime, string? endTime, string? sortOrder, string? cursor, string? locationId, string? status, string? sourceType, int? limit, string? updatedAtBeginTime, string? updatedAtEndTime, ListPaymentRefundsRequestSortField? sortField, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`beginTime` … `sortField`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `begin_time` ← `beginTime`, `end_time` ← `endTime`, `sort_order` ← `sortOrder`, `cursor` ← `cursor`, `location_id` ← `locationId`, `status` ← `status`, `source_type` ← `sourceType`, `limit` ← `limit`, `updated_at_begin_time` ← `updatedAtBeginTime`, `updated_at_end_time` ← `updatedAtEndTime`, `sort_field` ← `sortField`
- **Returns**: `ListPaymentRefundsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RefundPayment
- **HTTP**: `POST /v2/refunds` (Default (connect))
- **Notes**: Refunds a payment. You can refund the entire payment amount or a portion of it. You can use this endpoint to refund a card payment or record a refund of a cash or external payment. For more information, see Refund Payment .
- **Signature**: `RefundPayment(RefundPaymentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RefundPaymentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
