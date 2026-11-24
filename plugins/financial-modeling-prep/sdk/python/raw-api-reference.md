# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [FinancialModelingPrepClient](financial_modeling_prep/client.py)

## BalanceSheetStatement

> Source: [BalanceSheetStatement](financial_modeling_prep/apis/balance_sheet_statement.py)

<details>
<summary><code>def get_balance_sheet(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Any], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.balance_sheet_statement.with_raw_response.get_balance_sheet("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.balance_sheet_statement.with_raw_response.get_balance_sheet("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>period</code> | <code>[PeriodOrStr](financial_modeling_prep/models/enums/period.py) \| None</code> | Reporting period<br>**Default**: <code>Period.ANNUAL</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>40</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;list&#91;Any&#93;, [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;Any&#93;</code> -- Balance sheet records

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CashFlowStatement

> Source: [CashFlowStatement](financial_modeling_prep/apis/cash_flow_statement.py)

<details>
<summary><code>def get_cash_flow_statement(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Any], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.cash_flow_statement.with_raw_response.get_cash_flow_statement("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.cash_flow_statement.with_raw_response.get_cash_flow_statement("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>period</code> | <code>[PeriodOrStr](financial_modeling_prep/models/enums/period.py) \| None</code> | Reporting period<br>**Default**: <code>Period.ANNUAL</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>40</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;list&#91;Any&#93;, [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;Any&#93;</code> -- Cash flow statement records

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HistoricalPriceFull

> Source: [HistoricalPriceFull](financial_modeling_prep/apis/historical_price_full.py)

<details>
<summary><code>def get_historical_price(symbol: str, *, from_: Date | None = None, to: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[HistoricalPriceResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns historical daily OHLCV data for a ticker symbol.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.historical_price_full.with_raw_response.get_historical_price("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HistoricalPriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.historical_price_full.with_raw_response.get_historical_price("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HistoricalPriceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>from_</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>to</code> | <code>Date \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;[HistoricalPriceResponse](financial_modeling_prep/models/historical_price_response.py), [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[HistoricalPriceResponse](financial_modeling_prep/models/historical_price_response.py)</code> -- Historical price series

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IncomeStatementApi

> Source: [IncomeStatementApi](financial_modeling_prep/apis/income_statement_api.py)

<details>
<summary><code>def get_income_statement(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[IncomeStatement], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.income_statement_api.with_raw_response.get_income_statement("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IncomeStatement]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.income_statement_api.with_raw_response.get_income_statement("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[IncomeStatement]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>period</code> | <code>[PeriodOrStr](financial_modeling_prep/models/enums/period.py) \| None</code> | Reporting period<br>**Default**: <code>Period.ANNUAL</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>40</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;list&#91;[IncomeStatement](financial_modeling_prep/models/income_statement.py)&#93;, [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[IncomeStatement](financial_modeling_prep/models/income_statement.py)&#93;</code> -- Income statement records

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## InsiderTrading

> Source: [InsiderTrading](financial_modeling_prep/apis/insider_trading.py)

<details>
<summary><code>def get_insider_trading(*, symbol: str | None = None, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Any], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.insider_trading.with_raw_response.get_insider_trading()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.insider_trading.with_raw_response.get_insider_trading()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>40</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;list&#91;Any&#93;, [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;Any&#93;</code> -- Insider transactions

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Profile

> Source: [Profile](financial_modeling_prep/apis/profile.py)

<details>
<summary><code>def get_company_profile(symbol: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CompanyProfile], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.profile.with_raw_response.get_company_profile("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CompanyProfile]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.profile.with_raw_response.get_company_profile("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CompanyProfile]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;list&#91;[CompanyProfile](financial_modeling_prep/models/company_profile.py)&#93;, [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CompanyProfile](financial_modeling_prep/models/company_profile.py)&#93;</code> -- Company profile

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## QuoteApi

> Source: [QuoteApi](financial_modeling_prep/apis/quote_api.py)

<details>
<summary><code>def get_quote(symbol: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Quote], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the latest price and market data for a given ticker symbol.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.quote_api.with_raw_response.get_quote("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Quote]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.quote_api.with_raw_response.get_quote("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Quote]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;list&#91;[Quote](financial_modeling_prep/models/quote.py)&#93;, [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Quote](financial_modeling_prep/models/quote.py)&#93;</code> -- Quote data

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Ratios

> Source: [Ratios](financial_modeling_prep/apis/ratios.py)

<details>
<summary><code>def get_financial_ratios(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Any], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.ratios.with_raw_response.get_financial_ratios("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.ratios.with_raw_response.get_financial_ratios("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>symbol</code> | <code>str</code> | Ticker symbol (e.g., AAPL, MSFT) |
| <code>period</code> | <code>[PeriodOrStr](financial_modeling_prep/models/enums/period.py) \| None</code> | Reporting period<br>**Default**: <code>Period.ANNUAL</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>40</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;list&#91;Any&#93;, [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;Any&#93;</code> -- Financial ratios

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](financial_modeling_prep/apis/search.py)

<details>
<summary><code>def search_symbols(query: str, *, limit: int | None = 10, exchange: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[SearchResponse], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search_symbols("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SearchResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.search.with_raw_response.search_symbols("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[SearchResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>query</code> | <code>str</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>exchange</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;list&#91;[SearchResponse](financial_modeling_prep/models/search_response.py)&#93;, [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[SearchResponse](financial_modeling_prep/models/search_response.py)&#93;</code> -- Search results

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stock

> Source: [Stock](financial_modeling_prep/apis/stock.py)

<details>
<summary><code>def list_stocks(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Any], RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stock.with_raw_response.list_stocks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.stock.with_raw_response.list_stocks()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Any]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](financial_modeling_prep/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](financial_modeling_prep/core/results.py)&#91;list&#91;Any&#93;, [RawError](financial_modeling_prep/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;Any&#93;</code> -- Stock list

**On `Failure`**: `error` is <code>[RawError](financial_modeling_prep/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

