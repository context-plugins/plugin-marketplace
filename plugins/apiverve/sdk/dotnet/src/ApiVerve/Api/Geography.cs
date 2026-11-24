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
using ApiVerve.Requests.Geography;

namespace ApiVerve.Api;

public sealed class Geography
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Geography(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cities Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CitieslookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CitieslookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup city data based on the city name
    /// </remarks>
    public Task<V1CitieslookupResponse> Citieslookup(CitieslookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/citieslookup"),
            [],
            [new Param("city", request.City), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CitieslookupResponse>(),
            CitieslookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Coordinates Are Sea
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CoordinatesareseaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CoordinatesareseaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check if the coordinates are in the sea
    /// </remarks>
    public Task<V1CoordinatesareseaResponse> Coordinatesaresea(CoordinatesareseaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/coordinatesaresea"),
            [],
            [new Param("lat", request.Lat), new Param("lon", request.Lon)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CoordinatesareseaResponse>(),
            CoordinatesareseaError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Country Borders
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CountrybordersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CountrybordersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Country Borders is a simple tool for getting the list of neighboring countries for a specific country. It returns the list of neighboring countries for the specified country.
    /// </remarks>
    public Task<V1CountrybordersResponse> Countryborders(CountrybordersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/countryborders"),
            [],
            [new Param("country", request.Country)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CountrybordersResponse>(),
            CountrybordersError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Country Boundaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CountryboundariesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CountryboundariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Country Boundaries is a simple tool for getting the shape of a specific country's border. It returns the shape of the specified country's border.
    /// </remarks>
    public Task<V1CountryboundariesResponse> Countryboundaries(CountryboundariesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/countryboundaries"),
            [],
            [new Param("country", request.Country)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CountryboundariesResponse>(),
            CountryboundariesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Country Flags
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CountryflagsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CountryflagsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Country Flag is a simple tool for getting the country's national flags. It returns the country's national flags.
    /// </remarks>
    public Task<V1CountryflagsResponse> Countryflags(CountryflagsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/countryflags"),
            [],
            [
                new Param("country", request.Country),
                new Param("format", request.Format),
                new Param("shape", request.Shape),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CountryflagsResponse>(),
            CountryflagsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Country Languages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CountrylanguagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CountrylanguagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Country Languages is a simple tool for getting the list of official and commonly spoken languages in a specific country.
    /// </remarks>
    public Task<V1CountrylanguagesResponse> Countrylanguages(CountrylanguagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/countrylanguages"),
            [],
            [new Param("country", request.Country)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CountrylanguagesResponse>(),
            CountrylanguagesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Country Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CountrylookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CountrylookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup country data based on the country ISO Code
    /// </remarks>
    public Task<V1CountrylookupResponse> Countrylookup(CountrylookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/countrylookup"),
            [],
            [new Param("country", request.Country), new Param("majorcities", request.Majorcities)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CountrylookupResponse>(),
            CountrylookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// County Data Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CountydataResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CountydataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get data about a US county
    /// </remarks>
    public Task<V1CountydataResponse> Countydata(CountydataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/countydata"),
            [],
            [new Param("state", request.State), new Param("county", request.County)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CountydataResponse>(),
            CountydataError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Distance Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DistancecalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DistancecalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate the distance between two coordinates
    /// </remarks>
    public Task<V1DistancecalculatorResponse> Distancecalculator(DistancecalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/distancecalculator"),
            [],
            [
                new Param("lat1", request.Lat1),
                new Param("lon1", request.Lon1),
                new Param("lat2", request.Lat2),
                new Param("lon2", request.Lon2),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DistancecalculatorResponse>(),
            DistancecalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// USDA Hardiness Zone
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HardinesszoneResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HardinesszoneError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Hardiness Zone is a simple tool for getting the USDA Plant Hardiness Zone for a given zip code
    /// </remarks>
    public Task<V1HardinesszoneResponse> Hardinesszone(HardinesszoneRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/hardinesszone"),
            [],
            [new Param("zip", request.Zip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1HardinesszoneResponse>(),
            HardinesszoneError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reverse Geocode
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ReversegeocodeResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReversegeocodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the location of a set of coordinates, Only supports USA and Canada Coordinates
    /// </remarks>
    public Task<V1ReversegeocodeResponse> Reversegeocode(ReversegeocodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/reversegeocode"),
            [],
            [new Param("lat", request.Lat), new Param("lon", request.Lon)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ReversegeocodeResponse>(),
            ReversegeocodeError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// State Boundaries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1StateboundariesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StateboundariesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// State Boundaries is a simple tool for getting the boundaries of a specific state's border. It returns the shape of the specified state's border.
    /// </remarks>
    public Task<V1StateboundariesResponse> Stateboundaries(StateboundariesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/stateboundaries"),
            [],
            [new Param("state", request.State)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1StateboundariesResponse>(),
            StateboundariesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Zip Codes Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ZipcodesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ZipcodesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lookup the zip code information
    /// </remarks>
    public Task<V1ZipcodesResponse> Zipcodes(ZipcodesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/zipcodes"),
            [],
            [new Param("zip", request.Zip)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ZipcodesResponse>(),
            ZipcodesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
