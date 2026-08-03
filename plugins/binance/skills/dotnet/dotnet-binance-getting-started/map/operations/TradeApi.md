# TradeApi — operations

Accessor: `client.TradeApi` · Source: `Api/TradeApi.cs` · 23 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AccountInformationUserData
- **HTTP**: `GET /api/v3/account` (Default (api))
- **Notes**: Get current account information. Weight(IP): 20
- **Signature**: `AccountInformationUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `Account`
- **Error**: `SdkException<AccountInformationUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AccountTradeListUserData
- **HTTP**: `GET /api/v3/myTrades` (Default (api))
- **Notes**: Get trades for a specific account and symbol. If `fromId` is set, it will get id &gt;= that `fromId`. Otherwise most recent orders are returned. The time between startTime and endTime can't be longer than 24 hours. These are the supported combinations of all parameters: symbol symbol + orderId symbol + startTime symbol + endTime symbol + fromId symbol + startTime + endTime symbol+ orderId + fromId Weight(IP): 20
- **Signature**: `AccountTradeListUserData(string symbol, long timestamp, string signature, long? orderId, long? startTime, long? endTime, long? fromId, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`orderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `fromId` ← `fromId`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<MyTrade>`
- **Error**: `SdkException<AccountTradeListUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### AllOrdersUserData
- **HTTP**: `GET /api/v3/allOrders` (Default (api))
- **Notes**: Get all account orders; active, canceled, or filled.. If `orderId` is set, it will get orders &gt;= that `orderId`. Otherwise most recent orders are returned. For some historical orders `cummulativeQuoteQty` will be &lt; 0, meaning the data is not available at this time. If `startTime` and/or `endTime` provided, `orderId` is not required Weight(IP): 20
- **Signature**: `AllOrdersUserData(string symbol, long timestamp, string signature, long? orderId, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`orderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<OrderDetails>`
- **Error**: `SdkException<AllOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelOcoTrade
- **HTTP**: `DELETE /api/v3/orderList` (Default (api))
- **Notes**: Cancel an entire Order List Canceling an individual leg will cancel the entire OCO Weight(IP): 1
- **Signature**: `CancelOcoTrade(string symbol, long timestamp, string signature, long? orderListId, string? listClientOrderId, string? newClientOrderId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`orderListId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `orderListId` ← `orderListId`, `listClientOrderId` ← `listClientOrderId`, `newClientOrderId` ← `newClientOrderId`, `recvWindow` ← `recvWindow`
- **Returns**: `OcoOrder`
- **Error**: `SdkException<CancelOcoTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelOrderTrade
- **HTTP**: `DELETE /api/v3/order` (Default (api))
- **Notes**: Cancel an active order. Either `orderId` or `origClientOrderId` must be sent. Weight(IP): 1
- **Signature**: `CancelOrderTrade(string symbol, long timestamp, string signature, long? orderId, string? origClientOrderId, string? newClientOrderId, CancelRestrictions? cancelRestrictions, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`orderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `origClientOrderId` ← `origClientOrderId`, `newClientOrderId` ← `newClientOrderId`, `cancelRestrictions` ← `cancelRestrictions`, `recvWindow` ← `recvWindow`
- **Returns**: `Order`
- **Error**: `SdkException<CancelOrderTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelAllOpenOrdersOnASymbolTrade
- **HTTP**: `DELETE /api/v3/openOrders` (Default (api))
- **Notes**: Cancels all active orders on a symbol. This includes OCO orders. Weight(IP): 1
- **Signature**: `CancelAllOpenOrdersOnASymbolTrade(string symbol, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<ApiV3OpenOrdersResponse>`
- **Error**: `SdkException<CancelAllOpenOrdersOnASymbolTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelAnExistingOrderAndSendANewOrderTrade
- **HTTP**: `POST /api/v3/order/cancelReplace` (Default (api))
- **Notes**: Cancels an existing order and places a new order on the same symbol. Filters and Order Count are evaluated before the processing of the cancellation and order placement occurs. A new order that was not attempted (i.e. when newOrderResult: NOT_ATTEMPTED), will still increase the order count by 1. Weight(IP): 1
- **Signature**: `CancelAnExistingOrderAndSendANewOrderTrade(string symbol, Side side, Type1 type, string cancelReplaceMode, long timestamp, string signature, CancelRestrictions? cancelRestrictions, TimeInForce? timeInForce, double? quantity, double? quoteOrderQty, double? price, string? cancelNewClientOrderId, string? cancelOrigClientOrderId, long? cancelOrderId, string? newClientOrderId, long? strategyId, long? strategyType, double? stopPrice, double? trailingDelta, double? icebergQty, NewOrderRespType? newOrderRespType, SelfTradePreventionMode? selfTradePreventionMode, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 17 params (`cancelRestrictions` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `type` ← `type`, `cancelReplaceMode` ← `cancelReplaceMode`, `timestamp` ← `timestamp`, `signature` ← `signature`, `cancelRestrictions` ← `cancelRestrictions`, `timeInForce` ← `timeInForce`, `quantity` ← `quantity`, `quoteOrderQty` ← `quoteOrderQty`, `price` ← `price`, `cancelNewClientOrderId` ← `cancelNewClientOrderId`, `cancelOrigClientOrderId` ← `cancelOrigClientOrderId`, `cancelOrderId` ← `cancelOrderId`, `newClientOrderId` ← `newClientOrderId`, `strategyId` ← `strategyId`, `strategyType` ← `strategyType`, `stopPrice` ← `stopPrice`, `trailingDelta` ← `trailingDelta`, `icebergQty` ← `icebergQty`, `newOrderRespType` ← `newOrderRespType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `recvWindow` ← `recvWindow`
- **Returns**: `ApiV3OrderCancelReplaceResponse`
- **Error**: `SdkException<CancelAnExistingOrderAndSendANewOrderTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CurrentOpenOrdersUserData
- **HTTP**: `GET /api/v3/openOrders` (Default (api))
- **Notes**: Get all open orders on a symbol. Careful when accessing this with no symbol. Weight(IP): - `6` for a single symbol; - `80` when the symbol parameter is omitted;
- **Signature**: `CurrentOpenOrdersUserData(long timestamp, string signature, string? symbol, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `symbol` ← `symbol`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<OrderDetails>`
- **Error**: `SdkException<CurrentOpenOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NewOrderTrade
- **HTTP**: `POST /api/v3/order` (Default (api))
- **Notes**: Send in a new order. `LIMIT_MAKER` are `LIMIT` orders that will be rejected if they would immediately match and trade as a taker. `STOP_LOSS` and `TAKE_PROFIT` will execute a `MARKET` order when the `stopPrice` is reached. Any `LIMIT` or `LIMIT_MAKER` type order can be made an iceberg order by sending an `icebergQty`. Any order with an `icebergQty` MUST have `timeInForce` set to `GTC`. `MARKET` orders using `quantity` specifies how much a user wants to buy or sell based on the market price. `MARKET` orders using `quoteOrderQty` specifies the amount the user wants to spend (when buying) or receive (when selling) of the quote asset; the correct quantity will be determined based on the market liquidity and `quoteOrderQty`. `MARKET` orders using `quoteOrderQty` will not break `LOT_SIZE` filter rules; the order will execute a quantity that will have the notional value as close as possible to `quoteOrderQty`. same `newClientOrderId` can be accepted only when the previous one is filled, otherwise the order will be rejected. Trigger order price rules against market price for both `MARKET` and `LIMIT` versions: Price above market price: `STOP_LOSS` `BUY`, `TAKE_PROFIT` `SELL` Price below market price: `STOP_LOSS` `SELL`, `TAKE_PROFIT` `BUY` Weight(IP): 1
- **Signature**: `NewOrderTrade(string symbol, Side side, Type1 type, long timestamp, string signature, TimeInForce? timeInForce, double? quantity, double? quoteOrderQty, double? price, string? newClientOrderId, long? strategyId, long? strategyType, double? stopPrice, double? trailingDelta, double? icebergQty, NewOrderRespType? newOrderRespType, SelfTradePreventionMode? selfTradePreventionMode, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`timeInForce` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `timeInForce` ← `timeInForce`, `quantity` ← `quantity`, `quoteOrderQty` ← `quoteOrderQty`, `price` ← `price`, `newClientOrderId` ← `newClientOrderId`, `strategyId` ← `strategyId`, `strategyType` ← `strategyType`, `stopPrice` ← `stopPrice`, `trailingDelta` ← `trailingDelta`, `icebergQty` ← `icebergQty`, `newOrderRespType` ← `newOrderRespType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `recvWindow` ← `recvWindow`
- **Returns**: `ApiV3OrderResponse`
- **Error**: `SdkException<NewOrderTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NewOrderListOtoTrade
- **HTTP**: `POST /api/v3/orderList/oto` (Default (api))
- **Notes**: Places an `OTO`. - An `OTO` (One-Triggers-the-Other) is an order list comprised of 2 orders. - The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book. - The second order is called the pending order. It can be any order type except for `MARKET` orders using parameter `quoteOrderQty`. The pending order is only placed on the order book when the working order gets fully filled. - If either the working order or the pending order is cancelled individually, the other order in the order list will also be canceled or expired. - When the order list is placed, if the working order gets immediately fully filled, the placement response will show the working order as `FILLED` but the pending order will still appear as `PENDING_NEW`. You need to query the status of the pending order again to see its updated status. - OTOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter and `MAX_NUM_ORDERS` filter. Weight: 1
- **Signature**: `NewOrderListOtoTrade(string symbol, WorkingType workingType, WorkingSide workingSide, double workingPrice, double workingQuantity, double workingIcebergQty, PendingType pendingType, PendingSide pendingSide, double pendingQuantity, long timestamp, string signature, string? listClientOrderId, NewOrderRespType? newOrderRespType, SelfTradePreventionMode? selfTradePreventionMode, string? workingClientOrderId, WorkingTimeInForce? workingTimeInForce, double? workingStrategyId, long? workingStrategyType, string? pendingClientOrderId, double? pendingPrice, double? pendingStopPrice, double? pendingTrailingDelta, double? pendingIcebergQty, PendingTimeInForce? pendingTimeInForce, double? pendingStrategyId, long? pendingStrategyType, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 15 params (`listClientOrderId` … `pendingStrategyType`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `workingType` ← `workingType`, `workingSide` ← `workingSide`, `workingPrice` ← `workingPrice`, `workingQuantity` ← `workingQuantity`, `workingIcebergQty` ← `workingIcebergQty`, `pendingType` ← `pendingType`, `pendingSide` ← `pendingSide`, `pendingQuantity` ← `pendingQuantity`, `timestamp` ← `timestamp`, `signature` ← `signature`, `listClientOrderId` ← `listClientOrderId`, `newOrderRespType` ← `newOrderRespType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `workingClientOrderId` ← `workingClientOrderId`, `workingTimeInForce` ← `workingTimeInForce`, `workingStrategyId` ← `workingStrategyId`, `workingStrategyType` ← `workingStrategyType`, `pendingClientOrderId` ← `pendingClientOrderId`, `pendingPrice` ← `pendingPrice`, `pendingStopPrice` ← `pendingStopPrice`, `pendingTrailingDelta` ← `pendingTrailingDelta`, `pendingIcebergQty` ← `pendingIcebergQty`, `pendingTimeInForce` ← `pendingTimeInForce`, `pendingStrategyId` ← `pendingStrategyId`, `pendingStrategyType` ← `pendingStrategyType`
- **Returns**: `ApiV3OrderListOtoResponse`
- **Error**: `SdkException<NewOrderListOtoTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NewOrderListOtocoTrade
- **HTTP**: `POST /api/v3/orderList/otoco` (Default (api))
- **Notes**: Place an `OTOCO`. - An `OTOCO` (One-Triggers-One-Cancels-the-Other) is an order list comprised of 3 orders. - The first order is called the working order and must be `LIMIT` or `LIMIT_MAKER`. Initially, only the working order goes on the order book. - The behavior of the working order is the same as the `OTO`. - `OTOCO` has 2 pending orders (pending above and pending below), forming an `OCO` pair. The pending orders are only placed on the order book when the working order gets fully filled. - The rules of the pending above and pending below follow the same rules as the Order List `OCO`. - OTOCOs add 3 orders against the unfilled order count, `EXCHANGE_MAX_NUM_ORDERS` filter, and `MAX_NUM_ORDERS` filter. Weight: 1
- **Signature**: `NewOrderListOtocoTrade(string symbol, WorkingType workingType, WorkingSide workingSide, double workingPrice, double workingQuantity, double workingIcebergQty, PendingSide pendingSide, double pendingQuantity, PendingAboveType pendingAboveType, long timestamp, string signature, string? listClientOrderId, NewOrderRespType? newOrderRespType, SelfTradePreventionMode? selfTradePreventionMode, string? workingClientOrderId, WorkingTimeInForce? workingTimeInForce, double? workingStrategyId, long? workingStrategyType, string? pendingAboveClientOrderId, double? pendingAbovePrice, double? pendingAboveStopPrice, double? pendingAboveTrailingDelta, double? pendingAboveIcebergQty, PendingAboveTimeInForce? pendingAboveTimeInForce, double? pendingAboveStrategyId, long? pendingAboveStrategyType, PendingBelowType? pendingBelowType, string? pendingBelowClientOrderId, double? pendingBelowPrice, double? pendingBelowStopPrice, double? pendingBelowTrailingDelta, double? pendingBelowIcebergQty, PendingBelowTimeInForce? pendingBelowTimeInForce, double? pendingBelowStrategyId, long? pendingBelowStrategyType, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 25 params (`listClientOrderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `workingType` ← `workingType`, `workingSide` ← `workingSide`, `workingPrice` ← `workingPrice`, `workingQuantity` ← `workingQuantity`, `workingIcebergQty` ← `workingIcebergQty`, `pendingSide` ← `pendingSide`, `pendingQuantity` ← `pendingQuantity`, `pendingAboveType` ← `pendingAboveType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `listClientOrderId` ← `listClientOrderId`, `newOrderRespType` ← `newOrderRespType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `workingClientOrderId` ← `workingClientOrderId`, `workingTimeInForce` ← `workingTimeInForce`, `workingStrategyId` ← `workingStrategyId`, `workingStrategyType` ← `workingStrategyType`, `pendingAboveClientOrderId` ← `pendingAboveClientOrderId`, `pendingAbovePrice` ← `pendingAbovePrice`, `pendingAboveStopPrice` ← `pendingAboveStopPrice`, `pendingAboveTrailingDelta` ← `pendingAboveTrailingDelta`, `pendingAboveIcebergQty` ← `pendingAboveIcebergQty`, `pendingAboveTimeInForce` ← `pendingAboveTimeInForce`, `pendingAboveStrategyId` ← `pendingAboveStrategyId`, `pendingAboveStrategyType` ← `pendingAboveStrategyType`, `pendingBelowType` ← `pendingBelowType`, `pendingBelowClientOrderId` ← `pendingBelowClientOrderId`, `pendingBelowPrice` ← `pendingBelowPrice`, `pendingBelowStopPrice` ← `pendingBelowStopPrice`, `pendingBelowTrailingDelta` ← `pendingBelowTrailingDelta`, `pendingBelowIcebergQty` ← `pendingBelowIcebergQty`, `pendingBelowTimeInForce` ← `pendingBelowTimeInForce`, `pendingBelowStrategyId` ← `pendingBelowStrategyId`, `pendingBelowStrategyType` ← `pendingBelowStrategyType`, `recvWindow` ← `recvWindow`
- **Returns**: `ApiV3OrderListOtocoResponse`
- **Error**: `SdkException<NewOrderListOtocoTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NewOrderListOcoTrade
- **HTTP**: `POST /api/v3/orderList/oco` (Default (api))
- **Notes**: Send in an one-cancels-the-other (OCO) pair, where activation of one order immediately cancels the other. An `OCO` has 2 orders called the above order and below order. One of the orders must be a `LIMIT_MAKER` order and the other must be `STOP_LOSS` or`STOP_LOSS_LIMIT` order. Price restrictions: If the `OCO` is on the `SELL` side: `LIMIT_MAKER` price &gt; Last Traded Price &gt; stopPrice If the `OCO` is on the `BUY` side: `LIMIT_MAKER` price &lt; Last Traded Price &lt; stopPrice OCOs add 2 orders to the unfilled order count, `EXCHANGE_MAX_ORDERS` filter, and the `MAX_NUM_ORDERS` filter. Weight(IP): 1
- **Signature**: `NewOrderListOcoTrade(string symbol, Side side, double quantity, string aboveType, string belowType, long timestamp, string signature, string? listClientOrderId, string? aboveClientOrderId, double? aboveIcebergQty, double? abovePrice, double? aboveStopPrice, double? aboveTrailingDelta, AboveTimeInForce? aboveTimeInForce, double? aboveStrategyId, long? aboveStrategyType, string? belowClientOrderId, double? belowIcebergQty, double? belowPrice, double? belowStopPrice, double? belowTrailingDelta, BelowTimeInForce? belowTimeInForce, double? belowStrategyId, long? belowStrategyType, NewOrderRespType? newOrderRespType, SelfTradePreventionMode? selfTradePreventionMode, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 20 params (`listClientOrderId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `quantity` ← `quantity`, `aboveType` ← `aboveType`, `belowType` ← `belowType`, `timestamp` ← `timestamp`, `signature` ← `signature`, `listClientOrderId` ← `listClientOrderId`, `aboveClientOrderId` ← `aboveClientOrderId`, `aboveIcebergQty` ← `aboveIcebergQty`, `abovePrice` ← `abovePrice`, `aboveStopPrice` ← `aboveStopPrice`, `aboveTrailingDelta` ← `aboveTrailingDelta`, `aboveTimeInForce` ← `aboveTimeInForce`, `aboveStrategyId` ← `aboveStrategyId`, `aboveStrategyType` ← `aboveStrategyType`, `belowClientOrderId` ← `belowClientOrderId`, `belowIcebergQty` ← `belowIcebergQty`, `belowPrice` ← `belowPrice`, `belowStopPrice` ← `belowStopPrice`, `belowTrailingDelta` ← `belowTrailingDelta`, `belowTimeInForce` ← `belowTimeInForce`, `belowStrategyId` ← `belowStrategyId`, `belowStrategyType` ← `belowStrategyType`, `newOrderRespType` ← `newOrderRespType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `recvWindow` ← `recvWindow`
- **Returns**: `ApiV3OrderListOcoResponse`
- **Error**: `SdkException<NewOrderListOcoTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### NewOrderUsingSorTrade
- **HTTP**: `POST /api/v3/sor/order` (Default (api))
- **Notes**: Weight(IP): 6
- **Signature**: `NewOrderUsingSorTrade(string symbol, Side side, Type1 type, double quantity, long timestamp, string signature, TimeInForce? timeInForce, double? price, string? newClientOrderId, long? strategyId, long? strategyType, double? icebergQty, NewOrderRespType? newOrderRespType, SelfTradePreventionMode? selfTradePreventionMode, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 9 params (`timeInForce` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `type` ← `type`, `quantity` ← `quantity`, `timestamp` ← `timestamp`, `signature` ← `signature`, `timeInForce` ← `timeInForce`, `price` ← `price`, `newClientOrderId` ← `newClientOrderId`, `strategyId` ← `strategyId`, `strategyType` ← `strategyType`, `icebergQty` ← `icebergQty`, `newOrderRespType` ← `newOrderRespType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `recvWindow` ← `recvWindow`
- **Returns**: `ApiV3SorOrderResponse`
- **Error**: `SdkException<NewOrderUsingSorTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryAllocationsUserData
- **HTTP**: `GET /api/v3/myAllocations` (Default (api))
- **Notes**: Retrieves allocations resulting from SOR order placement. Weight: 20 Supported parameter combinations: Parameters Response symbol allocations from oldest to newest symbol + startTime oldest allocations since startTime symbol + endTime newest allocations until endTime symbol + startTime + endTime allocations within the time range symbol + fromAllocationId allocations by allocation ID symbol + orderId allocations related to an order starting with oldest symbol + orderId + fromAllocationId allocations related to an order by allocation ID Note: The time between startTime and endTime can't be longer than 24 hours.
- **Signature**: `QueryAllocationsUserData(string symbol, long timestamp, string signature, long? startTime, long? endTime, long? fromAllocationId, int? limit, long? orderId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`startTime` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `startTime` ← `startTime`, `endTime` ← `endTime`, `fromAllocationId` ← `fromAllocationId`, `limit` ← `limit`, `orderId` ← `orderId`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<ApiV3MyAllocationsResponse>`
- **Error**: `SdkException<QueryAllocationsUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryCommissionRatesUserData
- **HTTP**: `GET /api/v3/account/commission` (Default (api))
- **Notes**: Get current account commission rates. Weight: 20
- **Signature**: `QueryCommissionRatesUserData(string symbol, long timestamp, string signature, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`
- **Returns**: `ApiV3AccountCommissionResponse`
- **Error**: `SdkException<QueryCommissionRatesUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryCurrentOrderCountUsageTrade
- **HTTP**: `GET /api/v3/rateLimit/order` (Default (api))
- **Notes**: Displays the user's current order count usage for all intervals. Weight(IP): 40
- **Signature**: `QueryCurrentOrderCountUsageTrade(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<ApiV3RateLimitOrderResponse>`
- **Error**: `SdkException<QueryCurrentOrderCountUsageTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryOcoUserData
- **HTTP**: `GET /api/v3/orderList` (Default (api))
- **Notes**: Retrieves a specific OCO based on provided optional parameters Weight(IP): 4
- **Signature**: `QueryOcoUserData(long timestamp, string signature, long? orderListId, string? origClientOrderId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `orderListId` — nullable, no default → **must pass explicitly**
  - `origClientOrderId` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderListId` ← `orderListId`, `origClientOrderId` ← `origClientOrderId`, `recvWindow` ← `recvWindow`
- **Returns**: `ApiV3OrderListResponse`
- **Error**: `SdkException<QueryOcoUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryOpenOcoUserData
- **HTTP**: `GET /api/v3/openOrderList` (Default (api))
- **Notes**: Weight(IP): 6
- **Signature**: `QueryOpenOcoUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<ApiV3OpenOrderListResponse>`
- **Error**: `SdkException<QueryOpenOcoUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryOrderUserData
- **HTTP**: `GET /api/v3/order` (Default (api))
- **Notes**: Check an order's status. Either `orderId` or `origClientOrderId` must be sent. For some historical orders `cummulativeQuoteQty` will be &lt; 0, meaning the data is not available at this time. Weight(IP): 4
- **Signature**: `QueryOrderUserData(string symbol, long timestamp, string signature, long? orderId, string? origClientOrderId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `orderId` — nullable, no default → **must pass explicitly**
  - `origClientOrderId` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `origClientOrderId` ← `origClientOrderId`, `recvWindow` ← `recvWindow`
- **Returns**: `OrderDetails`
- **Error**: `SdkException<QueryOrderUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryPreventedMatches
- **HTTP**: `GET /api/v3/myPreventedMatches` (Default (api))
- **Notes**: Displays the list of orders that were expired because of STP. For additional information on what a Prevented match is, as well as Self Trade Prevention (STP), please refer to our STP FAQ page. These are the combinations supported: symbol + preventedMatchId symbol + orderId symbol + orderId + fromPreventedMatchId (limit will default to 500) symbol + orderId + fromPreventedMatchId + limit Weight(IP): Case Weight If symbol is invalid: 2 Querying by preventedMatchId: 2 Querying by orderId: 20
- **Signature**: `QueryPreventedMatches(string symbol, long timestamp, string signature, long? preventedMatchId, long? orderId, long? fromPreventedMatchId, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`preventedMatchId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `timestamp` ← `timestamp`, `signature` ← `signature`, `preventedMatchId` ← `preventedMatchId`, `orderId` ← `orderId`, `fromPreventedMatchId` ← `fromPreventedMatchId`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<ApiV3MyPreventedMatchesResponse>`
- **Error**: `SdkException<QueryPreventedMatchesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryAllOcoUserData
- **HTTP**: `GET /api/v3/allOrderList` (Default (api))
- **Notes**: Retrieves all OCO based on provided optional parameters Weight(IP): 20
- **Signature**: `QueryAllOcoUserData(long timestamp, string signature, long? fromId, long? startTime, long? endTime, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`fromId` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `fromId` ← `fromId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<ApiV3AllOrderListResponse>`
- **Error**: `SdkException<QueryAllOcoUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TestNewOrderTrade
- **HTTP**: `POST /api/v3/order/test` (Default (api))
- **Notes**: Test new order creation and signature/recvWindow long. Creates and validates a new order but does not send it into the matching engine. Weight(IP): - Without computeCommissionRates: `1` - With computeCommissionRates: `20`
- **Signature**: `TestNewOrderTrade(string symbol, Side side, Type1 type, long timestamp, string signature, TimeInForce? timeInForce, double? quantity, double? quoteOrderQty, double? price, string? newClientOrderId, long? strategyId, long? strategyType, double? stopPrice, double? trailingDelta, double? icebergQty, NewOrderRespType? newOrderRespType, long? recvWindow, bool? computeCommissionRates, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 13 params (`timeInForce` … `computeCommissionRates`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `type` ← `type`, `timestamp` ← `timestamp`, `signature` ← `signature`, `timeInForce` ← `timeInForce`, `quantity` ← `quantity`, `quoteOrderQty` ← `quoteOrderQty`, `price` ← `price`, `newClientOrderId` ← `newClientOrderId`, `strategyId` ← `strategyId`, `strategyType` ← `strategyType`, `stopPrice` ← `stopPrice`, `trailingDelta` ← `trailingDelta`, `icebergQty` ← `icebergQty`, `newOrderRespType` ← `newOrderRespType`, `recvWindow` ← `recvWindow`, `computeCommissionRates` ← `computeCommissionRates`
- **Returns**: `object`
- **Error**: `SdkException<TestNewOrderTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TestNewOrderUsingSorTrade
- **HTTP**: `POST /api/v3/sor/order/test` (Default (api))
- **Notes**: Test new order creation and signature/recvWindow using smart order routing (SOR). Creates and validates a new order but does not send it into the matching engine. Weight(IP): - Without computeCommissionRates: `1` - With computeCommissionRates: `20`
- **Signature**: `TestNewOrderUsingSorTrade(string symbol, Side side, Type1 type, double quantity, long timestamp, string signature, TimeInForce? timeInForce, double? price, string? newClientOrderId, long? strategyId, long? strategyType, double? icebergQty, NewOrderRespType? newOrderRespType, SelfTradePreventionMode? selfTradePreventionMode, bool? computeCommissionRates, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`timeInForce` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `side` ← `side`, `type` ← `type`, `quantity` ← `quantity`, `timestamp` ← `timestamp`, `signature` ← `signature`, `timeInForce` ← `timeInForce`, `price` ← `price`, `newClientOrderId` ← `newClientOrderId`, `strategyId` ← `strategyId`, `strategyType` ← `strategyType`, `icebergQty` ← `icebergQty`, `newOrderRespType` ← `newOrderRespType`, `selfTradePreventionMode` ← `selfTradePreventionMode`, `computeCommissionRates` ← `computeCommissionRates`, `recvWindow` ← `recvWindow`
- **Returns**: `object`
- **Error**: `SdkException<TestNewOrderUsingSorTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
