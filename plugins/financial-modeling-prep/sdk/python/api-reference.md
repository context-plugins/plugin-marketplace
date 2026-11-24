# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [FinancialModelingPrepClient](financial_modeling_prep/client.py)

## BalanceSheetStatement

> Source: [BalanceSheetStatement](financial_modeling_prep/apis/balance_sheet_statement.py)

<details>
<summary><code>def get_balance_sheet(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> list[Any]</code></summary>

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
try:
    response = client.balance_sheet_statement.get_balance_sheet("some example string")
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.balance_sheet_statement.get_balance_sheet("some example string")
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;Any&#93;</code> -- Balance sheet records

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CashFlowStatement

> Source: [CashFlowStatement](financial_modeling_prep/apis/cash_flow_statement.py)

<details>
<summary><code>def get_cash_flow_statement(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> list[Any]</code></summary>

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
try:
    response = client.cash_flow_statement.get_cash_flow_statement("some example string")
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.cash_flow_statement.get_cash_flow_statement("some example string")
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;Any&#93;</code> -- Cash flow statement records

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HistoricalPriceFull

> Source: [HistoricalPriceFull](financial_modeling_prep/apis/historical_price_full.py)

<details>
<summary><code>def get_historical_price(symbol: str, *, from_: Date | None = None, to: Date | None = None, request_options: RequestOptionsOrDict | None = None) -> HistoricalPriceResponse</code></summary>

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
try:
    response = client.historical_price_full.get_historical_price("some example string")
    # TODO: Handle 'response' of type HistoricalPriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.historical_price_full.get_historical_price("some example string")
    # TODO: Handle 'response' of type HistoricalPriceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>[HistoricalPriceResponse](financial_modeling_prep/models/historical_price_response.py)</code> -- Historical price series

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IncomeStatementApi

> Source: [IncomeStatementApi](financial_modeling_prep/apis/income_statement_api.py)

<details>
<summary><code>def get_income_statement(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> list[IncomeStatement]</code></summary>

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
try:
    response = client.income_statement_api.get_income_statement("some example string")
    # TODO: Handle 'response' of type list[IncomeStatement]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.income_statement_api.get_income_statement("some example string")
    # TODO: Handle 'response' of type list[IncomeStatement]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;[IncomeStatement](financial_modeling_prep/models/income_statement.py)&#93;</code> -- Income statement records

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## InsiderTrading

> Source: [InsiderTrading](financial_modeling_prep/apis/insider_trading.py)

<details>
<summary><code>def get_insider_trading(*, symbol: str | None = None, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> list[Any]</code></summary>

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
try:
    response = client.insider_trading.get_insider_trading()
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.insider_trading.get_insider_trading()
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;Any&#93;</code> -- Insider transactions

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Profile

> Source: [Profile](financial_modeling_prep/apis/profile.py)

<details>
<summary><code>def get_company_profile(symbol: str, *, request_options: RequestOptionsOrDict | None = None) -> list[CompanyProfile]</code></summary>

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
try:
    response = client.profile.get_company_profile("some example string")
    # TODO: Handle 'response' of type list[CompanyProfile]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.profile.get_company_profile("some example string")
    # TODO: Handle 'response' of type list[CompanyProfile]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;[CompanyProfile](financial_modeling_prep/models/company_profile.py)&#93;</code> -- Company profile

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## QuoteApi

> Source: [QuoteApi](financial_modeling_prep/apis/quote_api.py)

<details>
<summary><code>def get_quote(symbol: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Quote]</code></summary>

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
try:
    response = client.quote_api.get_quote("some example string")
    # TODO: Handle 'response' of type list[Quote]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.quote_api.get_quote("some example string")
    # TODO: Handle 'response' of type list[Quote]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;[Quote](financial_modeling_prep/models/quote.py)&#93;</code> -- Quote data

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Ratios

> Source: [Ratios](financial_modeling_prep/apis/ratios.py)

<details>
<summary><code>def get_financial_ratios(symbol: str, *, period: PeriodOrStr | None = Period.ANNUAL, limit: int | None = 40, request_options: RequestOptionsOrDict | None = None) -> list[Any]</code></summary>

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
try:
    response = client.ratios.get_financial_ratios("some example string")
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.ratios.get_financial_ratios("some example string")
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;Any&#93;</code> -- Financial ratios

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](financial_modeling_prep/apis/search.py)

<details>
<summary><code>def search_symbols(query: str, *, limit: int | None = 10, exchange: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[SearchResponse]</code></summary>

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
try:
    response = client.search.search_symbols("some example string")
    # TODO: Handle 'response' of type list[SearchResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.search.search_symbols("some example string")
    # TODO: Handle 'response' of type list[SearchResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;[SearchResponse](financial_modeling_prep/models/search_response.py)&#93;</code> -- Search results

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stock

> Source: [Stock](financial_modeling_prep/apis/stock.py)

<details>
<summary><code>def list_stocks(*, request_options: RequestOptionsOrDict | None = None) -> list[Any]</code></summary>

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
try:
    response = client.stock.list_stocks()
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.stock.list_stocks()
    # TODO: Handle 'response' of type list[Any]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: <code>list&#91;Any&#93;</code> -- Stock list

**OnError**: <code>[ApiError](financial_modeling_prep/core/exceptions.py)&#91;[RawError](financial_modeling_prep/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

