using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Custom Field Enum Value IDs that have been added or removed from the Story.
/// </summary>
public record StoryHistoryChangeAddsRemovesUuid
{
    /// <summary>
    /// The values that have been added.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adds")]
    public IReadOnlyList<Guid>? Adds { get; init; }

    /// <summary>
    /// The values that have been removed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("removes")]
    public IReadOnlyList<Guid>? Removes { get; init; }
}
