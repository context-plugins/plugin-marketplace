<!-- Generated file — do not edit; regenerated with the SDK. -->

# Finance — operations

Accessor: `client.finance` · Source: `src/resources/finance.ts` · 49 operations · Request and error types: namespace `Finance`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### balancesheet

- **Signature**: `balancesheet(request: Finance.BalancesheetRequest, options?: RequestOptions): ApiPromise<V1BalancesheetResponse, Finance.BalancesheetError>`
- **Wire**: `GET /v1/balancesheet`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BalancesheetResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.BalancesheetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.BalancesheetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `query` | `string` | yes |
| `year` | `query` | `number` | no |
| `quarter` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BalancesheetResponse` | `v1BalancesheetResponseSchema` | `src/models/v1-balancesheet-response.ts` |

### benchmarkrate

- **Signature**: `benchmarkrate(request: Finance.BenchmarkrateRequest, options?: RequestOptions): ApiPromise<V1BenchmarkrateResponse, Finance.BenchmarkrateError>`
- **Wire**: `GET /v1/benchmarkrate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BenchmarkrateResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.BenchmarkrateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.BenchmarkrateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `rate` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BenchmarkrateResponse` | `v1BenchmarkrateResponseSchema` | `src/models/v1-benchmarkrate-response.ts` |

### binlookup

- **Signature**: `binlookup(request: Finance.BinlookupRequest, options?: RequestOptions): ApiPromise<V1BinlookupResponse, Finance.BinlookupError>`
- **Wire**: `GET /v1/binlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BinlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.BinlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.BinlookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `bin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BinlookupResponse` | `v1BinlookupResponseSchema` | `src/models/v1-binlookup-response.ts` |

### bitcoin

- **Signature**: `bitcoin(request?: Finance.BitcoinRequest, options?: RequestOptions): ApiPromise<V1BitcoinResponse, Finance.BitcoinError>`
- **Wire**: `GET /v1/bitcoin`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1BitcoinResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.BitcoinError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.BitcoinRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `currency` | `query` | `string` | no |
| `hourly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1BitcoinResponse` | `v1BitcoinResponseSchema` | `src/models/v1-bitcoin-response.ts` |

### cashflow

- **Signature**: `cashflow(request: Finance.CashflowRequest, options?: RequestOptions): ApiPromise<V1CashflowResponse, Finance.CashflowError>`
- **Wire**: `GET /v1/cashflow`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CashflowResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.CashflowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.CashflowRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `query` | `string` | yes |
| `year` | `query` | `number` | no |
| `quarter` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CashflowResponse` | `v1CashflowResponseSchema` | `src/models/v1-cashflow-response.ts` |

### companylookup

- **Signature**: `companylookup(request: Finance.CompanylookupRequest, options?: RequestOptions): ApiPromise<V1CompanylookupResponse, Finance.CompanylookupError>`
- **Wire**: `GET /v1/companylookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CompanylookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.CompanylookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.CompanylookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CompanylookupResponse` | `v1CompanylookupResponseSchema` | `src/models/v1-companylookup-response.ts` |

### costliving

- **Signature**: `costliving(request: Finance.CostlivingRequest, options?: RequestOptions): ApiPromise<V1CostlivingResponse, Finance.CostlivingError>`
- **Wire**: `GET /v1/costliving`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CostlivingResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.CostlivingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.CostlivingRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `location` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CostlivingResponse` | `v1CostlivingResponseSchema` | `src/models/v1-costliving-response.ts` |

### cpiinflation

