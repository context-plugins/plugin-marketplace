using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.MarketHours;

namespace DynamicFeed.Api;

public sealed class MarketHours
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal MarketHours(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Market Hours
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MarketHoursMarketHoursGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Is the market open right now? Live open/closed + next open/close for major exchanges
    /// (plus crypto 24/7 and forex 24/5). Tells an AI whether a price is live or a closed-market
    /// last-print. (Requires API key.)
    /// </remarks>
    public Task<object> MarketHoursMarketHoursGet(MarketHoursMarketHoursGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/market-hours"),
            [],
            [new Param("market", request.Market)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            MarketHoursMarketHoursGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
