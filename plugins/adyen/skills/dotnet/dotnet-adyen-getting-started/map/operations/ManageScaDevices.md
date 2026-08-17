# ManageScaDevices — operations

Accessor: `client.ManageScaDevices` · Source: `Api/ManageScaDevices.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### DeleteRegisteredDevicesId
- **HTTP**: `DELETE /registeredDevices/{id}` (Default13 (balanceplatform-api-test))
- **Notes**: Deletes an SCA device from the list of registered devices of a specific payment instrument.
- **Signature**: `DeleteRegisteredDevicesId(string id, string paymentInstrumentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `paymentInstrumentId` ← `paymentInstrumentId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteRegisteredDevicesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetRegisteredDevices
- **HTTP**: `GET /registeredDevices` (Default13 (balanceplatform-api-test))
- **Notes**: Get a paginated list of the SCA devices you have currently registered for a specific payment instrument.
- **Signature**: `GetRegisteredDevices(string paymentInstrumentId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `paymentInstrumentId` ← `paymentInstrumentId`, `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `SearchRegisteredDevicesResponse`
- **Error**: `SdkException<GetRegisteredDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchRegisteredDevicesDeviceIdAssociations
- **HTTP**: `PATCH /registeredDevices/{deviceId}/associations` (Default13 (balanceplatform-api-test))
- **Notes**: Completes an association between a user's registered SCA device and an Adyen resource. For example, you can associate an SCA device with additional business accounts or Adyen-issued cards . To complete the association, this endpoint validates the authentication data of the registered device.
- **Signature**: `PatchRegisteredDevicesDeviceIdAssociations(string deviceId, AssociationFinaliseRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AssociationFinaliseResponse`
- **Error**: `SdkException<PatchRegisteredDevicesDeviceIdAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PatchRegisteredDevicesId
- **HTTP**: `PATCH /registeredDevices/{id}` (Default13 (balanceplatform-api-test))
- **Notes**: Completes the registration of an SCA device by validating the authentication data of the device. You can register SCA devices for business accounts or Adyen-issued cards .
- **Signature**: `PatchRegisteredDevicesId(string id, RegisterScaRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RegisterScaFinalResponse`
- **Error**: `SdkException<PatchRegisteredDevicesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostRegisteredDevices
- **HTTP**: `POST /registeredDevices` (Default13 (balanceplatform-api-test))
- **Notes**: Initiates the registration of a user's device for Strong Customer Authentication (SCA). You can register SCA devices for business accounts or Adyen-issued cards . For a successful request, the device must be eligible for SCA.
- **Signature**: `PostRegisteredDevices(RegisterScaRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `RegisterScaResponse`
- **Error**: `SdkException<PostRegisteredDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PostRegisteredDevicesDeviceIdAssociations
- **HTTP**: `POST /registeredDevices/{deviceId}/associations` (Default13 (balanceplatform-api-test))
- **Notes**: Initiates an association between a user's registered SCA device and an Adyen resource. For example, you can associate an SCA device with additional business accounts or Adyen-issued cards .
- **Signature**: `PostRegisteredDevicesDeviceIdAssociations(string deviceId, AssociationInitiateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AssociationInitiateResponse`
- **Error**: `SdkException<PostRegisteredDevicesDeviceIdAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
