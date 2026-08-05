# TrustInventory — operations

Accessor: `client.TrustInventory` · Source: `Api/TrustInventory.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### InventoryServiceCreate
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/inventories` (Default)
- **Signature**: `InventoryServiceCreate(string orgId, InventoryInventoryServiceCreateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InventoryCreateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InventoryServiceDelete
- **HTTP**: `DELETE /trust/api/v1/orgs/{orgId}/inventories/{id}` (Default)
- **Signature**: `InventoryServiceDelete(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InventoryServiceDiscover
- **HTTP**: `POST /trust/api/v1/orgs/{orgId}/inventories/discover` (Default)
- **Signature**: `InventoryServiceDiscover(string orgId, InventoryServiceDiscoverBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InventoryDiscoverResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InventoryServiceList
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/inventories` (Default)
- **Signature**: `InventoryServiceList(string orgId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InventoryListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InventoryServiceRead
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/inventories/{id}` (Default)
- **Signature**: `InventoryServiceRead(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InventoryReadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InventoryServiceReadForDevice
- **HTTP**: `GET /trust/api/v1/orgs/{orgId}/inventories/device/{deviceId}` (Default)
- **Signature**: `InventoryServiceReadForDevice(string orgId, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InventoryReadForDeviceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InventoryServiceUpdate
- **HTTP**: `PUT /trust/api/v1/orgs/{orgId}/inventories` (Default)
- **Signature**: `InventoryServiceUpdate(string orgId, InventoryInventoryServiceUpdateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `InventoryUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
