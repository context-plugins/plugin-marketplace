# ComponentPricePoints — operations

Accessor: `client.ComponentPricePoints` · Source: `Api/ComponentPricePoints.cs` · 12 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ArchiveComponentPricePoint
- **HTTP**: `DELETE /components/{component_id}/price_points/{price_point_id}.json` (Production)
- **Notes**: Archives a component price point. Subscriptions using a price point that has been archived will continue using it until they're moved to another price point.
- **Signature**: `ArchiveComponentPricePoint(ComponentIdModel componentId, PricePointIdModel pricePointId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComponentPricePointResponse`
- **Error**: `SdkException<ArchiveComponentPricePointError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### BulkCreateComponentPricePoints
- **HTTP**: `POST /components/{component_id}/price_points/bulk.json` (Production)
- **Notes**: Creates multiple component price points in one request.
- **Signature**: `BulkCreateComponentPricePoints(string componentId, CreateComponentPricePointsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentPricePointsResponse`
- **Error**: `SdkException<BulkCreateComponentPricePointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CloneComponentPricePoint
- **HTTP**: `POST /components/{component_id}/price_points/{price_point_id}/clone.json` (Production)
- **Notes**: Clones a component price point. Custom price points (tied to a specific subscription) cannot be cloned. The following attributes are copied from the source price point: - Pricing scheme - All price tiers (with starting/ending quantities and unit prices) - Tax included setting - Currency prices (if definitive pricing is set) - Overage pricing (for prepaid usage components) - Interval settings (if multi-frequency is enabled) - Event-based billing segments (if applicable)
- **Signature**: `CloneComponentPricePoint(ComponentIdModel componentId, PricePointIdModel pricePointId, CloneComponentPricePointRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentPricePointCurrencyOverageResponse`
- **Error**: `SdkException<CloneComponentPricePointError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [404] · `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateComponentPricePoint
- **HTTP**: `POST /components/{component_id}/price_points.json` (Production)
- **Notes**: Creates a price point for an existing component.
- **Signature**: `CreateComponentPricePoint(int componentId, CreateComponentPricePointRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentPricePointResponse`
- **Error**: `SdkException<CreateComponentPricePointError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorArrayMapResponse(out ErrorArrayMapResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateCurrencyPrices
- **HTTP**: `POST /price_points/{price_point_id}/currency_prices.json` (Production)
- **Notes**: Creates currency prices for a given currency defined at the site level. When creating currency prices, they need to mirror the structure of your primary pricing. For each price level defined on the component price point, there should be a matching price level created in the given currency. Note: Currency Prices are not able to be created for custom price points.
- **Signature**: `CreateCurrencyPrices(int pricePointId, CreateCurrencyPricesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentCurrencyPricesResponse`
- **Error**: `SdkException<CreateCurrencyPricesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorArrayMapResponse(out ErrorArrayMapResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAllComponentPricePoints
- **HTTP**: `GET /components_price_points.json` (Production)
- **Notes**: Lists all component price points belonging to a site.
- **Signature**: `ListAllComponentPricePoints(ListComponentsPricePointsInclude? include, SortingDirection? direction, ListPricePointsFilter? filter, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - `direction` — nullable, no default → **must pass explicitly**
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `page` ← `page`, `per_page` ← `perPage`, `direction` ← `direction`, `filter` ← `filter`
- **Returns**: `ListComponentsPricePointsResponse`
- **Error**: `SdkException<ListAllComponentPricePointsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ListComponentPricePoints
- **HTTP**: `GET /components/{component_id}/price_points.json` (Production)
- **Notes**: Lists the price points associated with a component. You may specify the component by using either the numeric id or the `handle:gold` syntax. If the price point is set to `use_site_exchange_rate: true`, it will return pricing based on the current exchange rate. If the flag is set to false, it will return all of the defined prices for each currency.
- **Signature**: `ListComponentPricePoints(int componentId, bool? currencyPrices, IReadOnlyList<PricePointType>? filterType, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `currencyPrices` — nullable, no default → **must pass explicitly**
  - `filterType` — nullable, no default → **must pass explicitly**
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `currency_prices` ← `currencyPrices`, `page` ← `page`, `per_page` ← `perPage`, `filter[type]` ← `filterType`
- **Returns**: `ComponentPricePointsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### PromoteComponentPricePointToDefault
- **HTTP**: `PUT /components/{component_id}/price_points/{price_point_id}/default.json` (Production)
- **Notes**: Sets a new default price point for the component. This new default will apply to all new subscriptions going forward - existing subscriptions will remain on their current price point. See Price Points Documentation for more information on price points and moving subscriptions between price points. Note: Custom price points are not able to be set as the default for a component.
- **Signature**: `PromoteComponentPricePointToDefault(int componentId, int pricePointId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComponentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ReadComponentPricePoint
- **HTTP**: `GET /components/{component_id}/price_points/{price_point_id}.json` (Production)
- **Notes**: Returns details for a specific component price point. You can achieve this by using either the component price point ID or handle.
- **Signature**: `ReadComponentPricePoint(ComponentIdModel componentId, PricePointIdModel pricePointId, bool? currencyPrices, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `currencyPrices` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `currency_prices` ← `currencyPrices`
- **Returns**: `ComponentPricePointCurrencyOverageResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UnarchiveComponentPricePoint
- **HTTP**: `PUT /components/{component_id}/price_points/{price_point_id}/unarchive.json` (Production)
- **Notes**: Unarchives a component price point.
- **Signature**: `UnarchiveComponentPricePoint(int componentId, int pricePointId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ComponentPricePointResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateComponentPricePoint
- **HTTP**: `PUT /components/{component_id}/price_points/{price_point_id}.json` (Production)
- **Notes**: Updates a component price point and its associated prices. Passing in a price bracket without an `id` will attempt to create a new price. Including an `id` will update the corresponding price, and including the `_destroy` flag set to true along with the `id` will remove that price. Note: Custom price points cannot be updated directly. They must be edited through the Subscription.
- **Signature**: `UpdateComponentPricePoint(ComponentIdModel componentId, PricePointIdModel pricePointId, UpdateComponentPricePointRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentPricePointResponse`
- **Error**: `SdkException<UpdateComponentPricePointError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorArrayMapResponse(out ErrorArrayMapResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateCurrencyPrices
- **HTTP**: `PUT /price_points/{price_point_id}/currency_prices.json` (Production)
- **Notes**: Updates currency prices for a given currency defined at the site level. Note: Currency Prices are not able to be updated for custom price points.
- **Signature**: `UpdateCurrencyPrices(int pricePointId, UpdateCurrencyPricesRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ComponentCurrencyPricesResponse`
- **Error**: `SdkException<UpdateCurrencyPricesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorArrayMapResponse(out ErrorArrayMapResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
