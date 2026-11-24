using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.Portfolio;

namespace Upstox.Api;

public sealed class Portfolio
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Portfolio(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Convert Positions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConvertPositionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConvertPositionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Convert the margin product of an open position
    /// </remarks>
    public Task<ConvertPositionResponse> ConvertPositions(ConvertPositionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/portfolio/convert-position"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ConvertPositionResponse>(),
            ConvertPositionsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Holdings
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetHoldingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetHoldingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches the holdings which the user has bought/sold in previous trading sessions.
    /// </remarks>
    public Task<GetHoldingsResponse> GetHoldings(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/portfolio/long-term-holdings"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetHoldingsResponse>(),
            GetHoldingsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get MTF positions
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetPositionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMtfPositionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API allows you to get MTF positions.
    /// </remarks>
    public Task<GetPositionResponse> GetMtfPositions(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/portfolio/mtf-positions"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetPositionResponse>(),
            GetMtfPositionsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Positions
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetPositionResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPositionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches the current positions for the user for the current day.
    /// </remarks>
    public Task<GetPositionResponse> GetPositions(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/portfolio/short-term-positions"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetPositionResponse>(),
            GetPositionsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
