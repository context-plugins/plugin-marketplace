# ItemGroupApi — operations

Accessor: `client.ItemGroupApi` · Source: `Api/ItemGroupApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetItemGroupFeed
- **HTTP**: `GET /item_group` (Default (api))
- **Signature**: `GetItemGroupFeed(string feedScope, string categoryId, string? date, string accept, string xEbayCMarketplaceId, string? range, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - `range` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `feed_scope` ← `feedScope`, `category_id` ← `categoryId`, `date` ← `date`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetItemGroupFeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 416, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
