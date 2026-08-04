# Devices — operations

Accessor: `client.Devices` · Source: `Api/Devices.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDeviceCode
- **HTTP**: `POST /v2/devices/codes` (Default (connect))
- **Notes**: Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected terminal mode.
- **Signature**: `CreateDeviceCode(CreateDeviceCodeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CreateDeviceCodeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDevice
- **HTTP**: `GET /v2/devices/{device_id}` (Default (connect))
- **Notes**: Retrieves Device with the associated `device_id`.
- **Signature**: `GetDevice(string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetDeviceResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceCode
- **HTTP**: `GET /v2/devices/codes/{id}` (Default (connect))
- **Notes**: Retrieves DeviceCode with the associated ID.
- **Signature**: `GetDeviceCode(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GetDeviceCodeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDeviceCodes
- **HTTP**: `GET /v2/devices/codes` (Default (connect))
- **Notes**: Lists all DeviceCodes associated with the merchant.
- **Signature**: `ListDeviceCodes(string? cursor, string? locationId, ProductType? productType, DeviceCodeStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`cursor` … `status`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `location_id` ← `locationId`, `product_type` ← `productType`, `status` ← `status`
- **Returns**: `ListDeviceCodesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListDevices
- **HTTP**: `GET /v2/devices` (Default (connect))
- **Notes**: List devices associated with the merchant. Currently, only Terminal API devices are supported.
- **Signature**: `ListDevices(string? cursor, SortOrder? sortOrder, int? limit, string? locationId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`cursor` … `locationId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cursor` ← `cursor`, `sort_order` ← `sortOrder`, `limit` ← `limit`, `location_id` ← `locationId`
- **Returns**: `ListDevicesResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
