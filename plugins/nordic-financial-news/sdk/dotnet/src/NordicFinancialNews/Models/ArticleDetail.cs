using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Models.Enums;

namespace NordicFinancialNews.Models;

public record ArticleDetail
{
    /// <summary>
    /// Unique article identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Article title in English. Machine-translated when the source article is not in English.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Link to the original article
    /// </summary>
    [JsonPropertyName("article_url")]
    public required string ArticleUrl { get; init; }

    /// <summary>
    /// Type of article content
    /// </summary>
    [JsonPropertyName("content_type")]
    public required ContentType ContentType { get; init; }

    /// <summary>
    /// When the article was published by its source (ISO 8601). This is editorial time, not the time the article reached this API. Use it to filter by when news happened, never to track what is new to you.
    /// </summary>
    [JsonPropertyName("published_at")]
    public required DateTimeOffset PublishedAt { get; init; }

    /// <summary>
    /// When this record last changed (ISO 8601). This is the clock incremental sync runs on. It only ever moves forward, unlike published_at. To sync: pass your last completed sync time as <c>updated_after</c>, drain every page via <c>pagination.next_cursor</c>, and only then advance your stored timestamp.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Article category
    /// </summary>
    [JsonPropertyName("category")]
    public required Category Category { get; init; }

    /// <summary>
    /// The news source that published this article
    /// </summary>
    [JsonPropertyName("source")]
    public required Source Source { get; init; }

    /// <summary>
    /// IDs of companies mentioned in the article
    /// </summary>
    [JsonPropertyName("company_ids")]
    public required IReadOnlyList<string> CompanyIds { get; init; }

    /// <summary>
    /// Country code (ISO 3166-1 alpha-2)
    /// </summary>
    [JsonPropertyName("country")]
    public required string? Country { get; init; }

    /// <summary>
    /// ID of the event this article belongs to. Null when the article has not been assigned to an event yet. An event that has since been merged or removed still answers <c>GET /events/{id}</c> with a tombstone rather than a 404.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_id")]
    public string? EventId { get; init; }

    /// <summary>
    /// Original article title in source language
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_title")]
    public string? SourceTitle { get; init; }

    /// <summary>
    /// AI-generated English summary of the article: a machine translation and paraphrase of the source text, not verbatim.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    /// <summary>
    /// IDs of published stories covering this article, if any
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_ids")]
    public IReadOnlyList<string>? StoryIds { get; init; }

    /// <summary>
    /// Companies mentioned in this article, primary company first
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companies")]
    public IReadOnlyList<Company>? Companies { get; init; }

    /// <summary>
    /// Key points from the article. Machine-generated English paraphrases of statements in the source article, not verbatim quotations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key_points")]
    public IReadOnlyList<string>? KeyPoints { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
