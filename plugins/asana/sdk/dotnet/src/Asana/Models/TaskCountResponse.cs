using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

/// <summary>
/// A response object returned from the task count endpoint.
/// </summary>
public record TaskCountResponse
{
    /// <summary>
    /// The number of tasks in a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_tasks")]
    public int? NumTasks { get; init; }

    /// <summary>
    /// The number of incomplete tasks in a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_incomplete_tasks")]
    public int? NumIncompleteTasks { get; init; }

    /// <summary>
    /// The number of completed tasks in a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_completed_tasks")]
    public int? NumCompletedTasks { get; init; }

    /// <summary>
    /// The number of milestones in a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_milestones")]
    public int? NumMilestones { get; init; }

    /// <summary>
    /// The number of incomplete milestones in a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_incomplete_milestones")]
    public int? NumIncompleteMilestones { get; init; }

    /// <summary>
    /// The number of completed milestones in a project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("num_completed_milestones")]
    public int? NumCompletedMilestones { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
