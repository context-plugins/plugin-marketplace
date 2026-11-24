using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Models;

public record EventDetail
{
    /// <summary>
    /// Unique event identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Event title (omitted on a tombstone)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Lifecycle status. <c>active</c>/<c>closed</c> are live (closed = coverage window lapsed but the event stays visible and can reopen). <c>merged</c> = absorbed into another event (see <c>merged_into</c>); <c>removed</c> = withdrawn from the feed (no live articles remain, or it was found to be incorrect). <c>merged</c>/<c>removed</c> never appear in the default list and carry only the tombstone fields.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusNordicFinancialNewsCompaniesApi Status { get; init; }

    /// <summary>
    /// Editorial importance (omitted on a tombstone). <c>notable</c> = front-page-worthy; <c>routine</c> = factual ledger record; <c>commentary</c> = single-article opinion/analysis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("significance")]
    public Significance? Significance { get; init; }

    /// <summary>
    /// The kind of event (omitted on a tombstone)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_type")]
    public EventTypeNordicFinancialNewsCompaniesApi? EventType { get; init; }

    /// <summary>
    /// Number of live articles reporting this event (omitted on a tombstone). This is the total count. Your plan's age and source restrictions do not reduce it; use GET on the event to see which of them your plan can fetch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("article_count")]
    public int? ArticleCount { get; init; }

    /// <summary>
    /// When this event was first reported (ISO 8601, omitted on a tombstone): the earliest known publication time among this event's member articles. Falls back to <c>last_article_at</c> for ordering when null. This is editorial time, not the time the record reached this API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_reported_at")]
    public DateTimeOffset? FirstReportedAt { get; init; }

    /// <summary>
    /// Publication time of the newest article reporting this event (ISO 8601, omitted on a tombstone).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_article_at")]
    public DateTimeOffset? LastArticleAt { get; init; }

    /// <summary>
    /// When this record last changed (ISO 8601). This is the clock incremental sync runs on. Pass your last completed sync time as <c>updated_after</c>, drain every page via <c>pagination.next_cursor</c>, and only then advance your stored timestamp.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// IDs of companies associated with this event, verified and visible only (omitted on a tombstone). Restricted to companies with an active-involvement role (subject, acquirer, target, investor, issuer, partner) unless <c>include_peripheral=true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_ids")]
    public IReadOnlyList<string>? CompanyIds { get; init; }

    /// <summary>
    /// IDs of published stories generated from this event, if any (omitted on a tombstone)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_ids")]
    public IReadOnlyList<string>? StoryIds { get; init; }

    /// <summary>
    /// ID of the surviving event this one was merged into. Present only when <c>status</c> is <c>merged</c>; null for every other status, including <c>removed</c> and on some older merged events.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merged_into")]
    public string? MergedInto { get; init; }

    /// <summary>
    /// Commentary-only metadata: the <c>id</c> of the factual event this commentary event comments on or reacts to, when the piece is about a specific factual event. Always null for non-commentary events, and often null for commentary events too (the piece may not be about a specific event). Filter with <c>related_to=&lt;id&gt;</c> to find commentary reacting to a given event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("related_to")]
    public string? RelatedTo { get; init; }

    /// <summary>
    /// Event summary (omitted on a tombstone). Null when no summary has been generated for the event yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    /// <summary>
    /// IDs of this event's live articles that your plan can fetch, oldest first by publication time (omitted on a tombstone). May be shorter than <c>article_count</c> on a plan with age or source restrictions. That gap is not an error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("article_ids")]
    public IReadOnlyList<string>? ArticleIds { get; init; }

    /// <summary>
    /// The primary disclosure among this event's live articles your plan can fetch: the earliest one from a primary-disclosure source (wire service, stock exchange feed, PR platform, or government body). Null when the event has none. Always an element of <c>article_ids</c>, or null; omitted on a tombstone. A plan with age or source restrictions may see a later official copy of the same disclosure, or null, instead of the true earliest one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primary_disclosure_article_id")]
    public string? PrimaryDisclosureArticleId { get; init; }

    /// <summary>
    /// True when this event's own member articles report divergent values for the same headline figure (e.g. one source reports operating profit as −2.2m, another as −2.4m). A signal that the single consolidated summary hides a source-level disagreement. Omitted on a tombstone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("member_figures_disagree")]
    public bool? MemberFiguresDisagree { get; init; }

    /// <summary>
    /// Detail behind <c>member_figures_disagree</c>: the specific metrics whose values disagree across member articles, with the per-source figures and range. Null when there is no disagreement; omitted on a tombstone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("figure_divergence")]
    public FigureDivergence? FigureDivergence { get; init; }

    /// <summary>
    /// The same companies as <c>company_ids</c>, with detail per company: name, ticker, primary flag, association tier. Primary company first; omitted on a tombstone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies")]
    public IReadOnlyList<CompanyNordicFinancialNewsEventsApi>? Companies { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
