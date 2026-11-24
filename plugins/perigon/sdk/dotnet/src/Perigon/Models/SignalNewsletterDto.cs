using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Newsletters returned for the requested page.
/// </summary>
public record SignalNewsletterDto
{
    /// <summary>
    /// Unique identifier for the newsletter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public Guid? Uuid { get; init; }

    /// <summary>
    /// Date and time the newsletter was created, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Date and time the newsletter was last updated, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// Generated title of the newsletter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Generated newsletter content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// Article details keyed by article ID for content cited in the newsletter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("articles")]
    public IReadOnlyDictionary<string, SignalArticlePartialDto>? Articles { get; init; }

    /// <summary>
    /// Story details keyed by story identifier for stories cited in the newsletter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stories")]
    public IReadOnlyDictionary<string, SignalNewsletterStoryPartialDto>? Stories { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("xPosts")]
    public IReadOnlyDictionary<string, XPost>? XPosts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
