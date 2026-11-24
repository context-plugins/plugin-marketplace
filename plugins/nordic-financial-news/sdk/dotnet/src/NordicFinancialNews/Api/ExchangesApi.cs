using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using NordicFinancialNews.Core;
using NordicFinancialNews.Core.Exceptions;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Core.Request;
using NordicFinancialNews.Core.Response;
using NordicFinancialNews.Errors;
using NordicFinancialNews.Models;
using NordicFinancialNews.Requests.ExchangesApi;

namespace NordicFinancialNews.Api;

public sealed class ExchangesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ExchangesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Exchanges
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ExchangesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ExchangesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns active Nordic stock exchanges, ordered alphabetically. Supports filtering by country.
    /// </remarks>
    public Task<ApiV1ExchangesResponse> GetApiV1Exchanges(GetApiV1ExchangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/exchanges"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("country", request.Country),
                new Param("fields", request.Fields),
            ],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ExchangesResponse>(),
            GetApiV1ExchangesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Exchange Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ExchangesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ExchangesByIdentifierError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns detailed information about a stock exchange, including currency, timezone, and location. Look up by exchange ID (e.g. <c>exch_nasdaq1</c>) or MIC code (e.g. <c>XSTO</c>).
    /// </remarks>
    public Task<ApiV1ExchangesResponse1> GetApiV1ExchangesByIdentifier(GetApiV1ExchangesByIdentifierRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/exchanges/{identifier}"),
            [new TemplateParam("identifier", request.Identifier)],
            [],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ExchangesResponse1>(),
            GetApiV1ExchangesByIdentifierError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Exchange Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1ExchangesCompaniesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1ExchangesByIdentifierCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns companies listed on a specific exchange, ordered alphabetically. The <c>ticker</c> and <c>exchange</c> shown for each company reflect its primary listing, which may be on a different exchange if the company is listed on multiple exchanges.
    /// </remarks>
    public Task<ApiV1ExchangesCompaniesResponse> GetApiV1ExchangesByIdentifierCompanies(GetApiV1ExchangesByIdentifierCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/exchanges/{identifier}/companies"),
            [new TemplateParam("identifier", request.Identifier)],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor)],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1ExchangesCompaniesResponse>(),
            GetApiV1ExchangesByIdentifierCompaniesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
