# ApplePay — operations

Accessor: `client.ApplePay` · Source: `Api/ApplePay.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ApplePayStoreEncryptedToken
- **HTTP**: `POST /payments/v1/orders/{orderId}/apple-pay-tokens` (Default (payments))
- **Notes**: Stores an Apple Pay token for later use.
- **Signature**: `ApplePayStoreEncryptedToken(string orderId, Guid? idempotencyKey, SavePkpaymentTokenRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AppleTokenizedToken`
- **Error**: `SdkException<ApplePayStoreEncryptedTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
