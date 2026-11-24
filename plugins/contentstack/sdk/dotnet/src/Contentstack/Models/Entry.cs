using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// A published content entry with all its field values.
/// </summary>
public record Entry
{
    /// <summary>
    /// Unique identifier of the entry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// The title of the entry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// The locale code of the entry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locale")]
    public string? Locale { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the entry was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the entry was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the entry was last published.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("published_at")]
    public DateTimeOffset? PublishedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
