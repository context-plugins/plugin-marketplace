using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.Fundamentals;

namespace Upstox.Api;

public sealed class Fundamentals
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Fundamentals(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Balance Sheet
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BalanceSheetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBalanceSheetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches balance sheet data for the given ISIN.
    /// </remarks>
    public Task<BalanceSheetResponse> GetBalanceSheet(GetBalanceSheetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fundamentals/{isin}/balance-sheet"),
            [new TemplateParam("isin", request.Isin)],
            [new Param("type", request.Type), new Param("fs", request.Fs)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<BalanceSheetResponse>(),
            GetBalanceSheetError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Cash Flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CashFlowResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCashFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches cash flow data for the given ISIN.
    /// </remarks>
    public Task<CashFlowResponse> GetCashFlow(GetCashFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fundamentals/{isin}/cash-flow"),
            [new TemplateParam("isin", request.Isin)],
            [new Param("type", request.Type), new Param("fs", request.Fs)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CashFlowResponse>(),
            GetCashFlowError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Company Profile
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanyProfileResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanyProfileError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches company profile information for the given ISIN.
    /// </remarks>
    public Task<CompanyProfileResponse> GetCompanyProfile(GetCompanyProfileRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fundamentals/{isin}/profile"),
            [new TemplateParam("isin", request.Isin)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompanyProfileResponse>(),
            GetCompanyProfileError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Competitors
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompetitorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompetitorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches the list of competitors for the given instrument_key.
    /// </remarks>
    public Task<CompetitorsResponse> GetCompetitors(GetCompetitorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fundamentals/{instrument_key}/competitors"),
            [new TemplateParam("instrument_key", request.InstrumentKey)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompetitorsResponse>(),
            GetCompetitorsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Corporate Actions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CorporateActionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCorporateActionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches corporate actions for the given ISIN.
    /// </remarks>
    public Task<CorporateActionsResponse> GetCorporateActions(GetCorporateActionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fundamentals/{isin}/corporate-actions"),
            [new TemplateParam("isin", request.Isin)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CorporateActionsResponse>(),
            GetCorporateActionsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Income Statement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IncomeStatementResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIncomeStatementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches income statement data for the given ISIN.
    /// </remarks>
    public Task<IncomeStatementResponse> GetIncomeStatement(GetIncomeStatementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fundamentals/{isin}/income-statement"),
            [new TemplateParam("isin", request.Isin)],
            [
                new Param("type", request.Type),
                new Param("time_period", request.TimePeriod),
                new Param("fs", request.Fs),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IncomeStatementResponse>(),
            GetIncomeStatementError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Key Ratios
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="KeyRatiosResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetKeyRatiosError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches key financial ratios for the given ISIN.
    /// </remarks>
    public Task<KeyRatiosResponse> GetKeyRatios(GetKeyRatiosRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fundamentals/{isin}/key-ratios"),
            [new TemplateParam("isin", request.Isin)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<KeyRatiosResponse>(),
            GetKeyRatiosError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Share Holdings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ShareHoldingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetShareHoldingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches shareholding pattern for the given ISIN.
    /// </remarks>
    public Task<ShareHoldingsResponse> GetShareHoldings(GetShareHoldingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/fundamentals/{isin}/share-holdings"),
            [new TemplateParam("isin", request.Isin)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ShareHoldingsResponse>(),
            GetShareHoldingsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
