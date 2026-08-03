# SimilarItems — operations

Accessor: `client.SimilarItems` · Source: `Api/SimilarItems.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetSimilarItems
- **HTTP**: `GET /similar_items` (Default (api))
- **Signature**: `GetSimilarItems(string itemId, string? buyingOption, string? excludedCategoryIds, string? filter, string? maxResults, string? acceptLanguage, string? xEbayCEnduserctx, string? xEbayCMarketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`buyingOption` … `xEbayCMarketplaceId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `item_id` ← `itemId`, `buying_option` ← `buyingOption`, `excluded_category_ids` ← `excludedCategoryIds`, `filter` ← `filter`, `max_results` ← `maxResults`
- **Returns**: `SimilarItemsResponse`
- **Error**: `SdkException<GetSimilarItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
