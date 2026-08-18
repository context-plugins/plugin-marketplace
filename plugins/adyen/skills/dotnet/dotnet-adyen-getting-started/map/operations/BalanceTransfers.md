<!-- Generated file — do not edit; regenerated with the SDK. -->

# BalanceTransfers — operations

Accessor: `client.BalanceTransfers` · Source: `Api/BalanceTransfers.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostBalanceTransfers
- **Server group**: `Default11`
- **Signature**: `PostBalanceTransfers(BalanceTransferRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BalanceTransferResponse`
- **Error**: `SdkException<PostBalanceTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 422] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BalanceTransferRequest` | `Models/BalanceTransferRequest.cs` |
| `BalanceTransferResponse` | `Models/BalanceTransferResponse.cs` |
| `PostBalanceTransfersError` | `Errors/PostBalanceTransfersError.cs` |
| `DefaultErrorResponseEntity` | `Models/DefaultErrorResponseEntity.cs` |

