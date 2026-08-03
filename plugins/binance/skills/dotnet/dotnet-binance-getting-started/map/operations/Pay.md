# Pay — operations

Accessor: `client.Pay` · Source: `Api/Pay.cs` · 1 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### GetPayTradeHistoryUserData
- **HTTP**: `GET /sapi/v1/pay/transactions` (Default (api))
- **Notes**: If startTime and endTime are not sent, the recent 90 days' data will be returned. The max interval between startTime and endTime is 90 days. Support for querying orders within the last 18 months. Weight(UID): 3000
- **Signature**: `GetPayTradeHistoryUserData(long timestamp, string signature, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1PayTransactionsResponse`
- **Error**: `SdkException<GetPayTradeHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
