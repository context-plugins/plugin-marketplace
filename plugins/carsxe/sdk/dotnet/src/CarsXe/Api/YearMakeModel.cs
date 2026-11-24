using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CarsXe.Core;
using CarsXe.Core.Authentication;
using CarsXe.Core.Exceptions;
using CarsXe.Core.Models;
using CarsXe.Core.Request;
using CarsXe.Core.Response;
using CarsXe.Errors;
using CarsXe.Models;
using CarsXe.Requests.YearMakeModel;

namespace CarsXe.Api;

/// <summary>
/// Year/make/model and OBD code endpoints
/// </summary>
public sealed class YearMakeModel
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal YearMakeModel(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// OBD Codes Decoder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ObdcodesdecoderResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DecodeObdCodeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Decode an OBD-II diagnostic trouble code (e.g. P0115).
    /// </remarks>
    public Task<ObdcodesdecoderResponse> DecodeObdCode(DecodeObdCodeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/obdcodesdecoder"),
            [],
            [new Param("code", request.Code)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ObdcodesdecoderResponse>(),
            DecodeObdCodeError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Year Make Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1YmmResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetYearMakeModelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Look up vehicle data by year, make and model (and optionally trim) without a VIN.
    /// </remarks>
    public Task<V1YmmResponse> GetYearMakeModel(GetYearMakeModelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ymm"),
            [],
            [
                new Param("year", request.Year),
                new Param("make", request.Make),
                new Param("model", request.Model),
                new Param("trim", request.Trim),
                new Param("allTrimOptions", request.AllTrimOptions),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1YmmResponse>(),
            GetYearMakeModelError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Year Make Model Options
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1YmmOptionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetYearMakeModelOptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Populate Year, Make, Model, and Variant dropdown menus. Each response returns exactly one layer. <c>dimension</c> is optional — when omitted, the response shape is inferred from <c>make</c>/<c>model</c>/<c>year</c>. Billing: most calls cost 1 unit. <c>dimension=variants</c> with <c>year</c> + <c>make</c> (no <c>model</c>) costs 1 unit per model; the response includes <c>modelCount</c>. Required filters help you get better, more relevant results. <c>year</c>, <c>make</c>, and <c>model</c> can be combined for reversed lookups (e.g. years for a given make+model).
    /// </remarks>
    public Task<V1YmmOptionsResponse> GetYearMakeModelOptions(GetYearMakeModelOptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/ymm-options"),
            [],
            [
                new Param("dimension", request.Dimension),
                new Param("year", request.Year),
                new Param("make", request.Make),
                new Param("model", request.Model),
                new Param("trim", request.Trim),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1YmmOptionsResponse>(),
            GetYearMakeModelOptionsError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
