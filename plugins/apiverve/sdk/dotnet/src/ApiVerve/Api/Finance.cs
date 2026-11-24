using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.Finance;

namespace ApiVerve.Api;

public sealed class Finance
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Finance(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Balance Sheet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BalancesheetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BalancesheetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the balance sheet for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.
    /// </remarks>
    public Task<V1BalancesheetResponse> Balancesheet(BalancesheetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/balancesheet"),
            [],
            [
                new Param("ticker", request.Ticker),
                new Param("year", request.Year),
                new Param("quarter", request.Quarter),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BalancesheetResponse>(),
            BalancesheetError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Benchmark Rate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BenchmarkrateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BenchmarkrateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current value for a specific benchmark rate.
    /// </remarks>
    public Task<V1BenchmarkrateResponse> Benchmarkrate(BenchmarkrateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/benchmarkrate"),
            [],
            [new Param("rate", request.Rate)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BenchmarkrateResponse>(),
            BenchmarkrateError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// BIN Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BinlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BinlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup credit card information based on the BIN
    /// </remarks>
    public Task<V1BinlookupResponse> Binlookup(BinlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/binlookup"),
            [],
            [new Param("bin", request.Bin)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BinlookupResponse>(),
            BinlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Bitcoin Price
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BitcoinResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BitcoinError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current price of Bitcoin. You can optionally specify a currency, e.g. USD
    /// </remarks>
    public Task<V1BitcoinResponse> Bitcoin(BitcoinRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bitcoin"),
            [],
            [new Param("currency", request.Currency), new Param("hourly", request.Hourly)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BitcoinResponse>(),
            BitcoinError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cash Flow Statement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CashflowResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CashflowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the cash flow statement for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.
    /// </remarks>
    public Task<V1CashflowResponse> Cashflow(CashflowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cashflow"),
            [],
            [
                new Param("ticker", request.Ticker),
                new Param("year", request.Year),
                new Param("quarter", request.Quarter),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CashflowResponse>(),
            CashflowError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Company Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CompanylookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CompanylookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get company information by stock ticker symbol.
    /// </remarks>
    public Task<V1CompanylookupResponse> Companylookup(CompanylookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/companylookup"),
            [],
            [new Param("ticker", request.Ticker)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CompanylookupResponse>(),
            CompanylookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cost of Living
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CostlivingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CostlivingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the cost of living index for a specific location. Accepts state names, state codes, or major city names.
    /// </remarks>
    public Task<V1CostlivingResponse> Costliving(CostlivingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/costliving"),
            [],
            [new Param("location", request.Location)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CostlivingResponse>(),
            CostlivingError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// CPI Inflation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CpiinflationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CpiinflationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get current or historical CPI inflation data by category
    /// </remarks>
    public Task<V1CpiinflationResponse> Cpiinflation(CpiinflationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/cpiinflation"),
            [],
            [new Param("date", request.Date), new Param("category", request.Category)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CpiinflationResponse>(),
            CpiinflationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Currency Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CurrencyconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CurrencyconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert currency rates based on the amount and currency
    /// </remarks>
    public Task<V1CurrencyconverterResponse> Currencyconverter(CurrencyconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/currencyconverter"),
            [],
            [new Param("value", request.Value), new Param("from", request.From), new Param("to", request.To)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CurrencyconverterResponse>(),
            CurrencyconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Currency Symbols
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CurrencysymbolsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CurrencysymbolsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the currency symbol and name of a currency
    /// </remarks>
    public Task<V1CurrencysymbolsResponse> Currencysymbols(CurrencysymbolsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/currencysymbols"),
            [],
            [new Param("currency", request.Currency)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CurrencysymbolsResponse>(),
            CurrencysymbolsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Dividends
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DividendsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DividendsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the dividend-per-share history for a company by ticker symbol. Optionally choose the annual or quarterly series and limit how many periods are returned.
    /// </remarks>
    public Task<V1DividendsResponse> Dividends(DividendsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/dividends"),
            [],
            [
                new Param("ticker", request.Ticker),
                new Param("period", request.Period),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DividendsResponse>(),
            DividendsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Earnings Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1EarningsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EarningsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get earnings and financial data for a company by ticker symbol. Optionally filter by year and quarter.
    /// </remarks>
    public Task<V1EarningsResponse> Earnings(EarningsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/earnings"),
            [],
            [
                new Param("ticker", request.Ticker),
                new Param("year", request.Year),
                new Param("quarter", request.Quarter),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1EarningsResponse>(),
            EarningsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ethereum Price
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1EthereumResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EthereumError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current price of Ethereum. You can optionally specify a currency, e.g. USD
    /// </remarks>
    public Task<V1EthereumResponse> Ethereum(EthereumRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ethereum"),
            [],
            [
                new Param("currency", request.Currency),
                new Param("hourly", request.Hourly),
                new Param("hourly[].hour", request.HourlyHour),
                new Param("hourly[].price", request.HourlyPrice),
                new Param("hourly[].timestamp", request.HourlyTimestamp),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1EthereumResponse>(),
            EthereumError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Exchange Rate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ExchangerateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExchangerateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exchange Rate is a simple tool for getting the current exchange rate between two currencies. It returns the current exchange rate.
    /// </remarks>
    public Task<V1ExchangerateResponse> Exchangerate(ExchangerateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/exchangerate"),
            [],
            [new Param("currency1", request.Currency1), new Param("currency2", request.Currency2)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ExchangerateResponse>(),
            ExchangerateError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Financial Ratios
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1FinancialratiosResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FinancialratiosError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the key financial ratios for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.
    /// </remarks>
    public Task<V1FinancialratiosResponse> Financialratios(FinancialratiosRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/financialratios"),
            [],
            [
                new Param("ticker", request.Ticker),
                new Param("year", request.Year),
                new Param("quarter", request.Quarter),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1FinancialratiosResponse>(),
            FinancialratiosError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// GDP Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GdpResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GdpError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get GDP data for a specific country. Returns latest data by default, or data for a specific year if specified.
    /// </remarks>
    public Task<V1GdpResponse> Gdp(GdpRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/gdp"),
            [],
            [new Param("country", request.Country), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1GdpResponse>(),
            GdpError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Global Stock Market
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GlobalstockmarketResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GlobalstockmarketError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current or historical share price index for a specific country.
    /// </remarks>
    public Task<V1GlobalstockmarketResponse> Globalstockmarket(GlobalstockmarketRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/globalstockmarket"),
            [],
            [new Param("country", request.Country), new Param("year", request.Year), new Param("month", request.Month)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1GlobalstockmarketResponse>(),
            GlobalstockmarketError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Gold Price
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GoldpriceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GoldpriceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current price of gold. You can optionally specify a currency (defaults to USD).
    /// </remarks>
    public Task<V1GoldpriceResponse> Goldprice(GoldpriceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/goldprice"),
            [],
            [
                new Param("currency", request.Currency),
                new Param("hourly", request.Hourly),
                new Param("hourly[].hour", request.HourlyHour),
                new Param("hourly[].price", request.HourlyPrice),
                new Param("hourly[].timestamp", request.HourlyTimestamp),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1GoldpriceResponse>(),
            GoldpriceError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// IFSC Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1IfsclookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IfsclookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// IFSC Lookup is a simple tool for getting information on IFSC codes. It returns information on various IFSC codes.
    /// </remarks>
    public Task<V1IfsclookupResponse> Ifsclookup(IfsclookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ifsclookup"),
            [],
            [new Param("ifsc", request.Ifsc)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1IfsclookupResponse>(),
            IfsclookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Income Statement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1IncomestatementResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IncomestatementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the income statement for a company by ticker symbol. Optionally filter to a specific fiscal year and quarter.
    /// </remarks>
    public Task<V1IncomestatementResponse> Incomestatement(IncomestatementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/incomestatement"),
            [],
            [
                new Param("ticker", request.Ticker),
                new Param("year", request.Year),
                new Param("quarter", request.Quarter),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1IncomestatementResponse>(),
            IncomestatementError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Income Tax Brackets
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1IncometaxResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IncometaxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get federal income tax brackets for a specific country and year.
    /// </remarks>
    public Task<V1IncometaxResponse> Incometax(IncometaxRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/incometax"),
            [],
            [new Param("country", request.Country), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1IncometaxResponse>(),
            IncometaxError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Income Tax Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1IncometaxcalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="IncometaxcalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate income tax using a custom tax rate. Useful for simple flat-rate tax calculations or estimations.
    /// </remarks>
    public Task<V1IncometaxcalculatorResponse> Incometaxcalculator(IncometaxcalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/incometaxcalculator"),
            [],
            [
                new Param("income", request.Income),
                new Param("rate", request.Rate),
                new Param("deduction", request.Deduction),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1IncometaxcalculatorResponse>(),
            IncometaxcalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Inflation Rate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1InflationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InflationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the annual inflation rate and CPI data for a specific country and year.
    /// </remarks>
    public Task<V1InflationResponse> Inflation(InflationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/inflation"),
            [],
            [new Param("country", request.Country), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1InflationResponse>(),
            InflationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Insider Trading
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1InsidertradingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InsidertradingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get recent SEC Form 4 insider transactions for a company by ticker symbol. Optionally filter to buys or sells and limit the number of transactions returned.
    /// </remarks>
    public Task<V1InsidertradingResponse> Insidertrading(InsidertradingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/insidertrading"),
            [],
            [new Param("ticker", request.Ticker), new Param("type", request.Type), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1InsidertradingResponse>(),
            InsidertradingError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Interest Rate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1InterestrateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InterestrateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the central bank policy interest rate for a specific country. Omit <c>date</c> for the current rate, or pass a YYYY-MM month for a historical rate (available from 2000 onwards).
    /// </remarks>
    public Task<V1InterestrateResponse> Interestrate(InterestrateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/interestrate"),
            [],
            [new Param("country", request.Country), new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1InterestrateResponse>(),
            InterestrateError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Jobs Report
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1JobsreportResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsreportError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get current or historical employment statistics
    /// </remarks>
    public Task<V1JobsreportResponse> Jobsreport(JobsreportRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/jobsreport"),
            [],
            [new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1JobsreportResponse>(),
            JobsreportError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Loan Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1LoanpaymentcalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LoanpaymentcalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate loan payments based on the loan amount, interest rate, and loan term
    /// </remarks>
    public Task<V1LoanpaymentcalculatorResponse> Loanpaymentcalculator(LoanpaymentcalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/loanpaymentcalculator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1LoanpaymentcalculatorResponse>(),
            LoanpaymentcalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Minimum Wage
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MinimumwageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MinimumwageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get minimum wage rates for all states or a specific state
    /// </remarks>
    public Task<V1MinimumwageResponse> Minimumwage(MinimumwageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/minimumwage"),
            [],
            [new Param("state", request.State), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MinimumwageResponse>(),
            MinimumwageError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Mortgage Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MortgagecalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MortgagecalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate mortgage payments based on the loan amount, interest rate, and loan term
    /// </remarks>
    public Task<V1MortgagecalculatorResponse> Mortgagecalculator(MortgagecalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mortgagecalculator"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1MortgagecalculatorResponse>(),
            MortgagecalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Mortgage Rate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MortgagerateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MortgagerateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current or historical mortgage rate for a specific type.
    /// </remarks>
    public Task<V1MortgagerateResponse> Mortgagerate(MortgagerateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mortgagerate"),
            [],
            [new Param("type", request.Type), new Param("year", request.Year), new Param("month", request.Month)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MortgagerateResponse>(),
            MortgagerateError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// National Debt
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1NationaldebtResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NationaldebtError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get current or historical US national debt data
    /// </remarks>
    public Task<V1NationaldebtResponse> Nationaldebt(NationaldebtRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/nationaldebt"),
            [],
            [new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1NationaldebtResponse>(),
            NationaldebtError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Palladium Price
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PalladiumpriceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PalladiumpriceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current price of palladium. You can optionally specify a currency (defaults to USD).
    /// </remarks>
    public Task<V1PalladiumpriceResponse> Palladiumprice(PalladiumpriceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/palladiumprice"),
            [],
            [new Param("currency", request.Currency), new Param("hourly", request.Hourly)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PalladiumpriceResponse>(),
            PalladiumpriceError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Platinum Price
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PlatinumpriceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PlatinumpriceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current price of platinum. You can optionally specify a currency (defaults to USD).
    /// </remarks>
    public Task<V1PlatinumpriceResponse> Platinumprice(PlatinumpriceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/platinumprice"),
            [],
            [new Param("currency", request.Currency), new Param("hourly", request.Hourly)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PlatinumpriceResponse>(),
            PlatinumpriceError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Population Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PopulationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PopulationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get population data for a specific country. Returns latest data by default, or data for a specific year if specified.
    /// </remarks>
    public Task<V1PopulationResponse> Population(PopulationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/population"),
            [],
            [new Param("country", request.Country), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PopulationResponse>(),
            PopulationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Purchasing Power
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PurchasingpowerResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurchasingpowerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate the inflation-adjusted value of money between two periods
    /// </remarks>
    public Task<V1PurchasingpowerResponse> Purchasingpower(PurchasingpowerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/purchasingpower"),
            [],
            [new Param("amount", request.Amount), new Param("from", request.From), new Param("to", request.To)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PurchasingpowerResponse>(),
            PurchasingpowerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Routing Number Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RoutinglookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RoutinglookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup routing number information based on the routing number
    /// </remarks>
    public Task<V1RoutinglookupResponse> Routinglookup(RoutinglookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/routinglookup"),
            [],
            [new Param("routing", request.Routing)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RoutinglookupResponse>(),
            RoutinglookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sales Tax Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SalestaxResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SalestaxError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup the sales tax rate of a location based on the zip code
    /// </remarks>
    public Task<V1SalestaxResponse> Salestax(SalestaxRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/salestax"),
            [],
            [new Param("zip", request.Zip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SalestaxResponse>(),
            SalestaxError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sales Tax Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SalestaxcalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SalestaxcalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate sales tax for a purchase amount at a specific US location
    /// </remarks>
    public Task<V1SalestaxcalculatorResponse> Salestaxcalculator(SalestaxcalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/salestaxcalculator"),
            [],
            [new Param("amount", request.Amount), new Param("zip", request.Zip), new Param("state", request.State)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SalestaxcalculatorResponse>(),
            SalestaxcalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sanctions Screening
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SanctionscreeningResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SanctionscreeningError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Screen a person or company name against the OFAC Specially Designated Nationals list. Returns scored matches, or an empty result set when the name is clear.
    /// </remarks>
    public Task<V1SanctionscreeningResponse> Sanctionscreening(SanctionscreeningRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sanctionscreening"),
            [],
            [
                new Param("name", request.Name),
                new Param("threshold", request.Threshold),
                new Param("limit", request.Limit),
                new Param("type", request.Type),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SanctionscreeningResponse>(),
            SanctionscreeningError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// I-Bond Rates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SavingsbondsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SavingsbondsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get current I-Bond rates and historical rate data
    /// </remarks>
    public Task<V1SavingsbondsResponse> Savingsbonds(SavingsbondsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/savingsbonds"),
            [],
            [new Param("period", request.Period)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SavingsbondsResponse>(),
            SavingsbondsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SEC Filings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SecfilingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SecfilingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the recent SEC EDGAR filing history for a company by ticker symbol. Optionally filter to a specific form type and limit the number of filings returned.
    /// </remarks>
    public Task<V1SecfilingsResponse> Secfilings(SecfilingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/secfilings"),
            [],
            [new Param("ticker", request.Ticker), new Param("form", request.Form), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SecfilingsResponse>(),
            SecfilingsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Silver Price
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SilverpriceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SilverpriceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current price of silver. You can optionally specify a currency (defaults to USD).
    /// </remarks>
    public Task<V1SilverpriceResponse> Silverprice(SilverpriceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/silverprice"),
            [],
            [new Param("currency", request.Currency), new Param("hourly", request.Hourly)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SilverpriceResponse>(),
            SilverpriceError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stock Exchange
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1StockexchangeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StockexchangeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get stock exchange details by its Market Identifier Code (MIC).
    /// </remarks>
    public Task<V1StockexchangeResponse> Stockexchange(StockexchangeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/stockexchange"),
            [],
            [new Param("mic", request.Mic)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1StockexchangeResponse>(),
            StockexchangeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stock Market Open Times
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1StockmarketopentimesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StockmarketopentimesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the open times of the stock market on the current date of the request
    /// </remarks>
    public Task<V1StockmarketopentimesResponse> Stockmarketopentimes(StockmarketopentimesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/stockmarketopentimes"),
            [],
            [new Param("exchange", request.Exchange)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1StockmarketopentimesResponse>(),
            StockmarketopentimesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SWIFT Code Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SwiftlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SwiftlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup SWIFT code information based on the SWIFT code
    /// </remarks>
    public Task<V1SwiftlookupResponse> Swiftlookup(SwiftlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/swiftlookup"),
            [],
            [new Param("swift", request.Swift)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SwiftlookupResponse>(),
            SwiftlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trade Balance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TradebalanceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TradebalanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get trade balance data
    /// </remarks>
    public Task<V1TradebalanceResponse> Tradebalance(TradebalanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tradebalance"),
            [],
            [new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TradebalanceResponse>(),
            TradebalanceError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Treasury Yields
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TreasuryyieldsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TreasuryyieldsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get current or historical Treasury securities interest rates
    /// </remarks>
    public Task<V1TreasuryyieldsResponse> Treasuryyields(TreasuryyieldsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/treasuryyields"),
            [],
            [new Param("date", request.Date), new Param("type", request.Type)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TreasuryyieldsResponse>(),
            TreasuryyieldsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Unemployment Rate
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UnemploymentResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UnemploymentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current or historical unemployment rate for a specific country.
    /// </remarks>
    public Task<V1UnemploymentResponse> Unemployment(UnemploymentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/unemployment"),
            [],
            [new Param("country", request.Country), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UnemploymentResponse>(),
            UnemploymentError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// VAT Rates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1VatratesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VatratesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns VAT rates for a country. Optionally specify a date for historical rates or a postcode for regional exceptions.
    /// </remarks>
    public Task<V1VatratesResponse> Vatrates(VatratesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/vatrates"),
            [],
            [
                new Param("country", request.Country),
                new Param("date", request.Date),
                new Param("postcode", request.Postcode),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1VatratesResponse>(),
            VatratesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
