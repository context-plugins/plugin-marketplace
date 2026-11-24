using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Requests.ArticlesApi;

/// <summary>
/// The inputs of the GetApiV1Articles operation.
/// </summary>
public sealed record GetApiV1ArticlesRequest
{
    /// <summary>
    /// Number of articles to return per page (default 25, max 100).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor returned as <c>pagination.next_cursor</c> from a previous response. Mutually exclusive with <c>q</c> unless <c>sort=latest</c> is also given.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. Reduces payload size. Available fields: <c>id</c>, <c>title</c>, <c>article_url</c>, <c>published_at</c>, <c>updated_at</c>, <c>content_type</c>, <c>source</c>, <c>company_ids</c>, <c>country</c>, <c>category</c>.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Returns only articles updated after this timestamp. Use this for incremental sync: store the timestamp of your last completed sync, then request only newer results on each poll. Results are ordered by <c>updated_at</c> ascending and are cursor-paginated. Follow <c>pagination.next_cursor</c>, resending the same <c>updated_after</c> value, until it is null. Only advance your stored timestamp once you have drained every page (see the Real-Time Updates guide at https://docs.nordicfinancialnews.com). Mutually exclusive with <c>sort=latest</c> (with or without <c>q</c>). An <c>updated_after</c> walk is always ordered by <c>updated_at</c>.
    /// </summary>
    public string? UpdatedAfter { get; init; }

    /// <summary>
    /// Full-text search query (2-200 characters). By default, results are ranked by relevance instead of publication date, as a single page with no cursor. Mutually exclusive with <c>cursor</c> unless <c>sort=latest</c> is also given. Disables caching.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Result order for <c>q</c>. <c>relevance</c> (default) is a single relevance-ranked page with no cursor; it requires <c>q</c>, and returns 400 without one. <c>latest</c> turns <c>q</c> into a match filter under the endpoint's normal newest-first order (<c>published_at</c> descending) and the response is cursor-paginated like any other request; without <c>q</c> it is an accepted no-op (that's already the default order). Mutually exclusive with <c>updated_after</c>.
    /// </summary>
    public Sort? Sort { get; init; }

    /// <summary>
    /// Set to <c>semantic</c> to match <c>q</c> by meaning rather than by keyword. The match runs over each article's translated title and summary, so it answers thematic questions a keyword match cannot ("defense contract wins", "battery cell capacity expansion").
    /// <para>
    /// Requires <c>q</c>, is mutually exclusive with <c>sort</c>, <c>cursor</c>, <c>updated_after</c> and <c>ids</c>, and returns a single ranked page capped by <c>limit</c>; every other filter (<c>country</c>, <c>category</c>, <c>sources</c>, <c>source_type</c>, <c>ticker</c>, <c>company</c>, <c>market</c>, <c>domicile</c>, <c>exchange</c>, <c>index</c>, <c>sector</c>, <c>watchlist</c>, <c>content_type</c>, <c>published_after</c>/<c>published_before</c>) remains a hard filter applied before the match, not after.
    /// </para>
    /// <para>
    /// Each article gains a <c>distance</c> (raw cosine, lower is closer, rounded to 4dp). Compare it only within one response, never across responses: the scale is model-dependent. Ranking also blends in a small recency bonus that <c>distance</c> does not reflect. A server-side relevance floor drops weak matches, so a page is frequently shorter than <c>limit</c> and can be empty. Raising <c>limit</c> does not recover floored rows.
    /// </para>
    /// <para>
    /// On plans with restricted article access the response carries <c>plan_limited: true</c>; the plan article count cap does not apply in this mode, only the source and age restrictions.
    /// </para>
    /// <para>
    /// The response <c>pagination</c> object carries <c>count</c> only. There is no <c>next_cursor</c>, since a distance ranking cannot be cursor-paginated, and the response is uncacheable (<c>Cache-Control: no-cache, no-store</c>, no <c>ETag</c>). If the query cannot be embedded the request returns <c>503</c> rather than silently falling back to keyword matching.
    /// </para>
    /// </summary>
    public Mode? Mode { get; init; }

    /// <summary>
    /// Filter by country using ISO 3166-1 alpha-2 code (e.g. <c>SE</c>, <c>NO</c>, <c>DK</c>). Comma-separated for multiple (e.g. <c>SE,NO</c>). Case-insensitive.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// Filter by category <c>id</c> (from <c>GET /api/v1/categories</c>). Comma-separated for multiple (e.g. <c>cat_earnings1,cat_mna000001</c>); unknown ids are ignored.
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Comma-separated list of source IDs (max 25). Use <c>GET /api/v1/sources</c> to discover source IDs. Also accepts array form (<c>sources[]=id1&amp;sources[]=id2</c>). Disabled sources resolve to empty results.
    /// </summary>
    public string? Sources { get; init; }

    /// <summary>
    /// Filter by source type, comma-separated. Valid values: <c>news_publication</c>, <c>wire_service</c>, <c>press_release</c>, <c>government</c>, <c>trade_publication</c>, <c>blog</c>, <c>stock_exchange</c>, <c>research</c>. Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).
    /// </summary>
    public string? SourceType { get; init; }

