using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Status of the group.
/// </summary>
public record TaskGroupStatus3
{
    /// <summary>
    /// Number of task runs in the group.
    /// </summary>
    [JsonPropertyName("num_task_runs")]
    public required int NumTaskRuns { get; init; }

    /// <summary>
    /// Number of task runs with each status.
    /// </summary>
    [JsonPropertyName("task_run_status_counts")]
    public required IReadOnlyDictionary<string, int> TaskRunStatusCounts { get; init; }

    /// <summary>
    /// True if at least one run in the group is currently active, i.e. status is one of {'cancelling', 'queued', 'running'}.
    /// </summary>
    [JsonPropertyName("is_active")]
    public required bool IsActive { get; init; }

    /// <summary>
    /// Human-readable status message for the group.
    /// </summary>
    [JsonPropertyName("status_message")]
    public required StatusMessage StatusMessage { get; init; }

    /// <summary>
    /// Timestamp of the last status update to the group, as an RFC 3339 string.
    /// </summary>
    [JsonPropertyName("modified_at")]
    public required ModifiedAt ModifiedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
