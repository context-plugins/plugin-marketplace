using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Requests.CompaniesApi;

/// <summary>
/// The inputs of the GetApiV1Companies operation.
/// </summary>
public sealed record GetApiV1CompaniesRequest
{
    /// <summary>
    /// Number of companies to return per page (default 25, max 100).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor returned as <c>pagination.next_cursor</c> from a previous response. Mutually exclusive with <c>q</c>.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. Available fields: <c>id</c>, <c>name</c>, <c>slug</c>, <c>ticker</c>, <c>former_tickers</c>.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Full-text search query (2-200 characters). Searches company names and aliases. Results are ranked by relevance instead of alphabetical order. Mutually exclusive with <c>cursor</c>.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Set to <c>semantic</c> to match <c>q</c> by meaning rather than by name/ticker text. The match runs over each company's name, aliases, country, sector, industry and description, so it answers thematic questions a name match cannot ("defense contractors", "companies making battery cells").
    /// <para>
    /// Put geography in <c>market</c>, <c>domicile</c> or <c>country</c> rather than in <c>q</c>. A place name in <c>q</c> matches company names containing it ("Nordic ...", "Swedish ...") ahead of companies that actually do that thing.
    /// </para>
    /// <para>
    /// Requires <c>q</c>, is mutually exclusive with <c>cursor</c>, and returns a single ranked page capped by <c>limit</c>; <c>company</c>, <c>ticker</c>, <c>country</c>, <c>market</c>, <c>domicile</c>, <c>exchange</c>, <c>sector</c>, <c>listed</c>, <c>watchlist</c> and <c>is_active</c> remain hard filters applied before the match, not after.
    /// </para>
    /// <para>
    /// Each company gains a <c>distance</c> (raw cosine, lower is closer, rounded to 4dp). Compare it only within one response, never across responses: the scale is model-dependent. Ranking also blends in a small coverage bonus that <c>distance</c> does not reflect. A server-side relevance floor drops weak matches, so a page is frequently shorter than <c>limit</c> and can be empty. Raising <c>limit</c> does not recover floored rows.
    /// </para>
    /// <para>
    /// The response <c>pagination</c> object carries <c>count</c> only. There is no <c>next_cursor</c>, since a distance ranking cannot be cursor-paginated, and the response is uncacheable (<c>Cache-Control: no-cache, no-store</c>, no <c>ETag</c>). If the query cannot be embedded the request returns <c>503</c> rather than silently falling back to name matching.
    /// </para>
    /// </summary>
    public Mode? Mode { get; init; }

    /// <summary>
    /// Resolve specific company <c>id</c> values, comma-separated (maximum 25). This is the batch-resolve path for the <c>company_id</c> and <c>company_ids</c> values returned by the articles, stories, events and calendar endpoints. Look up a whole page of them in one request instead of one <c>GET /companies/{identifier}</c> per company. Every id must resolve, or the request is rejected with <c>400</c> naming the unknown ids. Results are returned in name order, not the order requested, so key off each row's <c>id</c>. Combined with <c>ticker</c>, the two filters intersect.
    /// </summary>
    public string? Company { get; init; }

    /// <summary>
    /// Resolve specific stock tickers, comma-separated (maximum 25). Accepts the exchange-suffixed form (e.g. <c>VOLV-B.ST</c>) and resolves former tickers; matching is case-insensitive. Unlike <c>q</c> this is an exact filter, so it returns no near-matches and supports cursor pagination. Every ticker must resolve, or the request is rejected with <c>400</c> naming the unknown values. Combined with <c>company</c>, the two filters intersect. A ticker shared by more than one issuer resolves to every matching company, so a batch can return more rows than the number of tickers sent. <c>GET /companies/{identifier}</c> tie-breaks such a ticker to a single company, this filter does not.
    /// </summary>
    public string? Ticker { get; init; }

    /// <summary>
    /// Legal domicile, ISO 3166-1 alpha-2 code (e.g. <c>SE</c>, <c>NO</c>, <c>DK</c>). Comma-separated for multiple (e.g. <c>SE,NO</c>). Case-insensitive. Synonym for <c>domicile</c> on this endpoint, kept for backward compatibility. If both <c>country</c> and <c>domicile</c> are sent, they intersect.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// Filter to companies with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. <c>SE,NO</c>). <c>SE</c> covers Nasdaq Stockholm, First North, Spotlight and NGM. Distinct from <c>country</c>/<c>domicile</c> (legal domicile). Includes foreign-domiciled but locally-listed issuers.
    /// </summary>
    public string? Market { get; init; }

    /// <summary>
    /// Filter to companies legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated). The canonical cross-surface name for what <c>country</c> already means on this endpoint; reaches unlisted companies and excludes foreign-domiciled but locally-listed issuers. Use <c>market</c> for market-coverage questions.
    /// </summary>
    public string? Domicile { get; init; }

    /// <summary>
    /// Filter by exchange MIC code, comma-separated for multiple (e.g. <c>XSTO</c>, <c>XOSL,XCSE</c>). Only companies with an active listing on the exchange match.
    /// </summary>
    public string? Exchange { get; init; }

    /// <summary>
    /// Filter by industry sector (e.g. <c>Financials</c>, <c>Industrials</c>, <c>Information Technology</c>).
    /// </summary>
    public string? Sector { get; init; }

    /// <summary>
    /// When <c>true</c>, only return companies with at least one active stock exchange listing.
    /// </summary>
    public string? Listed { get; init; }

    /// <summary>
    /// When <c>true</c>, only return companies in the authenticated user's watchlist. Requires <c>read:watchlist</c> scope.
    /// </summary>
    public string? Watchlist { get; init; }

    /// <summary>
    /// Filter by active status. When <c>true</c>, only return active companies. When <c>false</c>, only return inactive companies.
    /// </summary>
    public string? IsActive { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
