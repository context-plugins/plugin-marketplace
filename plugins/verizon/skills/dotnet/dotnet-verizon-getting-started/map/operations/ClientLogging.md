# ClientLogging — operations

Accessor: `client.ClientLogging` · Source: `Api/ClientLogging.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DisableDeviceLogging
- **HTTP**: `DELETE /logging/{account}/devices/{deviceId}` (SoftwareManagementV2 (thingspace))
- **Notes**: Disables logging for a specific device.
- **Signature**: `DisableDeviceLogging(string account, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DisableDeviceLoggingError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DisableLoggingForDevices
- **HTTP**: `DELETE /logging/{account}/devices` (SoftwareManagementV2 (thingspace))
- **Signature**: `DisableLoggingForDevices(string account, string deviceIds, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `deviceIds` ← `deviceIds`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DisableLoggingForDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableDeviceLogging
- **HTTP**: `PUT /logging/{account}/devices/{deviceId}` (SoftwareManagementV2 (thingspace))
- **Notes**: Enables logging for a specific device.
- **Signature**: `EnableDeviceLogging(string account, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceLoggingStatus`
- **Error**: `SdkException<EnableDeviceLoggingError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableLoggingForDevices
- **HTTP**: `PUT /logging/{account}/devices` (SoftwareManagementV2 (thingspace))
- **Notes**: Each customer may have a maximum of 20 devices enabled for logging.
- **Signature**: `EnableLoggingForDevices(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeviceLoggingStatus>`
- **Error**: `SdkException<EnableLoggingForDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDeviceLogs
- **HTTP**: `GET /logging/{account}/devices/{deviceId}/logs` (SoftwareManagementV2 (thingspace))
- **Notes**: Gets logs for a specific device.
- **Signature**: `ListDeviceLogs(string account, string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeviceLog>`
- **Error**: `SdkException<ListDeviceLogsError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDevicesWithLoggingEnabled
- **HTTP**: `GET /logging/{account}/devices` (SoftwareManagementV2 (thingspace))
- **Signature**: `ListDevicesWithLoggingEnabled(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeviceLoggingStatus>`
- **Error**: `SdkException<ListDevicesWithLoggingEnabledError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