    /// <summary>
    /// Filter by company stock ticker symbol, comma-separated for several (e.g. <c>VOLV-B</c> or <c>VOLV-B,ERIC-B</c>; matches any of them). Accepts full tickers with exchange suffix (e.g. <c>VOLV-B.ST</c>). Returns articles where the company is a principal association (subject, partner, investor, or competitor) — a company named only as the article's source, an advisor, or a passing mention does not match. Former tickers resolve too: a company that renamed or moved venues is still reachable by an old ticker; the returned company <c>former_tickers</c> lists any such historical tickers. Matching is case-insensitive. Every value must resolve to a company, or the request is rejected with <c>400</c> naming the unknown values. Combined with <c>company</c>, the two filters intersect.
    /// </summary>
    public string? Ticker { get; init; }

    /// <summary>
    /// Filter by company <c>id</c> (as returned by the companies endpoints), comma-separated for several (matches any of them). Complements <c>ticker</c>; use this to reach companies without a stock listing. Matches only the company's principal associations (subject, partner, investor, or competitor); a passing mention does not match. Every value must resolve, or the request is rejected with <c>400</c> naming the unknown ids. Combined with <c>ticker</c>, the two filters intersect.
    /// </summary>
    public string? Company { get; init; }

    /// <summary>
    /// Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g. <c>XSTO</c> for Nasdaq Stockholm, <c>XCSE</c> for Nasdaq Copenhagen, <c>XHEL</c> for Nasdaq Helsinki, <c>XOSL</c> for Oslo Børs). Returns articles about companies actively listed there. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify. Case-insensitive.
    /// </summary>
    public string? Exchange { get; init; }

    /// <summary>
    /// Filter to articles about companies with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. <c>SE,NO</c>). <c>SE</c> covers Nasdaq Stockholm, First North, Spotlight and NGM. Distinct from <c>country</c> (the source that reported it) and <c>domicile</c> (legal domicile). Includes foreign-domiciled but locally-listed issuers. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify.
    /// </summary>
    public string? Market { get; init; }

    /// <summary>
    /// Filter to articles about companies legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use <c>market</c> for market-coverage questions. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify.
    /// </summary>
    public string? Domicile { get; init; }

    /// <summary>
    /// Filter by stock index id or symbol (e.g. <c>OMXS30</c>, <c>OMXC25</c>, <c>OMXH25</c>, <c>OBX</c>). Returns articles about companies in that index. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify. Case-insensitive for symbols.
    /// </summary>
    public string? Index { get; init; }

    /// <summary>
    /// Filter by company sector. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify. Case-sensitive; must exactly match one of: <c>Communication Services</c>, <c>Consumer Discretionary</c>, <c>Consumer Staples</c>, <c>Energy</c>, <c>Financials</c>, <c>Health Care</c>, <c>Industrials</c>, <c>Information Technology</c>, <c>Materials</c>, <c>Real Estate</c>, <c>Utilities</c>.
    /// </summary>
    public string? Sector { get; init; }

    /// <summary>
    /// Filter by article content type, comma-separated. Valid values: <c>news</c>, <c>analysis</c>, <c>press_release</c>, <c>market_commentary</c>, <c>market_news</c>, <c>trading_halt</c>, <c>trading_event</c>, <c>other</c>. <c>GET /api/v1/meta</c> lists them as <c>content_types</c>. An unrecognized value returns 400 naming the bad value(s).
    /// </summary>
    public string? ContentType { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Returns articles published on or after this timestamp.
    /// </summary>
    public string? PublishedAfter { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Returns articles published before this timestamp.
    /// </summary>
    public string? PublishedBefore { get; init; }

    /// <summary>
    /// When <c>true</c>, only return articles about at least one company with an active listing on any exchange, through a principal association (subject, partner, investor, or competitor). A passing mention does not qualify, and <c>include_peripheral</c> does not change this. A company whose listings are all delisted does not count. Hidden and unverified companies do not count.
    /// </summary>
    public string? Listed { get; init; }

    /// <summary>
    /// Restricts to articles about companies in a single watchlist, identified by its <c>id</c> (from the List Watchlists endpoint), through a principal association (subject, partner, investor, or competitor) — a passing mention does not qualify. An unknown id returns no articles. Requires <c>read:watchlist</c> scope.
    /// </summary>
    public string? Watchlist { get; init; }

    /// <summary>
    /// When <c>true</c>, narrows further within the already-principal match, to only articles where the matched company (<c>ticker</c>, <c>company</c>, or <c>watchlist</c>) is the primary subject. Requires <c>ticker</c>, <c>company</c>, or <c>watchlist</c>, and returns 400 without one.
    /// </summary>
    public bool? PrimaryOnly { get; init; }

    /// <summary>
    /// When <c>true</c>, widen the <c>ticker</c>, <c>company</c> and <c>watchlist</c> filters — and each article's <c>company_ids</c> — back to peripheral associations (a company named only as the article's source, an advisor, or a passing mention), which are otherwise excluded. Default <c>false</c> (principal-only: subject, partner, investor, competitor). <c>primary_only</c> still wins where it applies: the primary-subject restriction is kept even when peripheral is requested. Not honored on <c>GET /api/v1/search</c>.
    /// </summary>
    public bool? IncludePeripheral { get; init; }

    /// <summary>
    /// Comma-separated list of article IDs for batch lookup (max 100). Cannot be combined with <c>cursor</c>, <c>updated_after</c>, or <c>sort</c>. Returns a single page: <c>pagination</c> carries <c>count</c> only, with no <c>next_cursor</c>. IDs that don't resolve, or that your plan can't access, are omitted rather than rejected, so <c>count</c> can be less than the number of IDs sent. Key off each row's <c>id</c>.
    /// </summary>
    public string? Ids { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
