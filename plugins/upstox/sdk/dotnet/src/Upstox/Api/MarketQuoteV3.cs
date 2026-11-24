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
using Upstox.Requests.MarketQuoteV3;

namespace Upstox.Api;

public sealed class MarketQuoteV3
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MarketQuoteV3(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Market quotes and instruments - LTP quotes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMarketQuoteLastTradedPriceResponseV3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetLtpError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 500 instruments in one go.
    /// </remarks>
    public Task<GetMarketQuoteLastTradedPriceResponseV3> GetLtp(GetLtpRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/market-quote/ltp"),
            [],
            [new Param("instrument_key", request.InstrumentKey)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMarketQuoteLastTradedPriceResponseV3>(),
            GetLtpError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Market quotes and instruments - OHLC quotes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMarketQuoteOhlcResponseV3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMarketQuoteOhlcv3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 500 instruments in one go.
    /// </remarks>
    public Task<GetMarketQuoteOhlcResponseV3> GetMarketQuoteOhlcv3(GetMarketQuoteOhlcv3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/market-quote/ohlc"),
            [],
            [new Param("interval", request.Interval), new Param("instrument_key", request.InstrumentKey)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMarketQuoteOhlcResponseV3>(),
            GetMarketQuoteOhlcv3Error.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Market quotes and instruments - Option Greek
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMarketQuoteOptionGreekResponseV3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMarketQuoteOptionGreekError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the Option Greek data for one or more instruments.This API returns the Option Greek data of up to 500 instruments in one go.
    /// </remarks>
    public Task<GetMarketQuoteOptionGreekResponseV3> GetMarketQuoteOptionGreek(GetMarketQuoteOptionGreekRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/market-quote/option-greek"),
            [],
            [new Param("instrument_key", request.InstrumentKey)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMarketQuoteOptionGreekResponseV3>(),
            GetMarketQuoteOptionGreekError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
