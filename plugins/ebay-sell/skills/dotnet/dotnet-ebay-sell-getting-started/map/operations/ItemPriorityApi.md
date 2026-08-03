# ItemPriorityApi — operations

Accessor: `client.ItemPriorityApi` · Source: `Api/ItemPriorityApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetItemPriorityFeed
- **HTTP**: `GET /item_priority` (Default (api))
- **Signature**: `GetItemPriorityFeed(string categoryId, string date, string accept, string xEbayCMarketplaceId, string range, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_id` ← `categoryId`, `date` ← `date`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetItemPriorityFeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 416, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
