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
using Upstox.Requests.ExpiredInstrument;

namespace Upstox.Api;

public sealed class ExpiredInstrument
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ExpiredInstrument(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Expired instruments - Get future contracts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetExpiredFuturesContractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExpiredFutureContractsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve expired future contracts for a given instrument key and expiry date.
    /// </remarks>
    public Task<GetExpiredFuturesContractResponse> GetExpiredFutureContracts(GetExpiredFutureContractsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/expired-instruments/future/contract"),
            [],
            [new Param("instrument_key", request.InstrumentKey), new Param("expiry_date", request.ExpiryDate)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetExpiredFuturesContractResponse>(),
            GetExpiredFutureContractsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Expired Historical candle data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetHistoricalCandleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExpiredHistoricalCandleDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get Expired OHLC values for all instruments across various timeframes. Expired Historical data can be fetched for the following durations.
    /// 1minute: last 1 month candles till endDate
    /// 30minute: last 1 year candles till endDate
    /// day: last 1 year candles till endDate
    /// week: last 10 year candles till endDate
    /// month: last 10 year candles till endDate
    /// </remarks>
    public Task<GetHistoricalCandleResponse> GetExpiredHistoricalCandleData(GetExpiredHistoricalCandleDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/expired-instruments/historical-candle/{expired_instrument_key}/{interval}/{to_date}/{from_date}"),
            [
                new TemplateParam("expired_instrument_key", request.ExpiredInstrumentKey),
                new TemplateParam("interval", request.Interval),
                new TemplateParam("to_date", request.ToDate),
                new TemplateParam("from_date", request.FromDate),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetHistoricalCandleResponse>(),
            GetExpiredHistoricalCandleDataError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get expired option contracts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetOptionContractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExpiredOptionContractsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the expired option contracts
    /// </remarks>
    public Task<GetOptionContractResponse> GetExpiredOptionContracts(GetExpiredOptionContractsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/expired-instruments/option/contract"),
            [],
            [new Param("instrument_key", request.InstrumentKey), new Param("expiry_date", request.ExpiryDate)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetOptionContractResponse>(),
            GetExpiredOptionContractsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Expired instruments - Get expiries
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetExpiriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExpiriesResponseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve expiry dates for a given instrument key.
    /// </remarks>
    public Task<GetExpiriesResponse> GetExpiriesResponse(GetExpiriesResponseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/expired-instruments/expiries"),
            [],
            [new Param("instrument_key", request.InstrumentKey)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetExpiriesResponse>(),
            GetExpiriesResponseError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
