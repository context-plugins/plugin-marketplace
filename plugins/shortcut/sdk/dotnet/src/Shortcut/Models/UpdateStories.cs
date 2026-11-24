using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Shortcut.Core.Validation.Attributes;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record UpdateStories
{
    /// <summary>
    /// If the Stories should be archived or not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    /// <summary>
    /// The Ids of the Stories you wish to update.
    /// </summary>
    [JsonPropertyName("story_ids")]
    [UniqueItems]
    public required IReadOnlyList<long> StoryIds { get; init; }

    /// <summary>
    /// The type of story (feature, bug, chore).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_type")]
    public StoryType? StoryType { get; init; }

    /// <summary>
    /// One of "first" or "last". This can be used to move the given story to the first or last position in the workflow state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("move_to")]
    public MoveTo? MoveTo { get; init; }

    /// <summary>
    /// The UUIDs of the new followers to be added.
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
    /// An array of External Links associated with this story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external_links")]
    public IReadOnlyList<string>? ExternalLinks { get; init; }

    /// <summary>
    /// The UUIDs of the followers to be removed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower_ids_remove")]
    [UniqueItems]
    public IReadOnlyList<Guid>? FollowerIdsRemove { get; init; }

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
    /// A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields_remove")]
    public IReadOnlyList<CustomFieldValueParams>? CustomFieldsRemove { get; init; }

    /// <summary>
    /// An array of labels to be added.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels_add")]
    public IReadOnlyList<CreateLabelParams>? LabelsAdd { get; init; }

    /// <summary>
    /// The Id of the Group the Stories should belong to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_id")]
    public Guid? GroupId { get; init; }

    /// <summary>
    /// The ID of the workflow state to put the stories in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workflow_state_id")]
    public long? WorkflowStateId { get; init; }

    /// <summary>
    /// The ID of the story that the stories are to be moved before.
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
    /// The ID of the story that the stories are to be moved below.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("after_id")]
    public long? AfterId { get; init; }

    /// <summary>
    /// The UUIDs of the owners to be removed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids_remove")]
    [UniqueItems]
    public IReadOnlyList<Guid>? OwnerIdsRemove { get; init; }

    /// <summary>
    /// A map specifying a CustomField ID and CustomFieldEnumValue ID that represents an assertion of some value for a CustomField.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("custom_fields_add")]
    public IReadOnlyList<CustomFieldValueParams>? CustomFieldsAdd { get; init; }

    /// <summary>
    /// The ID of the Project the Stories should belong to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_id")]
    public long? ProjectId { get; init; }

    /// <summary>
    /// An array of labels to be removed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels_remove")]
    public IReadOnlyList<CreateLabelParams>? LabelsRemove { get; init; }

    /// <summary>
    /// The due date of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deadline")]
    public DateTimeOffset? Deadline { get; init; }

    /// <summary>
    /// The UUIDs of the new owners to be added.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner_ids_add")]
    [UniqueItems]
    public IReadOnlyList<Guid>? OwnerIdsAdd { get; init; }
}
