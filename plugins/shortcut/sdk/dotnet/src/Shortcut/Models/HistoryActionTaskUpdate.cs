using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

/// <summary>
/// An action representing a Task being updated.
/// </summary>
public record HistoryActionTaskUpdate
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
    public string Action { get; } = "update";

    /// <summary>
    /// The changes that have occurred as a result of the action.
    /// </summary>
    [JsonPropertyName("changes")]
    public required HistoryChangesTask Changes { get; init; }

    /// <summary>
    /// Whether or not the Task is complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("complete")]
    public bool? Complete { get; init; }

    /// <summary>
    /// The description of the Task.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// The Story ID that contains the Task.
    /// </summary>
    [JsonPropertyName("story_id")]
    public required long StoryId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
