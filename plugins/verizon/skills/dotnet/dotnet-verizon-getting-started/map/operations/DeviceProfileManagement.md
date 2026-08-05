# DeviceProfileManagement — operations

Accessor: `client.DeviceProfileManagement` · Source: `Api/DeviceProfileManagement.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivateDeviceThroughProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/activate_enable` (HyperPreciseCredentials (thingspace))
- **Notes**: Uses the profile to bring the device under management.
- **Signature**: `ActivateDeviceThroughProfile(ActivateDeviceProfileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestResponse`
- **Error**: `SdkException<ActivateDeviceThroughProfileError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ProfileToActivateDevice
- **HTTP**: `POST /m2m/v1/devices/profile/actions/activate` (HyperPreciseCredentials (thingspace))
- **Notes**: Uses the profile to activate the device.
- **Signature**: `ProfileToActivateDevice(ProfileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestResponse`
- **Error**: `SdkException<ProfileToActivateDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ProfileToDeactivateDevice
- **HTTP**: `POST /m2m/v1/devices/profile/actions/deactivate` (HyperPreciseCredentials (thingspace))
- **Notes**: Uses the profile to deactivate the device.
- **Signature**: `ProfileToDeactivateDevice(DeactivateDeviceProfileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestResponse`
- **Error**: `SdkException<ProfileToDeactivateDeviceError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ProfileToSetFallbackAttribute
- **HTTP**: `POST /m2m/v1/devices/profile/actions/setfallbackattribute` (HyperPreciseCredentials (thingspace))
- **Notes**: Allows the profile to set the fallback attribute to the device.
- **Signature**: `ProfileToSetFallbackAttribute(SetFallbackAttributeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RequestResponse`
- **Error**: `SdkException<ProfileToSetFallbackAttributeError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestErrorResponse(out RestErrorResponse)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
