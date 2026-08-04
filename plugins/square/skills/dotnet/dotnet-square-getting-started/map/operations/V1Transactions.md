# V1Transactions — operations

Accessor: `client.V1Transactions` · Source: `Api/V1Transactions.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### V1ListOrders
- **HTTP**: `GET /v1/{location_id}/orders` (Default (connect))
- **Notes**: Provides summary information for a merchant's online store orders.
- **Signature**: `V1ListOrders(string locationId, SortOrder? order, int? limit, string? batchToken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `order` — nullable, no default → **must pass explicitly**
  - `limit` — nullable, no default → **must pass explicitly**
  - `batchToken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `order` ← `order`, `limit` ← `limit`, `batch_token` ← `batchToken`
- **Returns**: `IReadOnlyList<V1Order>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### V1RetrieveOrder
- **HTTP**: `GET /v1/{location_id}/orders/{order_id}` (Default (connect))
- **Notes**: Provides comprehensive information for a single online store order, including the order's history.
- **Signature**: `V1RetrieveOrder(string locationId, string orderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1Order`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### V1UpdateOrder
- **HTTP**: `PUT /v1/{location_id}/orders/{order_id}` (Default (connect))
- **Notes**: Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:
- **Signature**: `V1UpdateOrder(string locationId, string orderId, V1UpdateOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1Order`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
