# ItemSnapshotApi — operations

Accessor: `client.ItemSnapshotApi` · Source: `Api/ItemSnapshotApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetItemSnapshotFeed
- **HTTP**: `GET /item_snapshot` (Default (api))
- **Signature**: `GetItemSnapshotFeed(string categoryId, string snapshotDate, string accept, string xEbayCMarketplaceId, string range, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_id` ← `categoryId`, `snapshot_date` ← `snapshotDate`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetItemSnapshotFeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 416, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
