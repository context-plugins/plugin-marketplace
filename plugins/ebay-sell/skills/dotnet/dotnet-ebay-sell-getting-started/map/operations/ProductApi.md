# ProductApi — operations

Accessor: `client.ProductApi` · Source: `Api/ProductApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetProduct
- **HTTP**: `GET /product/{epid}` (Default (api))
- **Signature**: `GetProduct(string epid, string? xEbayCMarketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCMarketplaceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `Product3`
- **Error**: `SdkException<GetProductError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
