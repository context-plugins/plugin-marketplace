# ManagingESimProfiles — operations

Accessor: `client.ManagingESimProfiles` · Source: `Api/ManagingESimProfiles.cs` · 10 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### ActivateAdeviceProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/activate` (HyperPreciseCredentials (thingspace))
- **Notes**: Activate a device with either a lead or local profile.
- **Signature**: `ActivateAdeviceProfile(GioprofileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeactivateAdeviceProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/deactivate` (HyperPreciseCredentials (thingspace))
- **Notes**: Deactivate the lead or local profile. Note: to reactivate the profile, use the Activate endpoint above.
- **Signature**: `DeactivateAdeviceProfile(GiodeactivateDeviceProfileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAdeviceProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/delete` (HyperPreciseCredentials (thingspace))
- **Notes**: Delete a device profile for Global IoT Orchestration. Note: the profile must be deactivated first!
- **Signature**: `DeleteAdeviceProfile(DeviceProfileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DeviceSuspend
- **HTTP**: `POST /m2m/v1/devices/profile/actions/device_suspend` (HyperPreciseCredentials (thingspace))
- **Notes**: Suspend all service to an eUICC device, including the lead and local profile.
- **Signature**: `DeviceSuspend(GioprofileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DownloadAdeviceProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/download` (HyperPreciseCredentials (thingspace))
- **Notes**: Download a Global IoT Orchestration device profile.
- **Signature**: `DownloadAdeviceProfile(DeviceProfileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EnableAdeviceProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/enable` (HyperPreciseCredentials (thingspace))
- **Notes**: Enable a device lead or local profile.
- **Signature**: `EnableAdeviceProfile(DeviceProfileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EnableAdeviceProfileForDownload
- **HTTP**: `POST /m2m/v1/devices/profile/actions/download_enable` (HyperPreciseCredentials (thingspace))
- **Notes**: Enable the Global IoT Orchestration device profile for download.
- **Signature**: `EnableAdeviceProfileForDownload(DeviceProfileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ProfileSuspend
- **HTTP**: `POST /m2m/v1/devices/profile/actions/profile_suspend` (HyperPreciseCredentials (thingspace))
- **Notes**: Suspend a device's Global profile.
- **Signature**: `ProfileSuspend(GioprofileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ResumeProfile
- **HTTP**: `POST /m2m/v1/devices/profile/actions/profile_resume` (HyperPreciseCredentials (thingspace))
- **Notes**: Resume service to a device with either a lead or local profile.
- **Signature**: `ResumeProfile(GioprofileRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SetFallback
- **HTTP**: `POST /v1/devices/profile/actions/setfallbackattribute` (HyperPreciseCredentials (thingspace))
- **Notes**: Enable a fallback profile to be set.
- **Signature**: `SetFallback(FallBack body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GiorequestResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
