using System.Collections.Generic;
using System.Text.Json.Serialization;
using S1.Core.Models;

namespace S1.Models;

public record TrendingResponse
{
    [JsonPropertyName("trendingParameters")]
    public required TrendingRequest TrendingParameters { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<TrendingResult> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
