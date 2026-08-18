<!-- Generated file — do not edit; regenerated with the SDK. -->

# CardOrders — operations

Accessor: `client.CardOrders` · Source: `Api/CardOrders.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCardorders
- **Server group**: `Default13`
- **Signature**: `GetCardorders(string? id, string? cardManufacturingProfileId, string? status, string? txVariantCode, DateTimeOffset? createdSince, DateTimeOffset? createdUntil, DateTimeOffset? lockedSince, DateTimeOffset? lockedUntil, string? serviceCenter, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`id` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `id` ← `id`, `cardManufacturingProfileId` ← `cardManufacturingProfileId`, `status` ← `status`, `txVariantCode` ← `txVariantCode`, `createdSince` ← `createdSince`, `createdUntil` ← `createdUntil`, `lockedSince` ← `lockedSince`, `lockedUntil` ← `lockedUntil`, `serviceCenter` ← `serviceCenter`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaginatedGetCardOrderResponse`
- **Error**: `SdkException<GetCardordersError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaginatedGetCardOrderResponse` | `Models/PaginatedGetCardOrderResponse.cs` |
| `GetCardordersError` | `Errors/GetCardordersError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetCardordersIdItems
- **Server group**: `Default13`
- **Signature**: `GetCardordersIdItems(string id, int? offset, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `offset` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `PaginatedGetCardOrderItemResponse`
- **Error**: `SdkException<GetCardordersIdItemsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PaginatedGetCardOrderItemResponse` | `Models/PaginatedGetCardOrderItemResponse.cs` |
| `GetCardordersIdItemsError` | `Errors/GetCardordersIdItemsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

