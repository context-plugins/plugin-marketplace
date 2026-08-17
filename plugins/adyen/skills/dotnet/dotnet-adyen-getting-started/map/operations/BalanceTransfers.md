# BalanceTransfers — operations

Accessor: `client.BalanceTransfers` · Source: `Api/BalanceTransfers.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### PostBalanceTransfers
- **HTTP**: `POST /balanceTransfers` (Default11 (balance-control-test))
- **Notes**: Performs a balance transfer between merchant accounts. The following conditions must be met before you can successfully transfer balances: * The source and destination merchant accounts must be under the same company account and legal entity. * The source merchant account must have sufficient funds. * The source and destination merchant accounts must have at least one common processing currency.\n\n When sending multiple API requests with the same source and destination merchant accounts, send the requests sequentially and *not* in parallel. Some requests may not be processed if the requests are sent in parallel.
- **Signature**: `PostBalanceTransfers(BalanceTransferRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BalanceTransferResponse`
- **Error**: `SdkException<PostBalanceTransfersError>` — **Case A (typed)**
- **Error accessors**: `TryGetDefaultErrorResponseEntity(out DefaultErrorResponseEntity)` [401, 422] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
