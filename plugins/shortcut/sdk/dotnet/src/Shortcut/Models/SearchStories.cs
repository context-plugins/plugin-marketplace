using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Validation.Attributes;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record SearchStories
{
    /// <summary>
    /// A true/false boolean indicating whether the Story is in archived state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    /// <summary>
    /// An array of UUIDs for any Users who may be Owners of the Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_id")]
    public Guid? OwnerId { get; init; }

    /// <summary>
    /// The type of Stories that you want returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_type")]
    public StoryType6? StoryType { get; init; }

    /// <summary>
    /// The Epic IDs that may be associated with the Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epic_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? EpicIds { get; init; }

    /// <summary>
    /// The IDs for the Projects the Stories may be assigned to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_ids")]
    [UniqueItems]
    public IReadOnlyList<long?>? ProjectIds { get; init; }

    /// <summary>
    /// Stories should have been updated on or before this date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at_end")]
    public DateTimeOffset? UpdatedAtEnd { get; init; }

    /// <summary>
    /// Stories should have been completed on or before this date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at_end")]
    public DateTimeOffset? CompletedAtEnd { get; init; }

    /// <summary>
    /// The type of Workflow State the Stories may be in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_state_types")]
    public IReadOnlyList<WorkflowStateType>? WorkflowStateTypes { get; init; }

    /// <summary>
    /// Stories should have a deadline on or before this date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deadline_end")]
    public DateTimeOffset? DeadlineEnd { get; init; }

    /// <summary>
    /// Stories should have been created on or after this date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at_start")]
    public DateTimeOffset? CreatedAtStart { get; init; }

    /// <summary>
    /// The Epic IDs that may be associated with the Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epic_id")]
    public long? EpicId { get; init; }

    /// <summary>
    /// The name of any associated Labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label_name")]
    [MinLength(1)]
    public string? LabelName { get; init; }

    /// <summary>
    /// The UUID of any Users who may have requested the Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_by_id")]
    public Guid? RequestedById { get; init; }

    /// <summary>
    /// The Iteration ID that may be associated with the Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iteration_id")]
    public long? IterationId { get; init; }

    /// <summary>
    /// The Label IDs that may be associated with the Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? LabelIds { get; init; }

    /// <summary>
    /// The Group ID that is associated with the Stories
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_id")]
    public Guid? GroupId { get; init; }

    /// <summary>
    /// The unique IDs of the specific Workflow States that the Stories should be in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_state_id")]
    public long? WorkflowStateId { get; init; }

    /// <summary>
    /// The Iteration IDs that may be associated with the Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iteration_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? IterationIds { get; init; }

    /// <summary>
    /// Stories should have been created on or before this date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at_end")]
    public DateTimeOffset? CreatedAtEnd { get; init; }

    /// <summary>
    /// Stories should have a deadline on or after this date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deadline_start")]
    public DateTimeOffset? DeadlineStart { get; init; }

    /// <summary>
    /// The Group IDs that are associated with the Stories
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_ids")]
    [UniqueItems]
    public IReadOnlyList<Guid>? GroupIds { get; init; }

    /// <summary>
    /// An array of UUIDs for any Users who may be Owners of the Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    [UniqueItems]
    public IReadOnlyList<Guid>? OwnerIds { get; init; }

    /// <summary>
    /// An ID or URL that references an external resource. Useful during imports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    [MaxLength(1024)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// Whether to include the story description in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("includes_description")]
    public bool? IncludesDescription { get; init; }

    /// <summary>
    /// The number of estimate points associate with the Stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimate")]
    public long? Estimate { get; init; }

    /// <summary>
    /// The IDs for the Projects the Stories may be assigned to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_id")]
    public long? ProjectId { get; init; }

    /// <summary>
    /// Stories should have been completed on or after this date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at_start")]
    public DateTimeOffset? CompletedAtStart { get; init; }

    /// <summary>
    /// Stories should have been updated on or after this date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at_start")]
    public DateTimeOffset? UpdatedAtStart { get; init; }
}
