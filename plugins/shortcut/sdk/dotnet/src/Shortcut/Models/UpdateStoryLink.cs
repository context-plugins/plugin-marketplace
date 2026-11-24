using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record UpdateStoryLink
{
    /// <summary>
    /// The type of link.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verb")]
    public VerbShortcutStoryLinksApi? Verb { get; init; }

    /// <summary>
    /// The ID of the subject Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject_id")]
    public long? SubjectId { get; init; }

    /// <summary>
    /// The ID of the object Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("object_id")]
    public long? ObjectId { get; init; }
}
