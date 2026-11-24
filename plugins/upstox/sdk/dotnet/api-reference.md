# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [UpstoxClient](src/Upstox/UpstoxClient.cs)

## Charge

> Source: [Charge](src/Upstox/Api/Charge.cs)

<details>
<summary><code>Task&lt;GetBrokerageResponse&gt; GetBrokerage(GetBrokerageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute Brokerage Charges

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Charge.GetBrokerage(new GetBrokerageRequest
    {
        InstrumentToken = "NSE_EQ|INE848E01016",
        Quantity = 10,
        Product = "I",
        TransactionType = "BUY",
        Price = 123.1d,
    });
    // TODO: Handle 'response' of type GetBrokerageResponse
}
catch (ApiException<GetBrokerageError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBrokerageRequest](src/Upstox/Requests/Charge/GetBrokerageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetBrokerageResponse](src/Upstox/Models/GetBrokerageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetBrokerageError](src/Upstox/Errors/GetBrokerageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PostMarginResponse&gt; PostMargin(PostMarginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Compute Margin

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Charge.PostMargin(new PostMarginRequest
    {
        Body = new MarginRequest
        {
            Instruments = [
                new Instrument
                {
                    InstrumentKey = "some example string",
                    Quantity = 1,
                    Product = "some example string",
                    TransactionType = "some example string",
                },
            ],
        },
    });
    // TODO: Handle 'response' of type PostMarginResponse
}
catch (ApiException<PostMarginError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostMarginRequest](src/Upstox/Requests/Charge/PostMarginRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PostMarginResponse](src/Upstox/Models/PostMarginResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[PostMarginError](src/Upstox/Errors/PostMarginError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ExpiredInstrument

> Source: [ExpiredInstrument](src/Upstox/Api/ExpiredInstrument.cs)

<details>
<summary><code>Task&lt;GetExpiredFuturesContractResponse&gt; GetExpiredFutureContracts(GetExpiredFutureContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve expired future contracts for a given instrument key and expiry date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExpiredInstrument.GetExpiredFutureContracts(new GetExpiredFutureContractsRequest
    {
        InstrumentKey = "NSE_EQ|INE848E01016",
        ExpiryDate = "2023-10-05",
    });
    // TODO: Handle 'response' of type GetExpiredFuturesContractResponse
}
catch (ApiException<GetExpiredFutureContractsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExpiredFutureContractsRequest](src/Upstox/Requests/ExpiredInstrument/GetExpiredFutureContractsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetExpiredFuturesContractResponse](src/Upstox/Models/GetExpiredFuturesContractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetExpiredFutureContractsError](src/Upstox/Errors/GetExpiredFutureContractsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetHistoricalCandleResponse&gt; GetExpiredHistoricalCandleData(GetExpiredHistoricalCandleDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get Expired OHLC values for all instruments across various timeframes. Expired Historical data can be fetched for the following durations.
1minute: last 1 month candles till endDate
30minute: last 1 year candles till endDate
day: last 1 year candles till endDate
week: last 10 year candles till endDate
month: last 10 year candles till endDate

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExpiredInstrument.GetExpiredHistoricalCandleData(
        new GetExpiredHistoricalCandleDataRequest
        {
            ExpiredInstrumentKey = "NSE_EQ|INE848E01016|24-04-2025",
            Interval = "day",
            ToDate = "2025-01-01",
            FromDate = "2024-01-01",
        });
    // TODO: Handle 'response' of type GetHistoricalCandleResponse
}
catch (ApiException<GetExpiredHistoricalCandleDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExpiredHistoricalCandleDataRequest](src/Upstox/Requests/ExpiredInstrument/GetExpiredHistoricalCandleDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](src/Upstox/Models/GetHistoricalCandleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetExpiredHistoricalCandleDataError](src/Upstox/Errors/GetExpiredHistoricalCandleDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetOptionContractResponse&gt; GetExpiredOptionContracts(GetExpiredOptionContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the expired option contracts

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExpiredInstrument.GetExpiredOptionContracts(new GetExpiredOptionContractsRequest
    {
        InstrumentKey = "NSE_INDEX|Nifty 50",
        ExpiryDate = "2024-02-01",
    });
    // TODO: Handle 'response' of type GetOptionContractResponse
}
catch (ApiException<GetExpiredOptionContractsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExpiredOptionContractsRequest](src/Upstox/Requests/ExpiredInstrument/GetExpiredOptionContractsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOptionContractResponse](src/Upstox/Models/GetOptionContractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetExpiredOptionContractsError](src/Upstox/Errors/GetExpiredOptionContractsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetExpiriesResponse&gt; GetExpiriesResponse(GetExpiriesResponseRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve expiry dates for a given instrument key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.ExpiredInstrument.GetExpiriesResponse(new GetExpiriesResponseRequest
    {
        InstrumentKey = "NSE_EQ|INE848E01016",
    });
    // TODO: Handle 'response' of type GetExpiriesResponse
}
catch (ApiException<GetExpiriesResponseError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExpiriesResponseRequest](src/Upstox/Requests/ExpiredInstrument/GetExpiriesResponseRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetExpiriesResponse](src/Upstox/Models/GetExpiriesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetExpiriesResponseError](src/Upstox/Errors/GetExpiriesResponseError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Fundamentals

> Source: [Fundamentals](src/Upstox/Api/Fundamentals.cs)

<details>
<summary><code>Task&lt;BalanceSheetResponse&gt; GetBalanceSheet(GetBalanceSheetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches balance sheet data for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fundamentals.GetBalanceSheet(new GetBalanceSheetRequest
    {
        Isin = "INE002A01018",
        Type = "consolidated",
        Fs = false,
    });
    // TODO: Handle 'response' of type BalanceSheetResponse
}
catch (ApiException<GetBalanceSheetError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBalanceSheetRequest](src/Upstox/Requests/Fundamentals/GetBalanceSheetRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BalanceSheetResponse](src/Upstox/Models/BalanceSheetResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetBalanceSheetError](src/Upstox/Errors/GetBalanceSheetError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CashFlowResponse&gt; GetCashFlow(GetCashFlowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches cash flow data for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fundamentals.GetCashFlow(new GetCashFlowRequest
    {
        Isin = "INE002A01018",
        Type = "consolidated",
        Fs = false,
    });
    // TODO: Handle 'response' of type CashFlowResponse
}
catch (ApiException<GetCashFlowError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCashFlowRequest](src/Upstox/Requests/Fundamentals/GetCashFlowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CashFlowResponse](src/Upstox/Models/CashFlowResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetCashFlowError](src/Upstox/Errors/GetCashFlowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompanyProfileResponse&gt; GetCompanyProfile(GetCompanyProfileRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches company profile information for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fundamentals.GetCompanyProfile(new GetCompanyProfileRequest { Isin = "INE002A01018" });
    // TODO: Handle 'response' of type CompanyProfileResponse
}
catch (ApiException<GetCompanyProfileError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompanyProfileRequest](src/Upstox/Requests/Fundamentals/GetCompanyProfileRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompanyProfileResponse](src/Upstox/Models/CompanyProfileResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetCompanyProfileError](src/Upstox/Errors/GetCompanyProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CompetitorsResponse&gt; GetCompetitors(GetCompetitorsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the list of competitors for the given instrument_key.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fundamentals.GetCompetitors(new GetCompetitorsRequest
    {
        InstrumentKey = "NSE_EQ|INE002A01018",
    });
    // TODO: Handle 'response' of type CompetitorsResponse
}
catch (ApiException<GetCompetitorsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCompetitorsRequest](src/Upstox/Requests/Fundamentals/GetCompetitorsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CompetitorsResponse](src/Upstox/Models/CompetitorsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetCompetitorsError](src/Upstox/Errors/GetCompetitorsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CorporateActionsResponse&gt; GetCorporateActions(GetCorporateActionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches corporate actions for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fundamentals.GetCorporateActions(new GetCorporateActionsRequest
    {
        Isin = "INE002A01018",
    });
    // TODO: Handle 'response' of type CorporateActionsResponse
}
catch (ApiException<GetCorporateActionsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetCorporateActionsRequest](src/Upstox/Requests/Fundamentals/GetCorporateActionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CorporateActionsResponse](src/Upstox/Models/CorporateActionsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetCorporateActionsError](src/Upstox/Errors/GetCorporateActionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IncomeStatementResponse&gt; GetIncomeStatement(GetIncomeStatementRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches income statement data for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fundamentals.GetIncomeStatement(new GetIncomeStatementRequest
    {
        Isin = "INE002A01018",
        Type = "consolidated",
        TimePeriod = "yearly",
        Fs = false,
    });
    // TODO: Handle 'response' of type IncomeStatementResponse
}
catch (ApiException<GetIncomeStatementError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIncomeStatementRequest](src/Upstox/Requests/Fundamentals/GetIncomeStatementRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IncomeStatementResponse](src/Upstox/Models/IncomeStatementResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetIncomeStatementError](src/Upstox/Errors/GetIncomeStatementError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;KeyRatiosResponse&gt; GetKeyRatios(GetKeyRatiosRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches key financial ratios for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fundamentals.GetKeyRatios(new GetKeyRatiosRequest { Isin = "INE002A01018" });
    // TODO: Handle 'response' of type KeyRatiosResponse
}
catch (ApiException<GetKeyRatiosError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetKeyRatiosRequest](src/Upstox/Requests/Fundamentals/GetKeyRatiosRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[KeyRatiosResponse](src/Upstox/Models/KeyRatiosResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetKeyRatiosError](src/Upstox/Errors/GetKeyRatiosError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ShareHoldingsResponse&gt; GetShareHoldings(GetShareHoldingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches shareholding pattern for the given ISIN.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Fundamentals.GetShareHoldings(new GetShareHoldingsRequest { Isin = "INE002A01018" });
    // TODO: Handle 'response' of type ShareHoldingsResponse
}
catch (ApiException<GetShareHoldingsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetShareHoldingsRequest](src/Upstox/Requests/Fundamentals/GetShareHoldingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ShareHoldingsResponse](src/Upstox/Models/ShareHoldingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetShareHoldingsError](src/Upstox/Errors/GetShareHoldingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## History

> Source: [History](src/Upstox/Api/History.cs)

<details>
<summary><code>Task&lt;GetHistoricalCandleResponse&gt; GetHistoricalCandleData2(GetHistoricalCandleData2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
1minute: last 1 month candles till endDate
30minute: last 1 year candles till endDate
day: last 1 year candles till endDate
week: last 10 year candles till endDate
month: last 10 year candles till endDate

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.History.GetHistoricalCandleData2(new GetHistoricalCandleData2Request
    {
        InstrumentKey = "some example string",
        Interval = "some example string",
        ToDate = "some example string",
    });
    // TODO: Handle 'response' of type GetHistoricalCandleResponse
}
catch (ApiException<GetHistoricalCandleData2Error> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetHistoricalCandleData2Request](src/Upstox/Requests/History/GetHistoricalCandleData2Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](src/Upstox/Models/GetHistoricalCandleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetHistoricalCandleData2Error](src/Upstox/Errors/GetHistoricalCandleData2Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetHistoricalCandleResponse&gt; GetHistoricalCandleData3(GetHistoricalCandleData3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
1minute: last 1 month candles till endDate
30minute: last 1 year candles till endDate
day: last 1 year candles till endDate
week: last 10 year candles till endDate
month: last 10 year candles till endDate

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.History.GetHistoricalCandleData3(new GetHistoricalCandleData3Request
    {
        InstrumentKey = "some example string",
        Interval = "some example string",
        ToDate = "some example string",
        FromDate = "some example string",
    });
    // TODO: Handle 'response' of type GetHistoricalCandleResponse
}
catch (ApiException<GetHistoricalCandleData3Error> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetHistoricalCandleData3Request](src/Upstox/Requests/History/GetHistoricalCandleData3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](src/Upstox/Models/GetHistoricalCandleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetHistoricalCandleData3Error](src/Upstox/Errors/GetHistoricalCandleData3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetIntraDayCandleResponse&gt; GetIntraDayCandleData1(GetIntraDayCandleData1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.History.GetIntraDayCandleData1(new GetIntraDayCandleData1Request
    {
        InstrumentKey = "some example string",
        Interval = "some example string",
    });
    // TODO: Handle 'response' of type GetIntraDayCandleResponse
}
catch (ApiException<GetIntraDayCandleData1Error> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIntraDayCandleData1Request](src/Upstox/Requests/History/GetIntraDayCandleData1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntraDayCandleResponse](src/Upstox/Models/GetIntraDayCandleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetIntraDayCandleData1Error](src/Upstox/Errors/GetIntraDayCandleData1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## HistoryV3

> Source: [HistoryV3](src/Upstox/Api/HistoryV3.cs)

<details>
<summary><code>Task&lt;GetHistoricalCandleResponse&gt; GetHistoricalCandleData(GetHistoricalCandleDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day with expanded interval options.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HistoryV3.GetHistoricalCandleData(new GetHistoricalCandleDataRequest
    {
        InstrumentKey = "some example string",
        Unit = "some example string",
        Interval = 1,
        ToDate = "some example string",
    });
    // TODO: Handle 'response' of type GetHistoricalCandleResponse
}
catch (ApiException<GetHistoricalCandleDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetHistoricalCandleDataRequest](src/Upstox/Requests/HistoryV3/GetHistoricalCandleDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](src/Upstox/Models/GetHistoricalCandleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetHistoricalCandleDataError](src/Upstox/Errors/GetHistoricalCandleDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetHistoricalCandleResponse&gt; GetHistoricalCandleData1(GetHistoricalCandleData1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day with expanded interval options

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HistoryV3.GetHistoricalCandleData1(new GetHistoricalCandleData1Request
    {
        InstrumentKey = "some example string",
        Unit = "some example string",
        Interval = 1,
        ToDate = "some example string",
        FromDate = "some example string",
    });
    // TODO: Handle 'response' of type GetHistoricalCandleResponse
}
catch (ApiException<GetHistoricalCandleData1Error> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetHistoricalCandleData1Request](src/Upstox/Requests/HistoryV3/GetHistoricalCandleData1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHistoricalCandleResponse](src/Upstox/Models/GetHistoricalCandleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetHistoricalCandleData1Error](src/Upstox/Errors/GetHistoricalCandleData1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetIntraDayCandleResponse&gt; GetIntraDayCandleData(GetIntraDayCandleDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get OHLC values for all instruments for the present trading day

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.HistoryV3.GetIntraDayCandleData(new GetIntraDayCandleDataRequest
    {
        InstrumentKey = "some example string",
        Unit = "some example string",
        Interval = 1,
    });
    // TODO: Handle 'response' of type GetIntraDayCandleResponse
}
catch (ApiException<GetIntraDayCandleDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIntraDayCandleDataRequest](src/Upstox/Requests/HistoryV3/GetIntraDayCandleDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetIntraDayCandleResponse](src/Upstox/Models/GetIntraDayCandleResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetIntraDayCandleDataError](src/Upstox/Errors/GetIntraDayCandleDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Ipo

> Source: [Ipo](src/Upstox/Api/Ipo.cs)

<details>
<summary><code>Task&lt;IpoApplyResponse&gt; ApplyForIpo(ApplyForIpoRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Places an IPO application for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ipo.ApplyForIpo(new ApplyForIpoRequest
    {
        Body = new IpoApplyRequest
        {
            Id = "some example string",
            Upi = "some example string",
            Category = Category.Ind,
            Bids = [new IpoBidRequest { Quantity = 1, Price = 1.5d }],
        },
    });
    // TODO: Handle 'response' of type IpoApplyResponse
}
catch (ApiException<ApplyForIpoError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ApplyForIpoRequest](src/Upstox/Requests/Ipo/ApplyForIpoRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoApplyResponse](src/Upstox/Models/IpoApplyResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[ApplyForIpoError](src/Upstox/Errors/ApplyForIpoError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IpoCancelResponse&gt; CancelIpoOrder(CancelIpoOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels/deletes an IPO order of the authenticated user by order id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ipo.CancelIpoOrder(new CancelIpoOrderRequest { OrderId = "UPROYAL00000003" });
    // TODO: Handle 'response' of type IpoCancelResponse
}
catch (ApiException<CancelIpoOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelIpoOrderRequest](src/Upstox/Requests/Ipo/CancelIpoOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoCancelResponse](src/Upstox/Models/IpoCancelResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[CancelIpoOrderError](src/Upstox/Errors/CancelIpoOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IpoDetailsResponse&gt; GetIpoDetails(GetIpoDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches detailed information for an IPO by its slug ID.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ipo.GetIpoDetails(new GetIpoDetailsRequest { Id = "mandb-engineering-limited-ipo" });
    // TODO: Handle 'response' of type IpoDetailsResponse
}
catch (ApiException<GetIpoDetailsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIpoDetailsRequest](src/Upstox/Requests/Ipo/GetIpoDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoDetailsResponse](src/Upstox/Models/IpoDetailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetIpoDetailsError](src/Upstox/Errors/GetIpoDetailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IpoListingResponse&gt; GetIpoListing(GetIpoListingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches list of IPOs filtered by status.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ipo.GetIpoListing(new GetIpoListingRequest
    {
        Status = Status9.Open,
        IssueType = IssueType3.Regular,
        PageNumber = "1",
        Records = "20",
    });
    // TODO: Handle 'response' of type IpoListingResponse
}
catch (ApiException<GetIpoListingError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIpoListingRequest](src/Upstox/Requests/Ipo/GetIpoListingRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoListingResponse](src/Upstox/Models/IpoListingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetIpoListingError](src/Upstox/Errors/GetIpoListingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IpoOrderDetailResponse&gt; GetIpoOrderById(GetIpoOrderByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a single IPO order of the authenticated user by order id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ipo.GetIpoOrderById(new GetIpoOrderByIdRequest { OrderId = "UPROYAL00000003" });
    // TODO: Handle 'response' of type IpoOrderDetailResponse
}
catch (ApiException<GetIpoOrderByIdError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIpoOrderByIdRequest](src/Upstox/Requests/Ipo/GetIpoOrderByIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoOrderDetailResponse](src/Upstox/Models/IpoOrderDetailResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetIpoOrderByIdError](src/Upstox/Errors/GetIpoOrderByIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IpoOrderResponse&gt; GetIpoOrders(GetIpoOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the authenticated user's IPO orders/applications.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Ipo.GetIpoOrders(new GetIpoOrdersRequest { PageNumber = "1", Records = "10" });
    // TODO: Handle 'response' of type IpoOrderResponse
}
catch (ApiException<GetIpoOrdersError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetIpoOrdersRequest](src/Upstox/Requests/Ipo/GetIpoOrdersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IpoOrderResponse](src/Upstox/Models/IpoOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetIpoOrdersError](src/Upstox/Errors/GetIpoOrdersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Instruments

> Source: [Instruments](src/Upstox/Api/Instruments.cs)

<details>
<summary><code>Task&lt;SearchInstrumentResponse&gt; SearchInstrument(SearchInstrumentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the instrument details for searched query

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Instruments.SearchInstrument(new SearchInstrumentRequest
    {
        Query = "RELIANCE 1500 PE",
        Exchanges = "NSE,BSE,MCX",
        Segments = "EQ,FO,CURR,COMM",
        InstrumentTypes = "CE,PE",
        Expiry = "2025-12-28",
        AtmOffset = 2,
        PageNumber = 1,
        Records = 20,
    });
    // TODO: Handle 'response' of type SearchInstrumentResponse
}
catch (ApiException<SearchInstrumentError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchInstrumentRequest](src/Upstox/Requests/Instruments/SearchInstrumentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchInstrumentResponse](src/Upstox/Models/SearchInstrumentResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[SearchInstrumentError](src/Upstox/Errors/SearchInstrumentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Login

> Source: [Login](src/Upstox/Api/Login.cs)

<details>
<summary><code>Task Authorize(AuthorizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This provides details on the login endpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Login.Authorize(new AuthorizeRequest
    {
        ClientId = "some example string",
        RedirectUri = "some example string",
    });
}
catch (ApiException<AuthorizeError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AuthorizeRequest](src/Upstox/Requests/Login/AuthorizeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[AuthorizeError](src/Upstox/Errors/AuthorizeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TokenResponse&gt; InitTokenRequestForIndieUser(InitTokenRequestForIndieUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the initialize the generate token and it's expiry for an indie user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Login.InitTokenRequestForIndieUser(new InitTokenRequestForIndieUserRequest
    {
        ClientId = "some example string",
        Body = new IndieUserTokenRequest(),
    });
    // TODO: Handle 'response' of type TokenResponse
}
catch (ApiException<InitTokenRequestForIndieUserError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InitTokenRequestForIndieUserRequest](src/Upstox/Requests/Login/InitTokenRequestForIndieUserRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](src/Upstox/Models/TokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[InitTokenRequestForIndieUserError](src/Upstox/Errors/InitTokenRequestForIndieUserError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LogoutResponse&gt; Logout(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Login.Logout();
    // TODO: Handle 'response' of type LogoutResponse
}
catch (ApiException<LogoutError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LogoutResponse](src/Upstox/Models/LogoutResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[LogoutError](src/Upstox/Errors/LogoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TokenResponse&gt; Token(TokenOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to obtain opaque token from authorization_code exchange and also provides the user’s profile in the same response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Login.Token(new TokenOperationRequest
    {
        Code = "some example string",
        ClientId = "some example string",
        ClientSecret = "some example string",
        RedirectUri = "some example string",
        GrantType = "some example string",
    });
    // TODO: Handle 'response' of type TokenResponse
}
catch (ApiException<TokenError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TokenOperationRequest](src/Upstox/Requests/Login/TokenOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TokenResponse](src/Upstox/Models/TokenResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[TokenError](src/Upstox/Errors/TokenError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MarketHolidaysAndTimings

> Source: [MarketHolidaysAndTimings](src/Upstox/Api/MarketHolidaysAndTimings.cs)

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetChangeOiData(GetChangeOiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches change in OI data for the given instrument key, expiry, date and interval.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetChangeOiData(new GetChangeOiDataRequest
    {
        InstrumentKey = "NSE_INDEX|Nifty 50",
        Expiry = "2026-05-19",
        Date = "2026-05-06",
        Interval = 2,
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetChangeOiDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetChangeOiDataRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetChangeOiDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Upstox/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetChangeOiDataError](src/Upstox/Errors/GetChangeOiDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetDiiData(GetDiiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches DII activity data for the given interval.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetDiiData(new GetDiiDataRequest
    {
        DataType = "NSE_EQ|CASH",
        Interval = "1D",
        From = "2024-01-01",
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetDiiDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetDiiDataRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetDiiDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Upstox/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetDiiDataError](src/Upstox/Errors/GetDiiDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetExchangeTimingResponse&gt; GetExchangeTimings(GetExchangeTimingsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the exchange timings on particular date

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetExchangeTimings(new GetExchangeTimingsRequest
    {
        Date = "some example string",
    });
    // TODO: Handle 'response' of type GetExchangeTimingResponse
}
catch (ApiException<GetExchangeTimingsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetExchangeTimingsRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetExchangeTimingsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetExchangeTimingResponse](src/Upstox/Models/GetExchangeTimingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetExchangeTimingsError](src/Upstox/Errors/GetExchangeTimingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetFiiData(GetFiiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches FII activity data for the given data type and interval.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetFiiData(new GetFiiDataRequest
    {
        DataType = "NSE_FO|INDEX_FUTURES",
        Interval = "1D",
        From = "2024-01-01",
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetFiiDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFiiDataRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetFiiDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Upstox/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetFiiDataError](src/Upstox/Errors/GetFiiDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetHolidayResponse&gt; GetHoliday(GetHolidayRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the holiday on particular date

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetHoliday(new GetHolidayRequest
    {
        Date = "some example string",
    });
    // TODO: Handle 'response' of type GetHolidayResponse
}
catch (ApiException<GetHolidayError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetHolidayRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetHolidayRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHolidayResponse](src/Upstox/Models/GetHolidayResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetHolidayError](src/Upstox/Errors/GetHolidayError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetHolidayResponse&gt; GetHolidays(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the holiday list of current year

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetHolidays();
    // TODO: Handle 'response' of type GetHolidayResponse
}
catch (ApiException<GetHolidaysError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHolidayResponse](src/Upstox/Models/GetHolidayResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetHolidaysError](src/Upstox/Errors/GetHolidaysError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetMarketStatusResponse&gt; GetMarketStatus(GetMarketStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the market status for particular exchange

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetMarketStatus(new GetMarketStatusRequest
    {
        Exchange = "some example string",
    });
    // TODO: Handle 'response' of type GetMarketStatusResponse
}
catch (ApiException<GetMarketStatusError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMarketStatusRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetMarketStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketStatusResponse](src/Upstox/Models/GetMarketStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMarketStatusError](src/Upstox/Errors/GetMarketStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetMaxPainData(GetMaxPainDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches Max Pain data for the given instrument key, expiry, date and bucket interval.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetMaxPainData(new GetMaxPainDataRequest
    {
        InstrumentKey = "NSE_INDEX|Nifty 50",
        Expiry = "2026-05-19",
        Date = "2026-05-06",
        BucketInterval = 15,
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetMaxPainDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMaxPainDataRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetMaxPainDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Upstox/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMaxPainDataError](src/Upstox/Errors/GetMaxPainDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetOiData(GetOiDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches OI data for the given instrument key, expiry and date.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetOiData(new GetOiDataRequest
    {
        InstrumentKey = "NSE_INDEX|Nifty 50",
        Expiry = "2026-05-19",
        Date = "2026-05-06",
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetOiDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOiDataRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetOiDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Upstox/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetOiDataError](src/Upstox/Errors/GetOiDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetPcrData(GetPcrDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches PCR (Put-Call Ratio) data for the given instrument key, expiry, date and bucket interval.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetPcrData(new GetPcrDataRequest
    {
        InstrumentKey = "NSE_INDEX|Nifty 50",
        Expiry = "2026-05-19",
        Date = "2026-05-06",
        BucketInterval = 15,
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetPcrDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPcrDataRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetPcrDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Upstox/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetPcrDataError](src/Upstox/Errors/GetPcrDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetSmartlistFutures(GetSmartlistFuturesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the smartlist of futures for the given asset type and category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetSmartlistFutures(new GetSmartlistFuturesRequest
    {
        AssetType = "INDEX",
        Category = "TOP_TRADED",
        PageNumber = 1,
        PageSize = 20,
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetSmartlistFuturesError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSmartlistFuturesRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetSmartlistFuturesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Upstox/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetSmartlistFuturesError](src/Upstox/Errors/GetSmartlistFuturesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetSmartlistMtf(GetSmartlistMtfRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the smartlist of MTF (Margin Trade Funding) stocks. Prices are enriched with live LTP data.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetSmartlistMtf(new GetSmartlistMtfRequest
    {
        PageNumber = 1,
        PageSize = 20,
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetSmartlistMtfError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSmartlistMtfRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetSmartlistMtfRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Upstox/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetSmartlistMtfError](src/Upstox/Errors/GetSmartlistMtfError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;AnalyticsResponse&gt; GetSmartlistOptions(GetSmartlistOptionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the smartlist of options for the given asset type and category.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketHolidaysAndTimings.GetSmartlistOptions(new GetSmartlistOptionsRequest
    {
        AssetType = "INDEX",
        Category = "TOP_TRADED",
        PageNumber = 1,
        PageSize = 20,
    });
    // TODO: Handle 'response' of type AnalyticsResponse
}
catch (ApiException<GetSmartlistOptionsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetSmartlistOptionsRequest](src/Upstox/Requests/MarketHolidaysAndTimings/GetSmartlistOptionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AnalyticsResponse](src/Upstox/Models/AnalyticsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetSmartlistOptionsError](src/Upstox/Errors/GetSmartlistOptionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MarketQuote

> Source: [MarketQuote](src/Upstox/Api/MarketQuote.cs)

<details>
<summary><code>Task&lt;GetFullMarketQuoteResponse&gt; GetFullMarketQuote(GetFullMarketQuoteRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the full market quotes for one or more instruments.This API returns the complete market data snapshot of up to 500 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketQuote.GetFullMarketQuote(new GetFullMarketQuoteRequest
    {
        Symbol = "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
        InstrumentKey = "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
    });
    // TODO: Handle 'response' of type GetFullMarketQuoteResponse
}
catch (ApiException<GetFullMarketQuoteError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetFullMarketQuoteRequest](src/Upstox/Requests/MarketQuote/GetFullMarketQuoteRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetFullMarketQuoteResponse](src/Upstox/Models/GetFullMarketQuoteResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetFullMarketQuoteError](src/Upstox/Errors/GetFullMarketQuoteError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetMarketQuoteOhlcResponse&gt; GetMarketQuoteOhlc(GetMarketQuoteOhlcRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 1000 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketQuote.GetMarketQuoteOhlc(new GetMarketQuoteOhlcRequest
    {
        Interval = "1d",
        Symbol = "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
        InstrumentKey = "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
    });
    // TODO: Handle 'response' of type GetMarketQuoteOhlcResponse
}
catch (ApiException<GetMarketQuoteOhlcError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMarketQuoteOhlcRequest](src/Upstox/Requests/MarketQuote/GetMarketQuoteOhlcRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteOhlcResponse](src/Upstox/Models/GetMarketQuoteOhlcResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMarketQuoteOhlcError](src/Upstox/Errors/GetMarketQuoteOhlcError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetMarketQuoteLastTradedPriceResponse&gt; Ltp(LtpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 1000 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketQuote.Ltp(new LtpRequest
    {
        Symbol = "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
        InstrumentKey = "NSE_EQ|INE848E01016,NSE_EQ|INE848E01039",
    });
    // TODO: Handle 'response' of type GetMarketQuoteLastTradedPriceResponse
}
catch (ApiException<LtpError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[LtpRequest](src/Upstox/Requests/MarketQuote/LtpRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteLastTradedPriceResponse](src/Upstox/Models/GetMarketQuoteLastTradedPriceResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[LtpError](src/Upstox/Errors/LtpError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MarketQuoteV3

> Source: [MarketQuoteV3](src/Upstox/Api/MarketQuoteV3.cs)

<details>
<summary><code>Task&lt;GetMarketQuoteLastTradedPriceResponseV3&gt; GetLtp(GetLtpRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 500 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketQuoteV3.GetLtp(new GetLtpRequest
    {
        InstrumentKey = "NSE_EQ|INE848E01016,NSE_EQ|INE009A01021",
    });
    // TODO: Handle 'response' of type GetMarketQuoteLastTradedPriceResponseV3
}
catch (ApiException<GetLtpError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetLtpRequest](src/Upstox/Requests/MarketQuoteV3/GetLtpRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteLastTradedPriceResponseV3](src/Upstox/Models/GetMarketQuoteLastTradedPriceResponseV3.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetLtpError](src/Upstox/Errors/GetLtpError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetMarketQuoteOhlcResponseV3&gt; GetMarketQuoteOhlcv3(GetMarketQuoteOhlcv3Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 500 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketQuoteV3.GetMarketQuoteOhlcv3(new GetMarketQuoteOhlcv3Request
    {
        Interval = "1d",
        InstrumentKey = "NSE_EQ|INE848E01016,NSE_EQ|INE009A01021",
    });
    // TODO: Handle 'response' of type GetMarketQuoteOhlcResponseV3
}
catch (ApiException<GetMarketQuoteOhlcv3Error> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMarketQuoteOhlcv3Request](src/Upstox/Requests/MarketQuoteV3/GetMarketQuoteOhlcv3Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteOhlcResponseV3](src/Upstox/Models/GetMarketQuoteOhlcResponseV3.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMarketQuoteOhlcv3Error](src/Upstox/Errors/GetMarketQuoteOhlcv3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetMarketQuoteOptionGreekResponseV3&gt; GetMarketQuoteOptionGreek(GetMarketQuoteOptionGreekRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the Option Greek data for one or more instruments.This API returns the Option Greek data of up to 500 instruments in one go.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MarketQuoteV3.GetMarketQuoteOptionGreek(new GetMarketQuoteOptionGreekRequest
    {
        InstrumentKey = "NSE_EQ|INE848E01016,NSE_EQ|INE009A01021",
    });
    // TODO: Handle 'response' of type GetMarketQuoteOptionGreekResponseV3
}
catch (ApiException<GetMarketQuoteOptionGreekError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMarketQuoteOptionGreekRequest](src/Upstox/Requests/MarketQuoteV3/GetMarketQuoteOptionGreekRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMarketQuoteOptionGreekResponseV3](src/Upstox/Models/GetMarketQuoteOptionGreekResponseV3.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMarketQuoteOptionGreekError](src/Upstox/Errors/GetMarketQuoteOptionGreekError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MutualFund

> Source: [MutualFund](src/Upstox/Api/MutualFund.cs)

<details>
<summary><code>Task&lt;GetMutualFundHoldingsResponse&gt; GetMutualFundHoldings(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns mutual fund holdings for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MutualFund.GetMutualFundHoldings();
    // TODO: Handle 'response' of type GetMutualFundHoldingsResponse
}
catch (ApiException<GetMutualFundHoldingsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMutualFundHoldingsResponse](src/Upstox/Models/GetMutualFundHoldingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMutualFundHoldingsError](src/Upstox/Errors/GetMutualFundHoldingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetMutualFundOrderDetailsResponse&gt; GetMutualFundOrder(GetMutualFundOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single mutual fund order by order id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MutualFund.GetMutualFundOrder(new GetMutualFundOrderRequest
    {
        OrderId = "some example string",
    });
    // TODO: Handle 'response' of type GetMutualFundOrderDetailsResponse
}
catch (ApiException<GetMutualFundOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMutualFundOrderRequest](src/Upstox/Requests/MutualFund/GetMutualFundOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMutualFundOrderDetailsResponse](src/Upstox/Models/GetMutualFundOrderDetailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMutualFundOrderError](src/Upstox/Errors/GetMutualFundOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetMutualFundOrdersResponse&gt; GetMutualFundOrders(GetMutualFundOrdersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns mutual fund orders from the last 7 days for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MutualFund.GetMutualFundOrders(new GetMutualFundOrdersRequest
    {
        Status = "PENDING",
        TransactionType = "BUY",
        PageNumber = 1,
        Records = 20,
    });
    // TODO: Handle 'response' of type GetMutualFundOrdersResponse
}
catch (ApiException<GetMutualFundOrdersError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMutualFundOrdersRequest](src/Upstox/Requests/MutualFund/GetMutualFundOrdersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMutualFundOrdersResponse](src/Upstox/Models/GetMutualFundOrdersResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMutualFundOrdersError](src/Upstox/Errors/GetMutualFundOrdersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetMutualFundSipsResponse&gt; GetMutualFundSips(GetMutualFundSipsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns active and paused SIP orders for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.MutualFund.GetMutualFundSips(new GetMutualFundSipsRequest
    {
        PageNumber = 1,
        Records = 20,
    });
    // TODO: Handle 'response' of type GetMutualFundSipsResponse
}
catch (ApiException<GetMutualFundSipsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetMutualFundSipsRequest](src/Upstox/Requests/MutualFund/GetMutualFundSipsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetMutualFundSipsResponse](src/Upstox/Models/GetMutualFundSipsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMutualFundSipsError](src/Upstox/Errors/GetMutualFundSipsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/Upstox/Api/News.cs)

<details>
<summary><code>Task&lt;GetNewsResponse&gt; GetNews(GetNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches news articles for the given instrument keys, or the user's current positions or holdings.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.News.GetNews(new GetNewsRequest
    {
        Category = "instrument_keys",
        InstrumentKeys = "NSE_EQ|INE002A01018,NSE_EQ|INE669E01016",
        PageNumber = 1,
        PageSize = 100,
    });
    // TODO: Handle 'response' of type GetNewsResponse
}
catch (ApiException<GetNewsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetNewsRequest](src/Upstox/Requests/News/GetNewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetNewsResponse](src/Upstox/Models/GetNewsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetNewsError](src/Upstox/Errors/GetNewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Options

> Source: [Options](src/Upstox/Api/Options.cs)

<details>
<summary><code>Task&lt;GetOptionContractResponse&gt; GetOptionContracts(GetOptionContractsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the option contracts

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Options.GetOptionContracts(new GetOptionContractsRequest
    {
        InstrumentKey = "NSE_INDEX|Nifty 50",
        ExpiryDate = "2024-02-01",
    });
    // TODO: Handle 'response' of type GetOptionContractResponse
}
catch (ApiException<GetOptionContractsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOptionContractsRequest](src/Upstox/Requests/Options/GetOptionContractsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOptionContractResponse](src/Upstox/Models/GetOptionContractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetOptionContractsError](src/Upstox/Errors/GetOptionContractsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetOptionChainResponse&gt; GetPutCallOptionChain(GetPutCallOptionChainRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the option chain

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Options.GetPutCallOptionChain(new GetPutCallOptionChainRequest
    {
        InstrumentKey = "NSE_INDEX|Nifty 50",
        ExpiryDate = "2024-02-01",
    });
    // TODO: Handle 'response' of type GetOptionChainResponse
}
catch (ApiException<GetPutCallOptionChainError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPutCallOptionChainRequest](src/Upstox/Requests/Options/GetPutCallOptionChainRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOptionChainResponse](src/Upstox/Models/GetOptionChainResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetPutCallOptionChainError](src/Upstox/Errors/GetPutCallOptionChainError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Order

> Source: [Order](src/Upstox/Api/Order.cs)

<details>
<summary><code>Task&lt;GttTriggerOrderResponse&gt; CancelGttOrder(CancelGttOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to cancel GTT orders.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.CancelGttOrder(new CancelGttOrderRequest
    {
        Body = new GttCancelOrderRequest { GttOrderId = "some example string" },
    });
    // TODO: Handle 'response' of type GttTriggerOrderResponse
}
catch (ApiException<CancelGttOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelGttOrderRequest](src/Upstox/Requests/Order/CancelGttOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GttTriggerOrderResponse](src/Upstox/Models/GttTriggerOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[CancelGttOrderError](src/Upstox/Errors/CancelGttOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CancelOrExitMultiOrderResponse&gt; CancelMultiOrder(CancelMultiOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

API to cancel all the open or pending orders which can be applied to both AMO and regular orders.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.CancelMultiOrder(new CancelMultiOrderRequest());
    // TODO: Handle 'response' of type CancelOrExitMultiOrderResponse
}
catch (ApiException<CancelMultiOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelMultiOrderRequest](src/Upstox/Requests/Order/CancelMultiOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelOrExitMultiOrderResponse](src/Upstox/Models/CancelOrExitMultiOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[CancelMultiOrderError](src/Upstox/Errors/CancelMultiOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CancelOrderV3Response&gt; CancelOrder(CancelOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.CancelOrder(new CancelOrderRequest { OrderId = "some example string" });
    // TODO: Handle 'response' of type CancelOrderV3Response
}
catch (ApiException<CancelOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelOrderRequest](src/Upstox/Requests/Order/CancelOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelOrderV3Response](src/Upstox/Models/CancelOrderV3Response.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[CancelOrderError](src/Upstox/Errors/CancelOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CancelOrderResponse&gt; CancelOrder1(CancelOrder1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel order API can be used for two purposes:
Cancelling an open order which could be an AMO or a normal order
It is also used to EXIT a CO or OCO(bracket order)

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.CancelOrder1(new CancelOrder1Request { OrderId = "12345667890" });
    // TODO: Handle 'response' of type CancelOrderResponse
}
catch (ApiException<CancelOrder1Error> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelOrder1Request](src/Upstox/Requests/Order/CancelOrder1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelOrderResponse](src/Upstox/Models/CancelOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[CancelOrder1Error](src/Upstox/Errors/CancelOrder1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;CancelOrExitMultiOrderResponse&gt; ExitPositions(ExitPositionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to exit all the positions

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.ExitPositions(new ExitPositionsRequest());
    // TODO: Handle 'response' of type CancelOrExitMultiOrderResponse
}
catch (ApiException<ExitPositionsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExitPositionsRequest](src/Upstox/Requests/Order/ExitPositionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CancelOrExitMultiOrderResponse](src/Upstox/Models/CancelOrExitMultiOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[ExitPositionsError](src/Upstox/Errors/ExitPositionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetGttOrderResponse&gt; GetGttOrderDetails(GetGttOrderDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

GTT_ORDER_DESCRIPTION

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.GetGttOrderDetails(new GetGttOrderDetailsRequest
    {
        GttOrderId = "GTT-XX221130000253265",
    });
    // TODO: Handle 'response' of type GetGttOrderResponse
}
catch (ApiException<GetGttOrderDetailsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetGttOrderDetailsRequest](src/Upstox/Requests/Order/GetGttOrderDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetGttOrderResponse](src/Upstox/Models/GetGttOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetGttOrderDetailsError](src/Upstox/Errors/GetGttOrderDetailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetOrderBookResponse&gt; GetOrderBook(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the list of orders placed by the user. The orders placed by the user is transient for a day and is cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.GetOrderBook();
    // TODO: Handle 'response' of type GetOrderBookResponse
}
catch (ApiException<GetOrderBookError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOrderBookResponse](src/Upstox/Models/GetOrderBookResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetOrderBookError](src/Upstox/Errors/GetOrderBookError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetOrderResponse&gt; GetOrderDetails(GetOrderDetailsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the details of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session. This API returns all states of the orders, namely, open, pending, and filled ones.

The order history can be requested either using order_id or tag.

If both the options are passed, the history of the order which precisely matches both the order_id and tag will be returned in the response.

If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the response.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.GetOrderDetails(new GetOrderDetailsRequest
    {
        OrderId = "12345667890",
        Tag = "2qdqjppebx",
    });
    // TODO: Handle 'response' of type GetOrderResponse
}
catch (ApiException<GetOrderDetailsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrderDetailsRequest](src/Upstox/Requests/Order/GetOrderDetailsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOrderResponse](src/Upstox/Models/GetOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetOrderDetailsError](src/Upstox/Errors/GetOrderDetailsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetOrderDetailsResponse&gt; GetOrderStatus(GetOrderStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the recent detail of the particular order the user has placed. The orders placed by the user is transient for a day and are cleared by the end of the trading session.\n\nThe order details can be requested using order_id.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.GetOrderStatus(new GetOrderStatusRequest { OrderId = "12345667890" });
    // TODO: Handle 'response' of type GetOrderDetailsResponse
}
catch (ApiException<GetOrderStatusError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetOrderStatusRequest](src/Upstox/Requests/Order/GetOrderStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetOrderDetailsResponse](src/Upstox/Models/GetOrderDetailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetOrderStatusError](src/Upstox/Errors/GetOrderStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetTradeResponse&gt; GetTradeHistory(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the trades executed for the day

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.GetTradeHistory();
    // TODO: Handle 'response' of type GetTradeResponse
}
catch (ApiException<GetTradeHistoryError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTradeResponse](src/Upstox/Models/GetTradeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetTradeHistoryError](src/Upstox/Errors/GetTradeHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetTradeResponse&gt; GetTradesByOrder(GetTradesByOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve the trades executed for an order

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.GetTradesByOrder(new GetTradesByOrderRequest { OrderId = "12345667890" });
    // TODO: Handle 'response' of type GetTradeResponse
}
catch (ApiException<GetTradesByOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTradesByOrderRequest](src/Upstox/Requests/Order/GetTradesByOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTradeResponse](src/Upstox/Models/GetTradeResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetTradesByOrderError](src/Upstox/Errors/GetTradesByOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GttTriggerOrderResponse&gt; ModifyGttOrder(ModifyGttOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to modify GTT orders.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.ModifyGttOrder(new ModifyGttOrderRequest
    {
        Body = new GttModifyOrderRequest
        {
            Type = TypeEnum.Single,
            Quantity = 1,
            Rules = [new GttRule { Strategy = Strategy.Entry, TriggerType = TriggerType.Above, TriggerPrice = 1.5d }],
            GttOrderId = "some example string",
        },
    });
    // TODO: Handle 'response' of type GttTriggerOrderResponse
}
catch (ApiException<ModifyGttOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ModifyGttOrderRequest](src/Upstox/Requests/Order/ModifyGttOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GttTriggerOrderResponse](src/Upstox/Models/GttTriggerOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[ModifyGttOrderError](src/Upstox/Errors/ModifyGttOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModifyOrderV3Response&gt; ModifyOrder(ModifyOrderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.ModifyOrder(new ModifyOrderOperationRequest
    {
        Body = new ModifyOrderRequest
        {
            Validity = Validity5.Day,
            Price = 1.5d,
            OrderId = "some example string",
            OrderType = OrderType6.Market,
            TriggerPrice = 1.5d,
        },
    });
    // TODO: Handle 'response' of type ModifyOrderV3Response
}
catch (ApiException<ModifyOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ModifyOrderOperationRequest](src/Upstox/Requests/Order/ModifyOrderOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModifyOrderV3Response](src/Upstox/Models/ModifyOrderV3Response.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[ModifyOrderError](src/Upstox/Errors/ModifyOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ModifyOrderResponse&gt; ModifyOrder1(ModifyOrder1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send the optional parameter which needs to be modified. In case the optional parameters aren't sent, the default will be considered from the original order

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.ModifyOrder1(new ModifyOrder1Request
    {
        Body = new ModifyOrderRequest
        {
            Validity = Validity5.Day,
            Price = 1.5d,
            OrderId = "some example string",
            OrderType = OrderType6.Market,
            TriggerPrice = 1.5d,
        },
    });
    // TODO: Handle 'response' of type ModifyOrderResponse
}
catch (ApiException<ModifyOrder1Error> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ModifyOrder1Request](src/Upstox/Requests/Order/ModifyOrder1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ModifyOrderResponse](src/Upstox/Models/ModifyOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[ModifyOrder1Error](src/Upstox/Errors/ModifyOrder1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GttTriggerOrderResponse&gt; PlaceGttOrder(PlaceGttOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to place GTT orders.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.PlaceGttOrder(new PlaceGttOrderRequest
    {
        Body = new GttPlaceOrderRequest
        {
            Type = TypeEnum.Single,
            Quantity = 1,
            Product = Product3.I,
            Rules = [new GttRule { Strategy = Strategy.Entry, TriggerType = TriggerType.Above, TriggerPrice = 1.5d }],
            InstrumentToken = "some example string",
            TransactionType = TransactionType.Buy,
        },
    });
    // TODO: Handle 'response' of type GttTriggerOrderResponse
}
catch (ApiException<PlaceGttOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PlaceGttOrderRequest](src/Upstox/Requests/Order/PlaceGttOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GttTriggerOrderResponse](src/Upstox/Models/GttTriggerOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[PlaceGttOrderError](src/Upstox/Errors/PlaceGttOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;MultiOrderResponse&gt; PlaceMultiOrder(PlaceMultiOrderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to place multiple orders to the exchange via Upstox.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.PlaceMultiOrder(new PlaceMultiOrderRequest
    {
        Body = [
            new MultiOrderRequest
            {
                Quantity = 1,
                Product = ProductOpenApiDefinitionOrderApi.I,
                Validity = Validity.Day,
                Price = 1.5d,
                Slice = true,
                InstrumentToken = "some example string",
                OrderType = OrderTypeOpenApiDefinitionOrderApi.Market,
                TransactionType = TransactionType.Buy,
                DisclosedQuantity = 1,
                TriggerPrice = 1.5d,
                IsAmo = true,
                CorrelationId = "some example string",
            },
        ],
    });
    // TODO: Handle 'response' of type MultiOrderResponse
}
catch (ApiException<PlaceMultiOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PlaceMultiOrderRequest](src/Upstox/Requests/Order/PlaceMultiOrderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MultiOrderResponse](src/Upstox/Models/MultiOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[PlaceMultiOrderError](src/Upstox/Errors/PlaceMultiOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlaceOrderV3Response&gt; PlaceOrder(PlaceOrderOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.PlaceOrder(new PlaceOrderOperationRequest
    {
        Body = new PlaceOrderV3Request
        {
            Quantity = 1,
            Product = ProductOpenApiDefinitionOrderApi.I,
            Validity = Validity.Day,
            Price = 1.5d,
            InstrumentToken = "some example string",
            OrderType = OrderTypeOpenApiDefinitionOrderApi.Market,
            TransactionType = TransactionType.Buy,
            DisclosedQuantity = 1,
            TriggerPrice = 1.5d,
            IsAmo = true,
        },
    });
    // TODO: Handle 'response' of type PlaceOrderV3Response
}
catch (ApiException<PlaceOrderError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PlaceOrderOperationRequest](src/Upstox/Requests/Order/PlaceOrderOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaceOrderV3Response](src/Upstox/Models/PlaceOrderV3Response.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[PlaceOrderError](src/Upstox/Errors/PlaceOrderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PlaceOrderResponse&gt; PlaceOrder1(PlaceOrder1Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to place an order to the exchange via Upstox.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Order.PlaceOrder1(new PlaceOrder1Request
    {
        Body = new PlaceOrderRequest
        {
            Quantity = 1,
            Product = ProductOpenApiDefinitionOrderApi.I,
            Validity = Validity.Day,
            Price = 1.5d,
            InstrumentToken = "some example string",
            OrderType = OrderTypeOpenApiDefinitionOrderApi.Market,
            TransactionType = TransactionType.Buy,
            DisclosedQuantity = 1,
            TriggerPrice = 1.5d,
            IsAmo = true,
        },
    });
    // TODO: Handle 'response' of type PlaceOrderResponse
}
catch (ApiException<PlaceOrder1Error> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PlaceOrder1Request](src/Upstox/Requests/Order/PlaceOrder1Request.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PlaceOrderResponse](src/Upstox/Models/PlaceOrderResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[PlaceOrder1Error](src/Upstox/Errors/PlaceOrder1Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](src/Upstox/Api/Payments.cs)

<details>
<summary><code>Task&lt;PayoutDetailsResponse&gt; CancelPayout(CancelPayoutRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.CancelPayout(new CancelPayoutRequest { TransactionId = "imps_0426_7654321" });
    // TODO: Handle 'response' of type PayoutDetailsResponse
}
catch (ApiException<CancelPayoutError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CancelPayoutRequest](src/Upstox/Requests/Payments/CancelPayoutRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutDetailsResponse](src/Upstox/Models/PayoutDetailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[CancelPayoutError](src/Upstox/Errors/CancelPayoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentHistoryResponse&gt; GetPayinHistory(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.GetPayinHistory();
    // TODO: Handle 'response' of type PaymentHistoryResponse
}
catch (ApiException<GetPayinHistoryError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentHistoryResponse](src/Upstox/Models/PaymentHistoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetPayinHistoryError](src/Upstox/Errors/GetPayinHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PaymentHistoryResponse&gt; GetPayoutHistory(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.GetPayoutHistory();
    // TODO: Handle 'response' of type PaymentHistoryResponse
}
catch (ApiException<GetPayoutHistoryError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PaymentHistoryResponse](src/Upstox/Models/PaymentHistoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetPayoutHistoryError](src/Upstox/Errors/GetPayoutHistoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PayoutModesResponse&gt; GetPayoutModes(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.GetPayoutModes();
    // TODO: Handle 'response' of type PayoutModesResponse
}
catch (ApiException<GetPayoutModesError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutModesResponse](src/Upstox/Models/PayoutModesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetPayoutModesError](src/Upstox/Errors/GetPayoutModesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PayoutDetailsResponse&gt; InitiatePayout(InitiatePayoutOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.InitiatePayout(new InitiatePayoutOperationRequest
    {
        Body = new InitiatePayoutRequest { Mode = "some example string", Amount = 1.5d },
    });
    // TODO: Handle 'response' of type PayoutDetailsResponse
}
catch (ApiException<InitiatePayoutError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[InitiatePayoutOperationRequest](src/Upstox/Requests/Payments/InitiatePayoutOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutDetailsResponse](src/Upstox/Models/PayoutDetailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[InitiatePayoutError](src/Upstox/Errors/InitiatePayoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;PayoutDetailsResponse&gt; ModifyPayout(ModifyPayoutOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Payments.ModifyPayout(new ModifyPayoutOperationRequest
    {
        TransactionId = "imps_0426_7654321",
        Body = new ModifyPayoutRequest { Amount = 1.5d },
    });
    // TODO: Handle 'response' of type PayoutDetailsResponse
}
catch (ApiException<ModifyPayoutError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ModifyPayoutOperationRequest](src/Upstox/Requests/Payments/ModifyPayoutOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PayoutDetailsResponse](src/Upstox/Models/PayoutDetailsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[ModifyPayoutError](src/Upstox/Errors/ModifyPayoutError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Portfolio

> Source: [Portfolio](src/Upstox/Api/Portfolio.cs)

<details>
<summary><code>Task&lt;ConvertPositionResponse&gt; ConvertPositions(ConvertPositionsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Convert the margin product of an open position

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolio.ConvertPositions(new ConvertPositionsRequest
    {
        Body = new ConvertPositionRequest
        {
            InstrumentToken = "some example string",
            NewProduct = NewProduct.I,
            OldProduct = OldProduct.I,
            TransactionType = TransactionTypeOpenApiDefinitionPortfolioApi.Buy,
            Quantity = 1,
        },
    });
    // TODO: Handle 'response' of type ConvertPositionResponse
}
catch (ApiException<ConvertPositionsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ConvertPositionsRequest](src/Upstox/Requests/Portfolio/ConvertPositionsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConvertPositionResponse](src/Upstox/Models/ConvertPositionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[ConvertPositionsError](src/Upstox/Errors/ConvertPositionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetHoldingsResponse&gt; GetHoldings(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the holdings which the user has bought/sold in previous trading sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolio.GetHoldings();
    // TODO: Handle 'response' of type GetHoldingsResponse
}
catch (ApiException<GetHoldingsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetHoldingsResponse](src/Upstox/Models/GetHoldingsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetHoldingsError](src/Upstox/Errors/GetHoldingsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetPositionResponse&gt; GetMtfPositions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows you to get MTF positions.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolio.GetMtfPositions();
    // TODO: Handle 'response' of type GetPositionResponse
}
catch (ApiException<GetMtfPositionsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPositionResponse](src/Upstox/Models/GetPositionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMtfPositionsError](src/Upstox/Errors/GetMtfPositionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetPositionResponse&gt; GetPositions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches the current positions for the user for the current day.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Portfolio.GetPositions();
    // TODO: Handle 'response' of type GetPositionResponse
}
catch (ApiException<GetPositionsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetPositionResponse](src/Upstox/Models/GetPositionResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetPositionsError](src/Upstox/Errors/GetPositionsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## PostTrade

> Source: [PostTrade](src/Upstox/Api/PostTrade.cs)

<details>
<summary><code>Task&lt;TradeHistoryResponse&gt; GetTradesByDateRange(GetTradesByDateRangeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API retrieves the trade history for a specified time interval.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.PostTrade.GetTradesByDateRange(new GetTradesByDateRangeRequest
    {
        StartDate = "2022-04-01",
        EndDate = "2023-03-31",
        PageNumber = 1,
        PageSize = 100,
        Segment = "EQ",
    });
    // TODO: Handle 'response' of type TradeHistoryResponse
}
catch (ApiException<GetTradesByDateRangeError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTradesByDateRangeRequest](src/Upstox/Requests/PostTrade/GetTradesByDateRangeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TradeHistoryResponse](src/Upstox/Models/TradeHistoryResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetTradesByDateRangeError](src/Upstox/Errors/GetTradesByDateRangeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TradeProfitAndLoss

> Source: [TradeProfitAndLoss](src/Upstox/Api/TradeProfitAndLoss.cs)

<details>
<summary><code>Task&lt;GetProfitAndLossChargesResponse&gt; GetProfitAndLossCharges(GetProfitAndLossChargesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gives the charges incurred by users for their trades

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TradeProfitAndLoss.GetProfitAndLossCharges(new GetProfitAndLossChargesRequest
    {
        Segment = "EQ",
        FinancialYear = "2223",
        FromDate = "01-04-2022",
        ToDate = "31-03-2023",
    });
    // TODO: Handle 'response' of type GetProfitAndLossChargesResponse
}
catch (ApiException<GetProfitAndLossChargesError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetProfitAndLossChargesRequest](src/Upstox/Requests/TradeProfitAndLoss/GetProfitAndLossChargesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProfitAndLossChargesResponse](src/Upstox/Models/GetProfitAndLossChargesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetProfitAndLossChargesError](src/Upstox/Errors/GetProfitAndLossChargesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetTradeWiseProfitAndLossDataResponse&gt; GetTradeWiseProfitAndLossData(GetTradeWiseProfitAndLossDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gives the data of the realised Profit and Loss report requested by a user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TradeProfitAndLoss.GetTradeWiseProfitAndLossData(
        new GetTradeWiseProfitAndLossDataRequest
        {
            Segment = "EQ",
            FinancialYear = "2223",
            PageNumber = 1,
            PageSize = 3000,
            FromDate = "01-04-2022",
            ToDate = "31-03-2023",
        });
    // TODO: Handle 'response' of type GetTradeWiseProfitAndLossDataResponse
}
catch (ApiException<GetTradeWiseProfitAndLossDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTradeWiseProfitAndLossDataRequest](src/Upstox/Requests/TradeProfitAndLoss/GetTradeWiseProfitAndLossDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTradeWiseProfitAndLossDataResponse](src/Upstox/Models/GetTradeWiseProfitAndLossDataResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetTradeWiseProfitAndLossDataError](src/Upstox/Errors/GetTradeWiseProfitAndLossDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetTradeWiseProfitAndLossMetaDataResponse&gt; GetTradeWiseProfitAndLossMetaData(GetTradeWiseProfitAndLossMetaDataRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API gives the data of the realised Profit and Loss report requested by a user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaData(
        new GetTradeWiseProfitAndLossMetaDataRequest
        {
            Segment = "EQ",
            FinancialYear = "2223",
            FromDate = "01-04-2022",
            ToDate = "31-03-2023",
        });
    // TODO: Handle 'response' of type GetTradeWiseProfitAndLossMetaDataResponse
}
catch (ApiException<GetTradeWiseProfitAndLossMetaDataError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetTradeWiseProfitAndLossMetaDataRequest](src/Upstox/Requests/TradeProfitAndLoss/GetTradeWiseProfitAndLossMetaDataRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetTradeWiseProfitAndLossMetaDataResponse](src/Upstox/Models/GetTradeWiseProfitAndLossMetaDataResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetTradeWiseProfitAndLossMetaDataError](src/Upstox/Errors/GetTradeWiseProfitAndLossMetaDataError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## User

> Source: [User](src/Upstox/Api/User.cs)

<details>
<summary><code>Task&lt;KillSwitchResponse&gt; GetKillSwitch(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the disable/enable status of all trading segments for the user.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.User.GetKillSwitch();
    // TODO: Handle 'response' of type KillSwitchResponse
}
catch (ApiException<GetKillSwitchError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[KillSwitchResponse](src/Upstox/Models/KillSwitchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetKillSwitchError](src/Upstox/Errors/GetKillSwitchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetProfileResponse&gt; GetProfile(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API allows to fetch the complete information of the user who is logged in including the products, order types and exchanges enabled for the user

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.User.GetProfile();
    // TODO: Handle 'response' of type GetProfileResponse
}
catch (ApiException<GetProfileError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetProfileResponse](src/Upstox/Models/GetProfileResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetProfileError](src/Upstox/Errors/GetProfileError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetUserFundMarginResponse&gt; GetUserFundMargin(GetUserFundMarginRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shows the balance of the user in equity and commodity market.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.User.GetUserFundMargin(new GetUserFundMarginRequest());
    // TODO: Handle 'response' of type GetUserFundMarginResponse
}
catch (ApiException<GetUserFundMarginError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetUserFundMarginRequest](src/Upstox/Requests/User/GetUserFundMarginRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetUserFundMarginResponse](src/Upstox/Models/GetUserFundMarginResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetUserFundMarginError](src/Upstox/Errors/GetUserFundMarginError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;GetUserFundMarginV3Response&gt; GetUserFundMarginV3(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Shows the detailed balance breakdown of the user including cash, pledged margin, available-to-trade, and unavailable-to-trade components.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.User.GetUserFundMarginV3();
    // TODO: Handle 'response' of type GetUserFundMarginV3Response
}
catch (ApiException<GetUserFundMarginV3Error> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GetUserFundMarginV3Response](src/Upstox/Models/GetUserFundMarginV3Response.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetUserFundMarginV3Error](src/Upstox/Errors/GetUserFundMarginV3Error.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserIpResponse&gt; GetUserIps(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.User.GetUserIps();
    // TODO: Handle 'response' of type UserIpResponse
}
catch (ApiException<GetUserIpsError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserIpResponse](src/Upstox/Models/UserIpResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetUserIpsError](src/Upstox/Errors/GetUserIpsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;KillSwitchResponse&gt; UpdateKillSwitch(UpdateKillSwitchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable or disable specific trading segments.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.User.UpdateKillSwitch(new UpdateKillSwitchRequest
    {
        Body = [new KillSwitchSegmentUpdateRequest { Segment = Segment.BseEq, Action = ActionEnum.Enable }],
    });
    // TODO: Handle 'response' of type KillSwitchResponse
}
catch (ApiException<UpdateKillSwitchError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateKillSwitchRequest](src/Upstox/Requests/User/UpdateKillSwitchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[KillSwitchResponse](src/Upstox/Models/KillSwitchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[UpdateKillSwitchError](src/Upstox/Errors/UpdateKillSwitchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;UserIpResponse&gt; UpdateUserIp(UpdateUserIpOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.User.UpdateUserIp(new UpdateUserIpOperationRequest
    {
        Body = new UpdateUserIpRequest(),
    });
    // TODO: Handle 'response' of type UserIpResponse
}
catch (ApiException<UpdateUserIpError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateUserIpOperationRequest](src/Upstox/Requests/User/UpdateUserIpOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UserIpResponse](src/Upstox/Models/UserIpResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[UpdateUserIpError](src/Upstox/Errors/UpdateUserIpError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Websocket

> Source: [Websocket](src/Upstox/Api/Websocket.cs)

<details>
<summary><code>Task GetMarketDataFeed(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API redirects the client to the respective socket endpoint to receive Market updates.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Websocket.GetMarketDataFeed();
}
catch (ApiException<GetMarketDataFeedError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMarketDataFeedError](src/Upstox/Errors/GetMarketDataFeedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebsocketAuthRedirectResponse&gt; GetMarketDataFeedAuthorize(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the socket endpoint URI for Market updates.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Websocket.GetMarketDataFeedAuthorize();
    // TODO: Handle 'response' of type WebsocketAuthRedirectResponse
}
catch (ApiException<GetMarketDataFeedAuthorizeError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebsocketAuthRedirectResponse](src/Upstox/Models/WebsocketAuthRedirectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetMarketDataFeedAuthorizeError](src/Upstox/Errors/GetMarketDataFeedAuthorizeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task GetPortfolioStreamFeed(GetPortfolioStreamFeedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API redirects the client to the respective socket endpoint to receive Portfolio updates.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    await client.Websocket.GetPortfolioStreamFeed(new GetPortfolioStreamFeedRequest
    {
        UpdateTypes = "order,gtt_order,position,holding",
    });
}
catch (ApiException<GetPortfolioStreamFeedError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPortfolioStreamFeedRequest](src/Upstox/Requests/Websocket/GetPortfolioStreamFeedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetPortfolioStreamFeedError](src/Upstox/Errors/GetPortfolioStreamFeedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WebsocketAuthRedirectResponse&gt; GetPortfolioStreamFeedAuthorize(GetPortfolioStreamFeedAuthorizeRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

This API provides the functionality to retrieve the socket endpoint URI for Portfolio updates.

</dd>
</dl>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Websocket.GetPortfolioStreamFeedAuthorize(new GetPortfolioStreamFeedAuthorizeRequest
    {
        UpdateTypes = "order,gtt_order,position,holding",
    });
    // TODO: Handle 'response' of type WebsocketAuthRedirectResponse
}
catch (ApiException<GetPortfolioStreamFeedAuthorizeError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetPortfolioStreamFeedAuthorizeRequest](src/Upstox/Requests/Websocket/GetPortfolioStreamFeedAuthorizeRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebsocketAuthRedirectResponse](src/Upstox/Models/WebsocketAuthRedirectResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[GetPortfolioStreamFeedAuthorizeError](src/Upstox/Errors/GetPortfolioStreamFeedAuthorizeError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## EventsControllerV2

> Source: [EventsControllerV2](src/Upstox/Api/EventsControllerV2.cs)

<details>
<summary><code>Task&lt;EventResponse&gt; PublishEvent(PublishEventRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.EventsControllerV2.PublishEvent(new PublishEventRequest
    {
        Body = new EventRequest { EventType = "some example string", Event = "some example string" },
    });
    // TODO: Handle 'response' of type EventResponse
}
catch (ApiException<PublishEventError> ex)
{
    if (ex.Error.TryGetApiGatewayErrorResponse(out var error))
    {
        // TODO: Handle 'error' of type ApiGatewayErrorResponse
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PublishEventRequest](src/Upstox/Requests/EventsControllerV2/PublishEventRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EventResponse](src/Upstox/Models/EventResponse.cs)</code>

**OnError**: <code>[ApiException](src/Upstox/Core/Exceptions/ApiException.cs)&lt;[PublishEventError](src/Upstox/Errors/PublishEventError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

