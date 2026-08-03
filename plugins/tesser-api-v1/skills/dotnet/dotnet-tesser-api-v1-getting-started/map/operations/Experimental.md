# Experimental — operations

Accessor: `client.Experimental` · Source: `Api/Experimental.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ExecutePayment
- **HTTP**: `POST /payments/{payment_id}/steps/{step_id}` (Default (tesser-platform-v1-pull-51-me-98e48a7))
- **Notes**: Accepts a signature for a payment step. Currently echoes the request, structured for future execution logic.
- **Signature**: `ExecutePayment(string paymentId, string stepId, string authorization, ExecutePaymentRequestDto body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
