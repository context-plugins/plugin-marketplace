# FuturesAlgo — operations

Accessor: `client.FuturesAlgo` · Source: `Api/FuturesAlgo.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelAlgoOrderTrade
- **HTTP**: `DELETE /sapi/v1/algo/futures/order` (Default (api))
- **Notes**: Cancel an active order. - You need to enable Futures Trading Permission for the api key which requests this endpoint. - Base URL: https://api.binance.com Weight(IP): 1
- **Signature**: `CancelAlgoOrderTrade(long algoId, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algoId` ← `algoId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoFuturesOrderResponse`
- **Error**: `SdkException<CancelAlgoOrderTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryCurrentAlgoOpenOrdersUserData
- **HTTP**: `GET /sapi/v1/algo/futures/openOrders` (Default (api))
- **Notes**: You need to enable Futures Trading Permission for the api key which requests this endpoint. Base URL: https://api.binance.com Weight(IP): 1
- **Signature**: `QueryCurrentAlgoOpenOrdersUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoFuturesOpenOrdersResponse`
- **Error**: `SdkException<QueryCurrentAlgoOpenOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryHistoricalAlgoOrdersUserData
- **HTTP**: `GET /sapi/v1/algo/futures/historicalOrders` (Default (api))
- **Notes**: You need to enable Futures Trading Permission for the api key which requests this endpoint. Base URL: https://api.binance.com Weight(IP): 1
- **Signature**: `QueryHistoricalAlgoOrdersUserData(long timestamp, string signature, string? symbol, Side? side, long? startTime, long? endTime, int? page, string? pageSize, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`symbol` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `symbol` ← `symbol`, `side` ← `side`, `startTime` ← `startTime`, `endTime` ← `endTime`, `page` ← `page`, `pageSize` ← `pageSize`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoFuturesHistoricalOrdersResponse`
- **Error**: `SdkException<QueryHistoricalAlgoOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### QuerySubOrdersUserData
- **HTTP**: `GET /sapi/v1/algo/futures/subOrders` (Default (api))
- **Notes**: You need to enable Futures Trading Permission for the api key which requests this endpoint. Base URL: https://api.binance.com Weight(IP): 1
- **Signature**: `QuerySubOrdersUserData(long algoId, long timestamp, string signature, int? page, string? pageSize, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - `pageSize` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `algoId` ← `algoId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `page` ← `page`, `pageSize` ← `pageSize`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoFuturesSubOrdersResponse`
- **Error**: `SdkException<QuerySubOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TimeWeightedAveragePriceTwapNewOrderTrade
- **HTTP**: `POST /sapi/v1/algo/futures/newOrderTwap` (Default (api))
- **Notes**: Send in a Twap new order. Only support on USDⓈ-M Contracts. You need to enable Futures Trading Permission for the api key which requests this endpoint. Base URL: https://api.binance.com Total Algo open orders max allowed: 10 orders. Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi. Receiving "success": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive "success": true, but the order status will be expired after we check it. quantity * 60 / duration should be larger than minQty duration cannot be less than 5 mins or more than 24 hours. For delivery contracts, TWAP end time should be one hour earlier than the delivery time of the symbol. Weight(UID): 3000
- **Signature**: `TimeWeightedAveragePriceTwapNewOrderTrade(string symbol, Side side, double quantity, long duration, long timestamp, string signature, PositionSide? positionSide, string? clientAlgoId, bool? reduceOnly, double? limitPrice, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`positionSide` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `quantity` ← `quantity`, `duration` ← `duration`, `timestamp` ← `timestamp`, `signature` ← `signature`, `positionSide` ← `positionSide`, `clientAlgoId` ← `clientAlgoId`, `reduceOnly` ← `reduceOnly`, `limitPrice` ← `limitPrice`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoFuturesNewOrderTwapResponse`
- **Error**: `SdkException<TimeWeightedAveragePriceTwapNewOrderTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### VolumeParticipationVpNewOrderTrade
- **HTTP**: `POST /sapi/v1/algo/futures/newOrderVp` (Default (api))
- **Notes**: Send in a VP new order. Only support on USDⓈ-M Contracts. You need to enable `Futures Trading Permission` for the api key which requests this endpoint. Base URL: https://api.binance.com Total Algo open orders max allowed: 10 orders. Leverage of symbols and position mode will be the same as your futures account settings. You can set up through the trading page or fapi. Receiving "success": true does not mean that your order will be executed. Please use the query order endpoints(GET sapi/v1/algo/futures/openOrders or GET sapi/v1/algo/futures/historicalOrders) to check the order status. For example: Your futures balance is insufficient, or open position with reduce only or position side is inconsistent with your own setting. In these cases you will receive "success": true, but the order status will be expired after we check it. Weight(UID): 3000
- **Signature**: `VolumeParticipationVpNewOrderTrade(string symbol, Side side, double quantity, Urgency urgency, long timestamp, string signature, PositionSide? positionSide, string? clientAlgoId, bool? reduceOnly, double? limitPrice, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`positionSide` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `quantity` ← `quantity`, `urgency` ← `urgency`, `timestamp` ← `timestamp`, `signature` ← `signature`, `positionSide` ← `positionSide`, `clientAlgoId` ← `clientAlgoId`, `reduceOnly` ← `reduceOnly`, `limitPrice` ← `limitPrice`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1AlgoFuturesNewOrderVpResponse`
- **Error**: `SdkException<VolumeParticipationVpNewOrderTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
