using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record CreateStories
{
    /// <summary>
    /// An array of stories to be created.
    /// </summary>
    [JsonPropertyName("stories")]
    public required IReadOnlyList<CreateStoryParams> Stories { get; init; }
}
