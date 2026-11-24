using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Requests.CalendarEvents;

/// <summary>
/// The inputs of the GetApiV1CalendarEvents operation.
/// </summary>
public sealed record GetApiV1CalendarEventsRequest
{
    /// <summary>
    /// Number of events to return per page (default 25, max 100).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor returned as <c>pagination.next_cursor</c> from a previous response. When continuing an <c>updated_after</c> sync, resend the same <c>updated_after</c> value alongside it.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. Reduces payload size. <c>id</c> is always included. Available fields: <c>title</c>, <c>description</c>, <c>event_type</c>, <c>status</c>, <c>date_precision</c>, <c>fiscal_period</c>, <c>scheduled_at</c>, <c>timezone</c>, <c>local_time</c>, <c>scheduled_at_changed_at</c>, <c>source_article_id</c>, <c>source</c>, <c>company_id</c>, <c>company</c>, <c>country</c>, <c>dividend</c>, <c>updated_at</c>.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Returns only events updated after this timestamp. Use for incremental sync: store the timestamp of your last completed sync and pass it on the next request. Results are ordered by <c>updated_at</c> ascending and cursor-paginated. Drain <c>pagination.next_cursor</c> before advancing your stored timestamp. Passing this parameter also disables the default upcoming-only floor, so past events with newer updates are included.
    /// </summary>
    public string? UpdatedAfter { get; init; }

    /// <summary>
    /// Filter by company stock ticker (e.g. <c>VOLV-B</c>), comma-separated for several (matches any of them). Also accepts exchange-suffixed form (e.g. <c>VOLV-B.ST</c>); former tickers resolve. Matching is case-insensitive. Every value must resolve to a company, or the request is rejected with <c>400</c> naming the unknown values. A company outside the calendar's Nordic coverage resolves but returns no events. Combined with <c>company</c>, the two filters intersect.
    /// </summary>
    public string? Ticker { get; init; }

    /// <summary>
    /// Filter by company <c>id</c> (as returned by the companies endpoints), comma-separated for several (matches any of them). Complements <c>ticker</c>; use this to reach companies without a stock listing. Every value must resolve, or the request is rejected with <c>400</c> naming the unknown ids. A company outside the calendar's Nordic coverage resolves but returns no events. Combined with <c>ticker</c>, the two filters intersect.
    /// </summary>
    public string? Company { get; init; }

    /// <summary>
    /// Filter by country using ISO 3166-1 alpha-2 code (e.g. <c>SE</c>, <c>DK</c>, <c>NO</c>, <c>FI</c>, <c>IS</c>). Comma-separated for multiple (e.g. <c>SE,NO</c>). Case-insensitive. This is the event's country: the issuer's, with source-country fallback.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// Filter to events for an issuer with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. <c>SE,NO</c>). <c>SE</c> covers Nasdaq Stockholm, First North, Spotlight and NGM. Distinct from <c>country</c> (the event's own country) and <c>domicile</c> (legal domicile). Includes foreign-domiciled but locally-listed issuers.
    /// </summary>
    public string? Market { get; init; }

    /// <summary>
    /// Filter to events for an issuer legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use <c>market</c> for market-coverage questions.
    /// </summary>
    public string? Domicile { get; init; }

    /// <summary>
    /// Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g. <c>XSTO</c> for Nasdaq Stockholm, <c>XCSE</c> for Nasdaq Copenhagen, <c>XHEL</c> for Nasdaq Helsinki, <c>XOSL</c> for Oslo Børs, or <c>XSTO,XCSE</c>). Only events for an issuer with an active listing on the exchange match. Case-insensitive.
    /// </summary>
    public string? Exchange { get; init; }

    /// <summary>
    /// Filter by stock index id or symbol (e.g. <c>OMXS30</c>, <c>OMXC25</c>, <c>OMXH25</c>, <c>OBX</c>). Returns events only for companies in that index. Case-insensitive for symbols.
    /// </summary>
    public string? Index { get; init; }

    /// <summary>
    /// Filter by company sector. Must exactly match one of the standard sector names: <c>Communication Services</c>, <c>Consumer Discretionary</c>, <c>Consumer Staples</c>, <c>Energy</c>, <c>Financials</c>, <c>Health Care</c>, <c>Industrials</c>, <c>Information Technology</c>, <c>Materials</c>, <c>Real Estate</c>, <c>Utilities</c>.
    /// </summary>
    public string? Sector { get; init; }

    /// <summary>
    /// Filter by calendar event type. Accepts a single value or a comma-separated list for multiple types. These are calendar event types (underscored) and are the only values accepted here. The hyphenated Events taxonomy slugs from <c>GET /api/v1/event_types</c> belong to <c>GET /api/v1/events</c> and are rejected. A few spellings overlap across the two vocabularies (e.g. <c>delisting</c>) while denoting different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies a narrative event that already happened.
    /// </summary>
    public EventType1? EventType { get; init; }

    /// <summary>
    /// Filter by lifecycle status. Omitted: returns <c>scheduled</c> + past <c>published</c> events and excludes <c>cancelled</c>. Pass <c>cancelled</c> to retrieve cancellations, or <c>scheduled</c>/<c>published</c> to narrow.
    /// </summary>
    public Status1? Status { get; init; }

    /// <summary>
    /// Window start. A bare date (<c>YYYY-MM-DD</c>) means that calendar date in each issuer's own timezone, inclusive: <c>scheduled_after=2026-10-01&amp;scheduled_before=2026-10-31</c> is October in every issuer's local calendar. An ISO 8601 datetime (<c>Z</c> or a UTC offset) means an exact UTC instant, at or after. Passing this parameter disables the default upcoming-only floor, allowing past events to be returned.
    /// </summary>
    public string? ScheduledAfter { get; init; }

    /// <summary>
    /// Window end. A bare date means that calendar date in each issuer's own timezone, inclusive. An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter disables the default upcoming-only floor, allowing past events to be returned.
    /// </summary>
    public string? ScheduledBefore { get; init; }

    /// <summary>
    /// Restricts to events for companies in a single watchlist, identified by its <c>id</c> (from the List Watchlists endpoint). An unknown id returns no events. Requires <c>read:watchlist</c> scope.
    /// </summary>
    public string? Watchlist { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
