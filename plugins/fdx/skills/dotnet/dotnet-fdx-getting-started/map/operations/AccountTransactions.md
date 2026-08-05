# AccountTransactions — operations

Accessor: `client.AccountTransactions` · Source: `Api/AccountTransactions.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountTransactionImages
- **HTTP**: `GET /accounts/{accountId}/transaction-images/{imageId}` (Core (financialdataexchange-prod))
- **Notes**: Get account transaction image
- **Signature**: `GetAccountTransactionImages(string accountId, string imageId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAccountTransactionImagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 406, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchForAccountTransactions
- **HTTP**: `GET /accounts/{accountId}/transactions` (Core (financialdataexchange-prod))
- **Notes**: Search for account transactions. Example: /accounts/{accountId}/transactions?startTime=value1&amp;endTime=value2
- **Signature**: `SearchForAccountTransactions(string accountId, DateTimeOffset? startTime, DateTimeOffset? endTime, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startTime` ← `startTime`, `endTime` ← `endTime`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `TransactionsEntity`
- **Error**: `SdkException<SearchForAccountTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
