# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [FinancialModelingPrepClient](src/FinancialModelingPrep/FinancialModelingPrepClient.cs)

## BalanceSheetStatement

> Source: [BalanceSheetStatement](src/FinancialModelingPrep/Api/BalanceSheetStatement.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;object&gt;&gt; GetBalanceSheet(GetBalanceSheetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.BalanceSheetStatement.GetBalanceSheet(new GetBalanceSheetRequest
    {
        Symbol = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBalanceSheetRequest](src/FinancialModelingPrep/Requests/BalanceSheetStatement/GetBalanceSheetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;object&gt;</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CashFlowStatement

> Source: [CashFlowStatement](src/FinancialModelingPrep/Api/CashFlowStatement.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;object&gt;&gt; GetCashFlowStatement(GetCashFlowStatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.CashFlowStatement.GetCashFlowStatement(new GetCashFlowStatementRequest
    {
        Symbol = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCashFlowStatementRequest](src/FinancialModelingPrep/Requests/CashFlowStatement/GetCashFlowStatementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;object&gt;</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HistoricalPriceFull

> Source: [HistoricalPriceFull](src/FinancialModelingPrep/Api/HistoricalPriceFull.cs)

<details>
<summary><code>Task&lt;HistoricalPriceResponse&gt; GetHistoricalPrice(GetHistoricalPriceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.HistoricalPriceFull.GetHistoricalPrice(new GetHistoricalPriceRequest
    {
        Symbol = "some example string",
    });
    // TODO: Handle 'response' of type HistoricalPriceResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetHistoricalPriceRequest](src/FinancialModelingPrep/Requests/HistoricalPriceFull/GetHistoricalPriceRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HistoricalPriceResponse](src/FinancialModelingPrep/Models/HistoricalPriceResponse.cs)</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IncomeStatementApi

> Source: [IncomeStatementApi](src/FinancialModelingPrep/Api/IncomeStatementApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;IncomeStatement&gt;&gt; GetIncomeStatement(GetIncomeStatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.IncomeStatementApi.GetIncomeStatement(new GetIncomeStatementRequest
    {
        Symbol = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<IncomeStatement>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIncomeStatementRequest](src/FinancialModelingPrep/Requests/IncomeStatementApi/GetIncomeStatementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[IncomeStatement](src/FinancialModelingPrep/Models/IncomeStatement.cs)&gt;</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## InsiderTrading

> Source: [InsiderTrading](src/FinancialModelingPrep/Api/InsiderTrading.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;object&gt;&gt; GetInsiderTrading(GetInsiderTradingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.InsiderTrading.GetInsiderTrading(new GetInsiderTradingRequest());
    // TODO: Handle 'response' of type IReadOnlyList<object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetInsiderTradingRequest](src/FinancialModelingPrep/Requests/InsiderTrading/GetInsiderTradingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;object&gt;</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Profile

> Source: [Profile](src/FinancialModelingPrep/Api/Profile.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;CompanyProfile&gt;&gt; GetCompanyProfile(GetCompanyProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Profile.GetCompanyProfile(new GetCompanyProfileRequest
    {
        Symbol = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<CompanyProfile>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanyProfileRequest](src/FinancialModelingPrep/Requests/Profile/GetCompanyProfileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[CompanyProfile](src/FinancialModelingPrep/Models/CompanyProfile.cs)&gt;</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## QuoteApi

> Source: [QuoteApi](src/FinancialModelingPrep/Api/QuoteApi.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Quote&gt;&gt; GetQuote(GetQuoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.QuoteApi.GetQuote(new GetQuoteRequest { Symbol = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<Quote>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetQuoteRequest](src/FinancialModelingPrep/Requests/QuoteApi/GetQuoteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Quote](src/FinancialModelingPrep/Models/Quote.cs)&gt;</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Ratios

> Source: [Ratios](src/FinancialModelingPrep/Api/Ratios.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;object&gt;&gt; GetFinancialRatios(GetFinancialRatiosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ratios.GetFinancialRatios(new GetFinancialRatiosRequest
    {
        Symbol = "some example string",
    });
    // TODO: Handle 'response' of type IReadOnlyList<object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFinancialRatiosRequest](src/FinancialModelingPrep/Requests/Ratios/GetFinancialRatiosRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;object&gt;</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/FinancialModelingPrep/Api/Search.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;SearchResponse&gt;&gt; SearchSymbols(SearchSymbolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Search.SearchSymbols(new SearchSymbolsRequest { Query = "some example string" });
    // TODO: Handle 'response' of type IReadOnlyList<SearchResponse>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchSymbolsRequest](src/FinancialModelingPrep/Requests/Search/SearchSymbolsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[SearchResponse](src/FinancialModelingPrep/Models/SearchResponse.cs)&gt;</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stock

> Source: [Stock](src/FinancialModelingPrep/Api/Stock.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;object&gt;&gt; ListStocks(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Stock.ListStocks();
    // TODO: Handle 'response' of type IReadOnlyList<object>
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;object&gt;</code>

**OnError**: <code>[ApiException](src/FinancialModelingPrep/Core/Exceptions/ApiException.cs)&lt;[RawError](src/FinancialModelingPrep/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

