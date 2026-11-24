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
using ApiVerve.Requests.Transportation;

namespace ApiVerve.Api;

public sealed class Transportation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Transportation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Airline Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AirlinelookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AirlinelookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the airline information for a specific airline IATA code
    /// </remarks>
    public Task<V1AirlinelookupResponse> Airlinelookup(AirlinelookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/airlinelookup"),
            [],
            [new Param("iata", request.Iata)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AirlinelookupResponse>(),
            AirlinelookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airport Code Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AirportcodeconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AirportcodeconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit an IATA (3-letter) or ICAO (4-letter) airport code and get the corresponding code in the other format.
    /// </remarks>
    public Task<V1AirportcodeconverterResponse> Airportcodeconverter(AirportcodeconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/airportcodeconverter"),
            [],
            [new Param("code", request.Code)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AirportcodeconverterResponse>(),
            AirportcodeconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airport Distance
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AirportdistanceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AirportdistanceError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Airport Distance is a simple tool for getting the distance between two airports. It returns the distance between the two airports.
    /// </remarks>
    public Task<V1AirportdistanceResponse> Airportdistance(AirportdistanceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/airportdistance"),
            [],
            [new Param("iata1", request.Iata1), new Param("iata2", request.Iata2)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AirportdistanceResponse>(),
            AirportdistanceError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Airports Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1AirportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AirportsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the airport information for a specific airport IATA code
    /// </remarks>
    public Task<V1AirportsResponse> Airports(AirportsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/airports"),
            [],
            [new Param("iata", request.Iata)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1AirportsResponse>(),
            AirportsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// US Car Models
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CarmodelsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CarmodelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get all car models for a specific make (manufacturer)
    /// </remarks>
    public Task<V1CarmodelsResponse> Carmodels(CarmodelsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/carmodels"),
            [],
            [
                new Param("make", request.Make),
                new Param("year", request.Year),
                new Param("model", request.Model),
                new Param("trim", request.Trim),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1CarmodelsResponse>(),
            CarmodelsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// VIN Decoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1VindecoderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="VindecoderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Decode a Vehicle Identification Number into the vehicle it identifies
    /// </remarks>
    public Task<V1VindecoderResponse> Vindecoder(VindecoderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/vindecoder"),
            [],
            [new Param("vin", request.Vin)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1VindecoderResponse>(),
            VindecoderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
