using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Authentication;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.History;

namespace Upstox.Api;

public sealed class History
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal History(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Historical candle data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetHistoricalCandleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetHistoricalCandleData2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
    /// 1minute: last 1 month candles till endDate
    /// 30minute: last 1 year candles till endDate
    /// day: last 1 year candles till endDate
    /// week: last 10 year candles till endDate
    /// month: last 10 year candles till endDate
    /// </remarks>
    public Task<GetHistoricalCandleResponse> GetHistoricalCandleData2(GetHistoricalCandleData2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/historical-candle/{instrumentKey}/{interval}/{to_date}"),
            [
                new TemplateParam("instrumentKey", request.InstrumentKey),
                new TemplateParam("interval", request.Interval),
                new TemplateParam("to_date", request.ToDate),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetHistoricalCandleResponse>(),
            GetHistoricalCandleData2Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Historical candle data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetHistoricalCandleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetHistoricalCandleData3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the following durations.
    /// 1minute: last 1 month candles till endDate
    /// 30minute: last 1 year candles till endDate
    /// day: last 1 year candles till endDate
    /// week: last 10 year candles till endDate
    /// month: last 10 year candles till endDate
    /// </remarks>
    public Task<GetHistoricalCandleResponse> GetHistoricalCandleData3(GetHistoricalCandleData3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/historical-candle/{instrumentKey}/{interval}/{to_date}/{from_date}"),
            [
                new TemplateParam("instrumentKey", request.InstrumentKey),
                new TemplateParam("interval", request.Interval),
                new TemplateParam("to_date", request.ToDate),
                new TemplateParam("from_date", request.FromDate),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetHistoricalCandleResponse>(),
            GetHistoricalCandleData3Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Intra day candle data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetIntraDayCandleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetIntraDayCandleData1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get OHLC values for all instruments for the present trading day
    /// </remarks>
    public Task<GetIntraDayCandleResponse> GetIntraDayCandleData1(GetIntraDayCandleData1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/historical-candle/intraday/{instrumentKey}/{interval}"),
            [
                new TemplateParam("instrumentKey", request.InstrumentKey),
                new TemplateParam("interval", request.Interval),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetIntraDayCandleResponse>(),
            GetIntraDayCandleData1Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
