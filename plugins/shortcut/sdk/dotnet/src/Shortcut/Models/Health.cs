using System;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// The current health status of the Epic.
/// </summary>
public record Health
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The ID of the permission who created or updated the Health record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author_id")]
    public Guid? AuthorId { get; init; }

    /// <summary>
    /// The ID of the Epic associated with this Health record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epic_id")]
    public long? EpicId { get; init; }

    /// <summary>
    /// The ID of the Objective associated with this Health record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objective_id")]
    public long? ObjectiveId { get; init; }

    /// <summary>
    /// The time that the Health record was updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The health status of the Epic or Objective.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// The unique ID of the Health record.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid? Id { get; init; }

    /// <summary>
    /// The time that the Health record was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// The text of the Health record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }
}
