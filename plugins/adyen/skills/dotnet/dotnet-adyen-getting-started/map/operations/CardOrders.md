# CardOrders — operations

Accessor: `client.CardOrders` · Source: `Api/CardOrders.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetCardorders
- **HTTP**: `GET /cardorders` (Default13 (balanceplatform-api-test))
- **Notes**: Returns a paginated list of card orders.
- **Signature**: `GetCardorders(string? id, string? cardManufacturingProfileId, string? status, string? txVariantCode, DateTimeOffset? createdSince, DateTimeOffset? createdUntil, DateTimeOffset? lockedSince, DateTimeOffset? lockedUntil, string? serviceCenter, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`id` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`, `cardManufacturingProfileId` ← `cardManufacturingProfileId`, `status` ← `status`, `txVariantCode` ← `txVariantCode`, `createdSince` ← `createdSince`, `createdUntil` ← `createdUntil`, `lockedSince` ← `lockedSince`, `lockedUntil` ← `lockedUntil`, `serviceCenter` ← `serviceCenter`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaginatedGetCardOrderResponse`
- **Error**: `SdkException<GetCardordersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCardordersIdItems
- **HTTP**: `GET /cardorders/{id}/items` (Default13 (balanceplatform-api-test))
- **Notes**: Returns the item list of a specific card order.
- **Signature**: `GetCardordersIdItems(string id, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaginatedGetCardOrderItemResponse`
- **Error**: `SdkException<GetCardordersIdItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
