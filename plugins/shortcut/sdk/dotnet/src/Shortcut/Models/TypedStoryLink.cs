using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The type of Story Link. The string can be subject or object.
/// </summary>
public record TypedStoryLink
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The ID of the object Story.
    /// </summary>
    [JsonPropertyName("object_id")]
    public required long ObjectId { get; init; }

    /// <summary>
    /// How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to".
    /// </summary>
    [JsonPropertyName("verb")]
    public required string Verb { get; init; }

    /// <summary>
    /// This indicates whether the Story is the subject or object in the Story Link.
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The time/date when the Story Link was last updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// The unique identifier of the Story Link.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The ID of the subject Story.
    /// </summary>
    [JsonPropertyName("subject_id")]
    public required long SubjectId { get; init; }

    /// <summary>
    /// The workflow state of the "subject" story.
    /// </summary>
    [JsonPropertyName("subject_workflow_state_id")]
    public required long SubjectWorkflowStateId { get; init; }

    /// <summary>
    /// The time/date when the Story Link was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
