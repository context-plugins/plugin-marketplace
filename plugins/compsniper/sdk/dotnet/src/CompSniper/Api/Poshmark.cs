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
using CompSniper.Requests.Poshmark;

namespace CompSniper.Api;

public sealed class Poshmark
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Poshmark(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Scrape Poshmark sold listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PoshmarkSoldResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchPoshmarkSoldError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one native page of public Poshmark sold listings. Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page uses one CompSniper request, including enrich=true. The native page ceiling is 48 listings.
    /// </remarks>
    public Task<V1PoshmarkSoldResponse> SearchPoshmarkSold(SearchPoshmarkSoldRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/poshmark/sold"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("page", request.Page),
                new Param("minPrice", request.MinPrice),
                new Param("maxPrice", request.MaxPrice),
                new Param("department", request.Department),
                new Param("condition", request.Condition),
                new Param("brand", request.Brand),
                new Param("sortBy", request.SortBy),
                new Param("enrich", request.Enrich),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PoshmarkSoldResponse>(),
            SearchPoshmarkSoldError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
