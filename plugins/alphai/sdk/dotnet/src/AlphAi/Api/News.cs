using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AlphAi.Core;
using AlphAi.Core.Exceptions;
using AlphAi.Core.Extensions;
using AlphAi.Core.Models;
using AlphAi.Core.Request;
using AlphAi.Core.Response;
using AlphAi.Errors;
using AlphAi.Models;
using AlphAi.Requests.News;

namespace AlphAi.Api;

/// <summary>
/// Relevance-scored, ticker-linked news.
/// </summary>
public sealed class News
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal News(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List news (cursor-paginated)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsPagination"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiNewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Feed of enriched articles, newest first. Default filter:
    /// <c>relevance_score &gt;= 4</c> AND at least one active ticker. Pagination is
    /// cursor-based with a default page size of 10 (any size from 1 to 20 via
    /// <c>page_size=</c>; Pro keys go up to 50): omit <c>cursor</c> for the newest page,
    /// then pass the
    /// <c>next_cursor</c> from each response to fetch the next (older) page. <c>next_cursor: null</c> means the end of the feed. Cursors are opaque — do
    /// not construct or parse them; an invalid cursor returns 400. Archive
    /// depth is tiered: paging back past your plan's horizon (Free 30 days,
    /// Basic 90, Pro 180) returns 403 with an upgrade hint. <b>Delta polling</b> (<c>sort=ingested</c>): the same feed ordered by the
    /// moment rows became available, for "what is new since my last poll". Articles reach the feed later than their publish time (collection
    /// median ~30 min for general news, with a long tail), so a poller that
    /// filters by <c>time_published</c> misses most late arrivals; <c>sort=ingested</c>
    /// follows ingest order. First call without <c>cursor</c> returns a bounded
    /// sample of up to <c>page_size</c> recent visible rows and a cursor at the
    /// feed head. This initial sample may be partial or empty when the scan
    /// reaches its work limit; it still starts the live stream. Each later call with
    /// the previous <c>next_cursor</c> returns only rows added since. In this mode
    /// <c>next_cursor</c> is always non-null — empty <c>results</c> means you are
    /// caught up, keep the cursor and poll again later (responses are cached
    /// for 60 s, so polling more often than once a minute buys nothing). New
    /// rows only: an update to an already-delivered article is not re-sent. <c>time_published</c> is not monotonic within a delta page; sort client-side
    /// if you need chronological order. A cursor is only valid with the sort
    /// mode that issued it. On resumed requests, empty <b>successful</b> pages mean the current scan is caught up. A
    /// nonempty page shorter than <c>page_size</c> may still have a continuation;
    /// keep following its cursor. If a bounded scan cannot produce a page,
    /// HTTP 409 reports <c>extra.reason="delta_scan_incomplete"</c> and
    /// <c>extra.next_cursor</c>. Continue from that cursor with identical filters
    /// and sort; repeating the original request cannot resolve this work limit. A concurrent change during reading instead returns HTTP 503 with
    /// <c>extra.reason="delta_candidates_changed"</c>: retry the original request,
    /// without advancing its cursor. Neither error is cached. MCP delta tools
    /// report the same JSON envelopes as tool errors. The cursor family,
    /// archive gates and story-collapse behavior remain unchanged. Delta mode carries live coverage only: when we add history in bulk
    /// (backfilling an earlier period), those rows do NOT enter this stream —
    /// they would arrive as thousands of "new" items that are months old and
    /// push your cursor far behind the live feed. They are served normally in
    /// <c>sort=published</c>, by date filters and by <c>/api/news/{uid}/</c>, so a
    /// one-off catch-up over the archive is a published-mode query. <b>Keeping up.</b> One call returns at most <c>page_size</c> rows, so a poller
    /// holds its position at the head only while <c>calls per day × page_size</c>
    /// stays above the daily volume of the stream it asked for. Below that it
    /// falls a little further behind every day, and the symptom misleads:
    /// <c>time_published</c> reads hours or days old while the data is current. What went stale is the cursor, not the feed. So drain instead of
    /// polling once per tick: when a page comes back with <c>results</c> filled,
    /// call again immediately, and sleep only once <c>results</c> is empty. That
    /// clears a burst within the same cycle and lets a poller catch up by
    /// itself after downtime. Two levers if the call budget is still short,
    /// and they multiply: <c>page_size</c> (up to 20, or 50 on a Pro key) and a
    /// narrower stream (<c>min_relevance</c>, <c>symbol</c>, <c>category</c>). For scale, at
    /// the default <c>&gt;= 4</c> floor the feed carries roughly 2,700 rows a day,
    /// while <c>min_relevance=7</c> carries roughly 1,000.
    /// </remarks>
    public Task<NewsPagination> GetApiNews(GetApiNewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/news/"),
            [],
            [
                new Param("cursor", request.Cursor),
                new Param("symbol", request.Symbol),
                new Param("category", request.Category),
                new Param("exclude_categories", request.ExcludeCategories),
                new Param("min_relevance", request.MinRelevance),
                new Param("page_size", request.PageSize),
                new Param("collapse", request.Collapse),
                new Param("collapse_stories", request.CollapseStories),
                new Param("sort", request.Sort),
                new Param("from_date", request.FromDate?.ToIso8601()),
                new Param("to_date", request.ToDate?.ToIso8601()),
                new Param("source_type", request.SourceType),
                new Param("item", request.Item),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NewsPagination>(),
            GetApiNewsError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// A compact brief across multiple tickers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WatchlistBriefDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiNewsBriefError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One response with recent news grouped by story, a separate SEC Form
    /// 4/8-K/6-K filings section, and the next confirmed earnings date per
    /// ticker. Supply your symbols explicitly; this endpoint does not read
    /// an account's saved watchlist. The website and MCP tool
    /// <c>alphai_watchlist_brief</c> use the caller's saved list instead.
    /// <para>
    /// <c>hours</c> is a publication-time window ending at <c>generated_at</c>, both
    /// ends inclusive. This is a ranked snapshot, not a delta since the last
    /// call. Bulk backfills are excluded. Within each section, the newest
    /// 500 matching articles at the configured relevance floor (default 4)
    /// are grouped, then ranked by each group's highest relevance and novelty,
    /// then its newest publication time. Fields on a returned event describe
    /// the representative article. <c>limit</c>
    /// applies independently to news and filings. Either a candidate overflow
    /// or additional grouped stories sets that section's <c>*_truncated</c> flag.
    /// A truncated response is a selection, not a complete event inventory;
    /// narrow <c>hours</c> or use the paginated ticker feed for further coverage.
    /// </para>
    /// <para>
    /// An event shared by several requested tickers appears once, with
    /// <c>matched_tickers</c> naming all matches. If press coverage and a filing
    /// share a story, the filing represents it once in the filings section.
    /// Distinct Form 4 transaction legs
    /// remain separate even when they share a filing URL. Share classes and
    /// former ticker names are included. Unrecognized symbols are returned
    /// in <c>unknown_tickers</c>; bare crypto names are not guessed (use BTC-USD).
    /// Dates are confirmed only, on or after today's America/New_York date,
    /// excluding reports already matched to a published filing;
    /// absence means no confirmed date on file, not that no report is due.
    /// Available on every tier. Responses use <c>Cache-Control: private, no-store</c>.
    /// </para>
    /// </remarks>
    public Task<WatchlistBriefDto> GetApiNewsBrief(GetApiNewsBriefRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/news/brief/"),
            [],
            [
                new Param("tickers", request.Tickers, SerializationFormat.Csv),
                new Param("hours", request.Hours),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WatchlistBriefDto>(),
            GetApiNewsBriefError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a news article by UID
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RichNewsArticle"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiNewsByUidError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One enriched article. SEC rows carry the same structured block the
    /// feeds serve: <c>insider</c> on a Form 4 row (as on <c>/api/news/insider/</c>),
    /// <c>filing</c> on an 8-K row (as on <c>/api/news/</c>), so a uid taken from
    /// <c>/api/news/insider/clusters/</c> opens with its trade data. An 8-K or
    /// 6-K earnings filing can also carry <c>earnings</c> (see that field), which
    /// no feed populates.
    /// </remarks>
    public Task<RichNewsArticle> GetApiNewsByUid(GetApiNewsByUidRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/news/{uid}/"),
            [new TemplateParam("uid", request.Uid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RichNewsArticle>(),
            GetApiNewsByUidError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Articles related to one article
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiNewsRelatedResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiNewsByUidRelatedError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Up to 6 articles related to the given article: fresh articles sharing
    /// a ticker first, then same-category recents as backfill. Same enriched
    /// shape and <c>relevance_score &gt;= 4</c> filtering as <c>/api/news/</c>; insider
    /// (SEC Form 4) rows are excluded unless the base article is itself
    /// insider. No pagination — the list is a fixed-size block.
    /// </remarks>
    public Task<ApiNewsRelatedResponse> GetApiNewsByUidRelated(GetApiNewsByUidRelatedRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/news/{uid}/related/"),
            [new TemplateParam("uid", request.Uid)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiNewsRelatedResponse>(),
            GetApiNewsByUidRelatedError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Insider-transaction news (SEC Form 4)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsPagination"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiNewsInsiderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Dedicated insider feed (<c>category=insider</c>): SEC EDGAR Form 4 insider
    /// activity ONLY — one deterministic-templated row per filing event
    /// (a filing's non-derivative trades of one type and holding form,
    /// aggregated: total shares, volume-weighted average price and executed
    /// range, total value), surfaced shortly after filing, with the relevance
    /// score computed from the event's total (size, buy vs. sell, 10b5-1 plan
    /// or not). A sale (<c>transaction_code</c> <c>S</c>) tops out at 6 whatever its
    /// size, and so does a sale back to the issuer (<c>D</c>) that leaves the
    /// insider with no shares, which is how holdings are cashed out when an
    /// acquisition closes. Purchases, and a <c>D</c> that leaves a holding (the
    /// company buying back a holder's block), use the full scale. A sale
    /// filed without a price stays at 6 too. Same enriched shape, ticker
    /// and <c>relevance_score &gt;= 4</c> filtering, and cursor-based pagination as
    /// <c>/api/news/</c>. Equivalent to <c>/api/news/?category=insider</c>, surfaced as a
    /// first-class route. For aggregate stats instead of the stream, see
    /// <c>/api/symbols/{ticker}/insider-summary/</c>.
    /// <para>
    /// The category is fixed to <c>insider</c>. This endpoint does not accept
    /// <c>category</c>, <c>exclude_categories</c> or story-grouping parameters; use
    /// <c>/api/news/</c> for those filters.
    /// </para>
    /// <para>
    /// To watch for new filings, poll with <c>sort=ingested</c> rather than
    /// re-reading the newest page: a Form 4 is filed up to several days after
    /// the trade it reports, so a new event often enters the feed already
    /// below the head of the publish-ordered page. Delta mode orders by the
    /// moment the row became available, so it never misses one. The contract
    /// is identical to <c>/api/news/?sort=ingested</c> — see that endpoint for the
    /// full description.
    /// </para>
    /// </remarks>
    public Task<NewsPagination> GetApiNewsInsider(GetApiNewsInsiderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/news/insider/"),
            [],
            [
                new Param("cursor", request.Cursor),
                new Param("symbol", request.Symbol),
                new Param("min_relevance", request.MinRelevance),
                new Param("is_10b5_1", request.Is10B51),
                new Param("page_size", request.PageSize),
                new Param("sort", request.Sort),
                new Param("from_date", request.FromDate?.ToIso8601()),
                new Param("to_date", request.ToDate?.ToIso8601()),
                new Param("format", request.Format),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NewsPagination>(),
            GetApiNewsInsiderError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Insider cluster buys (several insiders of one issuer buying together)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="InsiderClustersPage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiNewsInsiderClustersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Episodes in which **several different insiders of one issuer bought on
    /// the open market together**: an issuer's Form 4 purchase dates are
    /// chained into one episode while consecutive purchases are at most 10
    /// days apart (an episode is cut at 30 days), and every purchase inside
    /// it is examined before a buyer counts.
    /// <para>
    /// Counting names is not enough — the loudest look-alikes are an IPO or
    /// PIPE allocation (caught by its price shape, or by the filing's own
    /// footnote saying the shares came from the issuer, an offering or a
    /// negotiated block), a mutual-bank conversion, ESPP / DRIP /
    /// director-plan lots, the same transaction reported through two owners
    /// (a director via the fund and the fund itself), and plan lots sitting
    /// next to one real purchase. Each buyer therefore carries a <c>role</c>:
    /// <c>independent</c> buyers are the cluster; <c>plan_like</c> (with <c>reason</c> when
    /// the filing's words decided it), <c>unpriced</c> and <c>duplicate_of</c> buyers
    /// are listed so you can see why a 30-name filing burst is not one. The episode's <c>pattern</c> is <c>open_market</c> when at
    /// least two independent buyers remain and one of them is an officer or
    /// director, <c>holders_only</c> when only 10% holders without a role remain,
    /// and <c>plan_or_offering</c> otherwise. The default hides everything but
    /// <c>open_market</c>; ask for the rest explicitly. The rule was fixed against
    /// 90 episodes checked by hand against the filings (2026-09-22): it shows
    /// 58 of 58 real clusters and hides 29 of 30 look-alikes; a 401(k) plan
    /// purchase can still pass, since the filing says so only in a footnote.
    /// </para>
    /// <para>
    /// <c>days</c> is measured on <c>known_at</c> — the moment the episode's latest
    /// filing reached EDGAR — so "what became known this month" is one call.
    /// A purchase filed more than ~40 days after the trade is not chained
    /// (2.3% of Form 4 purchases). Coverage starts at <c>meta.coverage_since</c>
    /// (the tranche table begins in August 2025); this is a descriptive
    /// screen (<c>research_only</c>, not point-in-time), with no returns attached.
    /// Only common-stock purchases outside Rule 10b5-1 plans are considered;
    /// units, preferred and warrants are ignored.
    /// </para>
    /// </remarks>
    public Task<InsiderClustersPage> GetApiNewsInsiderClusters(GetApiNewsInsiderClustersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/news/insider/clusters/"),
            [],
            [
                new Param("days", request.Days),
                new Param("min_buyers", request.MinBuyers),
                new Param("min_usd", request.MinUsd),
                new Param("pattern", request.Pattern),
                new Param("symbol", request.Symbol),
                new Param("sort", request.Sort),
                new Param("cursor", request.Cursor),
                new Param("page_size", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<InsiderClustersPage>(),
            GetApiNewsInsiderClustersError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Market-wide macro news (central banks, prints, commodities, geopolitics)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsPagination"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiNewsMacroError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Dedicated macro feed: the <c>macro_economy</c>, <c>commodities</c> and
    /// <c>geopolitics</c> categories in one stream — central-bank decisions and
    /// statements (FOMC), inflation/jobs prints, oil and gold, geopolitical
    /// risk. Same enriched shape, <c>relevance_score &gt;= 4</c> floor and
    /// cursor-based pagination as <c>/api/news/</c>; equivalent to
    /// <c>/api/news/?category=macro_economy,commodities,geopolitics</c>, surfaced
    /// as a first-class route.
    /// <para>
    /// Macro rows are market-wide, so most carry an empty <c>tickers</c> list —
    /// that is by design (an FOMC statement is not news about one company),
    /// and the per-article analysis block is still populated. A macro row
    /// that IS about listed companies (an oil-price story tagged to majors)
    /// keeps its tickers.
    /// </para>
    /// <para>
    /// To watch for new releases, poll with <c>sort=ingested</c> — same delta
    /// contract as <c>/api/news/?sort=ingested</c>.
    /// </para>
    /// </remarks>
    public Task<NewsPagination> GetApiNewsMacro(GetApiNewsMacroRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/news/macro/"),
            [],
            [
                new Param("cursor", request.Cursor),
                new Param("category", request.Category),
                new Param("min_relevance", request.MinRelevance),
                new Param("page_size", request.PageSize),
                new Param("sort", request.Sort),
                new Param("from_date", request.FromDate?.ToIso8601()),
                new Param("to_date", request.ToDate?.ToIso8601()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NewsPagination>(),
            GetApiNewsMacroError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Full-text search over the feed
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsSearchPage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiNewsSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search the enriched feed by words. <c>q</c> is matched against each
    /// article's title, its summary and the entity names the enrichment
    /// extracted; the page comes back ranked (best match first, newest first
    /// among equal matches), with a per-item <c>search_match</c> and a <c>query</c>
    /// block that says how the words were read. <c>symbol</c>, <c>category</c>,
    /// <c>source_type</c>, <c>item</c>, <c>min_relevance</c>, <c>from_date</c>, <c>to_date</c> and
    /// <c>collapse</c> apply as hard filters on top, exactly as on <c>/api/news/</c>:
    /// <c>q=director&amp;item=5.02</c> searches 8-K filings that carry item 5.02,
    /// <c>q="going concern"&amp;source_type=gdelt</c> searches press coverage only.
    /// <para>
    /// <b>Query syntax.</b> Bare words are all required (<c>chip tariffs</c>); a
    /// quoted phrase must appear in order (<c>"going concern"</c>); <c>-word</c>
    /// excludes (<c>apple -iphone</c>); <c>OR</c> separates alternatives
    /// (<c>nvidia OR amd</c>). Words in a non-Latin script are ignored. Matching
    /// tolerates one typo from five letters (<c>prices</c> reaches <c>price</c>) and a
    /// prefix on the last word; there is no stemming.
    /// </para>
    /// <para>
    /// <b>Modes</b> (<c>query.mode</c>). <c>strict</c>: every word matched. <c>broadened</c>:
    /// the strict pass found fewer than 5 rows and the query has three or
    /// more words, so the most frequent words were dropped and the page
    /// carries rows with at least two of the query's words —
    /// <c>search_match.terms_matched</c> says how many on each; read these as
    /// leads, not matches. <c>no_match</c>: nothing in the searched window.
    /// <c>no_terms</c>: the query held no searchable words. Absence is not proof
    /// the event did not happen: the searched window starts at
    /// <c>query.window_from</c>.
    /// </para>
    /// <para>
    /// <b>Window and paging.</b> The searched window is your plan's archive
    /// horizon (Free 30 days, Basic 90, Pro 180) unless <c>from_date</c> /
    /// <c>to_date</c> narrow it; a window reaching past the horizon returns 403
    /// like the feed. Results are bounded to the best 200 matches (<c>matched</c>
    /// counts them, capped at 200) and paged with an opaque <c>cursor</c> that is
    /// bound to the query that issued it. Responses are private and never
    /// shared-cached.
    /// </para>
    /// <para>
    /// <b>Failure.</b> When the search service does not answer in time the
    /// endpoint returns 503 with <c>extra.reason = "search_unavailable"</c>. The
    /// structured feed and every other endpoint are unaffected: retry the
    /// search later rather than the whole chain.
    /// </para>
    /// </remarks>
    public Task<NewsSearchPage> GetApiNewsSearch(GetApiNewsSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/news/search/"),
            [],
            [
                new Param("q", request.Q),
                new Param("cursor", request.Cursor),
                new Param("symbol", request.Symbol),
                new Param("category", request.Category),
                new Param("source_type", request.SourceType),
                new Param("item", request.Item),
                new Param("min_relevance", request.MinRelevance),
                new Param("page_size", request.PageSize),
                new Param("collapse", request.Collapse),
                new Param("collapse_stories", request.CollapseStories),
                new Param("from_date", request.FromDate?.ToIso8601()),
                new Param("to_date", request.ToDate?.ToIso8601()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NewsSearchPage>(),
            GetApiNewsSearchError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trending news (last 48h)
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="RichNewsArticle"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiNewsTrendingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Top stories from the trailing 48h: <c>relevance_score &gt;= 8</c>, ranked by relevance score decayed by article age, so a fresh story outranks an equally-scored stale one. At most two stories per ticker. Fixed size of 10, no pagination. Coverage of one story, syndicated reprints and independent write-ups of the same event alike, is collapsed to a single representative, and each item carries the <c>story_id</c>, <c>sources_count</c> and <c>sources</c> fields for the story it represents. <c>story_id</c> is the story ROOT's uid — the stable story key shared with <c>?collapse=story</c> and the MCP tools — while the item itself is the story's strongest-ranked member, so <c>story_id</c> may differ from the item's own <c>original.uid</c>. Most stories are carried by a single outlet, so <c>sources_count</c> is usually 1; see its field description.
    /// </remarks>
    public Task<IReadOnlyList<RichNewsArticle>> GetApiNewsTrending(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/news/trending/"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<RichNewsArticle>>(),
            GetApiNewsTrendingError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
