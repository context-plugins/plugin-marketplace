using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record TrendingResponse
{
    [JsonPropertyName("trending_entities")]
    public required IReadOnlyList<TrendingEntity> TrendingEntities { get; init; }

    [JsonPropertyName("trending_searches")]
    public required IReadOnlyList<TrendingSearch> TrendingSearches { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
