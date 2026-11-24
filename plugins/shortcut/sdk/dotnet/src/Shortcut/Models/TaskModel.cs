using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A Task on a Story.
/// </summary>
public record TaskModel
{
    /// <summary>
    /// Full text of the Task.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// The unique identifier of the parent Story.
    /// </summary>
    [JsonPropertyName("story_id")]
    public required long StoryId { get; init; }

    /// <summary>
    /// <c>Deprecated:</c> use <c>member_mention_ids</c>.
    /// </summary>
    [JsonPropertyName("mention_ids")]
    public required IReadOnlyList<Guid> MentionIds { get; init; }

    /// <summary>
    /// An array of UUIDs of Members mentioned in this Task.
    /// </summary>
    [JsonPropertyName("member_mention_ids")]
    public required IReadOnlyList<Guid> MemberMentionIds { get; init; }

    /// <summary>
    /// The time/date the Task was completed.
    /// </summary>
    [JsonPropertyName("completed_at")]
    public required DateTimeOffset? CompletedAt { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// The time/date the Task was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// An array of UUIDs of Groups mentioned in this Task.
    /// </summary>
    [JsonPropertyName("group_mention_ids")]
    public required IReadOnlyList<Guid> GroupMentionIds { get; init; }

    /// <summary>
    /// An array of UUIDs of the Owners of this Task.
    /// </summary>
    [JsonPropertyName("owner_ids")]
    public required IReadOnlyList<Guid> OwnerIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Task has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The unique ID of the Task.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The number corresponding to the Task's position within a list of Tasks on a Story.
    /// </summary>
    [JsonPropertyName("position")]
    public required long Position { get; init; }

    /// <summary>
    /// True/false boolean indicating whether the Task has been completed.
    /// </summary>
    [JsonPropertyName("complete")]
    public required bool Complete { get; init; }

    /// <summary>
    /// The time/date the Task was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
