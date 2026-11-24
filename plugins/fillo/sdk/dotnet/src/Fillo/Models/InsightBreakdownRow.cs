using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record InsightBreakdownRow
{
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonPropertyName("count")]
    public required int Count { get; init; }

    [JsonPropertyName("pct")]
    public required double Pct { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
