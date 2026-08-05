# AccountDevices — operations

Accessor: `client.AccountDevices` · Source: `Api/AccountDevices.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountDeviceInformation
- **HTTP**: `GET /devices/{acc}` (SoftwareManagementV3 (thingspace))
- **Signature**: `GetAccountDeviceInformation(string acc, string? lastSeenDeviceId, DevicesProtocol? protocol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `lastSeenDeviceId` — nullable, no default → **must pass explicitly**
  - `protocol` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `lastSeenDeviceId` ← `lastSeenDeviceId`, `protocol` ← `protocol`
- **Returns**: `V3AccountDeviceList`
- **Error**: `SdkException<GetAccountDeviceInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAccountDevicesInformation
- **HTTP**: `POST /devices/{acc}` (SoftwareManagementV3 (thingspace))
- **Notes**: Retrieve device information for a list of devices on an account.
- **Signature**: `ListAccountDevicesInformation(string acc, DeviceImei body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceListResult`
- **Error**: `SdkException<ListAccountDevicesInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