- **Signature**: `cpiinflation(request?: Finance.CpiinflationRequest, options?: RequestOptions): ApiPromise<V1CpiinflationResponse, Finance.CpiinflationError>`
- **Wire**: `GET /v1/cpiinflation`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CpiinflationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.CpiinflationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.CpiinflationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |
| `category` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CpiinflationResponse` | `v1CpiinflationResponseSchema` | `src/models/v1-cpiinflation-response.ts` |

### currencyconverter

- **Signature**: `currencyconverter(request: Finance.CurrencyconverterRequest, options?: RequestOptions): ApiPromise<V1CurrencyconverterResponse, Finance.CurrencyconverterError>`
- **Wire**: `GET /v1/currencyconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CurrencyconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.CurrencyconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.CurrencyconverterRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `value` | `query` | `number` | yes |
| `from` | `query` | `string` | yes |
| `to` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CurrencyconverterResponse` | `v1CurrencyconverterResponseSchema` | `src/models/v1-currencyconverter-response.ts` |

### currencysymbols

- **Signature**: `currencysymbols(request: Finance.CurrencysymbolsRequest, options?: RequestOptions): ApiPromise<V1CurrencysymbolsResponse, Finance.CurrencysymbolsError>`
- **Wire**: `GET /v1/currencysymbols`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CurrencysymbolsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.CurrencysymbolsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.CurrencysymbolsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `currency` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CurrencysymbolsResponse` | `v1CurrencysymbolsResponseSchema` | `src/models/v1-currencysymbols-response.ts` |

### dividends

- **Signature**: `dividends(request: Finance.DividendsRequest, options?: RequestOptions): ApiPromise<V1DividendsResponse, Finance.DividendsError>`
- **Wire**: `GET /v1/dividends`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DividendsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.DividendsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.DividendsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `query` | `string` | yes |
| `period` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DividendsResponse` | `v1DividendsResponseSchema` | `src/models/v1-dividends-response.ts` |

### earnings

- **Signature**: `earnings(request: Finance.EarningsRequest, options?: RequestOptions): ApiPromise<V1EarningsResponse, Finance.EarningsError>`
- **Wire**: `GET /v1/earnings`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1EarningsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.EarningsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.EarningsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `query` | `string` | yes |
| `year` | `query` | `number` | no |
| `quarter` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1EarningsResponse` | `v1EarningsResponseSchema` | `src/models/v1-earnings-response.ts` |

### ethereum

- **Signature**: `ethereum(request?: Finance.EthereumRequest, options?: RequestOptions): ApiPromise<V1EthereumResponse, Finance.EthereumError>`
- **Wire**: `GET /v1/ethereum`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1EthereumResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.EthereumError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.EthereumRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `currency` | `query` | — | `string` | no |
| `hourly` | `query` | — | `boolean` | no |
| `hourlyHour` | `query` | `hourly[].hour` | `number` | no |
| `hourlyPrice` | `query` | `hourly[].price` | `number` | no |
| `hourlyTimestamp` | `query` | `hourly[].timestamp` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1EthereumResponse` | `v1EthereumResponseSchema` | `src/models/v1-ethereum-response.ts` |

### exchangerate

- **Signature**: `exchangerate(request: Finance.ExchangerateRequest, options?: RequestOptions): ApiPromise<V1ExchangerateResponse, Finance.ExchangerateError>`
- **Wire**: `GET /v1/exchangerate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ExchangerateResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.ExchangerateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.ExchangerateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `currency1` | `query` | `string` | yes |
| `currency2` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ExchangerateResponse` | `v1ExchangerateResponseSchema` | `src/models/v1-exchangerate-response.ts` |

### financialratios

- **Signature**: `financialratios(request: Finance.FinancialratiosRequest, options?: RequestOptions): ApiPromise<V1FinancialratiosResponse, Finance.FinancialratiosError>`
- **Wire**: `GET /v1/financialratios`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1FinancialratiosResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.FinancialratiosError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.FinancialratiosRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `query` | `string` | yes |
| `year` | `query` | `number` | no |
| `quarter` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1FinancialratiosResponse` | `v1FinancialratiosResponseSchema` | `src/models/v1-financialratios-response.ts` |

### gdp

- **Signature**: `gdp(request: Finance.GdpRequest, options?: RequestOptions): ApiPromise<V1GdpResponse, Finance.GdpError>`
- **Wire**: `GET /v1/gdp`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1GdpResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.GdpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.GdpRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1GdpResponse` | `v1GdpResponseSchema` | `src/models/v1-gdp-response.ts` |

### globalstockmarket

- **Signature**: `globalstockmarket(request: Finance.GlobalstockmarketRequest, options?: RequestOptions): ApiPromise<V1GlobalstockmarketResponse, Finance.GlobalstockmarketError>`
- **Wire**: `GET /v1/globalstockmarket`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1GlobalstockmarketResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.GlobalstockmarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.GlobalstockmarketRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `year` | `query` | `number` | no |
| `month` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1GlobalstockmarketResponse` | `v1GlobalstockmarketResponseSchema` | `src/models/v1-globalstockmarket-response.ts` |

