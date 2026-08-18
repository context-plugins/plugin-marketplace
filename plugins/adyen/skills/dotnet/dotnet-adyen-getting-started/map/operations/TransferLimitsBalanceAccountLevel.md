<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferLimitsBalanceAccountLevel — operations

Accessor: `client.TransferLimitsBalanceAccountLevel` · Source: `Api/TransferLimitsBalanceAccountLevel.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteBalanceAccountsIdTransferLimitsTransferLimitId
- **Server group**: `Default13`
- **Signature**: `DeleteBalanceAccountsIdTransferLimitsTransferLimitId(string id, string transferLimitId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `void` (Task)
- **Error**: `SdkException<DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError` | `Errors/DeleteBalanceAccountsIdTransferLimitsTransferLimitIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalanceAccountsIdTransferLimits
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsIdTransferLimits(string id, Scope? scope, TransferType? transferType, LimitStatus? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `scope` — nullable, no default → **must pass explicitly**
  - `transferType` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `scope` ← `scope`, `transferType` ← `transferType`, `status` ← `status`
- **Returns**: `TransferLimitListResponse`
- **Error**: `SdkException<GetBalanceAccountsIdTransferLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Scope` | `Models/Enums/Scope.cs` |
| `TransferType` | `Models/Enums/TransferType.cs` |
| `LimitStatus` | `Models/Enums/LimitStatus.cs` |
| `TransferLimitListResponse` | `Models/TransferLimitListResponse.cs` |
| `GetBalanceAccountsIdTransferLimitsError` | `Errors/GetBalanceAccountsIdTransferLimitsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalanceAccountsIdTransferLimitsCurrent
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsIdTransferLimitsCurrent(string id, Scope? scope, TransferType? transferType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `scope` — nullable, no default → **must pass explicitly**
  - `transferType` — nullable, no default → **must pass explicitly**
- **Query params (wire ← C#)**: `scope` ← `scope`, `transferType` ← `transferType`
- **Returns**: `TransferLimitListResponse`
- **Error**: `SdkException<GetBalanceAccountsIdTransferLimitsCurrentError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Scope` | `Models/Enums/Scope.cs` |
| `TransferType` | `Models/Enums/TransferType.cs` |
| `TransferLimitListResponse` | `Models/TransferLimitListResponse.cs` |
| `GetBalanceAccountsIdTransferLimitsCurrentError` | `Errors/GetBalanceAccountsIdTransferLimitsCurrentError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### GetBalanceAccountsIdTransferLimitsTransferLimitId
- **Server group**: `Default13`
- **Signature**: `GetBalanceAccountsIdTransferLimitsTransferLimitId(string id, string transferLimitId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransferLimit`
- **Error**: `SdkException<GetBalanceAccountsIdTransferLimitsTransferLimitIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferLimit` | `Models/TransferLimit.cs` |
| `GetBalanceAccountsIdTransferLimitsTransferLimitIdError` | `Errors/GetBalanceAccountsIdTransferLimitsTransferLimitIdError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostBalanceAccountsIdTransferLimits
- **Server group**: `Default13`
- **Signature**: `PostBalanceAccountsIdTransferLimits(string id, string? wwwAuthenticate, CreateTransferLimitRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
- **Returns**: `TransferLimit`
- **Error**: `SdkException<PostBalanceAccountsIdTransferLimitsError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [400, 401, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CreateTransferLimitRequest` | `Models/CreateTransferLimitRequest.cs` |
| `TransferLimit` | `Models/TransferLimit.cs` |
| `PostBalanceAccountsIdTransferLimitsError` | `Errors/PostBalanceAccountsIdTransferLimitsError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

### PostBalanceAccountsIdTransferLimitsApprove
- **Server group**: `Default13`
- **Signature**: `PostBalanceAccountsIdTransferLimitsApprove(string id, string? wwwAuthenticate, ApproveTransferLimitRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
- **Returns**: `void` (Task)
- **Error**: `SdkException<PostBalanceAccountsIdTransferLimitsApproveError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 404, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ApproveTransferLimitRequest` | `Models/ApproveTransferLimitRequest.cs` |
| `PostBalanceAccountsIdTransferLimitsApproveError` | `Errors/PostBalanceAccountsIdTransferLimitsApproveError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

