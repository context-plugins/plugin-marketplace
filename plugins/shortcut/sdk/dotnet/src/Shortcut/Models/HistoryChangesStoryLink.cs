using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The changes that have occurred as a result of the action.
/// </summary>
public record HistoryChangesStoryLink
{
    /// <summary>
    /// A timestamp that represents the Story's deadline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verb")]
    public StoryHistoryChangeOldNewStr? Verb { get; init; }

    /// <summary>
    /// The estimate value for the Story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("object_id")]
    public StoryHistoryChangeOldNewInt? ObjectId { get; init; }

    /// <summary>
    /// The estimate value for the Story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject_id")]
    public StoryHistoryChangeOldNewInt? SubjectId { get; init; }
}
