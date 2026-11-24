using System.Collections.Generic;
using System.Text.Json.Serialization;
using Audioscrape.Core.Models;

namespace Audioscrape.Models;

public record EpisodeList
{
    [JsonPropertyName("episodes")]
    public required IReadOnlyList<EpisodeSummary> Episodes { get; init; }

    [JsonPropertyName("limit")]
    public required long Limit { get; init; }

    [JsonPropertyName("offset")]
    public required long Offset { get; init; }

    [JsonPropertyName("total")]
    public required long Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
