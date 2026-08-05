# Transactions — operations

Accessor: `client.Transactions` · Source: `Api/Transactions.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetTransactions
- **HTTP**: `GET /transactions/{version}/{providerId}/{accountId}` (Default (sandbox-products))
- **Notes**: The transactions API allows you to retrieve transaction history of consumer-permissioned accounts. &gt; 🛑 &gt; &gt; The *id_token* should be used as the bearer token with this call. For more information on how to paginate transaction results, please see: Pagination Use the `mode` query param to receive FDX-aligned, standardized data values (Beta). For example: `https://sandbox-products.ddp.akoya.com/transactions/v2/mikomo?mode=standard` `mode` is available in both sandbox and production. `mode` is supported by a subset of providers. Log into the Data Recipient Hub and click here to view a list of all providers supporting the `mode` parameter.
- **Signature**: `GetTransactions(DateTimeOffset? startTime, DateTimeOffset? endTime, Mode? mode, XAkoyaInteractionType? xAkoyaInteractionType, string version = "v2", string providerId = "mikomo", string accountId = ":accountId", string? offset = "0", int? limit = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`startTime` … `xAkoyaInteractionType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `version` = "v2", `providerId` = "mikomo", `accountId` = ":accountId", `offset` = "0", `limit` = 50, `requestOptions` = null
- **Query params (wire ← C#)**: `startTime` ← `startTime`, `endTime` ← `endTime`, `offset` ← `offset`, `limit` ← `limit`, `mode` ← `mode`
- **Returns**: `TransactionsEntity`
- **Error**: `SdkException<GetTransactionsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorEntity(out ErrorEntity)` [400, 401, 404, 406, 429, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
