using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation.Attributes;

namespace CompSniper.Models;

public record Weight
{
    [JsonPropertyName("value")]
    [Maximum(150.0)]
    [ExclusiveMinimum(0)]
    public required double Value { get; init; }

    [JsonPropertyName("unit")]
    public string Unit { get; } = "lb";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
