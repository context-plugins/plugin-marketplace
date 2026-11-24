using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The estimate value for the Story
/// </summary>
public record StoryHistoryChangeOldNewInt
{
    /// <summary>
    /// The old value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old")]
    public long? Old { get; init; }

    /// <summary>
    /// The new value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new")]
    public long? New { get; init; }
}
