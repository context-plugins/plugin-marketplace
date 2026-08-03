# C2C — operations

Accessor: `client.C2C` · Source: `Api/C2C.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetC2CTradeHistoryUserData
- **HTTP**: `GET /sapi/v1/c2c/orderMatch/listUserOrderHistory` (Default (api))
- **Notes**: If startTimestamp and endTimestamp are not sent, the recent 30-day data will be returned. The max interval between startTimestamp and endTimestamp is 30 days. Weight(IP): 1
- **Signature**: `GetC2CTradeHistoryUserData(TradeType tradeType, long timestamp, string signature, long? startTimestamp, long? endTimestamp, int? page, int? rows, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTimestamp` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `tradeType` ← `tradeType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTimestamp` ← `startTimestamp`, `endTimestamp` ← `endTimestamp`, `page` ← `page`, `rows` ← `rows`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1C2COrderMatchListUserOrderHistoryResponse`
- **Error**: `SdkException<GetC2CTradeHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)
