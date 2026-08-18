<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferLimitsBalancePlatformLevel — operations

Accessor: `client.TransferLimitsBalancePlatformLevel` · Source: `Api/TransferLimitsBalancePlatformLevel.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBalancePlatformsIdTransferLimitsTransferLimitId
- **Server group**: `Default13`
- **Signature**: `DeleteBalancePlatformsIdTransferLimitsTransferLimitId(string id, string transferLimitId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError` | `Errors/DeleteBalancePlatformsIdTransferLimitsTransferLimitIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalancePlatformsIdTransferLimits
- **Server group**: `Default13`
- **Signature**: `GetBalancePlatformsIdTransferLimits(string id, Scope? scope, TransferType? transferType, LimitStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `scope` — nullable, no default → **must pass explicitly**
  - `transferType` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `scope` ← `scope`, `transferType` ← `transferType`, `status` ← `status`
- **Returns**: `TransferLimitListResponse`
- **Error**: `SdkException<GetBalancePlatformsIdTransferLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Scope` | `Models/Enums/Scope.cs` |
| `TransferType` | `Models/Enums/TransferType.cs` |
| `LimitStatus` | `Models/Enums/LimitStatus.cs` |
| `TransferLimitListResponse` | `Models/TransferLimitListResponse.cs` |
| `GetBalancePlatformsIdTransferLimitsError` | `Errors/GetBalancePlatformsIdTransferLimitsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalancePlatformsIdTransferLimitsTransferLimitId
- **Server group**: `Default13`
- **Signature**: `GetBalancePlatformsIdTransferLimitsTransferLimitId(string id, string transferLimitId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransferLimit`
- **Error**: `SdkException<GetBalancePlatformsIdTransferLimitsTransferLimitIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferLimit` | `Models/TransferLimit.cs` |
| `GetBalancePlatformsIdTransferLimitsTransferLimitIdError` | `Errors/GetBalancePlatformsIdTransferLimitsTransferLimitIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostBalancePlatformsIdTransferLimits
- **Server group**: `Default13`
- **Signature**: `PostBalancePlatformsIdTransferLimits(string id, CreateTransferLimitRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransferLimit`
- **Error**: `SdkException<PostBalancePlatformsIdTransferLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTransferLimitRequest` | `Models/CreateTransferLimitRequest.cs` |
| `TransferLimit` | `Models/TransferLimit.cs` |
| `PostBalancePlatformsIdTransferLimitsError` | `Errors/PostBalancePlatformsIdTransferLimitsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

