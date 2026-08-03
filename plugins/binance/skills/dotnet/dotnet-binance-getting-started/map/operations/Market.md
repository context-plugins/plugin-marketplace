# Market — operations

Accessor: `client.Market` · Source: `Api/Market.cs` · 15 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### HrTickerPriceChangeStatistics24
- **HTTP**: `GET /api/v3/ticker/24hr` (Default (api))
- **Notes**: 24 hour rolling window price change statistics. Careful when accessing this with no symbol. If the symbol is not sent, tickers for all symbols will be returned in an array. Weight(IP): - `2` for a single symbol; - `80` when the symbol parameter is omitted;
- **Signature**: `HrTickerPriceChangeStatistics24(string? symbol, string? symbols, TypeModel? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `symbols` — nullable, no default → **must pass explicitly**
  - `type` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `symbols` ← `symbols`, `type` ← `type`
- **Returns**: `ApiV3Ticker24HrResponse`
- **Error**: `SdkException<HrTickerPriceChangeStatistics24Error>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CheckServerTime
- **HTTP**: `GET /api/v3/time` (Default (api))
- **Notes**: Test connectivity to the Rest API and get the current server time. Weight(IP): 1
- **Signature**: `CheckServerTime(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ApiV3TimeResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompressedAggregateTradesList
- **HTTP**: `GET /api/v3/aggTrades` (Default (api))
- **Notes**: Get compressed, aggregate trades. Trades that fill at the time, from the same order, with the same price will have the quantity aggregated. - If `fromId`, `startTime`, and `endTime` are not sent, the most recent aggregate trades will be returned. - Note that if a trade has the following values, this was a duplicate aggregate trade and marked as invalid: p = '0' // price q = '0' // qty f = -1 // ﬁrst_trade_id l = -1 // last_trade_id Weight(IP): 2
- **Signature**: `CompressedAggregateTradesList(string symbol, long? fromId, long? startTime, long? endTime, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`fromId` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `fromId` ← `fromId`, `startTime` ← `startTime`, `endTime` ← `endTime`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<AggTrade>`
- **Error**: `SdkException<CompressedAggregateTradesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CurrentAveragePrice
- **HTTP**: `GET /api/v3/avgPrice` (Default (api))
- **Notes**: Current average price for a symbol. Weight(IP): 2
- **Signature**: `CurrentAveragePrice(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `ApiV3AvgPriceResponse`
- **Error**: `SdkException<CurrentAveragePriceError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ExchangeInformation
- **HTTP**: `GET /api/v3/exchangeInfo` (Default (api))
- **Notes**: Current exchange trading rules and symbol information If any symbol provided in either symbol or symbols do not exist, the endpoint will throw an error. All parameters are optional. permissions can support single or multiple values (e.g. SPOT, ["MARGIN","LEVERAGED"]) If permissions parameter not provided, the default values will be ["SPOT","MARGIN","LEVERAGED"]. To display all permissions you need to specify them explicitly. (e.g. SPOT, MARGIN,...) Examples of Symbol Permissions Interpretation from the Response: - [["A","B"]] means you may place an order if your account has either permission "A" or permission "B". - [["A"],["B"]] means you can place an order if your account has permission "A" and permission "B". - [["A"],["B","C"]] means you can place an order if your account has permission "A" and permission "B" or permission "C". (Inclusive or is applied here, not exclusive or, so your account may have both permission "B" and permission "C".) Weight(IP): 10
- **Signature**: `ExchangeInformation(string? symbol, string? symbols, string? permissions, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `symbols` — nullable, no default → **must pass explicitly**
  - `permissions` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `symbols` ← `symbols`, `permissions` ← `permissions`
- **Returns**: `ApiV3ExchangeInfoResponse`
- **Error**: `SdkException<ExchangeInformationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### KlineCandlestickData
- **HTTP**: `GET /api/v3/klines` (Default (api))
- **Notes**: Kline/candlestick bars for a symbol. Klines are uniquely identified by their open time. If `startTime` and `endTime` are not sent, the most recent klines are returned. Weight(IP): 2
- **Signature**: `KlineCandlestickData(string symbol, Interval interval, long? startTime, long? endTime, string? timeZone, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`startTime` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `interval` ← `interval`, `startTime` ← `startTime`, `endTime` ← `endTime`, `timeZone` ← `timeZone`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<IReadOnlyList<ApiV3KlinesResponse>>`
- **Error**: `SdkException<KlineCandlestickDataError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### OldTradeLookup
- **HTTP**: `GET /api/v3/historicalTrades` (Default (api))
- **Notes**: Get older market trades. Weight(IP): 10
- **Signature**: `OldTradeLookup(string symbol, int? limit, long? fromId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - `fromId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `limit` ← `limit`, `fromId` ← `fromId`
- **Returns**: `IReadOnlyList<Trade>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### OrderBook
- **HTTP**: `GET /api/v3/depth` (Default (api))
- **Notes**: | Limit | Weight(IP) | |---------------------|-------------| | 1-100 | 5 | | 101-500 | 25 | | 501-1000 | 50 | | 1001-5000 | 250 |
- **Signature**: `OrderBook(string symbol, int? limit = 100, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `limit` = 100, `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `limit` ← `limit`
- **Returns**: `ApiV3DepthResponse`
- **Error**: `SdkException<OrderBookError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RecentTradesList
- **HTTP**: `GET /api/v3/trades` (Default (api))
- **Notes**: Get recent trades. Weight(IP): 10
- **Signature**: `RecentTradesList(string symbol, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<Trade>`
- **Error**: `SdkException<RecentTradesListError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### RollingWindowPriceChangeStatistics
- **HTTP**: `GET /api/v3/ticker` (Default (api))
- **Notes**: The window used to compute statistics is typically slightly wider than requested windowSize. openTime for /api/v3/ticker always starts on a minute, while the closeTime is the current time of the request. As such, the effective window might be up to 1 minute wider than requested. E.g. If the closeTime is 1641287867099 (January 04, 2022 09:17:47:099 UTC) , and the windowSize is 1d. the openTime will be: 1641201420000 (January 3, 2022, 09:17:00 UTC) Weight(IP): 4 for each requested symbol regardless of windowSize. The weight for this request will cap at 200 once the number of symbols in the request is more than 50.
- **Signature**: `RollingWindowPriceChangeStatistics(string? symbol, string? symbols, string? windowSize, string? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`symbol` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `symbols` ← `symbols`, `windowSize` ← `windowSize`, `type` ← `type`
- **Returns**: `ApiV3TickerResponse`
- **Error**: `SdkException<RollingWindowPriceChangeStatisticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SymbolOrderBookTicker
- **HTTP**: `GET /api/v3/ticker/bookTicker` (Default (api))
- **Notes**: Best price/qty on the order book for a symbol or symbols. If the symbol is not sent, bookTickers for all symbols will be returned in an array. Weight(IP): - `2` for a single symbol; - `4` when the symbol parameter is omitted;
- **Signature**: `SymbolOrderBookTicker(string? symbol, string? symbols, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `symbols` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `symbols` ← `symbols`
- **Returns**: `ApiV3TickerBookTickerResponse`
- **Error**: `SdkException<SymbolOrderBookTickerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### SymbolPriceTicker
- **HTTP**: `GET /api/v3/ticker/price` (Default (api))
- **Notes**: Latest price for a symbol or symbols. If the symbol is not sent, prices for all symbols will be returned in an array. Weight(IP): - `2` for a single symbol; - `4` when the symbol parameter is omitted;
- **Signature**: `SymbolPriceTicker(string? symbol, string? symbols, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `symbols` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `symbols` ← `symbols`
- **Returns**: `ApiV3TickerPriceResponse`
- **Error**: `SdkException<SymbolPriceTickerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### TestConnectivity
- **HTTP**: `GET /api/v3/ping` (Default (api))
- **Notes**: Test connectivity to the Rest API. Weight(IP): 1
- **Signature**: `TestConnectivity(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TradingDayTicker
- **HTTP**: `GET /api/v3/ticker/tradingDay` (Default (api))
- **Notes**: Price change statistics for a trading day. Notes: - Supported values for timeZone: - Hours and minutes (e.g. -1:00, 05:45) - Only hours (e.g. 0, 8, 4) Weight: - `4` for each requested symbol. - The weight for this request will cap at `200` once the number of symbols in the request is more than `50`.
- **Signature**: `TradingDayTicker(string? symbol, string? symbols, string? timeZone, TypeModel? type, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`symbol` … `type`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `symbols` ← `symbols`, `timeZone` ← `timeZone`, `type` ← `type`
- **Returns**: `ApiV3TickerTradingDayResponse`
- **Error**: `SdkException<TradingDayTickerError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### Uiklines
- **HTTP**: `GET /api/v3/uiKlines` (Default (api))
- **Notes**: The request is similar to klines having the same parameters and response. uiKlines return modified kline data, optimized for presentation of candlestick charts. Weight(IP): 2
- **Signature**: `Uiklines(string symbol, Interval interval, long? startTime, long? endTime, string? timeZone, int? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`startTime` … `limit`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `interval` ← `interval`, `startTime` ← `startTime`, `endTime` ← `endTime`, `timeZone` ← `timeZone`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<IReadOnlyList<ApiV3UiKlinesResponse>>`
- **Error**: `SdkException<UiklinesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError(out Error)` [400] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
