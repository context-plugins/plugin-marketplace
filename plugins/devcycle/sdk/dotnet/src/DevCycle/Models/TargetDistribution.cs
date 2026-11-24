using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Core.Validation.Attributes;

namespace DevCycle.Models;

public record TargetDistribution
{
    /// <summary>
    /// Distribution percentage for the variation
    /// </summary>
    [JsonPropertyName("percentage")]
    [Minimum(0.0)]
    [Maximum(1.0)]
    public required double Percentage { get; init; }

    /// <summary>
    /// Variation ID or key from <c>feature.variations</c>
    /// </summary>
    [JsonPropertyName("_variation")]
    public required string Variation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
