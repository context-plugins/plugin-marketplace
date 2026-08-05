# FirmwareV3 — operations

Accessor: `client.FirmwareV3` · Source: `Api/FirmwareV3.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ListAvailableFirmware2
- **HTTP**: `GET /firmware/{acc}` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows user to list the firmware of an account.
- **Signature**: `ListAvailableFirmware2(string acc, FirmwareProtocol protocol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `protocol` ← `protocol`
- **Returns**: `IReadOnlyList<FirmwarePackage>`
- **Error**: `SdkException<ListAvailableFirmware2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ReportDeviceFirmware
- **HTTP**: `PUT /firmware/{acc}/async/{deviceId}` (SoftwareManagementV3 (thingspace))
- **Notes**: Ask a device to report its firmware version asynchronously.
- **Signature**: `ReportDeviceFirmware(string acc, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceFirmwareVersionUpdateResult`
- **Error**: `SdkException<ReportDeviceFirmwareError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SynchronizeDeviceFirmware
- **HTTP**: `PUT /firmware/{acc}/devices` (SoftwareManagementV3 (thingspace))
- **Notes**: Synchronize ThingSpace with the FOTA server for up to 100 devices.
- **Signature**: `SynchronizeDeviceFirmware(string acc, FirmwareImei body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceFirmwareList`
- **Error**: `SdkException<SynchronizeDeviceFirmwareError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
