using System.Text.Json.Serialization;

namespace Shortcut.Models;

/// <summary>
/// The changes that have occurred as a result of the action.
/// </summary>
public record HistoryChangesStory
{
    /// <summary>
    /// A timestamp that represents the Story's deadline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public StoryHistoryChangeOldNewStr? Description { get; init; }

    /// <summary>
    /// True if the Story has archived, otherwise false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public StoryHistoryChangeOldNewBool? Archived { get; init; }

    /// <summary>
    /// True if the Story has archived, otherwise false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started")]
    public StoryHistoryChangeOldNewBool? Started { get; init; }

    /// <summary>
    /// Task IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("task_ids")]
    public StoryHistoryChangeAddsRemovesInt? TaskIds { get; init; }

    /// <summary>
    /// Custom Field Enum Value IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mention_ids")]
    public StoryHistoryChangeAddsRemovesUuid? MentionIds { get; init; }

    /// <summary>
    /// A timestamp that represents the Story's deadline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_type")]
    public StoryHistoryChangeOldNewStr? StoryType { get; init; }

    /// <summary>
    /// A timestamp that represents the Story's deadline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public StoryHistoryChangeOldNewStr? Name { get; init; }

    /// <summary>
    /// True if the Story has archived, otherwise false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed")]
    public StoryHistoryChangeOldNewBool? Completed { get; init; }

    /// <summary>
    /// True if the Story has archived, otherwise false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocker")]
    public StoryHistoryChangeOldNewBool? Blocker { get; init; }

    /// <summary>
    /// The estimate value for the Story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epic_id")]
    public StoryHistoryChangeOldNewInt? EpicId { get; init; }

    /// <summary>
    /// Task IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("branch_ids")]
    public StoryHistoryChangeAddsRemovesInt? BranchIds { get; init; }

    /// <summary>
    /// Task IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commit_ids")]
    public StoryHistoryChangeAddsRemovesInt? CommitIds { get; init; }

    /// <summary>
    /// The Team ID for the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requested_by_id")]
    public StoryHistoryChangeOldNewUuid? RequestedById { get; init; }

    /// <summary>
    /// The estimate value for the Story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iteration_id")]
    public StoryHistoryChangeOldNewInt? IterationId { get; init; }

    /// <summary>
    /// Task IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label_ids")]
    public StoryHistoryChangeAddsRemovesInt? LabelIds { get; init; }

    /// <summary>
    /// The Team ID for the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_id")]
    public StoryHistoryChangeOldNewUuid? GroupId { get; init; }

    /// <summary>
    /// The estimate value for the Story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_state_id")]
    public StoryHistoryChangeOldNewInt? WorkflowStateId { get; init; }

    /// <summary>
    /// Task IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("object_story_link_ids")]
    public StoryHistoryChangeAddsRemovesInt? ObjectStoryLinkIds { get; init; }

    /// <summary>
    /// Custom Field Enum Value IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower_ids")]
    public StoryHistoryChangeAddsRemovesUuid? FollowerIds { get; init; }

    /// <summary>
    /// Custom Field Enum Value IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    public StoryHistoryChangeAddsRemovesUuid? OwnerIds { get; init; }

    /// <summary>
    /// Custom Field Enum Value IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_field_value_ids")]
    public StoryHistoryChangeAddsRemovesUuid? CustomFieldValueIds { get; init; }

    /// <summary>
    /// The estimate value for the Story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent_story_id")]
    public StoryHistoryChangeOldNewInt? ParentStoryId { get; init; }

    /// <summary>
    /// The estimate value for the Story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimate")]
    public StoryHistoryChangeOldNewInt? Estimate { get; init; }

    /// <summary>
    /// Task IDs that have been added or removed from the Story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject_story_link_ids")]
    public StoryHistoryChangeAddsRemovesInt? SubjectStoryLinkIds { get; init; }

    /// <summary>
    /// True if the Story has archived, otherwise false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blocked")]
    public StoryHistoryChangeOldNewBool? Blocked { get; init; }

    /// <summary>
    /// The estimate value for the Story
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_id")]
    public StoryHistoryChangeOldNewInt? ProjectId { get; init; }

    /// <summary>
    /// A timestamp that represents the Story's deadline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deadline")]
    public StoryHistoryChangeOldNewStr? Deadline { get; init; }
}
