# DealItemApi — operations

Accessor: `client.DealItemApi` · Source: `Api/DealItemApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDealItems
- **HTTP**: `GET /deal_item` (Default (api))
- **Signature**: `GetDealItems(string? categoryIds, string? commissionable, string? deliveryCountry, string? limit, string? offset, string xEbayCMarketplaceId, string? xEbayCEnduserctx, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`categoryIds` … `xEbayCEnduserctx`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category_ids` ← `categoryIds`, `commissionable` ← `commissionable`, `delivery_country` ← `deliveryCountry`, `limit` ← `limit`, `offset` ← `offset`
- **Returns**: `DealItemSearchResponse`
- **Error**: `SdkException<GetDealItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
