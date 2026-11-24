using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Shortcut.Core.Validation.Attributes;

namespace Shortcut.Models;

/// <summary>
/// Updated attributes for the template to populate.
/// </summary>
public record UpdateStoryContents
{
    /// <summary>
    /// The description of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// An array of labels to be populated by the template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<CreateLabelParams>? Labels { get; init; }

    /// <summary>
    /// The type of story (feature, bug, chore).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_type")]
    public string? StoryType { get; init; }

    /// <summary>
    /// An array of maps specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields")]
    public IReadOnlyList<CustomFieldValueParams>? CustomFields { get; init; }

    /// <summary>
    /// An array of the attached file IDs to be populated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_ids")]
    [UniqueItems]
    public IReadOnlyList<long>? FileIds { get; init; }

    /// <summary>
    /// The name of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The ID of the epic the to be populated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("epic_id")]
    public long? EpicId { get; init; }

    /// <summary>
    /// An array of external links to be populated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_links")]
    public IReadOnlyList<string>? ExternalLinks { get; init; }

    /// <summary>
    /// An array of maps specifying the sub-tasks to create and link to the story.
    /// Field only applicable when Sub-task feature is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sub_tasks")]
    public IReadOnlyList<CreateSubTaskParams>? SubTasks { get; init; }

    /// <summary>
    /// The ID of the iteration the to be populated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("iteration_id")]
    public long? IterationId { get; init; }

    /// <summary>
    /// An array of tasks to be populated by the template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tasks")]
    public IReadOnlyList<BaseTaskParams>? Tasks { get; init; }

    /// <summary>
    /// The ID of the group to be populated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_id")]
    public Guid? GroupId { get; init; }

    /// <summary>
    /// The ID of the workflow state to be populated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_state_id")]
    public long? WorkflowStateId { get; init; }

    /// <summary>
    /// An array of UUIDs for any Members listed as Followers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower_ids")]
    public IReadOnlyList<Guid>? FollowerIds { get; init; }

    /// <summary>
    /// An array of UUIDs of the owners of this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids")]
    public IReadOnlyList<Guid>? OwnerIds { get; init; }

    /// <summary>
    /// The numeric point estimate to be populated.
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
    /// An array of the linked file IDs to be populated.
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
