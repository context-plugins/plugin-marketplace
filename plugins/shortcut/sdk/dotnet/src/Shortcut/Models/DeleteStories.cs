using System.Collections.Generic;
using System.Text.Json.Serialization;
using Shortcut.Core.Validation.Attributes;

namespace Shortcut.Models;

public record DeleteStories
{
    /// <summary>
    /// An array of IDs of Stories to delete.
    /// </summary>
    [JsonPropertyName("story_ids")]
    [UniqueItems]
    public required IReadOnlyList<long> StoryIds { get; init; }
}
