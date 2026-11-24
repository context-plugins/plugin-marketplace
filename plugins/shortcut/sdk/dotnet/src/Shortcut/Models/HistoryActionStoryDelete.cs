using System.Text.Json.Serialization;
using Shortcut.Core.Models;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// An action representing a Story being deleted.
/// </summary>
public record HistoryActionStoryDelete
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
    public string Action { get; } = "delete";

    /// <summary>
    /// The name of the Story.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The type of Story; either feature, bug, or chore.
    /// </summary>
    [JsonPropertyName("story_type")]
    public required StoryType1 StoryType { get; init; }

    /// <summary>
    /// The Story's Parent ID (only applicable if Story is a Sub-task)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_story_id")]
    public long? ParentStoryId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
