using System.Text.Json.Serialization;
using S1.Core.Models;

namespace S1.Models;

public record CrawlResponse
{
    [JsonPropertyName("crawlParameters")]
    public required CrawlParameters CrawlParameters { get; init; }

    [JsonPropertyName("results")]
    public required CrawlResult Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
