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
using DynamicFeed.Requests.WeatherAlerts;

namespace DynamicFeed.Api;

public sealed class WeatherAlerts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal WeatherAlerts(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Weather Alerts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WeatherAlertsWeatherAlertsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Active US NWS weather alerts/warnings — life-safety watches/warnings/advisories. (Requires API key.)
    /// </remarks>
    public Task<object> WeatherAlertsWeatherAlertsGet(WeatherAlertsWeatherAlertsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/weather-alerts"),
            [],
            [new Param("area", request.Area), new Param("event", request.Event), new Param("limit", request.Limit)],
            [
                new HeaderParam("x-api-key", request.XApiKey),
                new HeaderParam("x-rapidapi-proxy-secret", request.XRapidapiProxySecret),
                new HeaderParam("x-rapidapi-user", request.XRapidapiUser),
            ],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            WeatherAlertsWeatherAlertsGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
