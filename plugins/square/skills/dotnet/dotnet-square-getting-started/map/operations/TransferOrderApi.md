# TransferOrderApi — operations

Accessor: `client.TransferOrderApi` · Source: `Api/TransferOrderApi.cs` · 8 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelTransferOrder
- **HTTP**: `POST /v2/transfer-orders/{transfer_order_id}/cancel` (Default (connect))
- **Notes**: Cancels a transfer order in STARTED or PARTIALLY_RECEIVED status. Any unreceived quantities will no longer be receivable and will be immediately returned to the source Location 's inventory. Common reasons for cancellation: - Items no longer needed at destination - Source location needs the inventory - Order created in error Creates a transfer_order.updated webhook event.
- **Signature**: `CancelTransferOrder(string transferOrderId, CancelTransferOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CancelTransferOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateTransferOrder
- **HTTP**: `POST /v2/transfer-orders` (Default (connect))
- **Notes**: Creates a new transfer order in DRAFT status. A transfer order represents the intent to move CatalogItemVariation s from one Location to another. The source and destination locations must be different and must belong to your Square account. In DRAFT status, you can: - Add or remove items - Modify quantities - Update shipping information - Delete the entire order via DeleteTransferOrder The request requires source_location_id and destination_location_id. Inventory levels are not affected until the order is started via StartTransferOrder . Common integration points: - Sync with warehouse management systems - Automate regular stock transfers - Initialize transfers from inventory optimization systems Creates a transfer_order.created webhook event.
- **Signature**: `CreateTransferOrder(CreateTransferOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateTransferOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteTransferOrder
- **HTTP**: `DELETE /v2/transfer-orders/{transfer_order_id}` (Default (connect))
- **Notes**: Deletes a transfer order in DRAFT status. Only draft orders can be deleted. Once an order is started via StartTransferOrder , it can no longer be deleted. Creates a transfer_order.deleted webhook event.
- **Signature**: `DeleteTransferOrder(string transferOrderId, long? version, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `version` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `version` ← `version`
- **Returns**: `DeleteTransferOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ReceiveTransferOrder
- **HTTP**: `POST /v2/transfer-orders/{transfer_order_id}/receive` (Default (connect))
- **Notes**: Records receipt of CatalogItemVariation s for a transfer order. This endpoint supports partial receiving - you can receive items in multiple batches. For each line item, you can specify: - Quantity received in good condition (added to destination inventory with InventoryState of IN_STOCK) - Quantity damaged during transit/handling (added to destination inventory with InventoryState of WASTE) - Quantity canceled (returned to source location's inventory) The order must be in STARTED or PARTIALLY_RECEIVED status. Received quantities are added to the destination Location 's inventory according to their condition. Canceled quantities are immediately returned to the source Location 's inventory. When all items are either received, damaged, or canceled, the order moves to COMPLETED status. Creates a transfer_order.updated webhook event.
- **Signature**: `ReceiveTransferOrder(string transferOrderId, ReceiveTransferOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ReceiveTransferOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveTransferOrder
- **HTTP**: `GET /v2/transfer-orders/{transfer_order_id}` (Default (connect))
- **Notes**: Retrieves a specific TransferOrder by ID. Returns the complete order details including: Basic information (status, dates, notes) Line items with ordered and received quantities Source and destination Location s Tracking information (if available)
- **Signature**: `RetrieveTransferOrder(string transferOrderId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveTransferOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchTransferOrders
- **HTTP**: `POST /v2/transfer-orders/search` (Default (connect))
- **Notes**: Searches for transfer orders using filters. Returns a paginated list of matching TransferOrder s sorted by creation date. Common search scenarios: - Find orders for a source Location - Find orders for a destination Location - Find orders in a particular TransferOrderStatus
- **Signature**: `SearchTransferOrders(SearchTransferOrdersRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SearchTransferOrdersResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StartTransferOrder
- **HTTP**: `POST /v2/transfer-orders/{transfer_order_id}/start` (Default (connect))
- **Notes**: Changes a DRAFT transfer order to STARTED status. This decrements inventory at the source Location and marks it as in-transit. The order must be in DRAFT status and have all required fields populated. Once started, the order can no longer be deleted, but it can be canceled via CancelTransferOrder . Creates a transfer_order.updated webhook event.
- **Signature**: `StartTransferOrder(string transferOrderId, StartTransferOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `StartTransferOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateTransferOrder
- **HTTP**: `PUT /v2/transfer-orders/{transfer_order_id}` (Default (connect))
- **Notes**: Updates an existing transfer order. This endpoint supports sparse updates, allowing you to modify specific fields without affecting others. Creates a transfer_order.updated webhook event.
- **Signature**: `UpdateTransferOrder(string transferOrderId, UpdateTransferOrderRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateTransferOrderResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
