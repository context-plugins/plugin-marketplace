using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// EpicSlim represents the same resource as an Epic but is more light-weight, including all Epic fields except the comments array. The description string can be optionally included. Use the <see href="#Get-Epic">Get Epic</see> endpoint to fetch the unabridged payload for an Epic.
/// </summary>
public record EpicSlim
{
    /// <summary>
    /// The Shortcut application url for the Epic.
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The Epic's description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// True/false boolean that indicates whether the Epic is archived or not.
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Epic has been started.
    /// </summary>
    [JsonPropertyName("started")]
    public required bool Started { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// An array of Labels attached to the Epic.
    /// </summary>
    [JsonPropertyName("labels")]
    public required IReadOnlyList<LabelSlim> Labels { get; init; }

    /// <summary>
    /// <c>Deprecated:</c> use <c>member_mention_ids</c>.
    /// </summary>
    [JsonPropertyName("mention_ids")]
    public required IReadOnlyList<Guid> MentionIds { get; init; }

    /// <summary>
    /// An array of Member IDs that have been mentioned in the Epic description.
    /// </summary>
    [JsonPropertyName("member_mention_ids")]
    public required IReadOnlyList<Guid> MemberMentionIds { get; init; }

    /// <summary>
    /// An array containing Group IDs and Group-owned story counts for the Epic's associated groups.
    /// </summary>
    [JsonPropertyName("associated_groups")]
    public required IReadOnlyList<EpicAssociatedGroup> AssociatedGroups { get; init; }

    /// <summary>
    /// The IDs of Projects related to this Epic.
    /// </summary>
    [JsonPropertyName("project_ids")]
    public required IReadOnlyList<long> ProjectIds { get; init; }

    /// <summary>
    /// The number of stories in this epic which are not associated with a project.
    /// </summary>
    [JsonPropertyName("stories_without_projects")]
    public required long StoriesWithoutProjects { get; init; }

    /// <summary>
    /// A manual override for the time/date the Epic was completed.
    /// </summary>
    [JsonPropertyName("completed_at_override")]
    public required DateTimeOffset? CompletedAtOverride { get; init; }

    /// <summary>
    /// The ID of the associated productboard integration.
    /// </summary>
    [JsonPropertyName("productboard_plugin_id")]
    public required Guid? ProductboardPluginId { get; init; }

    /// <summary>
    /// The time/date the Epic was started.
    /// </summary>
    [JsonPropertyName("started_at")]
    public required DateTimeOffset? StartedAt { get; init; }

    /// <summary>
    /// The time/date the Epic was completed.
    /// </summary>
    [JsonPropertyName("completed_at")]
    public required DateTimeOffset? CompletedAt { get; init; }

    /// <summary>
    /// An array of IDs for Objectives to which this epic is related.
    /// </summary>
    [JsonPropertyName("objective_ids")]
    public required IReadOnlyList<long> ObjectiveIds { get; init; }

    /// <summary>
    /// The name of the Epic.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Epic has been completed.
    /// </summary>
    [JsonPropertyName("completed")]
    public required bool Completed { get; init; }

    /// <summary>
    /// The URL of the associated productboard feature.
    /// </summary>
    [JsonPropertyName("productboard_url")]
    public required string? ProductboardUrl { get; init; }

    /// <summary>
    /// The Epic's planned start date.
    /// </summary>
    [JsonPropertyName("planned_start_date")]
    public required DateTimeOffset? PlannedStartDate { get; init; }

    /// <summary>
    /// <c>Deprecated</c> The workflow state that the Epic is in.
    /// </summary>
    [JsonPropertyName("state")]
    public required string State { get; init; }

    /// <summary>
    /// <c>Deprecated</c> The ID of the Objective this Epic is related to. Use <c>objective_ids</c>.
    /// </summary>
    [JsonPropertyName("milestone_id")]
    public required long? MilestoneId { get; init; }

    /// <summary>
    /// The ID of the Member that requested the epic.
    /// </summary>
    [JsonPropertyName("requested_by_id")]
    public required Guid RequestedById { get; init; }

    /// <summary>
    /// The ID of the Epic State.
    /// </summary>
    [JsonPropertyName("epic_state_id")]
    public required long EpicStateId { get; init; }

    /// <summary>
    /// An array of Label ids attached to the Epic.
    /// </summary>
    [JsonPropertyName("label_ids")]
    public required IReadOnlyList<long> LabelIds { get; init; }

    /// <summary>
    /// A manual override for the time/date the Epic was started.
    /// </summary>
    [JsonPropertyName("started_at_override")]
    public required DateTimeOffset? StartedAtOverride { get; init; }

    /// <summary>
    /// <c>Deprecated</c> The ID of the group to associate with the epic. Use <c>group_ids</c>.
    /// </summary>
    [JsonPropertyName("group_id")]
    public required Guid? GroupId { get; init; }

    /// <summary>
    /// The time/date the Epic was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// An array of Group IDs that have been mentioned in the Epic description.
    /// </summary>
    [JsonPropertyName("group_mention_ids")]
    public required IReadOnlyList<Guid> GroupMentionIds { get; init; }

    /// <summary>
    /// The ID of the associated productboard feature.
    /// </summary>
    [JsonPropertyName("productboard_id")]
    public required Guid? ProductboardId { get; init; }

    /// <summary>
    /// An array of UUIDs for any Members you want to add as Followers on this Epic.
    /// </summary>
    [JsonPropertyName("follower_ids")]
    public required IReadOnlyList<Guid> FollowerIds { get; init; }

    /// <summary>
    /// An array of UUIDS for Groups to which this Epic is related.
    /// </summary>
    [JsonPropertyName("group_ids")]
    public required IReadOnlyList<Guid> GroupIds { get; init; }

    /// <summary>
    /// An array of UUIDs for any members you want to add as Owners on this new Epic.
    /// </summary>
    [JsonPropertyName("owner_ids")]
    public required IReadOnlyList<Guid> OwnerIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The unique ID of the Epic.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The Epic's relative position in the Epic workflow state.
    /// </summary>
    [JsonPropertyName("position")]
    public required long Position { get; init; }

    /// <summary>
    /// The name of the associated productboard feature.
    /// </summary>
    [JsonPropertyName("productboard_name")]
    public required string? ProductboardName { get; init; }

    /// <summary>
    /// The Epic's deadline.
    /// </summary>
    [JsonPropertyName("deadline")]
    public required DateTimeOffset? Deadline { get; init; }

    /// <summary>
    /// A group of calculated values for this Epic.
    /// </summary>
    [JsonPropertyName("stats")]
    public required EpicStats Stats { get; init; }

    /// <summary>
    /// The time/date the Epic was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset? CreatedAt { get; init; }
}
