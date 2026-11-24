using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Apibara.Core;
using Apibara.Core.Exceptions;
using Apibara.Core.Extensions;
using Apibara.Core.Models;
using Apibara.Core.Request;
using Apibara.Core.Response;
using Apibara.Errors;
using Apibara.Models;
using Apibara.Requests.Market;

namespace Apibara.Api;

public sealed class Market
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Market(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Market sold-price statistics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MarketSoldPriceStatsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MarketSoldPriceStatsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Aggregate retained positive sold-history prices by make and optional model/year/damage/source/date period. Responses are cached briefly.
    /// </remarks>
    public Task<MarketSoldPriceStatsResponse> MarketSoldPriceStats(MarketSoldPriceStatsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/market/sold-prices"),
            [],
            [
                new Param("make", request.Make),
                new Param("model", request.Model),
                new Param("year", request.Year),
                new Param("damage", request.Damage),
                new Param("auction", request.Auction),
                new Param("sale_date_from", request.SaleDateFrom?.ToDate()),
                new Param("sale_date_to", request.SaleDateTo?.ToDate()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MarketSoldPriceStatsResponse>(),
            MarketSoldPriceStatsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
