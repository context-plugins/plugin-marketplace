using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Models;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Models;
using CompSniper.Requests.Grailed;

namespace CompSniper.Api;

public sealed class Grailed
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Grailed(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Grailed active listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GrailedListingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetV1GrailedListingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Current Grailed listings with asking price, US shipping, offers, size, condition and designer. One successful call uses one request.
    /// </remarks>
    public Task<V1GrailedListingsResponse> GetV1GrailedListings(GetV1GrailedListingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/grailed/listings"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("department", request.Department),
                new Param("condition", request.Condition),
                new Param("minPrice", request.MinPrice),
                new Param("maxPrice", request.MaxPrice),
                new Param("count", request.Count),
                new Param("page", request.Page),
                new Param("sortBy", request.SortBy),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1GrailedListingsResponse>(),
            GetV1GrailedListingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Grailed sold listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1GrailedSoldResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetV1GrailedSoldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Grailed sold listings with the price the buyer paid (accepted offers included), the asking price it sold from, sold date, shipping paid, size, condition and designer. Up to 100 rows per page and 1,000 per search. One successful call uses one request.
    /// </remarks>
    public Task<V1GrailedSoldResponse> GetV1GrailedSold(GetV1GrailedSoldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/grailed/sold"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("department", request.Department),
                new Param("condition", request.Condition),
                new Param("minPrice", request.MinPrice),
                new Param("maxPrice", request.MaxPrice),
                new Param("count", request.Count),
                new Param("page", request.Page),
                new Param("sortBy", request.SortBy),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1GrailedSoldResponse>(),
            GetV1GrailedSoldError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
