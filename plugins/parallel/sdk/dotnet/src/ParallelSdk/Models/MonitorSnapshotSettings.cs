using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Type-specific settings for a <c>snapshot</c> monitor.
/// </summary>
public record MonitorSnapshotSettings
{
    /// <summary>
    /// Task run ID whose output becomes the data and schema for the monitor.
    /// </summary>
    [JsonPropertyName("task_run_id")]
    public required string TaskRunId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
