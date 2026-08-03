# CopyTrading — operations

Accessor: `client.CopyTrading` · Source: `Api/CopyTrading.cs` · 2 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetFuturesLeadTraderStatusTrade
- **HTTP**: `GET /sapi/v1/copyTrading/futures/userStatus` (Default (api))
- **Notes**: Get Futures Lead Trader Status Weight(UID): 20
- **Signature**: `GetFuturesLeadTraderStatusTrade(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1CopyTradingFuturesUserStatusResponse`
- **Error**: `SdkException<GetFuturesLeadTraderStatusTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetFuturesLeadTradingSymbolWhitelistUserData
- **HTTP**: `GET /sapi/v1/copyTrading/futures/leadSymbol` (Default (api))
- **Notes**: Get Futures Lead Trading Symbol Whitelist Weight(IP): 20
- **Signature**: `GetFuturesLeadTradingSymbolWhitelistUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1CopyTradingFuturesLeadSymbolResponse`
- **Error**: `SdkException<GetFuturesLeadTradingSymbolWhitelistUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
