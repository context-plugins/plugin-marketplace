# PurchaseOrderApi — operations

Accessor: `client.PurchaseOrderApi` · Source: `Api/PurchaseOrderApi.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPurchaseOrder
- **HTTP**: `GET /purchase_order/{purchaseOrderId}` (Default1 (apix))
- **Signature**: `GetPurchaseOrder(string purchaseOrderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PurchaseOrder`
- **Error**: `SdkException<GetPurchaseOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 403, 404, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
