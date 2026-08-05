# Checkout — operations

Accessor: `client.Checkout` · Source: `Api/Checkout.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckoutInvoke
- **HTTP**: `POST /shipment/v1/checkout` (Postnl (api))
- **Signature**: `CheckoutInvoke(CheckoutRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutResponse`
- **Error**: `SdkException<CheckoutError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequest(out InvalidRequest)` [400] · `TryGetUnauthorized(out Unauthorized)` [401] · `TryGetMethodNotAllowedOnlyPost(out MethodNotAllowedOnlyPost)` [405] · `TryGetTooManyRequests(out TooManyRequests)` [429] · `TryGetInternalServerError(out InternalServerError)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
