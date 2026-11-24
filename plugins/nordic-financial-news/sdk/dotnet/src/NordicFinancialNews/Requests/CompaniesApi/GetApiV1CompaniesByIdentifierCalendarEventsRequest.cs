using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Requests.CompaniesApi;

/// <summary>
/// The inputs of the GetApiV1CompaniesByIdentifierCalendarEvents operation.
/// </summary>
public sealed record GetApiV1CompaniesByIdentifierCalendarEventsRequest
{
    /// <summary>
    /// Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. <c>VOLV-B.ST</c>); former tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the company ID for an unambiguous lookup.
    /// </summary>
    public required string Identifier { get; init; }

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
    /// ISO 8601 datetime. Returns only this company's events updated after this timestamp. Use for incremental sync: store the timestamp of your last completed sync and pass it on the next request. Results are ordered by <c>updated_at</c> ascending and cursor-paginated. Drain <c>pagination.next_cursor</c> before advancing your stored timestamp. Passing this parameter also disables the default upcoming-only floor, so past events with newer updates are included.
    /// </summary>
    public string? UpdatedAfter { get; init; }

    /// <summary>
    /// Filter by lifecycle status. Omitted: returns <c>scheduled</c> + past <c>published</c> events and excludes <c>cancelled</c>. Pass <c>cancelled</c> to retrieve cancellations, or <c>scheduled</c>/<c>published</c> to narrow.
    /// </summary>
    public Status1? Status { get; init; }

    /// <summary>
    /// Filter by calendar event type. Accepts a single value or a comma-separated list for multiple types. These are calendar event types (underscored) and are the only values accepted here. The hyphenated Events taxonomy slugs from <c>GET /api/v1/event_types</c> belong to <c>GET /api/v1/events</c> and are rejected. A few spellings overlap across the two vocabularies (e.g. <c>delisting</c>) while denoting different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies a narrative event that already happened.
    /// </summary>
    public EventType1? EventType { get; init; }

    /// <summary>
    /// Window start. A bare date (<c>YYYY-MM-DD</c>) means that calendar date in each issuer's own timezone, inclusive: <c>scheduled_after=2026-10-01&amp;scheduled_before=2026-10-31</c> is October in every issuer's local calendar. An ISO 8601 datetime (<c>Z</c> or a UTC offset) means an exact UTC instant, at or after. Passing this parameter disables the default upcoming-only floor, allowing past events to be returned.
    /// </summary>
    public string? ScheduledAfter { get; init; }

    /// <summary>
    /// Window end. A bare date means that calendar date in each issuer's own timezone, inclusive. An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter disables the default upcoming-only floor, allowing past events to be returned.
    /// </summary>
    public string? ScheduledBefore { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }

    /// <summary>
    /// HTTP date from a previous <c>Last-Modified</c> header. Returns <c>304 Not Modified</c> if nothing has changed since.
    /// </summary>
    public string? IfModifiedSince { get; init; }
}
