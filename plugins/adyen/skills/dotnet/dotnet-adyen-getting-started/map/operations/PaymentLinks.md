# PaymentLinks — operations

Accessor: `client.PaymentLinks` · Source: `Api/PaymentLinks.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPaymentLinksLinkId
- **HTTP**: `GET /paymentLinks/{linkId}` (Default (checkout-test))
- **Notes**: Retrieves the payment link details using the payment link `id`.
- **Signature**: `GetPaymentLinksLinkId(string linkId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PaymentLinkResponse`
- **Error**: `SdkException<GetPaymentLinksLinkIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchPaymentLinksLinkId
- **HTTP**: `PATCH /paymentLinks/{linkId}` (Default (checkout-test))
- **Notes**: Updates the status of a payment link. Use this endpoint to force the expiry of a payment link .
- **Signature**: `PatchPaymentLinksLinkId(string linkId, UpdatePaymentLinkRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentLinkResponse`
- **Error**: `SdkException<PatchPaymentLinksLinkIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaymentLinks
- **HTTP**: `POST /paymentLinks` (Default (checkout-test))
- **Notes**: Creates a payment link to a Pay by Link page where the shopper can pay. The list of payment methods presented to the shopper depends on the `currency` and `country` parameters sent in the request. For more information, refer to Pay by Link documentation .
- **Signature**: `PostPaymentLinks(string? idempotencyKey, PaymentLinkRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaymentLinkResponse`
- **Error**: `SdkException<PostPaymentLinksError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError(out ServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
