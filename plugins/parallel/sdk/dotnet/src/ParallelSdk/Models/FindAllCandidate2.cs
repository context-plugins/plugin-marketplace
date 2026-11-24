using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// The candidate whose match status has been updated.
/// </summary>
public record FindAllCandidate2
{
    /// <summary>
    /// ID of the candidate.
    /// </summary>
    [JsonPropertyName("candidate_id")]
    public required string CandidateId { get; init; }

    /// <summary>
    /// Name of the candidate.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// URL that provides context or details of the entity for disambiguation.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// Brief description of the entity that can help answer whether entity satisfies the query.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public Description? Description { get; init; }

    /// <summary>
    /// Status of the candidate. One of generated, matched, unmatched, discarded.
    /// </summary>
    [JsonPropertyName("match_status")]
    public required MatchStatus MatchStatus { get; init; }

    /// <summary>
    /// Results of the match condition evaluations for this candidate. This object contains the structured output that determines whether the candidate matches the overall FindAll objective.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("output")]
    public OutputParallelAiFindAllApi? Output { get; init; }

    /// <summary>
    /// List of FieldBasis objects supporting the output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basis")]
    public Basis? Basis { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
