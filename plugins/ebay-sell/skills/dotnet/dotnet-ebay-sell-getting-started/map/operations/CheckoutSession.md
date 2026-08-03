# CheckoutSession — operations

Accessor: `client.CheckoutSession` · Source: `Api/CheckoutSession.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ApplyCoupon
- **HTTP**: `POST /checkout_session/{checkoutSessionId}/apply_coupon` (Default1 (apix))
- **Signature**: `ApplyCoupon(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, CouponRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionResponse`
- **Error**: `SdkException<ApplyCouponError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCheckoutSession
- **HTTP**: `GET /checkout_session/{checkoutSessionId}` (Default1 (apix))
- **Signature**: `GetCheckoutSession(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionResponse`
- **Error**: `SdkException<GetCheckoutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InitiateCheckoutSession
- **HTTP**: `POST /checkout_session/initiate` (Default1 (apix))
- **Signature**: `InitiateCheckoutSession(string xEbayCMarketplaceId, string? xEbayCEnduserctx, CreateSignInCheckoutSessionRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionResponse`
- **Error**: `SdkException<InitiateCheckoutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlaceOrder
- **HTTP**: `POST /checkout_session/{checkoutSessionId}/place_order` (Default1 (apix))
- **Signature**: `PlaceOrder(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `PurchaseOrderSummary`
- **Error**: `SdkException<PlaceOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveCoupon
- **HTTP**: `POST /checkout_session/{checkoutSessionId}/remove_coupon` (Default1 (apix))
- **Signature**: `RemoveCoupon(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, CouponRequest2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionResponse`
- **Error**: `SdkException<RemoveCouponError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAddonServicesStatus
- **HTTP**: `POST /checkout_session/{checkoutSessionId}/update_add_on_services_status` (Default1 (apix))
- **Signature**: `UpdateAddonServicesStatus(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, UpdateAddonServicesRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionResponse`
- **Error**: `SdkException<UpdateAddonServicesStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePaymentInfo
- **HTTP**: `POST /checkout_session/{checkoutSessionId}/update_payment_info` (Default1 (apix))
- **Signature**: `UpdatePaymentInfo(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, UpdatePaymentInformation1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionResponse`
- **Error**: `SdkException<UpdatePaymentInfoError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateQuantity
- **HTTP**: `POST /checkout_session/{checkoutSessionId}/update_quantity` (Default1 (apix))
- **Signature**: `UpdateQuantity(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, UpdateQuantity1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionResponse`
- **Error**: `SdkException<UpdateQuantityError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateShippingAddress
- **HTTP**: `POST /checkout_session/{checkoutSessionId}/update_shipping_address` (Default1 (apix))
- **Signature**: `UpdateShippingAddress(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, ShippingAddressImpl1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionResponse`
- **Error**: `SdkException<UpdateShippingAddressError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateShippingOption
- **HTTP**: `POST /checkout_session/{checkoutSessionId}/update_shipping_option` (Default1 (apix))
- **Signature**: `UpdateShippingOption(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, UpdateShippingOption1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CheckoutSessionResponse`
- **Error**: `SdkException<UpdateShippingOptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
