# ProductFamilies — operations

Accessor: `client.ProductFamilies` · Source: `Api/ProductFamilies.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateProductFamily
- **HTTP**: `POST /product_families.json` (Production)
- **Notes**: Creates a Product Family within your Advanced Billing site. Create a Product Family to act as a container for your products, components, and coupons. Full documentation on how Product Families operate within the Advanced Billing UI can be located here .
- **Signature**: `CreateProductFamily(CreateProductFamilyRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ProductFamilyResponse`
- **Error**: `SdkException<CreateProductFamilyError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse(out ErrorListResponse)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListProductFamilies
- **HTTP**: `GET /product_families.json` (Production)
- **Notes**: Lists Product Families for a site.
- **Signature**: `ListProductFamilies(BasicDateField? dateField, DateTimeOffset? startDate, DateTimeOffset? endDate, DateTimeOffset? startDatetime, DateTimeOffset? endDatetime, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`dateField` … `endDatetime`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date_field` ← `dateField`, `start_date` ← `startDate`, `end_date` ← `endDate`, `start_datetime` ← `startDatetime`, `end_datetime` ← `endDatetime`
- **Returns**: `IReadOnlyList<ProductFamilyResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListProductsForProductFamily
- **HTTP**: `GET /product_families/{product_family_id}/products.json` (Production)
- **Notes**: Retrieves a list of Products belonging to a Product Family.
- **Signature**: `ListProductsForProductFamily(string productFamilyId, BasicDateField? dateField, ListProductsFilter? filter, DateTimeOffset? startDate, DateTimeOffset? endDate, DateTimeOffset? startDatetime, DateTimeOffset? endDatetime, bool? includeArchived, ListProductsInclude? include, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`dateField` … `include`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`, `per_page` ← `perPage`, `date_field` ← `dateField`, `filter` ← `filter`, `start_date` ← `startDate`, `end_date` ← `endDate`, `start_datetime` ← `startDatetime`, `end_datetime` ← `endDatetime`, `include_archived` ← `includeArchived`, `include` ← `include`
- **Returns**: `IReadOnlyList<ProductResponse>`
- **Error**: `SdkException<ListProductsForProductFamilyError>` — **Case A (typed)**
- **Error accessors**: `TryGetString(out string)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadProductFamily
- **HTTP**: `GET /product_families/{id}.json` (Production)
- **Notes**: Retrieves a Product Family via the `product_family_id`. The response will contain a Product Family object. The product family can be specified either with the id number, or with the `handle:my-family` format.
- **Signature**: `ReadProductFamily(int id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProductFamilyResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
