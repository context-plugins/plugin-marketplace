# Nft — operations

Accessor: `client.Nft` · Source: `Api/Nft.cs` · 4 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetNftAssetUserData
- **HTTP**: `GET /sapi/v1/nft/user/getAsset` (Default (api))
- **Notes**: Weight(UID): 3000
- **Signature**: `GetNftAssetUserData(long timestamp, string signature, int? limit, int? page, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `limit` ← `limit`, `page` ← `page`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1NftUserGetAssetResponse`
- **Error**: `SdkException<GetNftAssetUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetNftDepositHistoryUserData
- **HTTP**: `GET /sapi/v1/nft/history/deposit` (Default (api))
- **Notes**: The max interval between startTime and endTime is 90 days. If startTime and endTime are not sent, the recent 7 days' data will be returned. Weight(UID): 3000
- **Signature**: `GetNftDepositHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? limit, int? page, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `page` ← `page`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1NftHistoryDepositResponse`
- **Error**: `SdkException<GetNftDepositHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetNftTransactionHistoryUserData
- **HTTP**: `GET /sapi/v1/nft/history/transactions` (Default (api))
- **Notes**: The max interval between startTime and endTime is 90 days. If startTime and endTime are not sent, the recent 7 days' data will be returned. Weight(UID): 3000
- **Signature**: `GetNftTransactionHistoryUserData(int orderType, long timestamp, string signature, long? startTime, long? endTime, int? limit, int? page, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `orderType` ← `orderType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `page` ← `page`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1NftHistoryTransactionsResponse`
- **Error**: `SdkException<GetNftTransactionHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### GetNftWithdrawHistoryUserData
- **HTTP**: `GET /sapi/v1/nft/history/withdraw` (Default (api))
- **Notes**: The max interval between startTime and endTime is 90 days. If startTime and endTime are not sent, the recent 7 days' data will be returned. Weight(UID): 3000
- **Signature**: `GetNftWithdrawHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? limit, int? page, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `page` ← `page`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1NftHistoryWithdrawResponse`
- **Error**: `SdkException<GetNftWithdrawHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
