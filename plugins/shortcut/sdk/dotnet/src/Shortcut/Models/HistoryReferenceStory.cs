using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Models.AnyOf;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// A reference to a Story.
/// </summary>
public record HistoryReferenceStory
{
    /// <summary>
    /// The ID of the entity referenced.
    /// </summary>
    [JsonPropertyName("id")]
    public required Id Id { get; init; }

    /// <summary>
    /// The type of entity referenced.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The application URL of the Story.
    /// </summary>
    [JsonPropertyName("app_url")]
    [MaxLength(2048)]
    [RegularExpression("^https?://.+$")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The name of the entity referenced.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// If the referenced entity is a Story, either "bug", "chore", or "feature".
    /// </summary>
    [JsonPropertyName("story_type")]
    public required StoryType4 StoryType { get; init; }

    /// <summary>
    /// The Story's Parent ID (only applicable if Story is a Sub-task)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_story_id")]
    public long? ParentStoryId { get; init; }
}
