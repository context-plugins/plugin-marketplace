# Reference

> Source: [FinancialModelingPrepClient](src/client.ts)

## BalanceSheetStatement

> Source: [BalanceSheetStatement](src/resources/balance-sheet-statement.ts)

<details>
<summary><code>getBalanceSheet(request: BalanceSheetStatement.GetBalanceSheetRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.balanceSheetStatement.getBalanceSheet({ symbol: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.balanceSheetStatement
  .getBalanceSheet({ symbol: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>period?</code> | <code>[Period](src/models/period.ts)</code> | Reporting period<br>**Default**: "annual" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 40 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.balanceSheetStatement.getBalanceSheet(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.balanceSheetStatement.getBalanceSheet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## CashFlowStatement

> Source: [CashFlowStatement](src/resources/cash-flow-statement.ts)

<details>
<summary><code>getCashFlowStatement(request: CashFlowStatement.GetCashFlowStatementRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cashFlowStatement.getCashFlowStatement({ symbol: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cashFlowStatement
  .getCashFlowStatement({ symbol: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>period?</code> | <code>[Period](src/models/period.ts)</code> | Reporting period<br>**Default**: "annual" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 40 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cashFlowStatement.getCashFlowStatement(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.cashFlowStatement.getCashFlowStatement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## HistoricalPriceFull

> Source: [HistoricalPriceFull](src/resources/historical-price-full.ts)

<details>
<summary><code>getHistoricalPrice(request: HistoricalPriceFull.GetHistoricalPriceRequest, options?: RequestOptions): ApiPromise&lt;HistoricalPriceResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns historical daily OHLCV data for a ticker symbol.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.historicalPriceFull.getHistoricalPrice({ symbol: "some example string" });
  // TODO: Handle 'response' of type HistoricalPriceResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.historicalPriceFull
  .getHistoricalPrice({ symbol: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HistoricalPriceResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>from?</code> | <code>string</code> (date) | - |
| <code>to?</code> | <code>string</code> (date) | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.historicalPriceFull.getHistoricalPrice(request)`

- **OnSuccess**: <code>[HistoricalPriceResponse](src/models/historical-price-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.historicalPriceFull.getHistoricalPrice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HistoricalPriceResponse, ApiError&gt;</code>, with `result.value` of type <code>[HistoricalPriceResponse](src/models/historical-price-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## IncomeStatementApi

> Source: [IncomeStatementApi](src/resources/income-statement-api.ts)

<details>
<summary><code>getIncomeStatement(request: IncomeStatementApi.GetIncomeStatementRequest, options?: RequestOptions): ApiPromise&lt;IncomeStatement[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.incomeStatementApi.getIncomeStatement({ symbol: "some example string" });
  // TODO: Handle 'response' of type IncomeStatement[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.incomeStatementApi
  .getIncomeStatement({ symbol: "some example string" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type IncomeStatement[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>period?</code> | <code>[Period](src/models/period.ts)</code> | Reporting period<br>**Default**: "annual" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 40 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.incomeStatementApi.getIncomeStatement(request)`

- **OnSuccess**: <code>[IncomeStatement](src/models/income-statement.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.incomeStatementApi.getIncomeStatement(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;IncomeStatement[], ApiError&gt;</code>, with `result.value` of type <code>[IncomeStatement](src/models/income-statement.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## InsiderTrading

> Source: [InsiderTrading](src/resources/insider-trading.ts)

<details>
<summary><code>getInsiderTrading(request?: InsiderTrading.GetInsiderTradingRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.insiderTrading.getInsiderTrading();
  // TODO: Handle 'response' of type Record<string, unknown>[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.insiderTrading.getInsiderTrading().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 40 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.insiderTrading.getInsiderTrading(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.insiderTrading.getInsiderTrading(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Profile

> Source: [Profile](src/resources/profile.ts)

<details>
<summary><code>getCompanyProfile(request: Profile.GetCompanyProfileRequest, options?: RequestOptions): ApiPromise&lt;CompanyProfile[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.profile.getCompanyProfile({ symbol: "some example string" });
  // TODO: Handle 'response' of type CompanyProfile[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.profile.getCompanyProfile({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompanyProfile[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Ticker symbol (e.g., AAPL, MSFT) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.profile.getCompanyProfile(request)`

- **OnSuccess**: <code>[CompanyProfile](src/models/company-profile.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.profile.getCompanyProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompanyProfile[], ApiError&gt;</code>, with `result.value` of type <code>[CompanyProfile](src/models/company-profile.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## QuoteApi

> Source: [QuoteApi](src/resources/quote-api.ts)

<details>
<summary><code>getQuote(request: QuoteApi.GetQuoteRequest, options?: RequestOptions): ApiPromise&lt;Quote[], ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest price and market data for a given ticker symbol.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.quoteApi.getQuote({ symbol: "some example string" });
  // TODO: Handle 'response' of type Quote[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.quoteApi.getQuote({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Quote[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Ticker symbol (e.g., AAPL, MSFT) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.quoteApi.getQuote(request)`

- **OnSuccess**: <code>[Quote](src/models/quote.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.quoteApi.getQuote(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Quote[], ApiError&gt;</code>, with `result.value` of type <code>[Quote](src/models/quote.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Ratios

> Source: [Ratios](src/resources/ratios.ts)

<details>
<summary><code>getFinancialRatios(request: Ratios.GetFinancialRatiosRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.ratios.getFinancialRatios({ symbol: "some example string" });
  // TODO: Handle 'response' of type Record<string, unknown>[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.ratios.getFinancialRatios({ symbol: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>string</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>period?</code> | <code>[Period](src/models/period.ts)</code> | Reporting period<br>**Default**: "annual" |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 40 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.ratios.getFinancialRatios(request)`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.ratios.getFinancialRatios(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>searchSymbols(request: Search.SearchSymbolsRequest, options?: RequestOptions): ApiPromise&lt;SearchResponse[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.searchSymbols({ query: "some example string" });
  // TODO: Handle 'response' of type SearchResponse[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.searchSymbols({ query: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 10 |
| <code>exchange?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.searchSymbols(request)`

- **OnSuccess**: <code>[SearchResponse](src/models/search-response.ts)[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.search.searchSymbols(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse[], ApiError&gt;</code>, with `result.value` of type <code>[SearchResponse](src/models/search-response.ts)[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Stock

> Source: [Stock](src/resources/stock.ts)

<details>
<summary><code>listStocks(options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.stock.listStocks();
  // TODO: Handle 'response' of type Record<string, unknown>[]
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.stock.listStocks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type Record<string, unknown>[]
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.stock.listStocks()`

- **OnSuccess**: <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.stock.listStocks().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;Record&lt;string, unknown&gt;[], ApiError&gt;</code>, with `result.value` of type <code>Record&lt;string, unknown&gt;[]</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[FinancialModelingPrepError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

