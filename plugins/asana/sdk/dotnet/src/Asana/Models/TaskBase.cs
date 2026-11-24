using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;
using Asana.Models.Enums;

namespace Asana.Models;

public record TaskBase
{
    /// <summary>
    /// Globally unique identifier of the resource, as a string.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gid")]
    public string? Gid { get; init; }

    /// <summary>
    /// The base type of this resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_type")]
    public string? ResourceType { get; init; }

    /// <summary>
    /// The name of the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
    /// The resource_subtype <c>milestone</c> represent a single moment in time. This means tasks with this subtype cannot have a start_date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource_subtype")]
    public ResourceSubtype1AsanaProjectsApi? ResourceSubtype { get; init; }

    /// <summary>
    /// *Conditional* Reflects the approval status of this task. This field is kept in sync with <c>completed</c>, meaning <c>pending</c> translates to false while <c>approved</c>, <c>rejected</c>, and <c>changes_requested</c> translate to true. If you set completed to true, this field will be set to <c>approved</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approval_status")]
    public ApprovalStatus? ApprovalStatus { get; init; }

    /// <summary>
    /// *Deprecated* Scheduling status of this task for the user it is assigned to. This field can only be set if the assignee is non-null. Setting this field to "inbox" or "upcoming" inserts it at the top of the section, while the other options will insert at the bottom.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assignee_status")]
    public AssigneeStatus? AssigneeStatus { get; init; }

    /// <summary>
    /// True if the task is currently marked complete, false if not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed")]
    public bool? Completed { get; init; }

    /// <summary>
    /// The time at which this task was completed, or null if the task is incomplete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at")]
    public DateTimeOffset? CompletedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_by")]
    public UserCompact? CompletedBy { get; init; }

    /// <summary>
    /// The time at which this resource was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. Array of resources referencing tasks that this task depends on. The objects contain only the gid of the dependency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dependencies")]
    public IReadOnlyList<AsanaResource>? Dependencies { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. Array of resources referencing tasks that depend on this task. The objects contain only the ID of the dependent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dependents")]
    public IReadOnlyList<AsanaResource>? Dependents { get; init; }

    /// <summary>
    /// The UTC date and time on which this task is due, or null if the task has no due time. This takes an ISO 8601 date string in UTC and should not be used together with <c>due_on</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("due_at")]
    public DateTimeOffset? DueAt { get; init; }

    /// <summary>
    /// The localized date on which this task is due, or null if the task has no due date. This takes a date with <c>YYYY-MM-DD</c> format and should not be used together with <c>due_at</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("due_on")]
    public DateTimeOffset? DueOn { get; init; }

    /// <summary>
    /// *OAuth Required*. *Conditional*. This field is returned only if external values are set or included by using [Opt In] (/docs/input-output-options).
    /// The external field allows you to store app-specific metadata on tasks, including a gid that can be used to retrieve tasks and a data blob that can store app-specific character strings. Note that you will need to authenticate with Oauth to access or modify this data. Once an external gid is set, you can use the notation <c>external:custom_gid</c> to reference your object anywhere in the API where you may use the original object gid. See the page on Custom External Data for more details.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("external")]
    public External? External { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. The notes of the text with formatting as HTML.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html_notes")]
    public string? HtmlNotes { get; init; }

    /// <summary>
    /// *Deprecated - please use liked instead* True if the task is hearted by the authorized user, false if not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hearted")]
    public bool? Hearted { get; init; }

    /// <summary>
    /// *Deprecated - please use likes instead* Array of likes for users who have hearted this task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hearts")]
    public IReadOnlyList<Like>? Hearts { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. In some contexts tasks can be rendered as a visual separator; for instance, subtasks can appear similar to <see href="/docs/asana-sections">sections</see> without being true <c>section</c> objects. If a <c>task</c> object is rendered this way in any context it will have the property <c>is_rendered_as_separator</c> set to <c>true</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_rendered_as_separator")]
    public bool? IsRenderedAsSeparator { get; init; }

    /// <summary>
    /// True if the task is liked by the authorized user, false if not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("liked")]
    public bool? Liked { get; init; }

    /// <summary>
    /// Array of likes for users who have liked this task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("likes")]
    public IReadOnlyList<Like>? Likes { get; init; }

    /// <summary>
    /// *Create-only*. Array of projects this task is associated with and the section it is in. At task creation time, this array can be used to add the task to specific sections. After task creation, these associations can be modified using the <c>addProject</c> and <c>removeProject</c> endpoints. Note that over time, more types of memberships may be added to this property.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memberships")]
    public IReadOnlyList<Membership>? Memberships { get; init; }

    /// <summary>
    /// The time at which this task was last modified.
    /// <para>
    /// *Note: This does not currently reflect any changes in
    /// associations such as projects or comments that may have been
    /// added or removed from the task.*
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modified_at")]
    public DateTimeOffset? ModifiedAt { get; init; }

    /// <summary>
    /// Free-form textual information associated with the task (i.e. its description).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public string? Notes { get; init; }

    /// <summary>
    /// *Deprecated - please use likes instead* The number of users who have hearted this task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_hearts")]
    public int? NumHearts { get; init; }

    /// <summary>
    /// The number of users who have liked this task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_likes")]
    public int? NumLikes { get; init; }

    /// <summary>
    /// <see href="/docs/input-output-options">Opt In</see>. The number of subtasks on this task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_subtasks")]
    public int? NumSubtasks { get; init; }

    /// <summary>
    /// Date and time on which work begins for the task, or null if the task has no start time. This takes an ISO 8601 date string in UTC and should not be used together with <c>start_on</c>.
    /// *Note: <c>due_at</c> must be present in the request when setting or unsetting the <c>start_at</c> parameter.*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_at")]
    public DateTimeOffset? StartAt { get; init; }

    /// <summary>
    /// The day on which work begins for the task , or null if the task has no start date. This takes a date with <c>YYYY-MM-DD</c> format and should not be used together with <c>start_at</c>.
    /// *Note: <c>due_on</c> or <c>due_at</c> must be present in the request when setting or unsetting the <c>start_on</c> parameter.*
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_on")]
    public DateTimeOffset? StartOn { get; init; }

    /// <summary>
    /// This value represents the sum of all the Time Tracking entries in the Actual Time field on a given Task. It is represented as a nullable long value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actual_time_minutes")]
    public double? ActualTimeMinutes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
