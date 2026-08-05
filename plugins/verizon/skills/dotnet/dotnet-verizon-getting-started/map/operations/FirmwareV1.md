# FirmwareV1 — operations

Accessor: `client.FirmwareV1` · Source: `Api/FirmwareV1.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelScheduledFirmwareUpgrade
- **HTTP**: `DELETE /upgrades/{accountName}/upgrade/{upgradeId}` (SoftwareManagementV1 (thingspace))
- **Signature**: `CancelScheduledFirmwareUpgrade(string accountName, string upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV1SuccessResult`
- **Error**: `SdkException<CancelScheduledFirmwareUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAvailableFirmware
- **HTTP**: `GET /firmware/{account}` (SoftwareManagementV1 (thingspace))
- **Notes**: Lists all device firmware images available for an account, based on the devices registered to that account.
- **Signature**: `ListAvailableFirmware(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<Firmware>`
- **Error**: `SdkException<ListAvailableFirmwareError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListFirmwareUpgradeDetails
- **HTTP**: `GET /upgrades/{accountName}/upgrade/{upgradeId}` (SoftwareManagementV1 (thingspace))
- **Notes**: Returns information about a specified upgrade, include the target date of the upgrade, the list of devices in the upgrade, and the status of the upgrade for each device.
- **Signature**: `ListFirmwareUpgradeDetails(string accountName, string upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FirmwareUpgrade`
- **Error**: `SdkException<ListFirmwareUpgradeDetailsError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ScheduleFirmwareUpgrade
- **HTTP**: `POST /upgrades` (SoftwareManagementV1 (thingspace))
- **Notes**: Schedules a firmware upgrade for devices.
- **Signature**: `ScheduleFirmwareUpgrade(FirmwareUpgradeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FirmwareUpgrade`
- **Error**: `SdkException<ScheduleFirmwareUpgradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateFirmwareUpgradeDevices
- **HTTP**: `PUT /upgrades/{accountName}/upgrade/{upgradeId}` (SoftwareManagementV1 (thingspace))
- **Notes**: Add or remove devices from a scheduled upgrade.
- **Signature**: `UpdateFirmwareUpgradeDevices(string accountName, string upgradeId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FirmwareUpgradeChangeResult`
- **Error**: `SdkException<UpdateFirmwareUpgradeDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
