using System.Collections.Generic;
using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record GoalRequest
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
    /// The name of the goal.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The notes of the goal with formatting as HTML.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("html_notes")]
    public string? HtmlNotes { get; init; }

    /// <summary>
    /// Free-form textual information associated with the goal (i.e. its description).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notes")]
    public string? Notes { get; init; }

    /// <summary>
    /// The localized day on which this goal is due. This takes a date with format <c>YYYY-MM-DD</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("due_on")]
    public string? DueOn { get; init; }

    /// <summary>
    /// The day on which work for this goal begins, or null if the goal has no start date. This takes a date with <c>YYYY-MM-DD</c> format, and cannot be set unless there is an accompanying due date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("start_on")]
    public string? StartOn { get; init; }

    /// <summary>
    /// The current status of this goal. When the goal is open, its status can be <c>green</c>, <c>yellow</c>, and <c>red</c> to reflect "On Track", "At Risk", and "Off Track", respectively. When the goal is closed, the value can be <c>missed</c>, <c>achieved</c>, <c>partial</c>, or <c>dropped</c>.
    /// *Note* you can only write to this property if <c>metric</c> is set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// *Conditional*. This property is only present when the <c>workspace</c> provided is an organization. Whether the goal belongs to the <c>workspace</c> (and is listed as part of the workspace’s goals) or not. If it isn’t a workspace-level goal, it is a team-level goal, and is associated with the goal’s team.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_workspace_level")]
    public bool? IsWorkspaceLevel { get; init; }

    /// <summary>
    /// True if the goal is liked by the authorized user, false if not.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("liked")]
    public bool? Liked { get; init; }

    /// <summary>
    /// *Conditional*. This property is only present when the <c>workspace</c> provided is an organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team")]
    public string? Team { get; init; }

    /// <summary>
    /// The <c>gid</c> of a workspace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workspace")]
    public string? Workspace { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("followers")]
    public IReadOnlyList<string>? Followers { get; init; }

    /// <summary>
    /// The <c>gid</c> of a time period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("time_period")]
    public string? TimePeriod { get; init; }

    /// <summary>
    /// The <c>gid</c> of a user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public string? Owner { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
