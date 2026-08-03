# GuestPurchaseOrder — operations

Accessor: `client.GuestPurchaseOrder` · Source: `Api/GuestPurchaseOrder.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetGuestPurchaseOrder
- **HTTP**: `GET /guest_purchase_order/{purchaseOrderId}` (Default2 (apix))
- **Signature**: `GetGuestPurchaseOrder(string purchaseOrderId, string? xEbayCMarketplaceId, string? xEbayCEnduserctx, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xEbayCMarketplaceId` — nullable, no default → **must pass explicitly**
  - `xEbayCEnduserctx` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `GuestPurchaseOrderV2`
- **Error**: `SdkException<GetGuestPurchaseOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
