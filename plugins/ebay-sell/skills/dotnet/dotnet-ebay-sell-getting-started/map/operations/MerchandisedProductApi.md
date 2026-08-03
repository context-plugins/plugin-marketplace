# MerchandisedProductApi — operations

Accessor: `client.MerchandisedProductApi` · Source: `Api/MerchandisedProductApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMerchandisedProducts
- **HTTP**: `GET /merchandised_product` (Default (api))
- **Signature**: `GetMerchandisedProducts(string categoryId, string metricName, string? aspectFilter, string? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `aspectFilter` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_id` ← `categoryId`, `metric_name` ← `metricName`, `aspect_filter` ← `aspectFilter`, `limit` ← `limit`
- **Returns**: `BestSellingProductResponse`
- **Error**: `SdkException<GetMerchandisedProductsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetMerchandisedProducts1
- **HTTP**: `GET /merchandised_product` (Default (api))
- **Signature**: `GetMerchandisedProducts1(string categoryId, string metricName, string? aspectFilter, string? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `aspectFilter` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_id` ← `categoryId`, `metric_name` ← `metricName`, `aspect_filter` ← `aspectFilter`, `limit` ← `limit`
- **Returns**: `BestSellingProductResponse1`
- **Error**: `SdkException<GetMerchandisedProducts1Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
