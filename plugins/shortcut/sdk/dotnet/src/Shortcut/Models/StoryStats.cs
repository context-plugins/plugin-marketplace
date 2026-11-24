using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The stats object for Stories
/// </summary>
public record StoryStats
{
    /// <summary>
    /// The number of documents related to this Story.
    /// </summary>
    [JsonPropertyName("num_related_documents")]
    public required long NumRelatedDocuments { get; init; }
}
