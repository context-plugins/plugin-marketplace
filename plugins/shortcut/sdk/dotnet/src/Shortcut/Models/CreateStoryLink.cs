using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record CreateStoryLink
{
    /// <summary>
    /// The type of link.
    /// </summary>
    [JsonPropertyName("verb")]
    public required VerbShortcutStoryLinksApi Verb { get; init; }

    /// <summary>
    /// The ID of the subject Story.
    /// </summary>
    [JsonPropertyName("subject_id")]
    public required long SubjectId { get; init; }

    /// <summary>
    /// The ID of the object Story.
    /// </summary>
    [JsonPropertyName("object_id")]
    public required long ObjectId { get; init; }
}