### goldprice

- **Signature**: `goldprice(request?: Finance.GoldpriceRequest, options?: RequestOptions): ApiPromise<V1GoldpriceResponse, Finance.GoldpriceError>`
- **Wire**: `GET /v1/goldprice`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1GoldpriceResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.GoldpriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.GoldpriceRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `currency` | `query` | — | `string` | no |
| `hourly` | `query` | — | `boolean` | no |
| `hourlyHour` | `query` | `hourly[].hour` | `number` | no |
| `hourlyPrice` | `query` | `hourly[].price` | `number` | no |
| `hourlyTimestamp` | `query` | `hourly[].timestamp` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1GoldpriceResponse` | `v1GoldpriceResponseSchema` | `src/models/v1-goldprice-response.ts` |

### ifsclookup

- **Signature**: `ifsclookup(request: Finance.IfsclookupRequest, options?: RequestOptions): ApiPromise<V1IfsclookupResponse, Finance.IfsclookupError>`
- **Wire**: `GET /v1/ifsclookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1IfsclookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.IfsclookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.IfsclookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ifsc` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1IfsclookupResponse` | `v1IfsclookupResponseSchema` | `src/models/v1-ifsclookup-response.ts` |

### incomestatement

- **Signature**: `incomestatement(request: Finance.IncomestatementRequest, options?: RequestOptions): ApiPromise<V1IncomestatementResponse, Finance.IncomestatementError>`
- **Wire**: `GET /v1/incomestatement`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1IncomestatementResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.IncomestatementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.IncomestatementRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `query` | `string` | yes |
| `year` | `query` | `number` | no |
| `quarter` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1IncomestatementResponse` | `v1IncomestatementResponseSchema` | `src/models/v1-incomestatement-response.ts` |

### incometax

- **Signature**: `incometax(request: Finance.IncometaxRequest, options?: RequestOptions): ApiPromise<V1IncometaxResponse, Finance.IncometaxError>`
- **Wire**: `GET /v1/incometax`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1IncometaxResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.IncometaxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.IncometaxRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1IncometaxResponse` | `v1IncometaxResponseSchema` | `src/models/v1-incometax-response.ts` |

### incometaxcalculator

- **Signature**: `incometaxcalculator(request: Finance.IncometaxcalculatorRequest, options?: RequestOptions): ApiPromise<V1IncometaxcalculatorResponse, Finance.IncometaxcalculatorError>`
- **Wire**: `GET /v1/incometaxcalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1IncometaxcalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.IncometaxcalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.IncometaxcalculatorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `income` | `query` | `number` | yes |
| `rate` | `query` | `number` | yes |
| `deduction` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1IncometaxcalculatorResponse` | `v1IncometaxcalculatorResponseSchema` | `src/models/v1-incometaxcalculator-response.ts` |

### inflation

- **Signature**: `inflation(request: Finance.InflationRequest, options?: RequestOptions): ApiPromise<V1InflationResponse, Finance.InflationError>`
- **Wire**: `GET /v1/inflation`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1InflationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.InflationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.InflationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1InflationResponse` | `v1InflationResponseSchema` | `src/models/v1-inflation-response.ts` |

### insidertrading

- **Signature**: `insidertrading(request: Finance.InsidertradingRequest, options?: RequestOptions): ApiPromise<V1InsidertradingResponse, Finance.InsidertradingError>`
- **Wire**: `GET /v1/insidertrading`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1InsidertradingResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.InsidertradingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.InsidertradingRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `query` | `string` | yes |
| `type` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1InsidertradingResponse` | `v1InsidertradingResponseSchema` | `src/models/v1-insidertrading-response.ts` |

### interestrate

