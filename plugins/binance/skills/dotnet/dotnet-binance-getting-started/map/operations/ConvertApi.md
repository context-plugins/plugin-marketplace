# ConvertApi — operations

Accessor: `client.ConvertApi` · Source: `Api/ConvertApi.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AcceptQuoteTrade
- **HTTP**: `POST /sapi/v1/convert/acceptQuote` (Default (api))
- **Notes**: Accept the offered quote by quote ID. Weight(UID): 500
- **Signature**: `AcceptQuoteTrade(string quoteId, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `quoteId` ← `quoteId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ConvertAcceptQuoteResponse`
- **Error**: `SdkException<AcceptQuoteTradeError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CancelLimitOrderUserData
- **HTTP**: `POST /sapi/v1/convert/limit/cancelOrder` (Default (api))
- **Notes**: Enable users to cancel a limit order Weight(UID): 200
- **Signature**: `CancelLimitOrderUserData(long orderId, long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `orderId` ← `orderId`, `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ConvertLimitCancelOrderResponse`
- **Error**: `SdkException<CancelLimitOrderUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetConvertTradeHistoryUserData
- **HTTP**: `GET /sapi/v1/convert/tradeFlow` (Default (api))
- **Notes**: The max interval between startTime and endTime is 30 days. Weight(UID): 3000
- **Signature**: `GetConvertTradeHistoryUserData(long startTime, long endTime, long timestamp, string signature, int? limit, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `startTime` ← `startTime`, `endTime` ← `endTime`, `timestamp` ← `timestamp`, `signature` ← `signature`, `limit` ← `limit`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ConvertTradeFlowResponse`
- **Error**: `SdkException<GetConvertTradeHistoryUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ListAllConvertPairs
- **HTTP**: `GET /sapi/v1/convert/exchangeInfo` (Default (api))
- **Notes**: Query for all convertible token pairs and the tokens’ respective upper/lower limits Weight(IP): 3000
- **Signature**: `ListAllConvertPairs(string? fromAsset, string? toAsset, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `fromAsset` — nullable, no default → **must pass explicitly**
  - `toAsset` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fromAsset` ← `fromAsset`, `toAsset` ← `toAsset`
- **Returns**: `IReadOnlyList<SapiV1ConvertExchangeInfoResponse>`
- **Error**: `SdkException<ListAllConvertPairsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OrderStatusUserData
- **HTTP**: `GET /sapi/v1/convert/orderStatus` (Default (api))
- **Notes**: Query order status by order ID. Weight(UID): 100
- **Signature**: `OrderStatusUserData(long timestamp, string signature, string? orderId, string? quoteId, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `orderId` — nullable, no default → **must pass explicitly**
  - `quoteId` — nullable, no default → **must pass explicitly**
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `orderId` ← `orderId`, `quoteId` ← `quoteId`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ConvertOrderStatusResponse`
- **Error**: `SdkException<OrderStatusUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### PlaceLimitOrderUserData
- **HTTP**: `POST /sapi/v1/convert/limit/placeOrder` (Default (api))
- **Notes**: Enable users to place a limit order baseAsset or quoteAsset can be determined via exchangeInfo endpoint. Limit price is defined from baseAsset to quoteAsset. Either baseAmount or quoteAmount is used. Weight(UID): 500
- **Signature**: `PlaceLimitOrderUserData(string baseAsset, string quoteAsset, double limitPrice, Side side, long timestamp, string signature, double? baseAmount, double? quoteAmount, WalletType? walletType, ExpiredType? expiredType, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`baseAmount` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `baseAsset` ← `baseAsset`, `quoteAsset` ← `quoteAsset`, `limitPrice` ← `limitPrice`, `side` ← `side`, `timestamp` ← `timestamp`, `signature` ← `signature`, `baseAmount` ← `baseAmount`, `quoteAmount` ← `quoteAmount`, `walletType` ← `walletType`, `expiredType` ← `expiredType`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ConvertLimitPlaceOrderResponse`
- **Error**: `SdkException<PlaceLimitOrderUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryLimitOpenOrdersUserData
- **HTTP**: `GET /sapi/v1/convert/limit/queryOpenOrders` (Default (api))
- **Notes**: Enable users to query for all existing limit orders Weight(UID): 3000
- **Signature**: `QueryLimitOpenOrdersUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ConvertLimitQueryOpenOrdersResponse`
- **Error**: `SdkException<QueryLimitOpenOrdersUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### QueryOrderQuantityPrecisionPerAssetUserData
- **HTTP**: `GET /sapi/v1/convert/assetInfo` (Default (api))
- **Notes**: Query for supported asset precision information Weight(IP): 100
- **Signature**: `QueryOrderQuantityPrecisionPerAssetUserData(long timestamp, string signature, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `recvWindow` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `timestamp` ← `timestamp`, `signature` ← `signature`, `recvWindow` ← `recvWindow`
- **Returns**: `IReadOnlyList<SapiV1ConvertAssetInfoResponse>`
- **Error**: `SdkException<QueryOrderQuantityPrecisionPerAssetUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SendQuoteRequestUserData
- **HTTP**: `POST /sapi/v1/convert/getQuote` (Default (api))
- **Notes**: Request a quote for the requested token pairs Weight(UID): 200
- **Signature**: `SendQuoteRequestUserData(string fromAsset, string toAsset, long timestamp, string signature, double? fromAmount, double? toAmount, string? validTime, string? walletType, long? recvWindow, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`fromAmount` … `recvWindow`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `fromAsset` ← `fromAsset`, `toAsset` ← `toAsset`, `timestamp` ← `timestamp`, `signature` ← `signature`, `fromAmount` ← `fromAmount`, `toAmount` ← `toAmount`, `validTime` ← `validTime`, `walletType` ← `walletType`, `recvWindow` ← `recvWindow`
- **Returns**: `SapiV1ConvertGetQuoteResponse`
- **Error**: `SdkException<SendQuoteRequestUserDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400, 401] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
