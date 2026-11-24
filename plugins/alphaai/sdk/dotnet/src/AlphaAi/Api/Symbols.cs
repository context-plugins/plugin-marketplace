using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AlphaAi.Core;
using AlphaAi.Core.Exceptions;
using AlphaAi.Core.Models;
using AlphaAi.Core.Request;
using AlphaAi.Core.Response;
using AlphaAi.Errors;
using AlphaAi.Models;
using AlphaAi.Requests.Symbols;

namespace AlphaAi.Api;

/// <summary>
/// Active equity, crypto, and foreign symbols (tickers).
/// </summary>
public sealed class Symbols
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Symbols(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List active tickers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="Symbol"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// All active symbols (US equities, US exchange-traded funds, crypto, and foreign listings), alphabetical by ticker. ~16k entries — cache aggressively, or slice with the optional <c>limit</c>/<c>offset</c> params (the response stays a bare array either way). Pass <c>search</c> to resolve a name, brand or ticker prefix to its canonical symbol (<c>search=bitcoin</c> returns <c>BTC-USD</c>, <c>search=spacex</c> returns <c>SPCX</c>).
    /// </remarks>
    public Task<IReadOnlyList<Symbol>> GetApiSymbols(GetApiSymbolsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/"),
            [],
            [
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("search", request.Search),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<Symbol>>(),
            GetApiSymbolsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Symbol detail
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Symbol"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsByTickerError"/> when the server returns an error response.</exception>
    public Task<Symbol> GetApiSymbolsByTicker(GetApiSymbolsByTickerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/{ticker}/"),
            [new TemplateParam("ticker", request.Ticker)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Symbol>(),
            GetApiSymbolsByTickerError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// AlphAI earnings reads for one ticker, plus its next report date
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TickerEarningsHistory"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsByTickerEarningsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every published AlphAI earnings read for the ticker, newest first, and
    /// the date of its next report when the company has confirmed one.
    /// <para>
    /// A read is produced from the company's own SEC filing — an 8-K item 2.02
    /// for US filers, a 6-K earnings release for foreign private issuers —
    /// within minutes of it reaching EDGAR, and every number in it is verified
    /// against the filing text before publication. <c>/earnings/latest/</c> returns
    /// just a pointer to the newest one; this endpoint returns the analyses
    /// themselves.
    /// </para>
    /// <para>
    /// Bridges share classes: a request for one class returns the reads filed
    /// under the issuer's primary class, and each row's <c>ticker</c> names the
    /// class it was actually filed under, which may differ from the one you
    /// asked for.
    /// </para>
    /// <para>
    /// Unpaginated and capped at 20 reads. Depth is currently shallow by
    /// construction — AlphAI's reads exist for filings from late July 2026
    /// onward and reports arrive quarterly — so most tickers carry one or two.
    /// </para>
    /// </remarks>
    public Task<TickerEarningsHistory> GetApiSymbolsByTickerEarnings(GetApiSymbolsByTickerEarningsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/{ticker}/earnings/"),
            [new TemplateParam("ticker", request.Ticker)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TickerEarningsHistory>(),
            GetApiSymbolsByTickerEarningsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Most recent AlphAI earnings read for one ticker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LatestEarningsPointer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsByTickerEarningsLatestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// A pointer to the ticker's most recent published earnings read (SEC 8-K
    /// item 2.02, or a foreign private issuer's 6-K earnings release). Resolve
    /// the full analysis via <c>/api/news/{uid}/</c>, whose
    /// <c>earnings</c> object carries it. Bridges share classes: a request for one
    /// class returns the read filed under the issuer's primary class.
    /// </remarks>
    public Task<LatestEarningsPointer> GetApiSymbolsByTickerEarningsLatest(GetApiSymbolsByTickerEarningsLatestRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/{ticker}/earnings/latest/"),
            [new TemplateParam("ticker", request.Ticker)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LatestEarningsPointer>(),
            GetApiSymbolsByTickerEarningsLatestError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// 30-day insider-transaction rollup for one ticker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TickerInsiderSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsByTickerInsiderSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Aggregated SEC Form 4 activity over the trailing 30 days: buy/sell
    /// transaction counts, dollar volumes, the share of transactions executed
    /// under pre-arranged 10b5-1 plans, and the most active insiders ranked
    /// by absolute net value (buys minus sells).
    /// </remarks>
    public Task<TickerInsiderSummary> GetApiSymbolsByTickerInsiderSummary(GetApiSymbolsByTickerInsiderSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/{ticker}/insider-summary/"),
            [new TemplateParam("ticker", request.Ticker)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TickerInsiderSummary>(),
            GetApiSymbolsByTickerInsiderSummaryError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Form 4 event history and chart aggregates for one ticker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TickerInsiderTrades"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsByTickerInsiderTradesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The complete per-ticker insider-trading payload behind
    /// alphai.io/stock/{ticker}/insider-trades: the paginated Form 4 event
    /// history plus everything a chart needs, in one request. One event is
    /// a filing's whole tranche group (shares summed, the price
    /// value-weighted, a 10b5-1 ladder is ONE event), same folding as the
    /// feed's <c>insider</c> block.
    /// <para>
    /// The first page (no <c>cursor</c>) also carries the aggregates: <c>summary</c>
    /// (3-month, 12-month and all-time windows plus the most active
    /// insiders of the last 12 months), <c>series</c> (monthly buckets) and
    /// <c>series_weekly</c> (Monday-keyed weekly buckets), both zero-filled up
    /// to the current period and capped to the trailing 12 months, and
    /// <c>chart_events</c> — every event of the trailing 12 months regardless of
    /// pagination. The aggregates always cover both sides regardless of the
    /// <c>side</c> filter, and they are <c>null</c> on cursor pages, which carry only
    /// the next <c>events</c> chunk.
    /// </para>
    /// <para>
    /// Side semantics on this surface follow the value flow: code P is
    /// <c>buy</c>; codes S and D are both <c>sell</c>, because a code D sale back to
    /// the issuer moves dollars off the insider's position like any sale.
    /// This deliberately differs from the feed's <c>insider.side</c>, which
    /// labels D as <c>other</c>; use <c>transaction_code</c> to tell a market sale
    /// (S) from a sale to the issuer (D).
    /// </para>
    /// </remarks>
    public Task<TickerInsiderTrades> GetApiSymbolsByTickerInsiderTrades(GetApiSymbolsByTickerInsiderTradesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/{ticker}/insider-trades/"),
            [new TemplateParam("ticker", request.Ticker)],
            [
                new Param("side", request.Side),
                new Param("cursor", request.Cursor),
                new Param("page_size", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TickerInsiderTrades>(),
            GetApiSymbolsByTickerInsiderTradesError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Related tickers for one ticker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SymbolPeers"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsByTickerPeersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Other companies in the same industry (widening to the broader sector
    /// when the industry is thin) that carry recent enriched news, most
    /// recently covered first. Powers the "Related tickers" links on the stock
    /// hub pages.
    /// </remarks>
    public Task<SymbolPeers> GetApiSymbolsByTickerPeers(GetApiSymbolsByTickerPeersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/{ticker}/peers/"),
            [new TemplateParam("ticker", request.Ticker)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SymbolPeers>(),
            GetApiSymbolsByTickerPeersError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// 7-day AI sentiment rollup for one ticker
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TickerSentimentSummary"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsByTickerSentimentSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Counts of bullish / neutral / bearish per-ticker sentiment calls from
    /// the enriched news flow, plus per-day buckets. The window is the last 7
    /// UTC calendar days, today included (today is partial): <c>daily</c> holds one
    /// bucket per day, and <c>bullish</c>, <c>neutral</c>, <c>bearish</c> and <c>total</c> are the
    /// sums of those buckets. Insider (SEC Form 4) template rows are excluded —
    /// this reflects press coverage, not filings.
    /// </remarks>
    public Task<TickerSentimentSummary> GetApiSymbolsByTickerSentimentSummary(GetApiSymbolsByTickerSentimentSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/{ticker}/sentiment-summary/"),
            [new TemplateParam("ticker", request.Ticker)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TickerSentimentSummary>(),
            GetApiSymbolsByTickerSentimentSummaryError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stock directory — most-covered tickers and sector cards
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SymbolDirectory"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsDirectoryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The hub index behind /stocks: the globally most-covered tickers over
    /// the trailing window, plus one card per sector (size + its busiest
    /// names). Ranked by recent enriched-news coverage.
    /// </remarks>
    public Task<SymbolDirectory> GetApiSymbolsDirectory(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/directory/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SymbolDirectory>(),
            GetApiSymbolsDirectoryError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// One sector's most-covered tickers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SectorSymbols"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiSymbolsSectorsBySlugError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The tickers in a sector (by slug, e.g. <c>financial-services</c>), ranked by
    /// recent enriched-news coverage. Powers the /stocks/{slug} sub-pages.
    /// Returns up to 500 index-eligible tickers per page, ordered by coverage
    /// descending then ticker. Increment <c>page</c> while <c>has_next</c> is true.
    /// <c>count</c> is the number on this page; <c>total_count</c> is the whole sector.
    /// A page beyond the end returns an empty <c>symbols</c> array and <c>has_next: false</c>.
    /// Rankings refresh periodically; this is a live directory, not a historical snapshot.
    /// </remarks>
    public Task<SectorSymbols> GetApiSymbolsSectorsBySlug(GetApiSymbolsSectorsBySlugRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/symbols/sectors/{slug}/"),
            [new TemplateParam("slug", request.Slug)],
            [new Param("page", request.Page)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SectorSymbols>(),
            GetApiSymbolsSectorsBySlugError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
