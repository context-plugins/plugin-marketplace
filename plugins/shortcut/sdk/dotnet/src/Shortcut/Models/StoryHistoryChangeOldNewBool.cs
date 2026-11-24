using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// True if the Story has archived, otherwise false.
/// </summary>
public record StoryHistoryChangeOldNewBool
{
    /// <summary>
    /// The old value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old")]
    public bool? Old { get; init; }

    /// <summary>
    /// The new value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new")]
    public bool? New { get; init; }
}
