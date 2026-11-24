using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;

namespace NordicFinancialNews.Models;

public record StorySummary
{
    /// <summary>
    /// Unique story identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Story title
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Story summary
    /// </summary>
    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    /// <summary>
    /// Number of articles in this story (matches the length of article_ids)
    /// </summary>
    [JsonPropertyName("article_count")]
    public required int ArticleCount { get; init; }

    /// <summary>
    /// When the story's newest source article was published (ISO 8601). This is editorial time, not the time the story reached this API: a story about older news carries an older date. Use it to filter by when news happened, never to track what is new to you.
    /// </summary>
    [JsonPropertyName("published_at")]
    public required DateTimeOffset PublishedAt { get; init; }

    /// <summary>
    /// When this record last changed (ISO 8601). This is the clock incremental sync runs on. It only ever moves forward, unlike published_at. To sync: pass your last completed sync time as <c>updated_after</c>, drain every page via <c>pagination.next_cursor</c>, and only then advance your stored timestamp.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// IDs of articles in this story, most relevant first
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("article_ids")]
    public IReadOnlyList<string>? ArticleIds { get; init; }

    /// <summary>
    /// Country code (ISO 3166-1 alpha-2)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// IDs of companies mentioned in this story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_ids")]
    public IReadOnlyList<string>? CompanyIds { get; init; }

    /// <summary>
    /// Story category
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public Category1? Category { get; init; }

    /// <summary>
    /// ID of the event this story was generated from. An event that has since been merged or removed still answers <c>GET /events/{id}</c> with a tombstone rather than a 404.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_id")]
    public string? EventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
