# Coupons — operations

Accessor: `client.Coupons` · Source: `Api/Coupons.cs` · 14 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ArchiveCoupon
- **HTTP**: `DELETE /product_families/{product_family_id}/coupons/{coupon_id}.json` (Production)
- **Notes**: Archives a coupon, making it unavailable for future use while remaining active on existing subscriptions. Archiving makes that Coupon unavailable for future use, but allows it to remain attached and functional on existing Subscriptions that are using it. The `archived_at` date and time will be assigned.
- **Signature**: `ArchiveCoupon(int productFamilyId, int couponId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CouponResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateCoupon
- **HTTP**: `POST /product_families/{product_family_id}/coupons.json` (Production)
- **Notes**: Creates a coupon under the specified product family. You can create either a flat amount coupon, by specifying `amount_in_cents`, or percentage coupon by specifying `percentage`. See Apply Coupons to Subscriptions for information on applying a coupon to a subscription in the Advanced Billing UI.
- **Signature**: `CreateCoupon(int productFamilyId, CouponRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CouponResponse`
- **Error**: `SdkException<CreateCouponError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCouponSubcodes
- **HTTP**: `POST /coupons/{coupon_id}/codes.json` (Production)
- **Notes**: Creates subcodes for an existing coupon. Coupon Subcodes Intro Coupon Subcodes allow you to create a set of unique codes that allow you to expand the use of one coupon. For example: Master Coupon Code: SPRING2020 Coupon Subcodes: SPRING90210 DP80302 SPRINGBALTIMORE Coupon subcodes can be administered in the Admin Interface or via the API. When creating a coupon subcode, you must specify a coupon to attach it to using the coupon_id. Valid coupon subcodes are all capital letters, contain only letters and numbers, and do not have any spaces. Lowercase letters will be capitalized before the subcode is created. Coupon Subcodes Documentation Full documentation on how to create coupon subcodes in the Advanced Billing UI can be located here . Additionally, for documentation on how to apply a coupon to a Subscription within the Advanced Billing UI, see our documentation here . Create Coupon Subcode This request allows you to create specific subcodes underneath an existing coupon code. *Note*: If you are using any of the allowed special characters ("%", "@", "+", "-", "_", and "."), you must encode them for use in the URL. % to %25 @ to %40 + to %2B - to %2D _ to %5F . to %2E So, if the coupon subcode is `20%OFF`, the URL to delete this coupon subcode would be: `https://&lt;subdomain&gt;.chargify.com/coupons/567/codes/20%25OFF.&lt;format&gt;`.
- **Signature**: `CreateCouponSubcodes(int couponId, CouponSubcodes? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CouponSubcodesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateOrUpdateCouponCurrencyPrices
- **HTTP**: `PUT /coupons/{coupon_id}/currency_prices.json` (Production)
- **Notes**: Creates and/or updates currency prices for an existing coupon. Multiple prices can be created or updated in a single request but each of the currencies must be defined on the site level already and the coupon must be an amount-based coupon, not percentage. Currency pricing for coupons must mirror the setup of the primary coupon pricing - if the primary coupon is percentage based, you will not be able to define pricing in non-primary currencies.
- **Signature**: `CreateOrUpdateCouponCurrencyPrices(int couponId, CouponCurrencyRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CouponCurrencyResponse`
- **Error**: `SdkException<CreateOrUpdateCouponCurrencyPricesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorStringMapResponse(out ErrorStringMapResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteCouponSubcode
- **HTTP**: `DELETE /coupons/{coupon_id}/codes/{subcode}.json` (Production)
- **Notes**: Deletes a specific subcode from a coupon. Given a coupon with an ID of 567, and a coupon subcode of 20OFF, the URL to `DELETE` this coupon subcode would be: http://subdomain.chargify.com/coupons/567/codes/20OFF.&lt;format&gt; Note: If you are using any of the allowed special characters (“%”, “@”, “+”, “-”, “_”, and “.”), you must encode them for use in the URL. | Special character | Encoding | |-------------------|----------| | % | %25 | | @ | %40 | | + | %2B | | – | %2D | | _ | %5F | | . | %2E | Percent Encoding Example Or if the coupon subcode is 20%OFF, the URL to delete this coupon subcode would be: @https://&lt;subdomain&gt;.chargify.com/coupons/567/codes/20%25OFF.&lt;format&gt;.
- **Signature**: `DeleteCouponSubcode(int couponId, string subcode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteCouponSubcodeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### FindCoupon
- **HTTP**: `GET /coupons/find.json` (Production)
- **Notes**: Searches for a coupon by code, returning a 404 if no coupon is found. By passing a code parameter, the find will attempt to locate a coupon that matches that code. If you have more than one product family and if the coupon you are trying to find does not belong to the default product family in your site, then you will need to specify (either in the url or as a query string param) the product family id.
- **Signature**: `FindCoupon(int? productFamilyId, string? code, bool? currencyPrices, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `productFamilyId` — nullable, no default → **must pass explicitly**
  - `code` — nullable, no default → **must pass explicitly**
  - `currencyPrices` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `product_family_id` ← `productFamilyId`, `code` ← `code`, `currency_prices` ← `currencyPrices`
- **Returns**: `CouponResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListCouponSubcodes
- **HTTP**: `GET /coupons/{coupon_id}/codes.json` (Production)
- **Notes**: Lists the subcodes attached to a coupon.
- **Signature**: `ListCouponSubcodes(int couponId, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `CouponSubcodes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListCoupons
- **HTTP**: `GET /coupons.json` (Production)
- **Notes**: Lists coupons for a site.
- **Signature**: `ListCoupons(ListCouponsFilter? filter, bool? currencyPrices, int? page = 1, int? perPage = 30, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `currencyPrices` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 30, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `filter` ← `filter`, `currency_prices` ← `currencyPrices`
- **Returns**: `IReadOnlyList<CouponResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListCouponsForProductFamily
- **HTTP**: `GET /product_families/{product_family_id}/coupons.json` (Production)
- **Notes**: Lists coupons for a specific product family in a site.
- **Signature**: `ListCouponsForProductFamily(int productFamilyId, ListCouponsFilter? filter, bool? currencyPrices, int? page = 1, int? perPage = 30, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - `currencyPrices` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 30, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `filter` ← `filter`, `currency_prices` ← `currencyPrices`
- **Returns**: `IReadOnlyList<CouponResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadCoupon
- **HTTP**: `GET /product_families/{product_family_id}/coupons/{coupon_id}.json` (Production)
- **Notes**: Returns a coupon by its Advanced Billing-assigned ID. You must identify the Coupon in this call by the ID parameter that Advanced Billing assigns. If instead you would like to find a Coupon using a Coupon code, see the Coupon Find method. If the coupon is set to `use_site_exchange_rate: true`, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency.
- **Signature**: `ReadCoupon(int productFamilyId, int couponId, bool? currencyPrices, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `currencyPrices` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `currency_prices` ← `currencyPrices`
- **Returns**: `CouponResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ReadCouponUsage
- **HTTP**: `GET /product_families/{product_family_id}/coupons/{coupon_id}/usage.json` (Production)
- **Notes**: Lists coupon usage details, one entry per product.
- **Signature**: `ReadCouponUsage(int productFamilyId, int couponId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CouponUsage>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCoupon
- **HTTP**: `PUT /product_families/{product_family_id}/coupons/{coupon_id}.json` (Production)
- **Notes**: Updates a coupon. You can restrict a coupon to only apply to specific products / components by optionally passing in hashes of `restricted_products` and/or `restricted_components` in the format: `{ "&lt;product/component_id&gt;": boolean_value }`
- **Signature**: `UpdateCoupon(int productFamilyId, int couponId, CouponRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CouponResponse`
- **Error**: `SdkException<UpdateCouponError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCouponSubcodes
- **HTTP**: `PUT /coupons/{coupon_id}/codes.json` (Production)
- **Notes**: Updates the subcodes for a coupon, replacing all existing subcodes with the new list. Send an array of new coupon subcodes. Note : All current subcodes for that Coupon will be deleted first, and replaced with the list of subcodes sent to this endpoint. The response will contain: The created subcodes, Subcodes that were not created because they already exist, Any subcodes not created because they are invalid.
- **Signature**: `UpdateCouponSubcodes(int couponId, CouponSubcodes? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CouponSubcodesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ValidateCoupon
- **HTTP**: `GET /coupons/validate.json` (Production)
- **Notes**: Verifies whether a specific coupon code is valid. This method is useful for validating coupon codes that are entered by a customer. If the coupon is found and is valid, the coupon will be returned with a 200 status code. If the coupon is invalid, the status code will be 404 and the response will say why it is invalid. If the coupon is valid, the status code will be 200 and the coupon will be returned. The following reasons for invalidity are supported: Coupon not found Coupon is invalid Coupon expired If you have more than one product family and if the coupon you are validating does not belong to the first product family in your site, then you will need to specify the product family, either in the url or as a query string param. This can be done by supplying the id or the handle in the `handle:my-family` format. Eg. https://&lt;subdomain&gt;.chargify.com/product_families/handle:&lt;product_family_handle&gt;/coupons/validate.&lt;format&gt;?code=&lt;coupon_code&gt; Or: https://&lt;subdomain&gt;.chargify.com/coupons/validate.&lt;format&gt;?code=&lt;coupon_code&gt;&amp;product_family_id=&lt;id&gt;
- **Signature**: `ValidateCoupon(string code, int? productFamilyId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `productFamilyId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `code` ← `code`, `product_family_id` ← `productFamilyId`
- **Returns**: `CouponResponse`
- **Error**: `SdkException<ValidateCouponError>` — **Case A (typed)**
- **Error accessors**: `TryGetSingleStringErrorResponse(out SingleStringErrorResponse)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
