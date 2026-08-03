# Transactions — operations

Accessor: `client.Transactions` · Source: `Api/Transactions.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTransactions
- **HTTP**: `GET /transactions` (Default (balanceplatform-api-test))
- **Notes**: &gt;Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version. Returns all the transactions related to a balance account, account holder, or balance platform. When making this request, you must include at least one of the following: - `balanceAccountId` - `accountHolderId` - `balancePlatform`. This endpoint supports cursor-based pagination. The response returns the first page of results, and returns links to the next and previous pages when applicable. You can use the links to page through the results.
- **Signature**: `GetTransactions(DateTimeOffset createdSince, DateTimeOffset createdUntil, string? balancePlatform, string? paymentInstrumentId, string? accountHolderId, string? balanceAccountId, string? cursor, SortOrder2? sortOrder, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`balancePlatform` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `createdSince` ← `createdSince`, `createdUntil` ← `createdUntil`, `balancePlatform` ← `balancePlatform`, `paymentInstrumentId` ← `paymentInstrumentId`, `accountHolderId` ← `accountHolderId`, `balanceAccountId` ← `balanceAccountId`, `cursor` ← `cursor`, `sortOrder` ← `sortOrder`, `limit` ← `limit`
- **Returns**: `TransactionSearchResponse`
- **Error**: `SdkException<GetTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTransactionsId
- **HTTP**: `GET /transactions/{id}` (Default (balanceplatform-api-test))
- **Notes**: &gt;Versions 1 and 2 of the Transfers API are deprecated. If you are just starting your implementation, use the latest version. Returns a transaction.
- **Signature**: `GetTransactionsId(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Transaction1`
- **Error**: `SdkException<GetTransactionsIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetRestServiceError(out RestServiceError)` [401, 403, 422, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
