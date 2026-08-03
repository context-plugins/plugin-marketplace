# SpotAlgo — operations

Accessor: `client.SpotAlgo` · Source: `Api/SpotAlgo.cs` · 5 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelAlgoOrder
- **HTTP**: `DELETE /sapi/v1/algo/spot/order` (Default (api))
- **Notes**: Cancel an open TWAP order Weight(IP): 1
- **Signature**: `CancelAlgoOrder(long algoId, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algoId` ← `algoId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoSpotOrderResponse`
- **Error**: `SdkException<CancelAlgoOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryCurrentAlgoOpenOrders
- **HTTP**: `GET /sapi/v1/algo/spot/openOrders` (Default (api))
- **Notes**: Get all open SPOT TWAP orders Weight(IP): 1
- **Signature**: `QueryCurrentAlgoOpenOrders(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoSpotOpenOrdersResponse`
- **Error**: `SdkException<QueryCurrentAlgoOpenOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryHistoricalAlgoOrders
- **HTTP**: `GET /sapi/v1/algo/spot/historicalOrders` (Default (api))
- **Notes**: Get all historical SPOT TWAP orders Weight(IP): 1
- **Signature**: `QueryHistoricalAlgoOrders(string symbol, Side side, long timestamp, string signature, long? startTime, long? endTime, int? page, string? pageSize, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `page` ← `page`, `pageSize` ← `pageSize`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoSpotHistoricalOrdersResponse`
- **Error**: `SdkException<QueryHistoricalAlgoOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### QuerySubOrders
- **HTTP**: `GET /sapi/v1/algo/spot/subOrders` (Default (api))
- **Notes**: Get respective sub orders for a specified algoId Weight(IP): 1
- **Signature**: `QuerySubOrders(long algoId, long timestamp, string signature, int? page, string? pageSize, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algoId` ← `algoId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `page` ← `page`, `pageSize` ← `pageSize`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoSpotSubOrdersResponse`
- **Error**: `SdkException<QuerySubOrdersError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TimeWeightedAveragePriceTwapNewOrder
- **HTTP**: `POST /sapi/v1/algo/spot/newOrderTwap` (Default (api))
- **Notes**: Place a new spot TWAP order with Algo service. Weight(UID): 3000
- **Signature**: `TimeWeightedAveragePriceTwapNewOrder(string symbol, Side side, double quantity, int duration, long timestamp, string signature, string? clientAlgoId, double? limitPrice, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `clientAlgoId` — nullable, no default → **must pass explicitly**
  - `limitPrice` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `quantity` ← `quantity`, `duration` ← `duration`, `timestamp` ← `timestamp`, `signature` ← `signature`, `clientAlgoId` ← `clientAlgoId`, `limitPrice` ← `limitPrice`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoSpotNewOrderTwapResponse`
- **Error**: `SdkException<TimeWeightedAveragePriceTwapNewOrderError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
