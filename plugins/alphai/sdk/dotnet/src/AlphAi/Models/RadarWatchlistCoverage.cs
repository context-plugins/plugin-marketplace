using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record RadarWatchlistCoverage
{
    [JsonPropertyName("no_recent_news")]
    public required IReadOnlyList<string> NoRecentNews { get; init; }

    [JsonPropertyName("not_in_snapshot")]
    public required IReadOnlyList<string> NotInSnapshot { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
