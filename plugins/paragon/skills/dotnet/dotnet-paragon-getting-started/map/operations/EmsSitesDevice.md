# EmsSitesDevice — operations

Accessor: `client.EmsSitesDevice` · Source: `Api/EmsSitesDevice.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteSiteDevice
- **HTTP**: `DELETE /api/v1/sites/{site_id}/devices/{device_uuid}` (Default)
- **Signature**: `DeleteSiteDevice(string siteId, string deviceUuid, string? xCsrftoken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceConnectivity
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/{device_uuid}/connectivity` (Default)
- **Signature**: `GetDeviceConnectivity(string siteId, string deviceUuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceInventory
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/{device_uuid}/inventory` (Default)
- **Notes**: Returns the last inventory snapshot reported by the device. A legacy MAC-addressed form (.../devices/{device_mac}/inventory) exists but is deprecated.
- **Signature**: `GetDeviceInventory(string siteId, string deviceUuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceProfile
- **HTTP**: `GET /api/v1/sites/{site_id}/devices/{device_uuid}/profile` (Default)
- **Signature**: `GetDeviceProfile(string siteId, string deviceUuid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PatchDeviceConfig
- **HTTP**: `PATCH /api/v1/sites/{site_id}/devices/{device_uuid}/config` (Default)
- **Notes**: Push raw Junos CLI configuration to a device. `cmd` is delivered as a `cli` command and applied asynchronously; returns a `job_id` to track the request. Bypasses the model-based device config — use with caution.
- **Signature**: `PatchDeviceConfig(string siteId, string deviceUuid, string? xCsrftoken, ApiV1SitesDevicesConfigRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ApiV1SitesDevicesConfigResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpdateSiteDevice
- **HTTP**: `PUT /api/v1/sites/{site_id}/devices/{device_uuid}` (Default)
- **Signature**: `UpdateSiteDevice(string siteId, string deviceUuid, string? xCsrftoken, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xCsrftoken` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
