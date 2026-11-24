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
using Upstox.Requests.HistoryV3;

namespace Upstox.Api;

/// <summary>
/// Historical Candle Data V3
/// </summary>
public sealed class HistoryV3
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal HistoryV3(RawClient rawClient, Server server)
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
    /// <exception cref="ApiException{TError}"> of <see cref="GetHistoricalCandleDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get OHLC values for all instruments for the present trading day with expanded interval options.
    /// </remarks>
    public Task<GetHistoricalCandleResponse> GetHistoricalCandleData(GetHistoricalCandleDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date}"),
            [
                new TemplateParam("instrumentKey", request.InstrumentKey),
                new TemplateParam("unit", request.Unit),
                new TemplateParam("interval", request.Interval),
                new TemplateParam("to_date", request.ToDate),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetHistoricalCandleResponse>(),
            GetHistoricalCandleDataError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="GetHistoricalCandleData1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get OHLC values for all instruments for the present trading day with expanded interval options
    /// </remarks>
    public Task<GetHistoricalCandleResponse> GetHistoricalCandleData1(GetHistoricalCandleData1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date}/{from_date}"),
            [
                new TemplateParam("instrumentKey", request.InstrumentKey),
                new TemplateParam("unit", request.Unit),
                new TemplateParam("interval", request.Interval),
                new TemplateParam("to_date", request.ToDate),
                new TemplateParam("from_date", request.FromDate),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetHistoricalCandleResponse>(),
            GetHistoricalCandleData1Error.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="GetIntraDayCandleDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get OHLC values for all instruments for the present trading day
    /// </remarks>
    public Task<GetIntraDayCandleResponse> GetIntraDayCandleData(GetIntraDayCandleDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/historical-candle/intraday/{instrumentKey}/{unit}/{interval}"),
            [
                new TemplateParam("instrumentKey", request.InstrumentKey),
                new TemplateParam("unit", request.Unit),
                new TemplateParam("interval", request.Interval),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetIntraDayCandleResponse>(),
            GetIntraDayCandleDataError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
