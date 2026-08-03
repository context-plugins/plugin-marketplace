# Offers — operations

Accessor: `client.Offers` · Source: `Api/Offers.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ArchiveOffer
- **HTTP**: `PUT /offers/{offer_id}/archive.json` (Production)
- **Notes**: Archives an existing offer. Please provide an `offer_id` in order to archive the correct item.
- **Signature**: `ArchiveOffer(int offerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateOffer
- **HTTP**: `POST /offers.json` (Production)
- **Notes**: Creates an offer within your Advanced Billing site. Documentation Offers allow you to package complicated combinations of products, components and coupons into a convenient package which can then be subscribed to just like products. Once an offer is defined it can be used as an alternative to the product when creating subscriptions. Full documentation on how to use offers in the Advanced Billing UI can be located here . Using a Product Price Point You can optionally pass in a `product_price_point_id` that corresponds with the `product_id` and the offer will use that price point. If a `product_price_point_id` is not passed in, the product's default price point will be used.
- **Signature**: `CreateOffer(CreateOfferRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `OfferResponse`
- **Error**: `SdkException<CreateOfferError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorArrayMapResponse(out ErrorArrayMapResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListOffers
- **HTTP**: `GET /offers.json` (Production)
- **Notes**: Lists offers for a site.
- **Signature**: `ListOffers(bool? includeArchived, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeArchived` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `include_archived` ← `includeArchived`
- **Returns**: `ListOffersResponse`
- **Error**: `SdkException<ListOffersError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadOffer
- **HTTP**: `GET /offers/{offer_id}.json` (Production)
- **Notes**: Returns a specific offer's attributes. This is different from listing all offers for a site, as it requires an `offer_id`.
- **Signature**: `ReadOffer(int offerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `OfferResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnarchiveOffer
- **HTTP**: `PUT /offers/{offer_id}/unarchive.json` (Production)
- **Notes**: Unarchives a previously archived offer. Please provide an `offer_id` in order to unarchive the correct item.
- **Signature**: `UnarchiveOffer(int offerId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
