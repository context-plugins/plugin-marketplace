using System.Text.Json.Serialization;
using S1.Core.Models;
using S1.Core.Validation.Attributes;

namespace S1.Models;

public record Summary
{
    [JsonPropertyName("total")]
    [Minimum(0)]
    public required int Total { get; init; }

    [JsonPropertyName("successful")]
    [Minimum(0)]
    public required int Successful { get; init; }

    [JsonPropertyName("failed")]
    [Minimum(0)]
    public required int Failed { get; init; }

    [JsonPropertyName("totalCost")]
    [Minimum(0)]
    public required int TotalCost { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
