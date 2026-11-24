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
using Upstox.Requests.MarketHolidaysAndTimings;

namespace Upstox.Api;

public sealed class MarketHolidaysAndTimings
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MarketHolidaysAndTimings(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Change in OI Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetChangeOiDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches change in OI data for the given instrument key, expiry, date and interval.
    /// </remarks>
    public Task<AnalyticsResponse> GetChangeOiData(GetChangeOiDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/change-oi"),
            [],
            [
                new Param("instrument_key", request.InstrumentKey),
                new Param("expiry", request.Expiry),
                new Param("date", request.Date),
                new Param("interval", request.Interval),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetChangeOiDataError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get DII Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDiiDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches DII activity data for the given interval.
    /// </remarks>
    public Task<AnalyticsResponse> GetDiiData(GetDiiDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/dii"),
            [],
            [
                new Param("data_type", request.DataType),
                new Param("interval", request.Interval),
                new Param("from", request.From),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetDiiDataError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Exchange Timings on particular date
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetExchangeTimingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetExchangeTimingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the exchange timings on particular date
    /// </remarks>
    public Task<GetExchangeTimingResponse> GetExchangeTimings(GetExchangeTimingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/timings/{date}"),
            [new TemplateParam("date", request.Date)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetExchangeTimingResponse>(),
            GetExchangeTimingsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get FII Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFiiDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches FII activity data for the given data type and interval.
    /// </remarks>
    public Task<AnalyticsResponse> GetFiiData(GetFiiDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/fii"),
            [],
            [
                new Param("data_type", request.DataType),
                new Param("interval", request.Interval),
                new Param("from", request.From),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetFiiDataError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Holiday on particular date
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetHolidayResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetHolidayError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the holiday on particular date
    /// </remarks>
    public Task<GetHolidayResponse> GetHoliday(GetHolidayRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/holidays/{date}"),
            [new TemplateParam("date", request.Date)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetHolidayResponse>(),
            GetHolidayError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Holiday list of current year
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetHolidayResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetHolidaysError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the holiday list of current year
    /// </remarks>
    public Task<GetHolidayResponse> GetHolidays(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/holidays"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetHolidayResponse>(),
            GetHolidaysError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Market status for particular exchange
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetMarketStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMarketStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This API provides the functionality to retrieve the market status for particular exchange
    /// </remarks>
    public Task<GetMarketStatusResponse> GetMarketStatus(GetMarketStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/status/{exchange}"),
            [new TemplateParam("exchange", request.Exchange)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetMarketStatusResponse>(),
            GetMarketStatusError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Max Pain Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMaxPainDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches Max Pain data for the given instrument key, expiry, date and bucket interval.
    /// </remarks>
    public Task<AnalyticsResponse> GetMaxPainData(GetMaxPainDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/max-pain"),
            [],
            [
                new Param("instrument_key", request.InstrumentKey),
                new Param("expiry", request.Expiry),
                new Param("date", request.Date),
                new Param("bucket_interval", request.BucketInterval),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetMaxPainDataError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get OI Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOiDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches OI data for the given instrument key, expiry and date.
    /// </remarks>
    public Task<AnalyticsResponse> GetOiData(GetOiDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/oi"),
            [],
            [
                new Param("instrument_key", request.InstrumentKey),
                new Param("expiry", request.Expiry),
                new Param("date", request.Date),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetOiDataError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get PCR Data
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPcrDataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches PCR (Put-Call Ratio) data for the given instrument key, expiry, date and bucket interval.
    /// </remarks>
    public Task<AnalyticsResponse> GetPcrData(GetPcrDataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/pcr"),
            [],
            [
                new Param("instrument_key", request.InstrumentKey),
                new Param("expiry", request.Expiry),
                new Param("date", request.Date),
                new Param("bucket_interval", request.BucketInterval),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetPcrDataError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Smartlist Futures
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSmartlistFuturesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches the smartlist of futures for the given asset type and category.
    /// </remarks>
    public Task<AnalyticsResponse> GetSmartlistFutures(GetSmartlistFuturesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/smartlist/futures"),
            [],
            [
                new Param("asset_type", request.AssetType),
                new Param("category", request.Category),
                new Param("page_number", request.PageNumber),
                new Param("page_size", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetSmartlistFuturesError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Smartlist MTF
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSmartlistMtfError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches the smartlist of MTF (Margin Trade Funding) stocks. Prices are enriched with live LTP data.
    /// </remarks>
    public Task<AnalyticsResponse> GetSmartlistMtf(GetSmartlistMtfRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/smartlist/mtf"),
            [],
            [new Param("page_number", request.PageNumber), new Param("page_size", request.PageSize)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetSmartlistMtfError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Smartlist Options
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AnalyticsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSmartlistOptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches the smartlist of options for the given asset type and category.
    /// </remarks>
    public Task<AnalyticsResponse> GetSmartlistOptions(GetSmartlistOptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/market/smartlist/options"),
            [],
            [
                new Param("asset_type", request.AssetType),
                new Param("category", request.Category),
                new Param("page_number", request.PageNumber),
                new Param("page_size", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AnalyticsResponse>(),
            GetSmartlistOptionsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
