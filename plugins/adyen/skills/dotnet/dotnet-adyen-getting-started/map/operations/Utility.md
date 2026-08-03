# Utility — operations

Accessor: `client.Utility` · Source: `Api/Utility.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostApplePaySessions
- **HTTP**: `POST /applePay/sessions` (Default (balanceplatform-api-test))
- **Notes**: You need to use this endpoint if you have an API-only integration with Apple Pay which uses Adyen's Apple Pay certificate. The endpoint returns the Apple Pay session data which you need to complete the Apple Pay session validation .
- **Signature**: `PostApplePaySessions(string? idempotencyKey, ApplePaySessionRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApplePaySessionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PostOriginKeys
- **HTTP**: `POST /originKeys` (Default (balanceplatform-api-test))
- **Notes**: This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains. &gt; If you're still using origin key for your Web Drop-in or Components integration, we recommend switching to client key . This allows you to use a single key for all origins, add or remove origins without generating a new key, and detect the card type from the number entered in your payment form.
- **Signature**: `PostOriginKeys(string? idempotencyKey, UtilityRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `UtilityResponse`
- **Error**: `SdkException<PostOriginKeysError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostPaypalUpdateOrder
- **HTTP**: `POST /paypal/updateOrder` (Default (balanceplatform-api-test))
- **Notes**: Updates the order for PayPal Express Checkout. This can be used to update the PayPal lightbox with an updated amount and delivery methods based on the delivery address.
- **Signature**: `PostPaypalUpdateOrder(string? idempotencyKey, PaypalUpdateOrderRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PaypalUpdateOrderResponse`
- **Error**: `SdkException<PostPaypalUpdateOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostValidateShopperId
- **HTTP**: `POST /validateShopperId` (Default (balanceplatform-api-test))
- **Notes**: Validates the shopperId.
- **Signature**: `PostValidateShopperId(ValidateShopperIdRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ValidateShopperIdResponse`
- **Error**: `SdkException<PostValidateShopperIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetCheckoutErrorResponseEntity(out CheckoutErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
