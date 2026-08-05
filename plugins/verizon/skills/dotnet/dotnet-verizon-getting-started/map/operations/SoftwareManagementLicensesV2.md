# SoftwareManagementLicensesV2 — operations

Accessor: `client.SoftwareManagementLicensesV2` · Source: `Api/SoftwareManagementLicensesV2.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AssignLicensesToDevices2
- **HTTP**: `POST /licenses/{account}/assign` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to assign licenses to a list of devices.
- **Signature**: `AssignLicensesToDevices2(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V2LicensesAssignedRemovedResult`
- **Error**: `SdkException<AssignLicensesToDevices2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateListOfLicensesToRemove2
- **HTTP**: `POST /licenses/{account}/cancel` (SoftwareManagementV2 (thingspace))
- **Notes**: The license cancel endpoint allows user to create a list of license cancellation candidate devices.
- **Signature**: `CreateListOfLicensesToRemove2(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V2ListOfLicensesToRemoveResult`
- **Error**: `SdkException<CreateListOfLicensesToRemove2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteListOfLicensesToRemove2
- **HTTP**: `DELETE /licenses/{account}/cancel` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to delete a created cancel candidate device list.
- **Signature**: `DeleteListOfLicensesToRemove2(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `FotaV2SuccessResult`
- **Error**: `SdkException<DeleteListOfLicensesToRemove2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAccountLicenseStatus2
- **HTTP**: `GET /licenses/{account}` (SoftwareManagementV2 (thingspace))
- **Notes**: The endpoint allows user to list license usage.
- **Signature**: `GetAccountLicenseStatus2(string account, string? lastSeenDeviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `lastSeenDeviceId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `lastSeenDeviceId` ← `lastSeenDeviceId`
- **Returns**: `V2LicenseSummary`
- **Error**: `SdkException<GetAccountLicenseStatus2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListLicensesToRemove2
- **HTTP**: `GET /licenses/{account}/cancel` (SoftwareManagementV2 (thingspace))
- **Notes**: The license cancel endpoint allows user to list registered license cancellation candidate devices.
- **Signature**: `ListLicensesToRemove2(string account, string? startIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startIndex` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startIndex` ← `startIndex`
- **Returns**: `V2ListOfLicensesToRemove`
- **Error**: `SdkException<ListLicensesToRemove2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveLicensesFromDevices2
- **HTTP**: `POST /licenses/{account}/remove` (SoftwareManagementV2 (thingspace))
- **Notes**: This endpoint allows user to remove licenses from a list of devices.
- **Signature**: `RemoveLicensesFromDevices2(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V2LicensesAssignedRemovedResult`
- **Error**: `SdkException<RemoveLicensesFromDevices2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV2Result(out FotaV2Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
