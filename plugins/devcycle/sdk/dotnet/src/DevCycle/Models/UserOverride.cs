using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record UserOverride
{
    [JsonPropertyName("_feature")]
    public required string Feature { get; init; }

    [JsonPropertyName("featureName")]
    public required string FeatureName { get; init; }

    [JsonPropertyName("_environment")]
    public required string Environment { get; init; }

    [JsonPropertyName("environmentName")]
    public required string EnvironmentName { get; init; }

    [JsonPropertyName("_variation")]
    public required string Variation { get; init; }

    [JsonPropertyName("variationName")]
    public required string VariationName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
