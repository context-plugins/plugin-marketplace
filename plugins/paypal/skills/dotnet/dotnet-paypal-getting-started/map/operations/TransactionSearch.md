# TransactionSearch — operations

Accessor: `client.TransactionSearch` · Source: `Api/TransactionSearch.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### SearchBalances
- **HTTP**: `GET /v1/reporting/balances` (Default (api-m))
- **Notes**: List all balances. Specify date time to list balances for that time that appear in the response. Notes: It takes a maximum of three hours for balances to appear in the list balances call. This call lists balances upto the previous three years.
- **Signature**: `SearchBalances(string? asOfTime, string? currencyCode, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `asOfTime` — nullable, no default → **must pass explicitly**
  - `currencyCode` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `as_of_time` ← `asOfTime`, `currency_code` ← `currencyCode`
- **Returns**: `BalancesResponse`
- **Error**: `SdkException<SearchBalancesError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultError(out DefaultError)` [400, 403, 500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchTransactions
- **HTTP**: `GET /v1/reporting/transactions` (Default (api-m))
- **Notes**: Lists transactions. Specify one or more query parameters to filter the transaction that appear in the response. Notes: If you specify one or more optional query parameters, the ending_balance response field is empty. It takes a maximum of three hours for executed transactions to appear in the list transactions call. This call lists transaction for the previous three years.
- **Signature**: `SearchTransactions(string startDate, string endDate, string? transactionId, string? transactionType, string? transactionStatus, string? transactionAmount, string? transactionCurrency, string? paymentInstrumentType, string? storeId, string? terminalId, string? fields = "transaction_info", string? balanceAffectingRecordsOnly = "Y", int? pageSize = 100, int? page = 1, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`transactionId` … `terminalId`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `fields` = "transaction_info", `balanceAffectingRecordsOnly` = "Y", `pageSize` = 100, `page` = 1, `requestOptions` = null
- **Query params (wire ← C#)**: `start_date` ← `startDate`, `end_date` ← `endDate`, `transaction_id` ← `transactionId`, `transaction_type` ← `transactionType`, `transaction_status` ← `transactionStatus`, `transaction_amount` ← `transactionAmount`, `transaction_currency` ← `transactionCurrency`, `payment_instrument_type` ← `paymentInstrumentType`, `store_id` ← `storeId`, `terminal_id` ← `terminalId`, `fields` ← `fields`, `balance_affecting_records_only` ← `balanceAffectingRecordsOnly`, `page_size` ← `pageSize`, `page` ← `page`
- **Returns**: `SearchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
