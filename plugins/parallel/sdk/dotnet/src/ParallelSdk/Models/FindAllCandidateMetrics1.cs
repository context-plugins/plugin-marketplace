using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Candidate metrics for the FindAll run.
/// </summary>
public record FindAllCandidateMetrics1
{
    /// <summary>
    /// Number of candidates that were selected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generated_candidates_count")]
    public int? GeneratedCandidatesCount { get; init; } = 0;

    /// <summary>
    /// Number of candidates that evaluated to matched.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matched_candidates_count")]
    public int? MatchedCandidatesCount { get; init; } = 0;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
