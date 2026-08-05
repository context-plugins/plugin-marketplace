# HplDeviceManagement — operations

Accessor: `client.HplDeviceManagement` · Source: `Api/HplDeviceManagement.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AddDevicesHyperPrecise
- **HTTP**: `POST /devices/actions/add` (HyperPreciseLocation (thingspace))
- **Notes**: Use this API if you want to manage some device settings before you are ready to activate service for the devices.
- **Signature**: `AddDevicesHyperPrecise(HplAddDevicesRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<HplAddDevicesRequest>`
- **Error**: `SdkException<AddDevicesHyperPreciseError>` — **Case A (typed)**
- **Error accessors**: `TryGetHyperPreciseLocationResult(out HyperPreciseLocationResult)` [400, 401, 403, 404, 405, 406, 429, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
