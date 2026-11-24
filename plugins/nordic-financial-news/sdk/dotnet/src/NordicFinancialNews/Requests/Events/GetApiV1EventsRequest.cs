using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Requests.Events;

/// <summary>
/// The inputs of the GetApiV1Events operation.
/// </summary>
public sealed record GetApiV1EventsRequest
{
    /// <summary>
    /// Number of events to return per page (default 25, max 100).
    /// </summary>
    public int? Limit { get; init; }

    /// <summary>
    /// Opaque pagination cursor returned as <c>pagination.next_cursor</c> from a previous response. Works with <c>q</c> too; <c>q</c> is a filter, not a separate search mode. Not accepted with <c>mode=semantic</c>. When continuing an <c>updated_after</c> sync, resend the same <c>updated_after</c> value alongside it.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response. Reduces payload size. <c>id</c> is always included.
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Returns only events updated after this timestamp, including merge/removal tombstones. Use for incremental sync.
    /// </summary>
    public string? UpdatedAfter { get; init; }

    /// <summary>
    /// Full-text filter over the event's own title and summary as well as its live member articles' indexed content (title, summary, key points, plus tagged company names and key facts), so an event can match on a company its coverage only tags. Matches stay in the default feed order (most recently reported first) and are cursor-paginated like any other request; combine with <c>window</c>/<c>last_article_after</c> for "latest on X". This differs deliberately from <c>q</c> on <c>GET /api/v1/articles</c> and <c>GET /api/v1/stories</c>, which returns a relevance-ranked single page unless <c>sort=latest</c> is given. Here <c>q</c> is a filter over the ordinary feed order, so it composes with <c>window</c> and the cursor. <c>mode=semantic</c> replaces this with a ranked match (see <c>mode</c>).
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Set to <c>semantic</c> to match <c>q</c> by meaning rather than by keyword, for thematic questions a keyword match cannot answer ("defense contract wins", "battery cell capacity expansion").
    /// <para>
    /// The match runs over the translated title and summary of each event's live member articles, not over the event's own title or summary, and not over the key points, tagged company names or key facts that plain <c>q</c> also reaches. It is therefore not a strict recall improvement over plain <c>q</c>: an event whose title is on-topic while its member articles are oblique can match <c>q</c> and not <c>mode=semantic</c>.
    /// </para>
    /// <para>
    /// Results are ranked by distance blended with a small recency bonus, not in feed order. Requires <c>q</c>, is mutually exclusive with <c>sort</c>, <c>cursor</c> and <c>updated_after</c>, and returns a single ranked page capped by <c>limit</c>. Every other filter remains a hard filter applied before the match, not after. <c>window</c> and <c>last_article_after</c>/<c>last_article_before</c> still bound the event's activity, not the date of the matched article, so the member article behind a match can be considerably older than the event's last activity.
    /// </para>
    /// <para>
    /// Each event gains a <c>distance</c> (raw cosine, lower is closer): the distance of its best-matching member article that your plan can access, so the same event can carry different distances on different plans. Compare it only within one response, never across responses: the scale is model-dependent. Ranking uses the mean of an event's two closest member articles and a recency bonus, neither of which <c>distance</c> reflects. A server-side relevance floor drops weak matches, so a page is frequently shorter than <c>limit</c> and can be empty.
    /// </para>
    /// <para>
    /// The plan cap on recent events does not apply in this mode: the match runs over every event with member articles inside your plan's age and source restrictions, and <c>plan_limited: true</c> reports only that those restrictions are in force. <c>truncated: true</c> means the article-match horizon was exhausted, so further matching events exist that this response cannot reach, and no cursor can page to them.
    /// </para>
    /// <para>
    /// The response <c>pagination</c> object carries <c>count</c> only. There is no <c>next_cursor</c>, and the response is uncacheable (<c>Cache-Control: no-cache, no-store</c>, no <c>ETag</c>). If the query cannot be embedded the request returns <c>503</c> rather than silently falling back to keyword matching.
    /// </para>
    /// </summary>
    public Mode? Mode { get; init; }

