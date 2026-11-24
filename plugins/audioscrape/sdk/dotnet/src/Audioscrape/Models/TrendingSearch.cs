using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record TrendingSearch
{
    [JsonPropertyName("query")]
    public required string Query { get; init; }

    [JsonPropertyName("search_count")]
    public required long SearchCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
