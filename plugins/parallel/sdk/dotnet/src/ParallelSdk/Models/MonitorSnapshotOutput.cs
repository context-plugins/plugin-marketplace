using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Runtime output state for a <c>snapshot</c> monitor.
/// </summary>
public record MonitorSnapshotOutput
{
    /// <summary>
    /// Task run output from the most recent completed execution of this snapshot monitor — same structure as the output of the original task run the monitor was created from. <c>null</c> until the first run completes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latest_snapshot")]
    public LatestSnapshot? LatestSnapshot { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
