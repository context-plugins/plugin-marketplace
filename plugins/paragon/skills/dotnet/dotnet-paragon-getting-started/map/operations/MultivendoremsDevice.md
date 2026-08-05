# MultivendoremsDevice — operations

Accessor: `client.MultivendoremsDevice` · Source: `Api/MultivendoremsDevice.cs` · 7 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeviceServiceBulkRegister
- **HTTP**: `POST /mems/api/v1/orgs/{org-id}/devices/bulk` (Default)
- **Signature**: `DeviceServiceBulkRegister(string orgId, DeviceServiceBulkRegisterBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceBulkRegisterResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceServiceDeregister
- **HTTP**: `DELETE /mems/api/v1/orgs/{org-id}/devices/{address}` (Default)
- **Signature**: `DeviceServiceDeregister(string orgId, string address, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceServiceDiscoverDevice
- **HTTP**: `POST /mems/api/v1/orgs/{org-id}/devices/{id}/discover` (Default)
- **Signature**: `DeviceServiceDiscoverDevice(string orgId, string id, DeviceServiceDiscoverDeviceBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceDiscoverDeviceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceServiceList
- **HTTP**: `GET /mems/api/v1/orgs/{org-id}/devices` (Default)
- **Signature**: `DeviceServiceList(string orgId, int? selectionPaginationPageSize, int? selectionPaginationPageOffset, string? selectionFilterFilter, IReadOnlyList<string>? selectionSortKeys, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`selectionPaginationPageSize` … `selectionSortKeys`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `selection.pagination.pageSize` ← `selectionPaginationPageSize`, `selection.pagination.pageOffset` ← `selectionPaginationPageOffset`, `selection.filter.filter` ← `selectionFilterFilter`, `selection.sort.keys` ← `selectionSortKeys`
- **Returns**: `DeviceListResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceServiceRead
- **HTTP**: `GET /mems/api/v1/orgs/{org-id}/devices/{id}` (Default)
- **Signature**: `DeviceServiceRead(string orgId, string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceReadResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceServiceRegister
- **HTTP**: `POST /mems/api/v1/orgs/{org-id}/devices` (Default)
- **Signature**: `DeviceServiceRegister(string orgId, DeviceServiceRegisterBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceRegisterResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceServiceUpdate
- **HTTP**: `PUT /mems/api/v1/orgs/{org-id}/devices` (Default)
- **Signature**: `DeviceServiceUpdate(string orgId, DeviceDeviceServiceUpdateBody body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceUpdateResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
