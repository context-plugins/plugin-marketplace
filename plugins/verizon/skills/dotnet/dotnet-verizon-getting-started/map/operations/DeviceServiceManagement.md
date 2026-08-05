# DeviceServiceManagement — operations

Accessor: `client.DeviceServiceManagement` · Source: `Api/DeviceServiceManagement.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetDeviceHyperPreciseStatus
- **HTTP**: `GET /devices/services` (HyperPreciseLocation (thingspace))
- **Notes**: Gets the list of a status for hyper-precise location devices.
- **Signature**: `GetDeviceHyperPreciseStatus(string imei, string accountNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `imei` ← `imei`, `accountNumber` ← `accountNumber`
- **Returns**: `BullseyeServiceResult`
- **Error**: `SdkException<GetDeviceHyperPreciseStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetHyperPreciseLocationResult(out HyperPreciseLocationResult)` [400, 401, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDeviceHyperPreciseStatus
- **HTTP**: `PUT /devices/services` (HyperPreciseLocation (thingspace))
- **Notes**: Enable/disable hyper-precise service for a device.
- **Signature**: `UpdateDeviceHyperPreciseStatus(BullseyeServiceRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BullseyeServiceResult`
- **Error**: `SdkException<UpdateDeviceHyperPreciseStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetHyperPreciseLocationResult(out HyperPreciseLocationResult)` [400, 401, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
