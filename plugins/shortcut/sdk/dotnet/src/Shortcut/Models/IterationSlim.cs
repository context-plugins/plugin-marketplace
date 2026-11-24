using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// IterationSlim represents the same resource as an Iteration, but is more light-weight. Use the <see href="#Get-Iteration">Get Iteration</see> endpoint to fetch the unabridged payload for an Iteration.
/// </summary>
public record IterationSlim
{
    /// <summary>
    /// The Shortcut application url for the Iteration.
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// A string description of this resource
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// An array of labels attached to the iteration.
    /// </summary>
    [JsonPropertyName("labels")]
    public required IReadOnlyList<Label> Labels { get; init; }

    /// <summary>
    /// <c>Deprecated:</c> use <c>member_mention_ids</c>.
    /// </summary>
    [JsonPropertyName("mention_ids")]
    public required IReadOnlyList<Guid> MentionIds { get; init; }

    /// <summary>
    /// An array of Member IDs that have been mentioned in the Story description.
    /// </summary>
    [JsonPropertyName("member_mention_ids")]
    public required IReadOnlyList<Guid> MemberMentionIds { get; init; }

    /// <summary>
    /// An array containing Group IDs and Group-owned story counts for the Iteration's associated groups.
    /// </summary>
    [JsonPropertyName("associated_groups")]
    public required IReadOnlyList<IterationAssociatedGroup> AssociatedGroups { get; init; }

    /// <summary>
    /// The name of the iteration.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// An array of label ids attached to the iteration.
    /// </summary>
    [JsonPropertyName("label_ids")]
    public required IReadOnlyList<long> LabelIds { get; init; }

    /// <summary>
    /// The instant when this iteration was last updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// An array of Group IDs that have been mentioned in the Story description.
    /// </summary>
    [JsonPropertyName("group_mention_ids")]
    public required IReadOnlyList<Guid> GroupMentionIds { get; init; }

    /// <summary>
    /// The date this iteration ends.
    /// </summary>
    [JsonPropertyName("end_date")]
    public required DateTimeOffset EndDate { get; init; }

    /// <summary>
    /// An array of UUIDs for any Members listed as Followers.
    /// </summary>
    [JsonPropertyName("follower_ids")]
    public required IReadOnlyList<Guid> FollowerIds { get; init; }

    /// <summary>
    /// An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI.
    /// </summary>
    [JsonPropertyName("group_ids")]
    public required IReadOnlyList<Guid> GroupIds { get; init; }

    /// <summary>
    /// The date this iteration begins.
    /// </summary>
    [JsonPropertyName("start_date")]
    public required DateTimeOffset StartDate { get; init; }

    /// <summary>
    /// The status of the iteration. Values are either "unstarted", "started", or "done".
    /// </summary>
    [JsonPropertyName("status")]
    public required string Status { get; init; }

    /// <summary>
    /// The ID of the iteration.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// A group of calculated values for this Iteration.
    /// </summary>
    [JsonPropertyName("stats")]
    public required IterationStats Stats { get; init; }

    /// <summary>
    /// The instant when this iteration was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }
}