- **Signature**: `interestrate(request: Finance.InterestrateRequest, options?: RequestOptions): ApiPromise<V1InterestrateResponse, Finance.InterestrateError>`
- **Wire**: `GET /v1/interestrate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1InterestrateResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.InterestrateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.InterestrateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1InterestrateResponse` | `v1InterestrateResponseSchema` | `src/models/v1-interestrate-response.ts` |

### jobsreport

- **Signature**: `jobsreport(request?: Finance.JobsreportRequest, options?: RequestOptions): ApiPromise<V1JobsreportResponse, Finance.JobsreportError>`
- **Wire**: `GET /v1/jobsreport`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1JobsreportResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.JobsreportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.JobsreportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1JobsreportResponse` | `v1JobsreportResponseSchema` | `src/models/v1-jobsreport-response.ts` |

### loanpaymentcalculator

- **Signature**: `loanpaymentcalculator(request: Finance.LoanpaymentcalculatorRequest, options?: RequestOptions): ApiPromise<V1LoanpaymentcalculatorResponse, Finance.LoanpaymentcalculatorError>`
- **Wire**: `POST /v1/loanpaymentcalculator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1LoanpaymentcalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.LoanpaymentcalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.LoanpaymentcalculatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1LoanpaymentcalculatorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LoanpaymentcalculatorRequest` | `v1LoanpaymentcalculatorRequestSchema` | `src/models/v1-loanpaymentcalculator-request.ts` |
| `V1LoanpaymentcalculatorResponse` | `v1LoanpaymentcalculatorResponseSchema` | `src/models/v1-loanpaymentcalculator-response.ts` |

### minimumwage

- **Signature**: `minimumwage(request: Finance.MinimumwageRequest, options?: RequestOptions): ApiPromise<V1MinimumwageResponse, Finance.MinimumwageError>`
- **Wire**: `GET /v1/minimumwage`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MinimumwageResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.MinimumwageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.MinimumwageRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `state` | `query` | `string` | yes |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MinimumwageResponse` | `v1MinimumwageResponseSchema` | `src/models/v1-minimumwage-response.ts` |

### mortgagecalculator

- **Signature**: `mortgagecalculator(request: Finance.MortgagecalculatorRequest, options?: RequestOptions): ApiPromise<V1MortgagecalculatorResponse, Finance.MortgagecalculatorError>`
- **Wire**: `POST /v1/mortgagecalculator`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MortgagecalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.MortgagecalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.MortgagecalculatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MortgagecalculatorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MortgagecalculatorRequest` | `v1MortgagecalculatorRequestSchema` | `src/models/v1-mortgagecalculator-request.ts` |
| `V1MortgagecalculatorResponse` | `v1MortgagecalculatorResponseSchema` | `src/models/v1-mortgagecalculator-response.ts` |

### mortgagerate

- **Signature**: `mortgagerate(request: Finance.MortgagerateRequest, options?: RequestOptions): ApiPromise<V1MortgagerateResponse, Finance.MortgagerateError>`
- **Wire**: `GET /v1/mortgagerate`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MortgagerateResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.MortgagerateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.MortgagerateRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `type` | `query` | `string` | yes |
| `year` | `query` | `number` | no |
| `month` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MortgagerateResponse` | `v1MortgagerateResponseSchema` | `src/models/v1-mortgagerate-response.ts` |

### nationaldebt

- **Signature**: `nationaldebt(request?: Finance.NationaldebtRequest, options?: RequestOptions): ApiPromise<V1NationaldebtResponse, Finance.NationaldebtError>`
- **Wire**: `GET /v1/nationaldebt`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1NationaldebtResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.NationaldebtError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.NationaldebtRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1NationaldebtResponse` | `v1NationaldebtResponseSchema` | `src/models/v1-nationaldebt-response.ts` |

### palladiumprice

- **Signature**: `palladiumprice(request?: Finance.PalladiumpriceRequest, options?: RequestOptions): ApiPromise<V1PalladiumpriceResponse, Finance.PalladiumpriceError>`
- **Wire**: `GET /v1/palladiumprice`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PalladiumpriceResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.PalladiumpriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.PalladiumpriceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `currency` | `query` | `string` | no |
| `hourly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PalladiumpriceResponse` | `v1PalladiumpriceResponseSchema` | `src/models/v1-palladiumprice-response.ts` |

### platinumprice

- **Signature**: `platinumprice(request?: Finance.PlatinumpriceRequest, options?: RequestOptions): ApiPromise<V1PlatinumpriceResponse, Finance.PlatinumpriceError>`
- **Wire**: `GET /v1/platinumprice`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PlatinumpriceResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.PlatinumpriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.PlatinumpriceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `currency` | `query` | `string` | no |
| `hourly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PlatinumpriceResponse` | `v1PlatinumpriceResponseSchema` | `src/models/v1-platinumprice-response.ts` |

### population

- **Signature**: `population(request: Finance.PopulationRequest, options?: RequestOptions): ApiPromise<V1PopulationResponse, Finance.PopulationError>`
- **Wire**: `GET /v1/population`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PopulationResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.PopulationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.PopulationRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PopulationResponse` | `v1PopulationResponseSchema` | `src/models/v1-population-response.ts` |

