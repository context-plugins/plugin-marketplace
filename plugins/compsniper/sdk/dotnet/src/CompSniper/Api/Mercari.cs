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
using CompSniper.Requests.Mercari;

namespace CompSniper.Api;

public sealed class Mercari
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Mercari(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search Mercari sold or active listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MercariResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchMercariListingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one page of public Mercari sold or active listings through a managed anonymous guest session. Authentication, rate limits, monthly quota, purchased credits, request IDs, and cache headers match the other CompSniper endpoints. Each successful page uses one CompSniper request and returns up to 100 items.
    /// </remarks>
    public Task<V1MercariResponse> SearchMercariListings(SearchMercariListingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mercari"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("page", request.Page),
                new Param("count", request.Count),
                new Param("sortOrder", request.SortOrder),
                new Param("minPrice", request.MinPrice),
                new Param("maxPrice", request.MaxPrice),
                new Param("itemCondition", request.ItemCondition),
                new Param("categoryId", request.CategoryId),
                new Param("brandId", request.BrandId),
                new Param("sold", request.Sold),
                new Param("includeListedAt", request.IncludeListedAt),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MercariResponse>(),
            SearchMercariListingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
