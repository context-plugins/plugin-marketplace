# SoftwareManagementLicensesV3 — operations

Accessor: `client.SoftwareManagementLicensesV3` · Source: `Api/SoftwareManagementLicensesV3.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AssignLicensesToDevices3
- **HTTP**: `POST /licenses/{acc}/assign` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows user to assign licenses to a list of devices.
- **Signature**: `AssignLicensesToDevices3(string acc, V3LicenseImei body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V3LicenseAssignedRemovedResult`
- **Error**: `SdkException<AssignLicensesToDevices3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountLicensesStatus
- **HTTP**: `GET /licenses/{acc}` (SoftwareManagementV3 (thingspace))
- **Notes**: The endpoint allows user to list license usage.
- **Signature**: `GetAccountLicensesStatus(string acc, string? lastSeenDeviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `lastSeenDeviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `lastSeenDeviceId` ← `lastSeenDeviceId`
- **Returns**: `V3LicenseSummary`
- **Error**: `SdkException<GetAccountLicensesStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveLicensesFromDevices3
- **HTTP**: `POST /licenses/{acc}/remove` (SoftwareManagementV3 (thingspace))
- **Notes**: This endpoint allows user to remove licenses from a list of devices.
- **Signature**: `RemoveLicensesFromDevices3(string acc, V3LicenseImei body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V3LicenseAssignedRemovedResult`
- **Error**: `SdkException<RemoveLicensesFromDevices3Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV3Result(out FotaV3Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
