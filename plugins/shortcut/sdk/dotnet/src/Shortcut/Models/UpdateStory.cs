using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Shortcut.Core.Validation.Attributes;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record UpdateStory
{
    /// <summary>
    /// The description of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(100000)]
    public string? Description { get; init; }

    /// <summary>
    /// True if the story is archived, otherwise false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    /// <summary>
    /// An array of labels attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<CreateLabelParams>? Labels { get; init; }

    /// <summary>
    /// An array of IDs of Pull/Merge Requests attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pull_request_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? PullRequestIds { get; init; }

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
    /// A manual override for the time/date the Story was completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at_override")]
    public DateTimeOffset? CompletedAtOverride { get; init; }

    /// <summary>
    /// The title of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(512, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// The ID of the epic the story belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epic_id")]
    public long? EpicId { get; init; }

    /// <summary>
    /// An array of External Links associated with this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_links")]
    public IReadOnlyList<string>? ExternalLinks { get; init; }

    /// <summary>
    /// An array of IDs of Branches attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? BranchIds { get; init; }

    /// <summary>
    /// An array of IDs of Commits attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commit_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? CommitIds { get; init; }

    /// <summary>
    /// An array of story IDs to attach to this story as sub-tasks. This list represents the final state of the parent's sub-tasks - missing stories will be unlinked, new stories will be linked, and the input order reflects sub-task positions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sub_tasks")]
    public IReadOnlyList<LinkSubTaskParams>? SubTasks { get; init; }

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
    /// A manual override for the time/date the Story was started.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_at_override")]
    public DateTimeOffset? StartedAtOverride { get; init; }

    /// <summary>
    /// The ID of the group to associate with this story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_id")]
    public Guid? GroupId { get; init; }

    /// <summary>
    /// The ID of the workflow state to put the story in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_state_id")]
    public long? WorkflowStateId { get; init; }

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
    /// The parent story id. If you want to unset this value set parent_story_id to null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_story_id")]
    public long? ParentStoryId { get; init; }

    /// <summary>
    /// The ID of the story we want to move this story before.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("before_id")]
    public long? BeforeId { get; init; }

    /// <summary>
    /// The numeric point estimate of the story. Can also be null, which means unestimated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimate")]
    public long? Estimate { get; init; }

    /// <summary>
    /// The ID of the story we want to move this story after.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("after_id")]
    public long? AfterId { get; init; }

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
}
