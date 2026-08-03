# GuestCheckoutSession — operations

Accessor: `client.GuestCheckoutSession` · Source: `Api/GuestCheckoutSession.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ApplyGuestCoupon
- **HTTP**: `POST /guest_checkout_session/{checkoutSessionId}/apply_coupon` (Default2 (apix))
- **Signature**: `ApplyGuestCoupon(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, CouponRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GuestCheckoutSessionResponseV2`
- **Error**: `SdkException<ApplyGuestCouponError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetGuestCheckoutSession
- **HTTP**: `GET /guest_checkout_session/{checkoutSessionId}` (Default2 (apix))
- **Signature**: `GetGuestCheckoutSession(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GuestCheckoutSessionResponseV2`
- **Error**: `SdkException<GetGuestCheckoutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InitiateGuestCheckoutSession
- **HTTP**: `POST /guest_checkout_session/initiate` (Default2 (apix))
- **Signature**: `InitiateGuestCheckoutSession(string xEbayCMarketplaceId, string? xEbayCEnduserctx, CreateGuestCheckoutSessionRequestV21? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GuestCheckoutSessionResponseV2`
- **Error**: `SdkException<InitiateGuestCheckoutSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveGuestCoupon
- **HTTP**: `POST /guest_checkout_session/{checkoutSessionId}/remove_coupon` (Default2 (apix))
- **Signature**: `RemoveGuestCoupon(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, CouponRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GuestCheckoutSessionResponseV2`
- **Error**: `SdkException<RemoveGuestCouponError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateGuestQuantity
- **HTTP**: `POST /guest_checkout_session/{checkoutSessionId}/update_quantity` (Default2 (apix))
- **Signature**: `UpdateGuestQuantity(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, LineItemReference? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GuestCheckoutSessionResponseV2`
- **Error**: `SdkException<UpdateGuestQuantityError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateGuestShippingAddress
- **HTTP**: `POST /guest_checkout_session/{checkoutSessionId}/update_shipping_address` (Default2 (apix))
- **Signature**: `UpdateGuestShippingAddress(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, ShippingAddressImpl11? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GuestCheckoutSessionResponseV2`
- **Error**: `SdkException<UpdateGuestShippingAddressError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateGuestShippingOption
- **HTTP**: `POST /guest_checkout_session/{checkoutSessionId}/update_shipping_option` (Default2 (apix))
- **Signature**: `UpdateGuestShippingOption(string checkoutSessionId, string xEbayCMarketplaceId, string? xEbayCEnduserctx, UpdateShippingOption? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GuestCheckoutSessionResponseV2`
- **Error**: `SdkException<UpdateGuestShippingOptionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
