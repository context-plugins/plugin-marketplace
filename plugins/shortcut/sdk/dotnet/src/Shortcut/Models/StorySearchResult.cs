using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// A Story in search results. This is typed differently from Story because the details=slim search argument will omit some fields.
/// </summary>
public record StorySearchResult
{
    /// <summary>
    /// The Shortcut application url for the Story.
    /// </summary>
    [JsonPropertyName("app_url")]
    public required string AppUrl { get; init; }

    /// <summary>
    /// The description of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// True if the story has been archived or not.
    /// </summary>
    [JsonPropertyName("archived")]
    public required bool Archived { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Story has been started.
    /// </summary>
    [JsonPropertyName("started")]
    public required bool Started { get; init; }

    /// <summary>
    /// An array of story links attached to the Story.
    /// </summary>
    [JsonPropertyName("story_links")]
    public required IReadOnlyList<TypedStoryLink> StoryLinks { get; init; }

    /// <summary>
    /// A string description of this resource.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// An array of labels attached to the story.
    /// </summary>
    [JsonPropertyName("labels")]
    public required IReadOnlyList<LabelSlim> Labels { get; init; }

    /// <summary>
    /// An array of IDs of Tasks attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task_ids")]
    public IReadOnlyList<long>? TaskIds { get; init; }

    /// <summary>
    /// <c>Deprecated:</c> use <c>member_mention_ids</c>.
    /// </summary>
    [JsonPropertyName("mention_ids")]
    public required IReadOnlyList<Guid> MentionIds { get; init; }

    /// <summary>
    /// The synced item for the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("synced_item")]
    public SyncedItem? SyncedItem { get; init; }

    /// <summary>
    /// An array of Member IDs that have been mentioned in the Story description.
    /// </summary>
    [JsonPropertyName("member_mention_ids")]
    public required IReadOnlyList<Guid> MemberMentionIds { get; init; }

    /// <summary>
    /// The type of story (feature, bug, chore).
    /// </summary>
    [JsonPropertyName("story_type")]
    public required string StoryType { get; init; }

    /// <summary>
    /// An array of CustomField value assertions for the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<StoryCustomField>? CustomFields { get; init; }

    /// <summary>
    /// An array of linked files attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_files")]
    public IReadOnlyList<LinkedFile>? LinkedFiles { get; init; }

    /// <summary>
    /// An array of IDs of Files attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_ids")]
    public IReadOnlyList<long>? FileIds { get; init; }

    /// <summary>
    /// The number of tasks on the story which are complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_tasks_completed")]
    public long? NumTasksCompleted { get; init; }

    /// <summary>
    /// The ID of the workflow the story belongs to.
    /// </summary>
    [JsonPropertyName("workflow_id")]
    public required long WorkflowId { get; init; }

    /// <summary>
    /// A manual override for the time/date the Story was completed.
    /// </summary>
    [JsonPropertyName("completed_at_override")]
    public required DateTimeOffset? CompletedAtOverride { get; init; }

    /// <summary>
    /// The time/date the Story was started.
    /// </summary>
    [JsonPropertyName("started_at")]
    public required DateTimeOffset? StartedAt { get; init; }

    /// <summary>
    /// The time/date the Story was completed.
    /// </summary>
    [JsonPropertyName("completed_at")]
    public required DateTimeOffset? CompletedAt { get; init; }

    /// <summary>
    /// The name of the story.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("global_id")]
    public required string GlobalId { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Story has been completed.
    /// </summary>
    [JsonPropertyName("completed")]
    public required bool Completed { get; init; }

    /// <summary>
    /// An array of comments attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comments")]
    public IReadOnlyList<StoryComment>? Comments { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Story is currently a blocker of another story.
    /// </summary>
    [JsonPropertyName("blocker")]
    public required bool Blocker { get; init; }

    /// <summary>
    /// An array of Git branches attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branches")]
    public IReadOnlyList<Branch>? Branches { get; init; }

    /// <summary>
    /// The ID of the epic the story belongs to.
    /// </summary>
    [JsonPropertyName("epic_id")]
    public required long? EpicId { get; init; }

    /// <summary>
    /// The ID of the story template used to create this story, or null if not created using a template.
    /// </summary>
    [JsonPropertyName("story_template_id")]
    public required Guid? StoryTemplateId { get; init; }

    /// <summary>
    /// An array of external links (strings) associated with a Story
    /// </summary>
    [JsonPropertyName("external_links")]
    public required IReadOnlyList<string> ExternalLinks { get; init; }

    /// <summary>
    /// The IDs of the iteration the story belongs to.
    /// </summary>
    [JsonPropertyName("previous_iteration_ids")]
    public required IReadOnlyList<long> PreviousIterationIds { get; init; }

    /// <summary>
    /// The ID of the Member that requested the story.
    /// </summary>
    [JsonPropertyName("requested_by_id")]
    public required Guid RequestedById { get; init; }

    /// <summary>
    /// The ID of the iteration the story belongs to.
    /// </summary>
    [JsonPropertyName("iteration_id")]
    public required long? IterationId { get; init; }

    /// <summary>
    /// The Story IDs of Sub-tasks attached to the Story
    /// Field only applicable when Sub-task feature is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sub_task_story_ids")]
    public IReadOnlyList<long>? SubTaskStoryIds { get; init; }

    /// <summary>
    /// An array of tasks connected to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasks")]
    public IReadOnlyList<TaskModel>? Tasks { get; init; }

    /// <summary>
    /// The formatted branch name for this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("formatted_vcs_branch_name")]
    public string? FormattedVcsBranchName { get; init; }

    /// <summary>
    /// An array of label ids attached to the story.
    /// </summary>
    [JsonPropertyName("label_ids")]
    public required IReadOnlyList<long> LabelIds { get; init; }

    /// <summary>
    /// A manual override for the time/date the Story was started.
    /// </summary>
    [JsonPropertyName("started_at_override")]
    public required DateTimeOffset? StartedAtOverride { get; init; }

    /// <summary>
    /// The ID of the group associated with the story.
    /// </summary>
    [JsonPropertyName("group_id")]
    public required Guid? GroupId { get; init; }

    /// <summary>
    /// The ID of the workflow state the story is currently in.
    /// </summary>
    [JsonPropertyName("workflow_state_id")]
    public required long WorkflowStateId { get; init; }

    /// <summary>
    /// The time/date the Story was updated.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// An array of Pull/Merge Requests attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pull_requests")]
    public IReadOnlyList<PullRequest>? PullRequests { get; init; }

    /// <summary>
    /// An array of Group IDs that have been mentioned in the Story description.
    /// </summary>
    [JsonPropertyName("group_mention_ids")]
    public required IReadOnlyList<Guid> GroupMentionIds { get; init; }

    /// <summary>
    /// An array of UUIDs for any Members listed as Followers.
    /// </summary>
    [JsonPropertyName("follower_ids")]
    public required IReadOnlyList<Guid> FollowerIds { get; init; }

    /// <summary>
    /// An array of UUIDs of the owners of this story.
    /// </summary>
    [JsonPropertyName("owner_ids")]
    public required IReadOnlyList<Guid> OwnerIds { get; init; }

    /// <summary>
    /// This field can be set to another unique ID. In the case that the Story has been imported from another tool, the ID in the other tool can be indicated here.
    /// </summary>
    [JsonPropertyName("external_id")]
    public required string? ExternalId { get; init; }

    /// <summary>
    /// The unique ID of the Story.
    /// </summary>
    [JsonPropertyName("id")]
    public required long Id { get; init; }

    /// <summary>
    /// The lead time (in seconds) of this story when complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lead_time")]
    public long? LeadTime { get; init; }

    /// <summary>
    /// The ID of the parent story to this story (making this story a sub-task).
    /// Field only applicable when Sub-task feature is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_story_id")]
    public long? ParentStoryId { get; init; }

    /// <summary>
    /// The numeric point estimate of the story. Can also be null, which means unestimated.
    /// </summary>
    [JsonPropertyName("estimate")]
    public required long? Estimate { get; init; }

    /// <summary>
    /// An array of commits attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commits")]
    public IReadOnlyList<Commit>? Commits { get; init; }

    /// <summary>
    /// An array of files attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("files")]
    public IReadOnlyList<UploadedFile>? Files { get; init; }

    /// <summary>
    /// A number representing the position of the story in relation to every other story in the current project.
    /// </summary>
    [JsonPropertyName("position")]
    public required long Position { get; init; }

    /// <summary>
    /// A true/false boolean indicating if the Story is currently blocked.
    /// </summary>
    [JsonPropertyName("blocked")]
    public required bool Blocked { get; init; }

    /// <summary>
    /// The ID of the project the story belongs to.
    /// </summary>
    [JsonPropertyName("project_id")]
    public required long? ProjectId { get; init; }

    /// <summary>
    /// An array of IDs of LinkedFiles attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linked_file_ids")]
    public IReadOnlyList<long>? LinkedFileIds { get; init; }

    /// <summary>
    /// The due date of the story.
    /// </summary>
    [JsonPropertyName("deadline")]
    public required DateTimeOffset? Deadline { get; init; }

    /// <summary>
    /// The stats object for Stories
    /// </summary>
    [JsonPropertyName("stats")]
    public required StoryStats Stats { get; init; }

    /// <summary>
    /// An array of IDs of Comments attached to the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comment_ids")]
    public IReadOnlyList<long>? CommentIds { get; init; }

    /// <summary>
    /// The cycle time (in seconds) of this story when complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cycle_time")]
    public long? CycleTime { get; init; }

    /// <summary>
    /// The time/date the Story was created.
    /// </summary>
    [JsonPropertyName("created_at")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// The time/date the Story was last changed workflow-state.
    /// </summary>
    [JsonPropertyName("moved_at")]
    public required DateTimeOffset? MovedAt { get; init; }
}
