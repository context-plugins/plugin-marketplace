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
using DynamicFeed.Requests.SpaceWeather;

namespace DynamicFeed.Api;

public sealed class SpaceWeather
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal SpaceWeather(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Space Weather
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SpaceWeatherSpaceWeatherGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Full space-weather now-cast — NOAA R/S/G storm scales, geomagnetic Kp, solar wind (speed/
    /// density/Bz, the storm driver) and the latest solar X-ray flux/flare. Affects satellite comms &amp;
    /// drag, GPS, HF radio, power grids and orbital-compute radiation/power. (Requires API key.)
    /// </remarks>
    public Task<object> SpaceWeatherSpaceWeatherGet(SpaceWeatherSpaceWeatherGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/space-weather"),
            [],
            [],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            SpaceWeatherSpaceWeatherGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
