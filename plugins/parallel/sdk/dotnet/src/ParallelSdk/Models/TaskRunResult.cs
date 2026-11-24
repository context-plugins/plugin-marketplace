using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.OneOf;

namespace ParallelSdk.Models;

/// <summary>
/// Result of a task run.
/// </summary>
public record TaskRunResult
{
    /// <summary>
    /// Task run object with status 'completed'.
    /// </summary>
    [JsonPropertyName("run")]
    public required TaskRun1 Run { get; init; }

    /// <summary>
    /// Output from the task conforming to the output schema.
    /// </summary>
    [JsonPropertyName("output")]
    public required OutputParallelAiTasksApi Output { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
