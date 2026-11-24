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
using ApiVerve.Requests.MathCalculations;

namespace ApiVerve.Api;

public sealed class MathCalculations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MathCalculations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Color Similarity Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ColorsimilarityResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ColorsimilarityError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate similarity between two hex colors
    /// </remarks>
    public Task<V1ColorsimilarityResponse> Colorsimilarity(ColorsimilarityRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/colorsimilarity"),
            [],
            [new Param("color1", request.Color1), new Param("color2", request.Color2)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ColorsimilarityResponse>(),
            ColorsimilarityError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Daylight Duration Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DaylightdurationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DaylightdurationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate sunrise, sunset, and daylight hours for a location
    /// </remarks>
    public Task<V1DaylightdurationResponse> Daylightduration(DaylightdurationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/daylightduration"),
            [],
            [
                new Param("latitude", request.Latitude),
                new Param("longitude", request.Longitude),
                new Param("date", request.Date),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DaylightdurationResponse>(),
            DaylightdurationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fibonacci Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1FibonaccigeneratorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FibonaccigeneratorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a specific number of Fibonacci numbers
    /// </remarks>
    public Task<V1FibonaccigeneratorResponse> Fibonaccigenerator(FibonaccigeneratorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/fibonaccigenerator"),
            [],
            [new Param("count", request.Count), new Param("startfrom", request.Startfrom)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1FibonaccigeneratorResponse>(),
            FibonaccigeneratorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Permutation &amp; Combination Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PermutationcombinationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PermutationcombinationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate P(n,r) and C(n,r) values
    /// </remarks>
    public Task<V1PermutationcombinationResponse> Permutationcombination(PermutationcombinationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/permutationcombination"),
            [],
            [new Param("n", request.N), new Param("r", request.R)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PermutationcombinationResponse>(),
            PermutationcombinationError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Roman Numeral Math
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RomannumeralmathResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RomannumeralmathError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Perform arithmetic operations with Roman numerals
    /// </remarks>
    public Task<V1RomannumeralmathResponse> Romannumeralmath(RomannumeralmathRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/romannumeralmath"),
            [],
            [
                new Param("roman1", request.Roman1),
                new Param("roman2", request.Roman2),
                new Param("operation", request.Operation),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RomannumeralmathResponse>(),
            RomannumeralmathError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Tip Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TipcalculatorResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TipcalculatorError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate tip amount and split bill among people
    /// </remarks>
    public Task<V1TipcalculatorResponse> Tipcalculator(TipcalculatorRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/tipcalculator"),
            [],
            [
                new Param("amount", request.Amount),
                new Param("percentage", request.Percentage),
                new Param("people", request.People),
                new Param("currency", request.Currency),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TipcalculatorResponse>(),
            TipcalculatorError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Truth Table Generator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TruthtableResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TruthtableError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a truth table for a boolean expression
    /// </remarks>
    public Task<V1TruthtableResponse> Truthtable(TruthtableRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/truthtable"),
            [],
            [new Param("expression", request.Expression)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1TruthtableResponse>(),
            TruthtableError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UTM Coordinate Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UtmconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UtmconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert latitude/longitude coordinates to UTM format
    /// </remarks>
    public Task<V1UtmconverterResponse> Utmconverter(UtmconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/utmconverter"),
            [],
            [
                new Param("latitude", request.Latitude),
                new Param("longitude", request.Longitude),
                new Param("direction", request.Direction),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1UtmconverterResponse>(),
            UtmconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
