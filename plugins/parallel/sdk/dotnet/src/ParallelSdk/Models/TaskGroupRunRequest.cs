using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Request to initiate new task runs in a task group.
/// </summary>
public record TaskGroupRunRequest
{
    /// <summary>
    /// Default task spec to use for the runs. If task_spec is specified in a run, it overrides this default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_task_spec")]
    public DefaultTaskSpec? DefaultTaskSpec { get; init; }

    /// <summary>
    /// List of task runs to execute. Up to 1,000 runs can be specified per request. If you'd like to add more runs, split them across multiple TaskGroup POST requests.
    /// </summary>
    [JsonPropertyName("inputs")]
    public required IReadOnlyList<TaskRunInput> Inputs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
