<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transfers — operations

Accessor: `client.Transfers` · Source: `Api/Transfers.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTransfers
- **Server group**: `Default14`
- **Signature**: `GetTransfers(DateTimeOffset createdSince, DateTimeOffset createdUntil, string? balancePlatform, string? accountHolderId, string? balanceAccountId, string? paymentInstrumentId, string? reference, Category2? category, SortOrder? sortOrder, string? cursor, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`balancePlatform` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `createdSince` ← `createdSince`, `createdUntil` ← `createdUntil`, `balancePlatform` ← `balancePlatform`, `accountHolderId` ← `accountHolderId`, `balanceAccountId` ← `balanceAccountId`, `paymentInstrumentId` ← `paymentInstrumentId`, `reference` ← `reference`, `category` ← `category`, `sortOrder` ← `sortOrder`, `cursor` ← `cursor`, `limit` ← `limit`
- **Returns**: `FindTransfersResponse`
- **Error**: `SdkException<GetTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Category2` | `Models/Enums/Category2.cs` |
| `SortOrder` | `Models/Enums/SortOrder.cs` |
| `FindTransfersResponse` | `Models/FindTransfersResponse.cs` |
| `GetTransfersError` | `Errors/GetTransfersError.cs` |
| `TransferServiceRestServiceError` | `Models/TransferServiceRestServiceError.cs` |

### GetTransfersId
- **Server group**: `Default14`
- **Signature**: `GetTransfersId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `TransferData`
- **Error**: `SdkException<GetTransfersIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferData` | `Models/TransferData.cs` |
| `GetTransfersIdError` | `Errors/GetTransfersIdError.cs` |
| `TransferServiceRestServiceError` | `Models/TransferServiceRestServiceError.cs` |

### PostTransfers
- **Server group**: `Default14`
- **Signature**: `PostTransfers(string? idempotencyKey, string? wwwAuthenticate, TransferInfo? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `Transfer`
- **Error**: `SdkException<PostTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [401] · `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `TransferInfo` | `Models/TransferInfo.cs` |
| `Transfer` | `Models/Transfer.cs` |
| `PostTransfersError` | `Errors/PostTransfersError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |
| `TransferServiceRestServiceError` | `Models/TransferServiceRestServiceError.cs` |

### PostTransfersApprove
- **Server group**: `Default14`
- **Signature**: `PostTransfersApprove(string? idempotencyKey, string? wwwAuthenticate, ApproveTransfersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `wwwAuthenticate` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `JsonElement`
- **Error**: `SdkException<PostTransfersApproveError>` — **Case A (typed)**
- **Error accessors**: `TryGetServiceError1(out ServiceError1)` [401] · `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ApproveTransfersRequest` | `Models/ApproveTransfersRequest.cs` |
| `PostTransfersApproveError` | `Errors/PostTransfersApproveError.cs` |
| `ServiceError1` | `Models/ServiceError1.cs` |
| `TransferServiceRestServiceError` | `Models/TransferServiceRestServiceError.cs` |

### PostTransfersCancel
- **Server group**: `Default14`
- **Signature**: `PostTransfersCancel(string? idempotencyKey, CancelTransfersRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `JsonElement`
- **Error**: `SdkException<PostTransfersCancelError>` — **Case A (typed)**
- **Error accessors**: `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CancelTransfersRequest` | `Models/CancelTransfersRequest.cs` |
| `PostTransfersCancelError` | `Errors/PostTransfersCancelError.cs` |
| `TransferServiceRestServiceError` | `Models/TransferServiceRestServiceError.cs` |

### PostTransfersTransferIdReturns
- **Server group**: `Default14`
- **Signature**: `PostTransfersTransferIdReturns(string transferId, string? idempotencyKey, ReturnTransferRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ReturnTransferResponse`
- **Error**: `SdkException<PostTransfersTransferIdReturnsError>` — **Case A (typed)**
- **Error accessors**: `TryGetTransferServiceRestServiceError(out TransferServiceRestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ReturnTransferRequest` | `Models/ReturnTransferRequest.cs` |
| `ReturnTransferResponse` | `Models/ReturnTransferResponse.cs` |
| `PostTransfersTransferIdReturnsError` | `Errors/PostTransfersTransferIdReturnsError.cs` |
| `TransferServiceRestServiceError` | `Models/TransferServiceRestServiceError.cs` |

