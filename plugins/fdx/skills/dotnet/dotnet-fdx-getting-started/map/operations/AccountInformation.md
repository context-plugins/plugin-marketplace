# AccountInformation — operations

Accessor: `client.AccountInformation` · Source: `Api/AccountInformation.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetAccount
- **HTTP**: `GET /accounts/{accountId}` (Core (financialdataexchange-prod))
- **Notes**: Retrieve full details about the account identified by `{accountId}` parameter
- **Signature**: `GetAccount(string accountId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AccountWithDetailsEntity`
- **Error**: `SdkException<GetAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchForAccounts
- **HTTP**: `GET /accounts` (Core (financialdataexchange-prod))
- **Notes**: Return information for all of the customer's consented accounts or just those accounts identified in the `accountIds` request parameter. Use `ResultTypeQuery` parameter value of `lightweight` to retrieve minimal descriptive information and the `accountId` for each account. The `accountId` can then be used in the `getAccount` operation's path `/accounts/{accountId}` to retrieve full details about each account
- **Signature**: `SearchForAccounts(IReadOnlyList<string>? accountIds, IReadOnlyList<DateTimeOffset>? startTime, IReadOnlyList<DateTimeOffset>? endTime, ResultType? resultType, string? offset, int? limit, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`accountIds` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accountIds` ← `accountIds`, `startTime` ← `startTime`, `endTime` ← `endTime`, `resultType` ← `resultType`, `offset` ← `offset`, `limit` ← `limit`
- **Returns**: `AccountsEntity`
- **Error**: `SdkException<SearchForAccountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
