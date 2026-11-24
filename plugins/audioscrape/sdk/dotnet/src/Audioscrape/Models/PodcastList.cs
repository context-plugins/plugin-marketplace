using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record PodcastList
{
    [JsonPropertyName("limit")]
    public required long Limit { get; init; }

    [JsonPropertyName("offset")]
    public required long Offset { get; init; }

    [JsonPropertyName("podcasts")]
    public required IReadOnlyList<PodcastSummary> Podcasts { get; init; }

    [JsonPropertyName("total")]
    public required long Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
