using System;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Story links allow you create semantic relationships between two stories. Relationship types are relates to, blocks / blocked by, and duplicates / is duplicated by. The format is <c>subject -&gt; link -&gt; object</c>, or for example "story 5 blocks story 6".
/// </summary>
public record StoryLink
{
    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

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
    /// How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to".
    /// </summary>
    [JsonPropertyName("verb")]
    public required string Verb { get; init; }

    /// <summary>
    /// The ID of the object Story.
    /// </summary>
    [JsonPropertyName("object_id")]
    public required long ObjectId { get; init; }

    /// <summary>
    /// The time/date when the Story Link was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The time/date when the Story Link was last updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }
}
