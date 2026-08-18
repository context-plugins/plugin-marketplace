<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.Transactions` · Source: `Api/Transactions.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTransactions
- **Server group**: `Default14`
- **Signature**: `GetTransactions(DateTimeOffset createdSince, DateTimeOffset createdUntil, string? balancePlatform, string? paymentInstrumentId, string? accountHolderId, string? balanceAccountId, string? cursor, SortOrder? sortOrder, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`balancePlatform` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
- **Query params (wire ← C#)**: `createdSince` ← `createdSince`, `createdUntil` ← `createdUntil`, `balancePlatform` ← `balancePlatform`, `paymentInstrumentId` ← `paymentInstrumentId`, `accountHolderId` ← `accountHolderId`, `balanceAccountId` ← `balanceAccountId`, `cursor` ← `cursor`, `sortOrder` ← `sortOrder`, `limit` ← `limit`
- **Returns**: `TransactionSearchResponse`
- **Error**: `SdkException<GetTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SortOrder` | `Models/Enums/SortOrder.cs` |
| `TransactionSearchResponse` | `Models/TransactionSearchResponse.cs` |
| `GetTransactionsError` | `Errors/GetTransactionsError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

### GetTransactionsId
- **Server group**: `Default14`
- **Signature**: `GetTransactionsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `Transaction`
- **Error**: `SdkException<GetTransactionsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Transaction` | `Models/Transaction.cs` |
| `GetTransactionsIdError` | `Errors/GetTransactionsIdError.cs` |
| `RestServiceError` | `Models/RestServiceError.cs` |

