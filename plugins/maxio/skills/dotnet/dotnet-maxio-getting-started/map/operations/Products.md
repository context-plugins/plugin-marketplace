# Products — operations

Accessor: `client.Products` · Source: `Api/Products.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ArchiveProduct
- **HTTP**: `DELETE /products/{product_id}.json` (Production)
- **Notes**: Archives the product. All current subscribers will be unaffected; their subscription/purchase will continue to be charged monthly. This will restrict the option to chose the product for purchase via the Billing Portal, as well as disable Public Signup Pages for the product.
- **Signature**: `ArchiveProduct(int productId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProductResponse`
- **Error**: `SdkException<ArchiveProductError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateProduct
- **HTTP**: `POST /product_families/{product_family_id}/products.json` (Production)
- **Notes**: Creates a product in your Advanced Billing site. If you have the new Catalog experience enabled, the `auto_create_signup_page` parameter is not supported. If `auto_create_signup_page` is included (with any value) an error is returned. See the following product documentation for more information: Products Documentation Changing a Subscription's Product
- **Signature**: `CreateProduct(string productFamilyId, CreateOrUpdateProductRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ProductResponse`
- **Error**: `SdkException<CreateProductError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListProducts
- **HTTP**: `GET /products.json` (Production)
- **Notes**: Lists products belonging to a site.
- **Signature**: `ListProducts(BasicDateField? dateField, ListProductsFilter? filter, DateTimeOffset? endDate, DateTimeOffset? endDatetime, DateTimeOffset? startDate, DateTimeOffset? startDatetime, bool? includeArchived, ListProductsInclude? include, int? page = 1, int? perPage = 20, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`dateField` … `include`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `page` = 1, `perPage` = 20, `requestOptions` = null
- **Query params (wire ← C#)**: `date_field` ← `dateField`, `filter` ← `filter`, `end_date` ← `endDate`, `end_datetime` ← `endDatetime`, `start_date` ← `startDate`, `start_datetime` ← `startDatetime`, `page` ← `page`, `per_page` ← `perPage`, `include_archived` ← `includeArchived`, `include` ← `include`
- **Returns**: `IReadOnlyList<ProductResponse>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ReadProduct
- **HTTP**: `GET /products/{product_id}.json` (Production)
- **Notes**: Reads the current details of a product.
- **Signature**: `ReadProduct(int productId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProductResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ReadProductByHandle
- **HTTP**: `GET /products/handle/{api_handle}.json` (Production)
- **Notes**: Retrieves a Product object by its `api_handle`.
- **Signature**: `ReadProductByHandle(string apiHandle, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ProductResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateProduct
- **HTTP**: `PUT /products/{product_id}.json` (Production)
- **Notes**: Updates aspects of an existing product. Input Attributes Update Notes `update_return_params` The parameters we will append to your `update_return_url`. See Return URLs and Parameters Product Price Point Updating a product using this endpoint will create a new price point and set it as the default price point for this product. If you should like to update an existing product price point, that must be done separately.
- **Signature**: `UpdateProduct(int productId, CreateOrUpdateProductRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ProductResponse`
- **Error**: `SdkException<UpdateProductError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorListResponse1(out ErrorListResponse1)` [422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
