<!-- Generated file — do not edit; regenerated with the SDK. -->

# ScaAssociationManagement — operations

Accessor: `client.ScaAssociationManagement` · Source: `Api/ScaAssociationManagement.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteScaAssociations
- **Server group**: `Default13`
- **Signature**: `DeleteScaAssociations(string wwwAuthenticate, RemoveAssociationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `RemoveAssociationRequest` | `Models/RemoveAssociationRequest.cs` |
| `DeleteScaAssociationsError` | `Errors/DeleteScaAssociationsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetScaAssociations
- **Server group**: `Default13`
- **Signature**: `GetScaAssociations(ScaEntityType entityType, string entityId, int pageSize, int pageNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Query params (wire ← C#)**: `entityType` ← `entityType`, `entityId` ← `entityId`, `pageSize` ← `pageSize`, `pageNumber` ← `pageNumber`
- **Returns**: `ListAssociationsResponse`
- **Error**: `SdkException<GetScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 403, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ScaEntityType` | `Models/Enums/ScaEntityType.cs` |
| `ListAssociationsResponse` | `Models/ListAssociationsResponse.cs` |
| `GetScaAssociationsError` | `Errors/GetScaAssociationsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchScaAssociations
- **Server group**: `Default13`
- **Signature**: `PatchScaAssociations(string wwwAuthenticate, ApproveAssociationRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ApproveAssociationResponse`
- **Error**: `SdkException<PatchScaAssociationsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ApproveAssociationRequest` | `Models/ApproveAssociationRequest.cs` |
| `ApproveAssociationResponse` | `Models/ApproveAssociationResponse.cs` |
| `PatchScaAssociationsError` | `Errors/PatchScaAssociationsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

