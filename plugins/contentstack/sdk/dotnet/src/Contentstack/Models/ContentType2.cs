using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// A content type definition with schema and configuration.
/// </summary>
public record ContentType2
{
    /// <summary>
    /// Unique identifier of the content type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Display name of the content type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Description of the content type's purpose.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Array of field definitions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schema")]
    public IReadOnlyList<Field2>? Schema { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the content type was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// ISO 8601 timestamp when the content type was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
