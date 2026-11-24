using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// An action representing a Story Link being updated.
/// </summary>
public record HistoryActionStoryLinkUpdate
{
    /// <summary>
    /// The ID of the entity referenced.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The type of entity referenced.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The action of the entity referenced.
    /// </summary>
    [JsonPropertyName("action")]
    public string Action { get; } = "update";

    /// <summary>
    /// The verb describing the link's relationship.
    /// </summary>
    [JsonPropertyName("verb")]
    public required Verb1 Verb { get; init; }

    /// <summary>
    /// The Story ID of the subject Story.
    /// </summary>
    [JsonPropertyName("subject_id")]
    public required long SubjectId { get; init; }

    /// <summary>
    /// The Story ID of the object Story.
    /// </summary>
    [JsonPropertyName("object_id")]
    public required long ObjectId { get; init; }

    /// <summary>
    /// The changes that have occurred as a result of the action.
    /// </summary>
    [JsonPropertyName("changes")]
    public required HistoryChangesStoryLink Changes { get; init; }
}
