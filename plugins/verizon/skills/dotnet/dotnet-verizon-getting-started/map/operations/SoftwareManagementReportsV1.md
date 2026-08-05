# SoftwareManagementReportsV1 — operations

Accessor: `client.SoftwareManagementReportsV1` · Source: `Api/SoftwareManagementReportsV1.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDeviceFirmwareUpgradeHistory
- **HTTP**: `GET /reports/{account}/devices/{deviceId}` (SoftwareManagementV1 (thingspace))
- **Signature**: `GetDeviceFirmwareUpgradeHistory(string account, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeviceUpgradeHistory>`
- **Error**: `SdkException<GetDeviceFirmwareUpgradeHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAccountDevices
- **HTTP**: `GET /devices/{account}/index/{startIndex}` (SoftwareManagementV1 (thingspace))
- **Notes**: Returns an array of all devices in the specified account. Each device object includes information needed for managing firmware, including the device make and model, MDN and IMEI, and current firmware version.
- **Signature**: `ListAccountDevices(string account, string startIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceListQueryResult`
- **Error**: `SdkException<ListAccountDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListUpgradesForSpecifiedStatus
- **HTTP**: `GET /reports/{account}/status/{upgradeStatus}/index/{startIndex}` (SoftwareManagementV1 (thingspace))
- **Signature**: `ListUpgradesForSpecifiedStatus(string account, UpgradeStatus upgradeStatus, string startIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `UpgradeListQueryResult`
- **Error**: `SdkException<ListUpgradesForSpecifiedStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
