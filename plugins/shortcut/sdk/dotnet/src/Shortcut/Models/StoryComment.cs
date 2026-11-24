using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A Comment is any note added within the Comment field of a Story.
/// </summary>
public record StoryComment
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
    /// True/false boolean indicating whether the Comment has been deleted.
    /// </summary>
    [JsonPropertyName("deleted")]
    public required bool Deleted { get; init; }

    /// <summary>
    /// The ID of the Story on which the Comment appears.
    /// </summary>
    [JsonPropertyName("story_id")]
    public required long StoryId { get; init; }

    /// <summary>
    /// <c>Deprecated:</c> use <c>member_mention_ids</c>.
    /// </summary>
    [JsonPropertyName("mention_ids")]
    public required IReadOnlyList<Guid> MentionIds { get; init; }

    /// <summary>
    /// The unique ID of the Member who is the Comment's author.
    /// </summary>
    [JsonPropertyName("author_id")]
    public required Guid? AuthorId { get; init; }

    /// <summary>
    /// The unique IDs of the Member who are mentioned in the Comment.
    /// </summary>
    [JsonPropertyName("member_mention_ids")]
    public required IReadOnlyList<Guid> MemberMentionIds { get; init; }

    /// <summary>
    /// Marks the comment as a blocker that can be surfaced to permissions or teams mentioned in the comment. Can only be used on a top-level comment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocker")]
    public bool? Blocker { get; init; }

    /// <summary>
    /// Whether the Comment is currently the root of a thread that is linked to Slack.
    /// </summary>
    [JsonPropertyName("linked_to_slack")]
    public required bool LinkedToSlack { get; init; }

    /// <summary>
    /// The time/date when the Comment was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The unique IDs of the Group who are mentioned in the Comment.
    /// </summary>
    [JsonPropertyName("group_mention_ids")]
    public required IReadOnlyList<Guid> GroupMentionIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Comment has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The ID of the parent Comment this Comment is threaded under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_id")]
    public long? ParentId { get; init; }

    /// <summary>
    /// The unique ID of the Comment.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The Comments numerical position in the list from oldest to newest.
    /// </summary>
    [JsonPropertyName("position")]
    public required long Position { get; init; }

    /// <summary>
    /// Marks the comment as an unblocker to its  blocker parent. Can only be set on a threaded comment who has a parent with <c>blocker</c> set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unblocks_parent")]
    public bool? UnblocksParent { get; init; }

    /// <summary>
    /// A set of Reactions to this Comment.
    /// </summary>
    [JsonPropertyName("reactions")]
    public required IReadOnlyList<StoryReaction> Reactions { get; init; }

    /// <summary>
    /// The time/date when the Comment was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The text of the Comment. In the case that the Comment has been deleted, this field can be set to nil.
    /// </summary>
    [JsonPropertyName("text")]
    public required string? Text { get; init; }
}
