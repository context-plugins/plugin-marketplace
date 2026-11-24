using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Validation.Attributes;
using Shortcut.Models.AnyOf;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

/// <summary>
/// Request parameters for creating a story from a story template. These parameters are merged with the values derived from the template.
/// </summary>
public record CreateStoryFromTemplateParams
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
    /// An array of External Links associated with this story. These will be added to any links provided by the template. Cannot be used in conjunction with <c>external_links</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_links_add")]
    [UniqueItems]
    public IReadOnlyList<string>? ExternalLinksAdd { get; init; }

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
    /// The name of the story. Must be provided if the template does not provide a name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(512, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// An array of IDs of files attached to the story in addition to files from the template. Cannot be used in conjunction with <c>file_ids</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_ids_add")]
    [UniqueItems]
    public IReadOnlyList<long>? FileIdsAdd { get; init; }

    /// <summary>
    /// An array of IDs of files removed from files from the template. Cannot be used in conjunction with <c>file_ids</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_ids_remove")]
    [UniqueItems]
    public IReadOnlyList<long>? FileIdsRemove { get; init; }

    /// <summary>
    /// An array of comments to add to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comments")]
    public IReadOnlyList<CreateStoryCommentParams>? Comments { get; init; }

    /// <summary>
    /// The UUIDs of the new followers to be added in addition to followers from the template. Cannot be used in conjunction with <c>follower_ids.</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower_ids_add")]
    [UniqueItems]
    public IReadOnlyList<Guid>? FollowerIdsAdd { get; init; }

    /// <summary>
    /// The ID of the epic the story belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epic_id")]
    public long? EpicId { get; init; }

    /// <summary>
    /// The id of the story template used to create this story.
    /// </summary>
    [JsonPropertyName("story_template_id")]
    public required Guid StoryTemplateId { get; init; }

    /// <summary>
    /// An array of External Links associated with this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_links")]
    public IReadOnlyList<string>? ExternalLinks { get; init; }

    /// <summary>
    /// The UUIDs of the new followers to be removed from followers from the template. Cannot be used in conjunction with <c>follower_ids</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower_ids_remove")]
    [UniqueItems]
    public IReadOnlyList<Guid>? FollowerIdsRemove { get; init; }

    /// <summary>
    /// An array of maps specifying sub-tasks to be associated with the created story. Each map can either link to an existing story or create a new sub-task story to be linked to the created story.
    /// Field only applicable when Sub-task feature is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sub_tasks")]
    public IReadOnlyList<SubTask>? SubTasks { get; init; }

    /// <summary>
    /// An array of IDs of linked files removed from files from the template. Cannot be used in conjunction with <c>linked_files.</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_file_ids_remove")]
    [UniqueItems]
    public IReadOnlyList<long>? LinkedFileIdsRemove { get; init; }

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
    /// A map specifying a CustomField ID. These will be removed from any fields provided by the template. Cannot be used in conjunction with <c>custom_fields</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields_remove")]
    [UniqueItems]
    public IReadOnlyList<RemoveCustomFieldParams>? CustomFieldsRemove { get; init; }

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
    /// An array of labels attached to the story in addition to the labels provided by the template. Cannot be used in conjunction with <c>labels</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels_add")]
    [UniqueItems]
    public IReadOnlyList<CreateLabelParams>? LabelsAdd { get; init; }

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
    /// The UUIDs of the new owners to be removed from owners from the template. Cannot be used in conjunction with <c>owners</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids_remove")]
    [UniqueItems]
    public IReadOnlyList<Guid>? OwnerIdsRemove { get; init; }

    /// <summary>
    /// A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField. These will be added to any fields provided by the template. Cannot be used in conjunction with <c>custom_fields</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields_add")]
    [UniqueItems]
    public IReadOnlyList<CustomFieldValueParams>? CustomFieldsAdd { get; init; }

    /// <summary>
    /// The ID of the project the story belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_id")]
    public long? ProjectId { get; init; }

    /// <summary>
    /// An array of IDs of linked files attached to the story in addition to files from the template. Cannot be used in conjunction with <c>linked_files</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_file_ids_add")]
    [UniqueItems]
    public IReadOnlyList<long>? LinkedFileIdsAdd { get; init; }

    /// <summary>
    /// An array of IDs of linked files attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_file_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? LinkedFileIds { get; init; }

    /// <summary>
    /// An array of labels to remove from the labels provided by the template. Cannot be used in conjunction with <c>labels</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels_remove")]
    [UniqueItems]
    public IReadOnlyList<RemoveLabelParams>? LabelsRemove { get; init; }

    /// <summary>
    /// The due date of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deadline")]
    public DateTimeOffset? Deadline { get; init; }

    /// <summary>
    /// The UUIDs of the new owners to be added in addition to owners from the template. Cannot be used in conjunction with <c>owners</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids_add")]
    [UniqueItems]
    public IReadOnlyList<Guid>? OwnerIdsAdd { get; init; }

    /// <summary>
    /// The time/date the Story was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// An array of External Links associated with this story. These will be removed from any links provided by the template. Cannot be used in conjunction with <c>external_links</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_links_remove")]
    [UniqueItems]
    public IReadOnlyList<string>? ExternalLinksRemove { get; init; }
}
