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
using DynamicFeed.Requests.AirportDelays;

namespace DynamicFeed.Api;

public sealed class AirportDelays
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AirportDelays(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Airport Delays
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AirportDelaysAirportDelaysGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Live FAA airport delays, ground stops, closures &amp; ground-delay programs (US National Airspace
    /// System — keyless source). Empty/short list = airspace running normally. (Requires API key.)
    /// </remarks>
    public Task<object> AirportDelaysAirportDelaysGet(AirportDelaysAirportDelaysGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/airport-delays"),
            [],
            [new Param("airport", request.Airport), new Param("limit", request.Limit)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AirportDelaysAirportDelaysGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
