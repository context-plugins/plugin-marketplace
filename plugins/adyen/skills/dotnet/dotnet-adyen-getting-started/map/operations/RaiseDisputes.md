<!-- Generated file — do not edit; regenerated with the SDK. -->

# RaiseDisputes — operations

Accessor: `client.RaiseDisputes` · Source: `Api/RaiseDisputes.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetDisputes
- **Server group**: `Default23`
- **Signature**: `GetDisputes(string? status, string? paymentInstrument, string? createdSince, string? createdUntil, string? offset, string? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`status` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `status` ← `status`, `paymentInstrument` ← `paymentInstrument`, `createdSince` ← `createdSince`, `createdUntil` ← `createdUntil`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<IReadOnlyList<DisputeResponse>>`
- **Error**: `SdkException<GetDisputesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DisputeResponse` | `Models/DisputeResponse.cs` |
| `GetDisputesError` | `Errors/GetDisputesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetDisputesId
- **Server group**: `Default23`
- **Signature**: `GetDisputesId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `DisputeResponse`
- **Error**: `SdkException<GetDisputesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DisputeResponse` | `Models/DisputeResponse.cs` |
| `GetDisputesIdError` | `Errors/GetDisputesIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PatchDisputesId
- **Server group**: `Default23`
- **Signature**: `PatchDisputesId(string id, PatchableDisputeRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `DisputeResponse`
- **Error**: `SdkException<PatchDisputesIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `PatchableDisputeRequest` | `Models/PatchableDisputeRequest.cs` |
| `DisputeResponse` | `Models/DisputeResponse.cs` |
| `PatchDisputesIdError` | `Errors/PatchDisputesIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostDisputes
- **Server group**: `Default23`
- **Signature**: `PostDisputes(DisputeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `DisputeResponse`
- **Error**: `SdkException<PostDisputesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 403, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DisputeRequest` | `Models/DisputeRequest.cs` |
| `DisputeResponse` | `Models/DisputeResponse.cs` |
| `PostDisputesError` | `Errors/PostDisputesError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

