using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Match condition model for FindAll ingest.
/// </summary>
public record MatchCondition
{
    /// <summary>
    /// Name of the match condition.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Detailed description of the match condition. Include as much specific information as possible to help improve the quality and accuracy of Find All run results.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
