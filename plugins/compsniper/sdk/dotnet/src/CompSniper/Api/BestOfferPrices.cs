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
using CompSniper.Requests.BestOfferPrices;

namespace CompSniper.Api;

public sealed class BestOfferPrices
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BestOfferPrices(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Look up saved accepted Best Offer prices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BestOfferPricesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetBestOfferPricesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the saved accepted Best Offer price for up to 100 eBay item IDs seen in earlier bestOfferPrice=true searches. Free: does not count against monthly requests. Uses the normal per-minute rate limit.
    /// </remarks>
    public Task<V1BestOfferPricesResponse> GetBestOfferPrices(GetBestOfferPricesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/best-offer-prices"),
            [],
            [new Param("itemIds", request.ItemIds)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BestOfferPricesResponse>(),
            GetBestOfferPricesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
