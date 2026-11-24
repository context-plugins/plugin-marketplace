using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// A progress update for a task run.
/// </summary>
public record TaskRunProgressStatsEvent
{
    /// <summary>
    /// Event type; always 'task_run.progress_stats'.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "task_run.progress_stats";

    /// <summary>
    /// Source stats describing progress so far.
    /// </summary>
    [JsonPropertyName("source_stats")]
    public required TaskRunSourceStats2 SourceStats { get; init; }

    /// <summary>
    /// Completion percentage of the task run. Ranges from 0 to 100 where 0 indicates no progress and 100 indicates completion.
    /// </summary>
    [JsonPropertyName("progress_meter")]
    public required double ProgressMeter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
