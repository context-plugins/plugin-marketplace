<!-- Generated file — do not edit; regenerated with the SDK. -->

# ManageScaDevices — operations

Accessor: `client.ManageScaDevices` · Source: `Api/ManageScaDevices.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteRegisteredDevicesId
- **Server group**: `Default13`
- **Signature**: `DeleteRegisteredDevicesId(string id, string paymentInstrumentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `paymentInstrumentId` ← `paymentInstrumentId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteRegisteredDevicesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteRegisteredDevicesIdError` | `Errors/DeleteRegisteredDevicesIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetRegisteredDevices
- **Server group**: `Default13`
- **Signature**: `GetRegisteredDevices(string paymentInstrumentId, int? pageNumber, int? pageSize, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `pageNumber` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `paymentInstrumentId` ← `paymentInstrumentId`, `pageNumber` ← `pageNumber`, `pageSize` ← `pageSize`
- **Returns**: `SearchRegisteredDevicesResponse`
- **Error**: `SdkException<GetRegisteredDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SearchRegisteredDevicesResponse` | `Models/SearchRegisteredDevicesResponse.cs` |
| `GetRegisteredDevicesError` | `Errors/GetRegisteredDevicesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchRegisteredDevicesDeviceIdAssociations
- **Server group**: `Default13`
- **Signature**: `PatchRegisteredDevicesDeviceIdAssociations(string deviceId, AssociationFinaliseRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AssociationFinaliseResponse`
- **Error**: `SdkException<PatchRegisteredDevicesDeviceIdAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationFinaliseRequest` | `Models/AssociationFinaliseRequest.cs` |
| `AssociationFinaliseResponse` | `Models/AssociationFinaliseResponse.cs` |
| `PatchRegisteredDevicesDeviceIdAssociationsError` | `Errors/PatchRegisteredDevicesDeviceIdAssociationsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PatchRegisteredDevicesId
- **Server group**: `Default13`
- **Signature**: `PatchRegisteredDevicesId(string id, RegisterScaRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `RegisterScaFinalResponse`
- **Error**: `SdkException<PatchRegisteredDevicesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RegisterScaRequest` | `Models/RegisterScaRequest.cs` |
| `RegisterScaFinalResponse` | `Models/RegisterScaFinalResponse.cs` |
| `PatchRegisteredDevicesIdError` | `Errors/PatchRegisteredDevicesIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostRegisteredDevices
- **Server group**: `Default13`
- **Signature**: `PostRegisteredDevices(RegisterScaRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `RegisterScaResponse`
- **Error**: `SdkException<PostRegisteredDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RegisterScaRequest` | `Models/RegisterScaRequest.cs` |
| `RegisterScaResponse` | `Models/RegisterScaResponse.cs` |
| `PostRegisteredDevicesError` | `Errors/PostRegisteredDevicesError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### PostRegisteredDevicesDeviceIdAssociations
- **Server group**: `Default13`
- **Signature**: `PostRegisteredDevicesDeviceIdAssociations(string deviceId, AssociationInitiateRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `AssociationInitiateResponse`
- **Error**: `SdkException<PostRegisteredDevicesDeviceIdAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `AssociationInitiateRequest` | `Models/AssociationInitiateRequest.cs` |
| `AssociationInitiateResponse` | `Models/AssociationInitiateResponse.cs` |
| `PostRegisteredDevicesDeviceIdAssociationsError` | `Errors/PostRegisteredDevicesDeviceIdAssociationsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

