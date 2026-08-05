# ProductPricePoints — operations

Accessor: `client.ProductPricePoints` · Source: `Api/ProductPricePoints.cs` · 11 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ArchiveProductPricePoint
- **HTTP**: `DELETE /products/{product_id}/price_points/{price_point_id}.json` (Production)
- **Notes**: Archives a product price point.
- **Signature**: `ArchiveProductPricePoint(ProductIdModel productId, PricePointIdModel pricePointId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProductPricePointResponse`
- **Error**: `SdkException<ArchiveProductPricePointError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BulkCreateProductPricePoints
- **HTTP**: `POST /products/{product_id}/price_points/bulk.json` (Production)
- **Notes**: Creates multiple product price points in one request.
- **Signature**: `BulkCreateProductPricePoints(int productId, BulkCreateProductPricePointsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BulkCreateProductPricePointsResponse`
- **Error**: `SdkException<BulkCreateProductPricePointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetMapOfJsonElement(out IReadOnlyDictionary<string, JsonElement>)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateProductCurrencyPrices
- **HTTP**: `POST /product_price_points/{product_price_point_id}/currency_prices.json` (Production)
- **Notes**: Creates currency prices for a given currency that has been defined on the site level in your settings. When creating currency prices, they need to mirror the structure of your primary pricing. If the product price point defines a trial and/or setup fee, each currency must also define a trial and/or setup fee. Note: Currency Prices are not able to be created for custom product price points.
- **Signature**: `CreateProductCurrencyPrices(int productPricePointId, CreateProductCurrencyPricesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CurrencyPricesResponse`
- **Error**: `SdkException<CreateProductCurrencyPricesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorArrayMapResponse1(out ErrorArrayMapResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateProductPricePoint
- **HTTP**: `POST /products/{product_id}/price_points.json` (Production)
- **Notes**: Creates a Product Price Point. See the Product Price Point documentation for details.
- **Signature**: `CreateProductPricePoint(ProductIdModel productId, CreateProductPricePointRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ProductPricePointResponse`
- **Error**: `SdkException<CreateProductPricePointError>` — **Case A (typed)**
- **Error accessors**: `TryGetProductPricePointErrorResponse1(out ProductPricePointErrorResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAllProductPricePoints
- **HTTP**: `GET /products_price_points.json` (Production)
- **Notes**: Lists Product Price Points belonging to a site.
- **Signature**: `ListAllProductPricePoints(SortingDirection? direction, ListPricePointsFilter? filter, ListProductsPricePointsInclude? include, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `direction` — nullable, no default → **must pass explicitly**
  - `filter` — nullable, no default → **must pass explicitly**
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `filter` ← `filter`, `include` ← `include`, `page` ← `page`, `per_page` ← `perPage`
- **Returns**: `ListProductPricePointsResponse`
- **Error**: `SdkException<ListAllProductPricePointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListProductPricePoints
- **HTTP**: `GET /products/{product_id}/price_points.json` (Production)
- **Notes**: Retrieves a list of product price points.
- **Signature**: `ListProductPricePoints(ProductIdModel productId, bool? currencyPrices, IReadOnlyList<PricePointType>? filterType, bool? archived, int? page = 1, int? perPage = 10, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `currencyPrices` — nullable, no default → **must pass explicitly**
  - `filterType` — nullable, no default → **must pass explicitly**
  - `archived` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 10, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `currency_prices` ← `currencyPrices`, `filter[type]` ← `filterType`, `archived` ← `archived`
- **Returns**: `ListProductPricePointsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### PromoteProductPricePointToDefault
- **HTTP**: `PATCH /products/{product_id}/price_points/{price_point_id}/default.json` (Production)
- **Notes**: Sets a product price point as the default for the product. Note: Custom product price points cannot be set as the default for a product.
- **Signature**: `PromoteProductPricePointToDefault(int productId, int pricePointId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProductResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ReadProductPricePoint
- **HTTP**: `GET /products/{product_id}/price_points/{price_point_id}.json` (Production)
- **Notes**: Returns details for a specific product price point. You can achieve this by using either the product price point ID or handle.
- **Signature**: `ReadProductPricePoint(ProductIdModel productId, PricePointIdModel pricePointId, bool? currencyPrices, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `currencyPrices` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `currency_prices` ← `currencyPrices`
- **Returns**: `ProductPricePointResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnarchiveProductPricePoint
- **HTTP**: `PATCH /products/{product_id}/price_points/{price_point_id}/unarchive.json` (Production)
- **Notes**: Unarchives an archived product price point.
- **Signature**: `UnarchiveProductPricePoint(int productId, int pricePointId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProductPricePointResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateProductCurrencyPrices
- **HTTP**: `PUT /product_price_points/{product_price_point_id}/currency_prices.json` (Production)
- **Notes**: Updates the `price`s of currency prices for a given currency that exists on the product price point. When updating the pricing, it needs to mirror the structure of your primary pricing. If the product price point defines a trial and/or setup fee, each currency must also define a trial and/or setup fee. Note: Currency Prices cannot be updated for custom product price points.
- **Signature**: `UpdateProductCurrencyPrices(int productPricePointId, UpdateCurrencyPricesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CurrencyPricesResponse`
- **Error**: `SdkException<UpdateProductCurrencyPricesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorArrayMapResponse1(out ErrorArrayMapResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateProductPricePoint
- **HTTP**: `PUT /products/{product_id}/price_points/{price_point_id}.json` (Production)
- **Notes**: Updates a product price point. Note: Custom product price points cannot be updated.
- **Signature**: `UpdateProductPricePoint(ProductIdModel productId, PricePointIdModel pricePointId, UpdateProductPricePointRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ProductPricePointResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
