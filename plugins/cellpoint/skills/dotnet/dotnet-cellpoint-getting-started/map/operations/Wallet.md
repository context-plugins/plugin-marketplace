# Wallet — operations

Accessor: `client.Wallet` · Source: `Api/Wallet.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### WalletStoreOriginalToken
- **HTTP**: `POST /payments/v1/orders/{orderId}/wallet-tokens` (Default (payments))
- **Notes**: Store original wallet token
- **Signature**: `WalletStoreOriginalToken(string orderId, SaveWalletPaymentTokenRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `WalletTokenizedToken`
- **Error**: `SdkException<WalletStoreOriginalTokenError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
