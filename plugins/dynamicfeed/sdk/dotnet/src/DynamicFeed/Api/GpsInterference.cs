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
using DynamicFeed.Requests.GpsInterference;

namespace DynamicFeed.Api;

public sealed class GpsInterference
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal GpsInterference(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Gps Interference
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GpsInterferenceGpsInterferenceGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Probable GPS/GNSS interference (jamming/spoofing) over an area, MEASURED from live ADS-B navigation
    /// integrity (the GPSJam method) — a Dynamic Feed-derived signal (from adsb.lol, CC0). Pass a region
    /// preset or lat+lon. (Requires API key.)
    /// </remarks>
    public Task<object> GpsInterferenceGpsInterferenceGet(GpsInterferenceGpsInterferenceGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/gps-interference"),
            [],
            [
                new Param("region", request.Region),
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("radius_km", request.RadiusKm),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GpsInterferenceGpsInterferenceGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
