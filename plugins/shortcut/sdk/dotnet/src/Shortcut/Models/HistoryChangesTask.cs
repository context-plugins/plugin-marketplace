using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The changes that have occurred as a result of the action.
/// </summary>
public record HistoryChangesTask
{
    /// <summary>
    /// True if the Story has archived, otherwise false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("complete")]
    public StoryHistoryChangeOldNewBool? Complete { get; init; }

    /// <summary>
    /// A timestamp that represents the Story's deadline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public StoryHistoryChangeOldNewStr? Description { get; init; }

    /// <summary>
    /// Custom Field Enum Value IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mention_ids")]
    public StoryHistoryChangeAddsRemovesUuid? MentionIds { get; init; }

    /// <summary>
    /// Custom Field Enum Value IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    public StoryHistoryChangeAddsRemovesUuid? OwnerIds { get; init; }
}
