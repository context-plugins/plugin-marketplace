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
using ApiVerve.Requests.ReferenceData;

namespace ApiVerve.Api;

public sealed class ReferenceData
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ReferenceData(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Birthstones
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1BirthstonesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BirthstonesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get birthstone information for a specific month
    /// </remarks>
    public Task<V1BirthstonesResponse> Birthstones(BirthstonesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/birthstones"),
            [],
            [new Param("month", request.Month)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1BirthstonesResponse>(),
            BirthstonesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// CAA Record Parser
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CaaparserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CaaparserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Parse a DNS CAA record and extract authorization details
    /// </remarks>
    public Task<V1CaaparserResponse> Caaparser(CaaparserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/caaparser"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1CaaparserResponse>(),
            CaaparserError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Color Brightness Calculator
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ColorbrightnessResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ColorbrightnessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Calculate brightness, luminance, and contrast ratios for a color
    /// </remarks>
    public Task<V1ColorbrightnessResponse> Colorbrightness(ColorbrightnessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/colorbrightness"),
            [],
            [new Param("hex", request.Hex)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ColorbrightnessResponse>(),
            ColorbrightnessError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Color Name Finder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ColornamefinderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ColornamefinderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find the closest named color for a hex color value
    /// </remarks>
    public Task<V1ColornamefinderResponse> Colornamefinder(ColornamefinderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/colornamefinder"),
            [],
            [new Param("hex", request.Hex), new Param("closest", request.Closest)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ColornamefinderResponse>(),
            ColornamefinderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// HTTP Status Code Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1HttpstatuslookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HttpstatuslookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get information about an HTTP status code
    /// </remarks>
    public Task<V1HttpstatuslookupResponse> Httpstatuslookup(HttpstatuslookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/httpstatuslookup"),
            [],
            [new Param("code", request.Code)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1HttpstatuslookupResponse>(),
            HttpstatuslookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Mayan Calendar
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MayancalendarResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MayancalendarError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert a Gregorian date to Mayan calendar formats
    /// </remarks>
    public Task<V1MayancalendarResponse> Mayancalendar(MayancalendarRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mayancalendar"),
            [],
            [new Param("date", request.Date)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MayancalendarResponse>(),
            MayancalendarError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// MIME Type Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1MimetypelookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MimetypelookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Look up MIME type by file extension
    /// </remarks>
    public Task<V1MimetypelookupResponse> Mimetypelookup(MimetypelookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/mimetypelookup"),
            [],
            [new Param("extension", request.Extension)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1MimetypelookupResponse>(),
            MimetypelookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Port Number Lookup
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1PortnumberlookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PortnumberlookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Look up service information by port number
    /// </remarks>
    public Task<V1PortnumberlookupResponse> Portnumberlookup(PortnumberlookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/portnumberlookup"),
            [],
            [new Param("port", request.Port)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1PortnumberlookupResponse>(),
            PortnumberlookupError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Ring Size Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RingsizeconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RingsizeconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert ring size between international standards
    /// </remarks>
    public Task<V1RingsizeconverterResponse> Ringsizeconverter(RingsizeconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ringsizeconverter"),
            [],
            [new Param("size", request.Size), new Param("from", request.From)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RingsizeconverterResponse>(),
            RingsizeconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Shoe Size Converter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ShoesizeconverterResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ShoesizeconverterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert shoe size between international standards
    /// </remarks>
    public Task<V1ShoesizeconverterResponse> Shoesizeconverter(ShoesizeconverterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/shoesizeconverter"),
            [],
            [new Param("size", request.Size), new Param("from", request.From), new Param("gender", request.Gender)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1ShoesizeconverterResponse>(),
            ShoesizeconverterError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// SRV Record Parser
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SrvparserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SrvparserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Parse a DNS SRV record and extract service information
    /// </remarks>
    public Task<V1SrvparserResponse> Srvparser(SrvparserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/srvparser"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SrvparserResponse>(),
            SrvparserError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
