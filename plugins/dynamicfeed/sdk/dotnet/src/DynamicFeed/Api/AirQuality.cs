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
using DynamicFeed.Requests.AirQuality;

namespace DynamicFeed.Api;

public sealed class AirQuality
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal AirQuality(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Air Quality
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AirQualityAirQualityGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Current air quality (PM2.5/PM10, US &amp; European AQI) by city or lat/lon. (Requires API key.)
    /// </remarks>
    public Task<object> AirQualityAirQualityGet(AirQualityAirQualityGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/air-quality"),
            [],
            [new Param("city", request.City), new Param("lat", request.Lat), new Param("lon", request.Lon)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            AirQualityAirQualityGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
