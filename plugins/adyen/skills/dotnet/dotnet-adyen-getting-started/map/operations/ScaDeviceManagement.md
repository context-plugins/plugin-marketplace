# ScaDeviceManagement — operations

Accessor: `client.ScaDeviceManagement` · Source: `Api/ScaDeviceManagement.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteScaDevicesDeviceId
- **HTTP**: `DELETE /scaDevices/{deviceId}` (Default13 (balanceplatform-api-test))
- **Notes**: Deletes a Strong Customer Authentication (SCA) device.
- **Signature**: `DeleteScaDevicesDeviceId(string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteScaDevicesDeviceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchScaDevicesDeviceId
- **HTTP**: `PATCH /scaDevices/{deviceId}` (Default13 (balanceplatform-api-test))
- **Notes**: Finishes the registration process for a new Strong Customer Authentication (SCA) device.
- **Signature**: `PatchScaDevicesDeviceId(string deviceId, FinishScaDeviceRegistrationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FinishScaDeviceRegistrationResponse`
- **Error**: `SdkException<PatchScaDevicesDeviceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostScaDevices
- **HTTP**: `POST /scaDevices` (Default13 (balanceplatform-api-test))
- **Notes**: Begins the registration process for a new Strong Customer Authentication (SCA) device.
- **Signature**: `PostScaDevices(BeginScaDeviceRegistrationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BeginScaDeviceRegistrationResponse`
- **Error**: `SdkException<PostScaDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostScaDevicesDeviceIdScaAssociations
- **HTTP**: `POST /scaDevices/{deviceId}/scaAssociations` (Default13 (balanceplatform-api-test))
- **Notes**: Creates an association between an SCA-enabled device and an entity, such as an account holder. This action does not guarantee the association is immediately ready for use; its status may be `pendingApproval` if the account holder has existing devices.
- **Signature**: `PostScaDevicesDeviceIdScaAssociations(string deviceId, SubmitScaAssociationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubmitScaAssociationResponse`
- **Error**: `SdkException<PostScaDevicesDeviceIdScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
