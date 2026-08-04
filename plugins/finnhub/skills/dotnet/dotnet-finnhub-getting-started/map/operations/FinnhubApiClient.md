# FinnhubApiClient — operations

Accessor: called directly on the client (`client.Op(…)`) · Source: `FinnhubApiClient.cs` · 117 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### AggregateIndicator
- **HTTP**: `GET /scan/technical-indicator` (Default (finnhub))
- **Signature**: `AggregateIndicator(string symbol, string resolution, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `resolution` ← `resolution`
- **Returns**: `AggregateIndicators`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AiChat
- **HTTP**: `POST /ai-chat` (Default (finnhub))
- **Signature**: `AiChat(AichatBody? search, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `search` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `AichatResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### AirlinePriceIndex
- **HTTP**: `GET /airline/price-index` (Default (finnhub))
- **Signature**: `AirlinePriceIndex(string airline, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `airline` ← `airline`, `from` ← `from`, `to` ← `to`
- **Returns**: `AirlinePriceIndexData`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BankBranch
- **HTTP**: `GET /bank-branch` (Default (finnhub))
- **Signature**: `BankBranch(object symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `BankBranchRes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BondPrice
- **HTTP**: `GET /bond/price` (Default (finnhub))
- **Signature**: `BondPrice(string isin, long from, long to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `isin` ← `isin`, `from` ← `from`, `to` ← `to`
- **Returns**: `BondCandles`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BondProfile
- **HTTP**: `GET /bond/profile` (Default (finnhub))
- **Signature**: `BondProfile(string? isin, string? cusip, string? figi, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `isin` — nullable, no default → **must pass explicitly**
  - `cusip` — nullable, no default → **must pass explicitly**
  - `figi` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `isin` ← `isin`, `cusip` ← `cusip`, `figi` ← `figi`
- **Returns**: `BondProfile`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BondTick
- **HTTP**: `GET /bond/tick` (Default (finnhub))
- **Signature**: `BondTick(string isin, DateTimeOffset date, long limit, long skip, string exchange, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `isin` ← `isin`, `date` ← `date`, `limit` ← `limit`, `skip` ← `skip`, `exchange` ← `exchange`
- **Returns**: `BondTickData`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### BondYieldCurve
- **HTTP**: `GET /bond/yield-curve` (Default (finnhub))
- **Signature**: `BondYieldCurve(string code, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `code` ← `code`
- **Returns**: `BondYieldCurve`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyBasicFinancials
- **HTTP**: `GET /stock/metric` (Default (finnhub))
- **Signature**: `CompanyBasicFinancials(string symbol, string metric, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `metric` ← `metric`
- **Returns**: `BasicFinancials`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyCapexEstimates
- **HTTP**: `GET /stock/capex-estimate` (Default (finnhub))
- **Signature**: `CompanyCapexEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `CapexEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyDpsEstimates
- **HTTP**: `GET /stock/dps-estimate` (Default (finnhub))
- **Signature**: `CompanyDpsEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `DpsEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyEarnings
- **HTTP**: `GET /stock/earnings` (Default (finnhub))
- **Signature**: `CompanyEarnings(string symbol, long? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `limit` ← `limit`
- **Returns**: `IReadOnlyList<EarningResult>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyEarningsQualityScore
- **HTTP**: `GET /stock/earnings-quality-score` (Default (finnhub))
- **Signature**: `CompanyEarningsQualityScore(string symbol, string freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `CompanyEarningsQualityScore`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyEbitEstimates
- **HTTP**: `GET /stock/ebit-estimate` (Default (finnhub))
- **Signature**: `CompanyEbitEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `EbitEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyEbitdaEstimates
- **HTTP**: `GET /stock/ebitda-estimate` (Default (finnhub))
- **Signature**: `CompanyEbitdaEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `EbitdaEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyEpsEstimates
- **HTTP**: `GET /stock/eps-estimate` (Default (finnhub))
- **Signature**: `CompanyEpsEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `EarningsEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyEsgScore
- **HTTP**: `GET /stock/esg` (Default (finnhub))
- **Signature**: `CompanyEsgScore(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `CompanyEsg`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyExecutive
- **HTTP**: `GET /stock/executive` (Default (finnhub))
- **Signature**: `CompanyExecutive(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `CompanyExecutive`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyFcfEstimates
- **HTTP**: `GET /stock/fcf-estimate` (Default (finnhub))
- **Signature**: `CompanyFcfEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `FcfEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyGrossIncomeEstimates
- **HTTP**: `GET /stock/gross-income-estimate` (Default (finnhub))
- **Signature**: `CompanyGrossIncomeEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `GrossIncomeEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyHistoricalEsgScore
- **HTTP**: `GET /stock/historical-esg` (Default (finnhub))
- **Signature**: `CompanyHistoricalEsgScore(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `HistoricalCompanyEsg`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyNetIncomeEstimates
- **HTTP**: `GET /stock/net-income-estimate` (Default (finnhub))
- **Signature**: `CompanyNetIncomeEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `NetIncomeEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyNews
- **HTTP**: `GET /company-news` (Default (finnhub))
- **Signature**: `CompanyNews(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `IReadOnlyList<CompanyNews>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyOcfEstimates
- **HTTP**: `GET /stock/ocf-estimate` (Default (finnhub))
- **Signature**: `CompanyOcfEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `OcfEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyPeers
- **HTTP**: `GET /stock/peers` (Default (finnhub))
- **Signature**: `CompanyPeers(string symbol, string? grouping, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `grouping` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `grouping` ← `grouping`
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyPretaxIncomeEstimates
- **HTTP**: `GET /stock/pretax-income-estimate` (Default (finnhub))
- **Signature**: `CompanyPretaxIncomeEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `PretaxIncomeEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyProfile
- **HTTP**: `GET /stock/profile` (Default (finnhub))
- **Signature**: `CompanyProfile(string? symbol, string? isin, string? cusip, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - `cusip` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`, `cusip` ← `cusip`
- **Returns**: `CompanyProfile`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyProfile2
- **HTTP**: `GET /stock/profile2` (Default (finnhub))
- **Signature**: `CompanyProfile2(string? symbol, string? isin, string? cusip, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - `cusip` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`, `cusip` ← `cusip`
- **Returns**: `CompanyProfile2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CompanyRevenueEstimates
- **HTTP**: `GET /stock/revenue-estimate` (Default (finnhub))
- **Signature**: `CompanyRevenueEstimates(string symbol, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `freq` ← `freq`
- **Returns**: `RevenueEstimates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CongressionalTrading
- **HTTP**: `GET /stock/congressional-trading` (Default (finnhub))
- **Signature**: `CongressionalTrading(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `CongressionalTrading`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Country
- **HTTP**: `GET /country` (Default (finnhub))
- **Signature**: `Country(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CountryMetadata>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Covid19
- **HTTP**: `GET /covid19/us` (Default (finnhub))
- **Signature**: `Covid19(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<CovidInfo>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CryptoCandles
- **HTTP**: `GET /crypto/candle` (Default (finnhub))
- **Signature**: `CryptoCandles(string symbol, string resolution, long from, long to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `resolution` ← `resolution`, `from` ← `from`, `to` ← `to`
- **Returns**: `CryptoCandles`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CryptoExchanges
- **HTTP**: `GET /crypto/exchange` (Default (finnhub))
- **Signature**: `CryptoExchanges(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CryptoProfile
- **HTTP**: `GET /crypto/profile` (Default (finnhub))
- **Signature**: `CryptoProfile(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `CryptoProfile`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### CryptoSymbols
- **HTTP**: `GET /crypto/symbol` (Default (finnhub))
- **Signature**: `CryptoSymbols(string exchange, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `exchange` ← `exchange`
- **Returns**: `IReadOnlyList<CryptoSymbol>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EarningsCalendar
- **HTTP**: `GET /calendar/earnings` (Default (finnhub))
- **Signature**: `EarningsCalendar(DateTimeOffset? from, DateTimeOffset? to, string? symbol, bool? international, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`from` … `international`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `from` ← `from`, `to` ← `to`, `symbol` ← `symbol`, `international` ← `international`
- **Returns**: `EarningsCalendar`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EarningsCallLive
- **HTTP**: `GET /stock/earnings-call-live` (Default (finnhub))
- **Signature**: `EarningsCallLive(DateTimeOffset? from, DateTimeOffset? to, string? symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `from` — nullable, no default → **must pass explicitly**
  - `to` — nullable, no default → **must pass explicitly**
  - `symbol` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `from` ← `from`, `to` ← `to`, `symbol` ← `symbol`
- **Returns**: `EarningsCallLive`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EconomicCalendar
- **HTTP**: `GET /calendar/economic` (Default (finnhub))
- **Signature**: `EconomicCalendar(DateTimeOffset? from, DateTimeOffset? to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `from` — nullable, no default → **must pass explicitly**
  - `to` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `from` ← `from`, `to` ← `to`
- **Returns**: `EconomicCalendar`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EconomicCode
- **HTTP**: `GET /economic/code` (Default (finnhub))
- **Signature**: `EconomicCode(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<EconomicCode>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EconomicData
- **HTTP**: `GET /economic` (Default (finnhub))
- **Signature**: `EconomicData(string code, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `code` ← `code`
- **Returns**: `EconomicData`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EtfsAllocation
- **HTTP**: `GET /etf/allocation` (Default (finnhub))
- **Signature**: `EtfsAllocation(string? symbol, string? isin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`
- **Returns**: `EtfsAllocation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EtfsCountryExposure
- **HTTP**: `GET /etf/country` (Default (finnhub))
- **Signature**: `EtfsCountryExposure(string? symbol, string? isin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`
- **Returns**: `EtfsCountryExposure`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EtfsHoldings
- **HTTP**: `GET /etf/holdings` (Default (finnhub))
- **Signature**: `EtfsHoldings(string? symbol, string? isin, long? skip, string? date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`symbol` … `date`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`, `skip` ← `skip`, `date` ← `date`
- **Returns**: `EtfsHoldings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EtfsProfile
- **HTTP**: `GET /etf/profile` (Default (finnhub))
- **Signature**: `EtfsProfile(string? symbol, string? isin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`
- **Returns**: `EtfsProfile`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### EtfsSectorExposure
- **HTTP**: `GET /etf/sector` (Default (finnhub))
- **Signature**: `EtfsSectorExposure(string? symbol, string? isin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`
- **Returns**: `EtfsSectorExposure`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FdaCommitteeMeetingCalendar
- **HTTP**: `GET /fda-advisory-committee-calendar` (Default (finnhub))
- **Signature**: `FdaCommitteeMeetingCalendar(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<FdacomitteeMeeting>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Filings
- **HTTP**: `GET /stock/filings` (Default (finnhub))
- **Signature**: `Filings(string? symbol, string? cik, string? accessNumber, string? form, DateTimeOffset? from, DateTimeOffset? to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`symbol` … `to`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `cik` ← `cik`, `accessNumber` ← `accessNumber`, `form` ← `form`, `from` ← `from`, `to` ← `to`
- **Returns**: `IReadOnlyList<Filing>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FilingsSentiment
- **HTTP**: `GET /stock/filings-sentiment` (Default (finnhub))
- **Signature**: `FilingsSentiment(string accessNumber, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `accessNumber` ← `accessNumber`
- **Returns**: `SecsentimentAnalysis`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Financials
- **HTTP**: `GET /stock/financials` (Default (finnhub))
- **Signature**: `Financials(string symbol, string statement, string freq, string? preliminary, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `preliminary` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `statement` ← `statement`, `freq` ← `freq`, `preliminary` ← `preliminary`
- **Returns**: `FinancialStatements`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FinancialsReported
- **HTTP**: `GET /stock/financials-reported` (Default (finnhub))
- **Signature**: `FinancialsReported(string? symbol, string? cik, string? accessNumber, string? freq, DateTimeOffset? from, DateTimeOffset? to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 6 params (`symbol` … `to`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `cik` ← `cik`, `accessNumber` ← `accessNumber`, `freq` ← `freq`, `from` ← `from`, `to` ← `to`
- **Returns**: `FinancialsAsReported`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ForexCandles
- **HTTP**: `GET /forex/candle` (Default (finnhub))
- **Signature**: `ForexCandles(string symbol, string resolution, long from, long to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `resolution` ← `resolution`, `from` ← `from`, `to` ← `to`
- **Returns**: `ForexCandles`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ForexExchanges
- **HTTP**: `GET /forex/exchange` (Default (finnhub))
- **Signature**: `ForexExchanges(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `IReadOnlyList<string>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ForexRates
- **HTTP**: `GET /forex/rates` (Default (finnhub))
- **Signature**: `ForexRates(string? @base, string? date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `@base` — nullable, no default → **must pass explicitly**
  - `date` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `date` ← `date`
- **Returns**: `Forexrates`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### ForexSymbols
- **HTTP**: `GET /forex/symbol` (Default (finnhub))
- **Signature**: `ForexSymbols(string exchange, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `exchange` ← `exchange`
- **Returns**: `IReadOnlyList<ForexSymbol>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### FundOwnership
- **HTTP**: `GET /stock/fund-ownership` (Default (finnhub))
- **Signature**: `FundOwnership(string symbol, long? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `limit` ← `limit`
- **Returns**: `FundOwnership`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GlobalFilingsDownload
- **HTTP**: `GET /global-filings/download` (Default (finnhub))
- **Signature**: `GlobalFilingsDownload(string documentId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `documentId` ← `documentId`
- **Returns**: `void` (Task)
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GlobalFilingsSearch
- **HTTP**: `POST /global-filings/search` (Default (finnhub))
- **Signature**: `GlobalFilingsSearch(SearchBody? search, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `search` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `SearchResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### GlobalFilingsSearchFilter
- **HTTP**: `GET /global-filings/filter` (Default (finnhub))
- **Signature**: `GlobalFilingsSearchFilter(string field, string? source, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `source` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `field` ← `field`, `source` ← `source`
- **Returns**: `SearchFilter`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### HistoricalEmployeeCount
- **HTTP**: `GET /stock/historical-employee-count` (Default (finnhub))
- **Signature**: `HistoricalEmployeeCount(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `HistoricalEmployeeCount`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### HistoricalMarketCap
- **HTTP**: `GET /stock/historical-market-cap` (Default (finnhub))
- **Signature**: `HistoricalMarketCap(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `HistoricalMarketCapData`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IndicesConstituents
- **HTTP**: `GET /index/constituents` (Default (finnhub))
- **Signature**: `IndicesConstituents(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `IndicesConstituents`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IndicesHistoricalConstituents
- **HTTP**: `GET /index/historical-constituents` (Default (finnhub))
- **Signature**: `IndicesHistoricalConstituents(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `IndicesHistoricalConstituents`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InsiderSentiment
- **HTTP**: `GET /stock/insider-sentiment` (Default (finnhub))
- **Signature**: `InsiderSentiment(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `InsiderSentiments`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InsiderTransactions
- **HTTP**: `GET /stock/insider-transactions` (Default (finnhub))
- **Signature**: `InsiderTransactions(string symbol, DateTimeOffset? from, DateTimeOffset? to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `from` — nullable, no default → **must pass explicitly**
  - `to` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `InsiderTransactions`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InstitutionalOwnership
- **HTTP**: `GET /institutional/ownership` (Default (finnhub))
- **Signature**: `InstitutionalOwnership(string symbol, string cusip, string from, string to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `cusip` ← `cusip`, `from` ← `from`, `to` ← `to`
- **Returns**: `InstitutionalOwnership`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InstitutionalPortfolio
- **HTTP**: `GET /institutional/portfolio` (Default (finnhub))
- **Signature**: `InstitutionalPortfolio(string cik, string from, string to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cik` ← `cik`, `from` ← `from`, `to` ← `to`
- **Returns**: `InstitutionalPortfolio`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InstitutionalProfile
- **HTTP**: `GET /institutional/profile` (Default (finnhub))
- **Signature**: `InstitutionalProfile(string? cik, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `cik` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `cik` ← `cik`
- **Returns**: `InstitutionalProfile`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InternationalFilings
- **HTTP**: `GET /stock/international-filings` (Default (finnhub))
- **Signature**: `InternationalFilings(string? symbol, string? country, DateTimeOffset? from, DateTimeOffset? to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - 4 params (`symbol` … `to`) — nullable, no default → **must pass explicitly** (pass `null` to skip)
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `country` ← `country`, `from` ← `from`, `to` ← `to`
- **Returns**: `IReadOnlyList<InternationalFiling>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### InvestmentThemes
- **HTTP**: `GET /stock/investment-theme` (Default (finnhub))
- **Signature**: `InvestmentThemes(string theme, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `theme` ← `theme`
- **Returns**: `InvestmentThemes`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IpoCalendar
- **HTTP**: `GET /calendar/ipo` (Default (finnhub))
- **Signature**: `IpoCalendar(DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `from` ← `from`, `to` ← `to`
- **Returns**: `Ipocalendar`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### IsinChange
- **HTTP**: `GET /ca/isin-change` (Default (finnhub))
- **Signature**: `IsinChange(string from, string to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `from` ← `from`, `to` ← `to`
- **Returns**: `IsinChange`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MarketHoliday
- **HTTP**: `GET /stock/market-holiday` (Default (finnhub))
- **Signature**: `MarketHoliday(string exchange, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `exchange` ← `exchange`
- **Returns**: `MarketHoliday`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MarketNews
- **HTTP**: `GET /news` (Default (finnhub))
- **Signature**: `MarketNews(string category, long? minId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `minId` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `category` ← `category`, `minId` ← `minId`
- **Returns**: `IReadOnlyList<MarketNews>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MarketStatus
- **HTTP**: `GET /stock/market-status` (Default (finnhub))
- **Signature**: `MarketStatus(string exchange, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `exchange` ← `exchange`
- **Returns**: `MarketStatus`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MutualFundCountryExposure
- **HTTP**: `GET /mutual-fund/country` (Default (finnhub))
- **Signature**: `MutualFundCountryExposure(string? symbol, string? isin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`
- **Returns**: `MutualFundCountryExposure`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MutualFundEet
- **HTTP**: `GET /mutual-fund/eet` (Default (finnhub))
- **Signature**: `MutualFundEet(string isin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `isin` ← `isin`
- **Returns**: `MutualFundEet`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MutualFundEetPai
- **HTTP**: `GET /mutual-fund/eet-pai` (Default (finnhub))
- **Signature**: `MutualFundEetPai(string isin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `isin` ← `isin`
- **Returns**: `MutualFundEetPai`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MutualFundHoldings
- **HTTP**: `GET /mutual-fund/holdings` (Default (finnhub))
- **Signature**: `MutualFundHoldings(string? symbol, string? isin, long? skip, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - `skip` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`, `skip` ← `skip`
- **Returns**: `MutualFundHoldings`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MutualFundProfile
- **HTTP**: `GET /mutual-fund/profile` (Default (finnhub))
- **Signature**: `MutualFundProfile(string? symbol, string? isin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`
- **Returns**: `MutualFundProfile`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### MutualFundSectorExposure
- **HTTP**: `GET /mutual-fund/sector` (Default (finnhub))
- **Signature**: `MutualFundSectorExposure(string? symbol, string? isin, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `isin` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `isin` ← `isin`
- **Returns**: `MutualFundSectorExposure`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### NewsSentiment
- **HTTP**: `GET /news-sentiment` (Default (finnhub))
- **Signature**: `NewsSentiment(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `NewsSentiment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Newsroom
- **HTTP**: `GET /stock/newsroom` (Default (finnhub))
- **Signature**: `Newsroom(string symbol, DateTimeOffset? from, DateTimeOffset? to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `from` — nullable, no default → **must pass explicitly**
  - `to` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `Newsroom`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Ownership
- **HTTP**: `GET /stock/ownership` (Default (finnhub))
- **Signature**: `Ownership(string symbol, long? limit, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `limit` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `limit` ← `limit`
- **Returns**: `Ownership`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PatternRecognition
- **HTTP**: `GET /scan/pattern` (Default (finnhub))
- **Signature**: `PatternRecognition(string symbol, string resolution, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `resolution` ← `resolution`
- **Returns**: `PatternRecognition`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PressReleases
- **HTTP**: `GET /press-releases` (Default (finnhub))
- **Signature**: `PressReleases(string symbol, DateTimeOffset? from, DateTimeOffset? to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `from` — nullable, no default → **must pass explicitly**
  - `to` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `PressRelease`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PriceMetrics
- **HTTP**: `GET /stock/price-metric` (Default (finnhub))
- **Signature**: `PriceMetrics(string symbol, string? date, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `date` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `date` ← `date`
- **Returns**: `PriceMetrics`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### PriceTarget
- **HTTP**: `GET /stock/price-target` (Default (finnhub))
- **Signature**: `PriceTarget(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `PriceTarget`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Quote
- **HTTP**: `GET /quote` (Default (finnhub))
- **Signature**: `Quote(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `Quote`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RecommendationTrends
- **HTTP**: `GET /stock/recommendation` (Default (finnhub))
- **Signature**: `RecommendationTrends(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `IReadOnlyList<RecommendationTrend>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RevenueBreakdown
- **HTTP**: `GET /stock/revenue-breakdown` (Default (finnhub))
- **Signature**: `RevenueBreakdown(string? symbol, string? cik, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `cik` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `cik` ← `cik`
- **Returns**: `RevenueBreakdown`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### RevenueBreakdown2
- **HTTP**: `GET /stock/revenue-breakdown2` (Default (finnhub))
- **Signature**: `RevenueBreakdown2(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `RevenueBreakdown2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SearchInFiling
- **HTTP**: `POST /global-filings/search-in-filing` (Default (finnhub))
- **Signature**: `SearchInFiling(InFilingSearchBody? search, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `search` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `InFilingResponse`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SectorMetric
- **HTTP**: `GET /sector/metrics` (Default (finnhub))
- **Signature**: `SectorMetric(string region, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `region` ← `region`
- **Returns**: `SectorMetric`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SimilarityIndex
- **HTTP**: `GET /stock/similarity-index` (Default (finnhub))
- **Signature**: `SimilarityIndex(string? symbol, string? cik, string? freq, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `cik` — nullable, no default → **must pass explicitly**
  - `freq` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `cik` ← `cik`, `freq` ← `freq`
- **Returns**: `SimilarityIndex`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SocialSentiment
- **HTTP**: `GET /stock/social-sentiment` (Default (finnhub))
- **Signature**: `SocialSentiment(string symbol, DateTimeOffset? from, DateTimeOffset? to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `from` — nullable, no default → **must pass explicitly**
  - `to` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `SocialSentiment`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockBasicDividends
- **HTTP**: `GET /stock/dividend2` (Default (finnhub))
- **Signature**: `StockBasicDividends(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `Dividends2`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockBidask
- **HTTP**: `GET /stock/bidask` (Default (finnhub))
- **Signature**: `StockBidask(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `LastBidAsk`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockCandles
- **HTTP**: `GET /stock/candle` (Default (finnhub))
- **Signature**: `StockCandles(string symbol, string resolution, long from, long to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `resolution` ← `resolution`, `from` ← `from`, `to` ← `to`
- **Returns**: `StockCandles`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockDividends
- **HTTP**: `GET /stock/dividend` (Default (finnhub))
- **Signature**: `StockDividends(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `IReadOnlyList<Dividends>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockLobbying
- **HTTP**: `GET /stock/lobbying` (Default (finnhub))
- **Signature**: `StockLobbying(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `LobbyingResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockNbbo
- **HTTP**: `GET /stock/bbo` (Default (finnhub))
- **Signature**: `StockNbbo(string symbol, DateTimeOffset date, long limit, long skip, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `date` ← `date`, `limit` ← `limit`, `skip` ← `skip`
- **Returns**: `HistoricalNbbo`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockPresentation
- **HTTP**: `GET /stock/presentation` (Default (finnhub))
- **Signature**: `StockPresentation(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `StockPresentation`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockSplits
- **HTTP**: `GET /stock/split` (Default (finnhub))
- **Signature**: `StockSplits(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `IReadOnlyList<Split>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockSymbols
- **HTTP**: `GET /stock/symbol` (Default (finnhub))
- **Signature**: `StockSymbols(string exchange, string? mic, string? securityType, string? currency, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `mic` — nullable, no default → **must pass explicitly**
  - `securityType` — nullable, no default → **must pass explicitly**
  - `currency` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `exchange` ← `exchange`, `mic` ← `mic`, `securityType` ← `securityType`, `currency` ← `currency`
- **Returns**: `IReadOnlyList<StockSymbol>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockTick
- **HTTP**: `GET /stock/tick` (Default (finnhub))
- **Signature**: `StockTick(string symbol, DateTimeOffset date, long limit, long skip, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `date` ← `date`, `limit` ← `limit`, `skip` ← `skip`
- **Returns**: `TickData`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockUsaSpending
- **HTTP**: `GET /stock/usa-spending` (Default (finnhub))
- **Signature**: `StockUsaSpending(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `UsaSpendingResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockUsptoPatent
- **HTTP**: `GET /stock/uspto-patent` (Default (finnhub))
- **Signature**: `StockUsptoPatent(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `UsptoPatentResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### StockVisaApplication
- **HTTP**: `GET /stock/visa-application` (Default (finnhub))
- **Signature**: `StockVisaApplication(string symbol, DateTimeOffset from, DateTimeOffset to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `VisaApplicationResult`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SupplyChainRelationships
- **HTTP**: `GET /stock/supply-chain` (Default (finnhub))
- **Signature**: `SupplyChainRelationships(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `SupplyChainRelationships`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SupportResistance
- **HTTP**: `GET /scan/support-resistance` (Default (finnhub))
- **Signature**: `SupportResistance(string symbol, string resolution, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `resolution` ← `resolution`
- **Returns**: `SupportResistance`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SymbolChange
- **HTTP**: `GET /ca/symbol-change` (Default (finnhub))
- **Signature**: `SymbolChange(string from, string to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `from` ← `from`, `to` ← `to`
- **Returns**: `SymbolChange`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### SymbolSearch
- **HTTP**: `GET /search` (Default (finnhub))
- **Signature**: `SymbolSearch(string q, string? exchange, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `exchange` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `q` ← `q`, `exchange` ← `exchange`
- **Returns**: `SymbolLookup`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TechnicalIndicator
- **HTTP**: `GET /indicator` (Default (finnhub))
- **Signature**: `TechnicalIndicator(string symbol, string resolution, long from, long to, string indicator, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `resolution` ← `resolution`, `from` ← `from`, `to` ← `to`, `indicator` ← `indicator`
- **Returns**: `object`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### Transcripts
- **HTTP**: `GET /stock/transcripts` (Default (finnhub))
- **Signature**: `Transcripts(string id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `id` ← `id`
- **Returns**: `EarningsCallTranscripts`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### TranscriptsList
- **HTTP**: `GET /stock/transcripts/list` (Default (finnhub))
- **Signature**: `TranscriptsList(string symbol, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`
- **Returns**: `EarningsCallTranscriptsList`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none

### UpgradeDowngrade
- **HTTP**: `GET /stock/upgrade-downgrade` (Default (finnhub))
- **Signature**: `UpgradeDowngrade(string? symbol, DateTimeOffset? from, DateTimeOffset? to, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `symbol` — nullable, no default → **must pass explicitly**
  - `from` — nullable, no default → **must pass explicitly**
  - `to` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Query params (wire ← C#)**: `symbol` ← `symbol`, `from` ← `from`, `to` ← `to`
- **Returns**: `IReadOnlyList<UpgradeDowngrade>`
- **Error**: `SdkException<RawError>` — **Case B**
- **Error accessors**: `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?`
- **No-throw variant**: absent
- **Pagination**: none
