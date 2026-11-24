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
using NordicFinancialNews.Requests.Watchlists;

namespace NordicFinancialNews.Api;

public sealed class Watchlists
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Watchlists(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List Watchlists
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WatchlistsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1WatchlistsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all watchlists belonging to the authenticated user, ordered by position (ascending) then creation date. Each watchlist includes a company count but not the full company list. Use the Get Watchlist Details endpoint to retrieve companies. Requires the <c>read:watchlist</c> scope.
    /// </remarks>
    public Task<ApiV1WatchlistsResponse> GetApiV1Watchlists(GetApiV1WatchlistsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/watchlists"),
            [],
            [],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1WatchlistsResponse>(),
            GetApiV1WatchlistsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Watchlist Details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1WatchlistsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1WatchlistsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns watchlist details along with a paginated list of its companies, ordered alphabetically by company name. Hidden and unverified companies are excluded. Requires the <c>read:watchlist</c> scope.
    /// </remarks>
    public Task<ApiV1WatchlistsResponse1> GetApiV1WatchlistsById(GetApiV1WatchlistsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/watchlists/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor)],
            [
                new HeaderParam("If-None-Match", request.IfNoneMatch),
                new HeaderParam("If-Modified-Since", request.IfModifiedSince),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1WatchlistsResponse1>(),
            GetApiV1WatchlistsByIdError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
