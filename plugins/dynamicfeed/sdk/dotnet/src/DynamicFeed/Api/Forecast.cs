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
using DynamicFeed.Requests.Forecast;

namespace DynamicFeed.Api;

public sealed class Forecast
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Forecast(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Forecast
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ForecastForecastGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Multi-day weather forecast (up to 16 days) by city or lat/lon. (Requires API key.)
    /// </remarks>
    public Task<object> ForecastForecastGet(ForecastForecastGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/forecast"),
            [],
            [
                new Param("city", request.City),
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("days", request.Days),
            ],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ForecastForecastGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
