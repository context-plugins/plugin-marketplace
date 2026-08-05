# InternalTransfers — operations

Accessor: `client.InternalTransfers` · Source: `Api/InternalTransfers.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelTransfer
- **HTTP**: `DELETE /transfers/{transferId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Cancel a transfer between accounts
- **Signature**: `CancelTransfer(string transferId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransferEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GetTransfer
- **HTTP**: `GET /transfers/{transferId}` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Get a transfer been accounts
- **Signature**: `GetTransfer(string transferId, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransferEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RequestAccountTransfer
- **HTTP**: `POST /transfers` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Create a transfer between accounts
- **Signature**: `RequestAccountTransfer(Guid xFapiInteractionId, string idempotencyKey, FdxApiActorType? fdxApiActorType, TransferForCreateEntity1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fdxApiActorType` — nullable, no default → **must pass explicitly**
  - `body` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `TransferEntity`
- **Error**: `SdkException<RequestAccountTransferError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 401, 404, 409, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SearchForTransfers
- **HTTP**: `GET /transfers` (MoneyMovement (financialdataexchange-prod))
- **Notes**: Search for transfers
- **Signature**: `SearchForTransfers(string? updatedSince, string? offset, int? limit, DateTimeOffset? searchStartTransferDate, DateTimeOffset? searchEndTransferDate, IReadOnlyList<string>? searchFromAccountIds, IReadOnlyList<string>? searchToAccountIds, IReadOnlyList<PaymentStatus>? searchStatuses, IReadOnlyList<string>? searchTransferIds, Guid xFapiInteractionId, FdxApiActorType? fdxApiActorType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`updatedSince` … `fdxApiActorType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `updatedSince` ← `updatedSince`, `offset` ← `offset`, `limit` ← `limit`, `searchStartTransferDate` ← `searchStartTransferDate`, `searchEndTransferDate` ← `searchEndTransferDate`, `searchFromAccountIds` ← `searchFromAccountIds`, `searchToAccountIds` ← `searchToAccountIds`, `searchStatuses` ← `searchStatuses`, `searchTransferIds` ← `searchTransferIds`
- **Returns**: `TransfersEntity`
- **Error**: `SdkException<SearchForTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError1(out Error1)` [400, 404, 500, 501, 503] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
