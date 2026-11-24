using System.Text.Json.Serialization;
using DevCycle.Core.Models;

namespace DevCycle.Models;

public record VariationResult
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("numerator")]
    public required double Numerator { get; init; }

    [JsonPropertyName("denominator")]
    public required double Denominator { get; init; }

    [JsonPropertyName("rate")]
    public required double Rate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("avgValue")]
    public double? AvgValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalValue")]
    public double? TotalValue { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stdev")]
    public double? Stdev { get; init; }

    [JsonPropertyName("percentDifference")]
    public required double? PercentDifference { get; init; }

    [JsonPropertyName("chanceToBeatControl")]
    public required double? ChanceToBeatControl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
