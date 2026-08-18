<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScaDeviceManagement — operations

Accessor: `client.ScaDeviceManagement` · Source: `Api/ScaDeviceManagement.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteScaDevicesDeviceId
- **Server group**: `Default13`
- **Signature**: `DeleteScaDevicesDeviceId(string deviceId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteScaDevicesDeviceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteScaDevicesDeviceIdError` | `Errors/DeleteScaDevicesDeviceIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchScaDevicesDeviceId
- **Server group**: `Default13`
- **Signature**: `PatchScaDevicesDeviceId(string deviceId, FinishScaDeviceRegistrationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `FinishScaDeviceRegistrationResponse`
- **Error**: `SdkException<PatchScaDevicesDeviceIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `FinishScaDeviceRegistrationRequest` | `Models/FinishScaDeviceRegistrationRequest.cs` |
| `FinishScaDeviceRegistrationResponse` | `Models/FinishScaDeviceRegistrationResponse.cs` |
| `PatchScaDevicesDeviceIdError` | `Errors/PatchScaDevicesDeviceIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostScaDevices
- **Server group**: `Default13`
- **Signature**: `PostScaDevices(BeginScaDeviceRegistrationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `BeginScaDeviceRegistrationResponse`
- **Error**: `SdkException<PostScaDevicesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BeginScaDeviceRegistrationRequest` | `Models/BeginScaDeviceRegistrationRequest.cs` |
| `BeginScaDeviceRegistrationResponse` | `Models/BeginScaDeviceRegistrationResponse.cs` |
| `PostScaDevicesError` | `Errors/PostScaDevicesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostScaDevicesDeviceIdScaAssociations
- **Server group**: `Default13`
- **Signature**: `PostScaDevicesDeviceIdScaAssociations(string deviceId, SubmitScaAssociationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `SubmitScaAssociationResponse`
- **Error**: `SdkException<PostScaDevicesDeviceIdScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 404, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitScaAssociationRequest` | `Models/SubmitScaAssociationRequest.cs` |
| `SubmitScaAssociationResponse` | `Models/SubmitScaAssociationResponse.cs` |
| `PostScaDevicesDeviceIdScaAssociationsError` | `Errors/PostScaDevicesDeviceIdScaAssociationsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

