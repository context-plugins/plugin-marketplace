using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record IterationAssociatedGroup
{
    /// <summary>
    /// The Group ID of the associated group.
    /// </summary>
    [JsonPropertyName("group_id")]
    public required Guid GroupId { get; init; }

    /// <summary>
    /// The number of stories this Group owns in the Iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associated_stories_count")]
    public long? AssociatedStoriesCount { get; init; }
}