    /// <summary>
    /// Filter by event type slug, comma-separated (e.g. <c>earnings-report,acquisition-announced</c>). These are Events taxonomy slugs (hyphenated) from <c>GET /api/v1/event_types</c> and are the only values accepted here. The underscored calendar <c>event_type</c> values used by <c>GET /api/v1/calendar_events</c> are rejected. A few spellings overlap across the two vocabularies (e.g. <c>delisting</c>) while denoting different things. An unrecognized slug returns 400 naming the bad slug(s).
    /// </summary>
    public string? EventType { get; init; }

    /// <summary>
    /// Editorial importance, the feed's materiality threshold, comma-separated (e.g. <c>notable,routine</c>). Valid values: <c>notable</c> (material, front-page-worthy events), <c>routine</c> (ledger records: routine filings, scheduled disclosures), <c>commentary</c> (opinion/analysis pieces). Use <c>significance=notable</c> to restrict the feed to material events. An unrecognized value returns 400 naming the bad value(s).
    /// </summary>
    public string? Significance { get; init; }

    /// <summary>
    /// Filter to events involving the company with this stock ticker (e.g. <c>VOLV-B</c>), comma-separated for several (matches any of them). Accepts the exchange-suffixed form; former tickers resolve. Matching is case-insensitive. Every value must resolve to a company, or the request is rejected with <c>400</c> naming the unknown values. Combined with <c>company</c>, the two filters intersect. Matches active-involvement roles only unless <c>include_peripheral=true</c>.
    /// </summary>
    public string? Ticker { get; init; }

    /// <summary>
    /// Filter to events involving a company by its <c>id</c>, comma-separated for several (matches any of them). Complements <c>ticker</c>; reaches companies without a stock listing. Every value must resolve, or the request is rejected with <c>400</c> naming the unknown ids. Combined with <c>ticker</c>, the two filters intersect. Matches active-involvement roles only unless <c>include_peripheral=true</c>.
    /// </summary>
    public string? Company { get; init; }

    /// <summary>
    /// Filter to events with a live member article from this country (ISO 3166-1 alpha-2, comma-separated for multiple). Applied at the article grain, so sync tombstones do not respect it.
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
    /// Filter to events with a live member article from this source type, comma-separated. Valid values: <c>news_publication</c>, <c>wire_service</c>, <c>press_release</c>, <c>government</c>, <c>trade_publication</c>, <c>blog</c>, <c>stock_exchange</c>, <c>research</c>. Articles from disabled sources are excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value returns 400 naming the bad value(s).
    /// </summary>
    public string? SourceType { get; init; }

    /// <summary>
    /// Filter to events with a live member article of this content type, comma-separated. Valid values: <c>news</c>, <c>analysis</c>, <c>press_release</c>, <c>market_commentary</c>, <c>market_news</c>, <c>trading_halt</c>, <c>trading_event</c>, <c>other</c>. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned label per article. To find events with a member article from a primary disclosure source, filter on <c>source_type</c> (<c>wire_service</c>, <c>stock_exchange</c>, <c>press_release</c>, <c>government</c>) instead.
    /// </summary>
    public string? ContentType { get; init; }

    /// <summary>
    /// Filter by exchange MIC code, comma-separated for multiple (e.g. <c>XSTO</c>, <c>XSTO,XCSE</c>).
    /// </summary>
    public string? Exchange { get; init; }

    /// <summary>
    /// Filter to events involving a company with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. <c>SE,NO</c>). <c>SE</c> covers Nasdaq Stockholm, First North, Spotlight and NGM. Distinct from <c>country</c> (the source that reported it) and <c>domicile</c> (legal domicile). Includes foreign-domiciled but locally-listed issuers. Note: a just-listed company's listing record can lag its IPO event.
    /// </summary>
    public string? Market { get; init; }

    /// <summary>
    /// Filter to events involving a company legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use <c>market</c> for market-coverage questions.
    /// </summary>
    public string? Domicile { get; init; }

    /// <summary>
    /// Filter to events for companies in this stock index, by <c>id</c> or symbol.
    /// </summary>
    public string? Index { get; init; }

