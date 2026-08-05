# SensorInsightsDeviceProfile — operations

Accessor: `client.SensorInsightsDeviceProfile` · Source: `Api/SensorInsightsDeviceProfile.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CreateAprofile
- **HTTP**: `POST /dm/v1/deviceConfigurationProfiles` (HyperPreciseCredentials (thingspace))
- **Notes**: Create a device profile
- **Signature**: `CreateAprofile(DtoConfigurationProfile body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DtoProfileResponse>`
- **Error**: `SdkException<CreateAprofileError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DeleteAprofile
- **HTTP**: `DELETE /dm/v1/deviceConfigurationProfiles` (HyperPreciseCredentials (thingspace))
- **Notes**: Delete a device profile
- **Signature**: `DeleteAprofile(DtoConfigurationProfileDelete deleterequest, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DtoProfileResponse>`
- **Error**: `SdkException<DeleteAprofileError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryAprofile
- **HTTP**: `POST /dm/v1/deviceConfigurationProfiles/actions/query` (HyperPreciseCredentials (thingspace))
- **Notes**: Query a device profile for an individual device
- **Signature**: `QueryAprofile(ResourceResourceQuery body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DtoProfileResponse>`
- **Error**: `SdkException<QueryAprofileError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### UpdateAprofile
- **HTTP**: `PATCH /dm/v1/deviceConfigurationProfiles` (HyperPreciseCredentials (thingspace))
- **Notes**: Partially update a device profile
- **Signature**: `UpdateAprofile(DtoConfigurationProfilePath body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DtoProfileResponse>`
- **Error**: `SdkException<UpdateAprofileError>` — **Case A (typed)**
- **Error accessors**: `TryGetManagementError400(out ManagementError400)` [400] · `TryGetManagementError(out ManagementError)` [401] · `TryGetManagementError403(out ManagementError403)` [403] · `TryGetManagementError500(out ManagementError500)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
