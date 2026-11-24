using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// Comments associated with Epic Discussions.
/// </summary>
public record ThreadedComment
{
    /// <summary>
    /// The Shortcut application url for the Comment.
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// True/false boolean indicating whether the Comment is deleted.
    /// </summary>
    [JsonPropertyName("deleted")]
    public required bool Deleted { get; init; }

    /// <summary>
    /// <c>Deprecated:</c> use <c>member_mention_ids</c>.
    /// </summary>
    [JsonPropertyName("mention_ids")]
    public required IReadOnlyList<Guid> MentionIds { get; init; }

    /// <summary>
    /// The unique ID of the Member that authored the Comment.
    /// </summary>
    [JsonPropertyName("author_id")]
    public required Guid AuthorId { get; init; }

    /// <summary>
    /// An array of Member IDs that have been mentioned in this Comment.
    /// </summary>
    [JsonPropertyName("member_mention_ids")]
    public required IReadOnlyList<Guid> MemberMentionIds { get; init; }

    /// <summary>
    /// A nested array of threaded comments.
    /// </summary>
    [JsonPropertyName("comments")]
    public required IReadOnlyList<ThreadedComment> Comments { get; init; }

    /// <summary>
    /// The time/date the Comment was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// An array of Group IDs that have been mentioned in this Comment.
    /// </summary>
    [JsonPropertyName("group_mention_ids")]
    public required IReadOnlyList<Guid> GroupMentionIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The unique ID of the Comment.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The time/date the Comment was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The text of the Comment.
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }
}
