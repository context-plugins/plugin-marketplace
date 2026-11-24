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
using DynamicFeed.Requests.Weather;

namespace DynamicFeed.Api;

public sealed class Weather
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Weather(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// V1 Openweather Current
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1OpenweatherCurrentV1OpenweatherCurrentGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// LEGACY ALIAS — provider is Open-Meteo. Returns the canonical current_weather envelope
    /// (app/open_meteo.py: CC-BY 4.0, attribution, freshness, cross-source concordance) plus a
    /// provider-identity notice. Prefer the current_weather tool via POST /v1/batch or MCP.
    /// </remarks>
    public Task<object> V1OpenweatherCurrentV1OpenweatherCurrentGet(V1OpenweatherCurrentV1OpenweatherCurrentGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/openweather/current"),
            [],
            [new Param("city", request.City), new Param("lat", request.Lat), new Param("lon", request.Lon)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1OpenweatherCurrentV1OpenweatherCurrentGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// V1 Openweather Forecast
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="V1OpenweatherForecastV1OpenweatherForecastGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// LEGACY ALIAS — provider is Open-Meteo. Returns the canonical multi-model forecast envelope
    /// (app/open_meteo.py) plus a provider-identity notice. Prefer weather_forecast via POST /v1/batch
    /// or MCP.
    /// </remarks>
    public Task<object> V1OpenweatherForecastV1OpenweatherForecastGet(V1OpenweatherForecastV1OpenweatherForecastGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/openweather/forecast"),
            [],
            [
                new Param("city", request.City),
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("days", request.Days),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            V1OpenweatherForecastV1OpenweatherForecastGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Weather
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WeatherWeatherGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Current weather anywhere — by city name (geocoded) or lat/lon. Temperature, feels-like,
    /// wind, humidity, precipitation &amp; conditions, live from Open-Meteo. (Requires API key.)
    /// </remarks>
    public Task<object> WeatherWeatherGet(WeatherWeatherGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/weather"),
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
            WeatherWeatherGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
