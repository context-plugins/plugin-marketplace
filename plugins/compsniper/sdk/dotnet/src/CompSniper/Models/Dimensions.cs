using System.Text.Json.Serialization;
using CompSniper.Core.Validation.Attributes;

namespace CompSniper.Models;

public record Dimensions
{
    [JsonPropertyName("length")]
    [Maximum(120.0)]
    [ExclusiveMinimum(0)]
    public required double Length { get; init; }

    [JsonPropertyName("width")]
    [Maximum(120.0)]
    [ExclusiveMinimum(0)]
    public required double Width { get; init; }

    [JsonPropertyName("height")]
    [Maximum(120.0)]
    [ExclusiveMinimum(0)]
    public required double Height { get; init; }

    [JsonPropertyName("unit")]
    public string Unit { get; } = "in";
}
