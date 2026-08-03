# CoinGeckoDemoApiClient — operations

Accessor: called directly on the client (`client.Op(…)`) · Source: `CoinGeckoDemoApiClient.cs` · 61 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AssetPlatformsList
- **HTTP**: `GET /asset_platforms` (Default (api))
- **Notes**: To query all the supported asset platforms (blockchain networks) on CoinGecko
- **Signature**: `AssetPlatformsList(Filter? filter, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `filter` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `filter` ← `filter`
- **Returns**: `IReadOnlyList<AssetPlatform>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsCategories
- **HTTP**: `GET /coins/categories` (Default (api))
- **Notes**: To query all the coins categories with market data (market cap, volume, etc.) on CoinGecko
- **Signature**: `CoinsCategories(Order2? order, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `order` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `order` ← `order`
- **Returns**: `IReadOnlyList<Category1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsCategoriesList
- **HTTP**: `GET /coins/categories/list` (Default (api))
- **Notes**: To query all the supported coins categories on CoinGecko
- **Signature**: `CoinsCategoriesList(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CategoriesList>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsContractAddress
- **HTTP**: `GET /coins/{id}/contract/{contract_address}` (Default (api))
- **Notes**: To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on an asset platform and a particular token contract address
- **Signature**: `CoinsContractAddress(string id = "ethereum", string contractAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `id` = "ethereum", `contractAddress` = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", `requestOptions` = null
- **Returns**: `CoinsContractAddress`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsId
- **HTTP**: `GET /coins/{id}` (Default (api))
- **Notes**: To query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin based on a particular coin ID
- **Signature**: `CoinsId(bool? localization, bool? tickers, bool? marketData, bool? communityData, bool? developerData, bool? sparkline, bool? includeCategoriesDetails, DexPairFormat? dexPairFormat, string id = "bitcoin", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 8 params (`localization` … `dexPairFormat`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `id` = "bitcoin", `requestOptions` = null
- **Query params (wire ← C#)**: `localization` ← `localization`, `tickers` ← `tickers`, `market_data` ← `marketData`, `community_data` ← `communityData`, `developer_data` ← `developerData`, `sparkline` ← `sparkline`, `include_categories_details` ← `includeCategoriesDetails`, `dex_pair_format` ← `dexPairFormat`
- **Returns**: `CoinsId`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsIdHistory
- **HTTP**: `GET /coins/{id}/history` (Default (api))
- **Notes**: To query the historical data (price, market cap, 24hrs volume, etc.) at a given date for a coin based on a particular coin ID
- **Signature**: `CoinsIdHistory(bool? localization, string id = "bitcoin", string date = "30-12-2025", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `localization` — nullable, no default → **must pass explicitly**
  - defaults: `id` = "bitcoin", `date` = "30-12-2025", `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`, `localization` ← `localization`
- **Returns**: `CoinsIdHistory`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsIdMarketChart
- **HTTP**: `GET /coins/{id}/market_chart` (Default (api))
- **Notes**: To get the historical chart data of a coin including time in UNIX, price, market cap and 24hrs volume based on particular coin ID
- **Signature**: `CoinsIdMarketChart(Interval? interval, Precision? precision, string id = "bitcoin", string vsCurrency = "usd", string days = "1", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `interval` — nullable, no default → **must pass explicitly**
  - `precision` — nullable, no default → **must pass explicitly**
  - defaults: `id` = "bitcoin", `vsCurrency` = "usd", `days` = "1", `requestOptions` = null
- **Query params (wire ← C#)**: `vs_currency` ← `vsCurrency`, `days` ← `days`, `interval` ← `interval`, `precision` ← `precision`
- **Returns**: `CoinsMarketChart`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsIdMarketChartRange
- **HTTP**: `GET /coins/{id}/market_chart/range` (Default (api))
- **Notes**: To get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hrs volume based on particular coin ID
- **Signature**: `CoinsIdMarketChartRange(Precision? precision, string id = "bitcoin", string vsCurrency = "usd", int from = 1767024000, int to = 1777564800, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `precision` — nullable, no default → **must pass explicitly**
  - defaults: `id` = "bitcoin", `vsCurrency` = "usd", `from` = 1767024000, `to` = 1777564800, `requestOptions` = null
- **Query params (wire ← C#)**: `vs_currency` ← `vsCurrency`, `from` ← `from`, `to` ← `to`, `precision` ← `precision`
- **Returns**: `CoinsMarketChart`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsIdOhlc
- **HTTP**: `GET /coins/{id}/ohlc` (Default (api))
- **Notes**: To get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID
- **Signature**: `CoinsIdOhlc(Days days, Precision? precision, string id = "bitcoin", string vsCurrency = "usd", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `precision` — nullable, no default → **must pass explicitly**
  - defaults: `id` = "bitcoin", `vsCurrency` = "usd", `requestOptions` = null
- **Query params (wire ← C#)**: `vs_currency` ← `vsCurrency`, `days` ← `days`, `precision` ← `precision`
- **Returns**: `IReadOnlyList<IReadOnlyList<double>>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsIdTickers
- **HTTP**: `GET /coins/{id}/tickers` (Default (api))
- **Notes**: To query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID
- **Signature**: `CoinsIdTickers(string? exchangeIds, bool? includeExchangeLogo, int? page, Order1? order, bool? depth, DexPairFormat? dexPairFormat, string id = "bitcoin", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`exchangeIds` … `dexPairFormat`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `id` = "bitcoin", `requestOptions` = null
- **Query params (wire ← C#)**: `exchange_ids` ← `exchangeIds`, `include_exchange_logo` ← `includeExchangeLogo`, `page` ← `page`, `order` ← `order`, `depth` ← `depth`, `dex_pair_format` ← `dexPairFormat`
- **Returns**: `CoinsIdTickers`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### CoinsList
- **HTTP**: `GET /coins/list` (Default (api))
- **Notes**: To query all the supported coins on CoinGecko with coin ID, name and symbol
- **Signature**: `CoinsList(bool? includePlatform, Status? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includePlatform` — nullable, no default → **must pass explicitly**
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include_platform` ← `includePlatform`, `status` ← `status`
- **Returns**: `IReadOnlyList<CoinsList>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CoinsMarkets
- **HTTP**: `GET /coins/markets` (Default (api))
- **Notes**: To query all the supported coins with price, market cap, volume and market related data
- **Signature**: `CoinsMarkets(IncludeTokens? includeTokens, string? category, Order? order, int? perPage, int? page, bool? sparkline, string? priceChangePercentage, Locale? locale, Precision? precision, bool? includeRehypothecated, string vsCurrency = "usd", string? ids = "bitcoin", string? names = "Bitcoin", string? symbols = "btc", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 10 params (`includeTokens` … `includeRehypothecated`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `vsCurrency` = "usd", `ids` = "bitcoin", `names` = "Bitcoin", `symbols` = "btc", `requestOptions` = null
- **Query params (wire ← C#)**: `vs_currency` ← `vsCurrency`, `ids` ← `ids`, `names` ← `names`, `symbols` ← `symbols`, `include_tokens` ← `includeTokens`, `category` ← `category`, `order` ← `order`, `per_page` ← `perPage`, `page` ← `page`, `sparkline` ← `sparkline`, `price_change_percentage` ← `priceChangePercentage`, `locale` ← `locale`, `precision` ← `precision`, `include_rehypothecated` ← `includeRehypothecated`
- **Returns**: `IReadOnlyList<CoinsMarket>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### CompaniesPublicTreasury
- **HTTP**: `GET /{entity}/public_treasury/{coin_id}` (Default (api))
- **Notes**: To query public companies' and governments' cryptocurrency holdings by coin ID
- **Signature**: `CompaniesPublicTreasury(Entity entity, int? perPage, int? page, Order5? order, string coinId = "bitcoin", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `perPage` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `order` — nullable, no default → **must pass explicitly**
  - defaults: `coinId` = "bitcoin", `requestOptions` = null
- **Query params (wire ← C#)**: `per_page` ← `perPage`, `page` ← `page`, `order` ← `order`
- **Returns**: `PublicTreasury`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ContractAddressMarketChart
- **HTTP**: `GET /coins/{id}/contract/{contract_address}/market_chart` (Default (api))
- **Notes**: To get the historical chart data including time in UNIX, price, market cap and 24hrs volume based on asset platform and particular token contract address
- **Signature**: `ContractAddressMarketChart(Interval? interval, Precision? precision, string id = "ethereum", string contractAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", string vsCurrency = "usd", string days = "1", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `interval` — nullable, no default → **must pass explicitly**
  - `precision` — nullable, no default → **must pass explicitly**
  - defaults: `id` = "ethereum", `contractAddress` = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", `vsCurrency` = "usd", `days` = "1", `requestOptions` = null
- **Query params (wire ← C#)**: `vs_currency` ← `vsCurrency`, `days` ← `days`, `interval` ← `interval`, `precision` ← `precision`
- **Returns**: `CoinsMarketChart`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ContractAddressMarketChartRange
- **HTTP**: `GET /coins/{id}/contract/{contract_address}/market_chart/range` (Default (api))
- **Notes**: To get the historical chart data within certain time range in UNIX along with price, market cap and 24hrs volume based on asset platform and particular token contract address
- **Signature**: `ContractAddressMarketChartRange(Precision? precision, string id = "ethereum", string contractAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", string vsCurrency = "usd", int from = 1767024000, int to = 1777564800, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `precision` — nullable, no default → **must pass explicitly**
  - defaults: `id` = "ethereum", `contractAddress` = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", `vsCurrency` = "usd", `from` = 1767024000, `to` = 1777564800, `requestOptions` = null
- **Query params (wire ← C#)**: `vs_currency` ← `vsCurrency`, `from` ← `from`, `to` ← `to`, `precision` ← `precision`
- **Returns**: `CoinsMarketChart`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CryptoGlobal
- **HTTP**: `GET /global` (Default (api))
- **Notes**: To query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc
- **Signature**: `CryptoGlobal(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `Global`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DerivativesExchanges
- **HTTP**: `GET /derivatives/exchanges` (Default (api))
- **Notes**: To query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko
- **Signature**: `DerivativesExchanges(Order4? order, int? perPage, int? page, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `order` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `order` ← `order`, `per_page` ← `perPage`, `page` ← `page`
- **Returns**: `IReadOnlyList<DerivativesExchange>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### DerivativesExchangesId
- **HTTP**: `GET /derivatives/exchanges/{id}` (Default (api))
- **Notes**: To query the derivatives exchange's related data (name, open interest, trade volume, ...) based on the exchange's ID
- **Signature**: `DerivativesExchangesId(IncludeTickers? includeTickers, string id = "binance_futures", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeTickers` — nullable, no default → **must pass explicitly**
  - defaults: `id` = "binance_futures", `requestOptions` = null
- **Query params (wire ← C#)**: `include_tickers` ← `includeTickers`
- **Returns**: `DerivativesExchangesId`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DerivativesExchangesList
- **HTTP**: `GET /derivatives/exchanges/list` (Default (api))
- **Notes**: To query all the supported derivatives exchanges with ID and name on CoinGecko
- **Signature**: `DerivativesExchangesList(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DerivativesExchangesList>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DerivativesTickers
- **HTTP**: `GET /derivatives` (Default (api))
- **Notes**: To query all the tickers from derivatives exchanges on CoinGecko
- **Signature**: `DerivativesTickers(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<DerivativesTicker>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### DexesList
- **HTTP**: `GET /onchain/networks/{network}/dexes` (Default (api))
- **Notes**: To query all the supported decentralized exchanges (DEXs) based on the provided network on GeckoTerminal
- **Signature**: `DexesList(int? page, string network = "eth", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `network` = "eth", `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `DexesList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### EntitiesList
- **HTTP**: `GET /entities/list` (Default (api))
- **Notes**: To query all the supported entities on CoinGecko with entity ID, name, symbol, and country
- **Signature**: `EntitiesList(EntityType? entityType, int? perPage, int? page, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `entityType` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `entity_type` ← `entityType`, `per_page` ← `perPage`, `page` ← `page`
- **Returns**: `IReadOnlyList<EntitiesList>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ExchangeRates
- **HTTP**: `GET /exchange_rates` (Default (api))
- **Notes**: To query BTC exchange rates with other currencies
- **Signature**: `ExchangeRates(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ExchangeRates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Exchanges
- **HTTP**: `GET /exchanges` (Default (api))
- **Notes**: To query all the supported exchanges with exchanges' data (ID, name, country, etc.) that have active trading volumes on CoinGecko
- **Signature**: `Exchanges(double? perPage, double? page, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `perPage` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `per_page` ← `perPage`, `page` ← `page`
- **Returns**: `IReadOnlyList<Exchange1>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### ExchangesId
- **HTTP**: `GET /exchanges/{id}` (Default (api))
- **Notes**: To query exchange's data (name, year established, country, etc.), exchange volume in BTC and top 100 tickers based on exchange's ID
- **Signature**: `ExchangesId(DexPairFormat? dexPairFormat, string id = "binance", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `dexPairFormat` — nullable, no default → **must pass explicitly**
  - defaults: `id` = "binance", `requestOptions` = null
- **Query params (wire ← C#)**: `dex_pair_format` ← `dexPairFormat`
- **Returns**: `ExchangesId`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExchangesIdTickers
- **HTTP**: `GET /exchanges/{id}/tickers` (Default (api))
- **Notes**: To query exchange's tickers based on exchange's ID
- **Signature**: `ExchangesIdTickers(string? coinIds, bool? includeExchangeLogo, double? page, bool? depth, Order3? order, DexPairFormat? dexPairFormat, string id = "binance", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`coinIds` … `dexPairFormat`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `id` = "binance", `requestOptions` = null
- **Query params (wire ← C#)**: `coin_ids` ← `coinIds`, `include_exchange_logo` ← `includeExchangeLogo`, `page` ← `page`, `depth` ← `depth`, `order` ← `order`, `dex_pair_format` ← `dexPairFormat`
- **Returns**: `CoinsIdTickers`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### ExchangesIdVolumeChart
- **HTTP**: `GET /exchanges/{id}/volume_chart` (Default (api))
- **Notes**: To query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID
- **Signature**: `ExchangesIdVolumeChart(Days days, string id = "binance", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `id` = "binance", `requestOptions` = null
- **Query params (wire ← C#)**: `days` ← `days`
- **Returns**: `IReadOnlyList<IReadOnlyList<ExchangeVolumeChart>>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ExchangesList
- **HTTP**: `GET /exchanges/list` (Default (api))
- **Notes**: To query all the supported exchanges with ID and name
- **Signature**: `ExchangesList(Status? status, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `status` ← `status`
- **Returns**: `IReadOnlyList<ExchangesList>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GlobalDefi
- **HTTP**: `GET /global/decentralized_finance_defi` (Default (api))
- **Notes**: To query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume
- **Signature**: `GlobalDefi(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `GlobalDeFi`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### LatestPoolsList
- **HTTP**: `GET /onchain/networks/new_pools` (Default (api))
- **Notes**: To query all the latest pools across all networks on GeckoTerminal
- **Signature**: `LatestPoolsList(string? include, int? page, bool? includeGtCommunityData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `includeGtCommunityData` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `page` ← `page`, `include_gt_community_data` ← `includeGtCommunityData`
- **Returns**: `Pool`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### LatestPoolsNetwork
- **HTTP**: `GET /onchain/networks/{network}/new_pools` (Default (api))
- **Notes**: To query all the latest pools based on the provided network
- **Signature**: `LatestPoolsNetwork(string? include, int? page, bool? includeGtCommunityData, string network = "eth", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - `includeGtCommunityData` — nullable, no default → **must pass explicitly**
  - defaults: `network` = "eth", `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `page` ← `page`, `include_gt_community_data` ← `includeGtCommunityData`
- **Returns**: `Pool`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### NetworksList
- **HTTP**: `GET /onchain/networks` (Default (api))
- **Notes**: To retrieve a list of all supported networks on GeckoTerminal
- **Signature**: `NetworksList(int? page, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `page` ← `page`
- **Returns**: `NetworksList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### NftsContractAddress
- **HTTP**: `GET /nfts/{asset_platform_id}/contract/{contract_address}` (Default (api))
- **Notes**: To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection contract address and respective asset platform
- **Signature**: `NftsContractAddress(string assetPlatformId = "ethereum", string contractAddress = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `assetPlatformId` = "ethereum", `contractAddress` = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8", `requestOptions` = null
- **Returns**: `Nftdata`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NftsId
- **HTTP**: `GET /nfts/{id}` (Default (api))
- **Notes**: To query all the NFT data (name, floor price, 24hr volume, ...) based on the NFT collection ID
- **Signature**: `NftsId(string id = "pudgy-penguins", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `id` = "pudgy-penguins", `requestOptions` = null
- **Returns**: `Nftdata`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NftsList
- **HTTP**: `GET /nfts/list` (Default (api))
- **Notes**: To query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko
- **Signature**: `NftsList(Order7? order, int? perPage, int? page, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `order` — nullable, no default → **must pass explicitly**
  - `perPage` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `order` ← `order`, `per_page` ← `perPage`, `page` ← `page`
- **Returns**: `IReadOnlyList<NftsList>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### OnchainSimplePrice
- **HTTP**: `GET /onchain/simple/networks/{network}/token_price/{addresses}` (Default (api))
- **Notes**: To get token price based on the provided token contract address on a network
- **Signature**: `OnchainSimplePrice(bool? includeMarketCap, bool? mcapFdvFallback, bool? include24HrVol, bool? include24HrPriceChange, bool? includeTotalReserveInUsd, bool? includeInactiveSource, string network = "eth", string addresses = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`includeMarketCap` … `includeInactiveSource`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `network` = "eth", `addresses` = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", `requestOptions` = null
- **Query params (wire ← C#)**: `include_market_cap` ← `includeMarketCap`, `mcap_fdv_fallback` ← `mcapFdvFallback`, `include_24hr_vol` ← `include24HrVol`, `include_24hr_price_change` ← `include24HrPriceChange`, `include_total_reserve_in_usd` ← `includeTotalReserveInUsd`, `include_inactive_source` ← `includeInactiveSource`
- **Returns**: `OnchainSimplePrice`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PingServer
- **HTTP**: `GET /ping` (Default (api))
- **Notes**: To check the API server status
- **Signature**: `PingServer(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `PingServer`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PoolAddress
- **HTTP**: `GET /onchain/networks/{network}/pools/{address}` (Default (api))
- **Notes**: To query the specific pool based on the provided network and pool address
- **Signature**: `PoolAddress(string? include, bool? includeVolumeBreakdown, bool? includeComposition, string network = "eth", string address = "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - `includeVolumeBreakdown` — nullable, no default → **must pass explicitly**
  - `includeComposition` — nullable, no default → **must pass explicitly**
  - defaults: `network` = "eth", `address` = "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640", `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `include_volume_breakdown` ← `includeVolumeBreakdown`, `include_composition` ← `includeComposition`
- **Returns**: `PoolAddressData`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PoolOhlcvContractAddress
- **HTTP**: `GET /onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}` (Default (api))
- **Notes**: To get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network
- **Signature**: `PoolOhlcvContractAddress(Timeframe timeframe, string? aggregate, int? beforeTimestamp, int? limit, Currency? currency, string? token, bool? includeEmptyIntervals, string network = "eth", string poolAddress = "0x06da0fd433c1a5d7a4faa01111c044910a184553", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`aggregate` … `includeEmptyIntervals`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `network` = "eth", `poolAddress` = "0x06da0fd433c1a5d7a4faa01111c044910a184553", `requestOptions` = null
- **Query params (wire ← C#)**: `aggregate` ← `aggregate`, `before_timestamp` ← `beforeTimestamp`, `limit` ← `limit`, `currency` ← `currency`, `token` ← `token`, `include_empty_intervals` ← `includeEmptyIntervals`
- **Returns**: `Ohlcv`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PoolTokenInfoContractAddress
- **HTTP**: `GET /onchain/networks/{network}/pools/{pool_address}/info` (Default (api))
- **Notes**: To query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network
- **Signature**: `PoolTokenInfoContractAddress(Include2? include, string network = "solana", string poolAddress = "8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - defaults: `network` = "solana", `poolAddress` = "8WwcNqdZjCY5Pt7AkhupAFknV2txca9sq6YBkGzLbvdt", `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`
- **Returns**: `PoolTokensInfo`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PoolTradesContractAddress
- **HTTP**: `GET /onchain/networks/{network}/pools/{pool_address}/trades` (Default (api))
- **Notes**: To query the last 300 trades in the past 24 hours based on the provided pool address
- **Signature**: `PoolTradesContractAddress(double? tradeVolumeInUsdGreaterThan, string? token, string network = "eth", string poolAddress = "0x06da0fd433c1a5d7a4faa01111c044910a184553", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `tradeVolumeInUsdGreaterThan` — nullable, no default → **must pass explicitly**
  - `token` — nullable, no default → **must pass explicitly**
  - defaults: `network` = "eth", `poolAddress` = "0x06da0fd433c1a5d7a4faa01111c044910a184553", `requestOptions` = null
- **Query params (wire ← C#)**: `trade_volume_in_usd_greater_than` ← `tradeVolumeInUsdGreaterThan`, `token` ← `token`
- **Returns**: `Trades`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PoolsAddresses
- **HTTP**: `GET /onchain/networks/{network}/pools/multi/{addresses}` (Default (api))
- **Notes**: To query multiple pools based on the provided network and pool addresses
- **Signature**: `PoolsAddresses(string? include, bool? includeVolumeBreakdown, bool? includeComposition, string network = "eth", string addresses = "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - `includeVolumeBreakdown` — nullable, no default → **must pass explicitly**
  - `includeComposition` — nullable, no default → **must pass explicitly**
  - defaults: `network` = "eth", `addresses` = "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640", `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `include_volume_breakdown` ← `includeVolumeBreakdown`, `include_composition` ← `includeComposition`
- **Returns**: `MultiPoolAddressData`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PublicTreasuryEntity
- **HTTP**: `GET /public_treasury/{entity_id}` (Default (api))
- **Notes**: To query public companies' and governments' cryptocurrency holdings by entity ID
- **Signature**: `PublicTreasuryEntity(string? holdingAmountChange, string? holdingChangePercentage, string entityId = "strategy", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `holdingAmountChange` — nullable, no default → **must pass explicitly**
  - `holdingChangePercentage` — nullable, no default → **must pass explicitly**
  - defaults: `entityId` = "strategy", `requestOptions` = null
- **Query params (wire ← C#)**: `holding_amount_change` ← `holdingAmountChange`, `holding_change_percentage` ← `holdingChangePercentage`
- **Returns**: `PublicTreasuryEntity`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PublicTreasuryEntityChart
- **HTTP**: `GET /public_treasury/{entity_id}/{coin_id}/holding_chart` (Default (api))
- **Notes**: To query historical cryptocurrency holdings chart of public companies and governments by entity ID and coin ID
- **Signature**: `PublicTreasuryEntityChart(bool? includeEmptyIntervals, string entityId = "strategy", string coinId = "bitcoin", string days = "365", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `includeEmptyIntervals` — nullable, no default → **must pass explicitly**
  - defaults: `entityId` = "strategy", `coinId` = "bitcoin", `days` = "365", `requestOptions` = null
- **Query params (wire ← C#)**: `days` ← `days`, `include_empty_intervals` ← `includeEmptyIntervals`
- **Returns**: `PublicTreasuryEntityChart`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PublicTreasuryTransactionHistory
- **HTTP**: `GET /public_treasury/{entity_id}/transaction_history` (Default (api))
- **Notes**: To query public companies' and governments' cryptocurrency transaction history by entity ID
- **Signature**: `PublicTreasuryTransactionHistory(int? perPage, int? page, Order6? order, string? coinIds, string entityId = "strategy", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`perPage` … `coinIds`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `entityId` = "strategy", `requestOptions` = null
- **Query params (wire ← C#)**: `per_page` ← `perPage`, `page` ← `page`, `order` ← `order`, `coin_ids` ← `coinIds`
- **Returns**: `PublicTreasuryTransactionHistory`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: manual `page`+`perPage`

### SearchData
- **HTTP**: `GET /search` (Default (api))
- **Notes**: To search for coins, categories and markets listed on CoinGecko
- **Signature**: `SearchData(string query, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`
- **Returns**: `Search`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchPools
- **HTTP**: `GET /onchain/search/pools` (Default (api))
- **Notes**: To search for pools across all networks by pool address, token name, token symbol, or token contract address
- **Signature**: `SearchPools(string? network, string? include, int? page, string? query = "weth", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `network` — nullable, no default → **must pass explicitly**
  - `include` — nullable, no default → **must pass explicitly**
  - `page` — nullable, no default → **must pass explicitly**
  - defaults: `query` = "weth", `requestOptions` = null
- **Query params (wire ← C#)**: `query` ← `query`, `network` ← `network`, `include` ← `include`, `page` ← `page`
- **Returns**: `PoolSearch`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### SimplePrice
- **HTTP**: `GET /simple/price` (Default (api))
- **Notes**: To query the prices of one or more coins by using their unique Coin API IDs, symbols, or names
- **Signature**: `SimplePrice(IncludeTokens? includeTokens, bool? includeMarketCap, bool? include24HrVol, bool? include24HrChange, bool? includeLastUpdatedAt, Precision? precision, string vsCurrencies = "usd", string? ids = "bitcoin", string? names = "Bitcoin", string? symbols = "btc", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`includeTokens` … `precision`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `vsCurrencies` = "usd", `ids` = "bitcoin", `names` = "Bitcoin", `symbols` = "btc", `requestOptions` = null
- **Query params (wire ← C#)**: `vs_currencies` ← `vsCurrencies`, `ids` ← `ids`, `names` ← `names`, `symbols` ← `symbols`, `include_tokens` ← `includeTokens`, `include_market_cap` ← `includeMarketCap`, `include_24hr_vol` ← `include24HrVol`, `include_24hr_change` ← `include24HrChange`, `include_last_updated_at` ← `includeLastUpdatedAt`, `precision` ← `precision`
- **Returns**: `IReadOnlyDictionary<string, SimplePrice>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SimpleSupportedCurrencies
- **HTTP**: `GET /simple/supported_vs_currencies` (Default (api))
- **Notes**: To query all the supported currencies on CoinGecko
- **Signature**: `SimpleSupportedCurrencies(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SimpleTokenPrice
- **HTTP**: `GET /simple/token_price/{id}` (Default (api))
- **Notes**: To query one or more token prices by using their token contract addresses
- **Signature**: `SimpleTokenPrice(bool? includeMarketCap, bool? include24HrVol, bool? include24HrChange, bool? includeLastUpdatedAt, Precision? precision, string id = "ethereum", string contractAddresses = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", string vsCurrencies = "usd", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`includeMarketCap` … `precision`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `id` = "ethereum", `contractAddresses` = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", `vsCurrencies` = "usd", `requestOptions` = null
- **Query params (wire ← C#)**: `contract_addresses` ← `contractAddresses`, `vs_currencies` ← `vsCurrencies`, `include_market_cap` ← `includeMarketCap`, `include_24hr_vol` ← `include24HrVol`, `include_24hr_change` ← `include24HrChange`, `include_last_updated_at` ← `includeLastUpdatedAt`, `precision` ← `precision`
- **Returns**: `IReadOnlyDictionary<string, SimplePrice>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TokenDataContractAddress
- **HTTP**: `GET /onchain/networks/{network}/tokens/{address}` (Default (api))
- **Notes**: To query specific token data based on the provided token contract address on a network
- **Signature**: `TokenDataContractAddress(Include? include, bool? includeComposition, bool? includeInactiveSource, string network = "eth", string address = "0xdac17f958d2ee523a2206206994597c13d831ec7", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - `includeComposition` — nullable, no default → **must pass explicitly**
  - `includeInactiveSource` — nullable, no default → **must pass explicitly**
  - defaults: `network` = "eth", `address` = "0xdac17f958d2ee523a2206206994597c13d831ec7", `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `include_composition` ← `includeComposition`, `include_inactive_source` ← `includeInactiveSource`
- **Returns**: `TokenData`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TokenInfoContractAddress
- **HTTP**: `GET /onchain/networks/{network}/tokens/{address}/info` (Default (api))
- **Notes**: To query token metadata (name, symbol, CoinGecko ID, image, socials, websites, description, etc.) based on a provided token contract address on a network
- **Signature**: `TokenInfoContractAddress(string network = "solana", string address = "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `network` = "solana", `address` = "Dfh5DzRgSvvCFDoYc2ciTkMrbDfRKybA4SoFbPmApump", `requestOptions` = null
- **Returns**: `TokenInfo`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TokenLists
- **HTTP**: `GET /token_lists/{asset_platform_id}/all.json` (Default (api))
- **Notes**: To get full list of tokens of a blockchain network (asset platform) that is supported by Ethereum token list standard
- **Signature**: `TokenLists(string assetPlatformId = "ethereum", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `assetPlatformId` = "ethereum", `requestOptions` = null
- **Returns**: `TokenLists`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TokensDataContractAddresses
- **HTTP**: `GET /onchain/networks/{network}/tokens/multi/{addresses}` (Default (api))
- **Notes**: To query multiple tokens data based on the provided token contract addresses on a network
- **Signature**: `TokensDataContractAddresses(Include? include, bool? includeComposition, bool? includeInactiveSource, string network = "solana", string addresses = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN,2g4LS3y2myPe6vj9wTvoBE1wKqxvhnZPoZA9QU9upump", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - `includeComposition` — nullable, no default → **must pass explicitly**
  - `includeInactiveSource` — nullable, no default → **must pass explicitly**
  - defaults: `network` = "solana", `addresses` = "6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN, `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `include_composition` ← `includeComposition`, `include_inactive_source` ← `includeInactiveSource`
- **Returns**: `MultiTokenData`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TokensInfoRecentUpdated
- **HTTP**: `GET /onchain/tokens/info_recently_updated` (Default (api))
- **Notes**: To query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal
- **Signature**: `TokensInfoRecentUpdated(Include3? include, string? network, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `include` — nullable, no default → **must pass explicitly**
  - `network` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `network` ← `network`
- **Returns**: `TokenInfoRecentlyUpdated`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TopPoolsContractAddress
- **HTTP**: `GET /onchain/networks/{network}/tokens/{token_address}/pools` (Default (api))
- **Notes**: To query top pools based on the provided token contract address on a network
- **Signature**: `TopPoolsContractAddress(string? include, bool? includeInactiveSource, int? page, Sort2? sort, bool? includeGtCommunityData, string network = "eth", string tokenAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 5 params (`include` … `includeGtCommunityData`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `network` = "eth", `tokenAddress` = "0xdac17f958d2ee523a2206206994597c13d831ec7", `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `include_inactive_source` ← `includeInactiveSource`, `page` ← `page`, `sort` ← `sort`, `include_gt_community_data` ← `includeGtCommunityData`
- **Returns**: `Pool`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TopPoolsDex
- **HTTP**: `GET /onchain/networks/{network}/dexes/{dex}/pools` (Default (api))
- **Notes**: To query all the top pools based on the provided network and decentralized exchange (DEX)
- **Signature**: `TopPoolsDex(string? include, int? page, Sort? sort, bool? includeGtCommunityData, string network = "eth", string dex = "sushiswap", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`include` … `includeGtCommunityData`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `network` = "eth", `dex` = "sushiswap", `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `page` ← `page`, `sort` ← `sort`, `include_gt_community_data` ← `includeGtCommunityData`
- **Returns**: `Pool`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TopPoolsNetwork
- **HTTP**: `GET /onchain/networks/{network}/pools` (Default (api))
- **Notes**: To query all the top pools based on the provided network
- **Signature**: `TopPoolsNetwork(string? include, int? page, Sort? sort, bool? includeGtCommunityData, string network = "eth", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`include` … `includeGtCommunityData`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `network` = "eth", `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `page` ← `page`, `sort` ← `sort`, `include_gt_community_data` ← `includeGtCommunityData`
- **Returns**: `Pool`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TrendingPoolsList
- **HTTP**: `GET /onchain/networks/trending_pools` (Default (api))
- **Notes**: To query all the trending pools across all networks on GeckoTerminal
- **Signature**: `TrendingPoolsList(string? include, int? page, Duration? duration, bool? includeGtCommunityData, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`include` … `includeGtCommunityData`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `page` ← `page`, `duration` ← `duration`, `include_gt_community_data` ← `includeGtCommunityData`
- **Returns**: `Pool`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TrendingPoolsNetwork
- **HTTP**: `GET /onchain/networks/{network}/trending_pools` (Default (api))
- **Notes**: To query the trending pools based on the provided network
- **Signature**: `TrendingPoolsNetwork(string? include, int? page, Duration? duration, bool? includeGtCommunityData, string network = "eth", RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`include` … `includeGtCommunityData`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `network` = "eth", `requestOptions` = null
- **Query params (wire ← C#)**: `include` ← `include`, `page` ← `page`, `duration` ← `duration`, `include_gt_community_data` ← `includeGtCommunityData`
- **Returns**: `Pool`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none (only `page`, no `perPage`)

### TrendingSearch
- **HTTP**: `GET /search/trending` (Default (api))
- **Notes**: To query trending search coins, NFTs and categories on CoinGecko in the last 24 hours
- **Signature**: `TrendingSearch(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `TrendingSearch`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
