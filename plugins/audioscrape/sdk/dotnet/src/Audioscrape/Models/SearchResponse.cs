using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

/// <summary>
/// API v1 Search Response - clean, stable structure
/// </summary>
public record SearchResponse
{
    [JsonPropertyName("meta")]
    public required SearchMeta Meta { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<SearchResult> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