### purchasingpower

- **Signature**: `purchasingpower(request: Finance.PurchasingpowerRequest, options?: RequestOptions): ApiPromise<V1PurchasingpowerResponse, Finance.PurchasingpowerError>`
- **Wire**: `GET /v1/purchasingpower`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PurchasingpowerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.PurchasingpowerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.PurchasingpowerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `amount` | `query` | `number` | yes |
| `from` | `query` | `string` | yes |
| `to` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PurchasingpowerResponse` | `v1PurchasingpowerResponseSchema` | `src/models/v1-purchasingpower-response.ts` |

### routinglookup

- **Signature**: `routinglookup(request: Finance.RoutinglookupRequest, options?: RequestOptions): ApiPromise<V1RoutinglookupResponse, Finance.RoutinglookupError>`
- **Wire**: `GET /v1/routinglookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RoutinglookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.RoutinglookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.RoutinglookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `routing` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RoutinglookupResponse` | `v1RoutinglookupResponseSchema` | `src/models/v1-routinglookup-response.ts` |

### salestax

- **Signature**: `salestax(request: Finance.SalestaxRequest, options?: RequestOptions): ApiPromise<V1SalestaxResponse, Finance.SalestaxError>`
- **Wire**: `GET /v1/salestax`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SalestaxResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.SalestaxError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.SalestaxRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SalestaxResponse` | `v1SalestaxResponseSchema` | `src/models/v1-salestax-response.ts` |

### salestaxcalculator

- **Signature**: `salestaxcalculator(request: Finance.SalestaxcalculatorRequest, options?: RequestOptions): ApiPromise<V1SalestaxcalculatorResponse, Finance.SalestaxcalculatorError>`
- **Wire**: `GET /v1/salestaxcalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SalestaxcalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.SalestaxcalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.SalestaxcalculatorRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `amount` | `query` | `number` | yes |
| `zip` | `query` | `string` | no |
| `state` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SalestaxcalculatorResponse` | `v1SalestaxcalculatorResponseSchema` | `src/models/v1-salestaxcalculator-response.ts` |

### sanctionscreening

- **Signature**: `sanctionscreening(request: Finance.SanctionscreeningRequest, options?: RequestOptions): ApiPromise<V1SanctionscreeningResponse, Finance.SanctionscreeningError>`
- **Wire**: `GET /v1/sanctionscreening`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SanctionscreeningResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.SanctionscreeningError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.SanctionscreeningRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |
| `threshold` | `query` | `number` | no |
| `limit` | `query` | `number` | no |
| `type` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SanctionscreeningResponse` | `v1SanctionscreeningResponseSchema` | `src/models/v1-sanctionscreening-response.ts` |

### savingsbonds

- **Signature**: `savingsbonds(request?: Finance.SavingsbondsRequest, options?: RequestOptions): ApiPromise<V1SavingsbondsResponse, Finance.SavingsbondsError>`
- **Wire**: `GET /v1/savingsbonds`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SavingsbondsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.SavingsbondsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.SavingsbondsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `period` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SavingsbondsResponse` | `v1SavingsbondsResponseSchema` | `src/models/v1-savingsbonds-response.ts` |

### secfilings

