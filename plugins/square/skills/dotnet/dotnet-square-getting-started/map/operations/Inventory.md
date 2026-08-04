# Inventory — operations

Accessor: `client.Inventory` · Source: `Api/Inventory.cs` · 19 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### BatchChangeInventory
- **HTTP**: `POST /v2/inventory/changes/batch-create` (Default (connect))
- **Notes**: Applies adjustments and counts to the provided item quantities. On success: returns the current calculated counts for all objects referenced in the request. On failure: returns a list of related errors.
- **Signature**: `BatchChangeInventory(BatchChangeInventoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchChangeInventoryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BatchRetrieveInventoryChanges
- **HTTP**: `POST /v2/inventory/changes/batch-retrieve` (Default (connect))
- **Notes**: Returns historical physical counts and adjustments based on the provided filter criteria. Results are paginated and sorted in ascending order according their `occurred_at` timestamp (oldest first). BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled by other, simpler endpoints.
- **Signature**: `BatchRetrieveInventoryChanges(BatchRetrieveInventoryChangesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchRetrieveInventoryChangesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BatchRetrieveInventoryCounts
- **HTTP**: `POST /v2/inventory/counts/batch-retrieve` (Default (connect))
- **Notes**: Returns current counts for the provided CatalogObject s at the requested Location s. Results are paginated and sorted in descending order according to their `calculated_at` timestamp (newest first). When `updated_after` is specified, only counts that have changed since that time (based on the server timestamp for the most recent change) are returned. This allows clients to perform a "sync" operation, for example in response to receiving a Webhook notification.
- **Signature**: `BatchRetrieveInventoryCounts(BatchRetrieveInventoryCountsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchRetrieveInventoryCountsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CreateInventoryAdjustmentReason
- **HTTP**: `POST /v2/inventory/adjustment-reasons/create` (Default (connect))
- **Notes**: Creates a custom inventory adjustment reason.
- **Signature**: `CreateInventoryAdjustmentReason(CreateInventoryAdjustmentReasonRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateInventoryAdjustmentReasonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteInventoryAdjustmentReason
- **HTTP**: `POST /v2/inventory/adjustment-reasons/delete` (Default (connect))
- **Notes**: Soft deletes a custom inventory adjustment reason.
- **Signature**: `DeleteInventoryAdjustmentReason(DeleteInventoryAdjustmentReasonRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeleteInventoryAdjustmentReasonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeprecatedBatchChangeInventory
- **HTTP**: `POST /v2/inventory/batch-change` (Default (connect))
- **Notes**: Deprecated version of BatchChangeInventory after the endpoint URL is updated to conform to the standard convention.
- **Signature**: `DeprecatedBatchChangeInventory(BatchChangeInventoryRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchChangeInventoryResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeprecatedBatchRetrieveInventoryChanges
- **HTTP**: `POST /v2/inventory/batch-retrieve-changes` (Default (connect))
- **Notes**: Deprecated version of BatchRetrieveInventoryChanges after the endpoint URL is updated to conform to the standard convention.
- **Signature**: `DeprecatedBatchRetrieveInventoryChanges(BatchRetrieveInventoryChangesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchRetrieveInventoryChangesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeprecatedBatchRetrieveInventoryCounts
- **HTTP**: `POST /v2/inventory/batch-retrieve-counts` (Default (connect))
- **Notes**: Deprecated version of BatchRetrieveInventoryCounts after the endpoint URL is updated to conform to the standard convention.
- **Signature**: `DeprecatedBatchRetrieveInventoryCounts(BatchRetrieveInventoryCountsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchRetrieveInventoryCountsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeprecatedRetrieveInventoryAdjustment
- **HTTP**: `GET /v2/inventory/adjustment/{adjustment_id}` (Default (connect))
- **Notes**: Deprecated version of RetrieveInventoryAdjustment after the endpoint URL is updated to conform to the standard convention.
- **Signature**: `DeprecatedRetrieveInventoryAdjustment(string adjustmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveInventoryAdjustmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeprecatedRetrieveInventoryPhysicalCount
- **HTTP**: `GET /v2/inventory/physical-count/{physical_count_id}` (Default (connect))
- **Notes**: Deprecated version of RetrieveInventoryPhysicalCount after the endpoint URL is updated to conform to the standard convention.
- **Signature**: `DeprecatedRetrieveInventoryPhysicalCount(string physicalCountId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveInventoryPhysicalCountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListInventoryAdjustmentReasons
- **HTTP**: `GET /v2/inventory/adjustment-reasons` (Default (connect))
- **Notes**: Returns the standard and custom inventory adjustment reasons available to the seller.
- **Signature**: `ListInventoryAdjustmentReasons(bool? includeDeleted = false, bool? includeSystemCodes = false, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `includeDeleted` = false, `includeSystemCodes` = false, `requestOptions` = null
- **Query params (wire ← C#)**: `include_deleted` ← `includeDeleted`, `include_system_codes` ← `includeSystemCodes`
- **Returns**: `ListInventoryAdjustmentReasonsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RestoreInventoryAdjustmentReason
- **HTTP**: `POST /v2/inventory/adjustment-reasons/restore` (Default (connect))
- **Notes**: Restores a soft-deleted custom inventory adjustment reason.
- **Signature**: `RestoreInventoryAdjustmentReason(RestoreInventoryAdjustmentReasonRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RestoreInventoryAdjustmentReasonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveInventoryAdjustment
- **HTTP**: `GET /v2/inventory/adjustments/{adjustment_id}` (Default (connect))
- **Notes**: Returns the InventoryAdjustment object with the provided `adjustment_id`.
- **Signature**: `RetrieveInventoryAdjustment(string adjustmentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveInventoryAdjustmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveInventoryAdjustmentReason
- **HTTP**: `POST /v2/inventory/adjustment-reasons/retrieve` (Default (connect))
- **Notes**: Returns the inventory adjustment reason identified by the provided `reason_id`. Deleted custom reasons can be retrieved by ID.
- **Signature**: `RetrieveInventoryAdjustmentReason(RetrieveInventoryAdjustmentReasonRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveInventoryAdjustmentReasonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveInventoryChanges
- **HTTP**: `GET /v2/inventory/{catalog_object_id}/changes` (Default (connect))
- **Notes**: Returns a set of physical counts and inventory adjustments for the provided CatalogObject at the requested Location s. You can achieve the same result by calling BatchRetrieveInventoryChanges and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID. Results are paginated and sorted in descending order according to their `occurred_at` timestamp (newest first). There are no limits on how far back the caller can page. This endpoint can be used to display recent changes for a specific item. For more sophisticated queries, use a batch endpoint.
- **Signature**: `RetrieveInventoryChanges(string catalogObjectId, string? locationIds, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `locationIds` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location_ids` ← `locationIds`, `cursor` ← `cursor`
- **Returns**: `RetrieveInventoryChangesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveInventoryCount
- **HTTP**: `GET /v2/inventory/{catalog_object_id}` (Default (connect))
- **Notes**: Retrieves the current calculated stock count for a given CatalogObject at a given set of Location s. Responses are paginated and unsorted. For more sophisticated queries, use a batch endpoint.
- **Signature**: `RetrieveInventoryCount(string catalogObjectId, string? locationIds, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `locationIds` — nullable, no default → **must pass explicitly**
  - `cursor` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `location_ids` ← `locationIds`, `cursor` ← `cursor`
- **Returns**: `RetrieveInventoryCountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveInventoryPhysicalCount
- **HTTP**: `GET /v2/inventory/physical-counts/{physical_count_id}` (Default (connect))
- **Notes**: Returns the InventoryPhysicalCount object with the provided `physical_count_id`.
- **Signature**: `RetrieveInventoryPhysicalCount(string physicalCountId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveInventoryPhysicalCountResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInventoryAdjustment
- **HTTP**: `PUT /v2/inventory/adjustments/update` (Default (connect))
- **Notes**: Applies an update to the provided adjustment. On success: returns the newly updated adjustment. On failure: returns a list of related errors.
- **Signature**: `UpdateInventoryAdjustment(UpdateInventoryAdjustmentRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateInventoryAdjustmentResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateInventoryAdjustmentReason
- **HTTP**: `PUT /v2/inventory/adjustment-reasons/update` (Default (connect))
- **Notes**: Updates a custom inventory adjustment reason.
- **Signature**: `UpdateInventoryAdjustmentReason(UpdateInventoryAdjustmentReasonRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpdateInventoryAdjustmentReasonResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
