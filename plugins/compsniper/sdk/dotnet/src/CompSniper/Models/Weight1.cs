using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation.Attributes;

namespace CompSniper.Models;

public record Weight1
{
    [JsonPropertyName("value")]
    [Maximum(2400.0)]
    [ExclusiveMinimum(0)]
    public required double Value { get; init; }

    [JsonPropertyName("unit")]
    public string Unit { get; } = "oz";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
