using System;
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
using ApiVerve.Requests.Astrology;

namespace ApiVerve.Api;

public sealed class Astrology
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Astrology(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Chinese Zodiac
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ChinesezodiacResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ChinesezodiacError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Chinese zodiac information for a specific date
    /// </remarks>
    public Task<V1ChinesezodiacResponse> Chinesezodiac(ChinesezodiacRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/chinesezodiac"),
            [],
            [new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ChinesezodiacResponse>(),
            ChinesezodiacError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Horoscope
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HoroscopeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HoroscopeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the horoscope of the day for a specific zodiac sign
    /// </remarks>
    public Task<V1HoroscopeResponse> Horoscope(HoroscopeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/horoscope"),
            [],
            [new Param("sign", request.Sign)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1HoroscopeResponse>(),
            HoroscopeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Moon Phases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MoonphasesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MoonphasesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the moon phase for today
    /// </remarks>
    public Task<V1MoonphasesResponse> Moonphases(MoonphasesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/moonphases"),
            [],
            [new Param("today", request.Today)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MoonphasesResponse>(),
            MoonphasesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Moon Position
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MoonpositionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MoonpositionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get moon position data based on the location
    /// </remarks>
    public Task<V1MoonpositionResponse> Moonposition(MoonpositionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/moonposition"),
            [],
            [
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("date", request.Date),
                new Param("time", request.Time),
                new Param("timezone", request.Timezone),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MoonpositionResponse>(),
            MoonpositionError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Planet Positions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PlanetpositionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PlanetpositionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Planet Positions is a simple tool for getting the position of planets in the solar system. It returns the position of planets in the solar system.
    /// </remarks>
    public Task<V1PlanetpositionsResponse> Planetpositions(PlanetpositionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/planetpositions"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1PlanetpositionsResponse>(),
            PlanetpositionsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sun Position
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SunpositionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SunpositionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get sun position data based on the location
    /// </remarks>
    public Task<V1SunpositionResponse> Sunposition(SunpositionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/sunposition"),
            [],
            [
                new Param("lat", request.Lat),
                new Param("lon", request.Lon),
                new Param("date", request.Date),
                new Param("time", request.Time),
                new Param("timezone", request.Timezone),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1SunpositionResponse>(),
            SunpositionError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
