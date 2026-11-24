using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Task IDs that have been added or removed from the Story.
/// </summary>
public record StoryHistoryChangeAddsRemovesInt
{
    /// <summary>
    /// The values that have been added.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adds")]
    public IReadOnlyList<long>? Adds { get; init; }

    /// <summary>
    /// The values that have been removed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removes")]
    public IReadOnlyList<long>? Removes { get; init; }
}
