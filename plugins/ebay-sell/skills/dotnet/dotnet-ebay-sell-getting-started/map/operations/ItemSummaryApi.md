# ItemSummaryApi — operations

Accessor: `client.ItemSummaryApi` · Source: `Api/ItemSummaryApi.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### Search
- **HTTP**: `GET /item_summary/search` (Default (api))
- **Signature**: `Search(string? aspectFilter, string? autoCorrect, string? categoryIds, string? charityIds, string? compatibilityFilter, string? epid, string? fieldgroups, string? filter, string? gtin, string? limit, string? offset, string? q, string? sort, string? xEbayCEnduserctx, string? xEbayCMarketplaceId, string? acceptLanguage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 16 params (`aspectFilter` … `acceptLanguage`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `aspect_filter` ← `aspectFilter`, `auto_correct` ← `autoCorrect`, `category_ids` ← `categoryIds`, `charity_ids` ← `charityIds`, `compatibility_filter` ← `compatibilityFilter`, `epid` ← `epid`, `fieldgroups` ← `fieldgroups`, `filter` ← `filter`, `gtin` ← `gtin`, `limit` ← `limit`, `offset` ← `offset`, `q` ← `q`, `sort` ← `sort`
- **Returns**: `SearchPagedCollection`
- **Error**: `SdkException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchByImage
- **HTTP**: `POST /item_summary/search_by_image` (Default (api))
- **Signature**: `SearchByImage(string? aspectFilter, string? categoryIds, string? charityIds, string? fieldgroups, string? filter, string? limit, string? offset, string? sort, string? xEbayCEnduserctx, string? xEbayCMarketplaceId, string? acceptLanguage, SearchByImageRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`aspectFilter` … `body`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `aspect_filter` ← `aspectFilter`, `category_ids` ← `categoryIds`, `charity_ids` ← `charityIds`, `fieldgroups` ← `fieldgroups`, `filter` ← `filter`, `limit` ← `limit`, `offset` ← `offset`, `sort` ← `sort`
- **Returns**: `SearchPagedCollection`
- **Error**: `SdkException<SearchByImageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
