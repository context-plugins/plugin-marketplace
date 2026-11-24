using System.Text.Json.Serialization;
using Shortcut.Core.Models;

namespace Shortcut.Models;

public record LinkSubTaskParams
{
    /// <summary>
    /// The ID of the story to link as a sub-task of the parent story
    /// </summary>
    [JsonPropertyName("story_id")]
    public required long StoryId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
