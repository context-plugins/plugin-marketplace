# ItemApi — operations

Accessor: `client.ItemApi` · Source: `Api/ItemApi.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CheckCompatibility
- **HTTP**: `POST /item/{item_id}/check_compatibility` (Default (api))
- **Signature**: `CheckCompatibility(string itemId, string? xEbayCMarketplaceId, string? acceptLanguage, CompatibilityPayload? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCMarketplaceId` — nullable, no default → **must pass explicitly**
  - `acceptLanguage` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `CompatibilityResponse`
- **Error**: `SdkException<CheckCompatibilityError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetItem
- **HTTP**: `GET /item/{item_id}` (Default (api))
- **Signature**: `GetItem(string itemId, string? fieldgroups, string? quantityForShippingEstimate, string? xEbayCEnduserctx, string? xEbayCMarketplaceId, string? acceptLanguage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`fieldgroups` … `acceptLanguage`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fieldgroups` ← `fieldgroups`, `quantity_for_shipping_estimate` ← `quantityForShippingEstimate`
- **Returns**: `Item`
- **Error**: `SdkException<GetItemError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetItemByLegacyId
- **HTTP**: `GET /item/get_item_by_legacy_id` (Default (api))
- **Signature**: `GetItemByLegacyId(string legacyItemId, string? fieldgroups, string? legacyVariationId, string? legacyVariationSku, string? quantityForShippingEstimate, string? xEbayCEnduserctx, string? xEbayCMarketplaceId, string? acceptLanguage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`fieldgroups` … `acceptLanguage`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `legacy_item_id` ← `legacyItemId`, `fieldgroups` ← `fieldgroups`, `legacy_variation_id` ← `legacyVariationId`, `legacy_variation_sku` ← `legacyVariationSku`, `quantity_for_shipping_estimate` ← `quantityForShippingEstimate`
- **Returns**: `Item`
- **Error**: `SdkException<GetItemByLegacyIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetItemFeed
- **HTTP**: `GET /item` (Default (api))
- **Signature**: `GetItemFeed(string feedScope, string categoryId, string? date, string accept, string xEbayCMarketplaceId, string range, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `feed_scope` ← `feedScope`, `category_id` ← `categoryId`, `date` ← `date`
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetItemFeedError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 409, 416, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetItems
- **HTTP**: `GET /item/` (Default (api))
- **Signature**: `GetItems(string? itemIds, string? itemGroupIds, string? quantityForShippingEstimate, string? xEbayCEnduserctx, string? xEbayCMarketplaceId, string? acceptLanguage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`itemIds` … `acceptLanguage`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `item_ids` ← `itemIds`, `item_group_ids` ← `itemGroupIds`, `quantity_for_shipping_estimate` ← `quantityForShippingEstimate`
- **Returns**: `Items`
- **Error**: `SdkException<GetItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetItemsByItemGroup
- **HTTP**: `GET /item/get_items_by_item_group` (Default (api))
- **Signature**: `GetItemsByItemGroup(string itemGroupId, string? fieldgroups, string? quantityForShippingEstimate, string? xEbayCEnduserctx, string? xEbayCMarketplaceId, string? acceptLanguage, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`fieldgroups` … `acceptLanguage`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `item_group_id` ← `itemGroupId`, `fieldgroups` ← `fieldgroups`, `quantity_for_shipping_estimate` ← `quantityForShippingEstimate`
- **Returns**: `ItemGroup`
- **Error**: `SdkException<GetItemsByItemGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
