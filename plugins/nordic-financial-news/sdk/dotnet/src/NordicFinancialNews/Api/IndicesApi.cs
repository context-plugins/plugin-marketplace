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
using NordicFinancialNews.Requests.IndicesApi;

namespace NordicFinancialNews.Api;

public sealed class IndicesApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal IndicesApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Indices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1IndicesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1IndicesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns stock indices, ordered alphabetically by name. Use <c>exchange</c> to filter by a specific exchange.
    /// </remarks>
    public Task<ApiV1IndicesResponse> GetApiV1Indices(GetApiV1IndicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/indices"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("exchange", request.Exchange),
                new Param("fields", request.Fields),
            ],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1IndicesResponse>(),
            GetApiV1IndicesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Index Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1IndicesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1IndicesByIdentifierError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns details for a single index, including description and company count. Look up by index ID or symbol (case-insensitive, e.g. <c>OMXS30</c>). Note: <c>companies_count</c> reflects the number of distinct companies in the index, which may be less than the number of index constituents when a company has multiple share classes listed.
    /// </remarks>
    public Task<ApiV1IndicesResponse1> GetApiV1IndicesByIdentifier(GetApiV1IndicesByIdentifierRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/indices/{identifier}"),
            [new TemplateParam("identifier", request.Identifier)],
            [],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1IndicesResponse1>(),
            GetApiV1IndicesByIdentifierError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Index Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1IndicesCompaniesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1IndicesByIdentifierCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns companies that are members of a specific index, ordered alphabetically. The <c>ticker</c> and <c>exchange</c> shown for each company reflect its primary listing, which may differ from the listing used in this index (e.g. a company listed on multiple exchanges).
    /// </remarks>
    public Task<ApiV1IndicesCompaniesResponse> GetApiV1IndicesByIdentifierCompanies(GetApiV1IndicesByIdentifierCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/indices/{identifier}/companies"),
            [new TemplateParam("identifier", request.Identifier)],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor)],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1IndicesCompaniesResponse>(),
            GetApiV1IndicesByIdentifierCompaniesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
