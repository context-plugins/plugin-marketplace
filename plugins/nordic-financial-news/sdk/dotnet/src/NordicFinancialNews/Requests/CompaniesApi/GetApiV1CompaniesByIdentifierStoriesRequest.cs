using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Requests.CompaniesApi;

/// <summary>
/// The inputs of the GetApiV1CompaniesByIdentifierStories operation.
/// </summary>
public sealed record GetApiV1CompaniesByIdentifierStoriesRequest
{
    /// <summary>
    /// Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. <c>VOLV-B.ST</c>); former tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the company ID for an unambiguous lookup.
    /// </summary>
    public required string Identifier { get; init; }

    /// <summary>
    /// Number of stories to return per page (default 25, max 100).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor from a previous response. Mutually exclusive with <c>q</c> unless <c>sort=latest</c> is also given.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Returns only this company's stories updated after this timestamp. Use this for incremental sync: store the timestamp of your last completed sync, then request only newer results on each poll. Results are ordered by <c>updated_at</c> ascending and are cursor-paginated. Follow <c>pagination.next_cursor</c>, resending the same <c>updated_after</c> value, until it is null. Only advance your stored timestamp once you have drained every page. Mutually exclusive with <c>sort=latest</c> (with or without <c>q</c>). An <c>updated_after</c> walk is always ordered by <c>updated_at</c>.
    /// </summary>
    public string? UpdatedAfter { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. Available fields: <c>id</c>, <c>title</c>, <c>summary</c>, <c>published_at</c>, <c>updated_at</c>, <c>article_count</c>, <c>article_ids</c>, <c>country</c>, <c>category</c>, <c>company_ids</c>.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Full-text search query (2-200 characters). By default, results are ranked by relevance instead of publication date, as a single page with no cursor. Mutually exclusive with <c>cursor</c> unless <c>sort=latest</c> is also given. Disables caching.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Result order for <c>q</c>. <c>relevance</c> (default) is a single relevance-ranked page with no cursor; it requires <c>q</c>, and returns 400 without one. <c>latest</c> turns <c>q</c> into a match filter under the endpoint's normal newest-first order (<c>published_at</c> descending) and the response is cursor-paginated like any other request; without <c>q</c> it is an accepted no-op (that's already the default order). Mutually exclusive with <c>updated_after</c>.
    /// </summary>
    public Sort? Sort { get; init; }

    /// <summary>
    /// Filter by country using ISO 3166-1 alpha-2 code (e.g. <c>SE</c>, <c>NO</c>, <c>DK</c>). Comma-separated for multiple (e.g. <c>SE,NO</c>). Case-insensitive.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// Filter by category <c>id</c> (from <c>GET /api/v1/categories</c>). Comma-separated for multiple (e.g. <c>cat_earnings1,cat_mna000001</c>); unknown ids are ignored.
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Comma-separated list of source IDs (max 25). Use <c>GET /api/v1/sources</c> to discover source IDs. Also accepts array form (<c>sources[]=id1&amp;sources[]=id2</c>). Returns stories with at least one article from a listed source.
    /// </summary>
    public string? Sources { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Returns stories published on or after this timestamp.
    /// </summary>
    public string? PublishedAfter { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Returns stories published before this timestamp.
    /// </summary>
    public string? PublishedBefore { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
