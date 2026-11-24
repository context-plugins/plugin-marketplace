using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ApiVerve.Core;
using ApiVerve.Core.Exceptions;
using ApiVerve.Core.Models;
using ApiVerve.Core.Request;
using ApiVerve.Core.Response;
using ApiVerve.Errors;
using ApiVerve.Models;
using ApiVerve.Requests.Weather;

namespace ApiVerve.Api;

public sealed class Weather
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Weather(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Air Quality
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AirqualityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AirqualityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the air quality data for a city
    /// </remarks>
    public Task<V1AirqualityResponse> Airquality(AirqualityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/airquality"),
            [],
            [new Param("city", request.City)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AirqualityResponse>(),
            AirqualityError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Worldwide Earthquakes
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1EarthquakeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EarthquakeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Earthquake is a simple tool for getting earthquake data. It returns the earthquake data for the past hour.
    /// </remarks>
    public Task<V1EarthquakeResponse> Earthquake(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/earthquake"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1EarthquakeResponse>(),
            EarthquakeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Marine Weather
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MarineweatherResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MarineweatherError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the marine weather data for a location using latitude and longitude coordinates
    /// </remarks>
    public Task<V1MarineweatherResponse> Marineweather(MarineweatherRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/marineweather"),
            [],
            [new Param("lat", request.Lat), new Param("lon", request.Lon)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MarineweatherResponse>(),
            MarineweatherError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Moonrise Moonset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MoonrisemoonsetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MoonrisemoonsetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get moonrise and moonset times based on the location
    /// </remarks>
    public Task<V1MoonrisemoonsetResponse> Moonrisemoonset(MoonrisemoonsetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/moonrisemoonset"),
            [],
            [new Param("lat", request.Lat), new Param("lon", request.Lon), new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MoonrisemoonsetResponse>(),
            MoonrisemoonsetError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Solar Potential
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SolarpotentialResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SolarpotentialError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Solar Potential is a simple tool for getting the estimated annual energy production of a PV system. It returns the estimated annual energy production of a PV system.
    /// </remarks>
    public Task<V1SolarpotentialResponse> Solarpotential(SolarpotentialRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/solarpotential"),
            [],
            [new Param("lat", request.Lat), new Param("lon", request.Lon)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SolarpotentialResponse>(),
            SolarpotentialError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sunrise Sunset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SunrisesunsetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SunrisesunsetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the sunrise and sunset times for a given location
    /// </remarks>
    public Task<V1SunrisesunsetResponse> Sunrisesunset(SunrisesunsetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sunrisesunset"),
            [],
            [new Param("lat", request.Lat), new Param("lon", request.Lon), new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SunrisesunsetResponse>(),
            SunrisesunsetError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Weather
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WeatherforecastResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WeatherforecastError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the current weather for a given location
    /// </remarks>
    public Task<V1WeatherforecastResponse> Weatherforecast(WeatherforecastRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/weatherforecast"),
            [],
            [new Param("city", request.City)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WeatherforecastResponse>(),
            WeatherforecastError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Weather Seasons
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WeatherseasonsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WeatherseasonsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the dates of the solstice and equinox for a given year
    /// </remarks>
    public Task<V1WeatherseasonsResponse> Weatherseasons(WeatherseasonsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/weatherseasons"),
            [],
            [new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WeatherseasonsResponse>(),
            WeatherseasonsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
