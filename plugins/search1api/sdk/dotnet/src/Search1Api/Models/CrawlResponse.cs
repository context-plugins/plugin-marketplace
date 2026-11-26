using System.Text.Json.Serialization;
using Search1Api.Core.Models;

namespace Search1Api.Models;

public record CrawlResponse
{
    [JsonPropertyName("crawlParameters")]
    public required CrawlParameters CrawlParameters { get; init; }

    [JsonPropertyName("results")]
    public required CrawlResult Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
