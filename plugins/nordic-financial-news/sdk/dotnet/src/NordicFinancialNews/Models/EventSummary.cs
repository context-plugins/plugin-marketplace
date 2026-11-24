using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Models;

/// <summary>
/// An event: one real-world development, grouping the articles that report it. A <c>merged</c> or <c>removed</c> event (see <c>status</c>) returns only the minimal tombstone fields (<c>id</c>, <c>status</c>, <c>merged_into</c>, <c>updated_at</c>). Title, significance, event_type, counts, and every id array are omitted, never null-but-present, so a tombstone carries no content.
/// </summary>
public record EventSummary
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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
