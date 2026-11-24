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
using DynamicFeed.Requests.Flights;

namespace DynamicFeed.Api;

public sealed class Flights
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Flights(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Flights
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FlightsFlightsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Live aircraft right now — real-time positions from adsb.lol community ADS-B (CC0).
    /// Filter by region preset and/or callsign. Airborne flights first. (Requires API key.)
    /// </remarks>
    public Task<object> FlightsFlightsGet(FlightsFlightsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/flights"),
            [],
            [
                new Param("region", request.Region),
                new Param("callsign", request.Callsign),
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
            FlightsFlightsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
