using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record UpdateEpic
{
    /// <summary>
    /// The Epic's description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(100000)]
    public string? Description { get; init; }

    /// <summary>
    /// A true/false boolean indicating whether the Epic is in archived state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    /// <summary>
    /// An array of Labels attached to the Epic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<CreateLabelParams>? Labels { get; init; }

    /// <summary>
    /// A manual override for the time/date the Epic was completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at_override")]
    public DateTimeOffset? CompletedAtOverride { get; init; }

    /// <summary>
    /// An array of IDs for Objectives to which this Epic is related.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objective_ids")]
    public IReadOnlyList<long>? ObjectiveIds { get; init; }

    /// <summary>
    /// The Epic's name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(256, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// The Epic's planned start date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("planned_start_date")]
    public DateTimeOffset? PlannedStartDate { get; init; }

    /// <summary>
    /// <c>Deprecated</c> The Epic's state (to do, in progress, or done); will be ignored when <c>epic_state_id</c> is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// <c>Deprecated</c> The ID of the Milestone this Epic is related to. Use <c>objective_ids</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("milestone_id")]
    public long? MilestoneId { get; init; }

    /// <summary>
    /// The ID of the member that requested the epic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_by_id")]
    public Guid? RequestedById { get; init; }

    /// <summary>
    /// The ID of the Epic State.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epic_state_id")]
    public long? EpicStateId { get; init; }

    /// <summary>
    /// A manual override for the time/date the Epic was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at_override")]
    public DateTimeOffset? StartedAtOverride { get; init; }

    /// <summary>
    /// <c>Deprecated</c> The ID of the group to associate with the epic. Use <c>group_ids</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_id")]
    public Guid? GroupId { get; init; }

    /// <summary>
    /// An array of UUIDs for any Members you want to add as Followers on this Epic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower_ids")]
    public IReadOnlyList<Guid>? FollowerIds { get; init; }

    /// <summary>
    /// An array of UUIDS for Groups to which this Epic is related.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_ids")]
    public IReadOnlyList<Guid>? GroupIds { get; init; }

    /// <summary>
    /// An array of UUIDs for any members you want to add as Owners on this Epic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    public IReadOnlyList<Guid>? OwnerIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    [MaxLength(128)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// The ID of the Epic we want to move this Epic before.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("before_id")]
    public long? BeforeId { get; init; }

    /// <summary>
    /// The ID of the Epic we want to move this Epic after.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("after_id")]
    public long? AfterId { get; init; }

    /// <summary>
    /// The Epic's deadline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deadline")]
    public DateTimeOffset? Deadline { get; init; }
}
