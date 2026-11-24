using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

/// <summary>
/// Exactly one member is set.
/// </summary>
public record IndexingRuleValueUpdate
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Probabilistic")]
    public ProbabilisticRuleValueUpdate? Probabilistic { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
