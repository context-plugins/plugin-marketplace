using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

/// <summary>
/// An action representing a Story Comment being created.
/// </summary>
public record HistoryActionStoryCommentCreate
{
    /// <summary>
    /// The ID of the entity referenced.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The type of entity referenced.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The action of the entity referenced.
    /// </summary>
    [JsonPropertyName("action")]
    public string Action { get; } = "create";

    /// <summary>
    /// The application URL of the Story Comment.
    /// </summary>
    [JsonPropertyName("app_url")]
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The Member ID of who created the Story Comment.
    /// </summary>
    [JsonPropertyName("author_id")]
    public required Guid AuthorId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
