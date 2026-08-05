# CategoriesEssentials — operations

Accessor: `client.CategoriesEssentials` · Source: `Api/CategoriesEssentials.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCategories
- **HTTP**: `GET /categories` (Default (api))
- **Notes**: This method returns every available category.
- **Signature**: `GetCategories(Direction? direction, double? page, double? perPage, Sort3? sort, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`direction` … `sort`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `direction` ← `direction`, `page` ← `page`, `per_page` ← `perPage`, `sort` ← `sort`
- **Returns**: `CategoryConnection`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### GetCategory
- **HTTP**: `GET /categories/{category}` (Default (api))
- **Notes**: This method returns the specified category.
- **Signature**: `GetCategory(string category, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Category`
- **Error**: `SdkException<GetCategoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetLegacyError(out LegacyError)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
