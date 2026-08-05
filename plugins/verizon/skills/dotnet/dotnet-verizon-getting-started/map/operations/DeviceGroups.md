# DeviceGroups — operations

Accessor: `client.DeviceGroups` · Source: `Api/DeviceGroups.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateDeviceGroup
- **HTTP**: `POST /m2m/v1/groups` (HyperPreciseCredentials (thingspace))
- **Notes**: Create a new device group and optionally add devices to the group. Device groups can make it easier to manage similar devices and to get reports on their usage.
- **Signature**: `CreateDeviceGroup(CreateDeviceGroupRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConnectivityManagementSuccessResult`
- **Error**: `SdkException<CreateDeviceGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteDeviceGroup
- **HTTP**: `DELETE /m2m/v1/groups/{aname}/name/{gname}` (HyperPreciseCredentials (thingspace))
- **Notes**: Deletes a device group from the account. Devices in the group are moved to the default device group and are not deleted from the account.
- **Signature**: `DeleteDeviceGroup(string aname, string gname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConnectivityManagementSuccessResult`
- **Error**: `SdkException<DeleteDeviceGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetDeviceGroupInformation
- **HTTP**: `GET /m2m/v1/groups/{aname}/name/{gname}` (HyperPreciseCredentials (thingspace))
- **Notes**: When HTTP status is 202, a URL will be returned in the Location header of the form /groups/{aname}/name/{gname}/?next={token}. This URL can be used to request the next set of groups.
- **Signature**: `GetDeviceGroupInformation(string aname, string gname, long? next, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `next` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `next` ← `next`
- **Returns**: `DeviceGroupDevicesData`
- **Error**: `SdkException<GetDeviceGroupInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListDeviceGroups
- **HTTP**: `GET /m2m/v1/groups/{aname}` (HyperPreciseCredentials (thingspace))
- **Notes**: Returns a list of all device groups in a specified account.
- **Signature**: `ListDeviceGroups(string aname, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DeviceGroup>`
- **Error**: `SdkException<ListDeviceGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateDeviceGroup
- **HTTP**: `PUT /m2m/v1/groups/{aname}/name/{gname}` (HyperPreciseCredentials (thingspace))
- **Notes**: Make changes to a device group, including changing the name and description, and adding or removing devices.
- **Signature**: `UpdateDeviceGroup(string aname, string gname, DeviceGroupUpdateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ConnectivityManagementSuccessResult`
- **Error**: `SdkException<UpdateDeviceGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
