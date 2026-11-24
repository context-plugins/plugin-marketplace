namespace NordicFinancialNews.Requests.CompaniesApi;

/// <summary>
/// The inputs of the GetApiV1CompaniesByIdentifierEvents operation.
/// </summary>
public sealed record GetApiV1CompaniesByIdentifierEventsRequest
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
    /// Opaque pagination cursor from a previous response. Works with <c>q</c> too; <c>q</c> is a filter, not a separate search mode. When continuing an <c>updated_after</c> sync, resend the same <c>updated_after</c> value.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. <c>id</c> is always included.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Returns only this company's events updated after this timestamp, including merge/removal tombstones. Use for incremental sync.
    /// </summary>
    public string? UpdatedAfter { get; init; }

    /// <summary>
    /// Full-text filter over the event's own title and summary as well as its live member articles' indexed content (title, summary, key points, plus tagged company names and key facts), so an event can match on a company its coverage only tags. Matches stay in the default feed order (most recently reported first) and are cursor-paginated like any other request; combine with <c>window</c>/<c>last_article_after</c> for "latest on X".
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Filter by event type slug, comma-separated. These are Events taxonomy slugs (hyphenated) from <c>GET /api/v1/event_types</c> and are the only values accepted here. The underscored calendar <c>event_type</c> values used by <c>GET /api/v1/calendar_events</c> are rejected. A few spellings overlap across the two vocabularies (e.g. <c>delisting</c>) while denoting different things. An unrecognized slug returns 400 naming the bad slug(s).
    /// </summary>
    public string? EventType { get; init; }

    /// <summary>
    /// Editorial importance, the feed's materiality threshold, comma-separated (e.g. <c>notable,routine</c>). Valid values: <c>notable</c> (material, front-page-worthy events), <c>routine</c> (ledger records: routine filings, scheduled disclosures), <c>commentary</c> (opinion/analysis pieces). Use <c>significance=notable</c> to restrict the feed to material events. An unrecognized value returns 400 naming the bad value(s).
    /// </summary>
    public string? Significance { get; init; }

    /// <summary>
    /// Sort order. <c>latest</c> (default) sorts most recently reported first, the unfiltered feed order. <c>significance</c> groups events into 3 coarse editorial tiers (<c>notable</c>, then <c>routine</c>, then <c>commentary</c>), most recently reported first within each tier; expect large ties within a tier. A mid-walk <c>routine</c>→<c>notable</c> escalation may be skipped, since the ordering is a best-effort snapshot. For a broad importance filter, prefer <c>significance=notable</c> with the default sort; page 1 is identical. Mutually exclusive with <c>updated_after</c> (an unrecognized value, or either sort value combined with <c>updated_after</c>, returns 400).
    /// </summary>
    public string? Sort { get; init; }

    /// <summary>
    /// Filter to events with a live member article from this country (ISO 3166-1 alpha-2, comma-separated). Applied at the article grain, so sync tombstones do not respect it.
    /// </summary>
    public string? Country { get; init; }

    /// <summary>
    /// Filter to events with a live member article in any of these categories, by their <c>id</c> (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not respect it.
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Filter to events with a live member article from these sources, by their <c>id</c> (comma-separated, max 25). Applied at the article grain, so sync tombstones do not respect it.
    /// </summary>
    public string? Sources { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Only events first reported at or after this time.
    /// </summary>
    public string? FirstReportedAfter { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Only events first reported before this time.
    /// </summary>
    public string? FirstReportedBefore { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Only events whose most recent activity (<c>last_article_at</c>, or <c>first_reported_at</c> when that is null) is at or after this time. Mutually exclusive with <c>window</c>.
    /// </summary>
    public string? LastArticleAfter { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually exclusive with <c>window</c>.
    /// </summary>
    public string? LastArticleBefore { get; init; }

    /// <summary>
    /// Relative shorthand for <c>last_article_after</c>, e.g. <c>8h</c>, <c>24h</c>, <c>7d</c> (hours or days only, max 365d equivalent). Evaluated per request against the server clock. Mutually exclusive with <c>last_article_after</c>, <c>last_article_before</c>, and <c>updated_after</c>.
    /// </summary>
    public string? Window { get; init; }

    /// <summary>
    /// Filter to events with a live member article from this source type, comma-separated. Valid values: <c>news_publication</c>, <c>wire_service</c>, <c>press_release</c>, <c>government</c>, <c>trade_publication</c>, <c>blog</c>, <c>stock_exchange</c>, <c>research</c>. Articles from disabled sources are excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value returns 400 naming the bad value(s).
    /// </summary>
    public string? SourceType { get; init; }

    /// <summary>
    /// Filter to events with a live member article of this content type, comma-separated. Valid values: <c>news</c>, <c>analysis</c>, <c>press_release</c>, <c>market_commentary</c>, <c>market_news</c>, <c>trading_halt</c>, <c>trading_event</c>, <c>other</c>. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned label per article. To find events with a member article from a primary disclosure source, filter on <c>source_type</c> (<c>wire_service</c>, <c>stock_exchange</c>, <c>press_release</c>, <c>government</c>) instead.
    /// </summary>
    public string? ContentType { get; init; }

    /// <summary>
    /// Filter to commentary events that comment on or react to the factual event with this <c>id</c>. Unresolvable <c>id</c> returns an empty result set, not an error.
    /// </summary>
    public string? RelatedTo { get; init; }

    /// <summary>
    /// When <c>true</c>, widen this feed, and the <c>company_ids</c> returned on each event, to events where this company has a peripheral role (advisor, speaker, or a passing mention) as well. Default <c>false</c> restricts to an active-involvement role (subject, acquirer, target, investor, issuer, partner).
    /// </summary>
    public bool? IncludePeripheral { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }
}
