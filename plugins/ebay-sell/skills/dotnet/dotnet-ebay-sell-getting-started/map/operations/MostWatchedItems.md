# MostWatchedItems — operations

Accessor: `client.MostWatchedItems` · Source: `Api/MostWatchedItems.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetMostWatchedItems
- **HTTP**: `GET /most_watched_items` (Default (api))
- **Signature**: `GetMostWatchedItems(string categoryId, string? maxResults, string? acceptLanguage, string? xEbayCEnduserctx, string? xEbayCMarketplaceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`maxResults` … `xEbayCMarketplaceId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_id` ← `categoryId`, `max_results` ← `maxResults`
- **Returns**: `MostWatchedItemsResponse`
- **Error**: `SdkException<GetMostWatchedItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
