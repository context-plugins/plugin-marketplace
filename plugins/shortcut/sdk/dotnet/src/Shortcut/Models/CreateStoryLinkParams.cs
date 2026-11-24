using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// Request parameters for creating a Story Link within a Story.
/// </summary>
public record CreateStoryLinkParams
{
    /// <summary>
    /// The unique ID of the Story defined as subject.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject_id")]
    public long? SubjectId { get; init; }

    /// <summary>
    /// How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to".
    /// </summary>
    [JsonPropertyName("verb")]
    public required Verb Verb { get; init; }

    /// <summary>
    /// The unique ID of the Story defined as object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("object_id")]
    public long? ObjectId { get; init; }
}
