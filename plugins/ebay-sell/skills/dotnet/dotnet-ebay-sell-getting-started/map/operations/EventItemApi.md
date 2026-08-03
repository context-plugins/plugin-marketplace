# EventItemApi — operations

Accessor: `client.EventItemApi` · Source: `Api/EventItemApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetEventItems
- **HTTP**: `GET /event_item` (Default (api))
- **Signature**: `GetEventItems(string eventIds, string? categoryIds, string? deliveryCountry, string? limit, string? offset, string xEbayCMarketplaceId, string? xEbayCEnduserctx, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`categoryIds` … `xEbayCEnduserctx`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `event_ids` ← `eventIds`, `category_ids` ← `categoryIds`, `delivery_country` ← `deliveryCountry`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `EventItemSearchResponse`
- **Error**: `SdkException<GetEventItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
