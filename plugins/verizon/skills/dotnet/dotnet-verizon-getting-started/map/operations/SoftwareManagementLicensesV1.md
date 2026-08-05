# SoftwareManagementLicensesV1 — operations

Accessor: `client.SoftwareManagementLicensesV1` · Source: `Api/SoftwareManagementLicensesV1.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AssignLicensesToDevices
- **HTTP**: `POST /licenses/{account}/assign` (SoftwareManagementV1 (thingspace))
- **Notes**: Assigns licenses to a specified list of devices so that firmware upgrades can be scheduled for those devices.
- **Signature**: `AssignLicensesToDevices(string account, V1LicensesAssignedRemovedRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1LicensesAssignedRemovedResult`
- **Error**: `SdkException<AssignLicensesToDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CreateListOfLicensesToRemove
- **HTTP**: `POST /licenses/{account}/cancel` (SoftwareManagementV1 (thingspace))
- **Signature**: `CreateListOfLicensesToRemove(string account, V1ListOfLicensesToRemoveRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1ListOfLicensesToRemoveResult`
- **Error**: `SdkException<CreateListOfLicensesToRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteListOfLicensesToRemove
- **HTTP**: `DELETE /licenses/{account}/cancel` (SoftwareManagementV1 (thingspace))
- **Notes**: Deletes the entire list of cancellation candidate devices.
- **Signature**: `DeleteListOfLicensesToRemove(string account, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteListOfLicensesToRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent(out RawError)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListLicensesToRemove
- **HTTP**: `GET /licenses/{account}/cancel/index/{startIndex}` (SoftwareManagementV1 (thingspace))
- **Notes**: Returns a list of devices from which licenses will be removed if the number of MRC licenses becomes less than the number of assigned licenses.
- **Signature**: `ListLicensesToRemove(string account, string startIndex, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1ListOfLicensesToRemove`
- **Error**: `SdkException<ListLicensesToRemoveError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RemoveLicensesFromDevices
- **HTTP**: `POST /licenses/{account}/remove` (SoftwareManagementV1 (thingspace))
- **Notes**: Remove unused licenses from device.
- **Signature**: `RemoveLicensesFromDevices(string account, V1LicensesAssignedRemovedRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `V1LicensesAssignedRemovedResult`
- **Error**: `SdkException<RemoveLicensesFromDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetFotaV1Result(out FotaV1Result)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
