using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Configuration settings for a <c>snapshot</c> monitor.
/// </summary>
public record MonitorSnapshotResponseSettings
{
    /// <summary>
    /// ID of the task run used as the monitoring baseline.
    /// </summary>
    [JsonPropertyName("task_run_id")]
    public required string TaskRunId { get; init; }

    /// <summary>
    /// The original task input from the baseline task run that this monitor tracks.
    /// </summary>
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    /// <summary>
    /// JSON schema derived from the baseline task run that constrains and structures the event output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output_schema")]
    public OutputSchemaModel? OutputSchema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
