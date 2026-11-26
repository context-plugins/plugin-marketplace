using System.Text.Json.Serialization;
using Search1Api.Core.Models;
using Search1Api.Core.Validation.Attributes;

namespace Search1Api.Models;

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
