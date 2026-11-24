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
using Upstox.Requests.MarketQuote;

namespace Upstox.Api;

public sealed class MarketQuote
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MarketQuote(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Market quotes and instruments - Full market quotes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetFullMarketQuoteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFullMarketQuoteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the full market quotes for one or more instruments.This API returns the complete market data snapshot of up to 500 instruments in one go.
    /// </remarks>
    public Task<GetFullMarketQuoteResponse> GetFullMarketQuote(GetFullMarketQuoteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market-quote/quotes"),
            [],
            [new Param("symbol", request.Symbol), new Param("instrument_key", request.InstrumentKey)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetFullMarketQuoteResponse>(),
            GetFullMarketQuoteError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Market quotes and instruments - OHLC quotes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMarketQuoteOhlcResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMarketQuoteOhlcError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns the OHLC snapshots of up to 1000 instruments in one go.
    /// </remarks>
    public Task<GetMarketQuoteOhlcResponse> GetMarketQuoteOhlc(GetMarketQuoteOhlcRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market-quote/ohlc"),
            [],
            [
                new Param("interval", request.Interval),
                new Param("symbol", request.Symbol),
                new Param("instrument_key", request.InstrumentKey),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMarketQuoteOhlcResponse>(),
            GetMarketQuoteOhlcError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Market quotes and instruments - LTP quotes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMarketQuoteLastTradedPriceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="LtpError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns the LTPs of up to 1000 instruments in one go.
    /// </remarks>
    public Task<GetMarketQuoteLastTradedPriceResponse> Ltp(LtpRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market-quote/ltp"),
            [],
            [new Param("symbol", request.Symbol), new Param("instrument_key", request.InstrumentKey)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMarketQuoteLastTradedPriceResponse>(),
            LtpError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
