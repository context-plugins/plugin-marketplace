# RecurringApi — operations

Accessor: `client.RecurringApi` · Source: `Api/RecurringApi.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteStoredPaymentMethodsStoredPaymentMethodId
- **HTTP**: `DELETE /storedPaymentMethods/{storedPaymentMethodId}` (Default (checkout-test))
- **Notes**: Deletes the token identified in the path. The token can no longer be used with payment requests.
- **Signature**: `DeleteStoredPaymentMethodsStoredPaymentMethodId(string storedPaymentMethodId, string shopperReference, string merchantAccount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `shopperReference` ← `shopperReference`, `merchantAccount` ← `merchantAccount`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetStoredPaymentMethods
- **HTTP**: `GET /storedPaymentMethods` (Default (checkout-test))
- **Notes**: Lists the tokens for stored payment details for the shopper identified in the path, if there are any available. The token ID can be used with payment requests for the shopper's payment. A summary of the stored details is included.
- **Signature**: `GetStoredPaymentMethods(string? shopperReference, string? merchantAccount, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `shopperReference` — nullable, no default → **must pass explicitly**
  - `merchantAccount` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `shopperReference` ← `shopperReference`, `merchantAccount` ← `merchantAccount`
- **Returns**: `ListStoredPaymentMethodsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostForward
- **HTTP**: `POST /forward` (Default (checkout-test))
- **Notes**: Forwards the payment details you stored with Adyen to a third-party that you specify and returns the response from the third-party. Supports forwarding stored card details or network tokens . For more information, see Forward stored payment details .
- **Signature**: `PostForward(string? idempotencyKey, CheckoutForwardRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutForwardResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostStoredPaymentMethods
- **HTTP**: `POST /storedPaymentMethods` (Default (checkout-test))
- **Notes**: Creates a token to store the shopper's payment details. This token can be used for the shopper's future payments.
- **Signature**: `PostStoredPaymentMethods(string? idempotencyKey, StoredPaymentMethodRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `StoredPaymentMethodResource`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
