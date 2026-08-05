# EUiccDeviceProfileManagement — operations

Accessor: `client.EUiccDeviceProfileManagement` · Source: `Api/EUiccDeviceProfileManagement.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteLocalProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/delete` (HyperPreciseCredentials (thingspace))
- **Notes**: Delete a local profile from eUICC devices. If the local profile is enabled, it will first be disabled and the boot or default profile will be enabled.
- **Signature**: `DeleteLocalProfile(ProfileChangeStateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestResponse`
- **Error**: `SdkException<DeleteLocalProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DisableLocalProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/disable` (HyperPreciseCredentials (thingspace))
- **Notes**: Disable a local profile on eUICC devices. The default or boot profile will become the enabled profile.
- **Signature**: `DisableLocalProfile(ProfileChangeStateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestResponse`
- **Error**: `SdkException<DisableLocalProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadLocalProfileToDisable
- **HTTP**: `POST /m2m/v1/devices/profile/actions/download_disable` (HyperPreciseCredentials (thingspace))
- **Notes**: Downloads an eUICC local profile to devices and leaves the profile disabled.
- **Signature**: `DownloadLocalProfileToDisable(ProfileChangeStateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<DownloadLocalProfileToDisableError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DownloadLocalProfileToEnable
- **HTTP**: `POST /m2m/v1/devices/profile/actions/download_enable` (HyperPreciseCredentials (thingspace))
- **Notes**: Downloads an eUICC local profile to devices and enables the profile.
- **Signature**: `DownloadLocalProfileToEnable(ProfileChangeStateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `DeviceManagementResult`
- **Error**: `SdkException<DownloadLocalProfileToEnableError>` — **Case A (typed)**
- **Error accessors**: `TryGetConnectivityManagementResult(out ConnectivityManagementResult)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableLocalProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/enable` (HyperPreciseCredentials (thingspace))
- **Notes**: Enable a local profile that has been downloaded to eUICC devices.
- **Signature**: `EnableLocalProfile(ProfileChangeStateRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestResponse`
- **Error**: `SdkException<EnableLocalProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
