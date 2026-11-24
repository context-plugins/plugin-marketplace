using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Validation.Attributes;
using Shortcut.Models.AnyOf;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// Request parameters for creating a story.
/// </summary>
public record CreateStoryParams
{
    /// <summary>
    /// The description of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(100000)]
    public string? Description { get; init; }

    /// <summary>
    /// Controls the story's archived state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    /// <summary>
    /// An array of story links attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_links")]
    public IReadOnlyList<CreateStoryLinkParams>? StoryLinks { get; init; }

    /// <summary>
    /// An array of labels attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<CreateLabelParams>? Labels { get; init; }

    /// <summary>
    /// The type of story (feature, bug, chore).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_type")]
    public StoryType? StoryType { get; init; }

    /// <summary>
    /// A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<CustomFieldValueParams>? CustomFields { get; init; }

    /// <summary>
    /// One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("move_to")]
    public MoveTo? MoveTo { get; init; }

    /// <summary>
    /// An array of IDs of files attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? FileIds { get; init; }

    /// <summary>
    /// Given this story was converted from a task in another story, this is the original task ID that was converted to this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_task_id")]
    public long? SourceTaskId { get; init; }

    /// <summary>
    /// A manual override for the time/date the Story was completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at_override")]
    public DateTimeOffset? CompletedAtOverride { get; init; }

    /// <summary>
    /// The name of the story.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(512, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// An array of comments to add to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comments")]
    public IReadOnlyList<CreateStoryCommentParams>? Comments { get; init; }

    /// <summary>
    /// The ID of the epic the story belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epic_id")]
    public long? EpicId { get; init; }

    /// <summary>
    /// The id of the story template used to create this story, if applicable. This is just an association; no content from the story template is inherited by the story simply by setting this field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_template_id")]
    public Guid? StoryTemplateId { get; init; }

    /// <summary>
    /// An array of External Links associated with this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_links")]
    public IReadOnlyList<string>? ExternalLinks { get; init; }

    /// <summary>
    /// An array of maps specifying sub-tasks to be associated with the created story. Each map can either link to an existing story or create a new sub-task story to be linked to the created story.
    /// Field only applicable when Sub-task feature is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sub_tasks")]
    public IReadOnlyList<SubTask>? SubTasks { get; init; }

    /// <summary>
    /// The ID of the member that requested the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_by_id")]
    public Guid? RequestedById { get; init; }

    /// <summary>
    /// The ID of the iteration the story belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iteration_id")]
    public long? IterationId { get; init; }

    /// <summary>
    /// An array of tasks connected to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasks")]
    public IReadOnlyList<CreateTaskParams>? Tasks { get; init; }

    /// <summary>
    /// A manual override for the time/date the Story was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at_override")]
    public DateTimeOffset? StartedAtOverride { get; init; }

    /// <summary>
    /// The id of the group to associate with this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_id")]
    public Guid? GroupId { get; init; }

    /// <summary>
    /// The ID of the workflow state the story will be in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_state_id")]
    public long? WorkflowStateId { get; init; }

    /// <summary>
    /// The time/date the Story was updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// An array of UUIDs of the followers of this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower_ids")]
    [UniqueItems]
    public IReadOnlyList<Guid>? FollowerIds { get; init; }

    /// <summary>
    /// An array of UUIDs of the owners of this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    [UniqueItems]
    public IReadOnlyList<Guid>? OwnerIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_id")]
    [MaxLength(1024)]
    public string? ExternalId { get; init; }

    /// <summary>
    /// The ID of the parent story to associate with this story (making the created story a sub-task).
    /// Field only applicable when Sub-task feature is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_story_id")]
    public long? ParentStoryId { get; init; }

    /// <summary>
    /// The numeric point estimate of the story. Can also be null, which means unestimated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimate")]
    public long? Estimate { get; init; }

    /// <summary>
    /// The ID of the project the story belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_id")]
    public long? ProjectId { get; init; }

    /// <summary>
    /// An array of IDs of linked files attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_file_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? LinkedFileIds { get; init; }

    /// <summary>
    /// The due date of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deadline")]
    public DateTimeOffset? Deadline { get; init; }

    /// <summary>
    /// The time/date the Story was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }
}
