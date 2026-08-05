# SimSecureForIoTLicenses — operations

Accessor: `client.SimSecureForIoTLicenses` · Source: `Api/SimSecureForIoTLicenses.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AssignLicenseToDevices
- **HTTP**: `POST /v1/devices/license/actions/assign` (M2M (thingspace))
- **Notes**: Assigns SIM-Secure for IoT licenses to SIMs.
- **Signature**: `AssignLicenseToDevices(string? xRequestId, AssignLicenseRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `xRequestId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SecuritySuccessResult`
- **Error**: `SdkException<AssignLicenseToDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetSecurityResult(out SecurityResult)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UnassignLicenseToDevices
- **HTTP**: `DELETE /v1/devices/license/actions/assign` (M2M (thingspace))
- **Notes**: Unassigns SIM-Secure for IoT Flexible and Flexible Bundle license from SIMs.
- **Signature**: `UnassignLicenseToDevices(string xRequestId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SecuritySuccessResult`
- **Error**: `SdkException<UnassignLicenseToDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetSecurityResult(out SecurityResult)` [400, 401, 403, 404, 406, 429] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
