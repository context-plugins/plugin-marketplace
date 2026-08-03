# Futures — operations

Accessor: `client.Futures` · Source: `Api/Futures.cs` · 3 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetFutureAccountTransactionHistoryListUserData
- **HTTP**: `GET /sapi/v1/futures/transfer` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `GetFutureAccountTransactionHistoryListUserData(string asset, long startTime, long timestamp, string signature, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`endTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `startTime` ← `startTime`, `timestamp` ← `timestamp`, `signature` ← `signature`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1FuturesTransferResponse1`
- **Error**: `SdkException<GetFutureAccountTransactionHistoryListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserData
- **HTTP**: `GET /sapi/v1/futures/histDataLink` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserData(string symbol, DataType dataType, long timestamp, string signature, long? startTime, long? endTime, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `startTime` — nullable, no default → **must pass explicitly**
  - `endTime` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `dataType` ← `dataType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1FuturesHistDataLinkResponse`
- **Error**: `SdkException<GetFutureTickLevelOrderbookHistoricalDataDownloadLinkUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NewFutureAccountTransferUserData
- **HTTP**: `POST /sapi/v1/futures/transfer` (Default (api))
- **Notes**: Execute transfer between spot account and futures account. Weight(IP): 1
- **Signature**: `NewFutureAccountTransferUserData(string asset, double amount, long type, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `amount` ← `amount`, `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1FuturesTransferResponse`
- **Error**: `SdkException<NewFutureAccountTransferUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
