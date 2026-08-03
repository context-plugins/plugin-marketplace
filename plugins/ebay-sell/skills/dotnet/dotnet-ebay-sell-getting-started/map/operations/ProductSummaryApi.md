# ProductSummaryApi — operations

Accessor: `client.ProductSummaryApi` · Source: `Api/ProductSummaryApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Search2
- **HTTP**: `GET /product_summary/search` (Default (api))
- **Signature**: `Search2(string? aspectFilter, string? categoryIds, string? fieldgroups, string? gtin, string? limit, string? mpn, string? offset, string? q, string? xEbayCMarketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`aspectFilter` … `xEbayCMarketplaceId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `aspect_filter` ← `aspectFilter`, `category_ids` ← `categoryIds`, `fieldgroups` ← `fieldgroups`, `gtin` ← `gtin`, `limit` ← `limit`, `mpn` ← `mpn`, `offset` ← `offset`, `q` ← `q`
- **Returns**: `ProductSearchResponse`
- **Error**: `SdkException<Search2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
