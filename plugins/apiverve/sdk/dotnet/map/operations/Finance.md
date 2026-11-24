<!-- Generated file — do not edit; regenerated with the SDK. -->

# Finance — operations

Accessor: `client.Finance` · Source: `src/ApiVerve/Api/Finance.cs` · 49 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Balancesheet

- **Auth**: `options.ApiKey`
- **Signature**: `Balancesheet(BalancesheetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`, `year` ← `Year`, `quarter` ← `Quarter`
- **Returns**: `V1BalancesheetResponse`
- **Error**: `ApiException<BalancesheetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BalancesheetRequest` | `src/ApiVerve/Requests/Finance/BalancesheetRequest.cs` |
| `V1BalancesheetResponse` | `src/ApiVerve/Models/V1BalancesheetResponse.cs` |
| `BalancesheetError` | `src/ApiVerve/Errors/BalancesheetError.cs` |

### Benchmarkrate

- **Auth**: `options.ApiKey`
- **Signature**: `Benchmarkrate(BenchmarkrateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Rate`
- **Query params (wire ← C#)**: `rate` ← `Rate`
- **Returns**: `V1BenchmarkrateResponse`
- **Error**: `ApiException<BenchmarkrateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BenchmarkrateRequest` | `src/ApiVerve/Requests/Finance/BenchmarkrateRequest.cs` |
| `V1BenchmarkrateResponse` | `src/ApiVerve/Models/V1BenchmarkrateResponse.cs` |
| `BenchmarkrateError` | `src/ApiVerve/Errors/BenchmarkrateError.cs` |

### Binlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Binlookup(BinlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Bin`
- **Query params (wire ← C#)**: `bin` ← `Bin`
- **Returns**: `V1BinlookupResponse`
- **Error**: `ApiException<BinlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BinlookupRequest` | `src/ApiVerve/Requests/Finance/BinlookupRequest.cs` |
| `V1BinlookupResponse` | `src/ApiVerve/Models/V1BinlookupResponse.cs` |
| `BinlookupError` | `src/ApiVerve/Errors/BinlookupError.cs` |

### Bitcoin

- **Auth**: `options.ApiKey`
- **Signature**: `Bitcoin(BitcoinRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `currency` ← `Currency`, `hourly` ← `Hourly`
- **Returns**: `V1BitcoinResponse`
- **Error**: `ApiException<BitcoinError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BitcoinRequest` | `src/ApiVerve/Requests/Finance/BitcoinRequest.cs` |
| `V1BitcoinResponse` | `src/ApiVerve/Models/V1BitcoinResponse.cs` |
| `BitcoinError` | `src/ApiVerve/Errors/BitcoinError.cs` |

### Cashflow

- **Auth**: `options.ApiKey`
- **Signature**: `Cashflow(CashflowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`, `year` ← `Year`, `quarter` ← `Quarter`
- **Returns**: `V1CashflowResponse`
- **Error**: `ApiException<CashflowError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CashflowRequest` | `src/ApiVerve/Requests/Finance/CashflowRequest.cs` |
| `V1CashflowResponse` | `src/ApiVerve/Models/V1CashflowResponse.cs` |
| `CashflowError` | `src/ApiVerve/Errors/CashflowError.cs` |

### Companylookup

- **Auth**: `options.ApiKey`
- **Signature**: `Companylookup(CompanylookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`
- **Returns**: `V1CompanylookupResponse`
- **Error**: `ApiException<CompanylookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CompanylookupRequest` | `src/ApiVerve/Requests/Finance/CompanylookupRequest.cs` |
| `V1CompanylookupResponse` | `src/ApiVerve/Models/V1CompanylookupResponse.cs` |
| `CompanylookupError` | `src/ApiVerve/Errors/CompanylookupError.cs` |

### Costliving

- **Auth**: `options.ApiKey`
- **Signature**: `Costliving(CostlivingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Location`
- **Query params (wire ← C#)**: `location` ← `Location`
- **Returns**: `V1CostlivingResponse`
- **Error**: `ApiException<CostlivingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CostlivingRequest` | `src/ApiVerve/Requests/Finance/CostlivingRequest.cs` |
| `V1CostlivingResponse` | `src/ApiVerve/Models/V1CostlivingResponse.cs` |
| `CostlivingError` | `src/ApiVerve/Errors/CostlivingError.cs` |

### Cpiinflation

- **Auth**: `options.ApiKey`
- **Signature**: `Cpiinflation(CpiinflationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`, `category` ← `Category`
- **Returns**: `V1CpiinflationResponse`
- **Error**: `ApiException<CpiinflationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CpiinflationRequest` | `src/ApiVerve/Requests/Finance/CpiinflationRequest.cs` |
| `V1CpiinflationResponse` | `src/ApiVerve/Models/V1CpiinflationResponse.cs` |
| `CpiinflationError` | `src/ApiVerve/Errors/CpiinflationError.cs` |

### Currencyconverter

- **Auth**: `options.ApiKey`
- **Signature**: `Currencyconverter(CurrencyconverterRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Value`, `From`, `To`
- **Query params (wire ← C#)**: `value` ← `Value`, `from` ← `From`, `to` ← `To`
- **Returns**: `V1CurrencyconverterResponse`
- **Error**: `ApiException<CurrencyconverterError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CurrencyconverterRequest` | `src/ApiVerve/Requests/Finance/CurrencyconverterRequest.cs` |
| `V1CurrencyconverterResponse` | `src/ApiVerve/Models/V1CurrencyconverterResponse.cs` |
| `CurrencyconverterError` | `src/ApiVerve/Errors/CurrencyconverterError.cs` |

### Currencysymbols

- **Auth**: `options.ApiKey`
- **Signature**: `Currencysymbols(CurrencysymbolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Currency`
- **Query params (wire ← C#)**: `currency` ← `Currency`
- **Returns**: `V1CurrencysymbolsResponse`
- **Error**: `ApiException<CurrencysymbolsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CurrencysymbolsRequest` | `src/ApiVerve/Requests/Finance/CurrencysymbolsRequest.cs` |
| `V1CurrencysymbolsResponse` | `src/ApiVerve/Models/V1CurrencysymbolsResponse.cs` |
| `CurrencysymbolsError` | `src/ApiVerve/Errors/CurrencysymbolsError.cs` |

### Dividends

- **Auth**: `options.ApiKey`
- **Signature**: `Dividends(DividendsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`, `period` ← `Period`, `limit` ← `Limit`
- **Returns**: `V1DividendsResponse`
- **Error**: `ApiException<DividendsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DividendsRequest` | `src/ApiVerve/Requests/Finance/DividendsRequest.cs` |
| `V1DividendsResponse` | `src/ApiVerve/Models/V1DividendsResponse.cs` |
| `DividendsError` | `src/ApiVerve/Errors/DividendsError.cs` |

### Earnings

- **Auth**: `options.ApiKey`
- **Signature**: `Earnings(EarningsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`, `year` ← `Year`, `quarter` ← `Quarter`
- **Returns**: `V1EarningsResponse`
- **Error**: `ApiException<EarningsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EarningsRequest` | `src/ApiVerve/Requests/Finance/EarningsRequest.cs` |
| `V1EarningsResponse` | `src/ApiVerve/Models/V1EarningsResponse.cs` |
| `EarningsError` | `src/ApiVerve/Errors/EarningsError.cs` |

### Ethereum

- **Auth**: `options.ApiKey`
- **Signature**: `Ethereum(EthereumRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `currency` ← `Currency`, `hourly` ← `Hourly`, `hourly[].hour` ← `HourlyHour`, `hourly[].price` ← `HourlyPrice`, `hourly[].timestamp` ← `HourlyTimestamp`
- **Returns**: `V1EthereumResponse`
- **Error**: `ApiException<EthereumError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EthereumRequest` | `src/ApiVerve/Requests/Finance/EthereumRequest.cs` |
| `V1EthereumResponse` | `src/ApiVerve/Models/V1EthereumResponse.cs` |
| `EthereumError` | `src/ApiVerve/Errors/EthereumError.cs` |

### Exchangerate

- **Auth**: `options.ApiKey`
- **Signature**: `Exchangerate(ExchangerateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Currency1`, `Currency2`
- **Query params (wire ← C#)**: `currency1` ← `Currency1`, `currency2` ← `Currency2`
- **Returns**: `V1ExchangerateResponse`
- **Error**: `ApiException<ExchangerateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExchangerateRequest` | `src/ApiVerve/Requests/Finance/ExchangerateRequest.cs` |
| `V1ExchangerateResponse` | `src/ApiVerve/Models/V1ExchangerateResponse.cs` |
| `ExchangerateError` | `src/ApiVerve/Errors/ExchangerateError.cs` |

### Financialratios

- **Auth**: `options.ApiKey`
- **Signature**: `Financialratios(FinancialratiosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`, `year` ← `Year`, `quarter` ← `Quarter`
- **Returns**: `V1FinancialratiosResponse`
- **Error**: `ApiException<FinancialratiosError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `FinancialratiosRequest` | `src/ApiVerve/Requests/Finance/FinancialratiosRequest.cs` |
| `V1FinancialratiosResponse` | `src/ApiVerve/Models/V1FinancialratiosResponse.cs` |
| `FinancialratiosError` | `src/ApiVerve/Errors/FinancialratiosError.cs` |

### Gdp

- **Auth**: `options.ApiKey`
- **Signature**: `Gdp(GdpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `year` ← `Year`
- **Returns**: `V1GdpResponse`
- **Error**: `ApiException<GdpError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GdpRequest` | `src/ApiVerve/Requests/Finance/GdpRequest.cs` |
| `V1GdpResponse` | `src/ApiVerve/Models/V1GdpResponse.cs` |
| `GdpError` | `src/ApiVerve/Errors/GdpError.cs` |

### Globalstockmarket

- **Auth**: `options.ApiKey`
- **Signature**: `Globalstockmarket(GlobalstockmarketRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `year` ← `Year`, `month` ← `Month`
- **Returns**: `V1GlobalstockmarketResponse`
- **Error**: `ApiException<GlobalstockmarketError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GlobalstockmarketRequest` | `src/ApiVerve/Requests/Finance/GlobalstockmarketRequest.cs` |
| `V1GlobalstockmarketResponse` | `src/ApiVerve/Models/V1GlobalstockmarketResponse.cs` |
| `GlobalstockmarketError` | `src/ApiVerve/Errors/GlobalstockmarketError.cs` |

### Goldprice

- **Auth**: `options.ApiKey`
- **Signature**: `Goldprice(GoldpriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `currency` ← `Currency`, `hourly` ← `Hourly`, `hourly[].hour` ← `HourlyHour`, `hourly[].price` ← `HourlyPrice`, `hourly[].timestamp` ← `HourlyTimestamp`
- **Returns**: `V1GoldpriceResponse`
- **Error**: `ApiException<GoldpriceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GoldpriceRequest` | `src/ApiVerve/Requests/Finance/GoldpriceRequest.cs` |
| `V1GoldpriceResponse` | `src/ApiVerve/Models/V1GoldpriceResponse.cs` |
| `GoldpriceError` | `src/ApiVerve/Errors/GoldpriceError.cs` |

### Ifsclookup

- **Auth**: `options.ApiKey`
- **Signature**: `Ifsclookup(IfsclookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ifsc`
- **Query params (wire ← C#)**: `ifsc` ← `Ifsc`
- **Returns**: `V1IfsclookupResponse`
- **Error**: `ApiException<IfsclookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IfsclookupRequest` | `src/ApiVerve/Requests/Finance/IfsclookupRequest.cs` |
| `V1IfsclookupResponse` | `src/ApiVerve/Models/V1IfsclookupResponse.cs` |
| `IfsclookupError` | `src/ApiVerve/Errors/IfsclookupError.cs` |

### Incomestatement

- **Auth**: `options.ApiKey`
- **Signature**: `Incomestatement(IncomestatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`, `year` ← `Year`, `quarter` ← `Quarter`
- **Returns**: `V1IncomestatementResponse`
- **Error**: `ApiException<IncomestatementError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IncomestatementRequest` | `src/ApiVerve/Requests/Finance/IncomestatementRequest.cs` |
| `V1IncomestatementResponse` | `src/ApiVerve/Models/V1IncomestatementResponse.cs` |
| `IncomestatementError` | `src/ApiVerve/Errors/IncomestatementError.cs` |

### Incometax

- **Auth**: `options.ApiKey`
- **Signature**: `Incometax(IncometaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `year` ← `Year`
- **Returns**: `V1IncometaxResponse`
- **Error**: `ApiException<IncometaxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IncometaxRequest` | `src/ApiVerve/Requests/Finance/IncometaxRequest.cs` |
| `V1IncometaxResponse` | `src/ApiVerve/Models/V1IncometaxResponse.cs` |
| `IncometaxError` | `src/ApiVerve/Errors/IncometaxError.cs` |

### Incometaxcalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Incometaxcalculator(IncometaxcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Income`, `Rate`
- **Query params (wire ← C#)**: `income` ← `Income`, `rate` ← `Rate`, `deduction` ← `Deduction`
- **Returns**: `V1IncometaxcalculatorResponse`
- **Error**: `ApiException<IncometaxcalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `IncometaxcalculatorRequest` | `src/ApiVerve/Requests/Finance/IncometaxcalculatorRequest.cs` |
| `V1IncometaxcalculatorResponse` | `src/ApiVerve/Models/V1IncometaxcalculatorResponse.cs` |
| `IncometaxcalculatorError` | `src/ApiVerve/Errors/IncometaxcalculatorError.cs` |

### Inflation

- **Auth**: `options.ApiKey`
- **Signature**: `Inflation(InflationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `year` ← `Year`
- **Returns**: `V1InflationResponse`
- **Error**: `ApiException<InflationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InflationRequest` | `src/ApiVerve/Requests/Finance/InflationRequest.cs` |
| `V1InflationResponse` | `src/ApiVerve/Models/V1InflationResponse.cs` |
| `InflationError` | `src/ApiVerve/Errors/InflationError.cs` |

### Insidertrading

- **Auth**: `options.ApiKey`
- **Signature**: `Insidertrading(InsidertradingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`, `type` ← `Type`, `limit` ← `Limit`
- **Returns**: `V1InsidertradingResponse`
- **Error**: `ApiException<InsidertradingError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InsidertradingRequest` | `src/ApiVerve/Requests/Finance/InsidertradingRequest.cs` |
| `V1InsidertradingResponse` | `src/ApiVerve/Models/V1InsidertradingResponse.cs` |
| `InsidertradingError` | `src/ApiVerve/Errors/InsidertradingError.cs` |

### Interestrate

- **Auth**: `options.ApiKey`
- **Signature**: `Interestrate(InterestrateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `date` ← `Date`
- **Returns**: `V1InterestrateResponse`
- **Error**: `ApiException<InterestrateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `InterestrateRequest` | `src/ApiVerve/Requests/Finance/InterestrateRequest.cs` |
| `V1InterestrateResponse` | `src/ApiVerve/Models/V1InterestrateResponse.cs` |
| `InterestrateError` | `src/ApiVerve/Errors/InterestrateError.cs` |

### Jobsreport

- **Auth**: `options.ApiKey`
- **Signature**: `Jobsreport(JobsreportRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `V1JobsreportResponse`
- **Error**: `ApiException<JobsreportError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `JobsreportRequest` | `src/ApiVerve/Requests/Finance/JobsreportRequest.cs` |
| `V1JobsreportResponse` | `src/ApiVerve/Models/V1JobsreportResponse.cs` |
| `JobsreportError` | `src/ApiVerve/Errors/JobsreportError.cs` |

### Loanpaymentcalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Loanpaymentcalculator(LoanpaymentcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1LoanpaymentcalculatorResponse`
- **Error**: `ApiException<LoanpaymentcalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LoanpaymentcalculatorRequest` | `src/ApiVerve/Requests/Finance/LoanpaymentcalculatorRequest.cs` |
| `V1LoanpaymentcalculatorRequest` | `src/ApiVerve/Models/V1LoanpaymentcalculatorRequest.cs` |
| `V1LoanpaymentcalculatorResponse` | `src/ApiVerve/Models/V1LoanpaymentcalculatorResponse.cs` |
| `LoanpaymentcalculatorError` | `src/ApiVerve/Errors/LoanpaymentcalculatorError.cs` |

### Minimumwage

- **Auth**: `options.ApiKey`
- **Signature**: `Minimumwage(MinimumwageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `State`
- **Query params (wire ← C#)**: `state` ← `State`, `year` ← `Year`
- **Returns**: `V1MinimumwageResponse`
- **Error**: `ApiException<MinimumwageError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MinimumwageRequest` | `src/ApiVerve/Requests/Finance/MinimumwageRequest.cs` |
| `V1MinimumwageResponse` | `src/ApiVerve/Models/V1MinimumwageResponse.cs` |
| `MinimumwageError` | `src/ApiVerve/Errors/MinimumwageError.cs` |

### Mortgagecalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Mortgagecalculator(MortgagecalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1MortgagecalculatorResponse`
- **Error**: `ApiException<MortgagecalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MortgagecalculatorRequest` | `src/ApiVerve/Requests/Finance/MortgagecalculatorRequest.cs` |
| `V1MortgagecalculatorRequest` | `src/ApiVerve/Models/V1MortgagecalculatorRequest.cs` |
| `V1MortgagecalculatorResponse` | `src/ApiVerve/Models/V1MortgagecalculatorResponse.cs` |
| `MortgagecalculatorError` | `src/ApiVerve/Errors/MortgagecalculatorError.cs` |

### Mortgagerate

- **Auth**: `options.ApiKey`
- **Signature**: `Mortgagerate(MortgagerateRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Type`
- **Query params (wire ← C#)**: `type` ← `Type`, `year` ← `Year`, `month` ← `Month`
- **Returns**: `V1MortgagerateResponse`
- **Error**: `ApiException<MortgagerateError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MortgagerateRequest` | `src/ApiVerve/Requests/Finance/MortgagerateRequest.cs` |
| `V1MortgagerateResponse` | `src/ApiVerve/Models/V1MortgagerateResponse.cs` |
| `MortgagerateError` | `src/ApiVerve/Errors/MortgagerateError.cs` |

### Nationaldebt

- **Auth**: `options.ApiKey`
- **Signature**: `Nationaldebt(NationaldebtRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `V1NationaldebtResponse`
- **Error**: `ApiException<NationaldebtError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NationaldebtRequest` | `src/ApiVerve/Requests/Finance/NationaldebtRequest.cs` |
| `V1NationaldebtResponse` | `src/ApiVerve/Models/V1NationaldebtResponse.cs` |
| `NationaldebtError` | `src/ApiVerve/Errors/NationaldebtError.cs` |

### Palladiumprice

- **Auth**: `options.ApiKey`
- **Signature**: `Palladiumprice(PalladiumpriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `currency` ← `Currency`, `hourly` ← `Hourly`
- **Returns**: `V1PalladiumpriceResponse`
- **Error**: `ApiException<PalladiumpriceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PalladiumpriceRequest` | `src/ApiVerve/Requests/Finance/PalladiumpriceRequest.cs` |
| `V1PalladiumpriceResponse` | `src/ApiVerve/Models/V1PalladiumpriceResponse.cs` |
| `PalladiumpriceError` | `src/ApiVerve/Errors/PalladiumpriceError.cs` |

### Platinumprice

- **Auth**: `options.ApiKey`
- **Signature**: `Platinumprice(PlatinumpriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `currency` ← `Currency`, `hourly` ← `Hourly`
- **Returns**: `V1PlatinumpriceResponse`
- **Error**: `ApiException<PlatinumpriceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlatinumpriceRequest` | `src/ApiVerve/Requests/Finance/PlatinumpriceRequest.cs` |
| `V1PlatinumpriceResponse` | `src/ApiVerve/Models/V1PlatinumpriceResponse.cs` |
| `PlatinumpriceError` | `src/ApiVerve/Errors/PlatinumpriceError.cs` |

### Population

- **Auth**: `options.ApiKey`
- **Signature**: `Population(PopulationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `year` ← `Year`
- **Returns**: `V1PopulationResponse`
- **Error**: `ApiException<PopulationError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PopulationRequest` | `src/ApiVerve/Requests/Finance/PopulationRequest.cs` |
| `V1PopulationResponse` | `src/ApiVerve/Models/V1PopulationResponse.cs` |
| `PopulationError` | `src/ApiVerve/Errors/PopulationError.cs` |

### Purchasingpower

- **Auth**: `options.ApiKey`
- **Signature**: `Purchasingpower(PurchasingpowerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Amount`, `From`
- **Query params (wire ← C#)**: `amount` ← `Amount`, `from` ← `From`, `to` ← `To`
- **Returns**: `V1PurchasingpowerResponse`
- **Error**: `ApiException<PurchasingpowerError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PurchasingpowerRequest` | `src/ApiVerve/Requests/Finance/PurchasingpowerRequest.cs` |
| `V1PurchasingpowerResponse` | `src/ApiVerve/Models/V1PurchasingpowerResponse.cs` |
| `PurchasingpowerError` | `src/ApiVerve/Errors/PurchasingpowerError.cs` |

### Routinglookup

- **Auth**: `options.ApiKey`
- **Signature**: `Routinglookup(RoutinglookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Routing`
- **Query params (wire ← C#)**: `routing` ← `Routing`
- **Returns**: `V1RoutinglookupResponse`
- **Error**: `ApiException<RoutinglookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RoutinglookupRequest` | `src/ApiVerve/Requests/Finance/RoutinglookupRequest.cs` |
| `V1RoutinglookupResponse` | `src/ApiVerve/Models/V1RoutinglookupResponse.cs` |
| `RoutinglookupError` | `src/ApiVerve/Errors/RoutinglookupError.cs` |

### Salestax

- **Auth**: `options.ApiKey`
- **Signature**: `Salestax(SalestaxRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Zip`
- **Query params (wire ← C#)**: `zip` ← `Zip`
- **Returns**: `V1SalestaxResponse`
- **Error**: `ApiException<SalestaxError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SalestaxRequest` | `src/ApiVerve/Requests/Finance/SalestaxRequest.cs` |
| `V1SalestaxResponse` | `src/ApiVerve/Models/V1SalestaxResponse.cs` |
| `SalestaxError` | `src/ApiVerve/Errors/SalestaxError.cs` |

### Salestaxcalculator

- **Auth**: `options.ApiKey`
- **Signature**: `Salestaxcalculator(SalestaxcalculatorRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Amount`
- **Query params (wire ← C#)**: `amount` ← `Amount`, `zip` ← `Zip`, `state` ← `State`
- **Returns**: `V1SalestaxcalculatorResponse`
- **Error**: `ApiException<SalestaxcalculatorError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SalestaxcalculatorRequest` | `src/ApiVerve/Requests/Finance/SalestaxcalculatorRequest.cs` |
| `V1SalestaxcalculatorResponse` | `src/ApiVerve/Models/V1SalestaxcalculatorResponse.cs` |
| `SalestaxcalculatorError` | `src/ApiVerve/Errors/SalestaxcalculatorError.cs` |

### Sanctionscreening

- **Auth**: `options.ApiKey`
- **Signature**: `Sanctionscreening(SanctionscreeningRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Name`
- **Query params (wire ← C#)**: `name` ← `Name`, `threshold` ← `Threshold`, `limit` ← `Limit`, `type` ← `Type`
- **Returns**: `V1SanctionscreeningResponse`
- **Error**: `ApiException<SanctionscreeningError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SanctionscreeningRequest` | `src/ApiVerve/Requests/Finance/SanctionscreeningRequest.cs` |
| `V1SanctionscreeningResponse` | `src/ApiVerve/Models/V1SanctionscreeningResponse.cs` |
| `SanctionscreeningError` | `src/ApiVerve/Errors/SanctionscreeningError.cs` |

### Savingsbonds

- **Auth**: `options.ApiKey`
- **Signature**: `Savingsbonds(SavingsbondsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `period` ← `Period`
- **Returns**: `V1SavingsbondsResponse`
- **Error**: `ApiException<SavingsbondsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SavingsbondsRequest` | `src/ApiVerve/Requests/Finance/SavingsbondsRequest.cs` |
| `V1SavingsbondsResponse` | `src/ApiVerve/Models/V1SavingsbondsResponse.cs` |
| `SavingsbondsError` | `src/ApiVerve/Errors/SavingsbondsError.cs` |

### Secfilings

- **Auth**: `options.ApiKey`
- **Signature**: `Secfilings(SecfilingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Ticker`
- **Query params (wire ← C#)**: `ticker` ← `Ticker`, `form` ← `Form`, `limit` ← `Limit`
- **Returns**: `V1SecfilingsResponse`
- **Error**: `ApiException<SecfilingsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SecfilingsRequest` | `src/ApiVerve/Requests/Finance/SecfilingsRequest.cs` |
| `V1SecfilingsResponse` | `src/ApiVerve/Models/V1SecfilingsResponse.cs` |
| `SecfilingsError` | `src/ApiVerve/Errors/SecfilingsError.cs` |

### Silverprice

- **Auth**: `options.ApiKey`
- **Signature**: `Silverprice(SilverpriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `currency` ← `Currency`, `hourly` ← `Hourly`
- **Returns**: `V1SilverpriceResponse`
- **Error**: `ApiException<SilverpriceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SilverpriceRequest` | `src/ApiVerve/Requests/Finance/SilverpriceRequest.cs` |
| `V1SilverpriceResponse` | `src/ApiVerve/Models/V1SilverpriceResponse.cs` |
| `SilverpriceError` | `src/ApiVerve/Errors/SilverpriceError.cs` |

### Stockexchange

- **Auth**: `options.ApiKey`
- **Signature**: `Stockexchange(StockexchangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Mic`
- **Query params (wire ← C#)**: `mic` ← `Mic`
- **Returns**: `V1StockexchangeResponse`
- **Error**: `ApiException<StockexchangeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StockexchangeRequest` | `src/ApiVerve/Requests/Finance/StockexchangeRequest.cs` |
| `V1StockexchangeResponse` | `src/ApiVerve/Models/V1StockexchangeResponse.cs` |
| `StockexchangeError` | `src/ApiVerve/Errors/StockexchangeError.cs` |

### Stockmarketopentimes

- **Auth**: `options.ApiKey`
- **Signature**: `Stockmarketopentimes(StockmarketopentimesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Exchange`
- **Query params (wire ← C#)**: `exchange` ← `Exchange`
- **Returns**: `V1StockmarketopentimesResponse`
- **Error**: `ApiException<StockmarketopentimesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StockmarketopentimesRequest` | `src/ApiVerve/Requests/Finance/StockmarketopentimesRequest.cs` |
| `V1StockmarketopentimesResponse` | `src/ApiVerve/Models/V1StockmarketopentimesResponse.cs` |
| `StockmarketopentimesError` | `src/ApiVerve/Errors/StockmarketopentimesError.cs` |

### Swiftlookup

- **Auth**: `options.ApiKey`
- **Signature**: `Swiftlookup(SwiftlookupRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Swift`
- **Query params (wire ← C#)**: `swift` ← `Swift`
- **Returns**: `V1SwiftlookupResponse`
- **Error**: `ApiException<SwiftlookupError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SwiftlookupRequest` | `src/ApiVerve/Requests/Finance/SwiftlookupRequest.cs` |
| `V1SwiftlookupResponse` | `src/ApiVerve/Models/V1SwiftlookupResponse.cs` |
| `SwiftlookupError` | `src/ApiVerve/Errors/SwiftlookupError.cs` |

### Tradebalance

- **Auth**: `options.ApiKey`
- **Signature**: `Tradebalance(TradebalanceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`
- **Returns**: `V1TradebalanceResponse`
- **Error**: `ApiException<TradebalanceError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TradebalanceRequest` | `src/ApiVerve/Requests/Finance/TradebalanceRequest.cs` |
| `V1TradebalanceResponse` | `src/ApiVerve/Models/V1TradebalanceResponse.cs` |
| `TradebalanceError` | `src/ApiVerve/Errors/TradebalanceError.cs` |

### Treasuryyields

- **Auth**: `options.ApiKey`
- **Signature**: `Treasuryyields(TreasuryyieldsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date` ← `Date`, `type` ← `Type`
- **Returns**: `V1TreasuryyieldsResponse`
- **Error**: `ApiException<TreasuryyieldsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TreasuryyieldsRequest` | `src/ApiVerve/Requests/Finance/TreasuryyieldsRequest.cs` |
| `V1TreasuryyieldsResponse` | `src/ApiVerve/Models/V1TreasuryyieldsResponse.cs` |
| `TreasuryyieldsError` | `src/ApiVerve/Errors/TreasuryyieldsError.cs` |

### Unemployment

- **Auth**: `options.ApiKey`
- **Signature**: `Unemployment(UnemploymentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `year` ← `Year`
- **Returns**: `V1UnemploymentResponse`
- **Error**: `ApiException<UnemploymentError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UnemploymentRequest` | `src/ApiVerve/Requests/Finance/UnemploymentRequest.cs` |
| `V1UnemploymentResponse` | `src/ApiVerve/Models/V1UnemploymentResponse.cs` |
| `UnemploymentError` | `src/ApiVerve/Errors/UnemploymentError.cs` |

### Vatrates

- **Auth**: `options.ApiKey`
- **Signature**: `Vatrates(VatratesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Country`
- **Query params (wire ← C#)**: `country` ← `Country`, `date` ← `Date`, `postcode` ← `Postcode`
- **Returns**: `V1VatratesResponse`
- **Error**: `ApiException<VatratesError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VatratesRequest` | `src/ApiVerve/Requests/Finance/VatratesRequest.cs` |
| `V1VatratesResponse` | `src/ApiVerve/Models/V1VatratesResponse.cs` |
| `VatratesError` | `src/ApiVerve/Errors/VatratesError.cs` |

