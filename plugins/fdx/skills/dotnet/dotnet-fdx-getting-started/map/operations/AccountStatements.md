# AccountStatements — operations

Accessor: `client.AccountStatements` · Source: `Api/AccountStatements.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccountStatement
- **HTTP**: `GET /accounts/{accountId}/statements/{statementId}` (Core (financialdataexchange-prod))
- **Notes**: Gets an account statement image file. Use HTTP Accept request-header to specify desired content types. See ContentTypes definition for typical values
- **Signature**: `GetAccountStatement(string accountId, string statementId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `void` (Task)
- **Error**: `SdkException<GetAccountStatementError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 406, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchForAccountStatements
- **HTTP**: `GET /accounts/{accountId}/statements` (Core (financialdataexchange-prod))
- **Notes**: Get account statements. Example: GET /accounts/{accountId}/statements?startTime=value1&amp;endTime=value2
- **Signature**: `SearchForAccountStatements(string accountId, DateTimeOffset? startTime, DateTimeOffset? endTime, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startTime` ← `startTime`, `endTime` ← `endTime`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `AnArrayOfStatements`
- **Error**: `SdkException<SearchForAccountStatementsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
