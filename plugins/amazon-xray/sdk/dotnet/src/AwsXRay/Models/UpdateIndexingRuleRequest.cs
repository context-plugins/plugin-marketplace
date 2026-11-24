using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record UpdateIndexingRuleRequest
{
    /// <summary>
    /// Name of the indexing rule to be updated.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonPropertyName("Rule")]
    public required IndexingRuleValueUpdate Rule { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