- **Signature**: `secfilings(request: Finance.SecfilingsRequest, options?: RequestOptions): ApiPromise<V1SecfilingsResponse, Finance.SecfilingsError>`
- **Wire**: `GET /v1/secfilings`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SecfilingsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.SecfilingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.SecfilingsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ticker` | `query` | `string` | yes |
| `form` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SecfilingsResponse` | `v1SecfilingsResponseSchema` | `src/models/v1-secfilings-response.ts` |

### silverprice

- **Signature**: `silverprice(request?: Finance.SilverpriceRequest, options?: RequestOptions): ApiPromise<V1SilverpriceResponse, Finance.SilverpriceError>`
- **Wire**: `GET /v1/silverprice`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SilverpriceResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.SilverpriceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.SilverpriceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `currency` | `query` | `string` | no |
| `hourly` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SilverpriceResponse` | `v1SilverpriceResponseSchema` | `src/models/v1-silverprice-response.ts` |

### stockexchange

- **Signature**: `stockexchange(request: Finance.StockexchangeRequest, options?: RequestOptions): ApiPromise<V1StockexchangeResponse, Finance.StockexchangeError>`
- **Wire**: `GET /v1/stockexchange`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1StockexchangeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.StockexchangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.StockexchangeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `mic` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1StockexchangeResponse` | `v1StockexchangeResponseSchema` | `src/models/v1-stockexchange-response.ts` |

### stockmarketopentimes

- **Signature**: `stockmarketopentimes(request: Finance.StockmarketopentimesRequest, options?: RequestOptions): ApiPromise<V1StockmarketopentimesResponse, Finance.StockmarketopentimesError>`
- **Wire**: `GET /v1/stockmarketopentimes`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1StockmarketopentimesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.StockmarketopentimesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.StockmarketopentimesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `exchange` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1StockmarketopentimesResponse` | `v1StockmarketopentimesResponseSchema` | `src/models/v1-stockmarketopentimes-response.ts` |

### swiftlookup

- **Signature**: `swiftlookup(request: Finance.SwiftlookupRequest, options?: RequestOptions): ApiPromise<V1SwiftlookupResponse, Finance.SwiftlookupError>`
- **Wire**: `GET /v1/swiftlookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SwiftlookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.SwiftlookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.SwiftlookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `swift` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SwiftlookupResponse` | `v1SwiftlookupResponseSchema` | `src/models/v1-swiftlookup-response.ts` |

### tradebalance

- **Signature**: `tradebalance(request?: Finance.TradebalanceRequest, options?: RequestOptions): ApiPromise<V1TradebalanceResponse, Finance.TradebalanceError>`
- **Wire**: `GET /v1/tradebalance`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TradebalanceResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.TradebalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.TradebalanceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TradebalanceResponse` | `v1TradebalanceResponseSchema` | `src/models/v1-tradebalance-response.ts` |

### treasuryyields

- **Signature**: `treasuryyields(request?: Finance.TreasuryyieldsRequest, options?: RequestOptions): ApiPromise<V1TreasuryyieldsResponse, Finance.TreasuryyieldsError>`
- **Wire**: `GET /v1/treasuryyields`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1TreasuryyieldsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.TreasuryyieldsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.TreasuryyieldsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | no |
| `type` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1TreasuryyieldsResponse` | `v1TreasuryyieldsResponseSchema` | `src/models/v1-treasuryyields-response.ts` |

### unemployment

- **Signature**: `unemployment(request: Finance.UnemploymentRequest, options?: RequestOptions): ApiPromise<V1UnemploymentResponse, Finance.UnemploymentError>`
- **Wire**: `GET /v1/unemployment`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1UnemploymentResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.UnemploymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.UnemploymentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UnemploymentResponse` | `v1UnemploymentResponseSchema` | `src/models/v1-unemployment-response.ts` |

### vatrates

- **Signature**: `vatrates(request: Finance.VatratesRequest, options?: RequestOptions): ApiPromise<V1VatratesResponse, Finance.VatratesError>`
- **Wire**: `GET /v1/vatrates`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1VatratesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Finance.VatratesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Finance.VatratesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `date` | `query` | `string` | no |
| `postcode` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1VatratesResponse` | `v1VatratesResponseSchema` | `src/models/v1-vatrates-response.ts` |

