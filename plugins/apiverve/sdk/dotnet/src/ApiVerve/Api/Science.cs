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
using ApiVerve.Requests.Science;

namespace ApiVerve.Api;

public sealed class Science
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Science(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Julian Day Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1JuliandayResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JuliandayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a Gregorian date to Julian Day Number
    /// </remarks>
    public Task<V1JuliandayResponse> Julianday(JuliandayRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/julianday"),
            [],
            [new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1JuliandayResponse>(),
            JuliandayError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Meteorite Landings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MeteoritesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MeteoritesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a list of meteorites that have fallen to Earth
    /// </remarks>
    public Task<V1MeteoritesResponse> Meteorites(MeteoritesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/meteorites"),
            [],
            [new Param("name", request.Name), new Param("mass", request.Mass), new Param("year", request.Year)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MeteoritesResponse>(),
            MeteoritesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Periodic Table
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PeriodictableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PeriodictableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get information about a chemical element
    /// </remarks>
    public Task<V1PeriodictableResponse> Periodictable(PeriodictableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/periodictable"),
            [],
            [new Param("name", request.Name)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PeriodictableResponse>(),
            PeriodictableError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stars Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1StarslookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StarslookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup star data based on the star name
    /// </remarks>
    public Task<V1StarslookupResponse> Starslookup(StarslookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/starslookup"),
            [],
            [new Param("name", request.Name)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1StarslookupResponse>(),
            StarslookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
