using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Core.Validation.Attributes;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

public record FindAllEntitySearchRequest
{
    /// <summary>
    /// Type of entity to search for.
    /// </summary>
    [JsonPropertyName("entity_type")]
    public required EntityType EntityType { get; init; }

    /// <summary>
    /// Natural language description of target entities.
    /// </summary>
    [JsonPropertyName("objective")]
    public required string Objective { get; init; }

    /// <summary>
    /// Maximum number of entities to return. Must be between 5 and 1000 (inclusive). May return fewer results. Defaults to 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("match_limit")]
    [Minimum(5)]
    [Maximum(1000)]
    public int? MatchLimit { get; init; } = 100;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