    /// <summary>
    /// Filter by company sector. Must exactly match a standard sector name.
    /// </summary>
    public string? Sector { get; init; }

    /// <summary>
    /// When <c>true</c>, only return events involving at least one company with an active listing on any exchange, matched by the same rule as <c>exchange</c>/<c>market</c>/<c>domicile</c>/<c>index</c>/<c>sector</c>. On a factual event, the company must have an active-involvement role (subject, acquirer, target, investor, issuer, partner); an advisor, speaker or passing mention does not qualify. On a commentary event, any role counts when a live article in the event is about that company rather than only mentioning it. <c>include_peripheral</c> does not change this. A company whose listings are all delisted does not count. Hidden and unverified companies do not count.
    /// </summary>
    public string? Listed { get; init; }

    /// <summary>
    /// Restrict to events for companies in a single watchlist, by its <c>id</c>. Requires the <c>read:watchlist</c> scope. Matches active-involvement roles only unless <c>include_peripheral=true</c>.
    /// </summary>
    public string? Watchlist { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Only events first reported at or after this time.
    /// </summary>
    public string? FirstReportedAfter { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Only events first reported before this time.
    /// </summary>
    public string? FirstReportedBefore { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Only events whose most recent activity (<c>last_article_at</c>, or <c>first_reported_at</c> when that is null) is at or after this time. This matches when the event was last active, not when it broke. Mutually exclusive with <c>window</c>.
    /// </summary>
    public string? LastArticleAfter { get; init; }

    /// <summary>
    /// ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually exclusive with <c>window</c>.
    /// </summary>
    public string? LastArticleBefore { get; init; }

    /// <summary>
    /// Relative shorthand for <c>last_article_after</c>, e.g. <c>8h</c>, <c>24h</c>, <c>7d</c> (hours or days only, max 365d equivalent). Evaluated per request against the server clock. Compute <c>last_article_after</c> yourself for a stable multi-page snapshot. Mutually exclusive with <c>last_article_after</c>, <c>last_article_before</c>, and <c>updated_after</c>.
    /// </summary>
    public string? Window { get; init; }

    /// <summary>
    /// Sort order. <c>latest</c> (default) sorts most recently reported first, the unfiltered feed order. <c>significance</c> groups events into 3 coarse editorial tiers (<c>notable</c>, then <c>routine</c>, then <c>commentary</c>), most recently reported first within each tier; expect large ties within a tier. A mid-walk <c>routine</c>→<c>notable</c> escalation may be skipped, since the ordering is a best-effort snapshot. For a broad importance filter, prefer <c>significance=notable</c> with the default sort; page 1 is identical. Mutually exclusive with <c>updated_after</c> (an unrecognized value, or either sort value combined with <c>updated_after</c>, returns 400).
    /// </summary>
    public string? Sort { get; init; }

    /// <summary>
    /// Filter to commentary events that comment on or react to the factual event with this <c>id</c> (see <c>related_to</c> on the response). Unresolvable <c>id</c> returns an empty result set, not an error.
    /// </summary>
    public string? RelatedTo { get; init; }

    /// <summary>
    /// When <c>true</c>, widen <c>company</c>/<c>ticker</c>/<c>watchlist</c> matching, and the <c>company_ids</c> returned on each event, to companies with a peripheral role (advisor, speaker, or a passing mention) as well. Default <c>false</c> restricts matching and <c>company_ids</c> to companies with an active-involvement role (subject, acquirer, target, investor, issuer, partner). Does not widen <c>exchange</c>, <c>market</c>, <c>domicile</c>, <c>index</c>, <c>sector</c> or <c>listed</c>: on a factual event those match an active-involvement role; on a commentary event, any role, when a live article in the event is about that company rather than only mentioning it.
    /// </summary>
    public bool? IncludePeripheral { get; init; }

    /// <summary>
    /// ETag value from a previous response. Returns <c>304 Not Modified</c> if data has not changed.
    /// </summary>
    public string? IfNoneMatch { get; init; }
}
