using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Response model for FindAll ingest.
/// </summary>
public record FindAllSchema
{
    /// <summary>
    /// Natural language objective of the FindAll run.
    /// </summary>
    [JsonPropertyName("objective")]
    public required string Objective { get; init; }

    /// <summary>
    /// Type of the entity for the FindAll run.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required string EntityType { get; init; }

    /// <summary>
    /// List of match conditions for the FindAll run.
    /// </summary>
    [JsonPropertyName("match_conditions")]
    public required IReadOnlyList<MatchCondition> MatchConditions { get; init; }

    /// <summary>
    /// List of enrichment inputs for the FindAll run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enrichments")]
    public Enrichments? Enrichments { get; init; }

    /// <summary>
    /// The generator of the FindAll run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generator")]
    public Generator? Generator { get; init; } = Generator.Core;

    /// <summary>
    /// Max number of candidates to evaluate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("match_limit")]
    public MatchLimit? MatchLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
