using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A timestamp that represents the Story's deadline.
/// </summary>
public record StoryHistoryChangeOldNewStr
{
    /// <summary>
    /// The old value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old")]
    public string? Old { get; init; }

    /// <summary>
    /// The new value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new")]
    public string? New { get; init; }
}
