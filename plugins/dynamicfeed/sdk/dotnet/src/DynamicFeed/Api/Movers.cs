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
using DynamicFeed.Requests.Movers;

namespace DynamicFeed.Api;

public sealed class Movers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Movers(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Movers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MoversMoversGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// DERIVED signal — biggest 24h gainers or losers across the markets we track. Computed from
    /// Dynamic Feed's own data &amp; recorded history (not a raw source you can scrape). (Requires API key.)
    /// </remarks>
    public Task<object> MoversMoversGet(MoversMoversGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/movers"),
            [],
            [
                new Param("direction", request.Direction),
                new Param("asset_class", request.AssetClass),
                new Param("limit", request.Limit),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            MoversMoversGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
