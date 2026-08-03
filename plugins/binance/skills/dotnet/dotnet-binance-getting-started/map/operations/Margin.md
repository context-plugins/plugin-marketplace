# Margin — operations

Accessor: `client.Margin` · Source: `Api/Margin.cs` · 48 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AdjustCrossMarginMaxLeverageUserData
- **HTTP**: `POST /sapi/v1/margin/max-leverage` (Default (api))
- **Notes**: Adjust cross margin max leverage Weight(UID): 3000
- **Signature**: `AdjustCrossMarginMaxLeverageUserData(int maxLeverage, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `maxLeverage` ← `maxLeverage`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginMaxLeverageResponse`
- **Error**: `SdkException<AdjustCrossMarginMaxLeverageUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CrossMarginCollateralRatioMarketData
- **HTTP**: `GET /sapi/v1/margin/crossMarginCollateralRatio` (Default (api))
- **Notes**: Weight(IP): 100
- **Signature**: `CrossMarginCollateralRatioMarketData(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SapiV1MarginCrossMarginCollateralRatioResponse>`
- **Error**: `SdkException<CrossMarginCollateralRatioMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### DisableIsolatedMarginAccountTrade
- **HTTP**: `DELETE /sapi/v1/margin/isolated/account` (Default (api))
- **Notes**: Disable isolated margin account for a specific symbol. Each trading pair can only be deactivated once every 24 hours . Weight(UID): 300
- **Signature**: `DisableIsolatedMarginAccountTrade(string symbol, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginIsolatedAccountResponse`
- **Error**: `SdkException<DisableIsolatedMarginAccountTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### EnableIsolatedMarginAccountTrade
- **HTTP**: `POST /sapi/v1/margin/isolated/account` (Default (api))
- **Notes**: Enable isolated margin account for a specific symbol. Weight(UID): 300
- **Signature**: `EnableIsolatedMarginAccountTrade(string symbol, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginIsolatedAccountResponse`
- **Error**: `SdkException<EnableIsolatedMarginAccountTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAllCrossMarginPairsMarketData
- **HTTP**: `GET /sapi/v1/margin/allPairs` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `GetAllCrossMarginPairsMarketData(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `IReadOnlyList<SapiV1MarginAllPairsResponse>`
- **Error**: `SdkException<GetAllCrossMarginPairsMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAllIsolatedMarginSymbolUserData
- **HTTP**: `GET /sapi/v1/margin/isolated/allPairs` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `GetAllIsolatedMarginSymbolUserData(string symbol, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginIsolatedAllPairsResponse>`
- **Error**: `SdkException<GetAllIsolatedMarginSymbolUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAllMarginAssetsMarketData
- **HTTP**: `GET /sapi/v1/margin/allAssets` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `GetAllMarginAssetsMarketData(string asset, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`
- **Returns**: `IReadOnlyList<SapiV1MarginAllAssetsResponse>`
- **Error**: `SdkException<GetAllMarginAssetsMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBnbBurnStatusUserData
- **HTTP**: `GET /sapi/v1/bnbBurn` (Default (api))
- **Notes**: Weight(IP): 1
- **Signature**: `GetBnbBurnStatusUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `BnbBurnStatus`
- **Error**: `SdkException<GetBnbBurnStatusUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCrossMarginTransferHistoryUserData
- **HTTP**: `GET /sapi/v1/margin/transfer` (Default (api))
- **Notes**: Response in descending order Returns data for last 7 days by default Set `archived` to `true` to query data from 6 months ago Weight(IP): 1
- **Signature**: `GetCrossMarginTransferHistoryUserData(long timestamp, string signature, string? asset, Type2? type, long? startTime, long? endTime, int? current, int? size, string? isolatedSymbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `type` ← `type`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `isolatedSymbol` ← `isolatedSymbol`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginTransferResponse`
- **Error**: `SdkException<GetCrossMarginTransferHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetForceLiquidationRecordUserData
- **HTTP**: `GET /sapi/v1/margin/forceLiquidationRec` (Default (api))
- **Notes**: Response in descending order Weight(IP): 1
- **Signature**: `GetForceLiquidationRecordUserData(long timestamp, string signature, long? startTime, long? endTime, string? isolatedSymbol, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `isolatedSymbol` ← `isolatedSymbol`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginForceLiquidationRecResponse`
- **Error**: `SdkException<GetForceLiquidationRecordUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetInterestHistoryUserData
- **HTTP**: `GET /sapi/v1/margin/interestHistory` (Default (api))
- **Notes**: Response in descending order If `isolatedSymbol` is not sent, crossed margin data will be returned Set `archived` to `true` to query data from 6 months ago `type` in response has 4 enums: `PERIODIC` interest charged per hour `ON_BORROW` first interest charged on borrow `PERIODIC_CONVERTED` interest charged per hour converted into BNB `ON_BORROW_CONVERTED` first interest charged on borrow converted into BNB Weight(IP): 1
- **Signature**: `GetInterestHistoryUserData(long timestamp, string signature, string? asset, string? isolatedSymbol, long? startTime, long? endTime, int? current, int? size, string? archived, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `isolatedSymbol` ← `isolatedSymbol`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `archived` ← `archived`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginInterestHistoryResponse`
- **Error**: `SdkException<GetInterestHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSmallLiabilityExchangeCoinListUserData
- **HTTP**: `GET /sapi/v1/margin/exchange-small-liability` (Default (api))
- **Notes**: Query the coins which can be small liability exchange Weight(UID): 100
- **Signature**: `GetSmallLiabilityExchangeCoinListUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginExchangeSmallLiabilityResponse>`
- **Error**: `SdkException<GetSmallLiabilityExchangeCoinListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSmallLiabilityExchangeHistoryUserData
- **HTTP**: `GET /sapi/v1/margin/exchange-small-liability-history` (Default (api))
- **Notes**: Get Small liability Exchange History Weight(UID): 100
- **Signature**: `GetSmallLiabilityExchangeHistoryUserData(long timestamp, string signature, int? current, int? size, long? startTime, long? endTime, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`current` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `current` ← `current`, `size` ← `size`, `startTime` ← `startTime`, `endTime` ← `endTime`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginExchangeSmallLiabilityHistoryResponse`
- **Error**: `SdkException<GetSmallLiabilityExchangeHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetSummaryOfMarginAccountUserData
- **HTTP**: `GET /sapi/v1/margin/tradeCoeff` (Default (api))
- **Notes**: Get personal margin level information Weight(IP): 10
- **Signature**: `GetSummaryOfMarginAccountUserData(string email, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `email` ← `email`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginTradeCoeffResponse`
- **Error**: `SdkException<GetSummaryOfMarginAccountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetAFutureHourlyInterestRateUserData
- **HTTP**: `GET /sapi/v1/margin/next-hourly-interest-rate` (Default (api))
- **Notes**: Get user the next hourly estimate interest Weight(UID): 100
- **Signature**: `GetAFutureHourlyInterestRateUserData(long timestamp, string signature, string? assets, IsIsolated? isIsolated, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `assets` — nullable, no default → **must pass explicitly**
  - `isIsolated` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `assets` ← `assets`, `isIsolated` ← `isIsolated`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginNextHourlyInterestRateResponse>`
- **Error**: `SdkException<GetAFutureHourlyInterestRateUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCrossOrIsolatedMarginCapitalFlowUserData
- **HTTP**: `GET /sapi/v1/margin/capital-flow` (Default (api))
- **Notes**: Get cross or isolated margin capital flow Weight(IP): 100
- **Signature**: `GetCrossOrIsolatedMarginCapitalFlowUserData(long timestamp, string signature, string? asset, string? symbol, Type3? type, long? startTime, long? endTime, long? fromId, long? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`asset` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `asset` ← `asset`, `symbol` ← `symbol`, `type` ← `type`, `startTime` ← `startTime`, `endTime` ← `endTime`, `fromId` ← `fromId`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginCapitalFlowResponse>`
- **Error**: `SdkException<GetCrossOrIsolatedMarginCapitalFlowUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketData
- **HTTP**: `GET /sapi/v1/margin/delist-schedule` (Default (api))
- **Notes**: Get tokens or symbols delist schedule for cross margin and isolated margin Weight(IP): 100
- **Signature**: `GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginDelistScheduleResponse>`
- **Error**: `SdkException<GetTokensOrSymbolsDelistScheduleForCrossMarginAndIsolatedMarginMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginAccountCancelOcoTrade
- **HTTP**: `DELETE /sapi/v1/margin/orderList` (Default (api))
- **Notes**: Cancel an entire Order List for a margin account Canceling an individual leg will cancel the entire OCO Either `orderListId` or `listClientOrderId` must be provided Weight(UID): 1
- **Signature**: `MarginAccountCancelOcoTrade(string symbol, long timestamp, string signature, IsIsolated? isIsolated, long? orderListId, string? listClientOrderId, string? newClientOrderId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`isIsolated` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `orderListId` ← `orderListId`, `listClientOrderId` ← `listClientOrderId`, `newClientOrderId` ← `newClientOrderId`, `recvWindow` ← `recvWindow`
- **Returns**: `MarginOcoOrder`
- **Error**: `SdkException<MarginAccountCancelOcoTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginAccountCancelOrderTrade
- **HTTP**: `DELETE /sapi/v1/margin/order` (Default (api))
- **Notes**: Cancel an active order for margin account. Either `orderId` or `origClientOrderId` must be sent. Weight(IP): 10
- **Signature**: `MarginAccountCancelOrderTrade(string symbol, long timestamp, string signature, IsIsolated? isIsolated, long? orderId, string? origClientOrderId, string? newClientOrderId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`isIsolated` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `orderId` ← `orderId`, `origClientOrderId` ← `origClientOrderId`, `newClientOrderId` ← `newClientOrderId`, `recvWindow` ← `recvWindow`
- **Returns**: `MarginOrder`
- **Error**: `SdkException<MarginAccountCancelOrderTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginAccountCancelAllOpenOrdersOnASymbolTrade
- **HTTP**: `DELETE /sapi/v1/margin/openOrders` (Default (api))
- **Notes**: Cancels all active orders on a symbol for margin account. This includes OCO orders. Weight(IP): 1
- **Signature**: `MarginAccountCancelAllOpenOrdersOnASymbolTrade(string symbol, long timestamp, string signature, IsIsolated? isIsolated, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isIsolated` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginOpenOrdersResponse>`
- **Error**: `SdkException<MarginAccountCancelAllOpenOrdersOnASymbolTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginAccountNewOcoTrade
- **HTTP**: `POST /sapi/v1/margin/order/oco` (Default (api))
- **Notes**: Send in a new OCO for a margin account Price Restrictions: SELL: Limit Price &gt; Last Price &gt; Stop Price BUY: Limit Price &lt; Last Price &lt; Stop Price Quantity Restrictions: Both legs must have the same quantity ICEBERG quantities however do not have to be the same. Order Rate Limit OCO counts as 2 orders against the order rate limit. Weight(UID): 6
- **Signature**: `MarginAccountNewOcoTrade(string symbol, Side side, double quantity, double price, double stopPrice, long timestamp, string signature, IsIsolated? isIsolated, string? listClientOrderId, string? limitClientOrderId, double? limitIcebergQty, string? stopClientOrderId, double? stopLimitPrice, double? stopIcebergQty, StopLimitTimeInForce? stopLimitTimeInForce, NewOrderRespType? newOrderRespType, SideEffectType? sideEffectType, SelfTradePreventionMode? selfTradePreventionMode, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 12 params (`isIsolated` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `quantity` ← `quantity`, `price` ← `price`, `stopPrice` ← `stopPrice`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `listClientOrderId` ← `listClientOrderId`, `limitClientOrderId` ← `limitClientOrderId`, `limitIcebergQty` ← `limitIcebergQty`, `stopClientOrderId` ← `stopClientOrderId`, `stopLimitPrice` ← `stopLimitPrice`, `stopIcebergQty` ← `stopIcebergQty`, `stopLimitTimeInForce` ← `stopLimitTimeInForce`, `newOrderRespType` ← `newOrderRespType`, `sideEffectType` ← `sideEffectType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginOrderOcoResponse`
- **Error**: `SdkException<MarginAccountNewOcoTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginAccountNewOtoTrade
- **HTTP**: `POST /sapi/v1/margin/order/oto` (Default (api))
- **Notes**: Post a new `OTO` order for margin account: - An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders - The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book. - The second order is called the pending order. It can be any order type except for `MARKET` orders using parameter `quoteOrderQty`. The pending order is only placed on the order book when the working order gets fully filled. - If either the working order or the pending order is cancelled individually, the other order in the order list will also be canceled or expired. - When the order list is placed, if the working order gets immediately fully filled, the placement response will show the working order as `FILLED` but the pending order will still appear as `PENDING_NEW`. You need to query the status of the pending order again to see its updated status. - OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter. Weight(UID): 6
- **Signature**: `MarginAccountNewOtoTrade(string symbol, WorkingType workingType, WorkingSide workingSide, double workingPrice, double workingQuantity, double workingIcebergQty, PendingType pendingType, PendingSide pendingSide, double pendingQuantity, long timestamp, string signature, IsIsolated? isIsolated, string? listClientOrderId, NewOrderRespType? newOrderRespType, SideEffectType1? sideEffectType, SelfTradePreventionMode? selfTradePreventionMode, bool? autoRepayAtCancel, string? workingClientOrderId, WorkingTimeInForce? workingTimeInForce, string? pendingClientOrderId, double? pendingPrice, double? pendingStopPrice, double? pendingTrailingDelta, double? pendingIcebergQty, PendingTimeInForce? pendingTimeInForce, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 14 params (`isIsolated` … `pendingTimeInForce`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `workingType` ← `workingType`, `workingSide` ← `workingSide`, `workingPrice` ← `workingPrice`, `workingQuantity` ← `workingQuantity`, `workingIcebergQty` ← `workingIcebergQty`, `pendingType` ← `pendingType`, `pendingSide` ← `pendingSide`, `pendingQuantity` ← `pendingQuantity`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `listClientOrderId` ← `listClientOrderId`, `newOrderRespType` ← `newOrderRespType`, `sideEffectType` ← `sideEffectType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `autoRepayAtCancel` ← `autoRepayAtCancel`, `workingClientOrderId` ← `workingClientOrderId`, `workingTimeInForce` ← `workingTimeInForce`, `pendingClientOrderId` ← `pendingClientOrderId`, `pendingPrice` ← `pendingPrice`, `pendingStopPrice` ← `pendingStopPrice`, `pendingTrailingDelta` ← `pendingTrailingDelta`, `pendingIcebergQty` ← `pendingIcebergQty`, `pendingTimeInForce` ← `pendingTimeInForce`
- **Returns**: `SapiV1MarginOrderOtoResponse`
- **Error**: `SdkException<MarginAccountNewOtoTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginAccountNewOtocoTrade
- **HTTP**: `POST /sapi/v1/margin/order/otoco` (Default (api))
- **Notes**: Post a new `OTOCO` order for margin account: - An `OTOCO` (One-Triggers-the-Other-Cancel-the-Other) is an order list comprised of 3 orders - The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book. - The behavior of the working order is the same as the `OTO`. - `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The pending orders are only placed on the order book when the working order gets fully filled. - The rules of the pending above and pending below follow the same rules as the Order List `OCO`. - OTOCOs add 3 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter. Weight(UID): 6
- **Signature**: `MarginAccountNewOtocoTrade(string symbol, WorkingType workingType, WorkingSide workingSide, double workingPrice, double workingQuantity, double workingIcebergQty, PendingSide pendingSide, double pendingQuantity, PendingAboveType pendingAboveType, long timestamp, string signature, IsIsolated? isIsolated, SideEffectType1? sideEffectType, bool? autoRepayAtCancel, string? listClientOrderId, NewOrderRespType? newOrderRespType, SelfTradePreventionMode? selfTradePreventionMode, string? workingClientOrderId, WorkingTimeInForce? workingTimeInForce, string? pendingAboveClientOrderId, double? pendingAbovePrice, double? pendingAboveStopPrice, double? pendingAboveTrailingDelta, double? pendingAboveIcebergQty, PendingAboveTimeInForce? pendingAboveTimeInForce, PendingBelowType? pendingBelowType, string? pendingBelowClientOrderId, double? pendingBelowPrice, double? pendingBelowStopPrice, double? pendingBelowTrailingDelta, double? pendingBelowIcebergQty, PendingBelowTimeInForce? pendingBelowTimeInForce, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 21 params (`isIsolated` … `pendingBelowTimeInForce`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `workingType` ← `workingType`, `workingSide` ← `workingSide`, `workingPrice` ← `workingPrice`, `workingQuantity` ← `workingQuantity`, `workingIcebergQty` ← `workingIcebergQty`, `pendingSide` ← `pendingSide`, `pendingQuantity` ← `pendingQuantity`, `pendingAboveType` ← `pendingAboveType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `sideEffectType` ← `sideEffectType`, `autoRepayAtCancel` ← `autoRepayAtCancel`, `listClientOrderId` ← `listClientOrderId`, `newOrderRespType` ← `newOrderRespType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `workingClientOrderId` ← `workingClientOrderId`, `workingTimeInForce` ← `workingTimeInForce`, `pendingAboveClientOrderId` ← `pendingAboveClientOrderId`, `pendingAbovePrice` ← `pendingAbovePrice`, `pendingAboveStopPrice` ← `pendingAboveStopPrice`, `pendingAboveTrailingDelta` ← `pendingAboveTrailingDelta`, `pendingAboveIcebergQty` ← `pendingAboveIcebergQty`, `pendingAboveTimeInForce` ← `pendingAboveTimeInForce`, `pendingBelowType` ← `pendingBelowType`, `pendingBelowClientOrderId` ← `pendingBelowClientOrderId`, `pendingBelowPrice` ← `pendingBelowPrice`, `pendingBelowStopPrice` ← `pendingBelowStopPrice`, `pendingBelowTrailingDelta` ← `pendingBelowTrailingDelta`, `pendingBelowIcebergQty` ← `pendingBelowIcebergQty`, `pendingBelowTimeInForce` ← `pendingBelowTimeInForce`
- **Returns**: `SapiV1MarginOrderOtocoResponse`
- **Error**: `SdkException<MarginAccountNewOtocoTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginAccountNewOrderTrade
- **HTTP**: `POST /sapi/v1/margin/order` (Default (api))
- **Notes**: Post a new order for margin account. Weight(UID): 6
- **Signature**: `MarginAccountNewOrderTrade(string symbol, Side side, Type1 type, double quantity, bool autoRepayAtCancel, long timestamp, string signature, IsIsolated? isIsolated, double? quoteOrderQty, double? price, double? stopPrice, string? newClientOrderId, double? icebergQty, NewOrderRespType? newOrderRespType, SideEffectType? sideEffectType, TimeInForce? timeInForce, SelfTradePreventionMode? selfTradePreventionMode, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 11 params (`isIsolated` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `type` ← `type`, `quantity` ← `quantity`, `autoRepayAtCancel` ← `autoRepayAtCancel`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `quoteOrderQty` ← `quoteOrderQty`, `price` ← `price`, `stopPrice` ← `stopPrice`, `newClientOrderId` ← `newClientOrderId`, `icebergQty` ← `icebergQty`, `newOrderRespType` ← `newOrderRespType`, `sideEffectType` ← `sideEffectType`, `timeInForce` ← `timeInForce`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginOrderResponse`
- **Error**: `SdkException<MarginAccountNewOrderTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginInterestRateHistoryUserData
- **HTTP**: `GET /sapi/v1/margin/interestRateHistory` (Default (api))
- **Notes**: The max interval between startTime and endTime is 30 days. Weight(IP): 1
- **Signature**: `MarginInterestRateHistoryUserData(string asset, long timestamp, string signature, int? vipLevel, long? startTime, long? endTime, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`vipLevel` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `vipLevel` ← `vipLevel`, `startTime` ← `startTime`, `endTime` ← `endTime`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginInterestRateHistoryResponse>`
- **Error**: `SdkException<MarginInterestRateHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginAccountBorrowRepayMargin
- **HTTP**: `POST /sapi/v1/margin/borrow-repay` (Default (api))
- **Notes**: Margin account borrow/repay(MARGIN) Weight(UID): 3000
- **Signature**: `MarginAccountBorrowRepayMargin(string asset, string isIsolated, string symbol, double amount, string type, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `isIsolated` ← `isIsolated`, `symbol` ← `symbol`, `amount` ← `amount`, `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginBorrowRepayResponse`
- **Error**: `SdkException<MarginAccountBorrowRepayMarginError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### MarginManualLiquidationMargin
- **HTTP**: `POST /sapi/v1/margin/manual-liquidation` (Default (api))
- **Notes**: Margin manual liquidation Weight(UID): 3000
- **Signature**: `MarginManualLiquidationMargin(Type4 type, long timestamp, string signature, string? symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `symbol` ← `symbol`
- **Returns**: `IReadOnlyList<SapiV1MarginManualLiquidationResponse>`
- **Error**: `SdkException<MarginManualLiquidationMarginError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryCrossMarginAccountDetailsUserData
- **HTTP**: `GET /sapi/v1/margin/account` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `QueryCrossMarginAccountDetailsUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginAccountResponse`
- **Error**: `SdkException<QueryCrossMarginAccountDetailsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryCrossMarginFeeDataUserData
- **HTTP**: `GET /sapi/v1/margin/crossMarginData` (Default (api))
- **Notes**: Get cross margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee Weight(IP): 1 when coin is specified; 5 when the coin parameter is omitted
- **Signature**: `QueryCrossMarginFeeDataUserData(long timestamp, string signature, int? vipLevel, string? coin, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `vipLevel` — nullable, no default → **must pass explicitly**
  - `coin` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `vipLevel` ← `vipLevel`, `coin` ← `coin`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginCrossMarginDataResponse>`
- **Error**: `SdkException<QueryCrossMarginFeeDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryCurrentMarginOrderCountUsageTrade
- **HTTP**: `GET /sapi/v1/margin/rateLimit/order` (Default (api))
- **Notes**: Displays the user's current margin order count usage for all intervals. Weight(IP): 20
- **Signature**: `QueryCurrentMarginOrderCountUsageTrade(long timestamp, string signature, string? isIsolated, string? symbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isIsolated` — nullable, no default → **must pass explicitly**
  - `symbol` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `symbol` ← `symbol`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginRateLimitOrderResponse>`
- **Error**: `SdkException<QueryCurrentMarginOrderCountUsageTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryEnabledIsolatedMarginAccountLimitUserData
- **HTTP**: `GET /sapi/v1/margin/isolated/accountLimit` (Default (api))
- **Notes**: Query enabled isolated margin account limit. Weight(IP): 1
- **Signature**: `QueryEnabledIsolatedMarginAccountLimitUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginIsolatedAccountLimitResponse`
- **Error**: `SdkException<QueryEnabledIsolatedMarginAccountLimitUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryIsolatedMarginAccountInfoUserData
- **HTTP**: `GET /sapi/v1/margin/isolated/account` (Default (api))
- **Notes**: If "symbols" is not sent, all isolated assets will be returned. If "symbols" is sent, only the isolated assets of the sent symbols will be returned. Weight(IP): 10
- **Signature**: `QueryIsolatedMarginAccountInfoUserData(long timestamp, string signature, string? symbols, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbols` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `symbols` ← `symbols`, `recvWindow` ← `recvWindow`
- **Returns**: `IsolatedMarginAccountInfo`
- **Error**: `SdkException<QueryIsolatedMarginAccountInfoUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryIsolatedMarginFeeDataUserData
- **HTTP**: `GET /sapi/v1/margin/isolatedMarginData` (Default (api))
- **Notes**: Get isolated margin fee data collection with any vip level or user's current specific data as https://www.binance.com/en/margin-fee Weight(IP): 1 when a single is specified; 10 when the symbol parameter is omitted
- **Signature**: `QueryIsolatedMarginFeeDataUserData(long timestamp, string signature, int? vipLevel, string? symbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `vipLevel` — nullable, no default → **must pass explicitly**
  - `symbol` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `vipLevel` ← `vipLevel`, `symbol` ← `symbol`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginIsolatedMarginDataResponse>`
- **Error**: `SdkException<QueryIsolatedMarginFeeDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryIsolatedMarginTierDataUserData
- **HTTP**: `GET /sapi/v1/margin/isolatedMarginTier` (Default (api))
- **Notes**: Get isolated margin tier data collection with any tier as https://www.binance.com/en/margin-data Weight(IP): 1
- **Signature**: `QueryIsolatedMarginTierDataUserData(string symbol, long timestamp, string signature, string? tier, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `tier` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `tier` ← `tier`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginIsolatedMarginTierResponse>`
- **Error**: `SdkException<QueryIsolatedMarginTierDataUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketData
- **HTTP**: `GET /sapi/v1/margin/leverageBracket` (Default (api))
- **Notes**: Liability Coin Leverage Bracket in Cross Margin Pro Mode Weight(IP): 1
- **Signature**: `QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketData(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<SapiV1MarginLeverageBracketResponse>`
- **Error**: `SdkException<QueryLiabilityCoinLeverageBracketInCrossMarginProModeMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMarginAccountSAllOrdersUserData
- **HTTP**: `GET /sapi/v1/margin/allOrders` (Default (api))
- **Notes**: If `orderId` is set, it will get orders &gt;= that orderId. Otherwise most recent orders are returned. For some historical orders `cummulativeQuoteQty` will be &lt; 0, meaning the data is not available at this time. Weight(IP): 200 Request Limit: 60 times/min per IP
- **Signature**: `QueryMarginAccountSAllOrdersUserData(string symbol, long timestamp, string signature, IsIsolated? isIsolated, long? orderId, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`isIsolated` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `orderId` ← `orderId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<MarginOrderDetail>`
- **Error**: `SdkException<QueryMarginAccountSAllOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMarginAccountSOcoUserData
- **HTTP**: `GET /sapi/v1/margin/orderList` (Default (api))
- **Notes**: Retrieves a specific OCO based on provided optional parameters Either `orderListId` or `origClientOrderId` must be provided Weight(IP): 10
- **Signature**: `QueryMarginAccountSOcoUserData(long timestamp, string signature, IsIsolated? isIsolated, string? symbol, long? orderListId, string? origClientOrderId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`isIsolated` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `symbol` ← `symbol`, `orderListId` ← `orderListId`, `origClientOrderId` ← `origClientOrderId`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginOrderListResponse`
- **Error**: `SdkException<QueryMarginAccountSOcoUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMarginAccountSOpenOcoUserData
- **HTTP**: `GET /sapi/v1/margin/openOrderList` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `QueryMarginAccountSOpenOcoUserData(long timestamp, string signature, IsIsolated? isIsolated, string? symbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isIsolated` — nullable, no default → **must pass explicitly**
  - `symbol` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `symbol` ← `symbol`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginOpenOrderListResponse>`
- **Error**: `SdkException<QueryMarginAccountSOpenOcoUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMarginAccountSOpenOrdersUserData
- **HTTP**: `GET /sapi/v1/margin/openOrders` (Default (api))
- **Notes**: If the `symbol` is not sent, orders for all symbols will be returned in an array. When all symbols are returned, the number of requests counted against the rate limiter is equal to the number of symbols currently trading on the exchange If isIsolated ="TRUE", symbol must be sent. Weight(IP): 10
- **Signature**: `QueryMarginAccountSOpenOrdersUserData(long timestamp, string signature, string? symbol, IsIsolated? isIsolated, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isIsolated` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `symbol` ← `symbol`, `isIsolated` ← `isIsolated`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<MarginOrderDetail>`
- **Error**: `SdkException<QueryMarginAccountSOpenOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMarginAccountSOrderUserData
- **HTTP**: `GET /sapi/v1/margin/order` (Default (api))
- **Notes**: Either `orderId` or `origClientOrderId` must be sent. For some historical orders `cummulativeQuoteQty` will be &lt; 0, meaning the data is not available at this time. Weight(IP): 10
- **Signature**: `QueryMarginAccountSOrderUserData(string symbol, long timestamp, string signature, IsIsolated? isIsolated, long? orderId, string? origClientOrderId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`isIsolated` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `orderId` ← `orderId`, `origClientOrderId` ← `origClientOrderId`, `recvWindow` ← `recvWindow`
- **Returns**: `MarginOrderDetail`
- **Error**: `SdkException<QueryMarginAccountSOrderUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMarginAccountSTradeListUserData
- **HTTP**: `GET /sapi/v1/margin/myTrades` (Default (api))
- **Notes**: If `fromId` is set, it will get orders &gt;= that `fromId`. Otherwise most recent trades are returned. Weight(IP): 10
- **Signature**: `QueryMarginAccountSTradeListUserData(string symbol, long timestamp, string signature, IsIsolated? isIsolated, long? startTime, long? endTime, long? fromId, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`isIsolated` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `startTime` ← `startTime`, `endTime` ← `endTime`, `fromId` ← `fromId`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<MarginTrade>`
- **Error**: `SdkException<QueryMarginAccountSTradeListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMarginAccountSAllOcoUserData
- **HTTP**: `GET /sapi/v1/margin/allOrderList` (Default (api))
- **Notes**: Retrieves all OCO for a specific margin account based on provided optional parameters Weight(IP): 200
- **Signature**: `QueryMarginAccountSAllOcoUserData(long timestamp, string signature, IsIsolated? isIsolated, string? symbol, string? fromId, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`isIsolated` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `isIsolated` ← `isIsolated`, `symbol` ← `symbol`, `fromId` ← `fromId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1MarginAllOrderListResponse>`
- **Error**: `SdkException<QueryMarginAccountSAllOcoUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMarginAvailableInventoryUserData
- **HTTP**: `GET /sapi/v1/margin/available-inventory` (Default (api))
- **Notes**: Margin available Inventory query Weight(UID): 50
- **Signature**: `QueryMarginAvailableInventoryUserData(Type4 type, long timestamp, string signature, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`
- **Returns**: `SapiV1MarginAvailableInventoryResponse`
- **Error**: `SdkException<QueryMarginAvailableInventoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMarginPriceIndexMarketData
- **HTTP**: `GET /sapi/v1/margin/priceIndex` (Default (api))
- **Notes**: Weight(IP): 10
- **Signature**: `QueryMarginPriceIndexMarketData(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `SapiV1MarginPriceIndexResponse`
- **Error**: `SdkException<QueryMarginPriceIndexMarketDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMaxBorrowUserData
- **HTTP**: `GET /sapi/v1/margin/maxBorrowable` (Default (api))
- **Notes**: If `isolatedSymbol` is not sent, crossed margin data will be sent. `borrowLimit` is also available from https://www.binance.com/en/margin-fee Weight(IP): 50
- **Signature**: `QueryMaxBorrowUserData(string asset, long timestamp, string signature, string? isolatedSymbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isolatedSymbol` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isolatedSymbol` ← `isolatedSymbol`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginMaxBorrowableResponse`
- **Error**: `SdkException<QueryMaxBorrowUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryMaxTransferOutAmountUserData
- **HTTP**: `GET /sapi/v1/margin/maxTransferable` (Default (api))
- **Notes**: If `isolatedSymbol` is not sent, crossed margin data will be sent. Weight(IP): 50
- **Signature**: `QueryMaxTransferOutAmountUserData(string asset, long timestamp, string signature, string? isolatedSymbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isolatedSymbol` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isolatedSymbol` ← `isolatedSymbol`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginMaxTransferableResponse`
- **Error**: `SdkException<QueryMaxTransferOutAmountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryBorrowRepayRecordsInMarginAccountUserData
- **HTTP**: `GET /sapi/v1/margin/borrow-repay` (Default (api))
- **Notes**: Query borrow/repay records in Margin account txId or startTime must be sent. txId takes precedence. Response in descending order If an asset is sent, data within 30 days before endTime; If an asset is not sent, data within 7 days before endTime If neither startTime nor endTime is sent, the recent 7-day data will be returned. startTime set as endTime - 7 days by default, endTime set as current time by default Weight(IP): 10
- **Signature**: `QueryBorrowRepayRecordsInMarginAccountUserData(string asset, string type, long timestamp, string signature, string? isolatedSymbol, long? txId, long? startTime, long? endTime, int? current, int? size, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 7 params (`isolatedSymbol` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `asset` ← `asset`, `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `isolatedSymbol` ← `isolatedSymbol`, `txId` ← `txId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `current` ← `current`, `size` ← `size`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1MarginBorrowRepayResponse1`
- **Error**: `SdkException<QueryBorrowRepayRecordsInMarginAccountUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ToggleBnbBurnOnSpotTradeAndMarginInterestUserData
- **HTTP**: `POST /sapi/v1/bnbBurn` (Default (api))
- **Notes**: "spotBNBBurn" and "interestBNBBurn" should be sent at least one. Weight(IP): 1
- **Signature**: `ToggleBnbBurnOnSpotTradeAndMarginInterestUserData(long timestamp, string signature, SpotBnbburn? spotBnbburn, InterestBnbburn? interestBnbburn, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `spotBnbburn` — nullable, no default → **must pass explicitly**
  - `interestBnbburn` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `spotBNBBurn` ← `spotBnbburn`, `interestBNBBurn` ← `interestBnbburn`, `recvWindow` ← `recvWindow`
- **Returns**: `BnbBurnStatus`
- **Error**: `SdkException<ToggleBnbBurnOnSpotTradeAndMarginInterestUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
