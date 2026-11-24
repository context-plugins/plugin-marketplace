using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The Team ID for the Story.
/// </summary>
public record StoryHistoryChangeOldNewUuid
{
    /// <summary>
    /// The old value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("old")]
    public Guid? Old { get; init; }

    /// <summary>
    /// The new value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("new")]
    public Guid? New { get; init; }
}
