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
using DynamicFeed.Requests.Satellite;

namespace DynamicFeed.Api;

public sealed class Satellite
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Satellite(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Satellite
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SatelliteSatelliteGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Real-time position of ANY satellite by NORAD id — true SGP4 propagation of the latest live
    /// CelesTrak TLE to the current instant: exact lat/lon, altitude, velocity, ground-footprint radius,
    /// the speed-of-light latency floor, and the TLE's age. Optionally a forward ground-track. (Requires API key.)
    /// </remarks>
    public Task<object> SatelliteSatelliteGet(SatelliteSatelliteGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/satellite"),
            [],
            [
                new Param("norad_id", request.NoradId),
                new Param("track_minutes", request.TrackMinutes),
                new Param("step_seconds", request.StepSeconds),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            SatelliteSatelliteGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
