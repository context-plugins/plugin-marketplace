# Transactions — operations

Accessor: `client.Transactions` · Source: `Api/Transactions.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CaptureTransaction
- **HTTP**: `POST /v2/locations/{location_id}/transactions/{transaction_id}/capture` (Default (connect))
- **Notes**: Captures a transaction that was created with the Charge endpoint with a `delay_capture` value of `true`. See Delayed capture transactions for more information.
- **Signature**: `CaptureTransaction(string locationId, string transactionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CaptureTransactionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ListTransactions
- **HTTP**: `GET /v2/locations/{location_id}/transactions` (Default (connect))
- **Notes**: Lists transactions for a particular location. Transactions include payment information from sales and exchanges and refund information from returns and exchanges. Max results per page : 50
- **Signature**: `ListTransactions(string locationId, string? beginTime, string? endTime, SortOrder? sortOrder, string? cursor, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`beginTime` … `cursor`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `begin_time` ← `beginTime`, `end_time` ← `endTime`, `sort_order` ← `sortOrder`, `cursor` ← `cursor`
- **Returns**: `ListTransactionsResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RetrieveTransaction
- **HTTP**: `GET /v2/locations/{location_id}/transactions/{transaction_id}` (Default (connect))
- **Notes**: Retrieves details for a single transaction.
- **Signature**: `RetrieveTransaction(string locationId, string transactionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `RetrieveTransactionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### VoidTransaction
- **HTTP**: `POST /v2/locations/{location_id}/transactions/{transaction_id}/void` (Default (connect))
- **Notes**: Cancels a transaction that was created with the Charge endpoint with a `delay_capture` value of `true`. See Delayed capture transactions for more information.
- **Signature**: `VoidTransaction(string locationId, string transactionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `VoidTransactionResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
