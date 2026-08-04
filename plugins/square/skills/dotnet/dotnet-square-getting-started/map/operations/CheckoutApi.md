# CheckoutApi — operations

Accessor: `client.CheckoutApi` · Source: `Api/CheckoutApi.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateCheckout
- **HTTP**: `POST /v2/locations/{location_id}/checkouts` (Default (connect))
- **Notes**: Links a `checkoutId` to a `checkout_page_url` that customers are directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com. NOTE: The Checkout API has been updated with new features. For more information, see Checkout API highlights .
- **Signature**: `CreateCheckout(string locationId, CreateCheckoutRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateCheckoutResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreatePaymentLink
- **HTTP**: `POST /v2/online-checkout/payment-links` (Default (connect))
- **Notes**: Creates a Square-hosted checkout page. Applications can share the resulting payment link with their buyer to pay for goods and services.
- **Signature**: `CreatePaymentLink(CreatePaymentLinkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreatePaymentLinkResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeletePaymentLink
- **HTTP**: `DELETE /v2/online-checkout/payment-links/{id}` (Default (connect))
- **Notes**: Deletes a payment link.
- **Signature**: `DeletePaymentLink(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeletePaymentLinkResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListPaymentLinks
- **HTTP**: `GET /v2/online-checkout/payment-links` (Default (connect))
- **Notes**: Lists all payment links.
- **Signature**: `ListPaymentLinks(string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cursor` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `ListPaymentLinksResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveLocationSettings
- **HTTP**: `GET /v2/online-checkout/location-settings/{location_id}` (Default (connect))
- **Notes**: Retrieves the location-level settings for a Square-hosted checkout page.
- **Signature**: `RetrieveLocationSettings(string locationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveLocationSettingsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveMerchantSettings
- **HTTP**: `GET /v2/online-checkout/merchant-settings` (Default (connect))
- **Notes**: Retrieves the merchant-level settings for a Square-hosted checkout page.
- **Signature**: `RetrieveMerchantSettings(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveMerchantSettingsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrievePaymentLink
- **HTTP**: `GET /v2/online-checkout/payment-links/{id}` (Default (connect))
- **Notes**: Retrieves a payment link.
- **Signature**: `RetrievePaymentLink(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrievePaymentLinkResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateLocationSettings
- **HTTP**: `PUT /v2/online-checkout/location-settings/{location_id}` (Default (connect))
- **Notes**: Updates the location-level settings for a Square-hosted checkout page.
- **Signature**: `UpdateLocationSettings(string locationId, UpdateLocationSettingsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateLocationSettingsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateMerchantSettings
- **HTTP**: `PUT /v2/online-checkout/merchant-settings` (Default (connect))
- **Notes**: Updates the merchant-level settings for a Square-hosted checkout page.
- **Signature**: `UpdateMerchantSettings(UpdateMerchantSettingsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateMerchantSettingsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdatePaymentLink
- **HTTP**: `PUT /v2/online-checkout/payment-links/{id}` (Default (connect))
- **Notes**: Updates a payment link. You can update the `payment_link` fields such as `description`, `checkout_options`, and `pre_populated_data`. You cannot update other fields such as the `order_id`, `version`, `URL`, or `timestamp` field.
- **Signature**: `UpdatePaymentLink(string id, UpdatePaymentLinkRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdatePaymentLinkResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
