using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Status object for the FindAll run.
/// </summary>
public record FindAllRunStatus2
{
    /// <summary>
    /// Status of the FindAll run.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    /// <summary>
    /// Whether the FindAll run is active
    /// </summary>
    [JsonPropertyName("is_active")]
    public required bool IsActive { get; init; }

    /// <summary>
    /// Candidate metrics for the FindAll run.
    /// </summary>
    [JsonPropertyName("metrics")]
    public required FindAllCandidateMetrics1 Metrics { get; init; }

    /// <summary>
    /// Reason for termination when FindAll run is in terminal status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("termination_reason")]
    public TerminationReason1? TerminationReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
