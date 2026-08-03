# ScaDeviceManagement — operations

Accessor: `client.ScaDeviceManagement` · Source: `Api/ScaDeviceManagement.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteScaDevicesDeviceId
- **HTTP**: `DELETE /scaDevices/{deviceId}` (Default (balanceplatform-api-test))
- **Notes**: Deletes a Strong Customer Authentication (SCA) device.
- **Signature**: `DeleteScaDevicesDeviceId(string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteScaDevicesDeviceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetScaDevices400Error1(out ScaDevices400Error1)` [400] · `TryGetScaDevices401Error1(out ScaDevices401Error1)` [401] · `TryGetScaDevices403Error1(out ScaDevices403Error1)` [403] · `TryGetScaDevices404Error1(out ScaDevices404Error1)` [404] · `TryGetScaDevices422Error1(out ScaDevices422Error1)` [422] · `TryGetScaDevices500Error1(out ScaDevices500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchScaDevicesDeviceId
- **HTTP**: `PATCH /scaDevices/{deviceId}` (Default (balanceplatform-api-test))
- **Notes**: Finishes the registration process for a new Strong Customer Authentication (SCA) device.
- **Signature**: `PatchScaDevicesDeviceId(string deviceId, FinishScaDeviceRegistrationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `FinishScaDeviceRegistrationResponse`
- **Error**: `SdkException<PatchScaDevicesDeviceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetScaDevices400Error1(out ScaDevices400Error1)` [400] · `TryGetScaDevices401Error1(out ScaDevices401Error1)` [401] · `TryGetScaDevices403Error1(out ScaDevices403Error1)` [403] · `TryGetScaDevices404Error1(out ScaDevices404Error1)` [404] · `TryGetScaDevices422Error1(out ScaDevices422Error1)` [422] · `TryGetScaDevices500Error1(out ScaDevices500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostScaDevices
- **HTTP**: `POST /scaDevices` (Default (balanceplatform-api-test))
- **Notes**: Begins the registration process for a new Strong Customer Authentication (SCA) device.
- **Signature**: `PostScaDevices(BeginScaDeviceRegistrationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `BeginScaDeviceRegistrationResponse`
- **Error**: `SdkException<PostScaDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetScaDevices400Error1(out ScaDevices400Error1)` [400] · `TryGetScaDevices401Error1(out ScaDevices401Error1)` [401] · `TryGetScaDevices403Error1(out ScaDevices403Error1)` [403] · `TryGetScaDevices422Error1(out ScaDevices422Error1)` [422] · `TryGetScaDevices500Error1(out ScaDevices500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostScaDevicesDeviceIdScaAssociations
- **HTTP**: `POST /scaDevices/{deviceId}/scaAssociations` (Default (balanceplatform-api-test))
- **Notes**: Creates an association between an SCA-enabled device and an entity, such as an account holder. This action does not guarantee the association is immediately ready for use; its status may be `pendingApproval` if the account holder has existing devices.
- **Signature**: `PostScaDevicesDeviceIdScaAssociations(string deviceId, SubmitScaAssociationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SubmitScaAssociationResponse`
- **Error**: `SdkException<PostScaDevicesDeviceIdScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetScaDevicesScaAssociations400Error1(out ScaDevicesScaAssociations400Error1)` [400] · `TryGetScaDevicesScaAssociations401Error1(out ScaDevicesScaAssociations401Error1)` [401] · `TryGetScaDevicesScaAssociations403Error1(out ScaDevicesScaAssociations403Error1)` [403] · `TryGetScaDevicesScaAssociations404Error1(out ScaDevicesScaAssociations404Error1)` [404] · `TryGetScaDevicesScaAssociations422Error1(out ScaDevicesScaAssociations422Error1)` [422] · `TryGetScaDevicesScaAssociations500Error1(out ScaDevicesScaAssociations500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
