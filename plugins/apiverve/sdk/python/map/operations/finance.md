<!-- Generated file — do not edit; regenerated with the SDK. -->

# Finance — operations

Accessor: `client.finance` · Source: `api_verve/apis/finance.py` · 49 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.finance.balancesheet

- **Route**: `GET /v1/balancesheet`
- **Auth**: `api_key`
- **Signature**: `def balancesheet(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — query · `year` — query · `quarter` — query
- **Returns (parsed)**: `V1BalancesheetResponse`
- **Returns (raw)**: `ApiResult[V1BalancesheetResponse, BalancesheetErrorBody]`
- **Error**: `BalancesheetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BalancesheetResponse` | `api_verve/models/v1_balancesheet_response.py` |
| `BalancesheetErrorBody` | `api_verve/errors/balancesheet_error.py` |

### client.finance.benchmarkrate

- **Route**: `GET /v1/benchmarkrate`
- **Auth**: `api_key`
- **Signature**: `def benchmarkrate(rate: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `rate`
- **Params**: `rate` — query
- **Returns (parsed)**: `V1BenchmarkrateResponse`
- **Returns (raw)**: `ApiResult[V1BenchmarkrateResponse, BenchmarkrateErrorBody]`
- **Error**: `BenchmarkrateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BenchmarkrateResponse` | `api_verve/models/v1_benchmarkrate_response.py` |
| `BenchmarkrateErrorBody` | `api_verve/errors/benchmarkrate_error.py` |

### client.finance.binlookup

- **Route**: `GET /v1/binlookup`
- **Auth**: `api_key`
- **Signature**: `def binlookup(bin_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bin_`
- **Params**: `bin_` — query `bin`
- **Returns (parsed)**: `V1BinlookupResponse`
- **Returns (raw)**: `ApiResult[V1BinlookupResponse, BinlookupErrorBody]`
- **Error**: `BinlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BinlookupResponse` | `api_verve/models/v1_binlookup_response.py` |
| `BinlookupErrorBody` | `api_verve/errors/binlookup_error.py` |

### client.finance.bitcoin

- **Route**: `GET /v1/bitcoin`
- **Auth**: `api_key`
- **Signature**: `def bitcoin(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `currency` — query · `hourly` — query
- **Returns (parsed)**: `V1BitcoinResponse`
- **Returns (raw)**: `ApiResult[V1BitcoinResponse, BitcoinErrorBody]`
- **Error**: `BitcoinErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1BitcoinResponse` | `api_verve/models/v1_bitcoin_response.py` |
| `BitcoinErrorBody` | `api_verve/errors/bitcoin_error.py` |

### client.finance.cashflow

- **Route**: `GET /v1/cashflow`
- **Auth**: `api_key`
- **Signature**: `def cashflow(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — query · `year` — query · `quarter` — query
- **Returns (parsed)**: `V1CashflowResponse`
- **Returns (raw)**: `ApiResult[V1CashflowResponse, CashflowErrorBody]`
- **Error**: `CashflowErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CashflowResponse` | `api_verve/models/v1_cashflow_response.py` |
| `CashflowErrorBody` | `api_verve/errors/cashflow_error.py` |

### client.finance.companylookup

- **Route**: `GET /v1/companylookup`
- **Auth**: `api_key`
- **Signature**: `def companylookup(ticker: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — query
- **Returns (parsed)**: `V1CompanylookupResponse`
- **Returns (raw)**: `ApiResult[V1CompanylookupResponse, CompanylookupErrorBody]`
- **Error**: `CompanylookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CompanylookupResponse` | `api_verve/models/v1_companylookup_response.py` |
| `CompanylookupErrorBody` | `api_verve/errors/companylookup_error.py` |

### client.finance.costliving

- **Route**: `GET /v1/costliving`
- **Auth**: `api_key`
- **Signature**: `def costliving(location: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `location`
- **Params**: `location` — query
- **Returns (parsed)**: `V1CostlivingResponse`
- **Returns (raw)**: `ApiResult[V1CostlivingResponse, CostlivingErrorBody]`
- **Error**: `CostlivingErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CostlivingResponse` | `api_verve/models/v1_costliving_response.py` |
| `CostlivingErrorBody` | `api_verve/errors/costliving_error.py` |

### client.finance.cpiinflation

- **Route**: `GET /v1/cpiinflation`
- **Auth**: `api_key`
- **Signature**: `def cpiinflation(*, date: str | None = None, category: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query · `category` — query
- **Returns (parsed)**: `V1CpiinflationResponse`
- **Returns (raw)**: `ApiResult[V1CpiinflationResponse, CpiinflationErrorBody]`
- **Error**: `CpiinflationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CpiinflationResponse` | `api_verve/models/v1_cpiinflation_response.py` |
| `CpiinflationErrorBody` | `api_verve/errors/cpiinflation_error.py` |

### client.finance.currencyconverter

- **Route**: `GET /v1/currencyconverter`
- **Auth**: `api_key`
- **Signature**: `def currencyconverter(value: float, from_: str, to: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `value`, `from_`, `to`
- **Params**: `value` — query · `from_` — query `from` · `to` — query
- **Returns (parsed)**: `V1CurrencyconverterResponse`
- **Returns (raw)**: `ApiResult[V1CurrencyconverterResponse, CurrencyconverterErrorBody]`
- **Error**: `CurrencyconverterErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CurrencyconverterResponse` | `api_verve/models/v1_currencyconverter_response.py` |
| `CurrencyconverterErrorBody` | `api_verve/errors/currencyconverter_error.py` |

### client.finance.currencysymbols

- **Route**: `GET /v1/currencysymbols`
- **Auth**: `api_key`
- **Signature**: `def currencysymbols(currency: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `currency`
- **Params**: `currency` — query
- **Returns (parsed)**: `V1CurrencysymbolsResponse`
- **Returns (raw)**: `ApiResult[V1CurrencysymbolsResponse, CurrencysymbolsErrorBody]`
- **Error**: `CurrencysymbolsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1CurrencysymbolsResponse` | `api_verve/models/v1_currencysymbols_response.py` |
| `CurrencysymbolsErrorBody` | `api_verve/errors/currencysymbols_error.py` |

### client.finance.dividends

- **Route**: `GET /v1/dividends`
- **Auth**: `api_key`
- **Signature**: `def dividends(ticker: str, *, period: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — query · `period` — query · `limit` — query
- **Returns (parsed)**: `V1DividendsResponse`
- **Returns (raw)**: `ApiResult[V1DividendsResponse, DividendsErrorBody]`
- **Error**: `DividendsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1DividendsResponse` | `api_verve/models/v1_dividends_response.py` |
| `DividendsErrorBody` | `api_verve/errors/dividends_error.py` |

### client.finance.earnings

- **Route**: `GET /v1/earnings`
- **Auth**: `api_key`
- **Signature**: `def earnings(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — query · `year` — query · `quarter` — query
- **Returns (parsed)**: `V1EarningsResponse`
- **Returns (raw)**: `ApiResult[V1EarningsResponse, EarningsErrorBody]`
- **Error**: `EarningsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1EarningsResponse` | `api_verve/models/v1_earnings_response.py` |
| `EarningsErrorBody` | `api_verve/errors/earnings_error.py` |

### client.finance.ethereum

- **Route**: `GET /v1/ethereum`
- **Auth**: `api_key`
- **Signature**: `def ethereum(*, currency: str | None = None, hourly: bool | None = None, hourly_hour: float | None = None, hourly_price: float | None = None, hourly_timestamp: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `currency` — query · `hourly` — query · `hourly_hour` — query `hourly[].hour` · `hourly_price` — query `hourly[].price` · `hourly_timestamp` — query `hourly[].timestamp`
- **Returns (parsed)**: `V1EthereumResponse`
- **Returns (raw)**: `ApiResult[V1EthereumResponse, EthereumErrorBody]`
- **Error**: `EthereumErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1EthereumResponse` | `api_verve/models/v1_ethereum_response.py` |
| `EthereumErrorBody` | `api_verve/errors/ethereum_error.py` |

### client.finance.exchangerate

- **Route**: `GET /v1/exchangerate`
- **Auth**: `api_key`
- **Signature**: `def exchangerate(currency1: str, currency2: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `currency1`, `currency2`
- **Params**: `currency1` — query · `currency2` — query
- **Returns (parsed)**: `V1ExchangerateResponse`
- **Returns (raw)**: `ApiResult[V1ExchangerateResponse, ExchangerateErrorBody]`
- **Error**: `ExchangerateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ExchangerateResponse` | `api_verve/models/v1_exchangerate_response.py` |
| `ExchangerateErrorBody` | `api_verve/errors/exchangerate_error.py` |

### client.finance.financialratios

- **Route**: `GET /v1/financialratios`
- **Auth**: `api_key`
- **Signature**: `def financialratios(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — query · `year` — query · `quarter` — query
- **Returns (parsed)**: `V1FinancialratiosResponse`
- **Returns (raw)**: `ApiResult[V1FinancialratiosResponse, FinancialratiosErrorBody]`
- **Error**: `FinancialratiosErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1FinancialratiosResponse` | `api_verve/models/v1_financialratios_response.py` |
| `FinancialratiosErrorBody` | `api_verve/errors/financialratios_error.py` |

### client.finance.gdp

- **Route**: `GET /v1/gdp`
- **Auth**: `api_key`
- **Signature**: `def gdp(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `year` — query
- **Returns (parsed)**: `V1GdpResponse`
- **Returns (raw)**: `ApiResult[V1GdpResponse, GdpErrorBody]`
- **Error**: `GdpErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1GdpResponse` | `api_verve/models/v1_gdp_response.py` |
| `GdpErrorBody` | `api_verve/errors/gdp_error.py` |

### client.finance.globalstockmarket

- **Route**: `GET /v1/globalstockmarket`
- **Auth**: `api_key`
- **Signature**: `def globalstockmarket(country: str, *, year: int | None = None, month: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `year` — query · `month` — query
- **Returns (parsed)**: `V1GlobalstockmarketResponse`
- **Returns (raw)**: `ApiResult[V1GlobalstockmarketResponse, GlobalstockmarketErrorBody]`
- **Error**: `GlobalstockmarketErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1GlobalstockmarketResponse` | `api_verve/models/v1_globalstockmarket_response.py` |
| `GlobalstockmarketErrorBody` | `api_verve/errors/globalstockmarket_error.py` |

### client.finance.goldprice

- **Route**: `GET /v1/goldprice`
- **Auth**: `api_key`
- **Signature**: `def goldprice(*, currency: str | None = None, hourly: bool | None = None, hourly_hour: float | None = None, hourly_price: float | None = None, hourly_timestamp: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `currency` — query · `hourly` — query · `hourly_hour` — query `hourly[].hour` · `hourly_price` — query `hourly[].price` · `hourly_timestamp` — query `hourly[].timestamp`
- **Returns (parsed)**: `V1GoldpriceResponse`
- **Returns (raw)**: `ApiResult[V1GoldpriceResponse, GoldpriceErrorBody]`
- **Error**: `GoldpriceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1GoldpriceResponse` | `api_verve/models/v1_goldprice_response.py` |
| `GoldpriceErrorBody` | `api_verve/errors/goldprice_error.py` |

### client.finance.ifsclookup

- **Route**: `GET /v1/ifsclookup`
- **Auth**: `api_key`
- **Signature**: `def ifsclookup(ifsc: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ifsc`
- **Params**: `ifsc` — query
- **Returns (parsed)**: `V1IfsclookupResponse`
- **Returns (raw)**: `ApiResult[V1IfsclookupResponse, IfsclookupErrorBody]`
- **Error**: `IfsclookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1IfsclookupResponse` | `api_verve/models/v1_ifsclookup_response.py` |
| `IfsclookupErrorBody` | `api_verve/errors/ifsclookup_error.py` |

### client.finance.incomestatement

- **Route**: `GET /v1/incomestatement`
- **Auth**: `api_key`
- **Signature**: `def incomestatement(ticker: str, *, year: int | None = None, quarter: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — query · `year` — query · `quarter` — query
- **Returns (parsed)**: `V1IncomestatementResponse`
- **Returns (raw)**: `ApiResult[V1IncomestatementResponse, IncomestatementErrorBody]`
- **Error**: `IncomestatementErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1IncomestatementResponse` | `api_verve/models/v1_incomestatement_response.py` |
| `IncomestatementErrorBody` | `api_verve/errors/incomestatement_error.py` |

### client.finance.incometax

- **Route**: `GET /v1/incometax`
- **Auth**: `api_key`
- **Signature**: `def incometax(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `year` — query
- **Returns (parsed)**: `V1IncometaxResponse`
- **Returns (raw)**: `ApiResult[V1IncometaxResponse, IncometaxErrorBody]`
- **Error**: `IncometaxErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1IncometaxResponse` | `api_verve/models/v1_incometax_response.py` |
| `IncometaxErrorBody` | `api_verve/errors/incometax_error.py` |

### client.finance.incometaxcalculator

- **Route**: `GET /v1/incometaxcalculator`
- **Auth**: `api_key`
- **Signature**: `def incometaxcalculator(income: float, rate: float, *, deduction: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `income`, `rate`
- **Params**: `income` — query · `rate` — query · `deduction` — query
- **Returns (parsed)**: `V1IncometaxcalculatorResponse`
- **Returns (raw)**: `ApiResult[V1IncometaxcalculatorResponse, IncometaxcalculatorErrorBody]`
- **Error**: `IncometaxcalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1IncometaxcalculatorResponse` | `api_verve/models/v1_incometaxcalculator_response.py` |
| `IncometaxcalculatorErrorBody` | `api_verve/errors/incometaxcalculator_error.py` |

### client.finance.inflation

- **Route**: `GET /v1/inflation`
- **Auth**: `api_key`
- **Signature**: `def inflation(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `year` — query
- **Returns (parsed)**: `V1InflationResponse`
- **Returns (raw)**: `ApiResult[V1InflationResponse, InflationErrorBody]`
- **Error**: `InflationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1InflationResponse` | `api_verve/models/v1_inflation_response.py` |
| `InflationErrorBody` | `api_verve/errors/inflation_error.py` |

### client.finance.insidertrading

- **Route**: `GET /v1/insidertrading`
- **Auth**: `api_key`
- **Signature**: `def insidertrading(ticker: str, *, type_: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — query · `type_` — query `type` · `limit` — query
- **Returns (parsed)**: `V1InsidertradingResponse`
- **Returns (raw)**: `ApiResult[V1InsidertradingResponse, InsidertradingErrorBody]`
- **Error**: `InsidertradingErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1InsidertradingResponse` | `api_verve/models/v1_insidertrading_response.py` |
| `InsidertradingErrorBody` | `api_verve/errors/insidertrading_error.py` |

### client.finance.interestrate

- **Route**: `GET /v1/interestrate`
- **Auth**: `api_key`
- **Signature**: `def interestrate(country: str, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `date` — query
- **Returns (parsed)**: `V1InterestrateResponse`
- **Returns (raw)**: `ApiResult[V1InterestrateResponse, InterestrateErrorBody]`
- **Error**: `InterestrateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1InterestrateResponse` | `api_verve/models/v1_interestrate_response.py` |
| `InterestrateErrorBody` | `api_verve/errors/interestrate_error.py` |

### client.finance.jobsreport

- **Route**: `GET /v1/jobsreport`
- **Auth**: `api_key`
- **Signature**: `def jobsreport(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `V1JobsreportResponse`
- **Returns (raw)**: `ApiResult[V1JobsreportResponse, JobsreportErrorBody]`
- **Error**: `JobsreportErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1JobsreportResponse` | `api_verve/models/v1_jobsreport_response.py` |
| `JobsreportErrorBody` | `api_verve/errors/jobsreport_error.py` |

### client.finance.loanpaymentcalculator

- **Route**: `POST /v1/loanpaymentcalculator`
- **Auth**: `api_key`
- **Signature**: `def loanpaymentcalculator(body: V1LoanpaymentcalculatorRequest | V1LoanpaymentcalculatorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1LoanpaymentcalculatorResponse`
- **Returns (raw)**: `ApiResult[V1LoanpaymentcalculatorResponse, LoanpaymentcalculatorErrorBody]`
- **Error**: `LoanpaymentcalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LoanpaymentcalculatorRequest` | `api_verve/models/v1_loanpaymentcalculator_request.py` |
| `V1LoanpaymentcalculatorRequestDict` | `api_verve/models/v1_loanpaymentcalculator_request.py` |
| `V1LoanpaymentcalculatorResponse` | `api_verve/models/v1_loanpaymentcalculator_response.py` |
| `LoanpaymentcalculatorErrorBody` | `api_verve/errors/loanpaymentcalculator_error.py` |

### client.finance.minimumwage

- **Route**: `GET /v1/minimumwage`
- **Auth**: `api_key`
- **Signature**: `def minimumwage(state: str, *, year: float | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `state`
- **Params**: `state` — query · `year` — query
- **Returns (parsed)**: `V1MinimumwageResponse`
- **Returns (raw)**: `ApiResult[V1MinimumwageResponse, MinimumwageErrorBody]`
- **Error**: `MinimumwageErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MinimumwageResponse` | `api_verve/models/v1_minimumwage_response.py` |
| `MinimumwageErrorBody` | `api_verve/errors/minimumwage_error.py` |

### client.finance.mortgagecalculator

- **Route**: `POST /v1/mortgagecalculator`
- **Auth**: `api_key`
- **Signature**: `def mortgagecalculator(body: V1MortgagecalculatorRequest | V1MortgagecalculatorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1MortgagecalculatorResponse`
- **Returns (raw)**: `ApiResult[V1MortgagecalculatorResponse, MortgagecalculatorErrorBody]`
- **Error**: `MortgagecalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MortgagecalculatorRequest` | `api_verve/models/v1_mortgagecalculator_request.py` |
| `V1MortgagecalculatorRequestDict` | `api_verve/models/v1_mortgagecalculator_request.py` |
| `V1MortgagecalculatorResponse` | `api_verve/models/v1_mortgagecalculator_response.py` |
| `MortgagecalculatorErrorBody` | `api_verve/errors/mortgagecalculator_error.py` |

### client.finance.mortgagerate

- **Route**: `GET /v1/mortgagerate`
- **Auth**: `api_key`
- **Signature**: `def mortgagerate(type_: str, *, year: int | None = None, month: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `type_`
- **Params**: `type_` — query `type` · `year` — query · `month` — query
- **Returns (parsed)**: `V1MortgagerateResponse`
- **Returns (raw)**: `ApiResult[V1MortgagerateResponse, MortgagerateErrorBody]`
- **Error**: `MortgagerateErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MortgagerateResponse` | `api_verve/models/v1_mortgagerate_response.py` |
| `MortgagerateErrorBody` | `api_verve/errors/mortgagerate_error.py` |

### client.finance.nationaldebt

- **Route**: `GET /v1/nationaldebt`
- **Auth**: `api_key`
- **Signature**: `def nationaldebt(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `V1NationaldebtResponse`
- **Returns (raw)**: `ApiResult[V1NationaldebtResponse, NationaldebtErrorBody]`
- **Error**: `NationaldebtErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1NationaldebtResponse` | `api_verve/models/v1_nationaldebt_response.py` |
| `NationaldebtErrorBody` | `api_verve/errors/nationaldebt_error.py` |

### client.finance.palladiumprice

- **Route**: `GET /v1/palladiumprice`
- **Auth**: `api_key`
- **Signature**: `def palladiumprice(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `currency` — query · `hourly` — query
- **Returns (parsed)**: `V1PalladiumpriceResponse`
- **Returns (raw)**: `ApiResult[V1PalladiumpriceResponse, PalladiumpriceErrorBody]`
- **Error**: `PalladiumpriceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PalladiumpriceResponse` | `api_verve/models/v1_palladiumprice_response.py` |
| `PalladiumpriceErrorBody` | `api_verve/errors/palladiumprice_error.py` |

### client.finance.platinumprice

- **Route**: `GET /v1/platinumprice`
- **Auth**: `api_key`
- **Signature**: `def platinumprice(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `currency` — query · `hourly` — query
- **Returns (parsed)**: `V1PlatinumpriceResponse`
- **Returns (raw)**: `ApiResult[V1PlatinumpriceResponse, PlatinumpriceErrorBody]`
- **Error**: `PlatinumpriceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PlatinumpriceResponse` | `api_verve/models/v1_platinumprice_response.py` |
| `PlatinumpriceErrorBody` | `api_verve/errors/platinumprice_error.py` |

### client.finance.population

- **Route**: `GET /v1/population`
- **Auth**: `api_key`
- **Signature**: `def population(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `year` — query
- **Returns (parsed)**: `V1PopulationResponse`
- **Returns (raw)**: `ApiResult[V1PopulationResponse, PopulationErrorBody]`
- **Error**: `PopulationErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PopulationResponse` | `api_verve/models/v1_population_response.py` |
| `PopulationErrorBody` | `api_verve/errors/population_error.py` |

### client.finance.purchasingpower

- **Route**: `GET /v1/purchasingpower`
- **Auth**: `api_key`
- **Signature**: `def purchasingpower(amount: float, from_: str, *, to: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `amount`, `from_`
- **Params**: `amount` — query · `from_` — query `from` · `to` — query
- **Returns (parsed)**: `V1PurchasingpowerResponse`
- **Returns (raw)**: `ApiResult[V1PurchasingpowerResponse, PurchasingpowerErrorBody]`
- **Error**: `PurchasingpowerErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1PurchasingpowerResponse` | `api_verve/models/v1_purchasingpower_response.py` |
| `PurchasingpowerErrorBody` | `api_verve/errors/purchasingpower_error.py` |

### client.finance.routinglookup

- **Route**: `GET /v1/routinglookup`
- **Auth**: `api_key`
- **Signature**: `def routinglookup(routing: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `routing`
- **Params**: `routing` — query
- **Returns (parsed)**: `V1RoutinglookupResponse`
- **Returns (raw)**: `ApiResult[V1RoutinglookupResponse, RoutinglookupErrorBody]`
- **Error**: `RoutinglookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1RoutinglookupResponse` | `api_verve/models/v1_routinglookup_response.py` |
| `RoutinglookupErrorBody` | `api_verve/errors/routinglookup_error.py` |

### client.finance.salestax

- **Route**: `GET /v1/salestax`
- **Auth**: `api_key`
- **Signature**: `def salestax(zip_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `zip_`
- **Params**: `zip_` — query `zip`
- **Returns (parsed)**: `V1SalestaxResponse`
- **Returns (raw)**: `ApiResult[V1SalestaxResponse, SalestaxErrorBody]`
- **Error**: `SalestaxErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SalestaxResponse` | `api_verve/models/v1_salestax_response.py` |
| `SalestaxErrorBody` | `api_verve/errors/salestax_error.py` |

### client.finance.salestaxcalculator

- **Route**: `GET /v1/salestaxcalculator`
- **Auth**: `api_key`
- **Signature**: `def salestaxcalculator(amount: float, *, zip_: str | None = None, state: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `amount`
- **Params**: `amount` — query · `zip_` — query `zip` · `state` — query
- **Returns (parsed)**: `V1SalestaxcalculatorResponse`
- **Returns (raw)**: `ApiResult[V1SalestaxcalculatorResponse, SalestaxcalculatorErrorBody]`
- **Error**: `SalestaxcalculatorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SalestaxcalculatorResponse` | `api_verve/models/v1_salestaxcalculator_response.py` |
| `SalestaxcalculatorErrorBody` | `api_verve/errors/salestaxcalculator_error.py` |

### client.finance.sanctionscreening

- **Route**: `GET /v1/sanctionscreening`
- **Auth**: `api_key`
- **Signature**: `def sanctionscreening(name: str, *, threshold: float | None = None, limit: float | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `name`
- **Params**: `name` — query · `threshold` — query · `limit` — query · `type_` — query `type`
- **Returns (parsed)**: `V1SanctionscreeningResponse`
- **Returns (raw)**: `ApiResult[V1SanctionscreeningResponse, SanctionscreeningErrorBody]`
- **Error**: `SanctionscreeningErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SanctionscreeningResponse` | `api_verve/models/v1_sanctionscreening_response.py` |
| `SanctionscreeningErrorBody` | `api_verve/errors/sanctionscreening_error.py` |

### client.finance.savingsbonds

- **Route**: `GET /v1/savingsbonds`
- **Auth**: `api_key`
- **Signature**: `def savingsbonds(*, period: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `period` — query
- **Returns (parsed)**: `V1SavingsbondsResponse`
- **Returns (raw)**: `ApiResult[V1SavingsbondsResponse, SavingsbondsErrorBody]`
- **Error**: `SavingsbondsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SavingsbondsResponse` | `api_verve/models/v1_savingsbonds_response.py` |
| `SavingsbondsErrorBody` | `api_verve/errors/savingsbonds_error.py` |

### client.finance.secfilings

- **Route**: `GET /v1/secfilings`
- **Auth**: `api_key`
- **Signature**: `def secfilings(ticker: str, *, form: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ticker`
- **Params**: `ticker` — query · `form` — query · `limit` — query
- **Returns (parsed)**: `V1SecfilingsResponse`
- **Returns (raw)**: `ApiResult[V1SecfilingsResponse, SecfilingsErrorBody]`
- **Error**: `SecfilingsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SecfilingsResponse` | `api_verve/models/v1_secfilings_response.py` |
| `SecfilingsErrorBody` | `api_verve/errors/secfilings_error.py` |

### client.finance.silverprice

- **Route**: `GET /v1/silverprice`
- **Auth**: `api_key`
- **Signature**: `def silverprice(*, currency: str | None = None, hourly: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `currency` — query · `hourly` — query
- **Returns (parsed)**: `V1SilverpriceResponse`
- **Returns (raw)**: `ApiResult[V1SilverpriceResponse, SilverpriceErrorBody]`
- **Error**: `SilverpriceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SilverpriceResponse` | `api_verve/models/v1_silverprice_response.py` |
| `SilverpriceErrorBody` | `api_verve/errors/silverprice_error.py` |

### client.finance.stockexchange

- **Route**: `GET /v1/stockexchange`
- **Auth**: `api_key`
- **Signature**: `def stockexchange(mic: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `mic`
- **Params**: `mic` — query
- **Returns (parsed)**: `V1StockexchangeResponse`
- **Returns (raw)**: `ApiResult[V1StockexchangeResponse, StockexchangeErrorBody]`
- **Error**: `StockexchangeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1StockexchangeResponse` | `api_verve/models/v1_stockexchange_response.py` |
| `StockexchangeErrorBody` | `api_verve/errors/stockexchange_error.py` |

### client.finance.stockmarketopentimes

- **Route**: `GET /v1/stockmarketopentimes`
- **Auth**: `api_key`
- **Signature**: `def stockmarketopentimes(exchange: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `exchange`
- **Params**: `exchange` — query
- **Returns (parsed)**: `V1StockmarketopentimesResponse`
- **Returns (raw)**: `ApiResult[V1StockmarketopentimesResponse, StockmarketopentimesErrorBody]`
- **Error**: `StockmarketopentimesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1StockmarketopentimesResponse` | `api_verve/models/v1_stockmarketopentimes_response.py` |
| `StockmarketopentimesErrorBody` | `api_verve/errors/stockmarketopentimes_error.py` |

### client.finance.swiftlookup

- **Route**: `GET /v1/swiftlookup`
- **Auth**: `api_key`
- **Signature**: `def swiftlookup(swift: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `swift`
- **Params**: `swift` — query
- **Returns (parsed)**: `V1SwiftlookupResponse`
- **Returns (raw)**: `ApiResult[V1SwiftlookupResponse, SwiftlookupErrorBody]`
- **Error**: `SwiftlookupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SwiftlookupResponse` | `api_verve/models/v1_swiftlookup_response.py` |
| `SwiftlookupErrorBody` | `api_verve/errors/swiftlookup_error.py` |

### client.finance.tradebalance

- **Route**: `GET /v1/tradebalance`
- **Auth**: `api_key`
- **Signature**: `def tradebalance(*, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query
- **Returns (parsed)**: `V1TradebalanceResponse`
- **Returns (raw)**: `ApiResult[V1TradebalanceResponse, TradebalanceErrorBody]`
- **Error**: `TradebalanceErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TradebalanceResponse` | `api_verve/models/v1_tradebalance_response.py` |
| `TradebalanceErrorBody` | `api_verve/errors/tradebalance_error.py` |

### client.finance.treasuryyields

- **Route**: `GET /v1/treasuryyields`
- **Auth**: `api_key`
- **Signature**: `def treasuryyields(*, date: str | None = None, type_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date` — query · `type_` — query `type`
- **Returns (parsed)**: `V1TreasuryyieldsResponse`
- **Returns (raw)**: `ApiResult[V1TreasuryyieldsResponse, TreasuryyieldsErrorBody]`
- **Error**: `TreasuryyieldsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1TreasuryyieldsResponse` | `api_verve/models/v1_treasuryyields_response.py` |
| `TreasuryyieldsErrorBody` | `api_verve/errors/treasuryyields_error.py` |

### client.finance.unemployment

- **Route**: `GET /v1/unemployment`
- **Auth**: `api_key`
- **Signature**: `def unemployment(country: str, *, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `year` — query
- **Returns (parsed)**: `V1UnemploymentResponse`
- **Returns (raw)**: `ApiResult[V1UnemploymentResponse, UnemploymentErrorBody]`
- **Error**: `UnemploymentErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1UnemploymentResponse` | `api_verve/models/v1_unemployment_response.py` |
| `UnemploymentErrorBody` | `api_verve/errors/unemployment_error.py` |

### client.finance.vatrates

- **Route**: `GET /v1/vatrates`
- **Auth**: `api_key`
- **Signature**: `def vatrates(country: str, *, date: str | None = None, postcode: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `country`
- **Params**: `country` — query · `date` — query · `postcode` — query
- **Returns (parsed)**: `V1VatratesResponse`
- **Returns (raw)**: `ApiResult[V1VatratesResponse, VatratesErrorBody]`
- **Error**: `VatratesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1VatratesResponse` | `api_verve/models/v1_vatrates_response.py` |
| `VatratesErrorBody` | `api_verve/errors/vatrates_error.py` |

