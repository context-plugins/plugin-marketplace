using System;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// A comment on an Airtable record.
/// </summary>
public record Comment
{
    /// <summary>
    /// The unique identifier of the comment.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The user who created the comment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author")]
    public Author? Author { get; init; }

    /// <summary>
    /// The text content of the comment.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// The time when the comment was created.
    /// </summary>
    [JsonPropertyName("createdTime")]
    public required DateTimeOffset CreatedTime { get; init; }

    /// <summary>
    /// The time when the comment was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedTime")]
    public DateTimeOffset? LastUpdatedTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
