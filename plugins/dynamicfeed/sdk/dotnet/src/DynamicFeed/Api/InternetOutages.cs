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
using DynamicFeed.Requests.InternetOutages;

namespace DynamicFeed.Api;

public sealed class InternetOutages
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal InternetOutages(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Internet Outages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InternetOutagesInternetOutagesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Live BGP routing health for a network resource from RIPEstat (RIPE NCC). Global visibility +
    /// outage signal (healthy/degraded/outage) — a sharp visibility drop = the network is losing global
    /// reachability. The clean, redistributable RIPEstat replacement for CAIDA. (Requires API key.)
    /// </remarks>
    public Task<object> InternetOutagesInternetOutagesGet(InternetOutagesInternetOutagesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/internet-outages"),
            [],
            [new Param("resource", request.Resource)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            InternetOutagesInternetOutagesGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
